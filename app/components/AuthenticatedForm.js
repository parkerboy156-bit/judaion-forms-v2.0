'use client'

import { useEffect, useState, useRef } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import FormShell from './FormShell'
import ConfirmScreen from './ConfirmScreen'

export default function AuthenticatedForm({ tier, formDef }) {
  const [user, setUser]           = useState(null)
  const [initialStep, setInitialStep] = useState(null)
  const [initialData, setInitialData] = useState(null)
  const [screen, setScreen]       = useState('form')
  const [loading, setLoading]     = useState(true)
  const [fadingOut, setFadingOut] = useState(false)
  const router  = useRouter()
  const supabase = createClient()

  // Load user and saved progress on mount
  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUser(user)

      const { data } = await supabase
        .from('form_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('tier', tier)
        .single()

      if (data) {
        setInitialStep(data.current_step)
        setInitialData(data.form_data)
      } else {
        setInitialStep(0)
        setInitialData({})
      }

      setFadingOut(true)
      setTimeout(() => setLoading(false), 600)
    }
    load()
  }, [])

  // Called by FormShell after every section advance
  async function handleSaveProgress(currentStep, formData) {
    if (!user) return

    await supabase
      .from('form_progress')
      .upsert({
        user_id:      user.id,
        tier,
        current_step: currentStep,
        form_data:    formData,
        completed:    false,
        updated_at:   new Date().toISOString(),
      }, { onConflict: 'user_id,tier' })
  }

  // Called by FormShell on final submission
  async function handleMarkComplete(formData) {
    if (!user) return

    await supabase
      .from('form_progress')
      .upsert({
        user_id:      user.id,
        tier,
        current_step: formDef.sections.length - 1,
        form_data:    formData,
        completed:    true,
        updated_at:   new Date().toISOString(),
      }, { onConflict: 'user_id,tier' })
  }

  function goHome() {
    router.push('/dashboard')
  }

if (loading) {
    return (
      <div className={`loading-screen${fadingOut ? ' fade-out' : ''}`}>
        <div className="loading-text">Loading your progress</div>
      </div>
    )
  }

  if (screen === 'confirm') {
    return <ConfirmScreen onHome={goHome} />
  }

  return (
    <FormShell
      tier={tier}
      formDef={formDef}
      initialStep={initialStep}
      initialData={initialData}
      onHome={goHome}
      onSaveProgress={handleSaveProgress}
      onMarkComplete={handleMarkComplete}
      onSubmitSuccess={() => setScreen('confirm')}
    />
  )
}
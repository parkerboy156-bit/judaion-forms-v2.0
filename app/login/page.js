'use client'

import { useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [mode, setMode]       = useState('login')   // 'login' or 'signup'
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleSubmit() {
    setLoading(true)
    setError('')

    let result

    if (mode === 'signup') {
      result = await supabase.auth.signUp({ email, password })
      if (!result.error) {
        router.push('/dashboard')
        setLoading(false)
        return
      }
    } else {
      result = await supabase.auth.signInWithPassword({ email, password })
    }

    if (result.error) {
      setError(result.error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div id="landing" className="screen active" style={{ justifyContent: 'center' }}>
      <div className="landing-wordmark">JUDAION Studios | Client Portal</div>
      <div className="landing-title" style={{ fontSize: 'clamp(48px, 8vw, 96px)', marginBottom: '8px' }}>
        {mode === 'login' ? 'CLIENT' : 'CREATE AN'}
        <span>{mode === 'login' ? 'EXTRACTION' : 'ACCOUNT'}</span>
      </div>
      <div className="landing-subtitle" style={{ marginBottom: '48px' }}>
        {mode === 'login'
          ? 'Log in to initiate or resume your audit'
          : 'Create an account to begin'}
      </div>

      <div style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        />

        {error && (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            color: error.includes('Check your email') ? 'var(--subtle)' : 'var(--red)',
            padding: '12px 0',
          }}>
            {error}
          </div>
        )}

        <button
          className="btn-nav primary"
          onClick={handleSubmit}
          disabled={loading}
          style={{ marginTop: '8px' }}
        >
          {loading ? 'Please wait...' : mode === 'login' ? 'Log In →' : 'Create Account →'}
        </button>

        <button
          className="btn-nav"
          onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError('') }}
          style={{ marginTop: '4px' }}
        >
          {mode === 'login' ? 'No account? Sign up' : 'Have an account? Log in'}
        </button>
      </div>
    </div>
  )
}
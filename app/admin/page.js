'use client'

import { useEffect, useState } from 'react'
import { createClient } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

const TIER_LABELS = {
  t1: 'T1 | Identity Launchpad',
  t2: 'T2 | Digital Authority',
  t3: 'T3 | Scale Partner',
}

const STATUS_STYLES = {
  pending:  { color: 'var(--red)',    label: 'PENDING'   },
  reviewed: { color: '#f39c12',       label: 'REVIEWED'  },
  actioned: { color: '#2ecc71',       label: 'ACTIONED'  },
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading]         = useState(true)
  const [fadingOut, setFadingOut]     = useState(false)
  const [user, setUser]               = useState(null)
  const router  = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUser(user)

      const { data } = await supabase
        .from('form_progress')
        .select('id, tier, client_email, status, updated_at, completed')
        .eq('completed', true)
        .order('updated_at', { ascending: false })

      setSubmissions(data || [])
      setFadingOut(true)
      setTimeout(() => setLoading(false), 600)
    }
    load()
  }, [])

  async function handleLogout() {
    setLoading(true)
    setFadingOut(false)
    await supabase.auth.signOut()
    setFadingOut(true)
    setTimeout(() => router.push('/login'), 600)
  }

  if (loading) {
    return (
      <div className={`loading-screen${fadingOut ? ' fade-out' : ''}`}>
        <div className="loading-text">Loading submissions</div>
      </div>
    )
  }

  return (
    <div
      id="landing"
      className="screen active"
      style={{ justifyContent: 'flex-start', paddingTop: '80px' }}
    >
      {/* Header */}
      <div style={{
        width: '100%', maxWidth: '960px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: '64px',
      }}>
        <div>
          <div className="landing-wordmark" style={{ marginBottom: '4px', opacity: 1, animation: 'none' }}>
            JUDAION Studios | Admin
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.15em' }}>
            {user?.email}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-nav" onClick={() => router.push('/dashboard')}>
            Client View
          </button>
          <button className="btn-nav" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>

      {/* Title */}
      <div style={{ width: '100%', maxWidth: '960px', marginBottom: '48px' }}>
        <div className="section-tag">Admin Dashboard</div>
        <div className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          SUBMITTED<br />BRIEFS
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'var(--muted)', letterSpacing: '0.15em',
          marginTop: '8px',
        }}>
          {submissions.length} submission{submissions.length !== 1 ? 's' : ''} received
        </div>
        <hr className="section-rule" style={{ marginTop: '24px' }} />
      </div>

      {/* Submissions list */}
      <div style={{ width: '100%', maxWidth: '960px' }}>
        {submissions.length === 0 && (
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--muted)', letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '40px 0',
          }}>
            No completed submissions yet.
          </div>
        )}

        {submissions.map(sub => {
          const statusStyle = STATUS_STYLES[sub.status] || STATUS_STYLES.pending
          const date = new Date(sub.updated_at).toLocaleDateString('en-ZA', {
            year: 'numeric', month: 'short', day: 'numeric',
          })
          const time = new Date(sub.updated_at).toLocaleTimeString('en-ZA', {
            hour: '2-digit', minute: '2-digit',
          })

          return (
            <div
              key={sub.id}
              onClick={() => router.push(`/admin/${sub.id}`)}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr auto',
                gap: '24px',
                alignItems: 'center',
                padding: '24px 10px',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--orange-glow)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* Client email */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Client
                </div>
                <div style={{ fontSize: '14px', color: 'var(--white)' }}>
                  {sub.client_email || 'Unknown'}
                </div>
              </div>

              {/* Tier */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Tier
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--body)', letterSpacing: '0.1em' }}>
                  {TIER_LABELS[sub.tier] || sub.tier}
                </div>
              </div>

              {/* Date */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Submitted
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--body)' }}>
                  {date} — {time}
                </div>
              </div>

              {/* Status badge */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: statusStyle.color,
                border: `1px solid ${statusStyle.color}`,
                padding: '4px 12px',
                whiteSpace: 'nowrap',
              }}>
                {statusStyle.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
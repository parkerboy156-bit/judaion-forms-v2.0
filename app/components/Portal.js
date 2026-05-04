'use client'

import { useState } from 'react'
import { FORMS } from '../data/forms'
import FormShell from './FormShell'
import ConfirmScreen from './ConfirmScreen'

export default function Portal() {
  const [screen, setScreen] = useState('landing') // 'landing' | 'form' | 'confirm'
  const [activeTier, setActiveTier] = useState(null)

  function startForm(tier) {
    setActiveTier(tier)
    setScreen('form')
  }

  function goHome() {
    setScreen('landing')
    setActiveTier(null)
  }

  function onSubmitSuccess() {
    setScreen('confirm')
  }

  return (
    <>
      {/* ── LANDING ────────────────────────────────────────────────────── */}
      <div id="landing" className={`screen${screen === 'landing' ? ' active' : ''}`}>
        <div className="landing-wordmark">JUDAION Studios |  Client Portal</div>
        <div className="landing-title">
          CLIENT<span>EXTRACTION</span>
        </div>
        <div className="landing-subtitle">Select your tier below to begin the brief</div>
        <div className="landing-rule"></div>

        <div className="tier-grid">
          <div className="tier-card tier-card-t1" onClick={() => startForm('t1')}>
            <div className="tier-number">T1</div>
            <div className="tier-name">FOUNDATION</div>
            <div className="tier-label">Identity Launchpad — R28,000</div>
            <div className="tier-desc">
              Brand architecture from zero. Logo system, typography suite, brand blueprint,
              style guide, and market-ready assets. Your brand&apos;s core DNA, extracted and built to last.
            </div>
            <div className="tier-cta">Initiate Extraction Audit</div>
          </div>

          <div className="tier-card tier-card-t2" onClick={() => startForm('t2')}>
            <div className="tier-number">T2</div>
            <div className="tier-name">FRONT DOOR</div>
            <div className="tier-label">Digital Authority — R45,000</div>
            <div className="tier-desc">
              A precision-engineered 5-page website built to convert. UX architecture,
              mobile engineering, on-page SEO, and copywriting integration.
              Your most powerful commercial asset.
            </div>
            <div className="tier-cta">Initiate Extraction Audit</div>
          </div>

          <div className="tier-card tier-card-t3" onClick={() => startForm('t3')}>
            <div className="tier-number">T3</div>
            <div className="tier-name">ARCHITECTURE</div>
            <div className="tier-label">Scale Partner — R8,000//month</div>
            <div className="tier-desc">
              Ongoing creative and strategic support. Monthly visual content, ad creative,
              performance syncs, website maintenance, and brand collateral updates.
              Sustained authority at scale.
            </div>
            <div className="tier-cta">Submit Monthly Brief</div>
          </div>
        </div>
      </div>

      {/* ── FORM SHELL ─────────────────────────────────────────────────── */}
      {screen === 'form' && activeTier && (
        <FormShell
          tier={activeTier}
          formDef={FORMS[activeTier]}
          onHome={goHome}
          onSubmitSuccess={onSubmitSuccess}
        />
      )}

      {/* ── CONFIRM ────────────────────────────────────────────────────── */}
      {screen === 'confirm' && (
        <ConfirmScreen onHome={goHome} />
      )}
    </>
  )
}
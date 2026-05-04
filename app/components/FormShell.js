'use client'

import { useState, useRef, useEffect } from 'react'
import FormSection from './FormSection'

export default function FormShell({
  tier, formDef,
  initialStep = 0,
  initialData = {},
  onHome,
  onSaveProgress,
  onMarkComplete,
  onSubmitSuccess,
}) {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const [formData, setFormData]       = useState(initialData)
  const sectionRef = useRef(null)

  const totalSteps = formDef.sections.length
  const progress   = ((currentStep + 1) / totalSteps) * 100

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  function saveValues(updates) {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  async function handleNext(sectionData) {
    const merged = { ...formData, ...sectionData }
    saveValues(sectionData)
    const nextStep = currentStep + 1
    if (nextStep < totalSteps) {
      setCurrentStep(nextStep)
      scrollTop()
      // Save progress to Supabase after every section
      if (onSaveProgress) await onSaveProgress(nextStep, merged)
    }
  }

  function handleBack(sectionData) {
    saveValues(sectionData)
    if (currentStep > 0) {
      setCurrentStep(s => s - 1)
      scrollTop()
    }
  }

  async function handleSubmit(sectionData) {
    const allData = { ...formData, ...sectionData }

    // Mark complete in Supabase
    if (onMarkComplete) await onMarkComplete(allData)

    // Build email body
    let body  = `JUDAION STUDIOS — ${formDef.badge.toUpperCase()}\n`
    body     += `Submitted: ${new Date().toLocaleString('en-ZA')}\n`
    body     += '═'.repeat(60) + '\n\n'

    const ASSET_SLOTS = [
      'Asset 01','Asset 02','Asset 03','Asset 04','Asset 05','Asset 06',
      'Asset 07','Asset 08','Asset 09','Asset 10','Asset 11','Asset 12',
    ]

    formDef.sections.forEach(sec => {
      body += `\n${sec.tag.toUpperCase()}\n${'─'.repeat(40)}\n`
      sec.questions.forEach(q => {
        if (q.type === 'assettracker') {
          body += `\n[MONTHLY ASSET TRACKER]\n`
          ASSET_SLOTS.forEach(slot => {
            const aid = `${q.id}_${slot.replace(' ', '').toLowerCase()}`
            body += `  ${slot}: ${allData[aid] || '—'}\n`
          })
        } else if (q.type === 'scales') {
          if (q.label) body += `\n[${q.label.toUpperCase()}]\n`
          q.scales.forEach((s, si) => {
            const val = allData[`${q.id}_sv${si}`] || '—'
            body += `  ${s.left} [${val}] ${s.right}\n`
          })
        } else if (q.type === 'yesno') {
          if (q.label) body += `\n[${q.label.toUpperCase()}]\n`
          q.items.forEach((item, ii) => {
            const val = allData[`${q.id}_yn${ii}_val`] || '—'
            body += `  ${item}: ${val.toUpperCase()}\n`
          })
        } else if (q.type === 'priority') {
          const order = allData[`${q.id}_priority_order`]
          if (order) {
            body += `\n[${q.label.toUpperCase()}]\n`
            order.forEach((item, i) => { body += `  ${i + 1}. ${item}\n` })
          }
        } else if (allData[q.id]) {
          body += `\n[${q.num ? q.num + ' — ' : ''}${q.label.toUpperCase()}]\n${allData[q.id]}\n`
        }
      })
    })

    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: formDef.badge,
          date: new Date().toLocaleDateString('en-ZA'),
          content: body,
        }),
      })
    } catch (err) {
      console.error('Submission error:', err)
    }

    onSubmitSuccess()
  }

  const currentSection = formDef.sections[currentStep];

  return (
    <div id="form-shell" className={`screen active tier-${tier}`}>
      {/* Header */}
      <div className="form-header">
        <div className="form-header-inner">
          <button className="form-wordmark" onClick={onHome}>
            <img
              src="/judaion-logo-white.svg"
              alt="Logo"
              width="100"
              height="50"
            />
          </button>
          <div className="form-tier-badge">{formDef.badge}</div>
        </div>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Form body */}
      <div className="form-body" ref={sectionRef}>
        <FormSection
          key={currentStep}
          section={currentSection}
          savedData={formData}
          stepIndex={currentStep}
          totalSteps={totalSteps}
          onNext={handleNext}
          onBack={handleBack}
          onSubmit={handleSubmit}
          isFirst={currentStep === 0}
          isLast={currentStep === totalSteps - 1}
        />
      </div>
    </div>
  );
}

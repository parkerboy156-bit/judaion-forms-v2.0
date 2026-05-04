'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { FORMS } from '../data/forms'
import AuthenticatedForm from '../components/AuthenticatedForm'

function FormLoader() {
  const params = useSearchParams()
  const tier   = params.get('tier')

  if (!tier || !FORMS[tier]) {
    return (
      <div id="landing" className="screen active">
        <div className="landing-wordmark">Invalid tier. Return to dashboard.</div>
      </div>
    )
  }

  return <AuthenticatedForm tier={tier} formDef={FORMS[tier]} />
}

export default function FormPage() {
  return (
    <Suspense>
      <FormLoader />
    </Suspense>
  )
}
'use client'

export default function ConfirmScreen({ onHome }) {
  return (
    <div id="confirm-screen" className="screen active">
      <div className="confirm-icon">✓</div>
      <div className="landing-title">
        DATA<span>RECEIVED</span>
      </div>
      <div className="confirm-sub"> Brief transmission complete</div>
      <div className="confirm-message">
        Your extraction brief has been received by JUDAION Studios. Your assigned
        agent will review and be in contact within 24 hours to confirm next steps.
      </div>
      <button className="btn-home" onClick={onHome}>
        Return to Portal
      </button>
    </div>
  )
}
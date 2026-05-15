import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { tier, date, submissionId } = await request.json()

    const adminUrl = submissionId
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/admin/${submissionId}`
      : `${process.env.NEXT_PUBLIC_SITE_URL}/admin`

    await resend.emails.send({
      from: 'JUDAION Portal <forms@extraction.judaion.com>',
      to: process.env.TO_EMAIL,
      subject: `New Brief Submitted — ${tier} — ${date}`,
      text: [
        'JUDAION STUDIOS — NEW SUBMISSION',
        '',
        `Tier:      ${tier}`,
        `Submitted: ${date}`,
        '',
        'View the full submission:',
        adminUrl,
      ].join('\n'),
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
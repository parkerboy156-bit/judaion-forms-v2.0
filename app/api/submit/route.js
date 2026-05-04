import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { tier, date, content } = await request.json()

    await resend.emails.send({
      from: 'JUDAION Portal <forms@extraction.judaion.com>',
      to: process.env.TO_EMAIL,
      subject: `JUDAION Brief — ${tier} — ${date}`,
      text: content,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
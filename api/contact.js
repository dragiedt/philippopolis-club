const TO_EMAIL = 'philippopolis2022@gmail.com'
const FROM = process.env.RESEND_FROM || 'Philippopolis Contact <onboarding@resend.dev>'

function parseBody(req) {
  const body = req.body
  if (!body) return {}
  if (typeof body === 'string') {
    try {
      return JSON.parse(body)
    } catch {
      return {}
    }
  }
  return body
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const body = parseBody(req)
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const subject = String(body.subject || '').trim()
  const message = String(body.message || '').trim()
  const phone = String(body.phone || '').trim()
  const referral = String(body.referral || '').trim()

  // Honeypot: real users never see this field, bots fill it in
  if (String(body.website || '').trim()) {
    return res.status(200).json({ ok: true })
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'missing_fields' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'invalid_email' })
  }
  if (name.length > 200 || subject.length > 200 || message.length > 5000) {
    return res.status(400).json({ error: 'input_too_long' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(503).json({ error: 'not_configured' })
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    referral ? `Referred by: ${referral}` : null,
    `Subject: ${subject}`,
    '',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n')

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Contact form: ${subject} - ${name}`,
        text,
      }),
    })

    if (!result.ok) {
      console.error('Resend failed:', result.status, await result.text())
      return res.status(502).json({ error: 'send_failed' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(502).json({ error: 'send_failed' })
  }
}

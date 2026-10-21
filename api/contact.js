import { verifyChallenge } from './_captcha.js'

const TO_EMAIL = 'philippopolis2022@gmail.com'
const FROM = process.env.RESEND_FROM || 'Philippopolis Contact <onboarding@resend.dev>'
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${TO_EMAIL}`

const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 60 * 1000
const UPSTREAM_TIMEOUT_MS = 8000
const hits = new Map()

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.headers['x-real-ip'] || 'unknown'
}

function isRateLimited(ip) {
  const now = Date.now()
  const entry = hits.get(ip)

  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 })
    if (hits.size > 5000) {
      for (const [key, value] of hits) {
        if (now - value.start > RATE_WINDOW_MS) hits.delete(key)
      }
    }
    return false
  }

  entry.count += 1
  return entry.count > RATE_LIMIT
}

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

function buildMessage({ name, email, subject, message, phone, referral }) {
  return [
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
}

async function sendViaResend(apiKey, payload) {
  const result = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
      body: JSON.stringify({
        from: FROM,
        to: [TO_EMAIL],
        reply_to: payload.email,
        subject: `Contact form: ${payload.subject} - ${payload.name}`,
        text: buildMessage(payload),
      }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    })

  if (!result.ok) {
    console.error('Resend failed:', result.status, await result.text())
    return { ok: false, error: 'send_failed' }
  }
  return { ok: true }
}

async function sendViaFormSubmit(payload) {
  const result = await fetch(FORMSUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      referral: payload.referral,
      subject: payload.subject,
      message: buildMessage(payload),
      _subject: `Contact form: ${payload.subject} - ${payload.name}`,
      _template: 'table',
    }),
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
  })

  const data = await result.json().catch(() => ({}))

  if (!result.ok || data.success === 'false' || data.success === false) {
    console.error('FormSubmit failed:', result.status, JSON.stringify(data))
    if (result.status === 403 || String(data.message || '').toLowerCase().includes('confirm')) {
      return { ok: false, error: 'needs_activation' }
    }
    return { ok: false, error: 'send_failed' }
  }
  return { ok: true }
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

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({ error: 'rate_limited' })
  }

  if (!verifyChallenge(body.captchaToken, body.captchaAnswer)) {
    return res.status(400).json({ error: 'captcha_failed' })
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

  const payload = { name, email, subject, message, phone, referral }

  try {
    const apiKey = process.env.RESEND_API_KEY
    const result = apiKey ? await sendViaResend(apiKey, payload) : await sendViaFormSubmit(payload)

    if (result.ok) {
      return res.status(200).json({ ok: true })
    }
    return res.status(502).json({ error: result.error })
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(502).json({ error: 'send_failed' })
  }
}

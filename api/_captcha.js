import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto'

const SECRET = process.env.CAPTCHA_SECRET || 'philippopolis-contact-captcha-v1'
const KEY = createHash('sha256').update(SECRET).digest()
const TTL_MS = 60 * 60 * 1000

const b64 = (buf) => Buffer.from(buf).toString('base64url')

export function createChallenge() {
  const a = 2 + Math.floor(Math.random() * 8)
  const b = 1 + Math.floor(Math.random() * 9)
  const usePlus = Math.random() > 0.35
  const question = usePlus ? `${a} + ${b}` : `${a} × ${b}`
  const answer = usePlus ? a + b : a * b

  const payload = JSON.stringify({ answer, ts: Date.now() })
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', KEY, iv)
  const encrypted = Buffer.concat([cipher.update(payload, 'utf8'), cipher.final()])

  return {
    question,
    token: [b64(iv), b64(encrypted), b64(cipher.getAuthTag())].join('.'),
  }
}

export function verifyChallenge(token, submitted) {
  try {
    if (!token || typeof token !== 'string') return false
    const parts = token.split('.')
    if (parts.length !== 3) return false

    const decipher = createDecipheriv('aes-256-gcm', KEY, Buffer.from(parts[0], 'base64url'))
    decipher.setAuthTag(Buffer.from(parts[2], 'base64url'))
    const plain = Buffer.concat([
      decipher.update(Buffer.from(parts[1], 'base64url')),
      decipher.final(),
    ]).toString('utf8')

    const { answer, ts } = JSON.parse(plain)
    if (!Number.isFinite(answer) || !Number.isFinite(ts)) return false
    if (Date.now() - ts > TTL_MS) return false

    const given = Number.parseInt(String(submitted).trim(), 10)
    if (!Number.isFinite(given)) return false
    return given === answer
  } catch {
    return false
  }
}

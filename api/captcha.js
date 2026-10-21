import { createChallenge } from './_captcha.js'

export default function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  res.setHeader('Cache-Control', 'no-store')
  return res.status(200).json(createChallenge())
}

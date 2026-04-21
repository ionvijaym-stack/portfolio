/* global process */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[+\d\s().-]{7,20}$/

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function isValidPayload(payload) {
  if (!payload || typeof payload !== 'object') return false
  const { name, email, phone = '', subject = '', message } = payload
  return (
    typeof name === 'string' &&
    name.trim().length >= 2 &&
    typeof email === 'string' &&
    emailRegex.test(email) &&
    typeof phone === 'string' &&
    (!phone.trim() || phoneRegex.test(phone.trim())) &&
    typeof subject === 'string' &&
    subject.trim().length <= 120 &&
    typeof message === 'string' &&
    message.trim().length >= 20
  )
}

function json(res, status, body) {
  res.status(status).json(body)
}

async function sendWithResend({ name, email, phone, subject, message }) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !to || !from) {
    return { configured: false }
  }

  const cleanName = name.trim()
  const cleanEmail = email.trim()
  const cleanPhone = phone.trim()
  const cleanSubject = subject.trim().replace(/[\r\n]+/g, ' ')
  const cleanMessage = message.trim()

  const safeName = escapeHtml(cleanName)
  const safeEmail = escapeHtml(cleanEmail)
  const safePhone = cleanPhone ? escapeHtml(cleanPhone) : ''
  const safeSubject = cleanSubject ? escapeHtml(cleanSubject) : ''
  const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, '<br/>')

  const html = `
    <h2>New Ionora Contact Request</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
    ${safeSubject ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: cleanSubject ? `${cleanSubject} - ${cleanName}` : `New Project Inquiry from ${cleanName}`,
      reply_to: cleanEmail,
      html,
    }),
  })

  if (!response.ok) {
    const reason = await response.text()
    throw new Error(`Resend request failed: ${reason}`)
  }

  return { configured: true }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { error: 'Method not allowed' })
  }

  let payload
  try {
    payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    return json(res, 400, { error: 'Malformed JSON payload' })
  }

  if (!isValidPayload(payload)) {
    return json(res, 400, { error: 'Invalid submission payload' })
  }

  try {
    const result = await sendWithResend(payload)

    if (!result.configured) {
      return json(res, 202, {
        ok: true,
        message:
          'Form payload received, but email delivery is not configured yet. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.',
      })
    }

    return json(res, 200, { ok: true })
  } catch (error) {
    return json(res, 500, { error: 'Failed to process contact request', details: error.message })
  }
}

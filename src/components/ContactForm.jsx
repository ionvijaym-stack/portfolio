import { useMemo, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { contactConfig } from '../config/contact'
import { siteConfig } from '../config/site'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[+\d\s().-]{7,20}$/

function validateContactForm(values) {
  const next = {}

  if (values.name.trim().length < 2) next.name = 'Please enter your full name.'
  if (!emailRegex.test(values.email.trim())) next.email = 'Enter a valid email address.'
  if (values.phone.trim() && !phoneRegex.test(values.phone.trim())) {
    next.phone = 'Enter a valid phone number or leave it blank.'
  }
  if (values.subject.trim().length > 120) next.subject = 'Subject should stay under 120 characters.'
  if (values.message.trim().length < 20) {
    next.message = 'Message should be at least 20 characters.'
  }

  return next
}

async function submitContactForm(payload) {
  if (!siteConfig.contactEndpoint) {
    console.info('Mock contact form submission', payload)
    await new Promise((resolve) => setTimeout(resolve, 900))

    return {
      message: 'Thanks. This demo is using a mock submit handler right now.',
    }
  }

  const response = await fetch(siteConfig.contactEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.error || 'Unable to send your request right now.')
  }

  return {
    message: data.message || 'Thanks. Your message has been sent successfully.',
  }
}

const fieldBaseClassName =
  'w-full rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:bg-slate-950'

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const errors = useMemo(() => validateContactForm(values), [values])

  const handleChange = (field) => (event) => {
    const { value } = event.target
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    })

    if (Object.keys(errors).length) {
      setFeedback({
        type: 'error',
        message: 'Please review the highlighted fields and try again.',
      })
      return
    }

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    }

    setIsSubmitting(true)
    setFeedback(null)

    try {
      const result = await submitContactForm(payload)
      setFeedback({
        type: 'success',
        message: result.message,
      })
      setValues(initialValues)
      setTouched({})
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error.message || 'Something went wrong while sending your request.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 }}
      className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-premium backdrop-blur md:p-8 dark:border-slate-700 dark:bg-slate-900/90"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Send a message</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink dark:text-slate-100">
          Tell us about your next move
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          Prefer email instead? Reach us directly at{' '}
          <a
            href={`mailto:${contactConfig.email}`}
            className="font-semibold text-sky-600 transition hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
          >
            {contactConfig.email}
          </a>
          .
        </p>
      </div>

      <form noValidate onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            id="contact-name"
            label="Name"
            required
            value={values.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            placeholder="Your full name"
            autoComplete="name"
            error={touched.name ? errors.name : ''}
          />

          <Field
            id="contact-email"
            type="email"
            label="Email"
            required
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="name@company.com"
            autoComplete="email"
            error={touched.email ? errors.email : ''}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            id="contact-phone"
            label="Phone"
            value={values.phone}
            onChange={handleChange('phone')}
            onBlur={handleBlur('phone')}
            placeholder="+91 00000 00000"
            autoComplete="tel"
            error={touched.phone ? errors.phone : ''}
          />

          <Field
            id="contact-subject"
            label="Subject"
            value={values.subject}
            onChange={handleChange('subject')}
            onBlur={handleBlur('subject')}
            placeholder="How can we help?"
            autoComplete="off"
            error={touched.subject ? errors.subject : ''}
            maxLength={120}
          />
        </div>

        <Field
          id="contact-message"
          as="textarea"
          label="Message"
          required
          value={values.message}
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
          placeholder="Share your goals, scope, timeline, and the kind of outcome you want."
          error={touched.message ? errors.message : ''}
          rows={6}
        />

        {feedback && (
          <Motion.div
            key={feedback.message}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl border px-4 py-3 text-sm ${
              feedback.type === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300'
                : 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300'
            }`}
            aria-live="polite"
          >
            {feedback.message}
          </Motion.div>
        )}

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-5 dark:border-slate-800">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            {isSubmitting ? 'Sending your message...' : 'Submit Inquiry'}
          </button>
          <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
            By submitting this form, you are sharing your details so our team can get back to you about
            your request.
          </p>
        </div>
      </form>
    </Motion.div>
  )
}

function Field({
  as = 'input',
  error,
  id,
  label,
  required = false,
  rows,
  className,
  ...props
}) {
  const Component = as
  const describedBy = error ? `${id}-error` : undefined

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
        {required ? <span className="ml-1 text-rose-500">*</span> : null}
      </label>
      <Component
        id={id}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={`${fieldBaseClassName} ${as === 'textarea' ? 'min-h-40 resize-y' : ''} ${className || ''}`}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-500">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default ContactForm

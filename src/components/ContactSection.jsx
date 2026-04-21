import { motion as Motion } from 'framer-motion'
import ContactForm from './ContactForm'
import SectionTitle from './SectionTitle'
import SocialLinks from './SocialLinks'
import { contactConfig } from '../config/contact'

function ContactSection({ variant = 'section' }) {
  const isPageVariant = variant === 'page'
  const hasAddress = Boolean(contactConfig.address.trim())
  const hasWorkingHours = Boolean(contactConfig.workingHours?.trim())
  const mapEmbedUrl =
    contactConfig.mapEmbedUrl || `https://www.google.com/maps?q=${encodeURIComponent(contactConfig.address)}&output=embed`

  const headerCopy = isPageVariant
    ? {
        eyebrow: 'Contact',
        title: 'A sharper way to start the conversation.',
        description:
          'Share your goals, roadmap, or current bottlenecks and we will come back with a thoughtful next step.',
      }
    : {
        eyebrow: 'Contact',
        title: "Let's plan the right next step for your business.",
        description:
          'Whether you need a polished company website, a product build, or a design refresh, we can shape the engagement around your goals.',
      }

  return (
    <section
      id={isPageVariant ? undefined : 'contact'}
      className={`relative overflow-hidden px-6 md:px-10 ${isPageVariant ? 'pb-24 pt-16 md:pb-28 md:pt-24' : 'pb-20 pt-16 md:pb-28 md:pt-24'}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-hero-glow opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[32rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={headerCopy.eyebrow}
          title={headerCopy.title}
          description={headerCopy.description}
        />

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-ink via-slate-900 to-sky-950 p-6 text-white shadow-premium md:p-8 dark:border-slate-700"
          >
            <div className="flex h-full flex-col">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
                  Contact details
                </div>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                  {contactConfig.companyName}
                </h3>
                {contactConfig.tagline ? (
                  <p className="mt-3 max-w-xl text-base leading-7 text-slate-200">{contactConfig.tagline}</p>
                ) : null}
                {contactConfig.description ? (
                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">{contactConfig.description}</p>
                ) : null}
              </div>

              {contactConfig.highlights?.length ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {contactConfig.highlights.map((item) => (
                    <div
                      key={`${item.label}-${item.value}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-sky-100/80">{item.label}</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-8 space-y-4">
                <DetailItem
                  icon={<MailIcon className="h-5 w-5" />}
                  label="Email"
                  value={contactConfig.email}
                  href={`mailto:${contactConfig.email}`}
                />
                <DetailItem
                  icon={<PhoneIcon className="h-5 w-5" />}
                  label="Phone"
                  value={contactConfig.phone}
                  href={`tel:${toTelHref(contactConfig.phone)}`}
                />
                {hasAddress ? (
                  <DetailItem
                    icon={<LocationIcon className="h-5 w-5" />}
                    label="Address"
                    value={contactConfig.address}
                  />
                ) : null}
                {hasWorkingHours ? (
                  <DetailItem
                    icon={<ClockIcon className="h-5 w-5" />}
                    label="Working hours"
                    value={contactConfig.workingHours}
                  />
                ) : null}
              </div>

              {hasAddress ? (
                <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06]">
                  <div className="border-b border-white/10 px-4 py-3">
                    <p className="text-sm font-medium text-white">Find us on the map</p>
                    <p className="mt-1 text-xs text-slate-300">
                      Replace the embed URL in the contact config when your live map link is ready.
                    </p>
                  </div>
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      title={`${contactConfig.companyName} location map`}
                      src={mapEmbedUrl}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0"
                    />
                  </div>
                </div>
              ) : null}

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-medium text-white">Follow the team</p>
                <p className="mt-2 text-sm text-slate-300">
                  Stay close to launches, case studies, and product notes.
                </p>
                <SocialLinks
                  socials={contactConfig.socials}
                  listClassName="mt-4 flex flex-wrap gap-3"
                  linkClassName="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-sky-300/70 hover:bg-sky-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60"
                />
              </div>
            </div>
          </Motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function DetailItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-100">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.18em] text-sky-100/75">{label}</p>
        <p className="mt-2 whitespace-pre-line text-sm leading-6 text-white">{value}</p>
      </div>
    </div>
  )

  if (!href) return content

  return (
    <a
      href={href}
      className="block transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60"
    >
      {content}
    </a>
  )
}

function toTelHref(phone) {
  return phone.replace(/[^\d+]/g, '')
}

function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5h16v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 8 7 5 7-5" />
    </svg>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.9 4.5h2.2c.38 0 .72.25.84.61l1 3.15a.9.9 0 0 1-.23.93l-1.23 1.23a13.53 13.53 0 0 0 4.08 4.08l1.23-1.23a.9.9 0 0 1 .93-.23l3.15 1c.36.12.61.46.61.84v2.2a1.4 1.4 0 0 1-1.4 1.4h-.75C9.82 18.5 5.5 14.18 5.5 8.05V7.3a1.4 1.4 0 0 1 1.4-1.4Z"
      />
    </svg>
  )
}

function LocationIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20s6-4.85 6-10a6 6 0 1 0-12 0c0 5.15 6 10 6 10Z"
      />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  )
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 1.5" />
    </svg>
  )
}

export default ContactSection

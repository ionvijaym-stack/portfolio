import { motion as Motion } from 'framer-motion'
import { serviceItems } from '../data/companyContent'
import SectionTitle from './SectionTitle'

function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <div className="section-container">
        <SectionTitle
          eyebrow="Services"
          title="Enterprise-ready services delivered with startup speed and polish."
          description="From company websites to internal platforms and AI-powered systems, we build around real business priorities."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service, index) => (
            <Motion.div
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="panel group p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-950/40 dark:text-sky-300 dark:group-hover:bg-sky-500 dark:group-hover:text-slate-950">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink dark:text-slate-100">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceIcon({ icon }) {
  const commonProps = {
    className: 'h-6 w-6',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    'aria-hidden': 'true',
  }

  if (icon === 'strategy') {
    return (
      <svg {...commonProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 16V8m6 8V5m6 11v-6" />
      </svg>
    )
  }

  if (icon === 'design') {
    return (
      <svg {...commonProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 16 6-11 3 5 5 1-6 8-3-5-5-1Z" />
      </svg>
    )
  }

  if (icon === 'web') {
    return (
      <svg {...commonProps}>
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 9h17M8.5 14.5l2-2-2-2m5 0h2.5" />
      </svg>
    )
  }

  if (icon === 'mobile') {
    return (
      <svg {...commonProps}>
        <rect x="7" y="3.5" width="10" height="17" rx="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h4M12 17.5h.01" />
      </svg>
    )
  }

  if (icon === 'ai') {
    return (
      <svg {...commonProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 8v4M4 12h4m8 0h4" />
        <circle cx="12" cy="12" r="4.5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4v16" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  )
}

export default ServicesSection

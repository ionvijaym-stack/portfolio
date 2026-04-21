import { motion as Motion } from 'framer-motion'

function SectionTitle({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignmentClassName =
    align === 'left' ? 'mb-12 max-w-3xl text-left' : 'mx-auto mb-12 max-w-3xl text-center'

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${alignmentClassName} ${className}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-slate-100 md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </Motion.div>
  )
}

export default SectionTitle

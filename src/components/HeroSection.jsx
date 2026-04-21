import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { heroContent } from '../data/companyContent'
import { fadeInUp } from '../utils/animations'

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-400/10" />
      <div className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-indigo-200/35 blur-3xl dark:bg-slate-700/30" />

      <Motion.div initial="hidden" animate="show" className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Motion.p variants={fadeInUp} custom={0.04} className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 dark:text-sky-300 md:text-sm">
            {heroContent.eyebrow}
          </Motion.p>
          <Motion.h1 variants={fadeInUp} custom={0.1} className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-ink dark:text-slate-100 md:text-6xl xl:text-7xl">
            {heroContent.title}
          </Motion.h1>
          <Motion.p variants={fadeInUp} custom={0.16} className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
            {heroContent.description}
          </Motion.p>

          <Motion.div variants={fadeInUp} custom={0.22} className="mt-10 flex flex-wrap gap-4">
            <Link to={heroContent.primaryCta.to} className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400">
              {heroContent.primaryCta.label}
            </Link>
            <Link to={heroContent.secondaryCta.to} className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500">
              {heroContent.secondaryCta.label}
            </Link>
          </Motion.div>

          <Motion.div variants={fadeInUp} custom={0.28} className="mt-10 flex flex-wrap gap-3">
            {heroContent.capabilityTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </Motion.div>
        </div>

        <Motion.div variants={fadeInUp} custom={0.18} className="relative">
          <div className="surface-muted overflow-hidden p-3">
            <div className="overflow-hidden rounded-[1.75rem] bg-slate-950">
              <img
                src={heroContent.image}
                alt="Ionora delivery showcase"
                fetchPriority="high"
                decoding="async"
                className="h-[25rem] w-full object-cover lg:h-[30rem]"
              />
            </div>
          </div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45, ease: 'easeOut' }}
            className="panel absolute -bottom-6 left-4 max-w-xs p-5 md:left-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Delivery</p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Focused strategy, clean design systems, reliable engineering, and launch-ready execution.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.45, ease: 'easeOut' }}
            className="panel absolute -right-2 top-6 hidden max-w-sm p-5 md:block"
          >
            <div className="space-y-4">
              {heroContent.featuredCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200/90 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                  <p className="text-sm font-semibold text-ink dark:text-slate-100">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default HeroSection

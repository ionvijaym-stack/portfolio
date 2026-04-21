import { motion as Motion } from 'framer-motion'
import { aboutContent } from '../data/companyContent'
import SectionTitle from './SectionTitle'

function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <SectionTitle
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          description={aboutContent.introduction}
          align="left"
        />

        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="panel p-8 md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Company Introduction</p>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {aboutContent.introduction}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {aboutContent.pillars.map((pillar) => (
                <div key={pillar.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/40">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">{pillar.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{pillar.value}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 }}
            className="panel p-8 md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Why Choose Us</p>
            <div className="mt-6 space-y-5">
              {aboutContent.whyChooseUs.map((point) => (
                <div key={point.title} className="rounded-[1.5rem] border border-slate-200 bg-white/70 p-5 transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950/35">
                  <h3 className="text-lg font-semibold text-ink dark:text-slate-100">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{point.description}</p>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

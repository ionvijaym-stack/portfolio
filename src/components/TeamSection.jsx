import { motion as Motion } from 'framer-motion'
import { teamMembers, teamSupportLine } from '../data/companyContent'
import SectionTitle from './SectionTitle'

function TeamSection() {
  return (
    <section id="team" className="section-shell">
      <div className="section-container">
        <SectionTitle
          eyebrow="Leadership Team"
          title="Key people behind strategy, design, engineering, and intelligent systems."
          description="A focused leadership group that guides every engagement with clarity, accountability, and craftsmanship."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.slice(0, 4).map((member, index) => (
            <Motion.article
              key={member.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="panel p-5"
            >
              <img
                loading="lazy"
                decoding="async"
                src={member.photo}
                alt={member.name}
                className="h-64 w-full rounded-[1.5rem] object-cover"
              />
              <h3 className="mt-5 text-lg font-semibold text-ink dark:text-slate-100">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{member.role}</p>
            </Motion.article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">{teamSupportLine}</p>
      </div>
    </section>
  )
}

export default TeamSection

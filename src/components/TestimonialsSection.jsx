import { motion as Motion } from 'framer-motion'
import { testimonials } from '../data/companyContent'
import SectionTitle from './SectionTitle'

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell">
      <div className="section-container">
        <SectionTitle
          eyebrow="Client Feedback"
          title="Trusted for thoughtful execution and delivery discipline."
          description="A few of the themes clients consistently appreciate across strategy, design, and engineering engagements."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="panel h-full p-7"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <StarIcon key={`${testimonial.id}-${starIndex}`} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                "{testimonial.feedback}"
              </p>
              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                <p className="text-sm font-semibold text-ink dark:text-slate-100">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonial.company}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="m12 3.7 2.57 5.2 5.74.84-4.15 4.04.98 5.71L12 16.82 6.86 19.5l.98-5.71L3.7 9.74l5.73-.84L12 3.7Z" />
    </svg>
  )
}

export default TestimonialsSection

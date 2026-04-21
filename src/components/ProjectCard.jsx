import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ProjectCard({ project, index = 0 }) {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-premium transition duration-300 hover:border-sky-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-sky-500/50"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-slate-950/0 to-slate-950/0" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {project.category}
            </span>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
              {project.industry}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink dark:text-slate-100">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {project.shortDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
            <span className="text-sm text-slate-500 dark:text-slate-400">{project.engagement}</span>
            <span className="text-sm font-semibold text-sky-600 transition group-hover:text-sky-700 dark:text-sky-400 dark:group-hover:text-sky-300">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </Motion.article>
  )
}

export default ProjectCard

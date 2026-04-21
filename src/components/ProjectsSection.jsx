import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import { useProjects } from '../hooks/useProjects'

function ProjectsSection() {
  const { projects, source, isLoading } = useProjects()
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], [projects])
  const resolvedFilter = filters.includes(activeFilter) ? activeFilter : 'All'

  const visibleProjects = useMemo(() => {
    if (resolvedFilter === 'All') return projects
    return projects.filter((project) => project.category === resolvedFilter)
  }, [projects, resolvedFilter])

  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <SectionTitle
          eyebrow="Projects"
          title="Delivery work across enterprise websites, business platforms, AI systems, and mobile products."
          description="A curated project grid backed by a frontend data hook and API endpoint so the portfolio can scale without hardcoded UI duplication."
        />

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => {
              const isActive = resolvedFilter === filter
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'border-sky-500 bg-sky-500 text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>

          <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
            {source === 'api' ? 'Live project feed' : 'Curated project feed'}
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-premium dark:border-slate-800 dark:bg-slate-900/90"
              >
                <div className="h-56 animate-pulse bg-slate-200 dark:bg-slate-800" />
                <div className="space-y-4 p-6">
                  <div className="flex gap-2">
                    <div className="h-7 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div className="h-7 w-28 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
                  </div>
                  <div className="h-7 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="space-y-2">
                    <div className="h-4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-4 w-11/12 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {!isLoading && !visibleProjects.length ? (
          <div className="panel mt-6 p-8 text-center">
            <h3 className="text-xl font-semibold text-ink dark:text-slate-100">No projects in this category yet</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Switch filters to explore the rest of the portfolio.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ProjectsSection

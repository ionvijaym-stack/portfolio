import { motion as Motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import { useProjects } from '../hooks/useProjects'

function DetailSection({ title, children, delay = 0 }) {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.45, delay }}
    >
      <h2 className="text-2xl font-semibold text-ink dark:text-slate-100">{title}</h2>
      <div className="mt-3 text-slate-600 dark:text-slate-300">{children}</div>
    </Motion.section>
  )
}

function ProjectDetailPage() {
  const { projectId } = useParams()
  const { projects, isLoading } = useProjects()
  const project = projects.find((item) => item.id === projectId)

  if (isLoading) {
    return (
      <Motion.div className="min-h-screen bg-slate-50 dark:bg-slate-950" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Seo title="Loading Project" />
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <div className="h-72 animate-pulse rounded-[2rem] bg-slate-200 dark:bg-slate-800 md:h-[30rem]" />
          <div className="mt-10 h-12 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="mt-10 panel space-y-6 p-8 md:p-12">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="h-7 w-44 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </Motion.div>
    )
  }

  if (!project) {
    return (
      <Motion.div className="min-h-screen bg-slate-50 dark:bg-slate-950" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Seo title="Project Not Found" />
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
          <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-slate-100">Project not found</h1>
          <Link to="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white dark:bg-sky-500 dark:text-slate-950">Back to Home</Link>
        </main>
        <Footer />
      </Motion.div>
    )
  }

  return (
    <Motion.div
      className="min-h-screen bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Seo
        title={project.title}
        description={project.shortDescription}
        image={project.cover}
        url={`https://ionora.studio/projects/${project.id}`}
      />
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <Motion.img initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} src={project.cover} alt={project.title} className="h-72 w-full rounded-[2rem] object-cover md:h-[30rem]" />
        <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.34fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">{project.category}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-slate-100 md:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{project.shortDescription}</p>
          </div>

          <aside className="panel p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">Industry</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.industry}</p>
            </div>
            <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">Engagement</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.engagement}</p>
            </div>
            <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">Source</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.source}</p>
            </div>
          </aside>
        </Motion.div>

        <div className="mt-10 space-y-8 panel p-8 md:p-12">
          <DetailSection title="Overview">
            <p>{project.overview}</p>
          </DetailSection>
          <DetailSection title="Problem" delay={0.03}>
            <p>{project.problem}</p>
          </DetailSection>
          <DetailSection title="Solution" delay={0.06}>
            <p>{project.solution}</p>
          </DetailSection>
          <DetailSection title="Key Features" delay={0.09}>
            <ul className="list-disc space-y-2 pl-5">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </DetailSection>
          <DetailSection title="Tech Stack" delay={0.12}>
            <div className="flex flex-wrap gap-2">{project.techStack.map((technology) => <span key={technology} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{technology}</span>)}</div>
          </DetailSection>
          <DetailSection title="Result and Impact" delay={0.15}>
            <p>{project.results}</p>
          </DetailSection>
        </div>
      </main>
      <Footer />
    </Motion.div>
  )
}

export default ProjectDetailPage

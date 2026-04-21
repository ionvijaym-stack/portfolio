import { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'

const HomePage = lazy(() => import('./pages/HomePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  const location = useLocation()

  return (
    <Suspense
      fallback={
        <div className="grid min-h-screen place-items-center px-6 text-slate-600 dark:bg-slate-950 dark:text-slate-300">
          <div className="w-full max-w-5xl animate-pulse space-y-6">
            <div className="mx-auto h-10 w-40 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="rounded-[2rem] bg-slate-200 dark:bg-slate-800" style={{ height: '16rem' }} />
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-40 rounded-[1.75rem] bg-slate-200 dark:bg-slate-800" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ScrollToHash />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default App

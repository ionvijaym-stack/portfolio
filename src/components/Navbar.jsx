import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mainNavigation } from '../data/companyContent'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [observedSection, setObservedSection] = useState('home')

  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }
    const sectionIds = ['home', 'about', 'services', 'projects']
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setObservedSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [location.pathname])

  const activeSection =
    location.pathname === '/contact'
      ? 'contact'
      : location.pathname.startsWith('/projects/')
        ? 'projects'
        : observedSection

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link to="/" className="text-lg font-semibold tracking-tight text-ink dark:text-slate-100">
          IONORA
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              onClick={handleNavClick}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSection === item.id
                  ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300'
                  : 'text-slate-600 hover:text-ink dark:text-slate-300 dark:hover:text-slate-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <Link
            to="/contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 px-6 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950/95"
          >
            <nav className="flex flex-col gap-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={handleNavClick}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    activeSection === item.id
                      ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export default Navbar

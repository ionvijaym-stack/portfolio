import { Link } from 'react-router-dom'
import { mainNavigation } from '../data/companyContent'
import { contactConfig } from '../config/contact'
import SocialLinks from './SocialLinks'

function Footer() {
  const hasAddress = Boolean(contactConfig.address.trim())

  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr] md:px-10 md:py-12">
        <div>
          <p className="text-lg font-semibold tracking-tight text-ink dark:text-slate-100">
            {contactConfig.companyName}
          </p>
          {contactConfig.tagline ? (
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
              {contactConfig.tagline}
            </p>
          ) : null}
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-ink dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-slate-50"
          >
            Start a conversation
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
            {mainNavigation.map((item) => (
              <Link key={item.id} to={item.to} className="transition hover:text-sky-600 dark:hover:text-sky-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <a
                href={`mailto:${contactConfig.email}`}
                className="transition hover:text-sky-600 dark:hover:text-sky-400"
              >
                {contactConfig.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${contactConfig.phone.replace(/[^\d+]/g, '')}`}
                className="transition hover:text-sky-600 dark:hover:text-sky-400"
              >
                {contactConfig.phone}
              </a>
            </p>
            {hasAddress ? <p className="whitespace-pre-line">{contactConfig.address}</p> : null}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Social</p>
          <SocialLinks
            socials={contactConfig.socials}
            listClassName="mt-4 flex flex-wrap gap-3"
            linkClassName="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
          />
          {contactConfig.workingHours ? (
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {contactConfig.workingHours}
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-5 text-center text-sm text-slate-500 md:px-10 dark:border-slate-800 dark:text-slate-400">
        <p>(c) {new Date().getFullYear()} {contactConfig.companyName}. Built for modern businesses and digital growth.</p>
      </div>
    </footer>
  )
}

export default Footer

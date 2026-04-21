import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center dark:bg-slate-950">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-slate-100">Page not found</h1>
        <Link to="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white dark:bg-sky-500 dark:text-slate-950">Go Home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage


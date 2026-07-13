import { Outlet } from 'react-router-dom'

export default function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-10">
        <header className="mb-8 w-full">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Full Stack Portfolio</p>
              <h1 className="text-2xl font-semibold sm:text-3xl">Portfolio</h1>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
              <a href="/" className="transition hover:text-white">Home</a>
              <a href="/about" className="transition hover:text-white">About</a>
              <a href="/projects" className="transition hover:text-white">Projects</a>
            </nav>
          </div>
        </header>
        <main className="flex-1 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/20">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { appRoutes } from '@routes/routes.config'

const navItems = appRoutes.filter((route) => route.path !== '/')

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-100 shadow-sm shadow-slate-950/30 ring-1 ring-slate-700">
            <span className="text-base font-semibold">FM</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Premium Portfolio</p>
            <p className="text-sm font-semibold text-white">Taslim Ansari</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <NavLink
            to="/contact"
            className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition duration-200 hover:brightness-110"
          >
            Reach out
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-100 transition hover:border-slate-700 md:hidden"
          aria-label="Open navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950/95 md:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      isActive ? 'bg-slate-900 text-white' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition duration-200 hover:brightness-110"
              >
                Reach out
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

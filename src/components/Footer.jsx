import { Link } from 'react-router-dom'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Taslim Ansari</p>
          <p className="mt-2 text-sm text-slate-400">Premium full stack portfolio experiences.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

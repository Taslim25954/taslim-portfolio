import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '@components'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Send } from 'lucide-react'

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] sm:p-12">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-500/10 to-transparent blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-12 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" aria-hidden="true" />
      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-sky-400 ring-1 ring-slate-700">
            <Sparkles className="h-4 w-4 text-sky-400" />
            Featured presentation
          </p>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building modern digital products with clarity, speed, and craftsmanship.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I design premium full stack experiences that feel polished, perform reliably, and scale with the business.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition duration-200 hover:scale-[1.01] hover:brightness-110"
            >
              Let&apos;s connect
              <ArrowRight className="ml-3 h-4 w-4" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:border-slate-600 hover:bg-slate-900"
            >
              View work
              <Send className="ml-3 h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-slate-800">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Experience</p>
              <p className="mt-3 text-3xl font-semibold text-white">8+ years</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-slate-800">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Product launches</p>
              <p className="mt-3 text-3xl font-semibold text-white">18+</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-800/90 p-1 shadow-[0_30px_90px_rgba(15,23,42,0.45)]"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_25%)]" />
            <div className="relative flex h-full flex-col justify-between p-6 text-slate-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-3xl bg-slate-900/80 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Brand system</p>
                    <p className="mt-1 text-sm font-semibold text-white">Premium identity</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-slate-300">01</span>
                </div>
                <div className="grid gap-4 rounded-3xl bg-slate-900/80 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>UI cadence</span>
                    <span className="text-white">92%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-3xl bg-slate-900/85 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Motion system</p>
                <div className="grid grid-cols-2 gap-3 text-center text-sm text-slate-300">
                  <div className="rounded-3xl bg-slate-950/90 p-3">Fluid</div>
                  <div className="rounded-3xl bg-slate-950/90 p-3">Delightful</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

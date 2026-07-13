export default function AboutSection() {
  return (
    <section className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.32em] text-sky-400/80">About</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Building polished digital products with strategic clarity and technical depth.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I help teams transform bold ideas into delightful, sustainable web experiences through thoughtful design, modern frontend, and resilient backend architecture.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-slate-800">
              <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Expertise</p>
              <p className="mt-3 text-lg font-semibold text-white">End-to-end product engineering</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-slate-800">
              <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Approach</p>
              <p className="mt-3 text-lg font-semibold text-white">Performance, accessibility, and maintainability</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-800/90 p-6 shadow-2xl shadow-slate-950/20">
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Core strengths</p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-300">Design systems, UI polish, and motion.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-300">Scalable API design and application architecture.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-300">Developer experience, testability, and delivery velocity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

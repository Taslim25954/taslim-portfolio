const timelineItems = [
  {
    title: 'Senior Full Stack Developer',
    organization: 'Aether Labs',
    period: '2022 — Present',
    description: 'Leading product-focused engineering teams and building scalable web platforms with modern React and Node.js architecture.',
  },
  {
    title: 'Frontend Engineer',
    organization: 'Northwind Studio',
    period: '2018 — 2022',
    description: 'Delivered polished digital products, UI systems, and responsive design for growth-stage brands.',
  },
  {
    title: 'UI Developer',
    organization: 'Pixel Forge',
    period: '2014 — 2018',
    description: 'Created branded interfaces, design systems, and accessible web products for startups and agencies.',
  },
]

export default function TimelineSection() {
  return (
    <section className="space-y-8 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:p-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80">Timeline</p>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          A career shaped by product rigor and UX-driven engineering.
        </h2>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">
          A timeline of roles that reflect deep craft in frontend, backend, and scalable product delivery.
        </p>
      </div>

      <div className="grid gap-6">
        {timelineItems.map((item, index) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 transition hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.26em] text-slate-500">{item.organization}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              </div>
              <span className="rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
                {item.period}
              </span>
            </div>
            <p className="mt-6 text-slate-300 leading-7">{item.description}</p>
            <div className="mt-6 h-0.5 rounded-full bg-slate-800/80" />
          </div>
        ))}
      </div>
    </section>
  )
}

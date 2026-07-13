const categories = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive design', 'Animated UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'API design', 'PostgreSQL', 'Authentication'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Vite', 'Jest', 'Figma', 'CI/CD'],
  },
]

export default function SkillsSection() {
  return (
    <section className="space-y-10 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:p-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80">Skills</p>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Deep craft across frontend, backend, and delivery systems.
        </h2>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">
          A balanced stack built for polished product experiences, reliable architecture, and fast, maintainable delivery.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.title} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{category.title}</p>
            <div className="mt-6 space-y-3">
              {category.items.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-900/80 px-4 py-3 text-slate-200 transition hover:bg-slate-800">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

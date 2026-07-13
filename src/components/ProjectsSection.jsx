const projectCards = [
  {
    title: 'Northstar Commerce',
    description: 'A premium marketplace experience with sophisticated product discovery and seamless checkout flows.',
    tags: ['React', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Helio Analytics',
    description: 'A data-driven dashboard built for speed, clarity, and intelligent decision-making.',
    tags: ['TypeScript', 'Node.js', 'D3'],
  },
  {
    title: 'Lumen Studio',
    description: 'A polished creative platform that blends editorial storytelling with collaborative workflows.',
    tags: ['Next.js', 'Motion', 'CMS'],
  },
]

export default function ProjectsSection() {
  return (
    <section className="space-y-10 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:p-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80">Featured projects</p>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Selected work built for performance, conversion, and a premium experience.
        </h2>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">
          Each project demonstrates polished interactions, thoughtful architecture, and a strong product focus.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projectCards.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 transition hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="font-semibold text-white">{project.title}</span>
              <span className="text-slate-500">Case Study</span>
            </div>
            <p className="text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

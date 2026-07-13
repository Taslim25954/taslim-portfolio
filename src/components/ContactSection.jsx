const contactMethods = [
  {
    label: 'Email',
    value: 'hello@example.com',
    detail: 'Fast replies for project inquiries and collaboration.',
  },
  {
    label: 'Phone',
    value: '+44 7700 000000',
    detail: 'Available for remote and hybrid work across EMEA.',
  },
  {
    label: 'Location',
    value: 'London, United Kingdom',
    detail: 'Operating in a modern global product ecosystem.',
  },
]

export default function ContactSection() {
  return (
    <section className="space-y-10 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80">Contact</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let’s talk about your next product or engineering challenge.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I partner with ambitious teams to shape digital products that are beautiful, resilient, and built for long-term growth.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => (
              <div key={method.label} className="rounded-3xl bg-slate-950/95 p-5 ring-1 ring-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-900">
                <p className="text-xs uppercase tracking-[0.26em] text-slate-500">{method.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{method.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{method.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="space-y-5 rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-slate-950/20">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/70"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/70"
              />
            </label>
          </div>
          <label className="block text-sm text-slate-300">
            Message
            <textarea
              rows="5"
              placeholder="Tell me about your project, timeline, and goals."
              className="mt-2 w-full rounded-[1.5rem] border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500/70"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition duration-200 hover:brightness-110"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

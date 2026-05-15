const cycles = [
  {
    id: 1,
    name: "Base Building",
    weeks: "Weeks 1–8",
    description:
      "Establish your aerobic foundation with easy mileage and long runs at a conversational pace.",
    focus: ["Easy runs", "Long slow distance", "Strides"],
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    id: 2,
    name: "Build Phase",
    weeks: "Weeks 9–16",
    description:
      "Introduce tempo runs and marathon-pace workouts to develop lactate threshold and race-day efficiency.",
    focus: ["Tempo runs", "Marathon-pace long runs", "Progression runs"],
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    id: 3,
    name: "Peak Phase",
    weeks: "Weeks 17–20",
    description:
      "Maximum mileage and race-specific workouts. This is where your fitness reaches its highest point.",
    focus: ["20-mile long runs", "Race-effort intervals", "Back-to-back efforts"],
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    id: 4,
    name: "Taper",
    weeks: "Weeks 21–22",
    description:
      "Reduce volume while maintaining intensity so your body is primed and fully recovered for race day.",
    focus: ["Reduced mileage", "Race-pace sharpeners", "Rest and recovery"],
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    dot: "bg-violet-500",
  },
  {
    id: 5,
    name: "Race Week",
    weeks: "Week 23",
    description:
      "Short, easy shakeout runs and mental preparation. Trust your training — the work is done.",
    focus: ["Shakeout runs", "Race-day logistics", "Sleep and nutrition"],
    color: "bg-rose-50 border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    dot: "bg-rose-500",
  },
  {
    id: 6,
    name: "Recovery",
    weeks: "Weeks 24–27",
    description:
      "Structured recovery to restore your body and set the stage for your next training cycle.",
    focus: ["Easy walking/jogging", "Cross-training", "Reflection & planning"],
    color: "bg-slate-50 border-slate-200",
    badge: "bg-slate-100 text-slate-700",
    dot: "bg-slate-400",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-white dark:bg-zinc-950 font-sans">
      {/* Nav */}
      <header className="border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Marathon
          </span>
          <nav className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a href="#cycles" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Cycles
            </a>
            <a
              href="#get-started"
              className="rounded-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-4 py-1.5 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-6">
          26.2 miles · 6 phases
        </span>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight mb-6">
          Train smarter with <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
            structured cycles
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10">
          Every marathon finish line starts with a plan. Follow a proven six-phase training cycle
          designed to build your base, sharpen your speed, and carry you across the line.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="#cycles"
            className="rounded-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-6 py-3 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            View all cycles
          </a>
          <a
            href="#get-started"
            className="rounded-full border border-zinc-200 dark:border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Timeline bar */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-0 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800">
          {cycles.map((cycle) => (
            <div
              key={cycle.id}
              className="flex-1 py-3 px-1 text-center text-xs font-medium"
              style={{ background: cycle.id % 2 === 0 ? "rgba(0,0,0,0.02)" : "transparent" }}
            >
              <span className="text-zinc-400 dark:text-zinc-500 hidden sm:block">{cycle.weeks}</span>
              <span className="text-zinc-600 dark:text-zinc-300 block">{cycle.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cycles grid */}
      <section id="cycles" className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          The six cycles
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-sm">
          Each phase builds on the last. Skip one and you risk injury or burnout.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cycles.map((cycle) => (
            <div
              key={cycle.id}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${cycle.color} dark:bg-zinc-900 dark:border-zinc-800`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1">{cycle.weeks}</p>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 text-lg leading-snug">
                    {cycle.name}
                  </h3>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${cycle.badge} dark:bg-zinc-800 dark:text-zinc-300`}
                >
                  Phase {cycle.id}
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {cycle.description}
              </p>

              <ul className="flex flex-col gap-1.5 mt-auto">
                {cycle.focus.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cycle.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="get-started"
        className="border-t border-zinc-100 dark:border-zinc-800"
      >
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Ready to start your cycle?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md mx-auto">
            Pick a goal race, calculate your start date, and follow the cycle week by week.
          </p>
          <a
            href="#cycles"
            className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 px-8 py-3 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Begin Phase 1 →
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-600">
          <span>Marathon Cycles</span>
          <span>26.2 miles starts here</span>
        </div>
      </footer>
    </div>
  );
}

import { Reveal } from "@/components/portfolio/reveal"

const experiences = [
  {
    role: "AI/ML Engineer Intern",
    company: "Coder Roots",
    period: "Nov 2025 — Apr 2026",
    points: [
      "Built end-to-end supervised ML pipelines (classification, regression, clustering) with Scikit-Learn and XGBoost.",
      "Deployed FastAPI inference endpoints serving trained models in production.",
      "Implemented CNNs and Transfer Learning with TensorFlow and PyTorch.",
    ],
  },
  {
    role: "Full Stack Developer Trainee",
    company: "O7 Services",
    period: "Jun 2025 — Jul 2025",
    points: ["Built responsive React.js applications with Firebase Auth and Firestore."],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="font-mono text-lg text-accent">02.</span> Experience
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>

      <div className="relative space-y-10 border-l border-border pl-8">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.1}>
            <div className="relative">
              <span className="absolute -left-[2.55rem] top-1.5 flex size-3 items-center justify-center">
                <span className="size-3 rounded-full border-2 border-accent bg-background" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role} <span className="text-accent">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

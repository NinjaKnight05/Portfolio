import { GraduationCap } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        <span className="font-mono text-lg text-accent">{index}.</span> {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <Reveal delay={0.1}>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I&apos;m an AI/ML Engineer with hands-on experience building ML models, RAG pipelines, AI agents, and
              LLM-powered applications using <span className="text-foreground">LangChain</span>,{" "}
              <span className="text-foreground">Hugging Face</span>, <span className="text-foreground">FastAPI</span>,
              and <span className="text-foreground">Streamlit</span>.
            </p>
            <p>
              Currently working as an AI/ML Engineer Intern at <span className="text-accent">Coder Roots</span>, where I
              build end-to-end supervised ML pipelines and deploy inference endpoints. Previously I was a Full Stack
              Developer Trainee at <span className="text-accent">O7 Services</span>.
            </p>
            <p>
              I enjoy turning research-grade ideas into production systems — from forecasting models that scale across
              hundreds of thousands of records to retrieval-augmented agents that reason over codebases and documents.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col gap-6">
            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-accent">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="font-semibold text-foreground">Education</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                B.Tech in Computer Science &amp; Engineering
              </p>
              <p className="text-sm text-muted-foreground">D.A.V University</p>
              <p className="mt-1 font-mono text-xs text-accent">2021 — 2025</p>
            </div>

            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-accent">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="font-semibold text-foreground">Education</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                12th — Science (PCM)
              </p>
              <p className="text-sm text-muted-foreground">DPS School, HPBOSE</p>
              <p className="mt-1 font-mono text-xs text-accent">2019 — 2021</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

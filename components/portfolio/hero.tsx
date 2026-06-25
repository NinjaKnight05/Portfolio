import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      {/* subtle accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(0.3_0.015_240)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="text-center md:text-left">
          <p className="mb-4 font-mono text-sm text-primary">Hi, my name is</p>
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Anurag Thakur
          </h1>
          <h2 className="mt-4 text-pretty text-xl font-medium text-muted-foreground sm:text-2xl">
            AI/ML Engineer <span className="text-primary">|</span> Generative AI Developer
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:mx-0">
            Building real-world AI systems — RAG pipelines, AI agents, and LLM-powered applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="https://github.com/NinjaKnight05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/anurag-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href="mailto:thakurmnu011@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="size-4" /> Email
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"
            />
            <img
              src="/profile.png"
              alt="Portrait of Anurag Thakur"
              width={200}
              height={200}
              className="relative size-48 rounded-full border-2 border-primary/60 object-cover shadow-[0_0_40px_-5px_oklch(0.78_0.14_200/0.5)] sm:size-52"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

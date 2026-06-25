import { Reveal } from "@/components/portfolio/reveal"

const groups = [
  { title: "Languages", items: ["Python", "SQL", "HTML", "CSS"] },
  {
    title: "GenAI / LLMs",
    items: ["LangChain", "RAG", "AI Agents", "Hugging Face", "Transformers", "Prompt Engineering", "MCP", "NLP"],
  },
  {
    title: "Machine Learning",
    items: ["Scikit-Learn", "Supervised Learning","UnSupervised Learning", "Feature Engineering", "Pandas", "NumPy", "Data Visualization"],
  },
  { title: "Deep Learning", items: ["TensorFlow", "PyTorch", "CNNs", "Transfer Learning", "LSTMs"] },
  { title: "Computer Vision", items: ["OpenCV", "dlib", "MediaPipe", "YOLO"] },
  { title: "Deployment", items: ["FastAPI", "Streamlit", "Docker", "Git", "CI/CD", "AWS"] },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="font-mono text-lg text-accent">04.</span> Skills
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30">
              <h3 className="mb-4 font-mono text-sm font-semibold text-accent">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

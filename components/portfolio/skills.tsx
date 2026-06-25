const groups = [
  { title: "Languages", items: ["Python", "SQL", "HTML", "CSS"] },
  {
    title: "GenAI / LLMs",
    items: ["LangChain", "RAG", "AI Agents", "Hugging Face", "Transformers", "Prompt Engineering", "MCP", "NLP"],
  },
  {
    title: "Machine Learning",
    items: ["Scikit-Learn", "XGBoost", "Feature Engineering", "Pandas", "NumPy", "Data Visualization"],
  },
  { title: "Deep Learning", items: ["TensorFlow", "PyTorch", "CNNs", "Transfer Learning", "LSTMs"] },
  { title: "Computer Vision", items: ["OpenCV", "dlib", "MediaPipe", "YOLO"] },
  { title: "Deployment", items: ["FastAPI", "Streamlit", "Docker", "Git", "CI/CD", "AWS"] },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          <span className="font-mono text-lg text-primary">04.</span> Skills
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-mono text-sm font-semibold text-primary">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

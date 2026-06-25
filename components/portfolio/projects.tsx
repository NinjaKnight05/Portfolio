import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "GitHub Code Explainer",
    tag: "AI Agent",
    description:
      "A RAG-based AI agent that indexes GitHub repositories and answers developer questions about the codebase.",
    tech: ["LangChain", "Qdrant Cloud", "Groq Llama 3", "FastAPI", "React"],
    demo: "https://gitexplainer.onrender.com",
    github: "https://github.com/NinjaKnight05",
  },
  {
    title: "Energy Forecast Prediction",
    tag: "ML",
    description:
      "XGBoost forecasting app on 121k+ hourly PJM energy records (2004–2018). Improved R² from 0.45 to 0.99 through feature engineering.",
    tech: ["XGBoost", "Pandas", "Feature Engineering", "Streamlit"],
    demo: "https://energyforcast.streamlit.app",
    github: "https://github.com/NinjaKnight05",
  },
  {
    title: "PDF Q&A Chatbot",
    tag: "RAG",
    description:
      "A RAG chatbot that answers questions from uploaded PDFs using FAISS vector indexing and Hugging Face embeddings.",
    tech: ["FAISS", "Hugging Face", "LangChain", "Python"],
    github: "https://github.com/NinjaKnight05",
  },
  {
    title: "Driver Drowsiness Alert System",
    tag: "Computer Vision",
    description:
      "Real-time drowsiness detection using Eye Aspect Ratio (EAR) thresholding to alert drivers before they fall asleep.",
    tech: ["OpenCV", "dlib", "EAR", "Python"],
    github: "https://github.com/NinjaKnight05",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          <span className="font-mono text-lg text-primary">03.</span> Projects
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_8px_30px_-12px_oklch(0.78_0.14_200/0.35)]"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">{p.tag}</span>
              <div className="flex items-center gap-3 text-muted-foreground">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} GitHub repository`}
                    className="transition-colors hover:text-primary"
                  >
                    <Github className="size-5" />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="transition-colors hover:text-primary"
                  >
                    <ExternalLink className="size-5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

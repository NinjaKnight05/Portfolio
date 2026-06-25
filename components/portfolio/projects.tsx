"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "@/components/portfolio/reveal"

const projects = [
  {
    title: "GitHub Code Explainer",
    tag: "AI Agent",
    description:
      "A RAG-based AI agent that indexes GitHub repositories and answers developer questions about the codebase.",
    tech: ["LangChain", "Pinecone", "Groq Llama 3", "FastAPI", "React"],
    demo: "https://gitexplainer.onrender.com",
    github: "https://github.com/NinjaKnight05",
  },
  {
    title: "Energy Forecast Prediction",
    tag: "Machine Learning",
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
  {
    title: "Churn Prediction",
    tag: "Machine Learning",
    description:
      "It predicts whether a telecom customer is likely to cancel their subscription {churn} or stay",
    tech: ["Random Forest", "Pandas", "Feature Engineering", "Streamlit"],
    github: "https://github.com/NinjaKnight05",
    demo: "https://churnp1.streamlit.app",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="font-mono text-lg text-accent">03.</span> Projects
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-foreground/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-foreground/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="mb-4 flex items-start justify-between">
                <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-accent">{p.tag}</span>
                <div className="flex items-center gap-3 text-muted-foreground">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} GitHub repository`}
                      className="transition-colors hover:text-foreground"
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
                      className="transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="size-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

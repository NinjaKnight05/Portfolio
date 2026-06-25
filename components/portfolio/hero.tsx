"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "motion/react"
import { NeuralNetwork } from "@/components/portfolio/neural-network"
import { HexBrain } from "@/components/portfolio/hex-brain"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <NeuralNetwork className="pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-50" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto]"
      >
        <div className="text-center md:text-left">
          <motion.p variants={item} className="mb-4 font-mono text-sm tracking-wide text-accent">
            {"// Hi, my name is"}
          </motion.p>
          <motion.h1
            variants={item}
            className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">Anurag Thakur</span>
          </motion.h1>
          <motion.h2
            variants={item}
            className="mt-4 text-pretty text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            AI/ML Engineer <span className="text-foreground/40">/</span> Generative AI Developer
          </motion.h2>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:mx-0"
          >
            Building real-world AI systems — RAG pipelines, AI agents, and LLM-powered applications.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href="https://github.com/NinjaKnight05"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/anurag-thakur-660683241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/60"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href="mailto:obitotobi0502@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/60"
            >
              <Mail className="size-4" /> Email
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="flex justify-center md:justify-end">
          <div className="group relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-foreground/10 blur-2xl transition-all duration-500 group-hover:bg-foreground/20"
            />
            <div aria-hidden className="absolute -inset-2 rounded-full border border-border animate-spin-slow" />
            <HexBrain
              aria-hidden
              className="pointer-events-none absolute -inset-12 text-accent opacity-50"
            />
            <img
              src="/profile.png"
              alt="Portrait of Anurag Thakur"
              width={208}
              height={208}
              className="relative size-48 rounded-full border-2 border-border object-cover transition-all duration-500 sm:size-52"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  )
}

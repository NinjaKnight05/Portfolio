"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:thakurmnu011@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    "w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          <span className="font-mono text-lg text-primary">05.</span> Contact
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-foreground">Let&apos;s build something together</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I&apos;m open to AI/ML engineering roles and interesting collaborations. Feel free to reach out through the
            form or any of the channels below.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="mailto:thakurmnu011@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-5" /> thakurmnu011@gmail.com
            </a>
            <a
              href="https://github.com/NinjaKnight05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-5" /> github.com/NinjaKnight05
            </a>
            <a
              href="https://linkedin.com/in/anurag-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-5" /> linkedin.com/in/anurag-thakur
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
              placeholder="What would you like to talk about?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Send className="size-4" /> Send message
          </button>
          {sent && (
            <p className="text-center text-sm text-primary">Opening your email client — thanks for reaching out!</p>
          )}
        </form>
      </div>
    </section>
  )
}

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Anurag Thakur. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a
            href="https://github.com/NinjaKnight05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://linkedin.com/in/anurag-thakur"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="mailto:thakurmnu011@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-primary"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

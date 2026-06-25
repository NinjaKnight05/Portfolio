import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Anurag Thakur  AI/ML Engineer &amp; All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a
            href="https://www.instagram.com/anurag.thakurr___05/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-primary"
          >
            <Instagram className="size-5" />
          </a>
          
          <a
            href="https://x.com/AnuragT0505"
            aria-label="Twitter"
            className="transition-colors hover:text-primary"
          >
            <Twitter className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

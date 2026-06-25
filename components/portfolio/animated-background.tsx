"use client"

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* animated gradient blobs */}
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-secondary/40 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-secondary/30 blur-3xl animate-blob"
        style={{ animationDelay: "8s" }}
      />

      {/* floating 3D-ish shapes */}
      <div className="absolute left-[8%] top-[20%] h-20 w-20 rotate-12 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm animate-float" />
      <div className="absolute right-[12%] top-[30%] h-12 w-12 rounded-full border border-border/60 bg-card/30 backdrop-blur-sm animate-float-slow" />
      <div className="absolute left-[18%] bottom-[18%] h-16 w-16 rotate-45 rounded-xl border border-border/60 bg-card/20 backdrop-blur-sm animate-float-slow" />
      <div className="absolute right-[20%] bottom-[26%] h-24 w-24 rounded-full border border-border/40 animate-spin-slow" />
    </div>
  )
}

"use client"

import { motion } from "motion/react"
import { useMemo } from "react"

// A hexagonal grid of connected nodes that pulse like a neural net / AI brain.
export function HexBrain({ className = "" }: { className?: string }) {
  const { nodes, edges } = useMemo(() => buildHexGrid(), [])

  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* edges */}
      <g stroke="currentColor" strokeWidth="0.6">
        {edges.map((e, i) => (
          <motion.line
            key={i}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.08, 0.35, 0.08] }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Number.POSITIVE_INFINITY,
              delay: (i % 7) * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>

      {/* traveling signal pulses along some edges */}
      <g>
        {edges
          .filter((_, i) => i % 4 === 0)
          .map((e, i) => (
            <motion.circle
              key={`p-${i}`}
              r="1.8"
              fill="currentColor"
              initial={{ cx: e.x1, cy: e.y1, opacity: 0 }}
              animate={{
                cx: [e.x1, e.x2],
                cy: [e.y1, e.y2],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Number.POSITIVE_INFINITY,
                delay: (i % 6) * 0.6,
                ease: "easeInOut",
              }}
            />
          ))}
      </g>

      {/* nodes */}
      <g>
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            fill="currentColor"
            initial={{ r: 2, opacity: 0.5 }}
            animate={{ r: [2, 3.2, 2], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2.4 + (i % 4) * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: (i % 8) * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>
    </svg>
  )
}

type Pt = { x: number; y: number }

function buildHexGrid() {
  const nodes: Pt[] = []
  const R = 34 // hex radius
  const cols = 6
  const rows = 6
  const hw = (Math.sqrt(3) / 2) * R

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = 40 + col * hw * 2 + (row % 2 ? hw : 0)
      const y = 40 + row * R * 1.5
      if (x > 10 && x < 310 && y > 10 && y < 310) {
        nodes.push({ x, y })
      }
    }
  }

  const edges: { x1: number; y1: number; x2: number; y2: number }[] = []
  const maxDist = R * 1.35
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const d = Math.hypot(dx, dy)
      if (d < maxDist) {
        edges.push({ x1: nodes[i].x, y1: nodes[i].y, x2: nodes[j].x, y2: nodes[j].y })
      }
    }
  }

  return { nodes, edges }
}

'use client'

import { motion } from 'framer-motion'
import { FloatingShapes } from '@/components/animations/FloatingShapes'

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-soft-black pt-40 pb-28">
      <FloatingShapes count={6} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,212,0,0.08)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-yellow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow">Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading mb-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl"
        >
          Everything You Need to{' '}
          <span className="text-yellow">Own the Room</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl text-lg leading-relaxed text-white/60"
        >
          From bespoke event games to full-scale brand activations, we design and build experiences that make your brand the most exciting thing in the room.
        </motion.p>
      </div>
    </section>
  )
}

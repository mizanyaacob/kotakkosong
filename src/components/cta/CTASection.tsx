'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FloatingShapes } from '@/components/animations/FloatingShapes'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-yellow py-28">
      {/* Shapes */}
      <FloatingShapes count={5} />

      {/* Dark accent block */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-soft-black/10"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-xs font-semibold uppercase tracking-widest text-soft-black/50"
        >
          Ready to get started?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading mb-8 text-5xl font-bold leading-tight tracking-tight text-soft-black md:text-6xl lg:text-7xl"
        >
          Ready To Make Your Brand
          <br />
          <span className="text-soft-black/80">Impossible To Ignore?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-xl text-lg text-soft-black/60"
        >
          Tell us about your event and we&apos;ll show you exactly how to turn it into an experience people can&apos;t stop talking about.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-soft-black px-9 py-4.5 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border-2 border-soft-black/20 px-9 py-4.5 text-base font-semibold text-soft-black transition-all hover:border-soft-black/40 hover:bg-soft-black/5"
          >
            See Our Work First
          </Link>
        </motion.div>

        {/* Trust markers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-soft-black/40"
        >
          {['100+ Projects Delivered', 'Based in Malaysia', 'Free Consultation'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" fill="#111111" fillOpacity="0.1" />
                <path d="M4 7l2 2 4-4" stroke="#111111" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Play } from 'lucide-react'
import { FloatingShapes } from '@/components/animations/FloatingShapes'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative flex h-screen min-h-[700px] items-center overflow-hidden bg-soft-black">
      <div className="absolute inset-0">
        <motion.div style={{ y }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-30"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-b from-soft-black/60 via-soft-black/40 to-soft-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(255,212,0,0.08)_0%,transparent_60%)]" />
      </div>

      <FloatingShapes />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-1/2 h-px w-24 origin-left bg-yellow"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-yellow" />
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow">
              Interactive Experience Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Creating{' '}
            <span className="relative inline-block">
              <span className="text-yellow">Experiences</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 block h-0.5 w-full origin-left bg-yellow/40"
              />
            </span>
            <br />
            People{' '}
            <span className="relative inline-block">
              <span className="text-yellow">Never Forget</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 block h-0.5 w-full origin-left bg-yellow/40"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/65"
          >
            While others hand out flyers, your brand will have a crowd. We build interactive experiences that attract more visitors, hold attention longer, and leave your competitors wondering how you did it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-yellow px-8 py-4 font-semibold text-soft-black transition-all hover:bg-yellow-dark hover:shadow-xl hover:shadow-yellow-400/20"
            >
              View Our Work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              <Play size={14} fill="currentColor" />
              Let&apos;s Talk
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: '5', label: 'Experiences Built' },
              { value: '3+', label: 'Years Building' },
              { value: 'MY', label: 'Based in Malaysia' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-heading text-2xl font-bold text-yellow">{stat.value}</span>
                <span className="text-xs text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}

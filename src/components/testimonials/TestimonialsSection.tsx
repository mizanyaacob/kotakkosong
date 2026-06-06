'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, UserRound } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Player Reactions"
          title="Heard at Our Events"
          align="center"
          className="mb-16"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-3xl bg-soft-black p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-yellow/8" />
            <div className="pointer-events-none absolute right-10 top-10 text-yellow/10">
              <Quote size={80} strokeWidth={1} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <p className="mb-10 text-xl leading-relaxed text-white/80 md:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <UserRound size={22} className="text-white/40" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white">{current.name}</p>
                    <p className="text-sm text-white/50">{current.role} · {current.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-yellow' : 'w-1.5 bg-medium-gray hover:bg-soft-black/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-medium-gray text-soft-black/50 transition-all hover:border-yellow hover:text-soft-black"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-soft-black text-white transition-all hover:bg-yellow hover:text-soft-black"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

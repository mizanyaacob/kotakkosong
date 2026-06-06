'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { portfolioItems } from '@/data/portfolio'

const featured = portfolioItems.slice(0, 4)

function ExperienceCard({ item, index }: { item: (typeof featured)[number]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-2xl bg-soft-black ${
        index === 0 ? 'sm:col-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: index === 0 ? '16/9' : '4/3' }}>
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-soft-black via-soft-black/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-yellow px-3 py-1 text-[11px] font-bold text-soft-black">
            {item.category}
          </span>
        </div>

        {/* Hover CTA */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 top-4"
            >
              <Link
                href={`/portfolio/${item.slug}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow text-soft-black transition-transform hover:scale-110"
              >
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="mb-1 text-xs font-medium text-white/40">{item.client} · {item.year}</p>
        <h3 className="font-heading mb-2 text-xl font-bold text-white">{item.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-white/55 line-clamp-2">{item.description}</p>

        {/* Results */}
        <div className="mb-5 flex flex-wrap gap-3">
          {item.results.map((r) => (
            <div key={r.label} className="rounded-lg bg-white/5 px-3 py-2">
              <span className="block font-heading text-base font-bold text-yellow">{r.value}</span>
              <span className="block text-[10px] text-white/40">{r.label}</span>
            </div>
          ))}
        </div>

        {/* Yellow animated border */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 h-px w-full origin-left bg-yellow"
        />

        <Link
          href={`/portfolio/${item.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow transition-gap hover:gap-2"
        >
          View Experience
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  )
}

export function FeaturedExperiences() {
  return (
    <section className="bg-light-gray py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Featured Experiences"
            title="Work That Moves People"
            description="A selection of experiences we've built for brands who wanted more than a booth."
            align="left"
          />
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-soft-black px-6 py-3 text-sm font-semibold text-soft-black transition-all hover:bg-soft-black hover:text-white"
          >
            View All Work
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SafeImage } from '@/components/shared/SafeImage'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolioItems } from '@/data/portfolio'
import type { PortfolioItem } from '@/types'

type Category = 'All' | PortfolioItem['category']

const categories: Category[] = ['All', 'Events', 'Activations', 'Games', 'Installations']

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl bg-soft-black"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <SafeImage
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-600 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-soft-black via-soft-black/10 to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-yellow px-3 py-1 text-[11px] font-bold text-soft-black">
            {item.category}
          </span>
        </div>

        {/* Hover link */}
        <Link
          href={`/portfolio/${item.slug}`}
          className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-yellow text-soft-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`View ${item.title}`}
        >
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="mb-1 text-xs font-medium text-white/35">{item.client} · {item.year}</p>
        <h3 className="font-heading mb-3 text-lg font-bold text-white">{item.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-white/50 line-clamp-2">{item.description}</p>

        {/* Results pills */}
        <div className="flex flex-wrap gap-2">
          {item.results.map((r) => (
            <div key={r.label} className="rounded-lg bg-white/5 px-3 py-1.5">
              <span className="font-heading text-sm font-bold text-yellow">{r.value}</span>
              <span className="ml-1.5 text-[10px] text-white/35">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="bg-light-gray py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-soft-black text-white shadow-md'
                  : 'border border-medium-gray bg-white text-soft-black/60 hover:bg-white hover:text-soft-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-soft-black/40">
            No projects found in this category yet.
          </div>
        )}
      </div>
    </section>
  )
}

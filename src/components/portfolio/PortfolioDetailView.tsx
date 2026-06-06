'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { SafeImage } from '@/components/shared/SafeImage'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, X, CheckCircle2, Cpu, Target, TrendingUp, Play, Expand } from 'lucide-react'
import type { PortfolioItem } from '@/types'
import { CTASection } from '@/components/cta/CTASection'

interface Props {
  item: PortfolioItem
  next: PortfolioItem
  prev: PortfolioItem
}

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src)
}

function VideoThumb({ src, onClick }: { src: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative h-full w-full overflow-hidden bg-soft-black"
    >
      <video
        src={src}
        muted
        loop
        playsInline
        autoPlay
        className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play size={18} className="ml-0.5 text-soft-black" fill="currentColor" />
        </div>
      </div>
    </button>
  )
}

function ImageThumb({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative h-full w-full overflow-hidden bg-light-gray"
    >
      <SafeImage
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/0 opacity-0 transition-all duration-300 group-hover:bg-white/90 group-hover:opacity-100">
        <Expand size={13} className="text-soft-black" />
      </div>
    </button>
  )
}

function Lightbox({
  items,
  startIndex,
  title,
  onClose,
}: {
  items: string[]
  startIndex: number
  title: string
  onClose: () => void
}) {
  const [index, setIndex] = useState(startIndex)
  const current = items[index]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={18} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + items.length) % items.length) }}
        className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ArrowLeft size={20} />
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative mx-20 w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: '16/9' }}
      >
        {isVideo(current) ? (
          <video
            src={current}
            controls
            autoPlay
            className="h-full w-full object-contain"
          />
        ) : (
          <SafeImage
            src={current}
            alt={`${title} ${index + 1}`}
            fill
            className="object-contain"
            sizes="90vw"
          />
        )}
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % items.length) }}
        className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ArrowRight size={20} />
      </button>

      {/* Dot + type indicator strip */}
      <div className="absolute bottom-5 flex items-center gap-2">
        {items.map((src, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIndex(i) }}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-yellow' : 'w-1.5 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-5 right-6 text-xs text-white/30">
        {index + 1} / {items.length}
      </div>
    </motion.div>
  )
}

function GalleryBento({ items, title, onOpen }: { items: string[]; title: string; onOpen: (i: number) => void }) {
  if (items.length === 0) return null

  const [first, second, third, ...rest] = items

  return (
    <div className="flex flex-col gap-2">
      {/* Row 1: featured + secondary */}
      <div className={`grid gap-2 ${second ? 'grid-cols-3' : 'grid-cols-1'}`}>
        {/* Featured — takes 2/3 */}
        <div className="col-span-2 overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9' }}>
          {isVideo(first)
            ? <VideoThumb src={first} onClick={() => onOpen(0)} />
            : <ImageThumb src={first} alt={`${title} 1`} onClick={() => onOpen(0)} />}
        </div>

        {/* Secondary — takes 1/3 */}
        {second && (
          <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: '9/16' }}>
            {isVideo(second)
              ? <VideoThumb src={second} onClick={() => onOpen(1)} />
              : <ImageThumb src={second} alt={`${title} 2`} onClick={() => onOpen(1)} />}
          </div>
        )}
      </div>

      {/* Row 2: up to 3 items */}
      {(third || rest.length > 0) && (
        <div className={`grid gap-2 grid-cols-${Math.min([third, ...rest].filter(Boolean).length, 3)}`}
          style={{ gridTemplateColumns: `repeat(${Math.min([third, ...rest].filter(Boolean).length, 3)}, 1fr)` }}
        >
          {[third, ...rest].filter(Boolean).slice(0, 3).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
              {isVideo(src)
                ? <VideoThumb src={src} onClick={() => onOpen(i + 2)} />
                : <ImageThumb src={src} alt={`${title} ${i + 3}`} onClick={() => onOpen(i + 2)} />}
            </div>
          ))}
        </div>
      )}

      {/* Row 3+: remaining overflow in 4-col strip */}
      {rest.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {rest.slice(1).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl" style={{ aspectRatio: '1/1' }}>
              {isVideo(src)
                ? <VideoThumb src={src} onClick={() => onOpen(i + 5)} />
                : <ImageThumb src={src} alt={`${title} ${i + 6}`} onClick={() => onOpen(i + 5)} />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function PortfolioDetailView({ item, next, prev }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const allMedia = [item.image, ...item.gallery.filter((g) => g !== item.image)]

  return (
    <>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={allMedia}
            startIndex={lightboxIndex}
            title={item.title}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-120 overflow-hidden bg-soft-black">
        <SafeImage
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-soft-black via-soft-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
              >
                <ArrowLeft size={14} />
                All Work
              </Link>
              <span className="text-white/20">/</span>
              <span className="rounded-full bg-yellow px-3 py-1 text-xs font-bold text-soft-black">
                {item.category}
              </span>
            </div>
            <h1 className="font-heading mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {item.title}
            </h1>
            <p className="text-base text-white/50">{item.client} · {item.year}</p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-24">

            {/* Main content */}
            <div className="space-y-16 lg:col-span-2">

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-heading mb-5 text-2xl font-bold text-soft-black">About This Experience</h2>
                <div className="space-y-4 text-base leading-relaxed text-soft-black/60">
                  {item.fullDescription.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              {allMedia.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="font-heading mb-5 text-2xl font-bold text-soft-black">Gallery</h2>
                  <GalleryBento
                    items={allMedia}
                    title={item.title}
                    onOpen={(i) => setLightboxIndex(i)}
                  />
                </motion.div>
              )}

              {/* Objectives & Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid gap-10 sm:grid-cols-2"
              >
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Target size={16} className="text-yellow" />
                    <h3 className="font-heading text-lg font-bold text-soft-black">Objectives</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.objectives.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm text-soft-black/60">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp size={16} className="text-yellow" />
                    <h3 className="font-heading text-lg font-bold text-soft-black">Outcomes</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm text-soft-black/60">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-yellow" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Results */}
              <div className="rounded-2xl bg-soft-black p-7">
                <h3 className="font-heading mb-5 text-sm font-bold uppercase tracking-widest text-white/40">
                  Impact
                </h3>
                <div className="space-y-5">
                  {item.results.map((r) => (
                    <div key={r.label} className="flex flex-col gap-1 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                      <span className="font-heading text-2xl font-bold text-yellow">{r.value}</span>
                      <span className="text-sm text-white/50">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Cpu size={14} className="text-soft-black/40" />
                  <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-soft-black/40">
                    Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-medium-gray bg-light-gray px-3 py-1.5 text-xs font-medium text-soft-black/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA box */}
              <div className="rounded-2xl bg-yellow p-7">
                <h3 className="font-heading mb-2 text-lg font-bold text-soft-black">
                  Want something like this?
                </h3>
                <p className="mb-5 text-sm text-soft-black/60">
                  Tell us about your event and we&apos;ll design an experience around your brand.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-soft-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#222222]"
                >
                  Start a Conversation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="border-t border-medium-gray bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-medium-gray px-6 lg:px-8">
          <Link
            href={`/portfolio/${prev.slug}`}
            className="group flex flex-col gap-1 py-8 pr-8 transition-colors hover:text-soft-black"
          >
            <span className="flex items-center gap-1.5 text-xs text-soft-black/40 transition-colors group-hover:text-yellow">
              <ArrowLeft size={12} /> Previous
            </span>
            <span className="font-heading text-base font-bold text-soft-black line-clamp-1">{prev.title}</span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col items-end gap-1 py-8 pl-8 transition-colors"
          >
            <span className="flex items-center gap-1.5 text-xs text-soft-black/40 transition-colors group-hover:text-yellow">
              Next <ArrowRight size={12} />
            </span>
            <span className="font-heading text-base font-bold text-soft-black line-clamp-1">{next.title}</span>
          </Link>
        </div>
      </div>

      <CTASection />
    </>
  )
}

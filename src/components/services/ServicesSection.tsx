'use client'

import { motion } from 'framer-motion'
import { Gamepad2, Layers, Zap, Monitor, Trophy, Users } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { services } from '@/data/services'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Gamepad2,
  Layers,
  Zap,
  Monitor,
  Trophy,
  Users,
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = iconMap[service.icon] || Layers

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-medium-gray bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-yellow/40 hover:shadow-xl hover:shadow-black/5"
    >
      {/* Yellow accent top line */}
      <div className="absolute left-0 top-0 h-0.5 w-0 bg-yellow transition-all duration-500 group-hover:w-full" />

      {/* Icon */}
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-light-gray transition-colors duration-300 group-hover:bg-yellow/15">
        <Icon
          size={24}
          className="text-soft-black/40 transition-colors duration-300 group-hover:text-soft-black"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="font-heading mb-3 text-xl font-bold text-soft-black">{service.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-soft-black/55">{service.description}</p>

      <ul className="space-y-2">
        {service.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-soft-black/50">
            <span className="h-1 w-1 shrink-0 rounded-full bg-yellow" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover arrow */}
      <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Learn more
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Engagement Solutions That Actually Work"
          description="Every experience we build is designed with one goal: to stop people in their tracks, pull them in, and make them stay longer."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

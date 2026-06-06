'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Gamepad2, Layers, Zap, Monitor, Trophy, Users } from 'lucide-react'
import { services, serviceDetails } from '@/data/services'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = { Gamepad2, Layers, Zap, Monitor, Trophy, Users }

export function ServicesDetail() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers
            const detail = serviceDetails.find((d) => d.id === service.id)
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-20 ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Visual */}
                <div className="relative flex items-center justify-center">
                  <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-3xl bg-light-gray lg:h-96">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow/20">
                        <Icon size={36} strokeWidth={1.5} className="text-soft-black" />
                      </div>
                      <span className="font-heading text-xl font-bold text-soft-black">{service.title}</span>
                    </div>
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow/10" />
                    <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-yellow/8" />
                    <span className="absolute right-6 top-6 font-heading text-7xl font-black text-soft-black/5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-yellow">
                    0{i + 1}
                  </span>
                  <h2 className="font-heading mb-4 text-3xl font-bold text-soft-black lg:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-soft-black/60">
                    {detail?.overview || service.description}
                  </p>

                  {detail && (
                    <div className="mb-6">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-soft-black/40">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {detail.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-soft-black/65">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-yellow" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-soft-black/40">
                      What You Get
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-medium-gray bg-light-gray px-3 py-1.5 text-xs text-soft-black/70"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

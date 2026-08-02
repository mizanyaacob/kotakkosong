'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'

const values = [
  {
    icon: '💡',
    title: 'Creativity',
    description:
      'We don\'t copy, we invent. Every project starts with a blank canvas and a commitment to find a fresh, unexpected angle.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description:
      'We push what gamification can do, combining emerging tech with timeless principles of play and human motivation.',
  },
  {
    icon: '🤝',
    title: 'Reliability',
    description:
      'Term dates and launch dates do not move. We deliver what we promise: on spec, on budget, on time, every single time.',
  },
  {
    icon: '🌱',
    title: 'Collaboration',
    description:
      'The best outcomes come from working closely with the people who know the audience: your team, your trainers, your teachers.',
  },
  {
    icon: '📈',
    title: 'Impact',
    description:
      'Fun isn\'t enough on its own. Every experience we build is designed to move a real number: learning, participation, or retention.',
  },
]

export function ValuesSection() {
  return (
    <section className="bg-light-gray py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Values"
          title="What Drives Everything We Do"
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
            >
              <span className="text-4xl">{value.icon}</span>
              <h3 className="font-heading text-lg font-bold text-soft-black">{value.title}</h3>
              <p className="text-sm leading-relaxed text-soft-black/55">{value.description}</p>
              <div className="mt-2 h-0.5 w-8 bg-yellow opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

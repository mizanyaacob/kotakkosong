'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { FadeIn } from '@/components/animations/FadeIn'

const stats = [
  {
    value: '300%+',
    label: 'More Participation',
    description: 'Playable formats consistently out-pull the same content delivered passively.',
  },
  {
    value: '2X',
    label: 'Time On Task',
    description: 'People stay with a task far longer when it is structured as a game.',
  },
  {
    value: '10,000+',
    label: 'Players Engaged',
    description: 'Across classrooms, campaigns, exhibitions, and training rooms.',
  },
  {
    value: '92%',
    label: 'Recall After 7 Days',
    description: 'People remember what they played long after they forget what they were shown.',
  },
]

const reasons = [
  {
    title: 'People are wired to chase progress',
    description:
      'A clear goal, a simple rule set, and feedback on every attempt. That loop works the same way on a five-year-old and a boardroom.',
  },
  {
    title: 'Participation beats presentation',
    description:
      'Doing something builds memory that watching something never does. Play turns an audience into participants, and participants remember.',
  },
  {
    title: 'Play makes repetition bearable',
    description:
      'Practice is where learning, habits, and loyalty are actually built. Games get people to volunteer for the reps.',
  },
]

export function WhyItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-soft-black py-28">
      {/* Decorative blob */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-yellow/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why It Works"
          title="The Science Behind Engagement"
          description="Gamification isn't just fun. The mechanics underneath it are how people learn, form habits, and keep coming back."
          align="center"
          dark
          className="mb-20"
        />

        {/* Stats */}
        <div className="mb-20 grid gap-px rounded-2xl overflow-hidden border border-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 bg-white/[0.03] p-10 text-center"
            >
              <span className="font-heading text-5xl font-bold text-yellow">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="font-heading text-lg font-semibold text-white">{stat.label}</span>
              <p className="text-sm leading-relaxed text-white/40">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid gap-8 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.12} direction="up">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-xs font-bold text-yellow/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

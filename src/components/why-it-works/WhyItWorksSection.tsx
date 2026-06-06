'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { FadeIn } from '@/components/animations/FadeIn'

const stats = [
  {
    value: '300%+',
    label: 'Engagement Increase',
    description: 'Average boost in booth foot traffic compared to traditional static displays.',
  },
  {
    value: '2X',
    label: 'Visitor Retention',
    description: 'Visitors stay twice as long at interactive experiences vs passive displays.',
  },
  {
    value: '10,000+',
    label: 'Participants Per Event',
    description: 'Average number of people who interact with our experiences at large events.',
  },
  {
    value: '92%',
    label: 'Brand Recall',
    description: 'Participants still remember the brand experience 7 days after the event.',
  },
]

const reasons = [
  {
    title: 'People naturally seek novelty',
    description:
      'Interactive experiences stand out in crowded event environments. When something moves, responds, or reacts, people stop.',
  },
  {
    title: 'Participation creates emotional connection',
    description:
      'When visitors actively engage rather than passively watch, they form deeper connections with your brand story.',
  },
  {
    title: 'Social sharing amplifies reach',
    description:
      'Great experiences get photographed and shared. Your event activation becomes content that travels far beyond the venue.',
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
          description="Interactive experiences aren't just fun. They're proven to drive measurable results for brands."
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

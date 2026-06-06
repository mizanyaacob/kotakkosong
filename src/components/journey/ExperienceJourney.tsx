'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dig deep into your brand, your audience, and your event goals to understand what success really looks like.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our creative team crafts experience concepts that align your brand story with what your audience wants to feel.',
    icon: '✏️',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We build every interaction, from the UI to the hardware, with precision, testing every scenario before deployment.',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Our team handles on-site setup, tech checks, and goes live with you so everything runs perfectly from day one.',
    icon: '🚀',
  },
  {
    number: '05',
    title: 'Engage',
    description: 'Visitors interact, participate, and create moments, while we monitor, support, and optimize in real time.',
    icon: '⚡',
  },
  {
    number: '06',
    title: 'Measure',
    description: 'After the event, we deliver a full engagement report with data on participation, retention, and ROI.',
    icon: '📊',
  },
]

export function ExperienceJourney() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section className="bg-white py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="How We Bring Experiences to Life"
          description="From initial brief to post-event insights: a proven process that makes every project exceptional."
          align="center"
          className="mb-20"
        />

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Line */}
          <div className="relative mb-16">
            <div className="h-px w-full bg-medium-gray" />
            <motion.div
              style={{ width: lineWidth }}
              className="absolute left-0 top-0 h-px bg-yellow"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col gap-4"
              >
                {/* Dot */}
                <div className="-mt-[22px] mb-6 flex">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-medium-gray bg-white text-lg transition-all duration-300 group-hover:border-yellow group-hover:shadow-lg group-hover:shadow-yellow-100">
                    {step.icon}
                  </div>
                </div>
                <span className="font-heading text-xs font-bold text-yellow">{step.number}</span>
                <h3 className="font-heading text-lg font-bold text-soft-black">{step.title}</h3>
                <p className="text-xs leading-relaxed text-soft-black/50">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="flex flex-col gap-0 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6"
            >
              {/* Connector */}
              <div className="flex flex-col items-center gap-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-light-gray text-xl">
                  {step.icon}
                </div>
                {i < steps.length - 1 && <div className="mt-1 h-full min-h-[48px] w-px bg-medium-gray" />}
              </div>
              {/* Content */}
              <div className="pb-10 pt-2">
                <span className="mb-1 block text-xs font-bold text-yellow">{step.number}</span>
                <h3 className="font-heading mb-2 text-lg font-bold text-soft-black">{step.title}</h3>
                <p className="text-sm leading-relaxed text-soft-black/50">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

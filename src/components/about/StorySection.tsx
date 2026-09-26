'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'

export function StorySection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Our Story"
            title="Started with a Question"
            align="left"
            className="mb-8"
          />
          <div className="space-y-5 text-soft-black/60">
            <FadeIn direction="up" delay={0.1}>
              <p className="leading-relaxed">
                Kotak Kosong was born from a simple observation: at most events and exhibitions, visitors walk past booth after booth without stopping. They scan QR codes nobody asked for. They collect brochures they&apos;ll never read. Attention was being asked for, never earned.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="leading-relaxed">
                We asked: <em className="font-semibold text-soft-black">what if people actually wanted to be there?</em> Not obliged. Not incentivised. Wanting to be there, the way a child wants one more round before bed.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="leading-relaxed">
                That question became our studio. We started on event floors, but the same problem was waiting everywhere we looked. A teacher losing a room of five-year-olds by the second slide. A training module nobody finishes. A loyalty app nobody opens twice. It is always the same problem wearing different clothes, and game designers have been quietly solving it for forty years.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p className="leading-relaxed">
                So that is what we do now, as a gamification provider rather than an event studio. We build learning that four-year-olds beg to do again. Training that people finish without being chased. Campaigns worth returning to. Same craft every time, pointed at whatever needs to stop being ignored.
              </p>
            </FadeIn>
          </div>

          {/* Mission & Vision */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { label: 'Mission', text: 'Make learning something people ask for.' },
              { label: 'Vision', text: 'A world where nothing worth knowing is boring.' },
            ].map((item) => (
              <FadeIn key={item.label} direction="up" delay={0.3}>
                <div className="rounded-2xl border border-medium-gray p-6">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-yellow-ink">
                    {item.label}
                  </span>
                  <p className="font-heading text-base font-semibold text-soft-black">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Numbers */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-medium-gray lg:grid-cols-4">
          {[
            { value: '5', label: 'Experiences Built' },
            { value: 'MY', label: 'Based in Malaysia' },
            { value: '3+', label: 'Years Building' },
            { value: '∞', label: 'Ideas in the Pipeline' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-light-gray px-8 py-10 text-center"
            >
              <span className="font-heading text-4xl font-bold text-soft-black">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-sm text-soft-black/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

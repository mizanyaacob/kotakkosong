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
                Kotak Kosong was born from a simple observation: at most events and exhibitions, visitors walk past booth after booth without stopping. They scan QR codes nobody asked for. They collect brochures they&apos;ll never read.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="leading-relaxed">
                We asked: <em className="font-semibold text-soft-black">what if people actually wanted to be there?</em> What if the brand experience was so compelling that visitors sought it out, stayed longer, and told their friends?
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="leading-relaxed">
                That question became our studio. Today we design, build, and operate interactive experiences for exhibitions, roadshows, product launches, and brand activations across Malaysia, helping brands turn passive visitors into active participants.
              </p>
            </FadeIn>
          </div>

          {/* Mission & Vision */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { label: 'Mission', text: 'Creating experiences people remember.' },
              { label: 'Vision', text: 'Making every event more engaging.' },
            ].map((item) => (
              <FadeIn key={item.label} direction="up" delay={0.3}>
                <div className="rounded-2xl border border-medium-gray p-6">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-yellow">
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
              <span className="text-sm text-soft-black/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

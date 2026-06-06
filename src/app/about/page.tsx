import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { StorySection } from '@/components/about/StorySection'
import { ValuesSection } from '@/components/about/ValuesSection'
import { CTASection } from '@/components/cta/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Kotak Kosong Studios: our story, mission, values, and the team behind Malaysia\'s leading interactive event experience studio.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <CTASection />
    </>
  )
}

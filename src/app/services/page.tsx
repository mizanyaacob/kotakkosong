import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesDetail } from '@/components/services/ServicesDetail'
import { ExperienceJourney } from '@/components/journey/ExperienceJourney'
import { CTASection } from '@/components/cta/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Kotak Kosong Studios\' gamification services: custom game development, learning and education gamification from early childhood upward, gamified campaigns, loyalty and reward systems, and gamification strategy.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <ExperienceJourney />
      <CTASection />
    </>
  )
}

import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesDetail } from '@/components/services/ServicesDetail'
import { ExperienceJourney } from '@/components/journey/ExperienceJourney'
import { CTASection } from '@/components/cta/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Kotak Kosong Studios\' full range of interactive event services: event games, brand activations, digital installations, gamification systems, and more.',
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

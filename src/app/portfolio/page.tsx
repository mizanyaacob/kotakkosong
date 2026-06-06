import type { Metadata } from 'next'
import { PortfolioHero } from '@/components/portfolio/PortfolioHero'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'
import { CTASection } from '@/components/cta/CTASection'

export const metadata: Metadata = {
  title: 'Experience Showcase',
  description:
    'Browse Kotak Kosong Studios\' portfolio of interactive event experiences, brand activations, event games, and digital installations.',
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </>
  )
}

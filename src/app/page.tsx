import { HeroSection } from '@/components/hero/HeroSection'
import { TrustedBySection } from '@/components/trusted-by/TrustedBySection'
import { ServicesSection } from '@/components/services/ServicesSection'
import { WhyItWorksSection } from '@/components/why-it-works/WhyItWorksSection'
import { FeaturedExperiences } from '@/components/portfolio/FeaturedExperiences'
import { ExperienceJourney } from '@/components/journey/ExperienceJourney'
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection'
import { CTASection } from '@/components/cta/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <WhyItWorksSection />
      <FeaturedExperiences />
      <ExperienceJourney />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

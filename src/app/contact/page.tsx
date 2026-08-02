import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactSection } from '@/components/contact/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kotak Kosong Studios to discuss your gamification project, whether it\'s early childhood learning, classroom games, staff training, a campaign, or a custom game build.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}

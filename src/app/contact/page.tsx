import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactSection } from '@/components/contact/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kotak Kosong Studios to discuss your next event experience, brand activation, or interactive installation project.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}

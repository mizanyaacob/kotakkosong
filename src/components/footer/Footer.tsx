import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const services = [
  { label: 'Custom Game Development', href: '/services#custom-games' },
  { label: 'Learning & Education', href: '/services#learning-education' },
  { label: 'Gamified Campaigns', href: '/services#gamified-campaigns' },
  { label: 'Loyalty & Rewards', href: '/services#loyalty-systems' },
  { label: 'Gamification Strategy', href: '/services#gamification-strategy' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-soft-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-6 inline-block">
              <Image
                src="/images/logo/kotakkosong-logo.png"
                alt="Kotak Kosong Studios"
                width={97}
                height={48}
                className="h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              A Malaysian gamification provider. We use game design to turn learning, training, and campaigns into something people choose to do, not something they have to sit through.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/kotakkosongstudios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-yellow hover:text-soft-black"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://linkedin.com/company/kotak-kosong-studios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-yellow hover:text-soft-black"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://facebook.com/kotakkosongstudios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-yellow hover:text-soft-black"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-yellow"
                  >
                    <ArrowRight size={12} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-yellow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:kotakkosong.play@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-yellow"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  kotakkosong.play@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+601125467436"
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-yellow"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  +60 11-2546 7436
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  Kuala Lumpur, Malaysia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Kotak Kosong Studios. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Crafting experiences people remember.
          </p>
        </div>
      </div>
    </footer>
  )
}

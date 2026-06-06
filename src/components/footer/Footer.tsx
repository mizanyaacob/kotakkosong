import Link from 'next/link'
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const services = [
  { label: 'Event Games', href: '/services#event-games' },
  { label: 'Interactive Experiences', href: '/services#interactive-experiences' },
  { label: 'Brand Activations', href: '/services#brand-activations' },
  { label: 'Digital Installations', href: '/services#digital-installations' },
  { label: 'Gamification Systems', href: '/services#gamification-systems' },
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
            <Link href="/" className="group mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow">
                <span className="text-[13px] font-black leading-none text-soft-black">KK</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold text-white">Kotak Kosong</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">Studios</span>
              </div>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              We create interactive experiences that attract people, engage them, and leave lasting memories.
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
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">
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
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">
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
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@kotakkosong.studio"
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-yellow"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  hello@kotakkosong.studio
                </a>
              </li>
              <li>
                <a
                  href="tel:+60123456789"
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-yellow"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  +60 12-345 6789
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
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Kotak Kosong Studios. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Crafting experiences people remember.
          </p>
        </div>
      </div>
    </footer>
  )
}

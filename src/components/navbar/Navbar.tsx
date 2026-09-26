'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    // Stop the page scrolling behind the open menu.
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const isTransparent = isHomePage && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed left-0 top-0 z-50 w-full transition-all duration-500',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 shadow-sm shadow-black/5 backdrop-blur-md'
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              src="/images/logo/kotakkosong-logo.png"
              alt="Kotak Kosong Studios"
              width={114}
              height={56}
              priority
              className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors',
                  isTransparent ? 'text-white/80 hover:text-white' : 'text-soft-black/70 hover:text-soft-black',
                  pathname === link.href && (isTransparent ? 'text-white' : 'text-soft-black')
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-yellow"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-yellow px-6 py-2.5 text-sm font-semibold text-soft-black transition-all hover:bg-yellow-dark hover:shadow-lg hover:shadow-yellow-200"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            ref={toggleRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden',
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-soft-black hover:bg-light-gray'
            )}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="fixed inset-x-0 top-20 z-40 bg-white px-6 pb-8 pt-4 shadow-xl md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={cn(
                      'block rounded-xl px-4 py-3.5 text-lg font-medium transition-colors',
                      pathname === link.href
                        ? 'bg-yellow/10 text-soft-black'
                        : 'text-soft-black/70 hover:bg-light-gray hover:text-soft-black'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  className="block w-full rounded-full bg-yellow px-6 py-3.5 text-center text-base font-semibold text-soft-black"
                >
                  Start a Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar } from '@/components/navbar/Navbar'
import { Footer } from '@/components/footer/Footer'
import { ScrollProgress } from '@/components/shared/ScrollProgress'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Kotak Kosong Studios | Interactive Event Experiences & Brand Activations',
    template: '%s | Kotak Kosong Studios',
  },
  description:
    'Kotak Kosong Studios creates interactive event experiences, custom event games, and engaging brand activations that attract visitors and create memorable moments.',
  keywords: [
    'interactive event experiences',
    'brand activations Malaysia',
    'event games',
    'exhibition engagement',
    'experiential marketing',
    'digital installations',
    'gamification events',
    'Kotak Kosong Studios',
  ],
  authors: [{ name: 'Kotak Kosong Studios' }],
  creator: 'Kotak Kosong Studios',
  metadataBase: new URL('https://kotakkosong.studio'),
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://kotakkosong.studio',
    siteName: 'Kotak Kosong Studios',
    title: 'Kotak Kosong Studios | Interactive Event Experiences & Brand Activations',
    description:
      'We create interactive experiences that attract people, engage them, and leave lasting memories.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kotak Kosong Studios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kotak Kosong Studios',
    description: 'Interactive event experiences & brand activations that people remember.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

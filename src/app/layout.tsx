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
  icons: {
    icon: '/images/logo/kotakkosong-logo.jpeg',
    apple: '/images/logo/kotakkosong-logo.jpeg',
  },
  title: {
    default: 'Kotak Kosong Studios | Gamification Provider & Custom Game Development',
    template: '%s | Kotak Kosong Studios',
  },
  description:
    'Kotak Kosong Studios is a Malaysian gamification provider. We design custom games, gamified learning, campaigns, loyalty systems, and training for schools, brands, and organisations, from early childhood classrooms to corporate onboarding.',
  keywords: [
    'gamification Malaysia',
    'gamification provider',
    'gamification in education',
    'early childhood learning games',
    'educational game development',
    'custom game development',
    'gamified marketing campaigns',
    'loyalty and rewards gamification',
    'gamified training and simulation',
    'gamification strategy',
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
    title: 'Kotak Kosong Studios | Gamification Provider & Custom Game Development',
    description:
      'We use game design to make people participate, come back, and remember. Learning, campaigns, training, loyalty, and live experiences.',
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
    description: 'Gamification and custom games that turn audiences, students, and teams into players.',
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

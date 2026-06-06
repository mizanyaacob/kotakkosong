# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
npx tsc --noEmit # TypeScript type check only
```

## Tech Stack

- **Framework**: Next.js 15 (App Router, React 19)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 (theme configured in `src/styles/globals.css` via `@theme {}` — no separate config file)
- **Animations**: Framer Motion v12
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings, `--font-space-grotesk`) + Inter (body, `--font-inter`) via `next/font/google`

## Architecture

```
src/
├── app/                    # Next.js App Router pages + layout
│   ├── layout.tsx          # Root layout: fonts, metadata, Navbar, Footer, ScrollProgress
│   ├── page.tsx            # Homepage (composes all homepage sections)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts
├── components/
│   ├── navbar/Navbar.tsx           # Sticky transparent→white nav, mobile menu
│   ├── footer/Footer.tsx
│   ├── hero/HeroSection.tsx        # Full-screen video hero with parallax
│   ├── trusted-by/                 # Infinite marquee logo strip
│   ├── services/                   # ServicesSection (cards) + ServicesHero + ServicesDetail
│   ├── portfolio/                  # FeaturedExperiences, PortfolioHero, PortfolioGrid (with category filter)
│   ├── why-it-works/               # Animated stats + reasoning
│   ├── journey/ExperienceJourney.tsx  # 6-step process timeline (horizontal desktop, vertical mobile)
│   ├── testimonials/               # Carousel with prev/next + dot controls
│   ├── cta/CTASection.tsx          # Yellow CTA band (reused on multiple pages)
│   ├── about/                      # AboutHero, StorySection, ValuesSection, TeamSection
│   ├── contact/                    # ContactHero, ContactSection (full form)
│   ├── shared/
│   │   ├── SectionHeader.tsx       # eyebrow + h2 + description, supports dark mode
│   │   ├── MagneticButton.tsx      # Button with cursor-following magnetic animation
│   │   ├── ScrollProgress.tsx      # Top progress bar (uses Framer Motion useScroll)
│   │   └── TiltCard.tsx            # 3D tilt-on-hover wrapper
│   └── animations/
│       ├── FadeIn.tsx              # Scroll-triggered fade with directional slide
│       ├── FloatingShapes.tsx      # Ambient animated circles/squares background layer
│       └── AnimatedCounter.tsx     # Number count-up on scroll-into-view
├── data/
│   ├── services.ts         # 6 service cards + extended detail data
│   ├── portfolio.ts        # 6 portfolio case studies with results
│   └── testimonials.ts     # 5 client testimonials
├── hooks/
│   ├── useScrollProgress.ts
│   └── useMagneticEffect.ts
├── lib/utils.ts            # cn() (clsx), formatNumber, slugify
├── styles/globals.css      # Tailwind v4 @theme tokens (colors, fonts)
└── types/index.ts          # Shared TypeScript interfaces
```

## Brand Tokens

Defined in `src/styles/globals.css` `@theme {}`:

| Token | Value |
|---|---|
| `--color-yellow` | `#FFD400` |
| `--color-soft-black` | `#111111` |
| `--color-light-gray` | `#F5F5F5` |
| `--color-medium-gray` | `#D9D9D9` |

Use yellow sparingly: CTAs, accents, highlights, hover states. Layout is 70% white / 20% light gray / 10% yellow.

## Key Patterns

**All components that use browser APIs or Framer Motion hooks must start with `'use client'`.**

Page components (`app/*/page.tsx`) are Server Components by default — they import Client Components which handle interactivity.

**Adding a new page**: create `src/app/<route>/page.tsx`, export `metadata`, compose section components. Reuse `CTASection` as the last section on most pages.

**Adding a portfolio project**: add an entry to `src/data/portfolio.ts` following the `PortfolioItem` type. It auto-appears in `PortfolioGrid` and `FeaturedExperiences`.

**Section pattern**: dark sections use `bg-[#111111]` + `dark` prop on `SectionHeader`. Light sections alternate between `bg-white` and `bg-[#F5F5F5]`.

## Image Assets Needed

Place real assets here (currently using Unsplash placeholders):

- `public/videos/hero-video.mp4` — looping hero background video
- `public/images/hero-poster.jpg` — video poster frame
- `public/images/og-image.jpg` — 1200×630 Open Graph image
- `public/images/logo/` — brand logo files
- `public/images/portfolio/` — project images
- `public/images/clients/` — client logo files

'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Framer Motion animates via inline JS transforms, so the CSS
 * prefers-reduced-motion guard in globals.css cannot reach it.
 * reducedMotion="user" makes every motion component honour the OS setting:
 * transform/layout animation is dropped, opacity fades are kept.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

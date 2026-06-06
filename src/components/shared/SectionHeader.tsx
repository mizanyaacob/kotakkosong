'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  dark?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  dark = false,
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={cn('flex flex-col gap-4', alignClass, className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="block h-px w-8 bg-yellow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow">
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl',
          dark ? 'text-white' : 'text-soft-black'
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'max-w-2xl text-lg leading-relaxed',
            dark ? 'text-white/70' : 'text-soft-black/60'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

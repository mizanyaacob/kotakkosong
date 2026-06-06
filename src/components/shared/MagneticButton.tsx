'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  strength?: number
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = 'primary',
  size = 'md',
  strength = 0.25,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setPosition({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const variantClasses = {
    primary:
      'bg-yellow text-soft-black hover:bg-yellow-dark font-semibold',
    secondary:
      'bg-soft-black text-white hover:bg-[#222222] font-semibold',
    outline:
      'bg-transparent border-2 border-soft-black text-soft-black hover:bg-soft-black hover:text-white font-semibold',
  }

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm rounded-full',
    md: 'px-7 py-3.5 text-base rounded-full',
    lg: 'px-9 py-4.5 text-lg rounded-full',
  }

  return (
    <motion.button
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 transition-colors duration-200 will-change-transform',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </motion.button>
  )
}

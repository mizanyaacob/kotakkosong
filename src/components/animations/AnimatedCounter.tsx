'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  className?: string
  duration?: number
}

function parseValue(val: string): { number: number; prefix: string; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9,]+(?:\.[0-9]*)?)([^0-9]*)$/)
  if (!match) return { number: 0, prefix: '', suffix: val }
  return {
    prefix: match[1] || '',
    number: parseFloat(match[2].replace(',', '')),
    suffix: match[3] || '',
  }
}

export function AnimatedCounter({ value, className, duration = 2 }: AnimatedCounterProps) {
  const { number, prefix, suffix } = parseValue(value)
  const isNumeric = /\d/.test(value)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0
    const endValue = number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(startValue + (endValue - startValue) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, number, duration])

  const displayValue = number >= 1000 ? count.toLocaleString() : count

  if (!isNumeric) return <span ref={ref} className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

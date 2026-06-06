'use client'

import { motion } from 'framer-motion'

interface Shape {
  id: number
  x: string
  y: string
  size: number
  delay: number
  duration: number
  opacity: number
  type: 'circle' | 'square' | 'triangle'
  color: 'yellow' | 'gray'
}

const shapes: Shape[] = [
  { id: 1, x: '8%', y: '15%', size: 80, delay: 0, duration: 8, opacity: 0.15, type: 'circle', color: 'yellow' },
  { id: 2, x: '85%', y: '20%', size: 40, delay: 1.5, duration: 10, opacity: 0.1, type: 'square', color: 'yellow' },
  { id: 3, x: '70%', y: '65%', size: 60, delay: 0.8, duration: 9, opacity: 0.08, type: 'circle', color: 'gray' },
  { id: 4, x: '15%', y: '75%', size: 48, delay: 2, duration: 11, opacity: 0.12, type: 'circle', color: 'yellow' },
  { id: 5, x: '90%', y: '50%', size: 32, delay: 0.4, duration: 7, opacity: 0.09, type: 'square', color: 'gray' },
  { id: 6, x: '45%', y: '10%', size: 24, delay: 1.2, duration: 12, opacity: 0.1, type: 'circle', color: 'yellow' },
  { id: 7, x: '30%', y: '85%', size: 56, delay: 3, duration: 9.5, opacity: 0.07, type: 'circle', color: 'gray' },
  { id: 8, x: '60%', y: '30%', size: 20, delay: 0.6, duration: 13, opacity: 0.12, type: 'square', color: 'yellow' },
]

function ShapeElement({ shape }: { shape: Shape }) {
  const color = shape.color === 'yellow' ? '#FFD400' : '#D9D9D9'

  const shapeEl =
    shape.type === 'circle' ? (
      <div
        style={{
          width: shape.size,
          height: shape.size,
          borderRadius: '50%',
          backgroundColor: color,
        }}
      />
    ) : (
      <div
        style={{
          width: shape.size,
          height: shape.size,
          backgroundColor: color,
          borderRadius: 4,
          transform: 'rotate(45deg)',
        }}
      />
    )

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: shape.x,
        top: shape.y,
        opacity: shape.opacity,
        zIndex: 0,
      }}
      animate={{
        y: [0, -20, 0, 12, 0],
        x: [0, 8, 0, -6, 0],
        rotate: shape.type === 'square' ? [0, 45, 90, 135, 180] : [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: shape.duration,
        delay: shape.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {shapeEl}
    </motion.div>
  )
}

interface FloatingShapesProps {
  count?: number
}

export function FloatingShapes({ count }: FloatingShapesProps) {
  const displayShapes = count ? shapes.slice(0, count) : shapes
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {displayShapes.map((shape) => (
        <ShapeElement key={shape.id} shape={shape} />
      ))}
    </div>
  )
}

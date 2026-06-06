'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

type SafeImageProps = ImageProps & { fallbackClassName?: string }

export function SafeImage({ fallbackClassName, className, alt, ...props }: SafeImageProps) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={fallbackClassName ?? 'absolute inset-0 bg-[#1a1a1a]'}
        aria-label={alt}
      />
    )
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  )
}

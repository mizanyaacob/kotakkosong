'use client'

import Image from 'next/image'
import { SectionHeader } from '@/components/shared/SectionHeader'

const technologies = [
  { name: 'Unity',           file: 'unity.png' },
  { name: 'Unreal Engine',   file: 'unreal.png' },
  { name: 'Meta Quest',      file: 'meta.png' },
  { name: 'Three.js',        file: 'threejs.png' },
  { name: 'React',           file: 'react.png' },
  { name: 'RFID / NFC',      file: 'nfc.png' },
]

function TechItem({ name, file }: { name: string; file: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-medium-gray bg-white px-8 py-6 transition-all duration-300 hover:border-yellow hover:shadow-lg hover:shadow-yellow-100">
      {/* Fixed container: same size for every logo regardless of PNG dimensions */}
      <div className="relative h-12 w-28">
        <Image
          src={`/images/tech/${file}`}
          alt={name}
          fill
          className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
          sizes="112px"
        />
      </div>
      <span className="whitespace-nowrap text-sm font-semibold text-soft-black/50 transition-colors duration-300 group-hover:text-soft-black">
        {name}
      </span>
    </div>
  )
}

export function TrustedBySection() {
  return (
    <section className="overflow-hidden bg-light-gray py-20">
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 36s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Tech Stack"
          title="Powered By Industry-Leading Technology"
          description="We work with the best tools available, from game engines and XR platforms to motion sensors and interactive media systems."
          align="center"
          className="mb-14"
        />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-light-gray to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-light-gray to-transparent" />

        <div className="marquee-track gap-4 px-2">
          {[...technologies, ...technologies].map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} name={tech.name} file={tech.file} />
          ))}
        </div>
      </div>
    </section>
  )
}

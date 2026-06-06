'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Instagram } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'

const team = [
  {
    name: 'Amirul Hadi',
    role: 'Founder & Creative Director',
    bio: 'Amirul leads the creative vision at Kotak Kosong, bringing 10+ years of experience in experiential design and brand activations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Nurul Ain',
    role: 'Head of Experience Design',
    bio: 'Nurul crafts the interaction design and user experience behind every activation, ensuring every touch point feels effortless and magical.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Hafiz Kamal',
    role: 'Lead Developer',
    bio: 'Hafiz turns creative concepts into working realities, from touchscreen apps to complex multi-device installations.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Priya Rajesh',
    role: 'Head of Client Success',
    bio: 'Priya ensures every client relationship is smooth, every project is delivered flawlessly, and every outcome exceeds expectations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
]

export function TeamSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Team"
          title="The People Behind the Experiences"
          description="A small but mighty team of designers, developers, and experience specialists."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              {/* Photo */}
              <div className="relative mb-5 overflow-hidden rounded-2xl bg-light-gray" style={{ aspectRatio: '4/5' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Social overlay */}
                <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-soft-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pb-4">
                  <div className="flex gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <Linkedin size={14} />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                      <Instagram size={14} />
                    </div>
                  </div>
                </div>
                {/* Yellow top accent */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-yellow transition-all duration-500 group-hover:w-full" />
              </div>

              <h3 className="font-heading text-lg font-bold text-soft-black">{member.name}</h3>
              <p className="mb-2 text-sm font-medium text-yellow">{member.role}</p>
              <p className="text-sm leading-relaxed text-soft-black/55">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

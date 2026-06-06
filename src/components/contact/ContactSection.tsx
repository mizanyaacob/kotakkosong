'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'

const projectTypes = [
  'Event Game',
  'Brand Activation',
  'Interactive Installation',
  'Gamification System',
  'Digital Experience',
  'Full Event Engagement',
  'Not sure yet',
]

const budgetRanges = [
  'Under RM 20,000',
  'RM 20,000 – RM 50,000',
  'RM 50,000 – RM 100,000',
  'RM 100,000 – RM 250,000',
  'Above RM 250,000',
]

type FormData = {
  name: string
  company: string
  email: string
  phone: string
  eventDate: string
  projectType: string
  budget: string
  message: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventDate: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-xl border border-medium-gray bg-white px-4 py-3.5 text-sm text-soft-black placeholder-soft-black/30 outline-none transition-all focus:border-yellow focus:ring-2 focus:ring-yellow/20'

  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-soft-black/50'

  return (
    <section className="bg-light-gray py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Info column */}
          <FadeIn direction="left" className="lg:col-span-1">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-heading mb-4 text-2xl font-bold text-soft-black">
                  Contact Information
                </h2>
                <p className="text-sm leading-relaxed text-soft-black/55">
                  We respond to all project inquiries within 1 business day. For urgent requirements, call us directly.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {[
                  { Icon: Mail, label: 'Email', value: 'kotakkosong.play@gmail.com', href: 'mailto:kotakkosong.play@gmail.com' },
                  { Icon: Phone, label: 'Phone', value: '+60 11-2546 7436', href: 'tel:+601125467436' },
                  { Icon: MapPin, label: 'Location', value: 'Kuala Lumpur, Malaysia', href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow/15">
                      <Icon size={16} className="text-soft-black" />
                    </div>
                    <div>
                      <p className="text-xs text-soft-black/40">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-soft-black transition-colors hover:text-yellow">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-soft-black">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-soft-black/40">Follow Us</p>
                <div className="flex gap-2">
                  {[
                    { Icon: Instagram, href: '#', label: 'Instagram' },
                    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { Icon: Facebook, href: '#', label: 'Facebook' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-medium-gray bg-white text-soft-black/50 transition-all hover:border-yellow hover:text-soft-black"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="overflow-hidden rounded-2xl border border-medium-gray bg-[#E8E8E8]" style={{ aspectRatio: '4/3' }}>
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="mx-auto mb-2 text-soft-black/30" />
                    <p className="text-sm text-soft-black/40">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form column */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm shadow-black/5 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow/15">
                    <CheckCircle2 size={40} className="text-soft-black" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-soft-black">Message Received!</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-soft-black/55">
                    Thank you for reaching out. We&apos;ll review your project details and get back to you within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 rounded-full bg-yellow px-6 py-2.5 text-sm font-semibold text-soft-black transition-colors hover:bg-yellow-dark"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+60 12-345 6789"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className={labelClass}>Event Date</label>
                      <input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={form.eventDate}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className={labelClass}>Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClass}>Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Tell Us About Your Project *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your event, goals, audience, and any specific ideas you have..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow px-8 py-4 font-semibold text-soft-black transition-all hover:bg-yellow-dark disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-soft-black/20 border-t-soft-black" />
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

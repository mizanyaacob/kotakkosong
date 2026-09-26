'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'

const projectTypes = [
  'Early Childhood / Preschool Learning',
  'School or Classroom Learning',
  'Corporate Training & Onboarding',
  'Custom Game Development',
  'Gamified Campaign or Activation',
  'Loyalty & Reward System',
  'Gamification Strategy Only',
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
  targetDate: string
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
    targetDate: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const summaryRef = useRef<HTMLDivElement>(null)

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    if (name === 'name' && !value.trim()) return 'Enter your name'
    if (name === 'email') {
      if (!value.trim()) return 'Enter your email address'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address, like name@example.com'
    }
    if (name === 'message' && !value.trim()) return 'Tell us a little about your project'
    return undefined
  }

  const validateAll = () => {
    const next: Partial<Record<keyof FormData, string>> = {}
    for (const key of ['name', 'email', 'message'] as const) {
      const msg = validateField(key, form[key])
      if (msg) next[key] = msg
    }
    return next
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Only clear errors while typing - never introduce one mid-keystroke.
    if (errors[name as keyof FormData]) {
      const msg = validateField(name as keyof FormData, value)
      if (!msg) setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as keyof FormData
    setErrors((prev) => ({ ...prev, [name]: validateField(name, e.target.value) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validateAll()
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Move focus to the summary so keyboard and screen reader users land on it.
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const errorList = (['name', 'email', 'message'] as const).filter((k) => errors[k])

  const inputClass =
    'w-full rounded-xl border border-medium-gray bg-white px-4 py-3.5 text-sm text-soft-black placeholder-soft-black/55 outline-none transition-all focus:border-yellow focus:ring-2 focus:ring-yellow/20'

  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-soft-black/60'

  const fieldClass = (name: keyof FormData) =>
    `${inputClass} ${errors[name] ? 'border-red-600 focus:border-red-600 focus:ring-red-600/20' : ''}`

  const ErrorText = ({ name }: { name: keyof FormData }) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-red-700">
        {errors[name]}
      </p>
    ) : null

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
                <p className="text-sm leading-relaxed text-soft-black/65">
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
                      <p className="text-xs text-soft-black/60">{label}</p>
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
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-soft-black/60">Follow Us</p>
                <div className="flex gap-2">
                  {[
                    { Icon: Instagram, href: 'https://instagram.com/kotakkosongstudios', label: 'Instagram' },
                    { Icon: Linkedin, href: 'https://linkedin.com/company/kotak-kosong-studios', label: 'LinkedIn' },
                    { Icon: Facebook, href: 'https://facebook.com/kotakkosongstudios', label: 'Facebook' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-medium-gray bg-white text-soft-black/60 transition-all hover:border-yellow hover:text-soft-black"
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
                    <MapPin size={32} className="mx-auto mb-2 text-soft-black/60" />
                    <p className="text-sm text-soft-black/60">Kuala Lumpur, Malaysia</p>
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
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow/15">
                    <CheckCircle2 size={40} className="text-soft-black" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-soft-black">Message Received!</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-soft-black/65">
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
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {errorList.length > 0 && (
                    <div
                      ref={summaryRef}
                      tabIndex={-1}
                      role="alert"
                      aria-labelledby="error-summary-title"
                      className="rounded-xl border border-red-600/30 bg-red-50 p-4"
                    >
                      <h3 id="error-summary-title" className="font-heading text-sm font-bold text-red-800">
                        There{errorList.length === 1 ? ' is 1 problem' : ` are ${errorList.length} problems`} with this form
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {errorList.map((k) => (
                          <li key={k}>
                            <a href={`#${k}`} className="text-sm text-red-700 underline underline-offset-2">
                              {errors[k]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                        onBlur={handleBlur}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={fieldClass('name')}
                      />
                      <ErrorText name="name" />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Organisation</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company, school, or organisation"
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
                        placeholder="name@company.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={fieldClass('email')}
                      />
                      <ErrorText name="email" />
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
                      <label htmlFor="targetDate" className={labelClass}>Target Launch Date</label>
                      <input
                        id="targetDate"
                        name="targetDate"
                        type="date"
                        value={form.targetDate}
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
                      onBlur={handleBlur}
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Tell us about your audience, their age group, what you want them to learn or do, and any ideas you already have..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${fieldClass('message')} resize-none`}
                    />
                    <ErrorText name="message" />
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

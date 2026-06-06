export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  color?: string
}

export interface PortfolioItem {
  id: string
  slug: string
  title: string
  client: string
  category: 'Events' | 'Activations' | 'Games' | 'Installations'
  description: string
  fullDescription: string
  objectives: string[]
  outcomes: string[]
  technologies: string[]
  image: string
  gallery: string[]
  year: string
  results: {
    label: string
    value: string
  }[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  image?: string
  logo?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social?: {
    linkedin?: string
    instagram?: string
  }
}

export interface Stat {
  value: string
  label: string
  suffix?: string
  description?: string
}

export interface NavLink {
  label: string
  href: string
}

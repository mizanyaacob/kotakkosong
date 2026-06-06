import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { portfolioItems } from '@/data/portfolio'
import { PortfolioDetailView } from '@/components/portfolio/PortfolioDetailView'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = portfolioItems.find((p) => p.slug === slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.description,
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  const item = portfolioItems.find((p) => p.slug === slug)
  if (!item) notFound()

  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug)
  const next = portfolioItems[(currentIndex + 1) % portfolioItems.length]
  const prev = portfolioItems[(currentIndex - 1 + portfolioItems.length) % portfolioItems.length]

  return <PortfolioDetailView item={item} next={next} prev={prev} />
}

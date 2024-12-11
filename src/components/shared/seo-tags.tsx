import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  keywords?: string[]
  ogImage?: string
}

export function generateMetadata({
  title,
  description,
  canonical,
  keywords = [],
  ogImage,
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: [
      'E3 Sisters Kenya',
      'education',
      'empowerment',
      'environment',
      ...keywords,
    ],
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

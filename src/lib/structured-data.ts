import { Organization, WithContext } from 'schema-dts'

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'E3 Sisters Kenya',
    description: 'A non-profit organization dedicated to empowering communities through education, economic empowerment, and environmental conservation in Kenya.',
    url: 'https://e3sisters.org',
    logo: 'https://e3sisters.org/logo.png',
    sameAs: [
      'https://facebook.com/e3sisterskenya',
      'https://twitter.com/e3sisterskenya',
      'https://instagram.com/e3sisterskenya',
      'https://linkedin.com/company/e3-sisters-kenya'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Kenya',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'info@e3sisters.org'
    }
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  publishDate: string
  modifiedDate: string
  image: string
  authorName: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishDate,
    dateModified: article.modifiedDate,
    author: {
      '@type': 'Person',
      name: article.authorName,
    },
  }
}

interface ImageMetadata {
  path: string
  tags: string[]
  description?: string
}

interface GetImagesOptions {
  category: 'testimonials' | 'initiatives'
  count?: number
  tags?: string[]
  shuffle?: boolean
}

// Initiative images with metadata
const initiativeImages: ImageMetadata[] = [
  {
    path: '/images/initiatives/0b3d1f8c-1311-4f09-937b-1cf8f638ed4d.jpeg',
    tags: ['women', 'training', 'group'],
    description: 'Women participating in training session'
  },
  {
    path: '/images/initiatives/182780e8-73be-4581-af77-847d9c686c4c.jpeg',
    tags: ['women', 'sewing', 'skills'],
    description: 'Women learning sewing skills'
  },
  {
    path: '/images/initiatives/26cef9cd-4c21-4c2d-870d-348fe1b65206.jpeg',
    tags: ['women', 'pad-making', 'training'],
    description: 'Pad making training session'
  },
  {
    path: '/images/initiatives/34501136-023e-46cb-8971-06dd336fdc72.jpeg',
    tags: ['women', 'group', 'community'],
    description: 'Community gathering'
  },
  {
    path: '/images/initiatives/46de271c-45a2-4bd3-bb27-07b32a61666b.jpeg',
    tags: ['women', 'training', 'skills'],
    description: 'Skills training session'
  },
  {
    path: '/images/initiatives/6a5ef506-aa99-4f76-bbea-506a96f4ee66.jpeg',
    tags: ['women', 'community', 'group'],
    description: 'Community women gathering'
  },
  {
    path: '/images/initiatives/7238e890-d149-48ae-8b5d-909f69e5331a.jpeg',
    tags: ['women', 'training', 'pad-making'],
    description: 'Pad making initiative'
  },
  {
    path: '/images/initiatives/a05c9a02-9f69-4043-983e-eeb8ee249047.jpeg',
    tags: ['women', 'group', 'training'],
    description: 'Group training session'
  },
  {
    path: '/images/initiatives/ce759596-5b7b-4e65-a66b-5a3c04a52cc1.jpeg',
    tags: ['women', 'community', 'group'],
    description: 'Women community meeting'
  },
  {
    path: '/images/initiatives/e740f635-1a6f-4070-9534-f5b5a57b99d3.jpeg',
    tags: ['women', 'training', 'skills'],
    description: 'Skills development session'
  },
  {
    path: '/images/initiatives/osiligi-pad.jpg',
    tags: ['product', 'pad-making', 'osiligi'],
    description: 'Osiligi pad project'
  }
]

// Testimonial images with metadata
const testimonialImages: ImageMetadata[] = [
  {
    path: '/images/testimonials/049f6438-647d-4652-899a-a871a31ebce6.jpeg',
    tags: ['group', 'community', 'women'],
    description: 'Community gathering'
  },
  {
    path: '/images/testimonials/11c23739-98fe-4258-9ba0-899237d15ead.jpeg',
    tags: ['women', 'group', 'celebration'],
    description: 'Community celebration'
  },
  {
    path: '/images/testimonials/31cc2ef3-48d2-4ef6-a449-31cdf6147278.jpeg',
    tags: ['women', 'group', 'community'],
    description: 'Women community meeting'
  },
  {
    path: '/images/testimonials/42e9bd5a-0c4c-42ba-8abe-44d9da3509e0.jpeg',
    tags: ['women', 'training', 'skills'],
    description: 'Skills training'
  },
  {
    path: '/images/testimonials/52e83794-f12d-43c9-b28f-ff919f4dfe51.jpeg',
    tags: ['women', 'group', 'community'],
    description: 'Community gathering'
  },
  {
    path: '/images/testimonials/5a5ca7e7-ea9f-481a-8dce-fa903f3f5dab.jpeg',
    tags: ['women', 'training', 'pad-making'],
    description: 'Pad making training'
  },
  {
    path: '/images/testimonials/5de7934a-b0ad-4cdb-97ca-d06fe1648948.jpeg',
    tags: ['women', 'group', 'community'],
    description: 'Women group meeting'
  },
  {
    path: '/images/testimonials/75216852-8ba3-4ee2-8c0a-f99423678d8a.jpeg',
    tags: ['women', 'training', 'skills'],
    description: 'Skills development'
  },
  {
    path: '/images/testimonials/7f7dd641-996e-4231-9273-19d0b1786ae9.jpeg',
    tags: ['women', 'community', 'group'],
    description: 'Community gathering'
  },
  {
    path: '/images/testimonials/904f8bd8-ed68-45b2-bb2d-b31485f889a6.jpeg',
    tags: ['women', 'training', 'pad-making'],
    description: 'Pad making session'
  },
  {
    path: '/images/testimonials/a70d79dc-2db1-496b-a8de-4c62ebb2b756.jpeg',
    tags: ['women', 'group', 'community'],
    description: 'Women community'
  },
  {
    path: '/images/testimonials/bdee5e45-90e5-4f38-ac33-0a0726a5c09d.jpeg',
    tags: ['women', 'training', 'skills'],
    description: 'Skills training'
  },
  {
    path: '/images/testimonials/de1c7274-7436-43fe-9936-df6cc049216b.jpeg',
    tags: ['women', 'group', 'community'],
    description: 'Community meeting'
  },
  {
    path: '/images/testimonials/de98b390-bb3f-4bc1-9975-d37077570e6f.jpeg',
    tags: ['women', 'training', 'pad-making'],
    description: 'Pad making initiative'
  },
  {
    path: '/images/testimonials/ec87ec92-7e7f-4c9f-b8fd-7562a631405c.jpeg',
    tags: ['women', 'group', 'community'],
    description: 'Community gathering'
  },
  {
    path: '/images/testimonials/john.jpg',
    tags: ['portrait', 'team'],
    description: 'Team member John'
  },
  {
    path: '/images/testimonials/mary.jpg',
    tags: ['portrait', 'team'],
    description: 'Team member Mary'
  },
  {
    path: '/images/testimonials/sarah.jpg',
    tags: ['portrait', 'team'],
    description: 'Team member Sarah'
  }
]

/**
 * Get images based on category, tags, and other options
 */
export function getImages({
  category,
  count = 1,
  tags = [],
  shuffle = false
}: GetImagesOptions): ImageMetadata[] {
  const images = category === 'testimonials' ? testimonialImages : initiativeImages

  // Filter by tags if provided
  let filtered = tags.length > 0
    ? images.filter(img => tags.some(tag => img.tags.includes(tag)))
    : images

  // Shuffle if requested
  if (shuffle) {
    filtered = [...filtered].sort(() => Math.random() - 0.5)
  }

  // Return requested number of images
  return filtered.slice(0, count)
}

/**
 * Get a single random image path from the specified category
 */
export function getRandomImage(category: 'testimonials' | 'initiatives'): string {
  const result = getImages({ category, count: 1, shuffle: true })
  return result[0].path
}

/**
 * Get image metadata by path
 */
export function getImageMetadata(path: string): ImageMetadata | undefined {
  return [...testimonialImages, ...initiativeImages].find(img => img.path === path)
}
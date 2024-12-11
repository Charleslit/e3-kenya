'use client'

import { PageTransition } from '@/components/page-transition'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    slug: 'osiligi-pad-project-success',
    title: 'Osiligi Pad Project: Making a Difference in Maasai Mara',
    excerpt: 'Learn about our successful initiative providing sustainable menstrual solutions and empowering local women through skills training.',
    date: 'October 15, 2024',
    category: 'Project Update',
    imageUrl: '/images/blog/osiligi-project.jpg',
    author: {
      name: 'Sarah Johnson',
      role: 'Project Coordinator'
    }
  },
  // More blog posts will be added
]

export default function BlogPage() {
  return (
    <PageTransition>
      <Container>
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1 mb-4">Herd Chronicles</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories and updates from our initiatives, celebrating the impact and progress of our Sisterherd
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 right-2">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="space-y-1">
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {post.date} • {post.author.name}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </PageTransition>
  )
} 
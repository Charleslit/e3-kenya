'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

const news = [
  {
    title: "Training Session Success in Maasai Mara",
    category: "Project Update",
    date: "October 2024",
    summary: "Our team successfully conducted a three-day training session, teaching sewing skills to local women and girls.",
    imageUrl: "/images/news/training.jpg",
    slug: "training-session-success"
  }
  // More news items will be added
]

export default function NewsPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24"
      >
        <h1 className="heading-1 mb-8">News & Updates</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Stay updated with our latest initiatives, success stories, and community impact.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/news/${item.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{item.category}</Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{item.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  )
} 
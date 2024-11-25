'use client'

import { PageTransition } from '@/components/page-transition'
import { Container } from '@/components/ui/container'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Initiative } from '@/types/Initiative'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'

export default function InitiativePage() {
  const params = useParams()
  const [initiative, setInitiative] = useState<Initiative | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchInitiative() {
      try {
        const response = await fetch(`/api/initiatives/${params.slug}`)
        const data = await response.json()
        setInitiative(data)
      } catch (error) {
        console.error('Failed to fetch initiative:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInitiative()
  }, [params.slug])

  if (loading) return <div>Loading...</div>
  if (!initiative) return <div>Initiative not found</div>

  return (
    <PageTransition>
      <Container>
        <div className="py-24">
          <Card>
            <div className="relative h-64 md:h-96">
              {initiative.imageUrl ? (
                <Image
                  src={initiative.imageUrl}
                  alt={initiative.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <ImagePlaceholder />
              )}
              <Badge
                className="absolute top-4 right-4"
                variant={
                  initiative.status === 'ongoing'
                    ? 'default'
                    : initiative.status === 'completed'
                    ? 'secondary'
                    : 'outline'
                }
              >
                {initiative.status}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>{initiative.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p>{initiative.description}</p>
                {initiative.highlights && (
                  <>
                    <h3>Highlights</h3>
                    <ul>
                      {initiative.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </PageTransition>
  )
} 
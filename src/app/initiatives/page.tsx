'use client'

import { PageTransition } from '@/components/page-transition'
import { Container } from '@/components/ui/container'
import { InitiativesShowcase } from '@/components/sections/initiatives-showcase'
import { useEffect, useState } from 'react'
import { Initiative } from '@/types/Initiative'

export default function InitiativesPage() {
  const [initiatives, setInitiatives] = useState<Initiative[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchInitiatives() {
      try {
        const response = await fetch('/api/initiatives')
        const data = await response.json()
        setInitiatives(data)
      } catch (error) {
        console.error('Failed to fetch initiatives:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInitiatives()
  }, [])

  return (
    <PageTransition>
      <Container>
        <div className="py-24">
          <h1 className="heading-1 mb-8">Herd Initiatives</h1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <InitiativesShowcase initiatives={initiatives} />
          )}
        </div>
      </Container>
    </PageTransition>
  )
} 
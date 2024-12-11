"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import { Suspense } from "react"

function FailedContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const error = searchParams?.get("error")

  useEffect(() => {
    if (!error) {
      router.push("/donate")
    }
  }, [error, router])

  return (
    <Container>
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <XCircle className="h-16 w-16 text-destructive mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Payment Failed</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {error || "There was an issue processing your donation."}
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/donate">Try Again</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

export default function DonationFailedPage() {
  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <FailedContent />
      </Suspense>
    </div>
  )
}
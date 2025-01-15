"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { CheckCircle, CheckCircle2, Printer } from "lucide-react"
import { Suspense } from "react"

function SuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentIntentId = searchParams?.get("payment_intent")
  const [donationDetails, setDonationDetails] = useState<any>(null)

  useEffect(() => {
    if (!paymentIntentId) {
      router.push("/donate")
      return
    }

    // Fetch donation details
    const fetchDonationDetails = async () => {
      try {
        const response = await fetch(`/api/donations/${paymentIntentId}`)
        if (response.ok) {
          const data = await response.json()
          setDonationDetails(data)
        }
      } catch (error) {
        console.error("Error fetching donation details:", error)
      }
    }

    fetchDonationDetails()
  }, [paymentIntentId, router])

  return (
    <Container>
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl"
        >
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your donation has been successfully processed.
            {donationDetails?.amount && (
              <span className="block mt-2 font-semibold">
                Amount: ${donationDetails.amount}
              </span>
            )}
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Impact</h2>
            <p className="text-muted-foreground">
              Your generous donation will help us provide:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Sustainable menstrual solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Training for women in pad-making</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Economic opportunities</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/impact">See Your Impact</Link>
              </Button>
            </div>
            
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => window.print()}
              >
                <Printer className="h-4 w-4 mr-2" />
                Print Receipt
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

export default function DonationSuccessPage() {
  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  )
}
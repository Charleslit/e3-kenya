"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const paymentMethods = [
  {
    name: "Credit Card",
    icon: "/images/payment/credit-card.svg",
    description: "Secure payment via Stripe",
  },
  {
    name: "Bank Transfer",
    icon: "/images/payment/bank.svg",
    description: "Direct bank transfer to our US account",
  },
  {
    name: "Cryptocurrency",
    icon: "/images/payment/crypto.svg",
    description: "Bitcoin, Ethereum, and more",
  },
  {
    name: "PayPal",
    icon: "/images/payment/paypal.svg",
    description: "Fast and secure PayPal payment",
  },
]

export function PaymentMethods() {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center mb-8"
      >
        Secure Payment Methods
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {paymentMethods.map((method, index) => (
          <motion.div
            key={method.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-12 w-12 mb-4">
                  <Image
                    src={method.icon}
                    alt={method.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-2">{method.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 
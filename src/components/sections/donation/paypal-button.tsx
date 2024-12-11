"use client"

import { PayPalButtons } from "@paypal/react-paypal-js"
import { useAsyncError } from "@/hooks/use-async-error"
import { useRouter } from "next/navigation"
import type { 
  CreateOrderActions,
  OnApproveActions,
  OnApproveData 
} from "@paypal/paypal-js"

interface PayPalButtonProps {
  amount: number
  onSuccess: (details: any) => void
}

export function PayPalButton({ amount, onSuccess }: PayPalButtonProps) {
  const { handleError } = useAsyncError()
  const router = useRouter()

  return (
    <PayPalButtons
      style={{ layout: "horizontal" }}
      createOrder={async (_data: unknown, actions: CreateOrderActions) => {
        console.log("Creating PayPal order for amount:", amount)
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                value: amount.toString(),
                currency_code: "USD",
              },
              description: "Donation to E3 Kenya",
            },
          ],
        })
      }}
      onApprove={async (data: OnApproveData, actions: OnApproveActions) => {
        try {
          console.log("Payment approved, capturing order:", data.orderID)
          const details = await actions.order?.capture()
          console.log("Order captured:", details)
          
          if (!details) {
            console.error("No details returned from PayPal")
            return
          }
          
          // Save donation to database
          console.log("Sending donation to backend:", {
            orderID: data.orderID,
            details,
          })
          
          const response = await fetch("/api/donations/paypal", {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              orderID: data.orderID, 
              details 
            }),
          })

          if (!response.ok) {
            const errorData = await response.json()
            console.error("Failed to save donation:", errorData)
            throw new Error("Failed to save donation")
          }

          const responseData = await response.json()
          console.log("Donation saved successfully:", responseData)

          onSuccess(details)
          router.push("/donate/success?payment_intent=" + data.orderID)
        } catch (error) {
          console.error("PayPal payment error:", error)
          handleError(error)
          router.push("/donate/failed?error=payment-failed")
        }
      }}
    />
  )
} 
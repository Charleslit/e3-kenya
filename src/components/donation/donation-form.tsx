import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'

const DONATION_AMOUNTS = [10, 25, 50, 100, 250, 500]

export function DonationForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [amount, setAmount] = useState<number>(25)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setErrorMessage(null)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/donate/success`,
      },
    })

    if (error) {
      setErrorMessage(error.message ?? 'An error occurred')
    }

    setIsProcessing(false)
  }

  const handleAmountChange = (value: number) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value)
      setAmount(Number(value))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-heading font-semibold">Select Donation Amount</h3>
        
        <div className="grid grid-cols-3 gap-3">
          {DONATION_AMOUNTS.map((value) => (
            <Button
              key={value}
              type="button"
              variant={amount === value ? 'default' : 'outline'}
              onClick={() => handleAmountChange(value)}
              className="h-12"
            >
              ${value}
            </Button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            value={customAmount}
            onChange={handleCustomAmountChange}
            placeholder="Custom Amount"
            className="w-full h-12 pl-8 border rounded-md"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-heading font-semibold">Payment Details</h3>
        <PaymentElement />
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-50 text-red-600 rounded-md">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full h-12"
      >
        {isProcessing ? 'Processing...' : `Donate $${amount}`}
      </Button>

      <p className="text-sm text-neutral-500 text-center">
        Your donation helps us continue our mission to empower Kenyan women and girls.
        All donations are secure and encrypted.
      </p>
    </form>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { toast } from "sonner"

const bankDetails = {
  bankName: "Example Bank",
  accountName: "E3 Kenya",
  accountNumber: "1234567890",
  routingNumber: "123456789",
  swift: "EXAMPUS123",
}

export function BankTransfer() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast.success(`${label} copied to clipboard`)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Bank Transfer Details</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Bank Name</p>
            <div className="flex items-center justify-between">
              <p className="font-medium">{bankDetails.bankName}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(bankDetails.bankName, "Bank name")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Account Name</p>
            <div className="flex items-center justify-between">
              <p className="font-medium">{bankDetails.accountName}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(bankDetails.accountName, "Account name")
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Account Number</p>
            <div className="flex items-center justify-between">
              <p className="font-medium">{bankDetails.accountNumber}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(bankDetails.accountNumber, "Account number")
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Routing Number</p>
            <div className="flex items-center justify-between">
              <p className="font-medium">{bankDetails.routingNumber}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(bankDetails.routingNumber, "Routing number")
                }
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">SWIFT Code</p>
            <div className="flex items-center justify-between">
              <p className="font-medium">{bankDetails.swift}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(bankDetails.swift, "SWIFT code")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            Please include your name and email in the transfer description. After
            making the transfer, please email a copy of the transfer receipt to{" "}
            <a
              href="mailto:donations@e3kenya.org"
              className="text-primary hover:underline"
            >
              donations@e3kenya.org
            </a>{" "}
            so we can track your donation.
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 
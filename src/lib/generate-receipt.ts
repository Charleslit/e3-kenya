import type { Donation } from "@/types/Donation"
import PDFDocument from "pdfkit"

export async function generateReceipt(donation: Donation): Promise<Buffer> {
  return new Promise((resolve) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
      info: {
        Title: `E3 Kenya Donation Receipt - ${donation.receiptNumber}`,
        Author: "E3 Kenya",
        Subject: "Donation Receipt",
      },
    })

    const chunks: Buffer[] = []
    doc.on("data", (chunk: Buffer) => chunks.push(chunk))
    doc.on("end", () => resolve(Buffer.concat(chunks)))

    // Header
    doc.image("public/images/logo/elephant-logo.svg", 50, 50, { width: 50 })
      .fontSize(20)
      .text("E3 Kenya - Donation Receipt", 120, 50)
      .fontSize(12)
      .text("Tax ID: YOUR-TAX-ID", { align: "right" })
      .moveDown()

    // Organization Info
    doc.fontSize(10)
      .text("E3 Kenya - Sisterherd Strong")
      .text("123 Main Street")
      .text("Nairobi, Kenya")
      .text("info@e3kenya.org")
      .moveDown()

    // Receipt Details
    doc.fontSize(12)
      .text("Receipt Number: " + donation.receiptNumber)
      .text("Date: " + donation.createdAt.toLocaleDateString())
      .text("Transaction ID: " + donation.transactionId)
      .moveDown()

    // Donor Information
    if (!donation.isAnonymous) {
      doc.text("Donor Information:")
        .text("Name: " + donation.donorName)
        .text("Email: " + donation.donorEmail)
        .moveDown()
    }

    // Donation Details
    doc.text("Donation Details:")
      .text(`Amount: $${donation.amount.toFixed(2)} ${donation.currency}`)
      .text(`Type: ${donation.type.charAt(0).toUpperCase() + donation.type.slice(1)}`)
      .text(`Payment Method: ${donation.paymentMethod.replace('_', ' ').toUpperCase()}`)
      .moveDown()

    // Allocation Details
    if (donation.allocationPreferences) {
      doc.text("Fund Allocation:")
        .text(`Program Expenses: ${donation.allocationPreferences.programExpenses}%`)
        .text(`Administrative: ${donation.allocationPreferences.administrative}%`)
        .text(`Fundraising: ${donation.allocationPreferences.fundraising}%`)
        .moveDown()
    }

    // Initiative/Campaign
    if (donation.initiative || donation.campaign) {
      doc.text("Designated For:")
        .text(donation.initiative || donation.campaign)
        .moveDown();
    }

    // Message
    if (donation.message) {
      doc.text("Donor Message:")
        .text(donation.message)
        .moveDown()
    }

    // Footer
    doc.fontSize(10)
      .text("E3 Kenya is a registered 501(c)(3) nonprofit organization.", 50, 700)
      .text("Your donation is tax-deductible to the extent allowed by law.")
      .text("Thank you for your support!")
      .text("This receipt is an important document - please retain it for your records.")

    // QR Code for digital verification
    doc.image(
      `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
        `https://e3kenya.org/verify-receipt/${donation.receiptNumber}`
      )}`,
      470,
      700,
      { width: 75 }
    )

    doc.end()
  })
} 
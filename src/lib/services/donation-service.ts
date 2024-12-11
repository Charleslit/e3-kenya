import { prisma } from "@/lib/prisma"
import { generateReceiptNumber } from "@/lib/generate-receipt-number";
import type { Donation, DonationCreateInput, DonationStatus } from "@/types/Donation"

export class DonationService {
  async createDonation(data: DonationCreateInput): Promise<Donation> {
    console.log("Creating donation with data:", JSON.stringify(data, null, 2))
    
    try {
      const donation = await prisma.donation.create({
        data: {
          amount: data.amount,
          currency: data.currency,
          status: data.status as DonationStatus,
          paymentMethod: data.paymentMethod,
          paymentId: data.paymentId,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          isAnonymous: data.isAnonymous,
          initiative: data.initiative,
          campaign: data.campaign,
          metadata: data.metadata,
        } as DonationCreateInput,
      })

      return {
        ...donation,
        receiptNumber: generateReceiptNumber(),
        donorName: `${data.firstName} ${data.lastName}`,
        donorEmail: data.email,
        transactionId: data.paymentId,
        type: "donation",
        status: donation.status as DonationStatus,
      } as Donation;
    } catch (error) {
      console.error("Error creating donation:", error)
      throw new Error("Failed to create donation")
    }
  }

  async verifyPayPalPayment(data: { paymentId: string; email: string; firstName: string; lastName: string; }): Promise<boolean> {
    // Implementation for verifying PayPal payment
    console.log("Verifying PayPal payment:", data);
    return true // Placeholder
  }

  async getDonationById(id: string): Promise<Donation | null> {
    const donation = await prisma.donation.findUnique({ where: { id } });
    if (!donation) return null;

    return {
      id: donation.id,
      amount: donation.amount || 0,
      currency: donation.currency || '',
      status: donation.status || 'unknown' as DonationStatus,
      paymentMethod: donation.paymentMethod || '',
      paymentId: donation.paymentId || '',
      firstName: donation.firstName || '',
      lastName: donation.lastName || '',
      email: donation.email || '',
      isAnonymous: donation.isAnonymous || false,
      initiative: donation.initiative || '',
      campaign: donation.campaign || '',
      metadata: donation.metadata || {},
      
      createdAt: donation.createdAt || new Date(),
      updatedAt: donation.updatedAt || new Date(),
    } as Donation;
  }

  async getDonations(): Promise<Donation[]> {
    const donations = await prisma.donation.findMany();
    return donations.map(donation => ({
      id: donation.id,
      amount: donation.amount,
      currency: donation.currency,
      status: donation.status,
      paymentMethod: donation.paymentMethod,
      paymentId: donation.paymentId,
      firstName: donation.firstName,
      lastName: donation.lastName,
      email: donation.email,
      isAnonymous: donation.isAnonymous,
      initiative: donation.initiative,
      campaign: donation.campaign,
      metadata: donation.metadata,
      createdAt: donation.createdAt,
      updatedAt: donation.updatedAt,
    } as Donation));
  }

  async getDonationsByEmail(email: string): Promise<Donation[]> {
    const donations = await prisma.donation.findMany({ where: { email } });
    return donations.map(donation => ({
      id: donation.id,
      amount: donation.amount,
      currency: donation.currency,
      status: donation.status,
      paymentMethod: donation.paymentMethod,
      paymentId: donation.paymentId,
      firstName: donation.firstName,
      lastName: donation.lastName,
      email: donation.email,
      isAnonymous: donation.isAnonymous,
      initiative: donation.initiative,
      campaign: donation.campaign,
      metadata: donation.metadata,
      createdAt: donation.createdAt,
      updatedAt: donation.updatedAt,
    } as Donation));
  }

  async getDonationStats(filters?: {
    startDate?: Date
    endDate?: Date
    initiative?: string
    campaign?: string
  }) {
    const where = {
      status: "successful" as DonationStatus,
      createdAt: {
        gte: filters?.startDate,
        lte: filters?.endDate,
      },
      initiative: filters?.initiative,
      campaign: filters?.campaign,
    }

    const [totalAmount, totalDonations] = await Promise.all([
      prisma.donation.aggregate({
        where,
        _sum: {
          amount: true,
        },
      }),
      prisma.donation.count({ where }),
    ])

    return {
      totalAmount: totalAmount._sum.amount || 0,
      totalDonations,
    }
  }

  async getRecentDonations(limit = 10) {
    return prisma.donation.findMany({
      where: { status: "successful" as DonationStatus, isAnonymous: false },
      orderBy: { createdAt: "desc" },
      take: limit,
      select: {
        id: true,
        amount: true,
        firstName: true,
        lastName: true,
        createdAt: true,
      },
    })
  }
}
export type DonationStatus = 'pending' | 'successful' | 'failed'
export type PaymentMethod = 'stripe' | 'paypal'

export interface DonationCreateInput {
  amount: number;
  currency: string;
  status: DonationStatus;
  paymentMethod: PaymentMethod;
  paymentId: string;
  firstName: string;
  lastName: string;
  email: string;
  isAnonymous: boolean;
  initiative?: string;
  campaign?: string;
  metadata?: object | null;
  receiptNumber?: string | null;
}

export interface Donation extends DonationCreateInput {
  id: string
  createdAt: Date
  updatedAt: Date
  receiptNumber: string
  donorName: string
  donorEmail: string
  transactionId: string
  type: string
  allocationPreferences?: {
    programExpenses: number
    administrative: number
    fundraising: number
  }
  message?: string;
}
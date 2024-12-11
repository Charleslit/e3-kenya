"use client"


export interface DonationTier {
  id: string
  name: string
  amount: number
  description: string
  impact: string
  icon: string
}

export const donationTiers: DonationTier[] = [
  {
    id: 'tier1',
    name: 'Friend',
    amount: 25,
    description: 'Provides menstrual pads for one girl for a full year',
    impact: 'Help a girl stay in school and maintain her dignity',
    icon: '🌱',
  },
  {
    id: 'tier2',
    name: 'Supporter',
    amount: 50,
    description: 'Supplies sewing materials for pad-making training',
    impact: 'Enable sustainable pad production in local communities',
    icon: '🧵',
  },
  {
    id: 'tier3',
    name: 'Champion',
    amount: 100,
    description: 'Sponsors a full training session for one woman',
    impact: 'Empower a woman with skills for economic independence',
    icon: '💪',
  },
  {
    id: 'tier4',
    name: 'Guardian',
    amount: 250,
    description: 'Provides a sewing machine for a community group',
    impact: 'Create sustainable income opportunities for multiple families',
    icon: '🎁',
  },
  {
    id: 'tier5',
    name: 'Visionary',
    amount: 500,
    description: 'Establishes a complete pad-making station',
    impact: 'Transform an entire community with sustainable resources',
    icon: '⭐',
  },
]

interface DonationTiersProps {
  selectedTier: DonationTier | null
  onSelect: (tier: DonationTier) => void
}

export function DonationTiers({ selectedTier, onSelect }: DonationTiersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {donationTiers.map((tier) => (
        <div
          key={tier.id}
          className={`
            relative p-6 rounded-lg border transition-all duration-200 cursor-pointer
            hover:border-primary hover:shadow-md
            ${selectedTier?.id === tier.id ? 'border-primary bg-primary/5' : 'border-neutral-200'}
          `}
          onClick={() => onSelect(tier)}
        >
          <div className="text-4xl mb-4">{tier.icon}</div>
          <h3 className="text-xl font-heading font-semibold mb-2">{tier.name}</h3>
          <p className="text-2xl font-serif text-primary mb-4">${tier.amount}</p>
          <p className="text-neutral-600 mb-3">{tier.description}</p>
          <p className="text-sm text-neutral-500 italic">Impact: {tier.impact}</p>
          
          {selectedTier?.id === tier.id && (
            <div className="absolute top-3 right-3">
              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
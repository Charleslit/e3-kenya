"use client"

export interface DonationTier {
  id: string
  name: string
  amount: number
  description: string
  impact: string
  icon: string
  imagePath: string
}

export const donationTiers: DonationTier[] = [
  {
    id: 'baby-elephant',
    name: 'Baby Elephant',
    amount: 25,
    description: 'Support our youngest members with essential resources',
    impact: 'Provide menstrual supplies for one girl for a full year, enabling her to stay in school with dignity',
    icon: '🐘',
    imagePath: '/images/logo/0.jpg'
  },
  {
    id: 'sister-elephant',
    name: 'Sister Elephant',
    amount: 50,
    description: 'Join our sisterhood of supporters making a direct impact',
    impact: 'Fund training materials and supplies for pad-making workshops, empowering local production',
    icon: '🦒',
    imagePath: '/images/logo/0.jpg'
  },
  {
    id: 'mother-elephant',
    name: 'Mother Elephant',
    amount: 100,
    description: 'Nurture our community growth and development',
    impact: 'Sponsor a complete training program for one woman, creating sustainable income opportunities',
    icon: '🌍',
    imagePath: '/images/logo/0.jpg'
  },
  {
    id: 'matriarch-elephant',
    name: 'Matriarch Elephant',
    amount: 250,
    description: 'Lead the way in creating lasting change',
    impact: 'Provide a sewing machine and startup materials for a community group of women',
    icon: '👑',
    imagePath: '/images/logo/0.jpg'
  },
  {
    id: 'herd-guardian',
    name: 'Herd Guardian',
    amount: 500,
    description: 'Protect and sustain our entire community',
    impact: 'Establish a complete pad-making station that can serve multiple communities',
    icon: '✨',
    imagePath: '/images/logo/0.jpg'
  }
]

interface DonationTiersProps {
  selectedTierId: string
  onSelectTier: (tier: DonationTier) => void
}

export function DonationTiers({ selectedTierId, onSelectTier }: DonationTiersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {donationTiers.map((tier) => (
        <div
          key={tier.id}
          className={`
            relative overflow-hidden rounded-lg border-2 transition-all duration-300 cursor-pointer
            hover:border-primary-500 hover:shadow-xl
            ${selectedTierId === tier.id ? 'border-primary-500 bg-primary-50' : 'border-accent-beige'}
          `}
          onClick={() => onSelectTier(tier)}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={tier.imagePath}
              alt={tier.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{tier.icon}</span>
                <h3 className="text-xl font-crimson text-white">{tier.name}</h3>
              </div>
              <p className="text-2xl font-crimson text-primary-100">${tier.amount}</p>
            </div>
          </div>
          
          <div className="p-6 bg-white">
            <p className="text-lg text-neutral-700 mb-4">{tier.description}</p>
            <div className="bg-accent-beige/30 p-4 rounded-lg">
              <h4 className="text-sm font-montserrat uppercase text-secondary-500 mb-2">Your Impact</h4>
              <p className="text-sm text-neutral-600">{tier.impact}</p>
            </div>
          </div>
          
          {selectedTierId === tier.id && (
            <div className="absolute top-4 right-4">
              <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
import { motion } from 'framer-motion'

const opportunities = [
  {
    title: 'Pad Making Trainer',
    description: 'Help teach pad-making skills to women and girls in local communities.',
    commitment: 'Flexible, 2-3 weeks on-site',
    requirements: [
      'Experience in sewing or crafting',
      'Teaching or training experience preferred',
      'Cultural sensitivity',
      'Willingness to travel to Kenya'
    ],
    icon: '🧵'
  },
  {
    title: 'Community Outreach',
    description: 'Engage with local communities to promote our programs and gather feedback.',
    commitment: 'Part-time, flexible hours',
    requirements: [
      'Strong communication skills',
      'Knowledge of local culture and customs',
      'Experience in community work',
      'Fluency in English and Swahili preferred'
    ],
    icon: '🤝'
  },
  {
    title: 'Administrative Support',
    description: 'Help with day-to-day operations, documentation, and program coordination.',
    commitment: 'Part-time, remote possible',
    requirements: [
      'Organizational skills',
      'Proficiency in Microsoft Office',
      'Attention to detail',
      'Previous NGO experience a plus'
    ],
    icon: '📊'
  },
  {
    title: 'Fundraising Coordinator',
    description: 'Assist in organizing fundraising events and donor relations.',
    commitment: 'Flexible, project-based',
    requirements: [
      'Fundraising experience',
      'Strong networking skills',
      'Event planning experience',
      'Grant writing skills a plus'
    ],
    icon: '💝'
  },
  {
    title: 'Marketing & Communications',
    description: 'Help share our story through social media, newsletters, and content creation.',
    commitment: 'Part-time, remote possible',
    requirements: [
      'Social media management experience',
      'Content creation skills',
      'Photography/videography a plus',
      'Strong writing abilities'
    ],
    icon: '📱'
  },
  {
    title: 'Education Program Support',
    description: 'Support our educational initiatives and mentorship programs.',
    commitment: 'Part-time, on-site',
    requirements: [
      'Teaching experience',
      'Program development skills',
      'Experience working with youth',
      'Understanding of educational systems'
    ],
    icon: '📚'
  }
]

export function VolunteerOpportunities() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Join Our Mission
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          We're looking for passionate individuals to join our Sisterherd and make a difference in the lives of Kenyan women and girls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((opportunity, index) => (
          <motion.div
            key={opportunity.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{opportunity.icon}</div>
            <h3 className="text-xl font-heading font-semibold mb-3">
              {opportunity.title}
            </h3>
            <p className="text-neutral-600 mb-4">
              {opportunity.description}
            </p>
            <div className="mb-4">
              <span className="text-sm font-medium text-primary">
                Time Commitment:
              </span>
              <p className="text-sm text-neutral-500">
                {opportunity.commitment}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-primary mb-2 block">
                Requirements:
              </span>
              <ul className="text-sm text-neutral-500 space-y-1">
                {opportunity.requirements.map((req, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

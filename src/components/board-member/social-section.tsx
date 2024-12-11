"use client"

import { motion } from "framer-motion"
import { SocialIcon } from "@/components/ui/social-icon"

interface SocialSectionProps {
  links: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export function SocialSection({ links }: SocialSectionProps) {
  const socialLinks = [
    { type: 'linkedin' as const, href: links.linkedin },
    { type: 'twitter' as const, href: links.twitter },
    { type: 'email' as const, href: links.email && `mailto:${links.email}` }
  ].filter(link => link.href)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex gap-2"
    >
      {socialLinks.map(({ type, href }) => (
        <SocialIcon
          key={type}
          type={type}
          href={href!}
          size="md"
        />
      ))}
    </motion.div>
  )
} 
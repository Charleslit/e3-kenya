"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, LucideIcon } from "lucide-react"
import { Button } from "./button"

interface SocialIconProps {
  type: 'linkedin' | 'twitter' | 'email'
  href: string
  size?: 'sm' | 'md' | 'lg'
}

const icons: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
}

const sizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
}

export function SocialIcon({ type, href, size = "md" }: SocialIconProps) {
  const Icon = icons[type]

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-primary/10"
        asChild
      >
        <a
          href={href}
          target={type !== 'email' ? "_blank" : undefined}
          rel={type !== 'email' ? "noopener noreferrer" : undefined}
          aria-label={`${type} profile`}
        >
          <Icon className={sizes[size]} />
        </a>
      </Button>
    </motion.div>
  )
} 
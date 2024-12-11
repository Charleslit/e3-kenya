"use client"

import { Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialLinksProps {
  links: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-2">
      {links.linkedin && (
        <Button
          variant="ghost"
          size="icon"
          asChild
        >
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
      )}
      {links.twitter && (
        <Button
          variant="ghost"
          size="icon"
          asChild
        >
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </Button>
      )}
      {links.email && (
        <Button
          variant="ghost"
          size="icon"
          asChild
        >
          <a
            href={`mailto:${links.email}`}
            aria-label="Email Contact"
          >
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
  )
} 
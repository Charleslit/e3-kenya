"use client"

import { BoardMember } from "@/types/BoardMember"
import { Modal } from "@/components/ui/modal"
import { SocialSection } from "./social-section"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"

interface MemberModalProps {
  member: BoardMember
  isOpen: boolean
  onClose: () => void
}

export function MemberModal({ member, isOpen, onClose }: MemberModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative h-[300px] md:h-[400px]"
        >
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-primary font-medium">{member.role}</p>
              {member.location && (
                <p className="text-sm text-muted-foreground">{member.location}</p>
              )}
            </div>
            {member.socialLinks && <SocialSection links={member.socialLinks} />}
          </div>
          <div className="prose prose-sm">
            <p className="mb-4">{member.bio}</p>
            {member.expertise && (
              <>
                <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((item, index) => (
                    <Badge key={index} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </>
            )}
            {member.quote && (
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-primary pl-4 italic mt-4"
              >
                {member.quote}
              </motion.blockquote>
            )}
          </div>
        </motion.div>
      </div>
    </Modal>
  )
} 
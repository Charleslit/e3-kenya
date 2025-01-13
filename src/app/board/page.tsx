'use client'

import { PageTransition } from '@/components/page-transition'
import { Container } from '@/components/ui/container'
import { BoardMembers } from '@/components/sections/board-members'
import { motion } from 'framer-motion'
import boardMembersJson from '@/data/board-members.json'
import { BoardMember } from '@/types/BoardMember'
import { ParallaxSection } from '@/components/ui/parallax-section'

const boardMembers = boardMembersJson.boardMembers as BoardMember[]

export default function BoardPage() {
  return (
    <PageTransition>
      <ParallaxSection
        imageUrl="/images/backgrounds/board-hero.jpg"
        className="py-24"
      >
        <Container>

          <BoardMembers boardMembers={boardMembers} />
        </Container>
      </ParallaxSection>
    </PageTransition>
  )
} 
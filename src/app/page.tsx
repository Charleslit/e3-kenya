'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/hero'
import HerdInitiatives from '@/components/sections/initiatives-showcase'
import { BoardMembers } from '@/components/sections/board-members'
import initiativesJson from '@/data/initiatives.json'
import boardMembersJson from '@/data/board-members.json'
import { Initiative } from '@/types/Initiative'
import { BoardMember } from '@/types/BoardMember'
import MissionSection from '@/components/sections/mission'
import { DonationSection } from '@/components/sections/donation'
import DonationTiers from '@/components/sections/herd-needs'
import HerdChroniclesSection from '@/components/sections/herd-chronicles'
import MeetTheHerdSection from '@/components/sections/volunteer/meet-the-herd'
import SisterherdStrongSection from '@/components/SisterherdStrongSection'
import { SectionWrapper } from '@/components/layout/wrapper'
import SisterherdStrongSection1 from '@/components/sections/sisterhood-strong'

const initiatives = initiativesJson.initiatives as Initiative[]
const boardMembers = boardMembersJson.boardMembers as BoardMember[]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SectionWrapper>
        {/* <SisterherdStrongSection /> */}
        <SisterherdStrongSection1/>
      </SectionWrapper>
      <SectionWrapper>
        <HerdInitiatives />
      </SectionWrapper>
      <SectionWrapper>
        <MeetTheHerdSection />
      </SectionWrapper>
      <SectionWrapper>
        <HerdChroniclesSection />
      </SectionWrapper>
      <SectionWrapper>
        <DonationTiers />
      </SectionWrapper>
    </div>
  )
}

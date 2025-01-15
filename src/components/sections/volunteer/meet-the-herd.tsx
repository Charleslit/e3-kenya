'use client'

import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { LogoButton } from '@/components/shared/logobutton'

export function MeetTheHerdSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-primary/5">
      {/* Header Section */}
      <motion.div 
        className="max-w-4xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={cn(
          "font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary",
          "tracking-tight leading-tight"
        )}>
          Meet the Herd
        </h2>
        <p className={cn(
          "text-lg md:text-xl text-muted-foreground",
          "max-w-3xl mx-auto leading-relaxed"
        )}>
          At the heart of our mission to encourage, engage, and empower Kenyan girls and women is a diverse and dedicated Board of Directors who bring a wealth of experience, expertise, and passion, providing strategic leadership while ensuring that all programs align with our vision and mission. This Sisterherd transcends international borders, including women from the United States and Kenya, all of whom represent various sectors of the community, including education, public health, business, and philanthropy.
        </p>
      </motion.div>

      {/* Board Members */}
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Salome Aluso */}
        <motion.article 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
            <Image
              src="/images/initiatives/board.jpeg"
              alt="Salome Aluso"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl text-primary">Salome Aluso</h3>
            <p>
              Salome holds a Bachelor's degree in Education (Arts) from the University of Nairobi, a Master's degree in Applied Linguistics from Ohio University, and is currently completing her PhD in Higher Education Administration & Student Affairs at Ohio University. As a former Fulbright scholarship recipient, she has taught Swahili at both the high school and college levels, and has gained significant experience in curriculum design, classroom teaching, and management.
            </p>
            <p>
              Salome's extensive background in higher education administration includes successful grant writing to fund various college programs (Swahili STARTALK at Ohio University and Summer Bridge Program at Ohio Wesleyan University), as well as expertise in data analysis and interpretation to identify needs, trends and implement programming.
            </p>
            <p>
              Currently based in Kenya, Salome is volunteering with community organizations that focus on youth and girls/women empowerment while she completes her doctoral dissertation.
            </p>
          </div>
        </motion.article>

        {/* Jennie Chen */}
        <motion.article 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
            <Image
              src="/images/initiatives/board.jpeg"
              alt="Jennie Chen"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl text-primary">Jennie Chen</h3>
            <p>
              Bridging data, psychology, and community empowerment, Jennie Chen has extensive expertise in social marketing, data analysis, data products, and community engagement. She holds a Doctorate and Masters in Social Psychology from Texas A&M University and a Bachelor's in Psychology from The University of Texas - Austin.
            </p>
            <p>
              Jennie excels in leveraging digital data to enhance content strategies, understand audience behavior, and build thriving community cultures. She has worked with brands such as Amazon, Walmart, Target, ExactTarget, and The Home Depot to solve business problems and create thriving online communities guided by data insight.
            </p>
            <p>
              Beyond her professional achievements, Jennie is dedicated to community and food advocacy. She founded Keep Austin Dog Friendly, which expanded into a community hub and iPhone app. Her food blog and her involvement with the Austin Food Blogger Alliance highlight her commitment to culinary arts and local engagement.
            </p>
          </div>
        </motion.article>

        {/* Susan Kavaya */}
        <motion.article 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
            <Image
              src="/images/initiatives/board.jpeg"
              alt="Susan Kavaya"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl text-primary">Susan Kavaya</h3>
            <p>
              Susan is currently pursuing a PHD in public health at Indiana University- Bloomington. She specializes in Health Behavior and specifically adolescent health. Her areas of interest are in adolescent sexual and reproductive health issues such as teen pregnancy prevention, contraceptive use, HIV and other STIs.
            </p>
            <p>
              Susan holds two masters' degrees from Indiana University Bloomington - a Master of Arts degree in African studies and a Master of Science degree in School and College Health Education. In addition, she holds a bachelor's degree in Education from the University of Nairobi.
            </p>
            <p>
              Born and raised in Kenya, Susan has worked extensively with adolescents/young people in various capacities including as a teacher at the high school level, a peer educator and as a researcher. She also has experience at the university level, teaching courses in public health and Kiswahili.
            </p>
          </div>
        </motion.article>

        {/* Rhinah Ondiso */}
        <motion.article 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
            <Image
              src="/images/initiatives/board.jpeg"
              alt="Rhinah Ondiso"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl text-primary">Rhinah Ondiso</h3>
            <p>
              Born and raised in Kenya born in Vihiga County, Ikumu Village in Western Kenya. In 2003, when her single mother couldn't raise tuition for university, Rhinah received help from the Kijana Educational Empowerment initiative, in West Palm Beach, Florida and became the first girl from Ebusiloli Secondary School to join the University of Nairobi on a government-subsidized program where she studied Linguistics and Literature.
            </p>
            <p>
              After beginning her university studies at the University of Nairobi, she applied to Zawadi Africa and was awarded a scholarship to study in the United States at Arkansas Baptist College in Little Rock Arkansas in the fall of 2008. In addition to attaining a bachelor's degree in Business Administration, Rhinah holds an MBA from Lynn University, in Boca Raton, FL, and a Master of Science in Project Management from Harrisburg University of Science and Technology.
            </p>
            <p>
              She currently resides in Massachusetts and works as a Software Business Analyst/Project Manager for an insurance and annuities company based in the greater Boston area.
            </p>
          </div>
        </motion.article>

        {/* Vicki Seiler-Cushman */}
        <motion.article 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
            <Image
              src="/images/initiatives/board.jpeg"
              alt="Vicki Seiler-Cushman"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl text-primary">Vicki Seiler-Cushman</h3>
            <p>
              With expertise in marketing and communications, Vicki is currently an entrepreneur for a small family-owned business, serving as Vice President of JV Cedar Properties and the co-owner of Glazed Donut Eatery Beavercreek along with her husband. Previously, she studied at the University of Phoenix with a major in Communications.
            </p>
            <p>
              Vicki worked in Marketing and Communications at Proctor and Gamble as a specialist for the Iams and Eukanuba dog food brands. Later, she joined Mars, Inc. where on the Royal Canin brand in Strategy and Planning.
            </p>
            <p>
              She has an extensive background in purebred dogs, since the age of 12 showing her mother's Siberian Huskies. She went on to becoming a professional handler winning two prestigious awards, Top New Professional and Female Handler of the Year. In 2016 Vicki began her judging career and now is approved to judge more than 100 breeds for the AKC.
            </p>
          </div>
        </motion.article>

        {/* Jacquie Smith */}
        <motion.article 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
            <Image
              src="/images/initiatives/board.jpeg"
              alt="Jacquie Smith"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl text-primary">Jacquie Smith</h3>
            <p>
              Jacquie is a graduate of Purdue University with a B.S. in Mechanical Engineering. She also holds a Master of Business Administration degree from the University of Pittsburgh and attended Carnegie Mellon University's Negotiation and Leadership Academy for Women. Jacquie has spent her entire career in the electric utility industry in various engineering, compliance and leadership roles.
            </p>
            <p>
              For more than 20 years, she has served as an advocate for individuals with developmental disabilities as a board member of the East Suburban Citizen Advocacy, an organization which builds inclusive opportunities and provides advocacy free of charge. The organization's vision of a community in which all people are appreciated and accepted without question and where dignity and equality are unconditionally enjoyed resonates strongly with Jacquie.
            </p>
          </div>
        </motion.article>

        {/* Join Button */}
        <motion.div 
          className="text-center pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <LogoButton
            href="/join"
            variant="default"
            size="lg"
            className="inline-flex"
          >
            Join Our Herd
          </LogoButton>
        </motion.div>
      </div>
    </Section>
  )
}

export default MeetTheHerdSection
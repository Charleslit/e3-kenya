// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { LogoButton } from '@/components/shared/logobutton'
// import { routes } from '@/lib/routes' // Assuming you have a routes file

// export function SisterherdStrongSection() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-amber-50 to-lime-50">
//       {/* Hero Section */}
//       <div className="relative h-screen">
//         <Image
//           src="/images/kenyan-girls.jpg" // Replace with your actual image
//           alt="Kenyan girls smiling"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
//           <motion.h1 
//             className="text-5xl md:text-7xl font-bold mb-4 text-center"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             SISTERHERD STRONG
//           </motion.h1>
//           <motion.div
//             className="text-2xl md:text-4xl mb-8 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <h2 className="font-serif italic">E3 Kenya</h2>
//             <h3 className="font-sans">Encourage, Engage, Empower</h3>
//           </motion.div>
//           <motion.p 
//             className="text-xl md:text-2xl text-center max-w-3xl px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Building a Future Where Kenyan Women and Girls Lead the Way
//           </motion.p>
//         </div>
//       </div>

//       {/* Vision and Mission Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div 
//             className="bg-amber-100 p-8 rounded-lg shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl font-bold text-amber-800 mb-4">Our Vision</h2>
//             <p className="text-lg text-amber-900 mb-4">
//               A Kenya Where Every Woman and Girl Has the Opportunity to Make Her Own Decisions
//             </p>
//             <p className="text-amber-800">
//               At E3 we believe in a world where every Kenyan girl and woman is empowered to be an active participant 
//               in shaping her own life and community. We don't just bring solutions; we work hand-in-hand with local 
//               women and girls to develop sustainable programs that reflect their needs and aspirations.
//             </p>
//           </motion.div>
//           <motion.div 
//             className="bg-lime-100 p-8 rounded-lg shadow-lg"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <h2 className="text-3xl font-bold text-lime-800 mb-4">Our Mission</h2>
//             <p className="text-lg text-lime-900 mb-4">
//               To Encourage, Engage, and Empower Kenyan Girls and Women through dialogue and community-inspired projects, 
//               increasing the number of those who become active participants in their own decision-making.
//             </p>
//             <p className="text-lime-800">
//               Whether it's through education, mentorship, or creating income-generating programs, we are committed to 
//               engaging with and empowering Kenyan girls and women as they seek greater freedoms and opportunities in their communities.
//             </p>
//           </motion.div>
//         </div>
//         <div className="mt-12 flex justify-center">
//           <LogoButton 
//             href={routes.donate}
//             variant="default"
//             textStyle="glow"
//             focusStyle="glow"
//             darkOverlay
//             className="min-w-[200px] text-lg"
//           >
//             Support Our Mission
//           </LogoButton>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default SisterherdStrongSection
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { LogoButton } from './shared/logobutton'

export function SisterherdStrongSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <Image
          src="/images/testimonials/maasaiwomen.jpeg"
          alt="Maasai women"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <motion.div
            className="max-w-4xl space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
              E3 Kenya
            </h1>
            <p className="text-xl md:text-3xl mb-4 font-poppins font-semibold text-amber-300">
              Encourage, Engage, Empower
            </p>
            <p className="text-2xl md:text-3xl mb-8 font-playfair">
              Building a Future Where Kenyan Women and Girls Lead the Way
            </p>
            <LogoButton
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              HELP US MAKE TRACKS
            </LogoButton>
          </motion.div>
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Vision */}
            <motion.div className="flex flex-col md:flex-row items-center gap-12" {...fadeIn}>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-crimson font-playfair">Our Vision</h2>
                <p className="text-xl font-semibold text-gray-800">
                  A Kenya Where Every Woman and Girl Has the Opportunity to Make Her Own Decisions
                </p>
                <p className="text-gray-700">
                  At E3 we believe in a world where every Kenyan girl and woman is empowered to be an active participant in shaping her own life and community. We don't just bring solutions; we work hand-in-hand with local women and girls to develop sustainable programs that reflect their needs and aspirations.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/testimonials/maasaiwomen.jpeg"
                  alt="Vision illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div className="flex flex-col md:flex-row-reverse items-center gap-12" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-forest font-playfair">Our Mission</h2>
                <p className="text-xl font-semibold text-gray-800">
                  To Encourage, Engage, and Empower Kenyan Girls and Women
                </p>
                <p className="text-gray-700">
                  Whether it's through education, mentorship, or creating income-generating programs, we are committed to engaging with and empowering Kenyan girls and women as they seek greater freedoms and opportunities in their communities.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/testimonials/maasaiwomen.jpeg"
                  alt="Mission illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-crimson text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Us in Empowering Kenyan Women and Girls
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your support can make a lasting difference in the lives of Kenyan women and girls.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-white text-crimson hover:bg-amber-100 transition-colors duration-300"
            >
              Support Our Mission
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SisterherdStrongSection


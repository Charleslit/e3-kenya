import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '../ui/container';
import { cn } from '@/lib/utils';

export function PremiumHeroSection() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] opacity-5" />
      
      {/* Main content wrapper */}
      <div className="relative w-full h-full flex flex-col justify-between py-8">
        {/* Header Content */}
        <div className="w-full z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl",
                  "font-['Playfair_Display']",
                  "font-bold",
                  "tracking-wide",
                  "text-emerald-400",
                  "drop-shadow-md",
                  "transform-gpu",
                  "transition-colors duration-300",
                )}
              >
                E3 KENYA
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={cn(
                  "text-3xl md:text-4xl lg:text-5xl",
                  "font-['Montserrat']",
                  "font-semibold tracking-wide mt-2",
                  "text-emerald-400",
                  "drop-shadow-md",
                  "transform-gpu",
                  "transition-colors duration-300"
                )}
              >
                SISTERHERD STRONG
              </motion.h2>
            </div>
          </Container>
        </div>

        {/* Image Container - Full Width */}
{/* Image Container - Full Width */}
<div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
  <Image
    src="/images/logo/hero/hero.webp"
    alt="Group of smiling girls representing E3 Kenya"
    fill
    priority
    quality={90}
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 100vw, 
           100vw"
    style={{
      objectPosition: 'center', // Centered vertically and horizontally
    }}
  />
</div>

        {/* Mission Words */}
        <div className="w-full z-10">
          <Container>
            <motion.div 
              className="flex justify-center items-center gap-x-6 md:gap-x-10 gap-y-3 flex-wrap backdrop-blur-sm bg-white/10 py-4 px-6 rounded-full max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {[
                { text: 'Encourage', color: 'text-rose-500' },
                { text: 'Engage', color: 'text-emerald-400' },
                { text: 'Empower', color: 'text-zinc-900' }
              ].map(({ text, color }, index) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
                  className={cn(
                    "text-2xl md:text-3xl lg:text-4xl",
                    "font-['Raleway']",
                    "font-bold",
                    color,
                    "drop-shadow-lg",
                    "transition-all duration-300",
                    "hover:scale-105",
                    "transform-gpu"
                  )}
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {text}
                </motion.span>
              ))}
            </motion.div>
          </Container>
        </div>
      </div>
    </div>
  );
}
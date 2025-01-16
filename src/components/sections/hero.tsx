import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '../ui/container';
import { cn } from '@/lib/utils';

export function PremiumHeroSection() {
  return (
    <div className="relative w-full">
      {/* E3 KENYA Section */}
      <div className="relative z-20 w-full bg-white py-4">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl",
              "font-['Playfair_Display']",
              "font-bold",
              "tracking-tight",
              "bg-gradient-to-r from-emerald-600 to-emerald-400",
              "text-transparent bg-clip-text"
            )}
          >
            E3 KENYA
          </motion.h1>
        </Container>
      </div>

      {/* Hero Image Section with SISTERHERD STRONG */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/logo/hero/hero.webp"
          alt="E3 Kenya Background"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: 'center 25%',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        
        {/* SISTERHERD STRONG overlay */}
        <div className="absolute inset-x-0 top-8 z-10">
          <Container className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={cn(
                "text-xl md:text-2xl lg:text-3xl",
                "font-['Montserrat']",
                "font-bold",
                "text-white",
                "tracking-wide",
                "drop-shadow-lg",
                "px-4 py-2",
                "bg-black/30",
                "backdrop-blur-sm",
                "rounded-lg",
                "inline-block"
              )}
            >
              SISTERHERD STRONG
            </motion.h2>
          </Container>
        </div>
      </div>

      {/* Mission Words Section */}
      <div className="relative z-10 w-full bg-white py-4">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-x-12 md:gap-x-16 gap-y-3"
          >
            {[
              { text: 'ENCOURAGE', color: 'text-rose-500' },
              { text: 'ENGAGE', color: 'text-emerald-500' },
              { text: 'EMPOWER', color: 'text-zinc-900' }
            ].map(({ text, color }, index) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + (index * 0.2), duration: 0.5 }}
                className={cn(
                  "text-2xl md:text-3xl lg:text-4xl",
                  "font-['Raleway']",
                  "font-bold",
                  color,
                  "transition-all duration-300",
                  "hover:scale-105 cursor-default"
                )}
              >
                {text}
              </motion.span>
            ))}
          </motion.div>
        </Container>
      </div>
    </div>
  );
}
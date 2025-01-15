import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { cn } from '@/lib/utils';
import styles from './PremiumHeroSection.module.css';

export function PremiumHeroSection() {
  return (
    <div 
      className={cn(
        "relative w-full min-h-screen bg-no-repeat bg-cover bg-center",
        styles.heroBackground
      )}
      style={{
        backgroundImage: 'url("/images/logo/hero/hero.webp")'
      }}
    >
      {/* Content Wrapper */}
      <div className="flex flex-col min-h-screen">
        {/* Top Content */}
        <div className="pt-10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
                  "font-serif font-extrabold",
                  "tracking-wider",
                  "text-emerald-400"
                )}
              >
                E3 KENYA
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={cn(
                  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                  "font-bold tracking-wide mt-2 sm:mt-4",
                  "text-emerald-400"
                )}
              >
                SISTERHERD STRONG
              </motion.h2>
            </div>
          </Container>
        </div>

        {/* Bottom Content - Using margin-top: auto to push to bottom */}
        <div className="mt-auto mb-12">
          <Container>
            <motion.div 
              className="flex justify-center items-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 flex-wrap"
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
                    "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
                    "font-bold",
                    color,
                    "transition-transform duration-300",
                    "hover:scale-105"
                  )}
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
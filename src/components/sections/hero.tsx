import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogoButton } from '../shared/logobutton';

const PremiumHeroSection = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: "url('/images/logo/image.png')" }}
          />
          {/* Reduced opacity in gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20" />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Main Heading with Text Shadow */}
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              SISTERHERD STRONG
            </h1>
            
            {/* E3 KENYA Section */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                <Card className="bg-black/30 backdrop-blur-sm border-none px-8 py-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400 drop-shadow-lg">
                    E3 KENYA
                  </h2>
                </Card>
              </motion.div>
              
              {/* Tagline with Text Shadow */}
              <div className="relative">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold space-x-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  <span className="text-rose-500">Encourage</span>
                  <span className="text-emerald-500">Engage</span>
                  <span className="text-amber-500">Empower</span>
                </h3>
                <motion.div 
                  className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-rose-500 via-emerald-500 to-amber-500"
                  initial={{ width: 0, x: '-50%' }}
                  animate={{ width: '50%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </div>
            </div>
            
            {/* Mission Statement with Background */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-lg">
                Join us in empowering Kenyan women and girls through education, 
                economic opportunities, and community support.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <LogoButton 
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20"
              >
                Help us make tracks
              </LogoButton>
              {/* <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Learn More
              </Button> */}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white drop-shadow-lg animate-bounce" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumHeroSection;
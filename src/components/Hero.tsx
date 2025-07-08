import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-desert.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(
              135deg, 
              rgba(0,0,0,0.4) 0%, 
              rgba(255,140,0,0.3) 30%, 
              rgba(0,0,0,0.4) 100%
            ), url(${heroImage})`
          }}
        />
      </motion.div>

      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 z-10 pattern-moroccan" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-primary-light text-lg md:text-xl font-inter tracking-wide">
              नमस्ते • مرحبا • Welcome
            </p>
          </motion.div>

          {/* Main Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight"
          >
            Journey Through
            <span className="block text-gradient-sunset">
              Timeless Cultures
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Discover the mystical landscapes, ancient traditions, and vibrant cultures 
            of India and the Middle East through expertly curated experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button size="lg" className="btn-cultural text-lg px-8 py-4">
              <MapPin className="mr-2 h-5 w-5" />
              Explore Destinations
            </Button>
            <Button size="lg" variant="outline" className="btn-royal text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Plan Your Journey
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary-light mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-300">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary-light mb-2">10K+</div>
              <div className="text-sm md:text-base text-gray-300">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-primary-light mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-300">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white cursor-pointer"
        >
          <span className="text-sm mb-2 font-inter">Discover More</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* Floating Cultural Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-16 h-16 opacity-20 z-15 hidden lg:block"
      >
        <div className="w-full h-full pattern-mandala bg-primary"></div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-12 h-12 opacity-30 z-15 hidden lg:block"
      >
        <div className="w-full h-full rounded-full bg-gradient-oasis animate-glow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
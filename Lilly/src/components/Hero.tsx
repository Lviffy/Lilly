import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from './GradientButton';
import GradientOrbs from './GradientOrbs';
import BackgroundGrid from './BackgroundGrid';

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#fef6ff] via-[#ffe9fc] to-[#fff0fe]">
      <BackgroundGrid />
      <GradientOrbs />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
          >
            <span className="block bg-gradient-to-r from-[#9747FF] to-[#e9b0ff] bg-clip-text text-transparent">Chat with Lilly</span>
            <span className="block text-[#9747FF]">Your Travel Guide</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Discover the world with personalized recommendations, smart itinerary planning, and 
            interactive exploration features. Let AI enhance your travel experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <GradientButton 
              text="Start Planning"
              onClick={() => window.location.href = '#try-now'}
              className="bg-gradient-to-r from-[#9747FF] to-[#e9b0ff] hover:from-[#8a35ff] hover:to-[#e29dff] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
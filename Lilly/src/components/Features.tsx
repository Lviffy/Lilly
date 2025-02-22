import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import GradientOrbs from './GradientOrbs';

const features = [
  {
    name: 'AI-Powered Recommendations',
    description: 'Get personalized travel suggestions based on your interests, budget, and travel style.',
    icon: HeroIcons.SparklesIcon,
  },
  {
    name: 'Local Insights',
    description: 'Access authentic local recommendations for hidden gems, restaurants, and cultural experiences.',
    icon: HeroIcons.GlobeAltIcon,
  },
  {
    name: 'Smart Itinerary Planning',
    description: 'Create optimized travel routes and schedules with our intelligent planning algorithm.',
    icon: HeroIcons.MapIcon,
  },
  {
    name: 'Real-time Updates',
    description: 'Stay informed with live updates on weather, events, and local conditions at your destination.',
    icon: HeroIcons.CalendarIcon,
  },
  {
    name: 'Budget Optimization',
    description: 'Get the best deals on accommodations, activities, and transportation within your budget.',
    icon: HeroIcons.CurrencyDollarIcon,
  },
  {
    name: 'Community Insights',
    description: 'Connect with fellow travelers and share experiences through our community platform.',
    icon: HeroIcons.UserGroupIcon,
  }
];

export default function Features() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-[#fef6ff] via-[#ffe9fc] to-[#fff0fe] relative" id="features">
      <GradientOrbs />
      {/* Center orb */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#d9a8e3] via-[#c791da] to-[#b576d1] opacity-40 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase bg-gradient-to-r from-[#9747FF] to-[#e9b0ff] bg-clip-text text-transparent px-4 py-1 rounded-full border border-purple-200 w-fit mx-auto backdrop-blur-sm">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight bg-gradient-to-r from-[#9747FF] to-[#e9b0ff] bg-clip-text text-transparent sm:text-4xl">
            Chat with Lilly
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Experience smarter, more personalized travel planning with our cutting-edge AI technology.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="group relative bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-100 
                         transform-gpu transition-all duration-500 ease-out
                         hover:scale-[1.02] hover:bg-white/90 hover:shadow-[0_8px_30px_rgb(151,71,255,0.15)]
                         hover:border-purple-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffd6f5]/10 via-[#bc95ff]/10 to-[#9747FF]/10 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
                              group-hover:backdrop-blur-xl"></div>
                <div className="relative z-10">
                  <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#9747FF] to-[#e9b0ff] text-white shadow-lg group-hover:shadow-purple-300/50 transition-all duration-300">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4 relative">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

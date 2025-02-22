import React from 'react';

const GradientOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Large orb - top right */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#ffd6f5] via-[#e9b0ff] to-[#9747FF] rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      
      {/* Medium orb - bottom left */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-[#9747FF] via-[#e9b0ff] to-[#ffd6f5] rounded-full blur-3xl opacity-20 animate-float"></div>
      
      {/* Small orb - center */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#ffd6f5] to-[#9747FF] rounded-full blur-3xl opacity-15 animate-float-delay"></div>
      
      {/* Extra small orb - random position */}
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-bl from-[#e9b0ff] to-[#9747FF] rounded-full blur-2xl opacity-10 animate-pulse-slow"></div>
    </div>
  );
};

export default GradientOrbs;

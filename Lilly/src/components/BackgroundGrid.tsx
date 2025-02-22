import React, { useEffect, useState } from 'react';

export default function BackgroundGrid() {
  const [gridItems, setGridItems] = useState<number>(0);

  useEffect(() => {
    const calculateGrid = () => {
      const vh = Math.ceil(window.innerHeight / 50); 
      const vw = Math.ceil(window.innerWidth / 50);
      setGridItems(vh * vw);
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] auto-rows-[50px] opacity-40">
        {Array.from({ length: gridItems }).map((_, i) => (
          <div
            key={i}
            className="group relative transform transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 border border-purple-400/20 group-hover:border-purple-500/80 transition-all duration-500"></div>
            <div className="absolute inset-[2px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-[2px] group-hover:from-purple-500/30 group-hover:to-pink-500/30 group-hover:blur-[3px] transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

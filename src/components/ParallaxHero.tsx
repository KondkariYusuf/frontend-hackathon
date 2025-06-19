import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const ParallaxHero: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const midgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rate1 = scrollY * -0.5;
      const rate2 = scrollY * -0.3;
      const rate3 = scrollY * -0.1;

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate3d(0, ${rate1}px, 0)`;
      }
      if (midgroundRef.current) {
        midgroundRef.current.style.transform = `translate3d(0, ${rate2}px, 0)`;
      }
      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translate3d(0, ${rate3}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Midground Layer */}
      <div
        ref={midgroundRef}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="text-center text-white px-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent">
            ELEVATE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Where creative vision meets technical excellence. We craft digital experiences that transcend expectations.
          </p>
        </div>
      </div>

      {/* Foreground Layer */}
      <div
        ref={foregroundRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};
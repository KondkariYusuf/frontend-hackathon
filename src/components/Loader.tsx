import React, { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-transform duration-500 ${!isAnimating ? 'translate-y-full' : ''}`}>
      <div className="relative">
        <div className="loader-bar"></div>
      </div>
      <style jsx>{`
        .loader-bar {
          width: 200px;
          height: 4px;
          background: linear-gradient(90deg, #00D4FF, #FFD700);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          animation: morphToL 2.5s ease-in-out forwards;
        }

        .loader-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: shimmer 1.5s infinite;
        }

        @keyframes morphToL {
          0% {
            width: 200px;
            height: 4px;
            transform: rotate(0deg);
          }
          60% {
            width: 200px;
            height: 4px;
            transform: rotate(0deg);
          }
          80% {
            width: 100px;
            height: 4px;
            transform: rotate(0deg);
          }
          100% {
            width: 4px;
            height: 100px;
            transform: rotate(0deg);
            border-radius: 2px 2px 0 0;
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};
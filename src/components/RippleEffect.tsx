import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const RippleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Array<{x: number, y: number, radius: number, maxRadius: number, alpha: number}>>([]);
  const animationRef = useRef<number>();
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createRipple = (x: number, y: number) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 150,
        alpha: 1
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.radius += 3;
        ripple.alpha = 1 - (ripple.radius / ripple.maxRadius);

        if (ripple.alpha > 0) {
          // Draw chromatic aberration effect with theme-aware opacity
          const aberration = 2;
          const baseOpacity = isDark ? 0.3 : 0.2;
          
          // Red channel
          ctx.strokeStyle = `rgba(255, 0, 0, ${ripple.alpha * baseOpacity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(ripple.x - aberration, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.stroke();
          
          // Green channel
          ctx.strokeStyle = `rgba(0, 255, 0, ${ripple.alpha * baseOpacity})`;
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.stroke();
          
          // Blue channel
          ctx.strokeStyle = `rgba(0, 212, 255, ${ripple.alpha * (baseOpacity * 1.5)})`;
          ctx.beginPath();
          ctx.arc(ripple.x + aberration, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.stroke();

          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
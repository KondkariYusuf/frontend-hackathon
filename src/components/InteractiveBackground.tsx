import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const objectsRef = useRef<Array<{x: number, y: number, rotation: number, scale: number}>>([]);
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

    const initObjects = () => {
      objectsRef.current = [];
      for (let i = 0; i < 15; i++) {
        objectsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.5
        });
      }
    };

    const drawCross = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, distortion: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      
      // Create chromatic aberration effect with theme-aware colors
      const aberration = distortion * 5;
      const baseOpacity = isDark ? 0.3 : 0.2;
      const distortionOpacity = distortion * (isDark ? 0.4 : 0.3);
      
      // Red channel
      ctx.strokeStyle = `rgba(255, 0, 0, ${baseOpacity + distortionOpacity})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-size - aberration, 0);
      ctx.lineTo(size - aberration, 0);
      ctx.moveTo(0, -size - aberration);
      ctx.lineTo(0, size - aberration);
      ctx.stroke();
      
      // Green channel
      ctx.strokeStyle = `rgba(0, 255, 0, ${baseOpacity + distortionOpacity})`;
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.stroke();
      
      // Blue channel
      ctx.strokeStyle = `rgba(0, 212, 255, ${baseOpacity + distortionOpacity * 1.5})`;
      ctx.beginPath();
      ctx.moveTo(-size + aberration, 0);
      ctx.lineTo(size + aberration, 0);
      ctx.moveTo(0, -size + aberration);
      ctx.lineTo(0, size + aberration);
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      // Theme-aware background clearing
      ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.02)' : 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      objectsRef.current.forEach((obj, index) => {
        // Calculate distance from mouse
        const distance = Math.sqrt(
          Math.pow(mousePos.x - obj.x, 2) + Math.pow(mousePos.y - obj.y, 2)
        );
        const maxDistance = 200;
        const distortion = Math.max(0, 1 - distance / maxDistance);
        
        // Apply floating animation
        obj.rotation += 0.5;
        obj.x += Math.sin(Date.now() * 0.001 + index) * 0.2;
        obj.y += Math.cos(Date.now() * 0.001 + index) * 0.2;
        
        // Keep objects within bounds
        if (obj.x < 0) obj.x = canvas.width;
        if (obj.x > canvas.width) obj.x = 0;
        if (obj.y < 0) obj.y = canvas.height;
        if (obj.y > canvas.height) obj.y = 0;
        
        const size = 20 * obj.scale * (1 + distortion * 0.5);
        drawCross(ctx, obj.x, obj.y, size, obj.rotation, distortion);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    resizeCanvas();
    initObjects();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-white dark:bg-black transition-colors duration-300"
      style={{ pointerEvents: 'none' }}
    />
  );
};
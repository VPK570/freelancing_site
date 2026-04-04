"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Blob Tracker
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!interactiveRef.current) return;
      const { clientX, clientY } = event;
      
      // Much slower, lazier interaction (8000ms duration)
      interactiveRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 8000, fill: "forwards", easing: "ease-out" }
      );
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, []);

  // Particle Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: {x: number, y: number, vx: number, vy: number, size: number, baseAlpha: number}[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 18000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.2 + 0.3,
          baseAlpha: Math.random() * 0.4 + 0.1
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Check theme dynamically via html data-theme
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      // Muted colors for particles (saffron hint or just grayscale)
      const colorRGB = isDark ? '255, 255, 255' : '19, 19, 21'; 

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Interactive mouse connection
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        let alpha = p.baseAlpha;
        if (dist < 200) {
          // Particles glow brighter near mouse
          alpha = Math.min(p.baseAlpha + (200 - dist) / 300, 0.8);
          
          // Extremely subtle repulsion so it feels physical
          p.x -= (dx / dist) * 0.2;
          p.y -= (dy / dist) * 0.2;
        }
        
        ctx.fillStyle = `rgba(${colorRGB}, ${alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background transition-colors duration-500">
      
      {/* Subtle structural grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-outline) 1px, transparent 1px), linear-gradient(to bottom, var(--color-outline) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Base ambient blobs */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[40vw] min-w-[300px] aspect-square 
                   bg-primary/10 blur-[120px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute -bottom-[10%] -right-[10%] w-[40vw] min-w-[300px] aspect-square
                   bg-primary/5 blur-[120px] animate-pulse"
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />
      
      {/* Interactive cursor tracking blob */}
      <div
        ref={interactiveRef}
        className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[100px]"
        style={{ left: '50%', top: '50%' }}
      />

      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

    </div>
  );
}

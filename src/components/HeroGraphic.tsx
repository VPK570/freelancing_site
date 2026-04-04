"use client";

import { useEffect, useRef } from "react";

export default function HeroGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // 3D Sphere of points
    const points: { x: number; y: number; z: number }[] = [];
    const numPoints = 120; // Number of nodes in the web net
    const radius = 220; // Size of the sphere

    // Generate uniformly distributed points on a sphere
    for (let i = 0; i < numPoints; i++) {
        const phi = Math.acos(-1 + (2 * i) / numPoints);
        const theta = Math.sqrt(numPoints * Math.PI) * phi;
        points.push({
            x: radius * Math.cos(theta) * Math.sin(phi),
            y: radius * Math.sin(theta) * Math.sin(phi),
            z: radius * Math.cos(phi)
        });
    }

    let rotationX = 0;
    let rotationY = 0;

    // Mouse interaction tracking
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        // Mouse coordinate relative to completely center of canvas
        const x = e.clientX - rect.left - width / 2;
        const y = e.clientY - rect.top - height / 2;
        
        // Target spins towards mouse offset
        targetRotationY = x * 0.0015;
        targetRotationX = y * 0.0015;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
        const parent = canvas.parentElement;
        if (parent) {
            width = parent.clientWidth;
            height = parent.clientHeight;
            canvas.width = width;
            canvas.height = height;
        }
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
        ctx.clearRect(0, 0, width, height);

        // Auto rotation + smoothing towards interactive mouse rotation
        rotationX += (targetRotationX - rotationX) * 0.05 + 0.001; // Constant slow spin added
        rotationY += (targetRotationY - rotationY) * 0.05 + 0.003;

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const strokeColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(19, 19, 21, 0.1)';
        const pointColor = isDark ? 'rgba(250, 250, 250, ' : 'rgba(19, 19, 21, '; 
        const primaryColor = 'rgba(255, 94, 0, '; // Saffron accent

        const projectedPoints = points.map((p, idx) => {
            // Rotate around X
            let y1 = p.y * Math.cos(rotationX) - p.z * Math.sin(rotationX);
            let z1 = p.y * Math.sin(rotationX) + p.z * Math.cos(rotationX);
            
            // Rotate around Y
            let x2 = p.x * Math.cos(rotationY) + z1 * Math.sin(rotationY);
            let z2 = -p.x * Math.sin(rotationY) + z1 * Math.cos(rotationY);

            // True 3D perspective projection
            const fov = 800; // Field of view
            const scale = fov / (fov + z2);

            return {
                x: width / 2 + x2 * scale,
                y: height / 2 + y1 * scale,
                z: z2,
                scale,
                isPrimary: idx % 15 === 0 // Make 1 in 15 nodes primary colored
            };
        });

        // Draw structural connecting web net
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = strokeColor;
        for (let i = 0; i < projectedPoints.length; i++) {
            for (let j = i + 1; j < projectedPoints.length; j++) {
                const dx = projectedPoints[i].x - projectedPoints[j].x;
                const dy = projectedPoints[i].y - projectedPoints[j].y;
                const distLine = dx * dx + dy * dy;
                
                // Only connect nodes close to each other (forms the lattice)
                if (distLine < 6500) {
                    ctx.beginPath();
                    ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
                    ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw intersection nodes
        projectedPoints.forEach(p => {
            ctx.beginPath();
            const size = Math.max(0.5, p.scale * 2.5);
            ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            
            // Dynamic alpha dropping off in the distance depth
            const alpha = Math.max(0.05, (1 + p.z / radius) / 2);
            ctx.fillStyle = p.isPrimary ? `${primaryColor}${alpha})` : `${pointColor}${alpha})`;
            ctx.fill();
        });

        animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
        window.removeEventListener('resize', resize);
        canvas.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full relative cursor-crosshair overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}

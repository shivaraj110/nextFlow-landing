import { cn } from "../../../utils/cn";
import { useEffect, useRef, useState } from "react";

export const SparklesCore = ({
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Array<Particle>>([]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleCount = particleDensity || 50;
    const minParticleSize = minSize || 1;
    const maxParticleSize = maxSize || 3;
    const particleColorValue = particleColor || "#FFF";

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxParticleSize - minParticleSize) + minParticleSize,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
      return particles;
    };

    setParticles(createParticles());

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.fillStyle = particleColorValue;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [minSize, maxSize, particleDensity, particleColor]);

  return (
    <div className={cn("fixed inset-0 z-0", className)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          background: background || "transparent",
        }}
      />
    </div>
  );
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}
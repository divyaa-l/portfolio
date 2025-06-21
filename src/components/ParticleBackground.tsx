
import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  darkMode: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 150;
    const floatingShapes: FloatingShape[] = [];
    const shapeCount = 12;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulseSpeed: number;
      pulseOffset: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 4 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
        
        // Purple/Pink/White color palette
        const colors = ['#8B5CF6', '#EC4899', '#F472B6', '#A855F7', '#FFFFFF'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Enhanced pulsing effect
        this.opacity = (Math.sin(time * this.pulseSpeed + this.pulseOffset) + 1) * 0.4 + 0.2;
      }

      draw(time: number) {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 4
        );
        
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Enhanced glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        
        ctx.restore();
      }
    }

    class FloatingShape {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      shape: 'circle' | 'triangle' | 'square' | 'diamond';
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 60 + 30;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.shape = ['circle', 'triangle', 'square', 'diamond'][Math.floor(Math.random() * 4)] as 'circle' | 'triangle' | 'square' | 'diamond';
        
        const colors = ['#8B5CF6', '#EC4899', '#F472B6', '#A855F7'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < -this.size || this.x > canvas.width + this.size) this.vx *= -1;
        if (this.y < -this.size || this.y > canvas.height + this.size) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        switch (this.shape) {
          case 'circle':
            ctx.arc(0, 0, this.size/2, 0, Math.PI * 2);
            break;
          case 'triangle':
            ctx.moveTo(0, -this.size/2);
            ctx.lineTo(-this.size/2, this.size/2);
            ctx.lineTo(this.size/2, this.size/2);
            ctx.closePath();
            break;
          case 'square':
            ctx.rect(-this.size/2, -this.size/2, this.size, this.size);
            break;
          case 'diamond':
            ctx.moveTo(0, -this.size/2);
            ctx.lineTo(this.size/2, 0);
            ctx.lineTo(0, this.size/2);
            ctx.lineTo(-this.size/2, 0);
            ctx.closePath();
            break;
        }
        
        ctx.stroke();
        ctx.restore();
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles.length = 0;
      floatingShapes.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      for (let i = 0; i < shapeCount; i++) {
        floatingShapes.push(new FloatingShape());
      }
    };

    let animationId: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw floating shapes first (background layer)
      floatingShapes.forEach(shape => {
        shape.update();
        shape.draw();
      });
      
      // Draw particles
      particles.forEach(particle => {
        particle.update(time * 0.001);
        particle.draw(time * 0.001);
      });

      // Draw enhanced connections with purple/pink theme
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            
            gradient.addColorStop(0, '#8B5CF6');
            gradient.addColorStop(0.5, '#EC4899');
            gradient.addColorStop(1, '#F472B6');
            
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = (100 - distance) / 100 * 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate(0);

    const handleResize = () => {
      resizeCanvas();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticleBackground;

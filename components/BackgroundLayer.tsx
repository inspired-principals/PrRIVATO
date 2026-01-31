import React, { useEffect, useRef } from 'react';

const BackgroundLayer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // CONFIGURATION
    const isMobile = () => window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile() ? 50 : 120;
    const CONNECT_DISTANCE = 220;
    const MOUSE_DISTANCE = 300;
    const PARTICLE_SPEED = 0.2;

    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      pulse: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * PARTICLE_SPEED;
        this.vy = (Math.random() - 0.5) * PARTICLE_SPEED;
        this.size = Math.random() * 2 + 0.5;
        this.baseAlpha = Math.random() * 0.4 + 0.1;
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse attraction/repel
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_DISTANCE) {
            const force = (MOUSE_DISTANCE - distance) / MOUSE_DISTANCE;
            this.x -= (dx / distance) * force * 0.8;
            this.y -= (dy / distance) * force * 0.8;
        }
      }

      draw() {
        if(!ctx) return;
        const currentAlpha = this.baseAlpha + Math.sin(this.pulse) * 0.1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 127, 50, ${currentAlpha})`;
        ctx.fill();
        
        // Specular glow
        if (currentAlpha > 0.3) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(255, 127, 50, 0.5)';
        } else {
            ctx.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, index) => {
        p.update();
        p.draw();
        
        // Neural Connections
        for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < CONNECT_DISTANCE) {
                ctx.beginPath();
                const opacity = (1 - distance / CONNECT_DISTANCE) * 0.15;
                ctx.strokeStyle = `rgba(255, 127, 50, ${opacity})`;
                ctx.lineWidth = 0.8;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();

                // Occasional "Data Packet" fire
                if (Math.random() < 0.0001) {
                    // This could trigger a visual packet but keeping it light for perf
                }
            }
        }
      });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.08] mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
    </div>
  );
};

export default BackgroundLayer;
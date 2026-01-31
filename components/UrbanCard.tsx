import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import {
    AlchemySulfur,
    HermeticSeal,
    SacredTriangle,
    MetatronGrid,
    FluxGate,
    AllSeeingEye,
    Merkaba,
    ChaosStar
} from './EsotericIcons';

interface UrbanCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  backContent?: React.ReactNode;
  disableFlip?: boolean;
  noPadding?: boolean;
}

const UrbanCard: React.FC<UrbanCardProps> = ({ children, className = "", id, style, backContent, disableFlip = false, noPadding = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [coord, setCoord] = useState('0x00.00');

  // Select icons for depth layering with a deterministic fallback based on ID
  const { PrimaryIcon, SecondaryIcon, TertiaryIcon } = useMemo(() => {
    const icons = [AlchemySulfur, HermeticSeal, SacredTriangle, MetatronGrid, FluxGate, AllSeeingEye, Merkaba, ChaosStar];
    let p = 0, s = 1, t = 2;

    if (id) {
        const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        p = hash % icons.length;
        s = (hash + 3) % icons.length;
        t = (hash + 5) % icons.length;
    } else {
        const r = Math.floor(Math.random() * icons.length);
        p = r;
        s = (r + 1) % icons.length;
        t = (r + 2) % icons.length;
    }
    
    return {
        PrimaryIcon: icons[p],
        SecondaryIcon: icons[s],
        TertiaryIcon: icons[t]
    };
  }, [id]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isMobile) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    // Tactical coordinates update
    const hexX = Math.abs(Math.floor(normX * 255)).toString(16).padStart(2, '0').toUpperCase();
    const hexY = Math.abs(Math.floor(normY * 255)).toString(16).padStart(2, '0').toUpperCase();
    setCoord(`0x${hexX}.${hexY}`);

    // Dynamic rotation with heavier tilt feel
    const rotateX = normY * -6.5; 
    const rotateY = normX * 6.5;

    const root = containerRef.current;
    root.style.setProperty('--rx', `${rotateX}deg`);
    root.style.setProperty('--ry', `${rotateY}deg`);
    root.style.setProperty('--mx', `${normX}`);
    root.style.setProperty('--my', `${normY}`);
    root.style.setProperty('--sheen-x', `${x}px`);
    root.style.setProperty('--sheen-y', `${y}px`);
  }, [isMobile]);

  const toggleFlip = (e: React.MouseEvent) => {
      if (disableFlip) return;
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, label, [data-gnosis], [role="button"], iframe')) return;
      setIsFlipped(!isFlipped);
  };

  return (
    <div 
      ref={containerRef}
      id={id}
      className={`urban-card group relative transition-all duration-700 ease-[var(--ease-lux)] z-20 opacity-0 animate-fade-in-up ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
          setIsHovered(false);
          if (containerRef.current) {
              containerRef.current.style.setProperty('--rx', '0deg');
              containerRef.current.style.setProperty('--ry', '0deg');
              containerRef.current.style.setProperty('--mx', '0');
              containerRef.current.style.setProperty('--my', '0');
          }
      }}
      onClick={toggleFlip}
      style={{
        perspective: '3000px',
        cursor: disableFlip ? 'default' : 'pointer',
        willChange: 'transform'
      } as React.CSSProperties}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-1000 ease-[var(--ease-lux)] preserve-3d rounded-[var(--card-radius)]`}
        style={{ 
            transform: !isMobile ? `rotateX(var(--rx, 0deg)) rotateY(calc(var(--ry, 0deg) + ${isFlipped ? '180deg' : '0deg'}))` : isFlipped ? 'rotateY(180deg)' : 'none',
            scale: isHovered && !isFlipped ? '1.04' : '1'
        }}
      >
        {/* FRONT FACE */}
        <div className={`relative w-full h-full backface-hidden obsidian-slab flex flex-col rounded-[var(--card-radius)] preserve-3d overflow-hidden`}>
            
            {/* 1. FLOATING GLASS LENS (Overlay) */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 border border-white/10" style={{ transform: 'translateZ(10px)' }}>
                {/* Tactical Glint Sweep */}
                <div 
                    className="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out"
                    style={{ transform: 'rotate(25deg)' }}
                />
                
                {/* Dynamic Surface Sheen */}
                <div 
                    className="absolute inset-0 mix-blend-screen"
                    style={{
                        background: `radial-gradient(
                            circle at var(--sheen-x, 50%) var(--sheen-y, 50%), 
                            rgba(255, 255, 255, 0.22) 0%, 
                            transparent 55%
                        )`
                    }}
                />
            </div>

            {/* 2. TACTICAL SCANNER LAYER */}
            <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div 
                    className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-[var(--color-lux-gold)]/10 to-transparent" 
                    style={{ animation: isHovered ? 'holoScan 3.5s linear infinite' : 'none', willChange: 'transform' }}
                />
                <div 
                    className="absolute inset-0 border border-[var(--color-lux-gold)]/40"
                    style={{ animation: 'border-draw 5s linear infinite' }}
                />
            </div>

            {/* 3. DEEP PARALLAX BACKGROUND */}
            <div className="absolute inset-0 preserve-3d pointer-events-none z-0 overflow-hidden rounded-[var(--card-radius)]" aria-hidden="true">
                {/* Micro-texture Carbon Base */}
                <div 
                    className="absolute inset-[-80px] opacity-[0.12] transition-transform duration-150 ease-out" 
                    style={{ 
                        backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
                        transform: 'translateX(calc(var(--mx, 0) * -30px)) translateY(calc(var(--my, 0) * -30px))'
                    }}
                ></div>

                {/* Primary Deep Icon (-120px) */}
                <div 
                    className="absolute inset-0 flex items-center justify-center opacity-[0.08] text-white transition-all duration-1000 group-hover:opacity-[0.2] transform-gpu"
                    style={{ transform: 'translateX(calc(var(--mx, 0) * 40px)) translateY(calc(var(--my, 0) * 40px)) translateZ(-120px)' }}
                >
                    <PrimaryIcon className="w-[85%] h-[85%] animate-[spin_300s_linear_infinite]" />
                </div>

                {/* Secondary Mid Icon (-60px) */}
                <div 
                    className="absolute -top-[10%] -right-[10%] opacity-[0.06] text-[var(--color-lux-gold)] transition-all duration-1000 group-hover:opacity-[0.18] transform-gpu w-[70%] h-[70%]"
                    style={{ transform: 'translateX(calc(var(--mx, 0) * 60px)) translateY(calc(var(--my, 0) * 60px)) translateZ(-60px)' }}
                >
                     <SecondaryIcon className="w-full h-full animate-[spin_400s_linear_infinite_reverse]" />
                </div>
            </div>

            {/* 4. CONTENT LAYER (Floating at +60px) */}
            <div 
              className={`relative z-30 h-full w-full preserve-3d flex flex-col card-content-layer text-zinc-100 ${noPadding ? 'p-0' : 'p-6 md:p-10'}`} 
              style={{ transform: 'translateZ(60px)' }}
            >
                {/* Header Readout */}
                <div className="flex justify-between items-center mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="font-mono text-[7px] tracking-[0.4em] text-[var(--color-lux-gold)] font-black uppercase">V_TRACE::{coord}</div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-gold-glow"></div>
                </div>

                {children}

                {/* Footer Readout */}
                <div className="mt-auto pt-6 flex justify-between items-center opacity-0 group-hover:opacity-40 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
                    <div className="font-mono text-[6px] text-zinc-400 tracking-[0.4em] uppercase font-black">OS_KERNEL_v4.5</div>
                    <div className="font-mono text-[6px] text-zinc-400 tracking-[0.4em] uppercase font-black">REF::{id?.slice(0,6).toUpperCase() || 'SYS_01'}</div>
                </div>
            </div>
            
            {/* 5. PHYSICAL CORNER BRACKETS */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white/40 z-40 transition-all duration-500 group-hover:border-[var(--color-lux-gold)] group-hover:w-10 group-hover:h-10 group-hover:scale-105 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-white/40 z-40 transition-all duration-500 group-hover:border-[var(--color-lux-gold)] group-hover:w-10 group-hover:h-10 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-white/40 z-40 transition-all duration-500 group-hover:border-[var(--color-lux-gold)] group-hover:w-10 group-hover:h-10 group-hover:scale-105 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white/40 z-40 transition-all duration-500 group-hover:border-[var(--color-lux-gold)] group-hover:w-10 group-hover:h-10 group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1"></div>
        </div>

        {/* BACK FACE */}
        {!disableFlip && (
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 obsidian-slab overflow-hidden rounded-[var(--card-radius)] preserve-3d shadow-3xl bg-[#0a0a0a]">
                <div className="h-full w-full p-12 flex flex-col justify-between relative z-10">
                    <div className="absolute inset-0 opacity-[0.12]" aria-hidden="true">
                         <MetatronGrid className="w-full h-full animate-spin-slow opacity-30" />
                    </div>
                    
                    <div className="relative z-20 h-full flex flex-col justify-center items-center text-center">
                         {backContent || (
                             <div className="animate-fade-in">
                                <div className="mb-10 w-28 h-28 border-2 border-white/10 flex items-center justify-center rounded-full animate-pulse shadow-inner bg-black/60">
                                    <FluxGate className="w-14 h-14 text-[var(--color-lux-gold)]" />
                                </div>
                                <h3 className="font-heading text-6xl text-white uppercase tracking-tighter mb-4 shimmer-gold">RESTRICTED</h3>
                                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.4em] font-black max-w-xs leading-relaxed border-t border-white/10 pt-8 mx-auto">
                                    UPLINK_REQUIRED_LVL_9<br/>
                                    Unauthorized access will trigger node wipe.
                                </p>
                             </div>
                         )}
                    </div>
                    
                    <div className="text-center pt-8">
                         <div className="inline-block px-10 py-2 bg-black/80 border border-white/10 text-[8px] font-mono uppercase tracking-[0.5em] text-zinc-600 font-black rounded-full shadow-2xl active:scale-95 transition-transform">
                            RE-ENCRYPT_0x8C
                         </div>
                    </div>
                </div>
            </div>
        )}
      </div>

      <style>{`
          .preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
          .animate-fade-in-up { animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
          @keyframes fadeInUp { 
            from { opacity: 0; transform: translateY(60px) scale(0.95); } 
            to { opacity: 1; transform: translateY(0) scale(1); } 
          }
      `}</style>
    </div>
  );
};

export default UrbanCard;
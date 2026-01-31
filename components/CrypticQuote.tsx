
import React, { useState, useEffect, useRef } from 'react';

interface CrypticQuoteProps {
  text: string;
  author: string;
  className?: string;
  revealSpeed?: number;
}

const CrypticQuote: React.FC<CrypticQuoteProps> = ({ text, author, className = "", revealSpeed = 30 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*";

  useEffect(() => {
    // Initial state: Obfuscated or empty based on preference. 
    // Let's make it fully obfuscated initially for maximum "VIP" feel.
    setDisplayText(text.split('').map(char => char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join(''));
  }, [text]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isRevealed) return;

    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRevealed(true);
      }

      iteration += 1 / 2; // Slower reveal for dramatic effect
    }, revealSpeed);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Optional: Re-obfuscate on leave? No, keeping it revealed feels like "unlocking" knowledge.
  };

  return (
    <div 
        className={`relative cursor-crosshair group ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        {/* VIP Marker */}
        <div className={`absolute -left-6 top-1 text-[var(--color-lux-gold)] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            ▶
        </div>

        <p className="font-heading text-xl md:text-2xl leading-relaxed text-[var(--color-lux-platinum)] mb-2 min-h-[3rem]">
            "{displayText}"
        </p>
        
        <div className={`flex items-center gap-2 mt-4 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="h-[1px] w-8 bg-[var(--color-lux-gold)]"></div>
            <span className="font-mono text-[9px] text-[var(--color-lux-gold)] tracking-[0.2em] uppercase">
                {author} // VERIFIED
            </span>
        </div>
    </div>
  );
};

export default CrypticQuote;

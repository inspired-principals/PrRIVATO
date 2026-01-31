import React from 'react';

export const SacredTriangle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
    <path d="M50 15 L85 80 H15 Z" vectorEffect="non-scaling-stroke" />
    <circle cx="50" cy="55" r="15" vectorEffect="non-scaling-stroke" className="opacity-40" />
    <path d="M50 15 L50 35 M15 80 L30 58 M85 80 L70 58" className="opacity-20" />
  </svg>
);

export const MetatronGrid: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.4">
    <circle cx="100" cy="100" r="95" className="opacity-10" />
    <circle cx="100" cy="100" r="65" className="opacity-20" />
    <path d="M100 10 L178 55 V145 L100 190 L22 145 V55 Z" className="opacity-30" />
    <path d="M100 40 L152 70 V130 L100 160 L48 130 V70 Z" className="opacity-50" />
    <line x1="100" y1="10" x2="100" y2="190" className="opacity-10" />
    <line x1="22" y1="55" x2="178" y2="145" className="opacity-10" />
    <line x1="178" y1="55" x2="22" y2="145" className="opacity-10" />
  </svg>
);

export const AlchemySulfur: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M50 20 L72 52 H28 Z" />
    <path d="M50 52 V82" />
    <path d="M38 82 H62" />
  </svg>
);

export const HermeticSeal: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
    <circle cx="100" cy="100" r="98" strokeDasharray="3 3" className="opacity-40" />
    <circle cx="100" cy="100" r="88" className="opacity-20" />
    <rect x="68" y="68" width="64" height="64" transform="rotate(45 100 100)" className="opacity-40" />
    <rect x="68" y="68" width="64" height="64" className="opacity-40" />
    <circle cx="100" cy="100" r="4" fill="currentColor" />
    <circle cx="100" cy="100" r="22" strokeDasharray="1 4" className="opacity-60" />
    <path d="M100 2 V15 M100 185 V198 M2 100 H15 M185 100 H198" strokeWidth="1.5" className="opacity-80" />
  </svg>
);

export const FluxGate: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
        <defs>
            <radialGradient id="gateGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor:'currentColor', stopOpacity:0}} />
                <stop offset="100%" style={{stopColor:'currentColor', stopOpacity:0.05}} />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="49" fill="url(#gateGrad)" stroke="none" />
        <path d="M50 4 A46 46 0 0 1 96 50" strokeDasharray="8 4" className="animate-[spin_12s_linear_infinite] origin-center" />
        <path d="M50 96 A46 46 0 0 1 4 50" strokeDasharray="8 4" className="animate-[spin_12s_linear_infinite] origin-center" />
        <path d="M25 50 L75 50 M50 25 L50 75" className="opacity-20" />
        <rect x="38" y="38" width="24" height="24" transform="rotate(45 50 50)" className="opacity-30" />
    </svg>
);

export const AllSeeingEye: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M50 18 L88 82 H12 Z" className="opacity-80" />
        <path d="M32 62 Q50 45 68 62 Q50 79 32 62 Z" />
        <circle cx="50" cy="62" r="4" fill="currentColor" className="opacity-80" />
        <line x1="50" y1="12" x2="50" y2="4" className="opacity-40" />
        <line x1="84" y1="80" x2="92" y2="88" className="opacity-40" />
        <line x1="16" y1="80" x2="8" y2="88" className="opacity-40" />
    </svg>
);

export const Merkaba: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M50 12 L82 68 H18 Z" className="opacity-60" />
        <path d="M50 88 L82 32 H18 Z" className="opacity-60" />
        <circle cx="50" cy="50" r="8" className="opacity-20" />
        <circle cx="50" cy="50" r="35" className="opacity-10" strokeDasharray="2 3" />
    </svg>
);

export const ChaosStar: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
        <g className="origin-center">
             <path d="M50 8 V92 M8 50 H92 M21 21 L79 79 M21 79 L79 21" />
             <path d="M50 18 L53 32 L50 46 L47 32 Z" fill="currentColor" className="opacity-40" />
             <path d="M50 82 L53 68 L50 54 L47 68 Z" fill="currentColor" className="opacity-40" />
             <path d="M82 50 L68 53 L54 50 L68 47 Z" fill="currentColor" className="opacity-40" />
             <path d="M18 50 L32 53 L46 50 L32 47 Z" fill="currentColor" className="opacity-40" />
        </g>
    </svg>
);
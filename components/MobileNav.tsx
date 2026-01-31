import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../constants';
import { HermeticSeal } from './EsotericIcons';

const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Intel', path: '/intel' },
    { name: 'Value', path: '/pricing' },
    { name: 'Mission', path: '/about' },
    { name: 'Gnosis', path: '/knowledge' },
    { name: 'Initiate', path: '/intake' },
];

const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/95 backdrop-blur-xl relative z-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="logo">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="text-[var(--color-lux-gold)]">
                            <HermeticSeal className="w-8 h-8 animate-[spin_20s_linear_infinite]" />
                        </div>
                        <span className="font-heading text-xl text-white tracking-tight">PRIVATO</span>
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/intel" className="w-6 h-6 text-zinc-500 hover:text-[var(--color-lux-gold)] transition-colors">
                       <SearchIcon/>
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none w-8 h-6 relative group" aria-label="Toggle Menu">
                        <span className={`block w-full h-[1.5px] bg-[var(--color-lux-gold)] absolute transition-all duration-300 ${isOpen ? 'rotate-45 top-1/2 translate-y-[-0.75px]' : 'top-0'}`}></span>
                        <span className={`block w-full h-[1.5px] bg-[var(--color-lux-gold)] absolute top-1/2 translate-y-[-0.75px] transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
                        <span className={`block w-full h-[1.5px] bg-[var(--color-lux-gold)] absolute transition-all duration-300 ${isOpen ? '-rotate-45 top-1/2 translate-y-[-0.75px]' : 'bottom-0'}`}></span>
                    </button>
                </div>
            </div>

            <div className={`fixed inset-0 top-[73px] bg-black/98 z-40 transition-all duration-700 overflow-hidden ${isOpen ? 'opacity-100 backdrop-blur-3xl' : 'opacity-0 pointer-events-none'}`}>
                {/* Background Grid for Menu Depth */}
                <div className="absolute inset-0 gnostic-grid-layer opacity-[0.03] pointer-events-none"></div>
                
                <div className="p-10 flex flex-col h-full pb-32 overflow-y-auto relative z-10">
                    <ul className="space-y-8 mt-10">
                        {navItems.map((item, index) => (
                            <li 
                                key={`${item.name}-${isOpen}`} // Force re-render on toggle to trigger animation
                                className={`border-b border-white/5 pb-6 opacity-0 ${isOpen ? 'animate-fade-in-slide-up' : ''}`} 
                                style={{ 
                                    animationDelay: `${index * 80 + 200}ms`, 
                                    animationFillMode: 'forwards',
                                    animationDuration: '800ms',
                                    animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
                                }}
                            >
                                <Link 
                                    to={item.path} 
                                    className="text-5xl font-heading text-zinc-500 hover:text-white hover:pl-6 transition-all duration-500 block uppercase tracking-tight flex items-baseline gap-4" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-[10px] text-[var(--color-lux-gold)] font-mono opacity-40">0{index + 1}</span>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto pt-10 border-t border-white/10 flex flex-col items-center gap-4">
                        <HermeticSeal className="w-12 h-12 text-white/5 animate-spin-slow" />
                        <p className="text-zinc-700 text-[9px] font-mono uppercase tracking-[0.5em]">System // Sovereign // Locked</p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in-slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px) translateX(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) translateX(0);
                    }
                }
                .animate-fade-in-slide-up {
                    animation-name: fade-in-slide-up;
                }
            `}</style>
        </div>
    );
};

export default MobileNav;
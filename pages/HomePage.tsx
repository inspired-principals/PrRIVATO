import React from 'react';
import UrbanCard from '../components/UrbanCard';
import Marquee from '../components/Marquee';
import CrypticQuote from '../components/CrypticQuote';
import { Link } from 'react-router-dom';
import { MetatronGrid, HermeticSeal, SacredTriangle, FluxGate } from '../components/EsotericIcons';

const HomePage: React.FC = () => {
    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section className="relative min-h-[95vh] flex flex-col justify-center px-10 md:px-24 overflow-hidden bg-black pt-40 pb-20">
                <div className="absolute inset-0 z-0 opacity-[0.05]" 
                     style={{ 
                         backgroundImage: `linear-gradient(rgba(255, 127, 50, 0.08) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255, 127, 50, 0.08) 1.5px, transparent 1.5px)`, 
                         backgroundSize: '100px 100px' 
                     }}>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] lg:w-[50vw] lg:h-[50vw] opacity-[0.04] pointer-events-none animate-[spin_400s_linear_infinite]">
                    <MetatronGrid className="w-full h-full text-[var(--color-lux-gold)]" />
                </div>
                
                <div className="relative z-20 max-w-6xl mx-auto w-full">
                    <div className="flex items-center gap-6 mb-12 animate-fade-in">
                        <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--color-lux-gold)] to-transparent"></div>
                        <span className="font-mono text-[10px] tracking-[1em] uppercase text-[var(--color-lux-gold)] font-black">Private Civilization Architects // v4.5</span>
                    </div>

                    <h1 className="text-[clamp(4rem,11vw,8.5rem)] leading-[0.8] font-heading text-white mix-blend-difference relative select-none uppercase tracking-tighter mb-16">
                        <span className="block translate-x-[-1.5vw] gnosis-glitch">URBAN</span>
                        <span className="block text-[var(--color-lux-gold)] translate-x-[1.5vw] drop-shadow-[0_0_30px_rgba(255,127,50,0.3)] gnosis-glitch">MINDS</span>
                    </h1>

                    <div className="max-w-2xl">
                        <div className="pl-10 border-l-[2px] border-[var(--color-lux-gold)]/60 bg-gradient-to-r from-white/[0.04] to-transparent py-6 backdrop-blur-md">
                            <CrypticQuote 
                                text="Constructing the invisible architecture of absolute freedom. Private associations, trusts, and clans. Immutable. Lawful." 
                                author="Architect Prime"
                                revealSpeed={20}
                                className="text-xl lg:text-2xl leading-relaxed text-white font-semibold tracking-tight"
                            />
                        </div>
                        
                        <div className="flex flex-wrap gap-12 mt-20 items-center">
                            <Link to="/services" className="group inline-flex items-center gap-8 text-white uppercase font-heading tracking-[0.6em] text-[10px] hover:text-[var(--color-lux-gold)] transition-all">
                                <div className="w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center group-hover:border-[var(--color-lux-gold)] group-hover:rotate-180 transition-all duration-1000 obsidian-slab shadow-[0_0_40px_rgba(0,0,0,1)]">
                                    <FluxGate className="w-10 h-10 text-[var(--color-lux-gold)]" />
                                </div>
                                <span className="font-black tracking-[0.7em] opacity-80 group-hover:opacity-100 transition-opacity">Initialize Protocol</span>
                            </Link>

                            <div className="hidden sm:flex items-center gap-6 font-mono text-[8px] text-zinc-200 tracking-[0.5em] font-black border-l border-white/40 pl-12 uppercase">
                                <div className="flex flex-col gap-2">
                                    <span>COORD: 0x8C_ALPHA</span>
                                    <span>LATENCY: 2.8ms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-12 left-0 w-full px-16 flex justify-between items-end z-10 font-mono text-[9px] text-white uppercase tracking-[1em] font-black opacity-80 pointer-events-none">
                     <div className="hidden lg:block space-y-2">
                        <p>COORD: 45.42N // 75.69W</p>
                        <p className="text-[var(--color-lux-gold)]">NETWORK: ENCRYPTED_STABLE</p>
                     </div>
                     <div className="text-right hidden lg:block space-y-2">
                        <p>STATUS: <span className="text-green-500 animate-pulse">VERIFIED</span></p>
                        <p>UPLINK: <span className="text-white">STREAM_ACTIVE</span></p>
                     </div>
                </div>
            </section>

            {/* MARQUEE */}
            <div className="py-14 lg:py-20 bg-[#010101] text-[var(--color-lux-gold)] -rotate-1 scale-[1.02] border-y-2 border-[var(--color-lux-gold)]/20 overflow-hidden relative z-30 shadow-[0_0_120px_rgba(0,0,0,1)]">
                <Marquee duration="50s">
                    <div className="flex gap-28 lg:gap-40 items-center">
                        {['SOVEREIGNTY', 'GOVERNANCE', 'AUTONOMY', 'LEGACY', 'TRUST', 'PRIVATE'].map((tag, i) => (
                            <span key={i} className="font-heading text-[6rem] lg:text-[8rem] tracking-tighter uppercase flex items-center gap-16 group">
                                <span className="group-hover:text-white transition-colors duration-700 select-none opacity-80 group-hover:opacity-100 drop-shadow-2xl">{tag}</span>
                                <HermeticSeal className="w-12 h-12 lg:w-20 lg:h-20 opacity-30 group-hover:opacity-60 transition-opacity animate-spin-slow text-white" />
                            </span>
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* MODULES GRID */}
            <section className="py-32 lg:py-56 px-10 md:px-24 max-w-[1500px] mx-auto bg-black relative">
                <div className="flex flex-col md:flex-row justify-between items-end mb-28 border-b-2 border-white/30 pb-12">
                    <div className="space-y-4">
                         <div className="text-[12px] font-mono text-[var(--color-lux-gold)] tracking-[1em] uppercase font-black">Classification // 0x8C_MANIFEST</div>
                         <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-heading leading-none text-white tracking-tighter uppercase">
                            SYSTEM <span className="shimmer-gold">ARCHITECTURE</span>
                         </h2>
                    </div>
                    <div className="text-right font-mono text-[10px] tracking-[1em] text-white uppercase mt-12 md:mt-0 bg-zinc-900/80 px-8 py-4 border border-white/20 rounded-full shadow-2xl">
                        <p className="text-[var(--color-lux-gold)] font-black">/ OPERATIONAL_BLUEPRINTS</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-stretch">
                    <Link to="/services" className="group flex flex-col h-full">
                        <UrbanCard id="mod-foundation" className="flex-grow border-t-4 border-[var(--color-lux-gold)] aspect-[4/5]" disableFlip>
                            <div className="absolute top-8 right-8 text-[var(--color-lux-gold)] font-mono text-[11px] border-2 border-[var(--color-lux-gold)]/60 px-5 py-2 rounded-full tracking-[0.6em] font-black bg-black/95 z-50 shadow-2xl">L_01</div>
                            <div className="flex flex-col h-full py-6">
                                <h3 data-gnosis className="text-4xl lg:text-5xl mb-8 group-hover:text-[var(--color-lux-gold)] transition-colors tracking-tighter text-white leading-[0.9] uppercase">Foundation Protocol</h3>
                                <p className="text-white text-lg leading-relaxed mb-12 font-medium italic opacity-100 line-clamp-4">Personal sovereignty via private trusts and gnostic wills. The primary firewall for your biological estate.</p>
                                <div className="mt-auto flex items-center gap-8 font-mono text-[12px] font-black tracking-[0.8em] uppercase text-zinc-100 group-hover:text-white transition-all">
                                    <span className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-[var(--color-lux-gold)] group-hover:text-black group-hover:border-[var(--color-lux-gold)] transition-all shadow-2xl scale-110">→</span>
                                    INITIALIZE
                                </div>
                            </div>
                        </UrbanCard>
                    </Link>

                    <Link to="/services" className="group flex flex-col h-full">
                        <UrbanCard id="mod-association" className="flex-grow border-t-4 border-white aspect-[4/5]" disableFlip>
                            <div className="absolute top-8 right-8 text-white font-mono text-[11px] border-2 border-white/60 px-5 py-2 rounded-full tracking-[0.6em] font-black bg-black/95 z-50 shadow-2xl">L_02</div>
                            <div className="flex flex-col h-full py-6">
                                <h3 data-gnosis className="text-4xl lg:text-5xl mb-8 group-hover:text-[var(--color-lux-gold)] transition-colors tracking-tighter text-white leading-[0.9] uppercase">Private Association</h3>
                                <p className="text-white text-lg leading-relaxed mb-12 font-medium italic opacity-100 line-clamp-4">UAs and PMAs. Designing a closed jurisdiction where your values dictate the internal law of the circle.</p>
                                <div className="mt-auto flex items-center gap-8 font-mono text-[12px] font-black tracking-[0.8em] uppercase text-zinc-100 group-hover:text-white transition-all">
                                    <span className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shadow-2xl scale-110">→</span>
                                    CONSTRUCT
                                </div>
                            </div>
                        </UrbanCard>
                    </Link>

                    <Link to="/services" className="group flex flex-col h-full">
                        <UrbanCard id="mod-anonymity" className="flex-grow border-t-4 border-zinc-700 aspect-[4/5]" disableFlip>
                            <div className="absolute top-8 right-8 text-zinc-100 font-mono text-[11px] border-2 border-zinc-500 px-5 py-2 rounded-full tracking-[0.6em] font-black bg-black/95 z-50 shadow-2xl">L_03</div>
                            <div className="flex flex-col h-full py-6">
                                <h3 data-gnosis className="text-4xl lg:text-5xl mb-8 group-hover:text-[var(--color-lux-gold)] transition-colors tracking-tighter text-white leading-[0.9] uppercase">Asset Anonymity</h3>
                                <p className="text-white text-lg leading-relaxed mb-12 font-medium italic opacity-100 line-clamp-4">Bare trusts and nominee protocols. Decoupling public title from private truth to protect intergenerational assets.</p>
                                <div className="mt-auto flex items-center gap-8 font-mono text-[12px] font-black tracking-[0.8em] uppercase text-zinc-100 group-hover:text-white transition-all">
                                    <span className="w-16 h-16 rounded-full border-2 border-zinc-600 flex items-center justify-center group-hover:bg-zinc-700 transition-all shadow-2xl scale-110">→</span>
                                    ANONYMIZE
                                </div>
                            </div>
                        </UrbanCard>
                    </Link>
                </div>
                
                <div className="mt-48 text-center opacity-60 font-mono text-[12px] tracking-[2em] uppercase select-none pointer-events-none text-white">
                    System // Integrity // Verified // 0x8C_SECURE_NODE
                </div>
            </section>
        </div>
    );
};

export default HomePage;
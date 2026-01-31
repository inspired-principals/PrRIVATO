import React from 'react';
import UrbanCard from '../components/UrbanCard';
import CrypticQuote from '../components/CrypticQuote';
import { AlchemySulfur, ChaosStar, HermeticSeal } from '../components/EsotericIcons';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-8 space-y-24 pt-20 pb-32">
      {/* SECTION 1: IDENTITY */}
      <section>
        <UrbanCard className="!bg-[#080808] border-white/10 w-full !py-20 relative overflow-hidden group shadow-2xl" disableFlip>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-lux-gold)] blur-[120px] opacity-[0.03] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="absolute top-8 left-8 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
                <AlchemySulfur className="w-24 h-24 text-[var(--color-lux-gold)]" />
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="text-[var(--color-lux-gold)] font-bold tracking-[0.6em] text-[8px] mb-10 opacity-60 uppercase flex items-center justify-center gap-3">
                    <HermeticSeal className="w-3.5 h-3.5" />
                    // SYSTEM_IDENTITY //
                    <HermeticSeal className="w-3.5 h-3.5" />
                </div>
                <h1 className="text-[clamp(3rem,8vw,6rem)] mb-10 leading-[0.85] tracking-tighter text-white uppercase drop-shadow-2xl">URBAN <span className="text-zinc-700">MINDS</span></h1>
                
                <div className="max-w-xl mx-auto mb-10 px-4">
                    <CrypticQuote 
                        text="We design the invisible architecture of freedom. Lawful, private, and permanent."
                        author="The Lead Architect"
                        revealSpeed={20}
                        className="text-zinc-300 !text-xl"
                    />
                </div>
                
                <div className="h-20 w-[1px] bg-gradient-to-b from-[var(--color-lux-gold)]/60 to-transparent mx-auto"></div>
            </div>
        </UrbanCard>
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4">
        <div className="relative">
             <div className="absolute -left-12 top-0 w-48 h-48 opacity-[0.03] pointer-events-none rotate-12">
                <ChaosStar className="w-full h-full text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl tracking-tighter text-white leading-none mb-8 relative z-10 uppercase">
                LAWFUL<br/><span className="text-[var(--color-lux-gold)]">PRIVATE</span><br/>ORDER.
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] tracking-[0.4em] uppercase font-black opacity-60">Classification: Sovereign // 0x8C</p>
        </div>
        <div>
            <div className="space-y-6">
                <div className="border-l-2 border-red-900/40 pl-6 py-2 relative overflow-hidden group bg-red-950/10 rounded-r-xl">
                    <h3 className="text-xs text-red-700 font-black uppercase tracking-[0.3em] mb-2">The Public Venue</h3>
                    <ul className="text-zinc-400 text-sm space-y-1 font-medium">
                        <li>— Statutory Subject Status</li>
                        <li>— Public Venue Jurisdiction</li>
                        <li>— Perpetual Disclosure</li>
                    </ul>
                </div>
                <div className="border-l-2 border-[var(--color-lux-gold)]/60 pl-6 py-6 relative overflow-hidden group bg-[var(--color-lux-gold)]/10 rounded-r-xl">
                    <h3 className="text-xs text-[var(--color-lux-gold)] font-black uppercase tracking-[0.3em] mb-2">The Private Domain</h3>
                    <p className="text-zinc-200 text-base leading-relaxed font-medium">
                        We utilize the inherent right of private contract to create autonomous jurisdictions. Protected by the Charter and common law, we design structures that function outside the public glare.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: CORE PRINCIPLES */}
      <section className="pt-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <UrbanCard className="!bg-[#080808] border border-white/10 !p-10" id="principle-1">
                 <div className="text-[var(--color-lux-gold)] font-mono text-[7px] mb-4 tracking-[0.5em] font-black uppercase">// GOVERNANCE</div>
                 <h3 className="text-2xl font-heading text-white mb-4 uppercase tracking-tight">Contractual Integrity</h3>
                 <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                     Without structure, intention is lost. We anchor your vision in rigorous private bylaws and trust deeds that survive generations.
                 </p>
             </UrbanCard>
             <UrbanCard className="!bg-[#080808] border border-white/10 !p-10" id="principle-2">
                 <div className="text-zinc-600 font-mono text-[7px] mb-4 tracking-[0.5em] font-black uppercase">// SOVEREIGNTY</div>
                 <h3 className="text-2xl font-heading text-white mb-4 uppercase tracking-tight">Values-Based Law</h3>
                 <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                     Public law is generic. Private law is specific to your values. We design the legal mirror of your family or group identity.
                 </p>
             </UrbanCard>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
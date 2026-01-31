import React from 'react';
import UrbanCard from '../components/UrbanCard';
import { AlchemySulfur, SacredTriangle, HermeticSeal, AllSeeingEye, MetatronGrid } from '../components/EsotericIcons';

const KnowledgePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      
      {/* HEADER */}
      <div className="text-center py-24 px-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[40%] bg-[var(--color-lux-gold)] opacity-[0.03] blur-[80px] pointer-events-none"></div>
          <h1 className="font-heading tracking-tighter leading-none text-[clamp(3.5rem,8vw,6rem)] text-white relative z-10">
            GNOSIS // INTEL
          </h1>
          <p className="text-zinc-500 mt-6 max-w-3xl mx-auto font-body font-bold uppercase tracking-[0.3em] text-[10px] relative z-10">
            // The hidden architecture of freedom.
          </p>
      </div>

      {/* SECTION 1: PHILOSOPHY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        <UrbanCard className="!bg-zinc-950 border-t-2 border-[var(--color-lux-gold)] relative overflow-hidden group">
            <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-15 transition-opacity">
                <AlchemySulfur className="w-20 h-20 text-[var(--color-lux-gold)]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading mb-8 text-[var(--color-lux-gold)] tracking-tighter uppercase">
                THE ALCHEMY OF LAW
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-medium">
                Law is not merely a set of rules; it is a language that casts a spell on reality. Public law is the language of control. Private law is the language of sovereignty.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                By shifting your status from a "Subject" of public statute to a "Creator" of private contract, you perform modern alchemy.
            </p>
            <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-zinc-600">PRINCIPLE II</span>
                <span className="text-xl font-heading opacity-20 flex items-center gap-3">
                    AS ABOVE, SO BELOW
                    <HermeticSeal className="w-6 h-6 animate-spin-slow" />
                </span>
            </div>
        </UrbanCard>

        <UrbanCard className="!bg-zinc-950 border-t-2 border-white relative overflow-hidden group">
             <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <MetatronGrid className="w-48 h-48 text-white" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-heading mb-8 text-white tracking-tighter uppercase">
                SYMBOLISM
            </h2>
            <div className="space-y-6 relative z-10">
                <div className="flex gap-4 items-start group/item hover:translate-x-1 transition-transform">
                    <SacredTriangle className="w-8 h-8 text-[var(--color-lux-gold)] mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1 font-heading">THE TRIANGLE // TRUST</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">Three points of power: The Grantor, The Trustee, and The Beneficiary.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start group/item hover:translate-x-1 transition-transform">
                    <div className="w-8 h-8 rounded-full border border-[var(--color-lux-gold)] flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-[var(--color-lux-gold)] rounded-full"></div>
                    </div>
                    <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1 font-heading">THE CIRCLE // ASSOCIATION</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">A closed loop of private membership. Those inside are protected by contract.</p>
                    </div>
                </div>
            </div>
        </UrbanCard>
      </section>
    </div>
  );
};

export default KnowledgePage;
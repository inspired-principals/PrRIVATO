import React from 'react';
import PageHeader from '../components/PageHeader';
import UrbanCard from '../components/UrbanCard';
import { Link } from 'react-router-dom';

const MembershipPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
         <PageHeader title="ASCEND // NOW" subtitle="Unlock the hidden frequencies of the digital core." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start pt-10 pb-20">
          {/* Plan: GHOST */}
          <div className="md:mt-12">
            <UrbanCard className="!bg-[#0E0E0E] border-white/20 !p-8 md:!p-10 hover:border-[var(--color-lux-gold)]/40 transition-colors" noPadding>
                <div className="p-8 md:p-10">
                    <h3 className="text-3xl md:text-4xl mb-4 tracking-tighter text-white">GHOST</h3>
                    <div className="font-heading text-5xl md:text-6xl text-[var(--color-lux-platinum)] mb-8">$0<span className="text-xl text-zinc-500 font-body font-black">/MO</span></div>
                    <div className="h-px w-full bg-white/10 mb-8"></div>
                    <ul className="font-body font-bold text-[10px] md:text-xs uppercase space-y-5 mb-12 text-zinc-300 tracking-[0.2em]">
                    <li className="flex gap-3 text-white"><span>//</span> PUBLIC ACCESS</li>
                    <li className="flex gap-3"><span>//</span> WEEKLY UPDATES</li>
                    <li className="text-zinc-700 flex gap-3 line-through decoration-zinc-700"><span>XX</span> AD-FREE FEED</li>
                    <li className="text-zinc-700 flex gap-3 line-through decoration-zinc-700"><span>XX</span> ARCHIVE ACCESS</li>
                    </ul>
                    <Link to="/intake?tier=Ghost" className="block w-full text-center border border-zinc-700 text-zinc-300 p-4 font-heading text-lg hover:bg-white hover:text-black transition-all rounded-xl uppercase tracking-wider">Stay // Ghost</Link>
                </div>
            </UrbanCard>
          </div>

          {/* Plan: ELITE - Featured */}
          <div className="z-10 relative">
            <UrbanCard className="!bg-[var(--color-lux-gold)] border-none !p-10 md:!p-14 shadow-[0_40px_100px_rgba(212,175,55,0.15)]" noPadding>
                <div className="p-10 md:p-14">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-[var(--color-lux-gold)] font-black px-6 py-2 border border-[var(--color-lux-gold)] rounded-full text-[10px] tracking-widest uppercase whitespace-nowrap z-20">Most Popular</div>
                    <h3 className="text-4xl md:text-6xl text-black mb-2 tracking-tighter">ELITE</h3>
                    <p className="text-black/70 font-black text-[10px] tracking-widest uppercase mb-6">The Standard Protocol</p>
                    <div className="font-heading text-7xl md:text-8xl text-black mb-8">$12<span className="text-2xl font-body font-black opacity-50">/MO</span></div>
                    <div className="h-px w-full bg-black/10 mb-8"></div>
                    <ul className="font-body font-black text-[10px] md:text-xs uppercase space-y-5 mb-12 text-black/90 tracking-[0.2em]">
                    <li className="flex gap-3"><span className="text-black font-black opacity-100">//</span> FULL ARCHIVE</li>
                    <li className="flex gap-3"><span className="text-black font-black opacity-100">//</span> EXCLUSIVE INTEL</li>
                    <li className="flex gap-3"><span className="text-black font-black opacity-100">//</span> AD-FREE CORE</li>
                    <li className="flex gap-3"><span className="text-black font-black opacity-100">//</span> PRIVATE DISCORD</li>
                    </ul>
                    <Link to="/intake?tier=Elite" className="block w-full text-center bg-black text-[var(--color-lux-gold)] p-5 font-heading text-3xl hover:bg-white hover:text-black transition-all rounded-2xl shadow-2xl uppercase">Ascend</Link>
                </div>
            </UrbanCard>
          </div>

          {/* Plan: GOD */}
          <div className="md:mt-12">
            <UrbanCard className="!bg-[#0E0E0E] border-white/20 !p-8 md:!p-10 hover:border-[var(--color-lux-platinum)]/40 transition-colors" noPadding>
                <div className="p-8 md:p-10">
                    <h3 className="text-3xl md:text-4xl mb-4 tracking-tighter text-white">GOD</h3>
                    <div className="font-heading text-5xl md:text-6xl text-white mb-8">$120<span className="text-xl text-zinc-500 font-body font-black">/YR</span></div>
                    <div className="h-px w-full bg-white/10 mb-8"></div>
                    <ul className="font-body font-bold text-[10px] md:text-xs uppercase space-y-5 mb-12 text-zinc-300 tracking-[0.2em]">
                    <li className="flex gap-3 text-white"><span>//</span> ALL ELITE FEATURES</li>
                    <li className="flex gap-3 text-white"><span>//</span> PHYSICAL MAGS</li>
                    <li className="flex gap-3 text-[var(--color-lux-gold)]"><span>//</span> VIP EVENTS</li>
                    <li className="flex gap-3 text-[var(--color-lux-gold)]"><span>//</span> FOUNDER STATUS</li>
                    </ul>
                    <Link to="/intake?tier=Founder" className="block w-full text-center border border-white/30 text-white p-4 font-heading text-lg hover:bg-white hover:text-black transition-all rounded-xl uppercase tracking-wider">Founder</Link>
                </div>
            </UrbanCard>
          </div>
      </div>
    </div>
  );
};

export default MembershipPage;
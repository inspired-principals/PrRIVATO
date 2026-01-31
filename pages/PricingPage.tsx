import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import UrbanCard from '../components/UrbanCard';
import { Merkaba, SacredTriangle, FluxGate, AlchemySulfur, HermeticSeal, MetatronGrid } from '../components/EsotericIcons';
import CrypticQuote from '../components/CrypticQuote';

const PricingPage: React.FC = () => {
  const auditItems = [
    { 
      service: 'Revocable Living Trust', 
      privato: '$1,200 - $2,500', 
      lawyer: '$3,500 - $7,500+', 
      intel: 'Complete private asset isolation and multi-generational succession.' 
    },
    { 
      service: 'Last Will & Testament', 
      privato: '$450 - $850', 
      lawyer: '$1,200 - $3,000', 
      intel: 'Strategic gnostic directives for physical and digital estates.' 
    },
    { 
      service: 'Power of Attorney', 
      privato: '$250 - $550', 
      lawyer: '$600 - $1,500', 
      intel: 'Agency protocols that bypass court-appointed guardianship.' 
    },
    { 
      service: 'Amendments / Updates', 
      privato: '$150 - $400', 
      lawyer: '$500 - $2,000', 
      intel: 'Modular updates to existing private civilizations.' 
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-8 pb-32 pt-20">
      <div className="text-center mb-12">
         <PageHeader title="ECONOMIC // DISRUPTION" subtitle="The Arbitrage of Private Ordering." />
      </div>

      <div className="mb-20 max-w-3xl mx-auto text-center px-4">
          <CrypticQuote 
            text="Traditional law is a legacy tax on existence. We eliminate the middleman and give you the blueprints to your own sanctuary."
            author="Architect Audit"
            className="text-zinc-300 !text-lg"
          />
      </div>

      {/* COMPARISON AUDIT TABLE - REFINED */}
      <section className="mb-32">
          <UrbanCard className="!bg-[#111] border border-white/30 relative overflow-hidden shadow-2xl" disableFlip noPadding>
              {/* Header HUD */}
              <div className="p-6 border-b border-white/20 flex justify-between items-center bg-black/60">
                  <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <h3 className="font-heading text-xl tracking-tighter text-white uppercase">SYSTEM // AUDIT // 2025</h3>
                  </div>
                  <div className="font-mono text-[7px] text-zinc-400 tracking-[0.4em] uppercase font-black">Data_Integrity: Verified</div>
              </div>

              <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="border-b border-white/20 font-mono text-[9px] text-zinc-300 uppercase tracking-widest bg-white/5">
                              <th className="p-6">Service Module</th>
                              <th className="p-6 text-[var(--color-lux-gold)]">Privato Architecture</th>
                              <th className="p-6 text-zinc-300">Traditional Gatekeepers</th>
                              <th className="p-6 hidden lg:table-cell">Tactical Intel</th>
                          </tr>
                      </thead>
                      <tbody className="font-body">
                          {auditItems.map((item, idx) => (
                              <tr key={idx} className="group border-b border-white/10 hover:bg-white/[0.05] transition-all duration-300">
                                  <td className="p-6 font-heading text-xl text-white group-hover:text-[var(--color-lux-gold)] transition-colors uppercase tracking-tight">{item.service}</td>
                                  <td className="p-6">
                                      <div className="text-[var(--color-lux-gold)] font-black text-xl tracking-tighter">{item.privato}</div>
                                      <div className="text-[8px] font-mono text-zinc-400 uppercase mt-0.5 font-black">Flat-Fee Vector</div>
                                  </td>
                                  <td className="p-6 text-zinc-400 line-through decoration-zinc-600 italic text-sm font-bold">{item.lawyer}</td>
                                  <td className="p-6 hidden lg:table-cell">
                                      <p className="text-zinc-200 text-xs italic leading-relaxed max-w-xs font-medium opacity-90 group-hover:opacity-100 transition-opacity">{item.intel}</p>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>

              {/* Table Footer */}
              <div className="p-10 text-center bg-black/50 relative border-t border-white/20">
                  <h4 className="font-heading text-3xl mb-3 text-white uppercase tracking-tight">AVERAGE SAVINGS: 70%</h4>
                  <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-[0.5em] font-black">Eliminating Statutory Friction // MMXXV</p>
              </div>
          </UrbanCard>
      </section>

      {/* WHY WE COST LESS - PRECISE DESIGN */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-start px-4">
          <div className="space-y-10 lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-7xl font-heading tracking-tighter text-white leading-[0.85] uppercase">
                THE COST OF <br/><span className="shimmer-gold">AUTONOMY</span>
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed max-w-md font-medium">
                The legal industry is built on a "black box" model: you pay for their secrecy. We operate on the "Open Blueprint" model: you pay for our architecture, and we hand you the keys.
              </p>
              <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-white/30"></div>
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-black">Model_v.4.1 // Encrypted</span>
              </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
              <UrbanCard className="!bg-[#111] border-l-[3px] border-[var(--color-lux-gold)] !p-10 group hover:border-l-[6px] transition-all" id="why-1">
                  <div className="absolute top-6 right-6 text-[var(--color-lux-gold)] opacity-10 group-hover:opacity-40 transition-all duration-700">
                      <AlchemySulfur className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading mb-3 text-white uppercase tracking-tight">01. Result-Based Billing</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                    Lawyers bill by the hour, creating a perverse incentive to make things complex. We bill by the blueprint. Our modular systems are engineered for clarity—the fewer the billable hours, the more effective the structure.
                  </p>
              </UrbanCard>

              <UrbanCard className="!bg-[#111] border-l-[3px] border-white/40 !p-10 group hover:border-l-[6px] transition-all" id="why-2">
                   <div className="absolute top-6 right-6 text-white opacity-10 group-hover:opacity-40 transition-all duration-700">
                      <Merkaba className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading mb-3 text-white uppercase tracking-tight">02. Educational Sovereignty</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                    In the public system, you are a "Subject." In the private system, you are the "Architect." By teaching you how these structures work, we eliminate your dependence on expensive gatekeepers.
                  </p>
              </UrbanCard>
          </div>
      </section>

      {/* ROI VISUALIZATION - TIGHT ROLEX FINISH */}
      <section className="mb-24">
          <UrbanCard className="!bg-[#0A0A0A] border border-white/20 !py-24 text-center relative overflow-hidden group shadow-3xl" disableFlip>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none">
                  <HermeticSeal className="w-full h-full text-white animate-[spin_100s_linear_infinite]" />
              </div>

              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-heading mb-10 tracking-tighter text-zinc-100 group-hover:text-white transition-all duration-1000 select-none uppercase drop-shadow-lg">
                RETURN // ON // FREEDOM
              </h2>
              
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-6">
                  <div className="text-center group/roi">
                      <div className="text-4xl font-heading text-[var(--color-lux-gold)] mb-1 group-hover:scale-110 transition-transform">$50K+</div>
                      <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest font-black">Est. Savings</div>
                  </div>
                  <div className="text-center group/roi">
                      <div className="text-4xl font-heading text-white mb-1 group-hover:scale-110 transition-transform">100%</div>
                      <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest font-black">Privacy Index</div>
                  </div>
                  <div className="text-center group/roi">
                      <div className="text-4xl font-heading text-[var(--color-lux-gold)] mb-1 group-hover:scale-110 transition-transform">PERM</div>
                      <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest font-black">Legacy Lock</div>
                  </div>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                  <Link to="/intake" className="bg-[var(--color-lux-gold)] text-black px-10 py-4 font-black tracking-[0.4em] uppercase text-[10px] hover:bg-white transition-all shadow-xl rounded-sm">
                      Initialize Uplink
                  </Link>
                  <Link to="/contact" className="border-2 border-white/20 text-zinc-300 hover:text-white hover:border-white/60 px-10 py-4 font-black tracking-[0.4em] uppercase text-[10px] transition-all rounded-sm">
                      Request Audit
                  </Link>
              </div>
          </UrbanCard>
      </section>

      <div className="flex justify-center opacity-10 py-10">
          <MetatronGrid className="w-24 h-24 text-white animate-spin-slow" />
      </div>
    </div>
  );
};

export default PricingPage;
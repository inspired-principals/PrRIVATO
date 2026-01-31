import React from 'react';
import PageHeader from '../components/PageHeader';
import UrbanCard from '../components/UrbanCard';
import { FluxGate, HermeticSeal, AlchemySulfur } from '../components/EsotericIcons';
import CrypticQuote from '../components/CrypticQuote';

const FAQPage: React.FC = () => {
  const faqs = [
    {
        q: "Is this legal in Canada?",
        a: "Yes. Private Membership Associations (PMAs) and Unincorporated Associations are strongly recognized under Canadian common law (Charter s.2 Freedom of Association). We focus on contract, intent, and compliance.",
        level: 'SEC-01',
        icon: HermeticSeal
    },
    {
        q: "Is this 'Sovereign Citizen' stuff?",
        a: "Absolutely not. We reject pseudo-legal arguments. We use valid contracts, clear bylaws, and recognized legal structures. We operate lawfully within Canada, not 'outside' it.",
        level: 'SEC-02',
        icon: AlchemySulfur
    },
    {
        q: "What is an Unincorporated Association?",
        a: "It is a private group of individuals bound by contract for a non-profit purpose. In Canada, they can govern members, hold property (via trustees), and exist indefinitely. It's how clans and private orders lawfully exist.",
        level: 'SEC-01',
        icon: FluxGate
    },
    {
        q: "Can I use this to avoid taxes?",
        a: "No. Private associations are not tax evasion vehicles. They are governance tools. We provide the structure for privacy and order; for tax planning, we recommend a CPA.",
        level: 'SEC-03',
        icon: HermeticSeal
    },
    {
        q: "Why not just use a Corporation?",
        a: "Corporations are public, state-created entities with heavy reporting. Associations are private, member-created entities with internal governance. Some things belong in corporations; others belong in private agreements.",
        level: 'SEC-02',
        icon: FluxGate
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-32 pt-12">
      <div className="text-center mb-24">
           <PageHeader title="SYSTEM // QUERY" subtitle="Secure Interrogation of the Privato Architecture." />
      </div>

      <div className="mb-32 max-w-4xl mx-auto text-center">
          <CrypticQuote 
            text="Truth is often hidden behind layers of public theater. These answers serve as the key to the private domain."
            author="Database Custodian"
            revealSpeed={20}
            className="text-zinc-300 italic"
          />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
        {faqs.map((faq, i) => (
          <UrbanCard key={i} className="!p-12 !bg-[#111] border border-white/30 hover:border-[var(--color-lux-gold)]/60 transition-all flex flex-col h-full group" disableFlip>
            <div className="flex justify-between items-start mb-10">
                <span className="font-mono text-[9px] border border-white/20 px-3 py-1 text-zinc-400 uppercase tracking-widest group-hover:text-[var(--color-lux-gold)] group-hover:border-[var(--color-lux-gold)]/50 transition-colors font-black">
                    Classification: {faq.level}
                </span>
                <faq.icon className="w-6 h-6 text-zinc-500 group-hover:text-[var(--color-lux-gold)] transition-colors" />
            </div>

            <h3 className="font-heading text-3xl md:text-4xl mb-8 text-white leading-none tracking-tight uppercase">
                {faq.q}
            </h3>
            
            <div className="w-full h-px bg-white/10 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-lux-gold)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </div>

            <p className="font-body text-zinc-200 text-lg leading-relaxed group-hover:text-zinc-100 transition-colors font-medium">
                {faq.a}
            </p>

            <div className="mt-auto pt-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="font-mono text-[8px] text-zinc-500 tracking-widest uppercase font-black">Verified Source: Common Law</span>
                <div className="flex gap-1">
                    {[1,2,3].map(d => <div key={d} className="w-1.5 h-1.5 bg-[var(--color-lux-gold)] rounded-full"></div>)}
                </div>
            </div>
          </UrbanCard>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-40 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.05] pointer-events-none">
              <FluxGate className="w-full h-full text-white animate-[spin_30s_linear_infinite]" />
          </div>

          <div className="mb-12 flex justify-center">
             <div className="w-px h-24 bg-gradient-to-b from-[var(--color-lux-gold)] to-transparent"></div>
          </div>

          <h3 className="text-4xl md:text-6xl font-heading mb-8 relative z-10 text-white tracking-tighter uppercase">STILL // UNCERTAIN?</h3>
          <p className="text-zinc-300 mb-12 relative z-10 font-body text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We explain exactly how the private and public worlds interface in Canada. Knowledge is your most powerful asset.
          </p>
          <button className="bg-[var(--color-lux-gold)] text-black px-12 py-5 font-black tracking-[0.5em] uppercase text-xs hover:bg-white transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)] relative z-10 rounded-sm">
             ACCESS ARCHIVES
          </button>
      </div>
    </div>
  );
};

export default FAQPage;
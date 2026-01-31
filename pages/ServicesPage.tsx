import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import UrbanCard from '../components/UrbanCard';
import { Link } from 'react-router-dom';
import { FluxGate, MetatronGrid, SacredTriangle, AllSeeingEye, HermeticSeal, Merkaba, AlchemySulfur } from '../components/EsotericIcons';
import CrypticQuote from '../components/CrypticQuote';

const serviceDossiers = [
    {
        id: 'LVL-01',
        level: '01',
        tier: 'PERSONAL // FOUNDATION',
        subtitle: 'The Bedrock of Sovereignty',
        icon: SacredTriangle,
        color: 'var(--color-lux-gold)',
        description: 'Establish the primary legal barrier between your private existence and public liability. This module provides the essential documents to protect personal agency and property title.',
        specs: [
            { label: 'Primary Instrument', value: 'Private Will & Testament' },
            { label: 'Agency Protocol', value: 'Enduring Power of Attorney' },
            { label: 'Protection Layer', value: 'Personal Asset Schedule' },
            { label: 'Educational Core', value: 'Trust Foundations 101' }
        ],
        components: [
            'Deed of Settlement',
            'Schedule of Beneficiaries',
            'Letter of Wishes',
            'Security Agreement'
        ],
        deepDossier: 'Traditional wills are "death notices" to the public. Our Foundation level utilizes a Deed of Trust that manages assets in real-time.'
    },
    {
        id: 'LVL-02',
        level: '02',
        tier: 'PRIVATE // ASSOCIATION',
        subtitle: 'The Collective Shield',
        icon: FluxGate,
        color: '#FFFFFF',
        description: 'Design a private jurisdiction for your group, business, or family. The PMA is the engine of contractual freedom in Canada.',
        specs: [
            { label: 'Entity Type', value: 'Unincorporated Association' },
            { label: 'Governance', value: 'Custom Bylaws & Charter' },
            { label: 'Legal Basis', value: 'Charter s.2 Recognition' },
            { label: 'Comms', value: 'Secure Internal Protocol' }
        ],
        components: [
            'Foundational Charter',
            'Membership Agreement',
            'Articles of Association',
            'Notice of Jurisdiction'
        ],
        deepDossier: 'By moving your interactions into a private association, you replace statutory mandates with internal contracts.'
    },
    {
        id: 'LVL-03',
        level: '03',
        tier: 'ASSET // STEWARDSHIP',
        subtitle: 'Invisible Ownership',
        icon: MetatronGrid,
        color: 'var(--color-lux-gold)',
        description: 'Separate legal title from beneficial use. This advanced structuring prevents data scrapers from linking high-value assets directly to your person.',
        specs: [
            { label: 'Mechanism', value: 'Bare Trust / Nominee' },
            { label: 'Asset Types', value: 'Real Estate / Private Equity' },
            { label: 'Continuity', value: 'Successor Trustee Mapping' },
            { label: 'Privacy', value: 'Title Anonymization' }
        ],
        components: [
            'Nominee Agreement',
            'Trustee Declaration',
            'Declaration of Trust',
            'Asset Transfer Deed'
        ],
        deepDossier: 'The Bare Trust is a surgical tool. The Trustee holds title for the benefit of the Association, creating a firewall that preserves privacy.'
    },
    {
        id: 'LVL-04',
        level: '04',
        tier: 'LEGACY // ORDER',
        subtitle: 'Multi-Generational Authority',
        icon: AllSeeingEye,
        color: '#333333',
        description: 'The pinnacle of private civilization building. For clans requiring a sovereign constitution and intergenerational voting power.',
        specs: [
            { label: 'Structure', value: 'Clan Constitution' },
            { label: 'Authority', value: 'Council of Elders' },
            { label: 'Enforcement', value: 'Private Arbitration Panel' },
            { label: 'Membership', value: 'Vetted Bloodline/Interest' }
        ],
        components: [
            'Dynastic Constitution',
            'Council Mandates',
            'Arbitration Protocol',
            'Generational Trust'
        ],
        deepDossier: 'Legacy Order turns a family into a legacy institution that survives the erosion of public systems.'
    }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-8 pb-32 pt-16">
      <div className="mb-16">
        <PageHeader title="SYSTEM // ARCHITECTURE" subtitle="The Blueprints of Private Civilization." />
      </div>

      <div className="mb-24 max-w-3xl mx-auto text-center px-4">
          <CrypticQuote 
            text="Structure without gnostic intent is merely a skeleton. We provide the marrow, the spirit, and the steel."
            author="The Lead Architect"
            className="text-zinc-300 italic text-lg"
          />
      </div>

      <div className="space-y-32 lg:space-y-40">
        {serviceDossiers.map((dossier, idx) => (
            <div key={dossier.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Anchor - Aspect Ratio Refined */}
                <div className={`lg:col-span-5 relative ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <UrbanCard 
                        id={dossier.id}
                        className={`aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden transition-all duration-700 rounded-[24px] border-2 border-white/20`}
                        style={{ backgroundColor: dossier.level === '01' ? 'var(--color-lux-gold)' : dossier.level === '04' ? '#080808' : '#111' }}
                        disableFlip
                    >
                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                             <dossier.icon className={`w-full h-full ${dossier.level === '01' ? 'text-black' : 'text-white'}`} />
                        </div>
                        
                        <div className={`font-heading text-[clamp(6rem,12vw,9rem)] relative z-10 select-none ${dossier.level === '01' ? 'text-black' : 'text-zinc-500 group-hover:text-zinc-400 transition-colors'}`}>
                            {dossier.level}
                        </div>

                        {/* HOVER REVEAL */}
                        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl p-8 lg:p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-50 transform translate-y-4 group-hover:translate-y-0 border border-white/20">
                             <div className="flex justify-between items-center mb-6">
                                <span className="font-mono text-[9px] text-[var(--color-lux-gold)] tracking-widest uppercase font-black">Instrument Manifest //</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                             </div>
                             <div className="space-y-3">
                                {dossier.components.map((comp, cIdx) => (
                                    <div key={cIdx} className="flex items-center gap-3 text-white group/comp">
                                        <div className="w-1 h-1 rounded-full bg-[var(--color-lux-gold)]/80 group-hover/comp:bg-[var(--color-lux-gold)] transition-all"></div>
                                        <span className="font-heading text-lg tracking-tight uppercase group-hover/comp:translate-x-1 transition-transform opacity-90 group-hover:opacity-100">{comp}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </UrbanCard>
                </div>

                {/* Content Dossier - Recalibrated text sizes */}
                <div className={`lg:col-span-7 ${idx % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}>
                    <div className={`flex items-center gap-4 mb-4 ${idx % 2 !== 0 ? 'justify-end' : ''}`}>
                        <span className={`text-[8px] font-mono border px-3 py-1 rounded-full tracking-widest uppercase border-white/30 text-zinc-300 font-bold bg-white/5`}>
                            SEC_LEVEL_{dossier.level}
                        </span>
                        <div className="h-px w-12 bg-white/20"></div>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl mb-2 tracking-tighter text-white uppercase group-hover:text-[var(--color-lux-gold)] transition-colors duration-700 leading-none drop-shadow-lg">
                        {dossier.tier}
                    </h2>
                    <p className="text-lg lg:text-xl text-zinc-200 mb-6 font-heading tracking-wide uppercase opacity-90">
                        {dossier.subtitle}
                    </p>
                    
                    <div className={`relative mb-8 p-6 lg:p-7 border-y border-white/20 bg-white/[0.04] ${idx % 2 !== 0 ? 'ml-auto' : ''}`}>
                        <p className="text-zinc-100 text-base leading-relaxed italic font-body font-medium">
                            "{dossier.deepDossier}"
                        </p>
                    </div>

                    <p className={`text-zinc-100 text-base leading-relaxed mb-8 max-w-lg font-medium ${idx % 2 !== 0 ? 'ml-auto' : ''}`}>
                        {dossier.description}
                    </p>

                    {/* Technical Specs Audit Grid - Tighter */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 ${idx % 2 !== 0 ? 'text-right' : ''}`}>
                        {dossier.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="border-b border-white/20 pb-3 group/spec hover:bg-white/5 transition-colors pl-2">
                                <div className="text-[7px] font-mono text-zinc-400 tracking-[0.2em] uppercase mb-0.5 font-black">Node: 0{sIdx + 1}</div>
                                <div className="text-base font-heading text-white group-hover/spec:text-[var(--color-lux-gold)] transition-colors uppercase tracking-tight">{spec.label}</div>
                                <div className="text-[10px] font-mono text-[var(--color-lux-gold)] mt-0.5 opacity-90 font-bold">{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className={`flex items-center gap-6 ${idx % 2 !== 0 ? 'justify-end' : ''}`}>
                        <Link to="/intake" className="group/btn relative overflow-hidden bg-white text-black px-8 py-3.5 font-black tracking-[0.4em] uppercase text-[9px] hover:bg-[var(--color-lux-gold)] transition-all shadow-xl rounded-sm">
                            Initialize Module
                        </Link>
                        <div className="hidden md:flex items-center gap-3">
                             <div className="flex gap-1 animate-pulse opacity-60">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-lux-gold)]"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
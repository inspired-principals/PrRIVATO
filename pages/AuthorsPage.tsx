import React from 'react';
import PageHeader from '../components/PageHeader';
import { authors } from '../data/mockData';
import UrbanCard from '../components/UrbanCard';
import { Link } from 'react-router-dom';
import { HermeticSeal, FluxGate } from '../components/EsotericIcons';

const AuthorsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-32 pt-12">
      <div className="text-center mb-16">
           <PageHeader title="SYSTEM // ARCHITECTS" subtitle="Classified Operatives of Private Civilization." />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20">
        {authors.map((author, idx) => (
          <UrbanCard key={author.id} id={`operative-${author.id}`} className="group !bg-[#111] border border-white/30 hover:border-[var(--color-lux-gold)]/50 transition-all flex flex-col h-full overflow-hidden" disableFlip noPadding>
            
            {/* Dossier Header */}
            <div className="p-6 border-b border-white/20 flex justify-between items-center bg-black/60">
                <div className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase font-black">Clearance: Level 0{idx + 3}</div>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-[var(--color-lux-gold)] rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-[var(--color-lux-gold)] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[var(--color-lux-gold)] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="relative mb-8 aspect-square overflow-hidden rounded-sm border border-white/20 w-full bg-zinc-900 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-700">
                    <img 
                        src={author.imageUrl} 
                        alt={author.name} 
                        className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                    />
                    {/* Data Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 font-mono text-[8px] text-[var(--color-lux-gold)] uppercase tracking-[0.4em] drop-shadow-lg font-black">
                        BIOMETRIC // VERIFIED
                    </div>
                </div>
                
                <div className="flex-grow">
                    <div className="text-[10px] font-mono text-[var(--color-lux-gold)] mb-1 tracking-widest uppercase font-black">Designation //</div>
                    <h3 className="font-heading text-4xl mb-2 text-white group-hover:text-white transition-colors leading-none tracking-tight">
                        {author.name}
                    </h3>
                    <div className="text-zinc-300 font-black text-[9px] tracking-[0.3em] uppercase mb-6 border-b border-white/20 pb-6">
                        {author.title}
                    </div>
                    <p className="font-body text-zinc-200 text-xs leading-relaxed mb-10 italic font-medium">
                        "{author.bio}"
                    </p>
                </div>

                {/* Dossier Stats */}
                <div className="grid grid-cols-2 gap-4 mb-10 font-mono text-[9px] uppercase tracking-widest font-bold">
                     <div className="bg-white/5 p-3 border border-white/10">
                        <span className="text-zinc-500 block mb-1">Sector</span>
                        <span className="text-zinc-300">Jurisdiction</span>
                     </div>
                     <div className="bg-white/5 p-3 border border-white/10">
                        <span className="text-zinc-500 block mb-1">Status</span>
                        <span className="text-green-500 animate-pulse">Active</span>
                     </div>
                </div>
                
                <Link to={`/intel?author=${author.slug}`} className="w-full text-center py-4 bg-white text-black text-[10px] font-black tracking-[0.5em] uppercase hover:bg-[var(--color-lux-gold)] transition-all group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-sm">
                  DECRYPT INTEL
                </Link>
            </div>

            {/* Dossier Footer */}
            <div className="p-4 border-t border-white/20 flex justify-center bg-black/40">
                <FluxGate className="w-4 h-4 text-zinc-600 group-hover:text-[var(--color-lux-gold)] transition-colors animate-[spin_10s_linear_infinite]" />
            </div>
          </UrbanCard>
        ))}
      </div>

      <div className="text-center opacity-10 mt-20">
          <HermeticSeal className="w-32 h-32 mx-auto animate-spin-slow" />
      </div>
    </div>
  );
};

export default AuthorsPage;
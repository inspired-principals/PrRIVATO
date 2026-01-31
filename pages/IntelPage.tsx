import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { featuredPosts, recentPosts, technologyPosts } from '../data/mockData';
import { MetatronGrid } from '../components/EsotericIcons';
import UrbanCard from '../components/UrbanCard';

const IntelPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');
  const location = useLocation();

  const allPosts = [...featuredPosts, ...recentPosts, ...technologyPosts];

  useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const categoryParam = searchParams.get('category');

      if (categoryParam) {
          if (categoryParam === 'sovereignty' || categoryParam === 'trust-law') setFilter('LEGAL');
          else if (categoryParam === 'asset-protection') setFilter('ASSETS');
          else if (categoryParam === 'strategy') setFilter('STRATEGY');
          else setFilter('ALL');
      }
  }, [location.search]);

  const filteredPosts = allPosts.filter(post => {
      if (filter === 'ALL') return true;
      if (filter === 'STRATEGY') return ['Strategy', 'Governance'].includes(post.category);
      if (filter === 'LEGAL') return ['Trust Law', 'Private Association', 'Sovereignty', 'Future Law'].includes(post.category);
      if (filter === 'ASSETS') return ['Asset Protection', 'Assets'].includes(post.category);
      return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 min-h-screen">
      
      {/* HEADER */}
      <div className="text-center pt-32 pb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-lux-gold)] to-transparent opacity-20"></div>
          <h1 className="font-heading tracking-tighter text-[clamp(4rem,8vw,7rem)] text-white relative z-10 mix-blend-difference">
            INTEL // FEED
          </h1>
          <div className="flex justify-center gap-8 mt-6 font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-500">
             <span>SECURE CONNECTION</span>
             <span className="text-[var(--color-lux-gold)] animate-pulse">● LIVE</span>
             <span>ENCRYPTED</span>
          </div>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-4 mb-12 font-mono text-[10px] uppercase tracking-widest text-zinc-600 gap-4 md:gap-0">
          <div className="flex gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {['ALL', 'STRATEGY', 'LEGAL', 'ASSETS'].map((f) => (
                  <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`transition-colors whitespace-nowrap ${filter === f ? 'text-[var(--color-lux-gold)] font-bold' : 'hover:text-white'}`}
                  >
                      {f === 'ALL' ? 'ALL SOURCES' : f}
                  </button>
              ))}
          </div>
          <div className="hidden md:block">
              DOCUMENTS: {filteredPosts.length}
          </div>
      </div>

      {/* DOSSIER LIST */}
      <div className="space-y-6 min-h-[500px]">
        {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
            <Link to={`/post/${post.slug}`} key={index} className="block group">
                <UrbanCard 
                    id={post.id}
                    disableFlip
                    className="!bg-transparent border-none overflow-visible"
                    noPadding
                >
                    <div className="relative overflow-hidden bg-zinc-900/30 border border-white/5 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center group-hover:bg-zinc-900 group-hover:border-[var(--color-lux-gold)]/30 transition-all duration-500 rounded-sm">
                        
                        {/* Hover Scan Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-lux-gold)] to-transparent opacity-0 group-hover:opacity-5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                        {/* ID / Status */}
                        <div className="font-mono text-[9px] text-zinc-600 w-24 flex-shrink-0">
                                <div className="mb-1 text-[var(--color-lux-gold)]">ID: {post.id.toUpperCase()}</div>
                                <div className="group-hover:text-white transition-colors">UNCLASSIFIED</div>
                        </div>

                        {/* Title & Meta */}
                        <div className="flex-grow">
                            <h3 className="font-heading text-2xl md:text-3xl text-zinc-300 group-hover:text-[var(--color-lux-gold)] transition-colors mb-2 tracking-wide">
                                {post.title}
                            </h3>
                            <div className="flex gap-4 text-[9px] font-black uppercase tracking-widest text-zinc-600">
                                <span className="border border-white/10 px-2 py-1 rounded-full">{post.category}</span>
                                <span className="pt-1">{post.date}</span>
                            </div>
                        </div>

                        {/* Action */}
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                                ACCESS FILE
                            </span>
                        </div>
                    </div>
                </UrbanCard>
            </Link>
            ))
        ) : (
            <div className="py-20 text-center border border-dashed border-zinc-800 text-zinc-600 font-mono text-xs tracking-widest">
                NO INTELLIGENCE FOUND IN THIS SECTOR.
            </div>
        )}
      </div>

      {/* FOOTER DECORATION */}
      <div className="mt-24 flex justify-center opacity-20">
          <MetatronGrid className="w-64 h-64 text-zinc-800 animate-[spin_60s_linear_infinite]" />
      </div>
    </div>
  );
};

export default IntelPage;
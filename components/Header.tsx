import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon } from '../constants';
import { recentPosts, featuredPosts, technologyPosts } from '../data/mockData';
import { HermeticSeal, FluxGate } from './EsotericIcons';
import MobileNav from './MobileNav';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [time, setTime] = useState<string>('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
        const now = new Date();
        setTime(now.toISOString().slice(11, 19) + ' UTC');
    };
    const timer = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timer);
  }, []);

  const allPosts = [...featuredPosts, ...recentPosts, ...technologyPosts];

  useEffect(() => {
    if (searchQuery.length > 1) {
        const results = allPosts.filter(post => 
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            post.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
    } else {
        setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchNavigation = (slug: string) => {
      setIsSearchOpen(false);
      setSearchQuery('');
      navigate(`/post/${slug}`);
  };

  return (
    <>
    {/* TOP HUD BAR - Ultra Persistent */}
    <div className="fixed top-0 left-0 w-full z-[1000] px-12 py-4 flex justify-between items-center text-[8px] font-mono tracking-[0.8em] text-zinc-400 mix-blend-difference pointer-events-none uppercase font-black">
        <div className="flex gap-12 items-center">
            <span className="text-[var(--color-lux-gold)] flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_green]"></div>
                UPLINK_SECURE
            </span>
            <span className="hidden md:inline border-l-2 border-white/10 pl-12 opacity-40">PRIVATO_OS_v4.5</span>
        </div>
        <div className="flex gap-12 items-center">
            <span className="opacity-60">{time}</span>
            <div className="w-24 h-[2px] bg-zinc-800 relative overflow-hidden rounded-full opacity-40">
                <div className="absolute h-full w-1/3 bg-[var(--color-lux-gold)] animate-[scan_5s_linear_infinite]"></div>
            </div>
        </div>
    </div>

    {/* Desktop Floating Navigation */}
    <header className="fixed top-14 left-1/2 -translate-x-1/2 z-[1100] hidden lg:block w-fit">
      <div className="bg-black/95 backdrop-blur-3xl border-2 border-white/15 p-2 rounded-full flex items-center px-12 shadow-[0_30px_100px_rgba(0,0,0,1)] hover:border-[var(--color-lux-gold)]/40 transition-all duration-1000">
        
        <Link to="/" className="flex items-center gap-5 pr-12 border-r-2 border-white/10 mr-12 group/brand">
            <HermeticSeal className="w-9 h-9 text-[var(--color-lux-gold)] animate-[spin_25s_linear_infinite] group-hover/brand:scale-110 transition-transform" />
            <div className="flex flex-col">
                <span className="font-heading text-3xl tracking-tighter text-white leading-none uppercase">PRIVATO</span>
                <span className="font-mono text-[6px] tracking-[0.6em] text-zinc-500 uppercase font-black">Architecture</span>
            </div>
        </Link>
        
        <nav className="flex items-center gap-10 font-mono font-black uppercase text-[9px] tracking-[0.6em] text-zinc-400">
          <Link to="/services" className="hover:text-white transition-all hover:translate-y-[-2px]">Services</Link>
          <Link to="/intel" className="hover:text-white transition-all hover:translate-y-[-2px]">Intel</Link>
          <Link to="/pricing" className="hover:text-white transition-all hover:translate-y-[-2px]">Value</Link>
          <Link to="/about" className="hover:text-white transition-all hover:translate-y-[-2px]">Mission</Link>
          <Link to="/knowledge" className="hover:text-white text-[var(--color-lux-gold)] transition-all hover:translate-y-[-2px]">Gnosis</Link>
        </nav>

        <div className="flex items-center gap-8 pl-12 border-l-2 border-white/10 ml-12">
            <button onClick={() => setIsSearchOpen(true)} className="text-zinc-500 hover:text-[var(--color-lux-gold)] transition-all active:scale-90">
                <SearchIcon className="w-5 h-5" />
            </button>
            <Link to="/intake" className="bg-[var(--color-lux-gold)] text-black px-10 py-3.5 rounded-full text-[9px] font-black tracking-[0.5em] uppercase hover:bg-white transition-all shadow-2xl active:scale-95 group/btn overflow-hidden relative">
              <span className="relative z-10">INITIATE</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
            </Link>
        </div>
      </div>
    </header>

    <MobileNav />

    {/* Search Terminal */}
    <div className={`fixed inset-0 bg-black/99 backdrop-blur-3xl z-[2000] transition-all duration-700 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="max-w-5xl mx-auto pt-40 px-10 relative z-10">
            <button onClick={() => setIsSearchOpen(false)} className="mb-20 text-zinc-400 hover:text-white font-mono text-[10px] tracking-[0.8em] bg-white/5 px-8 py-4 rounded-full border-2 border-white/10 transition-all uppercase font-black">
                [ ESC ] TERMINATE_QUERY
            </button>
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="QUERY_CORE_ARCHIVES..."
                    className="w-full bg-transparent border-b-4 border-white/10 text-[clamp(2.5rem,7vw,5rem)] font-heading text-white focus:border-[var(--color-lux-gold)] outline-none py-12 placeholder-zinc-950 transition-colors uppercase tracking-tighter"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus={isSearchOpen}
                />
            </div>

            <div className="mt-20 space-y-6 max-h-[50vh] overflow-y-auto no-scrollbar pb-32">
                {searchResults.length > 0 ? searchResults.map((r, idx) => (
                    <div 
                      key={r.id} 
                      onClick={() => handleSearchNavigation(r.slug)} 
                      className="group flex justify-between items-center p-10 hover:bg-white/5 border-l-4 border-transparent hover:border-[var(--color-lux-gold)] transition-all cursor-pointer obsidian-slab rounded-2xl mb-6 opacity-0 animate-fade-in-slide-up"
                      style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'forwards' }}
                    >
                        <div className="space-y-2">
                            <h4 className="font-heading text-4xl text-zinc-400 group-hover:text-white transition-colors tracking-tight uppercase leading-none">{r.title}</h4>
                            <div className="flex items-center gap-6">
                                <span className="font-mono text-[10px] text-[var(--color-lux-gold)] tracking-[0.5em] font-black uppercase opacity-70">REF: {r.category}</span>
                            </div>
                        </div>
                    </div>
                )) : searchQuery.length > 1 && (
                    <div className="text-center py-32 border-4 border-dashed border-white/5 rounded-3xl opacity-30">
                        <p className="font-mono text-[12px] text-zinc-700 tracking-[1em] uppercase font-black">Intelligence match: NULL</p>
                    </div>
                )}
            </div>
        </div>
        <style>{`
          @keyframes fade-in-slide-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-slide-up {
            animation: fade-in-slide-up 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }
        `}</style>
    </div>
    </>
  );
};

export default Header;
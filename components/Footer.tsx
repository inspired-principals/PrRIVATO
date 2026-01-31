import React, { useState } from 'react';
import { FacebookIcon, XIcon, InstagramIcon, WhatsAppIcon } from '../constants';
import { Link } from 'react-router-dom';
import { HermeticSeal } from './EsotericIcons';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault();
      if(email) {
          setTimeout(() => setSubscribed(true), 800);
      }
  };

  return (
    <footer className="mt-24 lg:mt-32 glass-monolith rounded-t-[40px] border-t border-white/10 pt-20 pb-10 px-10 md:px-24 relative overflow-hidden bg-black shadow-[0_-30px_100px_rgba(0,0,0,1)]">
      {/* Background Sigil - Subtle presence */}
      <div className="absolute -top-32 -right-32 opacity-[0.012] pointer-events-none">
          <HermeticSeal className="w-[700px] h-[700px] text-white animate-[spin_240s_linear_infinite]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
            <div className="md:col-span-4 space-y-8">
                <Link to="/" className="flex items-center gap-4 group">
                    <div className="bg-[var(--color-lux-gold)] text-black font-heading text-3xl w-14 h-14 flex items-center justify-center rounded-sm shadow-[0_0_25px_rgba(255,95,21,0.4)] group-hover:scale-105 transition-all">P</div>
                    <span className="font-heading text-4xl tracking-tighter text-white drop-shadow-2xl uppercase">PRIVATO</span>
                </Link>
                <div className="space-y-6">
                  <p className="font-body text-zinc-500 text-lg leading-relaxed max-w-sm font-medium opacity-80">
                      Private civilization building. Lawful private ordering under Canadian common law. We architect the invisible domains of freedom.
                  </p>
                  <div className="font-mono text-[9px] text-zinc-800 uppercase tracking-[0.4em] leading-loose font-black bg-zinc-950/20 p-5 border-l-2 border-[var(--color-lux-gold)]/20 inline-block rounded-r-xl">
                    © 2026 Urban Minds™ · Secure Node<br/>
                    Proprietary Tactical OS.
                  </div>
                </div>
                <div className="flex gap-5">
                    {[FacebookIcon, XIcon, InstagramIcon, WhatsAppIcon].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-zinc-800 hover:text-[var(--color-lux-gold)] hover:border-[var(--color-lux-gold)] transition-all bg-zinc-950 hover:scale-110 active:scale-95">
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="md:col-span-3 lg:col-span-2 space-y-6 pt-4">
                <h4 className="font-heading text-xl tracking-[0.2em] text-[var(--color-lux-gold)] uppercase opacity-60">PLATFORM</h4>
                <nav className="flex flex-col gap-4 font-body font-black text-[9px] tracking-[0.5em] text-zinc-600">
                    <Link to="/services" className="hover:text-white transition-colors">SERVICES</Link>
                    <Link to="/pricing" className="hover:text-white transition-colors">VALUE_AUDIT</Link>
                    <Link to="/about" className="hover:text-white transition-colors">MISSION</Link>
                    <Link to="/knowledge" className="hover:text-[var(--color-lux-gold)] transition-colors">GNOSIS</Link>
                    <Link to="/authors" className="hover:text-white transition-colors">ARCHITECTS</Link>
                </nav>
            </div>

            <div className="md:col-span-5 lg:col-span-6">
                <div className="obsidian-slab p-8 lg:p-10 rounded-[32px] border border-white/8 bg-zinc-950/40 shadow-2xl relative overflow-hidden group/audit">
                    <h3 className="text-2xl lg:text-3xl mb-4 tracking-tighter uppercase text-white leading-none shimmer-gold">TRUST // ASSET_INTEL</h3>
                    <p className="text-zinc-600 text-[10px] mb-10 uppercase font-black tracking-[0.4em] leading-relaxed opacity-70">Download the encrypted checklist for trust funding and intergenerational security.</p>
                    
                    {subscribed ? (
                        <div className="bg-[var(--color-lux-gold)]/5 border border-[var(--color-lux-gold)]/20 text-[var(--color-lux-gold)] p-5 rounded-xl text-center font-black uppercase text-[10px] tracking-[0.6em] animate-fade-in shadow-inner">
                            TRANSMISSION_COMPLETE
                        </div>
                    ) : (
                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
                            <input 
                                type="email" 
                                placeholder="UPLINK@DOMAIN.COM" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow bg-black/70 border border-white/5 rounded-xl px-5 py-4 text-xs font-black focus:border-[var(--color-lux-gold)] outline-none transition-all text-white placeholder-zinc-900 shadow-inner" 
                            />
                            <button type="submit" className="bg-[var(--color-lux-gold)] text-black px-8 py-4 rounded-xl font-black text-[9px] tracking-widest uppercase hover:bg-white transition-all active:scale-95 shadow-lg">
                                GET_INTEL
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="font-heading text-4xl tracking-[0.3em] text-zinc-900 select-none opacity-20">
                URBAN MINDS // PRIVATO // MMXXVI
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-[7px] font-black tracking-[0.6em] text-zinc-800 uppercase">
                <Link to="/legal" className="hover:text-white transition-colors">Legal Framework</Link>
                <Link to="/legal" className="hover:text-white transition-colors">Privacy Protocol</Link>
                <Link to="/legal" className="hover:text-white transition-colors">Terms of Uplink</Link>
            </div>
        </div>
        <div className="mt-12 pt-10 border-t border-white/5 text-[9px] text-zinc-800 leading-relaxed font-mono uppercase tracking-[0.5em] max-w-full mx-auto text-center font-bold opacity-30">
            ADVISORY: Educational guidance for private arrangements. We operate strictly as non-statutory representation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
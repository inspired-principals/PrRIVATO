import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import UrbanCard from '../components/UrbanCard';
import { Link } from 'react-router-dom';
import { FluxGate, MetatronGrid, HermeticSeal } from '../components/EsotericIcons';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
      return (
        <div className="max-w-4xl mx-auto px-8 flex items-center justify-center min-h-[70vh] animate-fade-in">
            <UrbanCard className="max-w-lg w-full !bg-[#0A0A0A] border border-[var(--color-lux-gold)]/40 !p-12 text-center relative overflow-hidden shadow-3xl" disableFlip noPadding>
                <div className="p-12">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-lux-gold)] opacity-5 blur-[60px]"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                        <FluxGate className="w-[120%] h-[120%] text-[var(--color-lux-gold)] animate-[spin_20s_linear_infinite]" />
                    </div>

                    <div className="w-20 h-20 rounded-full border-2 border-[var(--color-lux-gold)]/60 flex items-center justify-center mx-auto mb-10 shadow-gold-glow animate-pulse relative z-10">
                        <HermeticSeal className="w-10 h-10 text-[var(--color-lux-gold)]" />
                    </div>

                    <h3 className="text-4xl font-heading text-white mb-6 relative z-10 uppercase tracking-tight">SIGNAL // LOCKED</h3>
                    
                    <p className="text-zinc-400 font-body text-sm mb-10 leading-relaxed relative z-10 max-w-xs mx-auto">
                        Your transmission has been routed to our offline terminal. Establish secure uplink within 24 hours.
                    </p>

                    <Link to="/" className="inline-block border border-white/20 text-zinc-300 hover:text-white hover:border-white/40 px-8 py-3 rounded-full font-black text-[9px] tracking-[0.4em] uppercase transition-all relative z-10 shadow-xl">
                        Close Link
                    </Link>
                </div>
            </UrbanCard>
        </div>
      );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-8 pb-32 pt-20">
      <PageHeader title="DROP // A // LINE" subtitle="Establish Secure Signal." />
      
      <section className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <UrbanCard className="lg:col-span-4 !p-10 space-y-10 h-fit relative overflow-hidden bg-[#111] border border-white/30" disableFlip noPadding>
            <div className="p-10 space-y-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-[0.02] pointer-events-none">
                    <MetatronGrid className="w-full h-full text-white" />
                </div>

                <h3 className="font-heading text-4xl tracking-tighter text-white uppercase relative z-10">INFO // <span className="text-[var(--color-lux-gold)]">DUMP</span></h3>
                <div className="space-y-6 font-body font-black uppercase text-[10px] tracking-[0.3em] relative z-10 text-zinc-300">
                <div>
                    <span className="text-zinc-500 block mb-1 font-mono">// LOC</span>
                    <p className="text-zinc-200">BASEMENT 4, NEON DISTRICT<br />CYBER CITY, CC 001</p>
                </div>
                <div>
                    <span className="text-zinc-500 block mb-1 font-mono">// COMMS</span>
                    <p className="hover:text-[var(--color-lux-gold)] cursor-crosshair transition-colors underline decoration-zinc-800 text-zinc-200">+1 800 PRIVATO OS</p>
                    <p className="hover:text-[var(--color-lux-gold)] cursor-crosshair transition-colors underline decoration-zinc-800 uppercase text-zinc-200">Uplink@Privato.Arch</p>
                </div>
                </div>
                <div className="pt-8 border-t border-white/10 relative z-10 opacity-50">
                    <p className="font-heading text-xl text-zinc-500 uppercase tracking-widest">Always // Watching</p>
                </div>
            </div>
          </UrbanCard>

          <UrbanCard className="lg:col-span-8 !p-12 !bg-[#111] border border-white/30 relative overflow-hidden shadow-2xl" disableFlip noPadding>
            <form className="space-y-10 relative z-10 p-12" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="contact_name" 
                    required 
                    className="block py-3 px-0 w-full text-base text-white bg-transparent border-b-2 border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-lux-gold)] transition-all placeholder-transparent font-bold tracking-tight" 
                    placeholder=" " 
                  />
                  <label 
                    htmlFor="contact_name" 
                    className="absolute text-[10px] text-zinc-400 duration-300 transform -translate-y-6 scale-100 top-3 origin-[0] group-focus-within:text-[var(--color-lux-gold)] group-focus-within:scale-90 group-focus-within:-translate-y-7 uppercase font-black tracking-widest"
                  >
                    IDENTIFIER //
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="contact_email" 
                    required 
                    className="block py-3 px-0 w-full text-base text-white bg-transparent border-b-2 border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-lux-gold)] transition-all placeholder-transparent font-bold tracking-tight" 
                    placeholder=" " 
                  />
                  <label 
                    htmlFor="contact_email" 
                    className="absolute text-[10px] text-zinc-400 duration-300 transform -translate-y-6 scale-100 top-3 origin-[0] group-focus-within:text-[var(--color-lux-gold)] group-focus-within:scale-90 group-focus-within:-translate-y-7 uppercase font-black tracking-widest"
                  >
                    FREQUENCY //
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input 
                    type="text" 
                    id="contact_subject" 
                    required 
                    className="block py-3 px-0 w-full text-base text-white bg-transparent border-b-2 border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-lux-gold)] transition-all placeholder-transparent font-bold tracking-tight" 
                    placeholder=" " 
                />
                <label 
                    htmlFor="contact_subject" 
                    className="absolute text-[10px] text-zinc-400 duration-300 transform -translate-y-6 scale-100 top-3 origin-[0] group-focus-within:text-[var(--color-lux-gold)] group-focus-within:scale-90 group-focus-within:-translate-y-7 uppercase font-black tracking-widest"
                >
                    VECTOR_ID //
                </label>
              </div>

              <div className="relative group">
                <textarea 
                    id="contact_message" 
                    rows={4} 
                    required 
                    className="block py-3 px-0 w-full text-base text-white bg-transparent border-b-2 border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--color-lux-gold)] transition-all placeholder-transparent font-bold tracking-tight resize-none" 
                    placeholder=" " 
                ></textarea>
                <label 
                    htmlFor="contact_message" 
                    className="absolute text-[10px] text-zinc-400 duration-300 transform -translate-y-6 scale-100 top-3 origin-[0] group-focus-within:text-[var(--color-lux-gold)] group-focus-within:scale-90 group-focus-within:-translate-y-7 uppercase font-black tracking-widest"
                >
                    PACKET_DATA //
                </label>
              </div>

              <button type="submit" className="w-full py-5 bg-white text-black font-black text-[10px] tracking-[0.6em] uppercase rounded-full hover:bg-[var(--color-lux-gold)] transition-all shadow-xl flex items-center justify-center gap-4 group">
                TRANSMIT // SIGNAL
                <FluxGate className="w-5 h-5 text-black group-hover:rotate-180 transition-transform duration-700" />
              </button>
            </form>
          </UrbanCard>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import UrbanCard from '../components/UrbanCard';
import { FluxGate, MetatronGrid, AllSeeingEye } from '../components/EsotericIcons';

const IntakePage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceTier: '',
    intent: '',
    values: [] as string[]
  });

  useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const tierParam = searchParams.get('tier');
      if (tierParam) {
          setFormData(prev => ({ ...prev, serviceTier: tierParam }));
      }
  }, [location.search]);

  const handleNext = () => {
      if (step === 1 && !isScanning) {
          setIsScanning(true);
          setTimeout(() => {
              setIsScanning(false);
              setStep(step + 1);
          }, 2000);
      } else {
          setStep(step + 1);
      }
  };

  const handleBack = () => setStep(step - 1);

  const toggleValue = (val: string) => {
    setFormData(prev => ({
        ...prev,
        values: prev.values.includes(val) 
            ? prev.values.filter(v => v !== val)
            : [...prev.values, val]
    }));
  };

  const handleSubmit = () => {
      setIsScanning(true);
      setTimeout(() => {
          setIsScanning(false);
          setIsSubmitted(true);
      }, 1500);
  };

  if (isSubmitted) {
      return (
        <div className="max-w-4xl mx-auto px-6 pb-24 min-h-screen flex flex-col justify-center animate-fade-in">
             <PageHeader title="PROTOCOL // COMPLETE" subtitle="Uplink Secured." />
             <UrbanCard className="!bg-[#0A0A0A] border border-[var(--color-lux-gold)]/60 min-h-[500px] flex flex-col items-center justify-center text-center relative overflow-hidden shadow-3xl">
                <div className="absolute inset-0 bg-[var(--color-lux-gold)] opacity-[0.03]"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
                    <MetatronGrid className="w-[120%] h-[120%] text-[var(--color-lux-gold)] animate-[spin_120s_linear_infinite]" />
                </div>

                <div className="w-28 h-28 rounded-full border-4 border-[var(--color-lux-gold)] flex items-center justify-center mb-10 shadow-gold-glow animate-pulse relative z-10">
                    <svg className="w-14 h-14 text-[var(--color-lux-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h3 className="text-5xl font-heading text-white mb-6 tracking-tighter relative z-10 uppercase">TRANSMISSION_LOCKED</h3>
                <p className="text-zinc-300 max-w-md mx-auto mb-10 font-mono text-[10px] leading-relaxed relative z-10 tracking-widest uppercase font-black">
                    Your data packet has been encrypted with a sovereign hash and stored in our offline vault. 
                    An operative will review your vector and establish comms via encrypted channels within 24 hours.
                </p>

                <div className="p-6 bg-white/5 border-2 border-white/20 rounded-2xl mb-12 relative z-10 shadow-inner">
                     <div className="text-[9px] font-black uppercase tracking-[0.5em] text-[var(--color-lux-gold)] mb-3">SECURE_REF_ID //</div>
                     <div className="font-mono text-white text-xl font-bold">{Math.random().toString(36).substring(2, 12).toUpperCase()}</div>
                </div>

                <Link to="/" className="bg-white text-black px-12 py-5 font-black uppercase tracking-[0.5em] text-xs hover:bg-[var(--color-lux-gold)] transition-all relative z-10 shadow-2xl rounded-sm">
                    Return to Hub
                </Link>
             </UrbanCard>
        </div>
      );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24 min-h-screen">
      <PageHeader title="PROTOCOL // INITIATION" subtitle="Establishing Secure Uplink..." />

      <div className="mb-14 flex justify-between items-center text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400 border-b border-white/20 pb-6">
        <span className={step >= 1 ? "text-[var(--color-lux-gold)] scale-110" : ""}>01 IDENTITY</span>
        <span className={step >= 2 ? "text-[var(--color-lux-gold)] scale-110" : ""}>02 VECTOR</span>
        <span className={step >= 3 ? "text-[var(--color-lux-gold)] scale-110" : ""}>03 ALIGNMENT</span>
        <span className={step >= 4 ? "text-[var(--color-lux-gold)] scale-110" : ""}>04 TRANSMIT</span>
      </div>

      <UrbanCard className="!bg-[#111] border-t border-b border-white/40 min-h-[500px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
        
        <div className="absolute top-6 right-6 w-14 h-14 opacity-10 pointer-events-none">
            <FluxGate className="w-full h-full text-white animate-spin-slow" />
        </div>

        {isScanning ? (
            <div className="flex-grow flex flex-col items-center justify-center animate-pulse">
                <AllSeeingEye className="w-32 h-32 text-[var(--color-lux-gold)] mb-10 shadow-gold-glow" />
                <h3 className="font-heading text-4xl text-white tracking-widest animate-pulse">BIOMETRIC_SCAN_ACTIVE</h3>
                <div className="w-64 h-1 bg-zinc-800 mt-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--color-lux-gold)] animate-[scan_1.5s_linear_infinite]"></div>
                </div>
            </div>
        ) : (
            <div className="flex-grow py-10">
                {/* STEP 1: IDENTITY */}
                {step === 1 && (
                    <div className="animate-fade-in space-y-12 relative z-10">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-heading text-white tracking-tight uppercase">SIGNAL VERIFICATION</h3>
                            <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest font-black">Enter your credentials for sovereign hashing.</p>
                        </div>
                        <div className="space-y-10">
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    id="name"
                                    required
                                    className="peer w-full bg-white/5 border-b-2 border-white/40 p-5 pt-8 text-[var(--color-lux-gold)] font-mono focus:border-[var(--color-lux-gold)] focus:shadow-[0_15px_20px_-15px_rgba(212,175,55,0.3)] outline-none transition-all duration-500 placeholder-transparent font-black"
                                    placeholder="Designation"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                                <label 
                                    htmlFor="name"
                                    className="absolute left-0 top-1 text-[11px] uppercase tracking-[0.4em] text-zinc-300 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[var(--color-lux-gold)] pointer-events-none font-black"
                                >
                                    Sovereign Designation (Name)
                                </label>
                            </div>

                            <div className="relative group">
                                <input 
                                    type="email" 
                                    id="email"
                                    required
                                    className="peer w-full bg-white/5 border-b-2 border-white/40 p-5 pt-8 text-[var(--color-lux-gold)] font-mono focus:border-[var(--color-lux-gold)] focus:shadow-[0_15px_20px_-15px_rgba(212,175,55,0.3)] outline-none transition-all duration-500 placeholder-transparent font-black"
                                    placeholder="Frequency"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                                <label 
                                    htmlFor="email"
                                    className="absolute left-0 top-1 text-[11px] uppercase tracking-[0.4em] text-zinc-300 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[var(--color-lux-gold)] pointer-events-none font-black"
                                >
                                    Comms Frequency (Email)
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 2: VECTOR */}
                {step === 2 && (
                    <div className="animate-fade-in space-y-10 relative z-10">
                        <h3 className="text-4xl font-heading text-white tracking-tight uppercase">SELECT ARCHITECTURAL VECTOR</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {['Personal Foundation', 'Private Association', 'Asset Stewardship', 'Legacy Order', 'Custom Consult'].map((tier) => (
                                <button
                                    key={tier}
                                    onClick={() => setFormData({...formData, serviceTier: tier})}
                                    className={`p-8 text-left border-2 relative overflow-hidden group transition-all duration-500 rounded-sm ${formData.serviceTier === tier ? 'border-[var(--color-lux-gold)] bg-[var(--color-lux-gold)]/15 text-[var(--color-lux-gold)] shadow-[0_15px_40px_rgba(212,175,55,0.2)]' : 'border-white/20 text-zinc-300 hover:border-white/50 hover:text-white bg-white/5'}`}
                                >
                                    <span className="block text-xs font-black uppercase tracking-[0.4em] relative z-10">{tier}</span>
                                    {formData.serviceTier === tier && <div className="absolute inset-0 bg-[var(--color-lux-gold)] opacity-10 animate-pulse"></div>}
                                </button>
                            ))}
                        </div>
                        
                        <div className="relative group pt-6">
                            <textarea 
                                id="intent"
                                required
                                className="peer w-full bg-white/5 border-2 border-white/20 p-6 pt-10 text-white font-mono text-sm focus:border-[var(--color-lux-gold)] focus:shadow-inner outline-none h-40 transition-all duration-500 placeholder-transparent rounded-sm resize-none font-bold"
                                placeholder="Intent"
                                value={formData.intent}
                                onChange={(e) => setFormData({...formData, intent: e.target.value})}
                            ></textarea>
                            <label 
                                htmlFor="intent"
                                className="absolute left-6 top-8 text-[11px] uppercase tracking-[0.4em] text-zinc-300 transition-all duration-300 peer-placeholder-shown:top-10 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-[10px] peer-focus:text-[var(--color-lux-gold)] pointer-events-none font-black"
                            >
                                Core Strategic Intent Statement
                            </label>
                        </div>
                    </div>
                )}

                {/* STEP 3: ALIGNMENT */}
                {step === 3 && (
                    <div className="animate-fade-in space-y-10 relative z-10">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-heading text-white tracking-tight uppercase">PRINCIPLE ALIGNMENT</h3>
                            <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest font-black">Select the anchors of your private world.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {['Absolute Privacy', 'Generational Legacy', 'Total Sovereignty', 'Private Governance', 'Ironclad Protection', 'Contractual Freedom', 'Cultural Autonomy', 'Non-Public Arbitration'].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => toggleValue(val)}
                                    className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.5em] border-2 rounded-full transition-all duration-500 ${formData.values.includes(val) ? 'bg-white text-black border-white shadow-[0_15px_30px_rgba(255,255,255,0.3)] scale-105' : 'border-white/20 text-zinc-300 hover:border-white hover:text-white bg-white/5'}`}
                                >
                                    {val}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* STEP 4: TRANSMIT */}
                {step === 4 && (
                    <div className="animate-fade-in text-center py-16 relative z-10">
                        <div className="w-24 h-24 bg-[var(--color-lux-gold)] rounded-full mx-auto mb-10 flex items-center justify-center shadow-gold-glow relative group cursor-pointer active:scale-95 transition-all">
                             <div className="absolute inset-[-25px] pointer-events-none group-hover:scale-110 transition-transform">
                                <FluxGate className="w-full h-full text-[var(--color-lux-gold)] opacity-40 animate-[spin_10s_linear_infinite]" />
                             </div>
                            <div className="w-18 h-18 bg-black rounded-full flex items-center justify-center relative z-10">
                                <span className="text-[var(--color-lux-gold)] font-heading text-4xl">⚡</span>
                            </div>
                        </div>
                        <h3 className="text-5xl font-heading text-white mb-6 uppercase tracking-tighter">FINAL_VERIFICATION</h3>
                        <p className="text-zinc-300 text-sm max-w-lg mx-auto mb-10 font-body leading-relaxed font-medium">
                            Confirm your tactical brief. Transmission is atomic and immutable. You are the architect of this directive.
                        </p>
                        
                        <div className="bg-white/5 p-10 max-w-md mx-auto mb-10 text-left font-mono text-[10px] text-zinc-300 border-2 border-white/20 shadow-inner">
                            <p className="mb-4 flex justify-between border-b border-white/10 pb-2"><span className="text-[var(--color-lux-gold)] font-black tracking-widest uppercase">ID:</span> <span className="text-white font-bold">{formData.name || 'ANONYMOUS'}</span></p>
                            <p className="mb-4 flex justify-between border-b border-white/10 pb-2"><span className="text-[var(--color-lux-gold)] font-black tracking-widest uppercase">VECTOR:</span> <span className="text-white font-bold">{formData.serviceTier || 'UNSPECIFIED'}</span></p>
                            <p className="flex justify-between uppercase"><span className="text-[var(--color-lux-gold)] font-black tracking-widest">PRINCIPLES:</span> <span className="text-white font-bold">{formData.values.length} NODES</span></p>
                        </div>
                    </div>
                )}
            </div>
        )}

        {/* CONTROLS */}
        <div className="pt-10 border-t border-white/20 flex justify-between items-center mt-auto relative z-10 p-6">
            {!isScanning && (
                <>
                    {step > 1 ? (
                        <button onClick={handleBack} className="text-zinc-500 font-black uppercase tracking-[0.5em] text-[10px] hover:text-white transition-colors">Abort // Back</button>
                    ) : <div className="text-[8px] font-mono text-zinc-600 tracking-widest">PROTOCOL_INIT_ID: PRIVATO-77X</div>}
                    
                    {step < 4 ? (
                        <button 
                            onClick={handleNext} 
                            disabled={step === 1 && (!formData.name || !formData.email)}
                            className="bg-[var(--color-lux-gold)] text-black px-12 py-5 font-black uppercase tracking-[0.5em] text-[11px] hover:bg-white transition-all shadow-gold-glow disabled:opacity-30 disabled:cursor-not-allowed rounded-sm"
                        >
                            Next Phase →
                        </button>
                    ) : (
                        <button onClick={handleSubmit} className="bg-white text-black px-12 py-5 font-black uppercase tracking-[0.5em] text-[11px] hover:bg-[var(--color-lux-gold)] transition-all shadow-3xl rounded-sm">
                            Transmit Packet
                        </button>
                    )}
                </>
            )}
        </div>
      </UrbanCard>
    </div>
  );
};

export default IntakePage;
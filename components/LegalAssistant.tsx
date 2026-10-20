import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { resolveAgent } from '../ai/agents';
import { FluxGate, MetatronGrid, HermeticSeal, SacredTriangle } from './EsotericIcons';

const VoiceWaveform: React.FC<{ isActive: boolean }> = ({ isActive }) => (
    <div className="flex items-center justify-center gap-[2px] h-6 w-12">
        {[...Array(8)].map((_, i) => (
            <div 
                key={i} 
                className={`w-[2px] bg-[var(--color-lux-gold)] transition-all duration-300 rounded-full ${isActive ? 'animate-waveform' : 'h-[2px] opacity-20'}`} 
                style={{ 
                    animationDelay: `${i * 0.1}s`,
                    height: isActive ? `${Math.random() * 100}%` : '2px'
                }}
            />
        ))}
        <style>{`
            @keyframes waveform { 0%, 100% { height: 10%; } 50% { height: 100%; } }
            .animate-waveform { animation: waveform 0.6s ease-in-out infinite; }
        `}</style>
    </div>
);

const LegalAssistant: React.FC = () => {
    const { pathname } = useLocation();
    const activeAgent = resolveAgent(pathname);
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ role: 'user' | 'lexicon' | 'tool', text: string }[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [activeTool, setActiveTool] = useState<{ type: 'FORM', data: any } | null>(null);
    const [connectionStatus, setConnectionStatus] = useState<'checking' | 'ready' | 'missing' | 'offline'>('checking');
    const [position, setPosition] = useState({ x: 40, y: 100 }); 
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    const scrollRef = useRef<HTMLDivElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages([]);
        setActiveTool(null);
    }, [activeAgent.id]);

    useEffect(() => {
        let mounted = true;
        fetch('/api/health')
            .then(response => response.json())
            .then(status => {
                if (mounted) setConnectionStatus(status.configured ? 'ready' : 'missing');
            })
            .catch(() => {
                if (mounted) setConnectionStatus('offline');
            });
        return () => { mounted = false; };
    }, []);

    const broadcastToTerminal = (msg: string, level: 'INFO' | 'WARN' | 'CRIT' | 'SYNC' = 'INFO') => {
        window.dispatchEvent(new CustomEvent('sys-log', { detail: { message: msg, origin: 'NEURAL', level } }));
    };

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;
        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsTyping(true);
        broadcastToTerminal(`${activeAgent.label}_HANDSHAKE_INITIATED...`, "SYNC");

        try {
            const response = await fetch('/api/agents/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    agentId: activeAgent.id,
                    messages: [
                        ...messages
                            .filter(message => message.role === 'user' || message.role === 'lexicon')
                            .map(message => ({ role: message.role === 'user' ? 'user' : 'assistant', content: message.text })),
                        { role: 'user', content: userMsg },
                    ],
                }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Agent request failed.');

            if (result.form) {
                setActiveTool({ type: 'FORM', data: result.form });
                setMessages(prev => [...prev, { role: 'tool', text: `PROTOCOL_INIT: ${result.form.formType}` }]);
                broadcastToTerminal(`FORM_TRIGGER: ${result.form.formType}`, "WARN");
            }
            setMessages(prev => [...prev, { role: 'lexicon', text: result.text || 'No response was returned.' }]);
            broadcastToTerminal(`${result.model} :: DATA_PACKET_RECEIVED`, "INFO");
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Agent request failed.';
            setMessages(prev => [...prev, { role: 'lexicon', text: `[ERROR] ${message}` }]);
            broadcastToTerminal("UPLINK_FAILURE", "CRIT");
        } finally {
            setIsTyping(false);
        }
    };

    const onMouseDown = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('button, input')) return;
        const rect = terminalRef.current?.getBoundingClientRect();
        if (!rect) return;
        setIsDragging(true);
        setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging) setPosition({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
    }, [isDragging, dragOffset]);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', () => setIsDragging(false));
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', () => setIsDragging(false));
        };
    }, [isDragging, onMouseMove]);

    return (
        <div className="fixed inset-0 z-[3000] pointer-events-none">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-10 left-10 w-16 h-16 bg-black border-2 border-[var(--color-lux-gold)] rounded-full flex items-center justify-center shadow-gold-glow z-[3001] pointer-events-auto transition-transform hover:scale-110 ${isOpen ? 'rotate-90' : ''}`}
            >
                <div className="absolute inset-0 bg-[var(--color-lux-gold)] opacity-10 animate-pulse rounded-full"></div>
                <MetatronGrid className="w-10 h-10 text-[var(--color-lux-gold)] relative z-10" />
            </button>

            <div 
                ref={terminalRef}
                style={{ left: position.x, top: position.y, position: 'absolute' }}
                className={`flex items-end gap-10 pointer-events-auto transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`}
            >
                <div className="w-[340px] h-[580px] flex flex-col obsidian-slab rounded-[40px] border-2 border-white/10 shadow-3xl overflow-hidden glass-monolith">
                    <div onMouseDown={onMouseDown} className="p-6 flex justify-between items-center bg-black/95 cursor-grab active:cursor-grabbing border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <HermeticSeal className="w-6 h-6 text-[var(--color-lux-gold)] animate-spin-slow" />
                            <h2 className="font-heading text-2xl text-white tracking-[0.4em] uppercase">LEXICON</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-[8px] text-zinc-500 tracking-widest">{activeAgent.label}</span>
                            <VoiceWaveform isActive={isTyping} />
                            <div
                                title={connectionStatus === 'ready' ? 'OpenRouter connected' : connectionStatus === 'missing' ? 'OpenRouter API key not configured' : connectionStatus === 'offline' ? 'Agent backend unavailable' : 'Checking agent backend'}
                                className={`w-2.5 h-2.5 rounded-full ${connectionStatus === 'ready' ? 'bg-green-500 shadow-[0_0_15px_green]' : connectionStatus === 'missing' ? 'bg-amber-500' : 'bg-red-500'}`}
                            />
                        </div>
                    </div>
                    <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 no-scrollbar bg-black/40">
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center opacity-5">
                                <MetatronGrid className="w-32 h-32 text-white mb-6 animate-pulse" />
                                <p className="font-mono text-[9px] tracking-[0.6em] uppercase text-center">Awaiting Command Input</p>
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <div key={i} className="animate-fade-in group">
                                <div className="font-mono text-[8px] mb-3 uppercase tracking-[0.8em] text-zinc-700 border-l border-zinc-800 pl-4 ml-1">{msg.role} //</div>
                                <div className={`text-sm ${msg.role === 'user' ? 'shimmer-gold font-heading text-2xl tracking-tight leading-none' : 'text-zinc-300 font-medium leading-relaxed'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && <div className="text-[9px] font-mono text-[var(--color-lux-gold)] animate-pulse tracking-[0.8em] text-center bg-white/5 py-4 rounded-2xl border border-white/5 font-black uppercase">[Streaming...]</div>}
                    </div>
                    
                    {/* INPUT SECTION INSIDE TERMINAL */}
                    <div className="p-4 border-t border-white/5 bg-black/60">
                         <div className="p-1 obsidian-slab rounded-full border border-white/10 flex items-center pr-4 shadow-inner">
                            <input 
                                value={input} 
                                onChange={e => setInput(e.target.value)} 
                                onKeyDown={e => e.key === 'Enter' && handleSend()} 
                                placeholder="UPLINK..." 
                                className="flex-grow bg-transparent px-6 py-4 text-white outline-none font-mono text-xs placeholder:text-zinc-800" 
                            />
                            <button onClick={handleSend} className="w-10 h-10 bg-[var(--color-lux-gold)] rounded-full flex items-center justify-center shadow-gold-glow hover:scale-110 active:scale-95 transition-all">
                                <FluxGate className="w-6 h-6 text-black" />
                            </button>
                        </div>
                    </div>
                </div>

                {activeTool && (
                    <div className="w-[360px] h-[580px] obsidian-slab border-2 border-[var(--color-lux-gold)]/40 rounded-[40px] overflow-hidden animate-slide-in-right flex flex-col glass-monolith">
                        <div className="p-6 flex justify-between items-center bg-black/95 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <SacredTriangle className="w-6 h-6 text-[var(--color-lux-gold)]" />
                                <span className="font-mono text-[10px] text-white tracking-widest uppercase font-black">Instrument_Vault</span>
                            </div>
                            <button onClick={() => setActiveTool(null)} className="text-zinc-600 hover:text-white hover:rotate-90 transition-all p-2 font-black">X</button>
                        </div>
                        <div className="p-10 flex flex-col flex-grow bg-black/40">
                             <div className="mb-12">
                                <h3 className="font-heading text-5xl text-white mb-3 uppercase tracking-tighter leading-none">{activeTool.data.formType.replace('_', ' ')}</h3>
                                <div className="h-[3px] w-16 bg-[var(--color-lux-gold)] shadow-gold-glow"></div>
                             </div>
                             <div className="space-y-10 flex-grow">
                                <div className="space-y-2">
                                    <label className="text-[8px] font-mono uppercase tracking-widest text-zinc-600 font-black">Entity_Reference //</label>
                                    <input placeholder="..." className="w-full bg-black/40 border-b border-white/10 p-4 text-white outline-none font-mono text-xs focus:border-[var(--color-lux-gold)] transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[8px] font-mono uppercase tracking-widest text-zinc-600 font-black">Jurisdiction_Lock //</label>
                                    <input placeholder="..." className="w-full bg-black/40 border-b border-white/10 p-4 text-white outline-none font-mono text-xs focus:border-[var(--color-lux-gold)] transition-colors" />
                                </div>
                                <button className="w-full py-7 bg-white text-black font-black text-[11px] tracking-[0.6em] uppercase mt-auto hover:bg-[var(--color-lux-gold)] transition-all shadow-3xl rounded-xl">Lock Directive</button>
                             </div>
                             <p className="mt-8 text-[8px] text-zinc-700 font-mono uppercase tracking-[0.5em] text-center font-black">Sovereign_Hash_Active</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LegalAssistant;
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FluxGate, MetatronGrid } from './EsotericIcons';

interface LogEntry {
  id: string;
  timestamp: string;
  origin: string;
  message: string;
  level: 'INFO' | 'WARN' | 'CRIT' | 'SYNC' | 'USER';
}

const SystemTerminal: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [cmdInput, setCmdInput] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addLog = (message: string, origin: string = 'KERNEL', level: LogEntry['level'] = 'INFO') => {
    const newLog: LogEntry = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString().slice(11, 19),
      origin,
      message,
      level
    };
    setLogs(prev => [...prev.slice(-99), newLog]);
  };

  useEffect(() => {
    // Listen for global site events
    const handleSysLog = (e: any) => {
        const { message, origin, level } = e.detail;
        addLog(message, origin, level);
    };

    window.addEventListener('sys-log', handleSysLog);

    const bootSequence = [
      "V_MACH_INIT :: sovereign_core.bin",
      "ALLOCATING_GNOSIS_BUFFERS ... [OK]",
      "MAPPING_JURISDICTIONAL_NODES ... [OK]",
      "PRIVATO_OS_READY // TYPE 'HELP' FOR COMMANDS"
    ];

    bootSequence.forEach((msg, i) => {
      setTimeout(() => addLog(msg, 'BOOT', i === 3 ? 'SYNC' : 'INFO'), i * 300);
    });

    return () => window.removeEventListener('sys-log', handleSysLog);
  }, []);

  useEffect(() => {
    addLog(`Vector shifted: ${location.pathname.toUpperCase()}`, 'ROUTER', 'SYNC');
  }, [location]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmdInput.trim()) return;

    const cmd = cmdInput.toLowerCase().trim();
    addLog(`> ${cmdInput}`, 'USER', 'USER');
    setCmdInput('');

    setTimeout(() => {
        switch(cmd) {
            case 'help':
                addLog("AVAILABLE COMMANDS: HELP, CLEAR, STATUS, SYSINFO, GOTO [PAGE], DECIPHER", 'SYSTEM', 'INFO');
                break;
            case 'clear':
                setLogs([]);
                break;
            case 'status':
                addLog("SYSTEM: OPTIMAL | UPLINK: ENCRYPTED | ENTROPY: 0.12%", 'KERNEL', 'SYNC');
                break;
            case 'sysinfo':
                addLog(`BROWSER: ${navigator.userAgent.slice(0, 40)}...`, 'HARDWARE');
                addLog(`RES: ${window.innerWidth}x${window.innerHeight}`, 'HARDWARE');
                addLog("ARCHITECTURE: PRIVATO_SOVEREIGN_V3", 'HARDWARE');
                break;
            case 'decipher':
                addLog("SCANNING DOM NODES for gnostic markers...", 'SECURITY', 'WARN');
                setTimeout(() => addLog("0x8C MARKERS FOUND. Decoding background sigils...", 'SECURITY', 'SYNC'), 1000);
                break;
            case cmd.startsWith('goto ') ? cmd : '---':
                const page = cmd.split(' ')[1];
                const validPages = ['intel', 'services', 'about', 'pricing', 'knowledge', 'intake'];
                if (validPages.includes(page)) {
                    addLog(`Redirecting to node: /${page}`, 'ROUTER', 'SYNC');
                    navigate(`/${page}`);
                } else {
                    addLog(`Node /${page} not found. Access denied.`, 'ROUTER', 'CRIT');
                }
                break;
            default:
                addLog(`Unknown command: '${cmd}'. Reference 'HELP' for manual.`, 'SYSTEM', 'CRIT');
        }
    }, 200);
  };

  return (
    <div 
        className={`fixed bottom-0 right-0 z-[2500] pointer-events-none transition-all duration-700 ease-[var(--ease-lux)] ${isExpanded ? 'w-full h-[45vh] md:w-[500px] md:h-[65vh] p-4' : 'w-52 h-10'}`}
    >
      <div 
        className={`w-full h-full bg-black/95 backdrop-blur-3xl border-l border-t border-white/10 flex flex-col pointer-events-auto shadow-3xl overflow-hidden ${isExpanded ? 'rounded-tl-[40px] border-[var(--color-lux-gold)]/20' : 'rounded-tl-2xl'}`}
      >
        <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between px-6 py-3 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[var(--color-lux-gold)] rounded-full animate-pulse shadow-gold-glow"></div>
            <span className="font-mono text-[9px] tracking-[0.4em] text-white font-black uppercase">S_CLI // PRIVATO_VM</span>
          </div>
          <div className="text-[10px] text-zinc-600 font-mono font-black">{isExpanded ? '[ _ ]' : '[ + ]'}</div>
        </div>

        {isExpanded && (
            <>
                <div 
                    ref={scrollRef}
                    className="flex-grow overflow-y-auto p-6 font-mono text-[10px] leading-relaxed space-y-1.5 no-scrollbar select-all bg-black/50"
                >
                    {logs.map(log => (
                        <div key={log.id} className="flex gap-4 group">
                            <span className="text-zinc-800 shrink-0 select-none">[{log.timestamp}]</span>
                            <span className={`shrink-0 font-black ${
                                log.level === 'CRIT' ? 'text-red-500' : 
                                log.level === 'WARN' ? 'text-[var(--color-lux-gold)]' : 
                                log.level === 'USER' ? 'text-white' : 
                                log.level === 'SYNC' ? 'text-blue-400' : 'text-zinc-600'
                            }`}>
                                {log.origin} >
                            </span>
                            <span className={`${log.level === 'USER' ? 'text-white' : 'text-zinc-400'} opacity-90 group-hover:opacity-100`}>
                                {log.message}
                            </span>
                        </div>
                    ))}
                </div>
                
                <form onSubmit={handleCommand} className="p-4 bg-black border-t border-white/10 flex items-center gap-3">
                    <span className="text-[var(--color-lux-gold)] font-mono text-xs font-black select-none">$</span>
                    <input 
                        ref={inputRef}
                        value={cmdInput}
                        onChange={(e) => setCmdInput(e.target.value)}
                        placeholder="INPUT_DIRECTIVE..."
                        className="flex-grow bg-transparent text-white font-mono text-xs outline-none placeholder:text-zinc-800"
                        autoFocus
                    />
                    <FluxGate className="w-4 h-4 text-zinc-800 animate-spin-slow" />
                </form>
            </>
        )}
      </div>
    </div>
  );
};

export default SystemTerminal;
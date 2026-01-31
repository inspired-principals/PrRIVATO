import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ToTopButton from './components/ToTopButton';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LegalAssistant from './components/LegalAssistant';
import SystemTerminal from './components/SystemTerminal';
import ScrollToTop from './components/ScrollToTop';
import BackgroundLayer from './components/BackgroundLayer';

import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import KnowledgePage from './pages/KnowledgePage';
import IntelPage from './pages/IntelPage';
import PostPage from './pages/PostPage';
import IntakePage from './pages/IntakePage';
import LegalPage from './pages/LegalPage';
import AuthorsPage from './pages/AuthorsPage';
import TagsPage from './pages/TagsPage';
import MembershipPage from './pages/MembershipPage';

import { HermeticSeal } from './components/EsotericIcons';

const BOOT_LOGS = [
    "INITIALIZING_KERNEL...",
    "LOADING_GNOSTIC_DRIVERS...",
    "DECRYPTING_ASSET_VAULT...",
    "ESTABLISHING_SECURE_UPLINK...",
    "VERIFYING_USER_AGENCY...",
    "MAPPING_JURISDICTIONAL_BOUNDARIES...",
    "PRIVATO_OS_V4.5 :: READY"
];

const RouteTransitionHandler: React.FC = () => {
    const location = useLocation();
    
    useEffect(() => {
        const sweep = document.getElementById('route-sweep');
        if (sweep) {
            sweep.classList.remove('active');
            void sweep.offsetWidth; // Trigger reflow
            sweep.classList.add('active');
        }
    }, [location]);

    return null;
};

const SystemBoot: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let currentLog = 0;
        
        const logInterval = setInterval(() => {
            if (currentLog < BOOT_LOGS.length) {
                setLogs(prev => [...prev, BOOT_LOGS[currentLog]]);
                currentLog++;
            }
        }, 400);

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        const finishTimeout = setTimeout(() => {
            onComplete();
        }, 3500);

        return () => {
            clearInterval(logInterval);
            clearInterval(progressInterval);
            clearTimeout(finishTimeout);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[10000] bg-[#000] flex flex-col items-center justify-center font-mono overflow-hidden">
            <div className="w-full max-w-lg px-8 relative">
                <div className="flex justify-center mb-12 relative">
                    <HermeticSeal className="w-24 h-24 text-[var(--color-lux-gold)] animate-[spin_4s_linear_infinite]" />
                    <div className="absolute inset-0 bg-[var(--color-lux-gold)] blur-[80px] opacity-20"></div>
                </div>

                <div className="w-full h-[2px] bg-zinc-900 mb-6 relative overflow-hidden">
                    <div 
                        className="absolute top-0 left-0 h-full bg-[var(--color-lux-gold)] shadow-[0_0_20px_var(--color-lux-gold)] transition-all duration-100 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="h-24 flex flex-col justify-end overflow-hidden">
                    {logs.map((log, i) => (
                        <div key={i} className="text-[10px] text-zinc-500 uppercase tracking-widest font-black animate-slide-up">
                            <span className="text-[var(--color-lux-gold)] mr-2">></span> {log}
                        </div>
                    ))}
                </div>

                <div className="absolute -bottom-20 left-0 w-full text-center">
                    <span className="text-[8px] text-zinc-800 uppercase tracking-[1em] animate-pulse">
                        System Integrity Verified
                    </span>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <RouteTransitionHandler />
      <CustomCursor />
      
      {!booted && <SystemBoot onComplete={() => setBooted(true)} />}

      <div className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${booted ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'}`}>
        <div className="text-[var(--color-lux-platinum)] bg-black min-h-screen relative selection:bg-[var(--color-lux-gold)] selection:text-black">
            <BackgroundLayer />
            
            <main className="pb-24 relative z-10">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/knowledge" element={<KnowledgePage />} />
                    <Route path="/intel" element={<IntelPage />} />
                    <Route path="/post/:slug" element={<PostPage />} />
                    <Route path="/authors" element={<AuthorsPage />} />
                    <Route path="/tags" element={<TagsPage />} />
                    <Route path="/membership" element={<MembershipPage />} />
                    <Route path="/intake" element={<IntakePage />} />
                    <Route path="/legal" element={<LegalPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>

            <Header />
            <Footer />
            <ToTopButton />
            <LegalAssistant />
            <SystemTerminal />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
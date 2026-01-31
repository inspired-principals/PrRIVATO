
import React, { useState, useEffect } from 'react';
import { ArrowIcon } from '../constants';

const ToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {isVisible && (
                <button 
                    onClick={scrollToTop} 
                    className="fixed bottom-12 right-12 w-14 h-14 bg-black border border-[var(--color-lux-gold)] text-[var(--color-lux-gold)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.2)] z-50 hover:bg-[var(--color-lux-gold)] hover:text-black transition-all"
                    aria-label="Scroll to top"
                >
                    <span className="w-6 h-6">
                       <ArrowIcon />
                    </span>
                </button>
            )}
        </>
    );
};

export default ToTopButton;

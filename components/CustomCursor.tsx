import React, { useEffect, useState, useCallback } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const onMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    useEffect(() => {
        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);
        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const addListeners = () => {
            document.querySelectorAll('a, button, input, textarea, [data-cursor="hover"], [data-gnosis]').forEach(el => {
                el.addEventListener('mouseenter', onMouseEnter);
                el.addEventListener('mouseleave', onMouseLeave);
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        addListeners();

        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            observer.disconnect();
        };
    }, [onMouseMove]);

    if (typeof window === 'undefined') return null;

    return (
        <div 
            className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
            style={{ 
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease'
            }}
        >
            {/* Precision Crosshair Center */}
            <div className={`absolute -translate-x-1/2 -translate-y-1/2 bg-[var(--color-lux-gold)] rounded-full transition-all duration-200 ease-out ${isClicking ? 'scale-75' : 'scale-100'} ${isHovering ? 'w-2 h-2 shadow-[0_0_15px_var(--color-lux-gold)]' : 'w-1 h-1'}`} />
            
            {/* Outer Instrument Ring */}
            <div 
                className={`absolute -translate-x-1/2 -translate-y-1/2 border border-[var(--color-lux-gold)] rounded-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isHovering ? 'w-14 h-14 opacity-100 border-2' : 'w-8 h-8 opacity-20'}`}
                style={{ transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})` }}
            />
            
            {/* Tactical Decals */}
            <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-[0.5px] bg-[var(--color-lux-gold)]/30 transition-all duration-700 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
            <div className={`absolute -translate-x-1/2 -translate-y-1/2 h-16 w-[0.5px] bg-[var(--color-lux-gold)]/30 transition-all duration-700 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>
    );
};

export default CustomCursor;
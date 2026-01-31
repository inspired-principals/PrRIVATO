
import React, { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  duration?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, duration = '30s' }) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap" style={{ animationDuration: duration }}>
        {children}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap" style={{ animationDuration: duration }}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;


import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center py-12 px-6">
      <h1 className="font-heading tracking-tighter leading-[0.8]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-zinc-400 mt-6 max-w-3xl mx-auto font-body font-bold uppercase tracking-widest text-[var(--font-size-sm)]">
          // {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;

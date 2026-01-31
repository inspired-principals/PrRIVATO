
import React from 'react';
import PageHeader from '../components/PageHeader';
import { tags } from '../data/mockData';
import UrbanCard from '../components/UrbanCard';
import { Link } from 'react-router-dom';

const TagsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <PageHeader title="FILTER // THE // NOISE" subtitle="Scan the frequency by topic." />

      <section className="py-20">
        <UrbanCard className="!bg-zinc-950/30 backdrop-blur-xl">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
            {tags.map((tag, i) => (
              <Link 
                key={tag.slug} 
                to={`/intel?category=${tag.slug}`} 
                className={`
                  group relative border border-white/5 p-6 font-heading hover:border-[var(--color-lux-gold)] transition-all rounded-[30px]
                  ${i % 3 === 0 ? 'text-4xl bg-white/5' : i % 2 === 0 ? 'text-6xl text-[var(--color-lux-gold)]' : 'text-5xl'}
                `}
              >
                <span>#{tag.name.toUpperCase()}</span>
                <span className="ml-4 opacity-20 group-hover:opacity-100 font-body font-black text-xs align-top">{tag.count}</span>
              </Link>
            ))}
          </div>
        </UrbanCard>
      </section>
      
      <div className="fixed bottom-10 left-10 font-heading text-[20vw] text-white/[0.02] -z-10 pointer-events-none uppercase">
        TAG // WALL
      </div>
    </div>
  );
};

export default TagsPage;

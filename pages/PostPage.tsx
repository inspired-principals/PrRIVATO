import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredPosts, recentPosts, technologyPosts, authors } from '../data/mockData';
import UrbanCard from '../components/UrbanCard';
import CrypticQuote from '../components/CrypticQuote';
import { SacredTriangle, FluxGate } from '../components/EsotericIcons';
import FrameWrapper from '../components/FrameWrapper';

const RedactedText: React.FC<{ children: string }> = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [scrambled, setScrambled] = useState('');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    useEffect(() => {
        if (!isHovered) {
            setScrambled(children.split('').map(() => '█').join(''));
        } else {
            let iteration = 0;
            const interval = setInterval(() => {
                setScrambled(children.split('').map((char, index) => {
                    if (index < iteration) return children[index];
                    if (char === ' ') return ' ';
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join(''));
                
                iteration += 1 / 3;
                if (iteration >= children.length) clearInterval(interval);
            }, 30);
            return () => clearInterval(interval);
        }
    }, [isHovered, children]);

    return (
        <span 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative inline-block cursor-help group mx-1"
        >
            <span className={`bg-black text-[var(--color-lux-gold)] transition-all duration-500 font-mono px-1 ${isHovered ? 'bg-zinc-900/50' : ''}`}>
                {scrambled}
            </span>
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[var(--color-lux-gold)] text-black text-[7px] font-black px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-widest uppercase z-50">
                // AUTH_REQUIRED_LVL_5
            </span>
        </span>
    );
};

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [author, setAuthor] = useState<any | null>(null);

  useEffect(() => {
    const allPosts = [...featuredPosts, ...recentPosts, ...technologyPosts];
    const foundPost = allPosts.find(p => p.slug === slug);
    setPost(foundPost);

    if (foundPost) {
        const foundAuthor = authors.find(a => a.id === foundPost.authorId) || authors[0];
        setAuthor(foundAuthor);
    }
  }, [slug]);

  if (!post || !author) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-heading text-6xl text-zinc-800 mb-4 tracking-tighter">404 // MISSING</h1>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">The requested intelligence packet could not be located.</p>
            <Link to="/intel" className="mt-8 text-[var(--color-lux-gold)] font-black uppercase tracking-widest text-xs hover:underline">Return to Intel Feed</Link>
        </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24 pt-32 animate-fade-in">
       
       <FrameWrapper className="border-b-2 border-white/10 pb-12 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <FluxGate className="w-64 h-64 animate-[spin_60s_linear_infinite]" />
            </div>

            <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="border-2 border-[var(--color-lux-gold)] text-[var(--color-lux-gold)] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        EYES ONLY // CLASSIFIED
                    </div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <div className="text-zinc-500 font-mono text-[9px] text-right tracking-widest uppercase space-y-1">
                    <div className="text-white">DOC_REF: {slug?.toUpperCase()}</div>
                    <div>TIMESTAMP: {post.date} // 11:24:08 UTC</div>
                    <div className="text-[var(--color-lux-gold)]">STATUS: DECRYPTED</div>
                </div>
            </div>

            <h1 className="font-heading text-[clamp(2.5rem,6vw,6rem)] leading-[0.85] text-white tracking-tighter max-w-4xl uppercase mb-10 drop-shadow-3xl">
                {post.title}
            </h1>

            <div className="flex items-center gap-8 relative z-10">
                 <div className="w-14 h-14 bg-zinc-900 rounded-full overflow-hidden border-2 border-[var(--color-lux-gold)]/40 group">
                     <img src={author.imageUrl} alt={author.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                 </div>
                 <div>
                     <div className="text-[9px] text-zinc-600 uppercase tracking-[0.4em] font-black mb-1">Dossier Authorized By //</div>
                     <div className="font-heading text-white text-2xl leading-none tracking-tight">{author.name}</div>
                     <div className="text-[10px] text-[var(--color-lux-gold)] font-mono uppercase tracking-widest opacity-60">{author.title}</div>
                 </div>
            </div>
       </FrameWrapper>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
                <FrameWrapper className="mb-14">
                    <CrypticQuote 
                        text="This dossier contains highly sensitive structural intelligence. Information is sovereignty. Discretion is absolute."
                        author="Protocol Overseer"
                        revealSpeed={15}
                        className="!text-zinc-400 !text-sm border-l-2 border-[var(--color-lux-gold)]/20 pl-8 py-4 bg-white/[0.02]"
                    />
                </FrameWrapper>

                <FrameWrapper className="relative mb-16 group overflow-hidden border-2 border-white/5 rounded-sm shadow-2xl">
                    <img src={post.imageUrl || 'https://picsum.photos/1200/800'} alt={post.title} className="w-full aspect-video object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                        <div className="w-3 h-3 bg-[var(--color-lux-gold)] rounded-full animate-pulse shadow-gold-glow"></div>
                        <span className="font-mono text-[9px] text-white tracking-[0.5em] uppercase font-black bg-black/60 px-3 py-1 backdrop-blur-md border border-white/10">Sector_Visual_Log_v.08</span>
                    </div>
                </FrameWrapper>

                <FrameWrapper className="prose prose-invert prose-lg max-w-none font-body text-zinc-300 leading-relaxed">
                    <p className="first-letter:text-6xl first-letter:font-heading first-letter:mr-3 first-letter:float-left first-letter:text-[var(--color-lux-gold)] first-letter:leading-none">
                        Sovereignty is not a destination; it is a discipline. In the current regulatory environment, the separation between personal capacity and legal personhood is the single most important distinction an individual can make. 
                    </p>
                    <p>
                        By utilizing <span className="text-white font-black underline decoration-[var(--color-lux-gold)] underline-offset-4">Private Membership Associations</span> and <span className="text-white font-black underline decoration-white/40 underline-offset-4">Express Trusts</span>, we effectively move the venue of our interactions from the public, statutory jurisdiction to the private, contractual jurisdiction.
                    </p>

                    <h3 className="font-heading text-4xl text-white mt-16 mb-8 uppercase tracking-tight">The Mechanism of Action</h3>
                    <p>
                        Public law governs the "Public". Private law governs the "Private". This tautology is the key. When you contract with another individual in private, the state's role is relegated to enforcing that contract, not dictating its terms (provided no harm is caused).
                    </p>
                    
                    <div className="my-16 p-10 border-2 border-white/10 relative obsidian-slab overflow-hidden">
                        <SacredTriangle className="absolute -right-4 -bottom-4 w-40 h-40 text-white opacity-[0.03] pointer-events-none" />
                        <h4 className="font-heading text-2xl text-[var(--color-lux-gold)] mb-6 tracking-tight uppercase">TACTICAL ANALYSIS //</h4>
                        <p className="font-mono text-xs text-zinc-400 italic leading-loose">
                            "Do not ask for permission to exercise a right. To ask is to confess that you do not have it. The state's power ends where your private contract begins. This is the bedrock of the Privato architecture."
                        </p>
                    </div>

                    <p>
                        Implementation requires a rigorous three-phase protocol to ensure maximum firewall integrity:
                    </p>
                    <ul className="list-none pl-0 space-y-6 my-10">
                        <li className="flex gap-6 items-start group">
                            <span className="font-heading text-4xl text-[var(--color-lux-gold)] opacity-30 group-hover:opacity-100 transition-opacity">01</span>
                            <div>
                                <div className="font-heading text-xl text-white uppercase tracking-tight mb-1">DECLARATION OF INTENT</div>
                                <div className="text-sm font-body text-zinc-500">Establish the gnostic foundation through a foundational deed or private charter. This is the "Spiritual Sovereign" layer.</div>
                            </div>
                        </li>
                        <li className="flex gap-6 items-start group">
                            <span className="font-heading text-4xl text-white opacity-30 group-hover:opacity-100 transition-opacity">02</span>
                            <div>
                                <div className="font-heading text-xl text-white uppercase tracking-tight mb-1">NOTICE OF JURISDICTION</div>
                                <div className="text-sm font-body text-zinc-500">Construct a formal record of private capacity. This notice establishes the venue and boundaries of future interactions.</div>
                            </div>
                        </li>
                        <li className="flex gap-6 items-start group">
                            <span className="font-heading text-4xl text-[var(--color-lux-gold)] opacity-30 group-hover:opacity-100 transition-opacity">03</span>
                            <div>
                                <div className="font-heading text-xl text-white uppercase tracking-tight mb-1">OPERATIONAL DISCIPLINE</div>
                                <div className="text-sm font-body text-zinc-500">Conducting all affairs strictly through the new entity. Never commingling personal and private liability. Absolute hygiene required.</div>
                            </div>
                        </li>
                    </ul>
                    
                    <div className="bg-zinc-950 p-8 border border-white/10 rounded-sm my-12">
                        <p className="font-body text-sm">
                            Access to the <RedactedText>OFFSHORE_RESERVE_SWIFT</RedactedText> banking interfaces is strictly limited to 
                            <RedactedText>LEVEL_9_INITIATES</RedactedText> with a verified <RedactedText>GNOSIS_KEY</RedactedText>. 
                            The current <RedactedText>JURISDICTIONAL_HASH</RedactedText> for the Canadian sector is <RedactedText>0x8C_ALPHA_PRIME</RedactedText>.
                            Contact your regional architect for secure uplink to the <RedactedText>PRIVATE_LEDGER</RedactedText>.
                        </p>
                    </div>
                </FrameWrapper>

                <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
                     <Link to="/intel" className="group/nav flex items-center gap-4 text-zinc-500 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-all">
                         <span className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover/nav:border-[var(--color-lux-gold)] transition-all">←</span>
                         RETURN TO INTEL FEED
                     </Link>
                     <div className="font-heading text-3xl text-zinc-800 tracking-tighter uppercase opacity-40 select-none">
                         PRIVATO // DATA_STREAM_EVAL // END
                     </div>
                </div>
            </div>

            <div className="lg:col-span-4 space-y-10">
                <UrbanCard className="!bg-[#050505] sticky top-32 border border-white/10 shadow-3xl" id="post-sidebar">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                        <div className="w-2.5 h-2.5 bg-[var(--color-lux-gold)] rounded-full animate-pulse shadow-gold-glow"></div>
                        <h3 className="font-heading text-2xl text-white tracking-tight uppercase">RELATED INTEL</h3>
                    </div>
                    <div className="space-y-8">
                        {featuredPosts.slice(0, 3).filter(p => p.slug !== slug).map((fp, i) => (
                            <Link to={`/post/${fp.slug}`} key={i} className="block group border-b border-white/5 pb-8 last:border-0 hover:pl-2 transition-all duration-500">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--color-lux-gold)] group-hover:text-white transition-colors">{fp.category}</div>
                                    <div className="text-[8px] font-mono text-zinc-700">{fp.date}</div>
                                </div>
                                <div className="font-heading text-xl text-zinc-300 group-hover:text-white transition-colors leading-tight tracking-tight uppercase">
                                    {fp.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Link to="/intake" className="block mt-12 w-full py-5 bg-[var(--color-lux-gold)] text-black text-center font-black text-xs uppercase tracking-[0.6em] hover:bg-white transition-all shadow-2xl relative overflow-hidden group/btn">
                        <span className="relative z-10">Execute Strategy</span>
                        <div className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 opacity-10"></div>
                    </Link>
                </UrbanCard>

                <div className="p-8 border-2 border-dashed border-white/10 rounded-sm opacity-50 group hover:opacity-100 transition-opacity">
                    <h5 className="font-mono text-[10px] text-white uppercase tracking-[0.4em] mb-4 font-black">Advisory Notice //</h5>
                    <p className="font-body text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest font-bold">
                        Distribution of this material without Level 4 clearance is a breach of Private Association protocols. Traceable identifiers embedded.
                    </p>
                </div>
            </div>

       </div>
    </div>
  );
};

export default PostPage;
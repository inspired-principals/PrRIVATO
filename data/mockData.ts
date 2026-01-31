import { Post, Tag, Author } from '../types';

// AUTHORS - THE ARCHITECTS
export const authors: Author[] = [
    { id: '1', name: 'A. R. VANCE', title: 'Lead Architect', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', bio: 'Specialist in private trust structures and unincorporated associations. Designing the exit from public jurisdiction.', slug: 'ar-vance' },
    { id: '2', name: 'ELIAS THORN', title: 'Strategy Director', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d', bio: 'Expert in conflict resolution and private arbitration systems. Keeping families out of court since 2012.', slug: 'elias-thorn' },
    { id: '3', name: 'SARAH K.', title: 'Asset Steward', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d', bio: 'Focuses on multi-generational wealth preservation and privacy protocols for high-net-worth clans.', slug: 'sarah-k' },
];

// TAGS - THE INDEX
export const tags: Tag[] = [
    { name: 'Sovereignty', slug: 'sovereignty', count: 12 },
    { name: 'Trust Law', slug: 'trust-law', count: 8 },
    { name: 'Private Association', slug: 'pma', count: 15 },
    { name: 'Asset Protection', slug: 'asset-protection', count: 10 },
    { name: 'Governance', slug: 'governance', count: 7 },
    { name: 'Strategy', slug: 'strategy', count: 9 },
];

// POSTS - THE INTEL
export const featuredPosts: Post[] = [
  { 
    id: 'f-01', 
    title: 'The Bare Trust Protocol: Separating Title from Truth', 
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', 
    category: 'Trust Law', 
    date: '2025.04.12', 
    slug: 'bare-trust-protocol',
    authorId: '1'
  },
  { 
    id: 'f-02', 
    title: 'Escaping the Public Venue: Why Arbitration Wins', 
    imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop', 
    category: 'Strategy', 
    date: '2025.04.10', 
    slug: 'escaping-public-venue',
    authorId: '2'
  },
  { 
    id: 'f-03', 
    title: 'The Private Membership Association (PMA) Handbook', 
    imageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop', 
    category: 'Private Association', 
    date: '2025.04.08', 
    slug: 'pma-handbook',
    authorId: '1'
  },
  { 
    id: 'f-04', 
    title: 'Digital Sovereignty: Encrypted Comms for Clans', 
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop', 
    category: 'Governance', 
    date: '2025.04.05', 
    slug: 'digital-sovereignty',
    authorId: '3'
  },
];

export const recentPosts: Post[] = [
    { 
        id: 'r-01', 
        title: 'Heirloom Archives: Preserving More Than Money', 
        imageUrl: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2067&auto=format&fit=crop', 
        category: 'Asset Protection', 
        date: '2025.03.28', 
        slug: 'heirloom-archives',
        authorId: '3'
    },
    { 
        id: 'r-02', 
        title: 'The "Person" vs. The Man: A Legal Distinction', 
        imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop', 
        category: 'Sovereignty', 
        date: '2025.03.25', 
        slug: 'person-vs-man',
        authorId: '1'
    },
    { 
        id: 'r-03', 
        title: 'Notice of Liability: When to Use It', 
        imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop', 
        category: 'Strategy', 
        date: '2025.03.20', 
        slug: 'notice-of-liability',
        authorId: '2'
    },
    { 
        id: 'r-04', 
        title: 'Jurisdictional Arbitrage: Multi-State Trusts', 
        imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2070&auto=format&fit=crop', 
        category: 'Trust Law', 
        date: '2025.03.15', 
        slug: 'jurisdictional-arbitrage',
        authorId: '1'
    }
];

export const technologyPosts: Post[] = [
    { id: 't-01', title: 'Smart Contracts in Private Governance', imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop', category: 'Future Law', date: '2025.03.15', slug: 'smart-contracts', authorId: '2' },
    { id: 't-02', title: 'Bitcoin as a Treasury Reserve for Clans', imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop', category: 'Assets', date: '2025.03.10', slug: 'bitcoin-treasury', authorId: '3' },
];

// Legacy arrays mapped to new context
export const healthPosts = recentPosts;
export const lifestylePosts = featuredPosts;
export const naturePosts = featuredPosts;
export const travelPosts = recentPosts;
export const foodPosts = technologyPosts;
export const tickerPosts = featuredPosts;
export const wellnessPosts = recentPosts;
export const fashionPosts = technologyPosts;
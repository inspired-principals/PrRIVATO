
import React from 'react';

// Define common props for icons to ensure consistent type support
interface IconProps {
    className?: string;
}

// Fix: Removed 'enableBackground' as it is a non-standard/deprecated property in React CSSProperties
export const PlusIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`fn__svg ${className || ''}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xmlSpace="preserve">
        <g>
            <g><rect y="50" width="120" height="20"></rect></g>
            <g><rect x="50" width="20" height="120"></rect></g>
        </g>
        <g>
            <g><rect x="50" y="0" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -24.8528 60)" width="20" height="120"></rect></g>
            <g><rect x="0" y="50" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -24.8528 60)" width="120" height="20"></rect></g>
        </g>
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`fn__svg ${className || ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

export const ArrowIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={`fn__svg ${className || ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
);

// Social Icons - Updated to accept className to resolve "IntrinsicAttributes" errors in Footer mapping
export const FacebookIcon: React.FC<IconProps> = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>);
export const XIcon: React.FC<IconProps> = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>);
export const InstagramIcon: React.FC<IconProps> = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12 15a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"></path><path d="M4.5 3.5h15v17h-15z"></path></svg>);
export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.12c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.42h-.5c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.9 2.4 1.02 2.56c.12.17 1.76 2.68 4.27 3.77.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z"></path></svg>);
export const DiscordIcon: React.FC<IconProps> = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.62c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.092zm-4.632 14.652c0 .816-.672 1.488-1.5 1.488s-1.5-.672-1.5-1.488v-5.064c0-.816.672-1.488 1.5-1.488s1.5.672 1.5 1.488v5.064zm-6.024 0c0 .816-.672 1.488-1.5 1.488s-1.5-.672-1.5-1.488v-5.064c0-.816.672-1.488 1.5-1.488s1.5.672 1.5 1.488v5.064z"></path></svg>);
export const PinterestIcon: React.FC<IconProps> = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.635 7.855 6.356 9.312-.084-.6-.162-1.5.016-2.28.18-1.22.952-4.22 1.168-5.112.216-.896-.06-1.788-.588-2.484-1.044-1.392-1.02-3.42.228-4.476 1.2-1.008 2.94-0.192 2.94 1.416 0 1.2-.66 2.868-1.008 4.452-.288 1.308.648 2.364 1.932 2.364 2.292 0 3.768-3 3.768-6.552 0-2.7-1.92-4.692-5.028-4.692-3.42 0-5.4 2.568-5.4 5.232 0 1.032.372 2.148-.168 2.844-.12.18-.384.48-.456.636-.084.18-.324.72-.036.96.252.228.456.324.672.252.924-.108 1.524-.96 1.836-1.8.18-.468.324-1.02.324-1.5 0-1.08-.432-1.944-1.428-1.944-1.2 0-2.112 1.236-2.112 2.82 0 1.14.612 2.328 1.44 2.328.288 0 .588-.168.672-.348.168-.324.384-1.008.432-1.188.084-.336.144-.6.288-.864.192-.36.564-.672.996-.672 1.32 0 2.22 1.392 2.22 3.336 0 1.98-1.2 3.552-2.928 3.552-.948 0-1.836-.552-2.16-1.188-.12-.228-.084-.468.084-.696.168-.228.324-.396.396-.564.264-.6.072-1.176-.228-1.776-1.044-2.124-1.26-4.512-.516-6.6 1.32-3.6 4.392-5.916 8.352-5.916 4.476 0 7.332 3.288 7.332 7.02 0 4.128-2.58 7.392-6.24 7.392-1.2 0-2.316-.636-2.7-1.38z"></path></svg>);

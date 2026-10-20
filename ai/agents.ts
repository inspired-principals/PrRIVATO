export const FREE_MODELS = [
  { id: 'minimax/minimax-m3.1-flash:free', name: 'MiniMax M3.1 Flash' },
  { id: 'google/gemma-4-31b-it:free', name: 'Gemma 4 31B' },
  { id: 'nvidia/nemotron-3-super-120b-a12b:free', name: 'NVIDIA Nemotron 3 Super' },
];

export const AI_AGENTS = [
  {
    id: 'intake',
    label: 'INTAKE GUIDE',
    routes: ['/intake', '/contact'],
    prompt: 'You are the Intake Guide. Help users understand intake steps, organize information, and prepare administrative documents. Ask concise clarifying questions. Do not claim to be a lawyer or provide legal advice.',
  },
  {
    id: 'research',
    label: 'RESEARCH GUIDE',
    routes: ['/knowledge', '/intel', '/post'],
    prompt: 'You are the Research Guide. Explain educational material clearly, distinguish established facts from claims, and note when jurisdiction or current primary sources matter. Do not present legal conclusions as advice.',
  },
  {
    id: 'services',
    label: 'SERVICE GUIDE',
    routes: ['/services', '/pricing', '/membership'],
    prompt: 'You are the Service Guide. Help users compare the services, pricing, and membership options described on this site. Be factual, avoid promises of legal or financial outcomes, and guide them to intake for next steps.',
  },
  {
    id: 'general',
    label: 'GENERAL GUIDE',
    routes: [],
    prompt: 'You are the General Guide for this site. Answer questions about its pages and offerings helpfully. Be clear that this is educational and administrative support, not legal advice.',
  },
];

export const resolveAgent = (pathname: string) =>
  AI_AGENTS.find(agent => agent.routes.some(route => pathname === route || pathname.startsWith(`${route}/`)))
  ?? AI_AGENTS[AI_AGENTS.length - 1];
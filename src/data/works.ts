import imgChemQuest from '../assets/images/chemquest.png';
import imgTsukiai from '../assets/images/tsukiai.png';
import oozebirImg from '../assets/images/oozebir.png';
import cscprepImg from '../assets/images/cscprep.png';

export type WorkExperience = {
  year: string;
  role: string;
  place: string;
  summary: string;
  highlights: string[];
};

export type WorkProject = {
  id: string;
  year: string;
  title: string;
  line2: string;
  category: string;
  des: string;
  img: string;
  stack: string[];
  status?: string;
  hoursSpent?: string;
  timeline?: { label: string; detail: string }[];
  links?: { label: string; url: string; type: 'github' | 'drive' | 'live' }[];
};

export const experience: WorkExperience[] = [
  {
    year: '2025-2026',
    role: 'Full-Stack Developer Intern',
    place: 'BILT Information Technology Solutions, Villa iloilo',
    summary:
      'Designed and built two full-stack React dashboards with secure authentication (including 2FA). Developed a Node.js backend serving 15+ RESTful endpoints, integrated Supabase PostgreSQL with Row Level Security, and automated client reporting pipelines that process email-to-CSV workflows. \n Converted Figma designs into responsive, production-ready websites for 4 clients using Kajabi and custom CSS/JavaScript implementations, ensuring pixel-perfect fidelity and optimal performance.',
    highlights: ['React', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
  },
];

export const projects: WorkProject[] = [
  {
    id: '01',
    year: '2024-2025',
    title: 'ChemQuest',
    line2: 'EDUCATIONAL MOBILE RPG',
    category: 'GAMES',
    des: 'Designed and built a story-driven chemistry RPG in Godot 4.6 for Android. Implemented JSON-driven quests and NPC dialogue, a modular autoload architecture, and a save system that restores full scene + lesson progress. Includes interactive mini-games teaching elements, compounds, density, and states of matter.',
    img: imgChemQuest,
    stack: ['Godot 4.6', 'GDScript', 'Android', 'JSON'],
    links: [
      { label: 'Google Drive', url: 'https://drive.google.com/file/d/1DcR2BbWSssGNkvtVhNa-P65hFhzOb3RD/view?usp=drive_link', type: 'drive' },
      { label: 'v1.0.0 Release', url: 'https://github.com/EN-rain/ChemQuest/releases/tag/v1.0.0', type: 'github' },
    ],
  },
  {
    id: '02',
    year: '2025-Present',
    title: 'TSUKIAI',
    line2: 'VOICE CHAT + DISCORD BRIDGE',
    category: 'AI / VOICE',
    des: 'Built a Windows desktop voice assistant featuring real-time voice interaction. Includes a local ASP.NET Core API, multi-LLM provider routing, ChromaDB semantic memory, and a Node.js Discord bridge with voice activity detection for natural turn-taking and low-latency playback.',
    img: imgTsukiai,
    stack: ['C# / .NET 8', 'WPF', 'ASP.NET Core', 'Node.js', 'discord.js', 'ChromaDB'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/TsukiAI-Desktop/graphs/contributors', type: 'github' }],
  },
  {
    id: '03',
    year: '2026-Present',
    title: 'Oozeborne',
    line2: 'ONLINE MULTIPLAYER + NAKAMA BACKEND',
    category: 'GAMES / MULTIPLAYER (In Development)',
    des: '[WIP] Developed a real-time multiplayer game in Godot 4.6 backed by a Dockerized Nakama + CockroachDB server. Features email authentication, room-code lobbies with chat and class selection, and an authoritative Lua match loop with client-side prediction, interpolation, and state reconciliation.',
    img: oozebirImg,
    stack: ['Godot 4.6', 'GDScript', 'Nakama', 'Lua', 'Docker', 'CockroachDB', 'WebSockets'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/Oozeborne', type: 'github' }],
    status: 'On development',
  },
  {
    id: '04',
    year: '2026-Present',
    title: 'Type Duel',
    line2: 'COMPETITIVE TYPING DUEL (MVP)',
    category: 'GAMES / MULTIPLAYER',
    des: 'Built a competitive 2D pixel typing duel in Godot with a Node.js backend. Players can register, queue into matchmaking or custom rooms, choose a character loadout, and fight through round-based typing battles driven by speed, accuracy, mana, active skills, passive effects, and rematches.',
    img: '',
    stack: ['Godot 4.6', 'GDScript', 'Node.js', 'Express', 'SQLite', 'Socket.IO', 'WebSockets'],
    links: [
      { label: 'GitHub', url: 'https://github.com/EN-rain/TypeDuel', type: 'github' },
      { label: 'v1.0.0 Release', url: 'https://github.com/EN-rain/TypeDuel/releases/tag/v1.0.0', type: 'github' },
    ],
    status: 'MVP',
  },
  {
    id: '05',
    year: '2026-Present',
    title: 'CSCprep',
    line2: 'CIVIL SERVICE EXAM REVIEWER',
    category: 'WEB / EDUCATION',
    des: 'Built a React + Vite reviewer app for Philippine Civil Service Exam practice. Features randomized and subject-specific exams, a 1-hour timed mode, answer review with correct/wrong filtering, skipped-item confirmations, and a 716-question bank extracted and verified from official CSC PDFs.',
    img: cscprepImg,
    stack: ['React 19', 'TypeScript', 'Vite', 'Lenis'],
    links: [
      { label: 'GitHub', url: 'https://github.com/EN-rain/CSCprep', type: 'github' },
      { label: 'Live Site', url: 'https://cs-cprep.vercel.app', type: 'live' },
    ],
  },
];

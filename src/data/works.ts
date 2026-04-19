import imgNeon from '../assets/images/projects/optimized/desktop_workspace.jpg';
import imgSignal from '../assets/images/projects/optimized/electronic_office_dualscreen.jpg';
import imgAtlas from '../assets/images/projects/optimized/minimalist_monitors.jpg';

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
};

export const experience: WorkExperience[] = [
  {
    year: '2025-2026',
    role: 'Full-Stack Developer Intern',
    place: 'Acme Solutions Inc.',
    summary:
      'Designed and built two full-stack React dashboards with secure authentication (including 2FA). Developed a Node.js backend serving 15+ RESTful endpoints, integrated Supabase PostgreSQL with Row Level Security, and automated client reporting pipelines using n8n that process email-to-CSV workflows. \n Converted Figma designs into responsive, production-ready websites for 4 clients using Kajabi and custom CSS/JavaScript implementations, ensuring pixel-perfect fidelity and optimal performance.',
    highlights: ['React', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'n8n', 'TypeScript', 'Tailwind CSS'],
  },
];

export const projects: WorkProject[] = [
  {
    id: '01',
    year: '2023-2024',
    title: 'ChemQuest',
    line2: 'EDUCATIONAL MOBILE RPG',
    category: 'GAMES',
    des: 'Designed and built a story-driven chemistry RPG in Godot 4.6 for Android. Implemented JSON-driven quests and NPC dialogue, a modular autoload architecture, and a save system that restores full scene + lesson progress. Includes interactive mini-games teaching elements, compounds, density, and states of matter.',
    img: imgAtlas,
    stack: ['Godot 4.6', 'GDScript', 'Android', 'JSON'],
  },
  {
    id: '02',
    year: '2025-Present',
    title: 'TSUKIAI',
    line2: 'VOICE CHAT + DISCORD BRIDGE',
    category: 'AI / VOICE',
    des: 'Built a Windows desktop voice assistant featuring real-time voice interaction. Includes a local ASP.NET Core API, multi-LLM provider routing, ChromaDB semantic memory, and a Node.js Discord bridge with voice activity detection for natural turn-taking and low-latency playback.',
    img: imgNeon,
    stack: ['C# / .NET 8', 'WPF', 'ASP.NET Core', 'Node.js', 'discord.js', 'ChromaDB'],
  },
  {
    id: '03',
    year: '2026-Present',
    title: 'Oozeborne',
    line2: 'ONLINE MULTIPLAYER + NAKAMA BACKEND',
    category: 'GAMES / MULTIPLAYER (In Development)',
    des: '[WIP] Developed a real-time multiplayer game in Godot 4.6 backed by a Dockerized Nakama + CockroachDB server. Features email authentication, room-code lobbies with chat and class selection, and an authoritative Lua match loop with client-side prediction, interpolation, and state reconciliation.',
    img: imgSignal,
    stack: ['Godot 4.6', 'GDScript', 'Nakama', 'Lua', 'Docker', 'CockroachDB', 'WebSockets'],
  },
];


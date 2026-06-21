import imgChemQuest from '../assets/images/chemquest.png';
import imgTsukiai from '../assets/images/tsukiai.png';
import oozebirImg from '../assets/images/oozebir.png';
import cscprepImg from '../assets/images/Screenshot 2026-06-10 152807.png';
import cacheMeOutImg from '../assets/images/cachemeoutside.png';
import chemQuestIcon from '../assets/images/chemques-icon.svg';
import typeDuelIcon from '../assets/images/type-duel-logo.png';
import cashMeOutIcon from '../assets/images/cash-me-outside-logo.png';
import studentFlowIcon from '../assets/images/studentflow-logo.png';
import studentFlowBackground from '../assets/images/studentflow-bg.png';
import pocketTradeIcon from '../assets/images/pockettrade-icon.png';
import pocketTradeBackground from '../assets/images/pockettrade-bg.png';
import oozeborneIcon from '../assets/images/oozeborne-logo.png';
import cscprepIcon from '../assets/images/cscprep-logo.png';

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
  icon?: string;
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
    category: 'GAMES / EDUCATION',
    des: 'ChemQuest is a Godot 4.6 chemistry-learning game for Android. It uses scene-based activities, JSON quest and dialogue data, and a local save file for the current scene, spawn point, quest state, feedback state, and lesson progress. Topics include elements, compounds, mixtures, accuracy and precision, density, and states of matter.',
    img: imgChemQuest,
    icon: chemQuestIcon,
    stack: ['Godot 4.6', 'GDScript', 'Android', 'JSON'],
    links: [
      { label: 'GitHub', url: 'https://github.com/EN-rain/ChemQuest', type: 'github' },
      { label: 'Google Drive', url: 'https://drive.google.com/file/d/1DcR2BbWSssGNkvtVhNa-P65hFhzOb3RD/view?usp=drive_link', type: 'drive' },
      { label: 'v1.0.0 Release', url: 'https://github.com/EN-rain/ChemQuest/releases/tag/v1.0.0', type: 'github' },
    ],
  },
  {
    id: '02',
    year: '2024-2025',
    title: 'StudentFlow',
    line2: 'STUDENT & CLASSROOM MANAGEMENT PLATFORM',
    category: 'WEB / MOBILE / EDUCATION',
    des: 'StudentFlow is a Laravel 12 student management system with a Blade web app, REST API, and native Java Android client. It includes role-based routes for classes, enrollment, attendance, grade categories and items, assignments, announcements, exams, reports, activity logs, and school settings.',
    img: studentFlowBackground,
    icon: studentFlowIcon,
    stack: ['Laravel 12', 'PHP 8.2', 'Blade', 'Java 17', 'XML', 'Retrofit', 'Sanctum', 'SQLite', 'Dompdf', 'Docker'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/StudentFLow', type: 'github' }],
  },
  {
    id: '03',
    year: '2025-2026',
    title: 'TSUKIAI',
    line2: 'WINDOWS VOICE APP + DISCORD BRIDGE',
    category: 'AI / VOICE',
    des: 'TsukiAI is a .NET 8 WPF voice application for Windows. It connects speech-to-text, configurable model inference, and text-to-speech services, exposes a local ASP.NET Core API, and includes a Node.js Discord voice bridge. NAudio handles desktop audio and Polly provides retry and resilience support.',
    img: imgTsukiai,
    stack: ['C#', '.NET 8', 'WPF', 'ASP.NET Core', 'NAudio', 'Polly', 'SQLite', 'Node.js', 'discord.js'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/TsukiAI-Desktop', type: 'github' }],
  },
  {
    id: '04',
    year: '2026-Present',
    title: 'Oozeborne',
    line2: 'CO-OP SURVIVORS GAME + CUSTOM BACKEND',
    category: 'GAMES / MULTIPLAYER (IN DEVELOPMENT)',
    des: 'Oozeborne is an in-development Godot 4.6 co-op survivors game. Its current Moon Server backend uses a Go WebSocket game server, a Node.js and Express lobby API, PostgreSQL, Redis, and a Next.js administration portal under Docker Compose. The game code includes classes, skills, status effects, leveling, coins, shops, and multiplayer state handling.',
    img: oozebirImg,
    icon: oozeborneIcon,
    stack: ['Godot 4.6', 'GDScript', 'Go', 'WebSockets', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Next.js', 'Docker'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/Oozeborne', type: 'github' }],
    status: 'In Development',
  },
  {
    id: '05',
    year: 'May 2026 (hackathon project)',
    title: 'Type Duel',
    line2: 'COMPETITIVE TYPING DUEL (MVP)',
    category: 'GAMES / MULTIPLAYER',
    des: 'Type Duel is a Godot 4.6 typing-combat game with a Node.js backend. It includes account registration, matchmaking and room codes, character and skill selection, typing rounds, health and mana state, rematches, chat, friends, leaderboards, feedback, and match history. Socket.IO and WebSockets carry live events, and SQLite stores persistent records.',
    img: '',
    icon: typeDuelIcon,
    stack: ['Godot 4.6', 'GDScript', 'Node.js', 'Express 5', 'SQLite', 'Socket.IO', 'WebSockets'],
    links: [
      { label: 'GitHub', url: 'https://github.com/EN-rain/TypeDuel', type: 'github' },
      { label: 'v1.0.0 Release', url: 'https://github.com/EN-rain/TypeDuel/releases/tag/v1.0.0', type: 'github' },
    ],
    status: 'MVP',
  },
  {
    id: '06',
    year: 'May-June 2026',
    title: 'CSCprep',
    line2: 'CIVIL SERVICE EXAM REVIEWER',
    category: 'WEB / EDUCATION',
    des: 'CSCprep is a React and TypeScript browser application for Civil Service Examination practice. It creates mixed, subject-specific, and fixed exam sessions from local JSON data, supports optional timing and image-based questions, and stores completed-exam counts and question reuse history in local storage.',
    img: cscprepImg,
    icon: cscprepIcon,
    stack: ['React 19', 'TypeScript', 'Vite', 'JSON', 'Local Storage', 'Lenis'],
    links: [
      { label: 'GitHub', url: 'https://github.com/EN-rain/CSCprep', type: 'github' },
      { label: 'Live Site', url: 'https://cs-cprep.vercel.app', type: 'live' },
    ],
  },
  {
    id: '07',
    year: 'June 2026',
    title: 'PocketTrade',
    line2: 'USED-PHONE MARKETPLACE',
    category: 'WEB / MOBILE / MARKETPLACE',
    des: 'PocketTrade is a used-phone marketplace with a Flutter mobile app, React administration panel, and NestJS API. The backend contains modules for authentication, users, listings, favorites, storage, conversations, blocks, reports, push tokens, and administration. It uses Prisma with PostgreSQL, Cloudinary, Socket.IO, and Firebase Cloud Messaging.',
    img: pocketTradeBackground,
    icon: pocketTradeIcon,
    stack: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'React 19', 'TypeScript', 'NestJS 11', 'Socket.IO', 'Prisma', 'PostgreSQL', 'Firebase', 'Cloudinary'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/PocketTrade', type: 'github' }],
  },
  {
    id: '08',
    year: '2026-Present',
    title: 'Cash Me Out',
    line2: '2020 INTERNET ARCHIVE + CMS',
    category: 'WEB / ARCHIVE / CMS',
    des: 'Cash Me Out is a Next.js 15 archive for selected 2020 internet entries, organized by year, month, and day. It includes an administration area for creating, editing, reviewing, previewing, publishing, and archiving entries. Admin access uses a hidden trigger, email magic links, TOTP verification, short-lived sessions, and desktop checks.',
    img: cacheMeOutImg,
    icon: cashMeOutIcon,
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'TOTP', 'Nodemailer', 'Vitest'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/Cache-Me-Out', type: 'github' }],
    status: 'In Development',
  },
];

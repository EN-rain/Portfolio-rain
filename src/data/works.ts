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
    title: 'ChemQuest2',
    line2: 'STORY-DRIVEN CHEMISTRY LEARNING GAME',
    category: 'GAMES / EDUCATION',
    des: 'ChemQuest2 is a Godot 4.6 chemistry-learning game with a hometown hub, quest progression, a glossary, achievements, and interactive minigames covering elements, compounds, mixtures, accuracy and precision, density, and states of matter. It supports desktop preview and Android export.',
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
    line2: 'STUDENT MANAGEMENT WEB, API, AND ANDROID APP',
    category: 'WEB / MOBILE / EDUCATION',
    des: 'StudentFlow is a student-management system with a Laravel web application, Laravel REST API, and native Java Android client. It supports administrator, teacher, and student roles for classes, enrollment, attendance, grades, assignments, announcements, exams, reports, activity logs, and school settings.',
    img: studentFlowBackground,
    icon: studentFlowIcon,
    stack: ['Laravel 12', 'PHP 8.2', 'Blade', 'Sanctum', 'SQLite', 'Dompdf', 'Java 17', 'Retrofit'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/StudentFLow', type: 'github' }],
  },
  {
    id: '03',
    year: '2025-2026',
    title: 'TsukiAI Voice Chat',
    line2: 'WPF VOICE ASSISTANT + DISCORD BRIDGE',
    category: 'AI / VOICE',
    des: 'TsukiAI is a .NET 8 and WPF desktop voice assistant with a local HTTP API, configurable local or remote model providers, Chroma-backed semantic memory, speech-to-text and text-to-speech processing, and Discord voice integration through a Node.js bridge.',
    img: imgTsukiai,
    stack: ['.NET 8', 'WPF', 'ASP.NET Core', 'Node.js', 'Discord', 'Chroma', 'VOICEVOX'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/TsukiAI-Desktop', type: 'github' }],
  },
  {
    id: '04',
    year: '2026-Present',
    title: 'Oozeborne',
    line2: '4-PLAYER CO-OP SURVIVORS + MOON SERVER',
    category: 'GAMES / MULTIPLAYER (IN DEVELOPMENT)',
    des: 'Oozeborne is a Godot 4.6 four-player cooperative survivors game backed by Moon Server, a custom containerized backend with a Node.js lobby API, authoritative 20 Hz Go WebSocket simulation, PostgreSQL, Redis, and a Next.js control center.',
    img: oozebirImg,
    icon: oozeborneIcon,
    stack: ['Godot 4.6', 'Go', 'WebSockets', 'Node.js', 'PostgreSQL', 'Redis', 'Next.js', 'Docker'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/Oozeborne', type: 'github' }],
    status: 'In Development',
  },
  {
    id: '05',
    year: 'May 2026 (hackathon project)',
    title: 'TypeDuel',
    line2: 'COMPETITIVE PIXEL TYPING DUEL',
    category: 'GAMES / MULTIPLAYER',
    des: 'TypeDuel is a competitive 2D pixel typing game built with Godot and a Node.js backend. Players use matchmaking or custom rooms, choose character loadouts, and fight through typing rounds involving speed, accuracy, health, mana, active skills, passive effects, and rematches.',
    img: '',
    icon: typeDuelIcon,
    stack: ['Godot 4.6', 'Node.js', 'Express', 'Socket.IO', 'WebSockets', 'SQLite'],
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
    des: 'CSCprep is a React and Vite reviewer application for Civil Service Exam practice. It includes randomized and subject-specific exams, optional timed mode, answer review, skipped-item confirmation, themes, smooth transitions, image-backed questions, and a verified local question bank.',
    img: cscprepImg,
    icon: cscprepIcon,
    stack: ['React 19', 'TypeScript', 'Vite', 'Lenis', 'JSON'],
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
    des: 'PocketTrade is a used-phone marketplace with a Flutter Android app, NestJS API, and React administration panel. It includes email and password authentication, OTP verification, JWT sessions, listings, favorites, conversations, blocks, reports, Cloudinary media, Socket.IO, and Firebase notifications.',
    img: pocketTradeBackground,
    icon: pocketTradeIcon,
    stack: ['Flutter', 'Dart', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'React', 'Cloudinary', 'Socket.IO', 'Firebase'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/PocketTrade', type: 'github' }],
  },
  {
    id: '08',
    year: '2026-Present',
    title: 'Cache Me Outside',
    line2: 'NEWSPAPER-STYLE 2020 INTERNET TIME CAPSULE',
    category: 'WEB / ARCHIVE / CMS',
    des: 'Cache Me Outside is a newspaper-style archive of selected 2020 internet moments. Public pages are organized by year, month, and day, while a hidden desktop-only admin flow uses a secret trigger, emailed magic link, and TOTP verification to access CMS, generator, review, and preview tools.',
    img: cacheMeOutImg,
    icon: cashMeOutIcon,
    stack: ['Next.js', 'Supabase', 'Resend', 'TOTP', 'Vercel'],
    links: [{ label: 'GitHub', url: 'https://github.com/EN-rain/Cache-Me-Out', type: 'github' }],
    status: 'In Development',
  },
];

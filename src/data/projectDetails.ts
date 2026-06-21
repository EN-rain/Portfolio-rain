export type ProjectDetail = {
  overview: string[];
  features: string[];
  architecture: { label: string; detail: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  '01': {
    overview: [
      'ChemQuest is a Godot 4.6 chemistry-learning game built for Android. The project uses a hometown hub, quests, NPC dialogue, a glossary, achievements, and scene-based activities for introductory chemistry topics.',
      'The current lesson code covers elements, compounds, mixtures, separation methods, accuracy and precision, density, and states of matter. Progress is stored locally in JSON, including the current scene, spawn point, quest state, feedback state, and selected lesson progress.',
    ],
    features: [
      'Android export configuration',
      'Hub-based quest progression',
      'JSON quest and dialogue data',
      'Topic-specific chemistry activities',
      'Element glossary and achievements',
      'Local save and continue system',
    ],
    architecture: [
      { label: 'Godot client', detail: 'Runs the Android game, scenes, UI, movement, and interactions.' },
      { label: 'Autoload managers', detail: 'Coordinates quests, dialogue, spawning, audio, transitions, and lesson state.' },
      { label: 'Lesson scenes', detail: 'Contains the activities for each chemistry topic.' },
      { label: 'JSON content', detail: 'Stores quest definitions, dialogue, feedback, and reference data.' },
      { label: 'Local save file', detail: 'Stores scene, spawn, quest, feedback, density, and states-of-matter progress.' },
    ],
  },
  '02': {
    overview: [
      'StudentFlow is a Laravel 12 student management system with a Blade web interface, REST API, and native Java Android client. Web sessions serve the browser application, while API clients use Laravel Sanctum bearer tokens.',
      'The implemented routes cover administrator, teacher, and student workflows for records, classes, enrollment and join requests, attendance, grade categories and items, assignments, announcements, exams, reports, activity logs, and school settings.',
    ],
    features: [
      'Administrator, teacher, and student roles',
      'Class enrollment and join requests',
      'Attendance records and statistics',
      'Grade categories, items, scores, and final grades',
      'Assignments and submissions',
      'Exams, attempts, and magic links',
      'Announcements, reports, and PDF export',
      'Native Java Android client',
    ],
    architecture: [
      { label: 'Blade web app', detail: 'Provides browser-based administration and classroom screens.' },
      { label: 'Android app', detail: 'Uses Java, XML layouts, Retrofit, Gson, and secure local storage.' },
      { label: 'Laravel API', detail: 'Defines authenticated, role-specific routes and application rules.' },
      { label: 'Database', detail: 'Uses Laravel models and migrations; local development is configured for SQLite.' },
      { label: 'Supporting services', detail: 'Handles email delivery, social sign-in, activity logs, and Dompdf reports.' },
    ],
  },
  '03': {
    overview: [
      'TsukiAI is a .NET 8 WPF voice application for Windows. It connects speech input, configurable model inference, and speech output through a desktop interface and a local ASP.NET Core service.',
      'The repository also includes a Node.js Discord voice bridge. The desktop projects use NAudio for audio handling, DSharpPlus for Discord integration, Polly-based resilience, and SQLite support in the core library.',
    ],
    features: [
      'Speech-to-text, model, and text-to-speech pipeline',
      'Configurable local and remote service endpoints',
      'Windows WPF desktop interface',
      'Local ASP.NET Core API',
      'Discord voice input and playback bridge',
      'Retry and resilience handling',
      'Core and runtime test projects',
    ],
    architecture: [
      { label: 'WPF application', detail: 'Provides the Windows interface and controls the voice workflow.' },
      { label: 'Audio layer', detail: 'Captures and plays audio through NAudio and configured speech services.' },
      { label: 'Inference client', detail: 'Sends requests to the configured model endpoint and receives generated text.' },
      { label: 'Local API', detail: 'Exposes ASP.NET Core endpoints for bridge and tooling integrations.' },
      { label: 'Discord bridge', detail: 'Uses Node.js and Discord voice libraries to relay audio to and from the desktop service.' },
    ],
  },
  '04': {
    overview: [
      'Oozeborne is an in-development Godot 4.6 co-op survivors game. The game project includes multiplayer state handling, classes, skills, status effects, leveling, coins, shops, and local or cloud save managers.',
      'The current backend is the custom Moon Server stack, not Nakama. It combines a Go WebSocket game server, a Node.js and Express lobby API, PostgreSQL, Redis, and a Next.js administration portal under Docker Compose.',
    ],
    features: [
      'Godot multiplayer game client',
      'Class, skill tree, and status-effect systems',
      'Level, coin, shop, and upgrade systems',
      'JWT-backed lobby services',
      'Go WebSocket game server',
      'PostgreSQL persistence and Redis state',
      'Web administration portal',
      'Docker Compose development stack',
    ],
    architecture: [
      { label: 'Godot client', detail: 'Runs gameplay, input, UI, prediction, and multiplayer messaging.' },
      { label: 'Lobby API', detail: 'Uses Express for authentication, rooms, profiles, and administration routes.' },
      { label: 'Game server', detail: 'Uses Go and WebSockets for the multiplayer simulation.' },
      { label: 'Data services', detail: 'Uses PostgreSQL for persistent data and Redis for shared runtime state.' },
      { label: 'Admin portal', detail: 'Uses Next.js for monitoring and server administration.' },
    ],
  },
  '05': {
    overview: [
      'Type Duel is a Godot 4.6 typing-combat game with a Node.js backend. Players can register, use matchmaking or room codes, choose a character and skills, and complete typing rounds that track progress, accuracy, health, and mana.',
      'The backend implements account, room, game, chat, friend, and feedback routes. Socket.IO and WebSocket handlers carry live room and match events, while SQLite stores account and social records, leaderboard data, chat, and match history.',
    ],
    features: [
      'Account registration and login',
      'Matchmaking queue and custom rooms',
      'Character and skill selection',
      'Round-based typing combat',
      'Health, mana, progress, and rematch state',
      'Chat, friends, leaderboard, and history',
      'Socket.IO and WebSocket communication',
      'SQLite persistence',
    ],
    architecture: [
      { label: 'Godot client', detail: 'Provides login, lobby, loadout, typing, combat, and result screens.' },
      { label: 'Express API', detail: 'Serves authentication, room, game, chat, friend, and feedback routes.' },
      { label: 'Real-time layer', detail: 'Uses Socket.IO and WebSockets for room and match events.' },
      { label: 'Room services', detail: 'Tracks matchmaking, selections, phases, progress, health, and rematches.' },
      { label: 'SQLite database', detail: 'Stores users, social data, chat messages, leaderboard entries, and match records.' },
    ],
  },
  '06': {
    overview: [
      'CSCprep is a React and TypeScript browser application for Civil Service Examination practice. It supports mixed, subject-specific, and fixed exam sessions using question data stored in local JSON files.',
      'The exam engine selects and shuffles eligible questions, preserves ordering for image-based items, tracks completed exams and question cooldowns in browser storage, and supports optional timed sessions.',
    ],
    features: [
      'Mixed, subject-specific, and fixed exams',
      'Optional timed sessions',
      'Local JSON question banks',
      'Image-backed question support',
      'Question and choice shuffling',
      'Question reuse cooldowns',
      'Browser-based attempt history',
      'Light and dark themes',
    ],
    architecture: [
      { label: 'React interface', detail: 'Provides exam setup, question, timer, submission, and review screens.' },
      { label: 'Question data', detail: 'Combines subject JSON files and a fixed-exam data set.' },
      { label: 'Exam engine', detail: 'Allocates, filters, shuffles, and numbers questions for each session.' },
      { label: 'Browser storage', detail: 'Stores completed-exam counts and per-question usage history.' },
      { label: 'Vite build', detail: 'Type-checks and builds the client as a static web application.' },
    ],
  },
  '07': {
    overview: [
      'PocketTrade is a used-phone marketplace with a Flutter mobile app, a React administration panel, and a NestJS API. The backend is split into modules for authentication, users, listings, favorites, storage, conversations, blocks, reports, push tokens, and administration.',
      'Authentication includes registration, password login and reset, email OTP requests and verification, refresh tokens, and logout. Prisma and PostgreSQL store application data, Cloudinary handles listing media, Socket.IO supports conversations, and Firebase Cloud Messaging supports mobile notifications.',
    ],
    features: [
      'Email OTP and password authentication',
      'Access and refresh token sessions',
      'Used-phone listings and image uploads',
      'Search, filters, and favorites',
      'Buyer and seller conversations',
      'Blocks and reports',
      'Administration panel',
      'Firebase push notifications',
    ],
    architecture: [
      { label: 'Flutter app', detail: 'Provides authentication, listing, discovery, favorites, conversation, and notification screens.' },
      { label: 'React admin app', detail: 'Provides account, listing, report, and marketplace administration views.' },
      { label: 'NestJS API', detail: 'Defines the marketplace modules, validation, guards, throttling, and REST endpoints.' },
      { label: 'Live services', detail: 'Uses Socket.IO for conversations and Firebase for mobile push delivery.' },
      { label: 'Data and media', detail: 'Uses Prisma with PostgreSQL for records and Cloudinary for uploaded images.' },
    ],
  },
  '08': {
    overview: [
      'Cash Me Out is a Next.js 15 archive that presents selected 2020 internet entries in a newspaper-style layout. Public routes are organized by year, month, and day, and only published entries are loaded for public pages.',
      'The project includes an administration area for creating, editing, reviewing, previewing, publishing, and archiving entries. Access uses a hidden trigger, email magic links, TOTP verification, short-lived sessions, and desktop checks; unauthorized admin requests return a not-found response.',
    ],
    features: [
      'Year, month, and day archive routes',
      'Published-entry filtering',
      'Entry creation and editing',
      'Draft review and watermarked preview',
      'Publish and archive actions',
      'Magic-link and TOTP authentication',
      'Desktop-restricted administration routes',
      'Supabase-backed entry storage',
    ],
    architecture: [
      { label: 'Public Next.js pages', detail: 'Load and render published archive entries for year, month, and day routes.' },
      { label: 'Admin interface', detail: 'Provides entry forms, search, status filters, review, preview, publish, and archive actions.' },
      { label: 'Authentication', detail: 'Combines a hidden trigger, email magic links, TOTP codes, and short-lived sessions.' },
      { label: 'Route protection', detail: 'Rejects unauthorized or mobile access to administration pages and endpoints.' },
      { label: 'Supabase', detail: 'Stores entries and publication state through server-side data access.' },
    ],
  },
};

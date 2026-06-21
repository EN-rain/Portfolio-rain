export type ProjectDetail = {
  overview: string[];
  features: string[];
  architecture: { label: string; detail: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  '01': {
    overview: [
      'CHEMQuest is an offline Android chemistry-learning RPG built around short, active learning loops instead of passive review. Players explore lessons through puzzles, action challenges, and guided problem solving.',
      'The game covers introductory chemistry topics including matter, measurement, stoichiometry, atoms, and gases. Each lesson connects a chemistry concept to a distinct gameplay activity so students can practice while progressing.',
    ],
    features: ['Offline Android gameplay', 'Lesson-specific mini-games', 'JSON-driven quests and dialogue', 'Persistent progress and save state', 'Interactive chemistry challenges', 'Supplementary STEM learning tool'],
    architecture: [
      { label: 'Android player', detail: 'Launches the Godot mobile game and selects a lesson.' },
      { label: 'Godot runtime', detail: 'Coordinates scenes, UI, NPC interactions, and game state.' },
      { label: 'Lesson modules', detail: 'Runs topic-specific puzzles and action challenges.' },
      { label: 'JSON content', detail: 'Supplies quests, dialogue, and lesson configuration.' },
      { label: 'Local save data', detail: 'Restores scene and learner progress without a network connection.' },
    ],
  },
  '02': {
    overview: [
      'StudentFlow centralizes classroom operations for administrators, teachers, and students. Its web dashboard manages classes, grades, attendance, announcements, and audit activity while a native Android client supports students and teachers on the go.',
      'The platform uses role-based access to keep administrative, teacher, and student workflows separated while sharing the same academic records and reporting foundation.',
    ],
    features: ['Role-based Admin, Teacher, and Student access', 'Attendance and grade tracking', 'Weighted grade calculations', 'Announcements and email notifications', 'Interactive exams and magic links', 'Android companion application', 'Academic report exports'],
    architecture: [
      { label: 'Web dashboard', detail: 'Provides administration, classroom, and reporting workflows.' },
      { label: 'Android client', detail: 'Lets users access classes, attendance, assignments, and profiles.' },
      { label: 'Laravel API', detail: 'Applies Sanctum authentication, roles, and academic business rules.' },
      { label: 'PostgreSQL / Supabase', detail: 'Stores users, classes, grades, attendance, and activity records.' },
      { label: 'Notifications & exports', detail: 'Delivers announcements and generates academic reports.' },
    ],
  },
  '03': {
    overview: [
      'TsukiAI is a real-time Windows voice companion designed for continuous conversation. It listens, transcribes, routes a request to an AI provider, and returns a spoken response through a live voice pipeline.',
      'It supports local and cloud speech services, provider failover, conversation memory, a local integration API, and a Discord voice bridge for shared voice channels.',
    ],
    features: ['Live speech-to-text, AI, and text-to-speech pipeline', 'Local and cloud speech options', 'Multi-provider AI routing and failover', 'Semantic memory and conversation history', 'Latency controls and health checks', 'Local API for integrations', 'Discord voice bridge'],
    architecture: [
      { label: 'Windows desktop client', detail: 'Captures microphone input and provides live pipeline controls.' },
      { label: 'Voice processing', detail: 'Uses VAD, speech-to-text, and text-to-speech services.' },
      { label: 'AI router', detail: 'Selects providers, handles failover, and generates responses.' },
      { label: 'Semantic memory', detail: 'Retrieves useful past context for the current conversation.' },
      { label: 'Outputs & integrations', detail: 'Speaks responses locally, exposes an API, and bridges Discord.' },
    ],
  },
  '04': {
    overview: [
      'Oozeborne is a co-op action RPG where players build a class, select skills, and adapt to escalating encounters. Runs are shaped by team composition, active abilities, progression choices, and a boss designed to counter predictable play.',
      'The multiplayer implementation uses an authoritative Nakama backend for rooms, chat, class selection, and synchronized match state.',
    ],
    features: ['Class and subclass progression', 'Flexible active and passive builds', 'Escalating co-op encounters', 'Adaptive boss behavior', 'Party coordination with chat and voice', 'Cloud-backed player progression', 'Authoritative multiplayer state'],
    architecture: [
      { label: 'Godot clients', detail: 'Render gameplay, collect input, and predict local actions.' },
      { label: 'Nakama services', detail: 'Handles authentication, lobbies, rooms, presence, and matchmaking.' },
      { label: 'Lua match loop', detail: 'Runs authoritative combat, round, and boss logic.' },
      { label: 'State synchronization', detail: 'Broadcasts validated match state to every party member.' },
      { label: 'CockroachDB', detail: 'Persists accounts, progression, and multiplayer records.' },
    ],
  },
  '05': {
    overview: [
      'Type Duel is a competitive pixel-art typing game. Players register, enter matchmaking or custom rooms, select a character loadout, and compete through typing rounds where speed, accuracy, mana, skills, and passive effects determine the result.',
      'The MVP includes social features, match history, leaderboards, rematches, and real-time synchronization for the full lobby-to-match loop.',
    ],
    features: ['Matchmaking and custom rooms', 'Round-based typing combat', 'Character, active skill, and passive selection', 'Health, mana, streak, and rematch loops', 'Friends, chat, presence, and leaderboards', 'Match history and feedback', 'Real-time Socket.IO state sync'],
    architecture: [
      { label: 'Godot game client', detail: 'Presents the lobby, loadout, typing, and combat interfaces.' },
      { label: 'REST API', detail: 'Serves account, lobby, social, profile, and history workflows.' },
      { label: 'Socket.IO server', detail: 'Synchronizes rooms, rounds, combat events, and rematches.' },
      { label: 'Game services', detail: 'Validates typing results and resolves skill effects.' },
      { label: 'SQLite database', detail: 'Persists users, chats, friendships, leaderboard, and matches.' },
    ],
  },
  '06': {
    overview: [
      'CSCprep is a browser-based Civil Service Examination reviewer focused on realistic practice sessions. It supports random, subject-specific, and fixed CSC 11-based exams across verbal, numerical, analytical, Filipino, and general-information topics.',
      'The app emphasizes self-review with timed practice, answer explanations, review screens, local progress persistence, and question usage tracking.',
    ],
    features: ['Random, subject, and fixed practice exams', 'Optional timed sessions', 'Image question preview', 'Hints and review explanations', 'Score and pass/fail results', 'Exam history and subject performance', 'Local in-progress exam recovery', 'Light and dark themes'],
    architecture: [
      { label: 'React interface', detail: 'Provides exam setup, question delivery, timer, and review screens.' },
      { label: 'Question banks', detail: 'Loads local JSON content and optional image-based items.' },
      { label: 'Exam engine', detail: 'Randomizes questions, tracks answers, timing, hints, and scoring.' },
      { label: 'Browser storage', detail: 'Keeps attempts, question usage, settings, and in-progress exams.' },
      { label: 'Vercel deployment', detail: 'Serves the reviewer as a fast static web application.' },
    ],
  },
  '07': {
    overview: [
      'PocketTrade is a marketplace for peer-to-peer used-phone trading with a Flutter mobile client, a React administrative dashboard, and a NestJS backend. Buyers can search, filter, favorite, and negotiate while sellers manage listings and photos.',
      'Administrative workflows cover listing moderation, account suspension, reports, search analytics, and marketplace health.',
    ],
    features: ['OTP email authentication', 'Phone listings with multiple images', 'Search, filters, and favorites', 'Real-time buyer/seller chat', 'Listing and user moderation', 'Reports, blocks, and analytics', 'Firebase push notifications', 'Mobile and admin web clients'],
    architecture: [
      { label: 'Flutter mobile app', detail: 'Handles discovery, listings, chat, and push notifications.' },
      { label: 'React admin dashboard', detail: 'Provides moderation, account controls, and marketplace analytics.' },
      { label: 'NestJS API', detail: 'Owns OTP auth, listings, users, reports, and business logic.' },
      { label: 'Socket.IO & Firebase', detail: 'Delivers live chat events and mobile push notifications.' },
      { label: 'Prisma, PostgreSQL & Cloudinary', detail: 'Stores marketplace data and hosts listing images.' },
    ],
  },
  '08': {
    overview: [
      'Cash Me Out is a newspaper-style archive of notable internet moments from 2020. Public visitors browse reviewed entries by month and day, while unpublished material remains inside a protected editorial workflow.',
      'A hidden desktop-only CMS supports authoring, previewing, review, and controlled publishing with magic-link and TOTP-protected administration.',
    ],
    features: ['Month-and-day archive browsing', 'Reviewed public entries only', 'Hidden editorial CMS', 'Magic-link and TOTP admin access', 'Draft preview with watermarking', 'Desktop-restricted admin pages', 'Supabase publishing state', 'Vercel deployment'],
    architecture: [
      { label: 'Public Next.js pages', detail: 'Render the reviewed archive and date-based entries.' },
      { label: 'Protected CMS', detail: 'Creates drafts, previews content, and controls publishing.' },
      { label: 'Auth layer', detail: 'Uses email magic links, TOTP verification, and desktop checks.' },
      { label: 'Supabase', detail: 'Stores entries, access data, and publication state.' },
      { label: 'Vercel', detail: 'Deploys the application and server-side endpoints.' },
    ],
  },
};

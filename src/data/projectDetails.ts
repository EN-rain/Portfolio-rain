export type ProjectDetail = {
  overview: string[];
  features: string[];
  architecture: { label: string; detail: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  '01': {
    overview: [
      'ChemQuest is a Godot 4.6 chemistry-learning game that combines a story-driven hometown hub with quests, a glossary, achievements, and interactive lesson activities. It targets Android while retaining a desktop preview workflow for development and testing.',
      'Chapter One branches from the hometown into lessons covering elements, compounds, mixtures, separation methods, accuracy and precision, density, and states of matter. Different scenes, NPC interactions, and reward systems are used to connect the educational content to the game progression.',
      'The project relies on shared Godot managers for quests, saving, spawning, dialogue, music, transitions, guidance, and feedback. Quest definitions and reference content are stored in project data files, while player progress is saved through Godot user storage.',
    ],
    features: [
      'Story-driven hometown hub',
      'Quest-based lesson progression',
      'Elements, compounds, and mixtures lessons',
      'Accuracy, precision, and density activities',
      'States-of-matter minigames',
      'Element glossary and achievements',
      'Local save and spawn restoration',
      'Android export support',
    ],
    architecture: [
      {
        label: 'Game startup',
        detail: 'Godot opens the intro scene, then routes the player to the main menu and the story-driven hometown hub.',
      },
      {
        label: 'Hub and quests',
        detail: 'NPC dialogue, QuestManager, and hometown scenes guide the player toward the correct building, lesson, or progression objective.',
      },
      {
        label: 'Lesson scenes',
        detail: 'Chapter One lesson areas present chemistry topics through separate scenes, activities, platforming sections, and minigames.',
      },
      {
        label: 'Shared systems',
        detail: 'Autoload managers coordinate dialogue, music, sound effects, fades, spawning, guidance, achievements, and player feedback across scenes.',
      },
      {
        label: 'Save and export',
        detail: 'SaveManager stores scene, spawn, quest, and feedback progress in Godot user storage, while the Android preset packages the playable build.',
      },
    ],
  },
  '02': {
    overview: [
      'StudentFlow is a student-management platform composed of a Laravel web application, a Laravel REST API, and a native Java Android client. It supports administrator, teacher, and student roles across classroom and school workflows.',
      'The platform includes teacher and student management, classes, enrollments, join requests, attendance, grade categories, grade items, assignments, announcements, exams, reports, activity logs, and school settings. Students can also sign in through supported Google and GitHub authentication flows.',
      'The Blade web application uses session authentication, while API clients use Laravel Sanctum bearer tokens. Local development uses SQLite, PDF reports are produced with Dompdf, and the Android application communicates with the API through Retrofit and related Android libraries.',
    ],
    features: [
      'Administrator, teacher, and student roles',
      'Class and enrollment management',
      'Classroom join requests',
      'Attendance tracking',
      'Grade categories, items, and scores',
      'Assignments and submissions',
      'Announcements and email delivery',
      'Exams and magic exam links',
      'Reports and PDF export',
      'Native Java Android client',
    ],
    architecture: [
      {
        label: 'Client access',
        detail: 'Users enter through the Blade web interface or the native Android client, depending on their device and workflow.',
      },
      {
        label: 'Authentication',
        detail: 'Blade pages use Laravel sessions, while the Android app and other API clients authenticate with Sanctum bearer tokens.',
      },
      {
        label: 'Application modules',
        detail: 'Laravel routes and controllers handle classes, students, attendance, grades, assignments, announcements, exams, reports, and role-specific actions.',
      },
      {
        label: 'Data layer',
        detail: 'Laravel models and migrations persist school, classroom, assessment, and account records in SQLite or another supported database.',
      },
      {
        label: 'Outputs and delivery',
        detail: 'The platform returns Blade pages or JSON responses, generates PDF reports through Dompdf, and supports email and Android-facing workflows.',
      },
    ],
  },
  '03': {
    overview: [
      'TsukiAI is a .NET 8 and WPF desktop voice assistant with a local HTTP API, multi-provider language-model support, semantic memory, and Discord voice integration through a Node.js bridge.',
      'Its primary voice pipeline follows speech-to-text, model inference, and text-to-speech. The application can use local or remote inference, supports configurable providers such as Cerebras, Groq, Gemini, GitHub Models, and Mistral, and can connect to a Chroma-backed semantic-memory service.',
      'The solution separates core services, the WPF voice application, automated tests, the Discord bridge, and helper scripts. Resilience features include retries, circuit breakers, correlation IDs, and bounded background queues for memory write-back.',
    ],
    features: [
      'WPF desktop voice interface',
      'Speech-to-text, LLM, and text-to-speech pipeline',
      'Local and remote inference support',
      'Multi-provider model routing',
      'Chroma-backed semantic memory',
      'Local ASP.NET Core API',
      'Discord voice bridge',
      'Retry and circuit-breaker handling',
      'Correlation IDs and background queues',
      'Core and runtime test projects',
    ],
    architecture: [
      {
        label: 'Voice input',
        detail: 'The WPF application or Discord bridge captures a spoken request and prepares it for the configured speech-recognition path.',
      },
      {
        label: 'Speech recognition',
        detail: 'The voice pipeline converts incoming audio into text using the configured local or cloud speech-to-text provider.',
      },
      {
        label: 'Model routing',
        detail: 'Core services send the transcription to the selected local or remote model provider and coordinate semantic-memory access when enabled.',
      },
      {
        label: 'Speech response',
        detail: 'The generated response is passed to the configured text-to-speech service, including optional local VOICEVOX support.',
      },
      {
        label: 'Desktop or Discord output',
        detail: 'The result returns through the WPF application or the Node.js Discord bridge, with retries and request correlation applied around outbound calls.',
      },
    ],
  },
  '04': {
    overview: [
      'Oozeborne is a Godot 4.6 four-player cooperative survivors game backed by Moon Server, a custom containerized multiplayer backend. The Godot client contains gameplay scenes, scripts, assets, and resources for classes, skills, and items.',
      'Moon Server separates account and lobby work from active gameplay. A Node.js lobby API handles authentication, rooms, profiles, and administration, while a Go WebSocket game server runs an authoritative simulation at 20 updates per second.',
      'The supporting stack includes PostgreSQL for persistent player data, Redis for session state, room registration, and pub/sub, and a Next.js Moon Control Center for administration and live monitoring. Docker Compose starts the complete service stack for local development or deployment.',
    ],
    features: [
      'Four-player cooperative survivors gameplay',
      'Email-authenticated JWT accounts',
      'Room-based multiplayer lobbies',
      'Five main classes and eighteen subclasses',
      'Skill trees and player progression',
      'Status effects, shops, coins, and upgrades',
      'Authoritative 20 Hz Go game server',
      'PostgreSQL and Redis services',
      'Live tuning and administration portal',
      'Docker Compose deployment',
    ],
    architecture: [
      {
        label: 'Godot client',
        detail: 'The Godot game presents authentication, lobby, class selection, survivor gameplay, skills, items, effects, and player-facing UI.',
      },
      {
        label: 'Lobby API',
        detail: 'The Node.js REST service handles JWT authentication, rooms, profiles, and administration before players enter an active match.',
      },
      {
        label: 'Game server',
        detail: 'The Go WebSocket service runs the authoritative 20 Hz room simulation and synchronizes active multiplayer gameplay.',
      },
      {
        label: 'Data services',
        detail: 'PostgreSQL stores persistent player data, while Redis manages session state, room registry information, and pub/sub communication.',
      },
      {
        label: 'Control and deployment',
        detail: 'The Next.js Moon Control Center monitors and tunes the system, and Docker Compose connects and runs the complete backend stack.',
      },
    ],
  },
  '05': {
    overview: [
      'Type Duel is a competitive two-dimensional pixel typing game built with Godot and a Node.js backend. Players register or log in, join matchmaking or custom rooms, select a character loadout, and compete in round-based typing battles.',
      'Each match combines typing speed and accuracy with health, mana, active skills, passive disruption effects, win streaks, forfeits, and rematches. The current roster includes Riven, Liora, and Zephon, alongside multiple active and passive abilities.',
      'The backend exposes REST endpoints for account, room, social, and lobby features, while Socket.IO and WebSocket connections synchronize match events. Live room state is held in memory, and SQLite stores users, chat messages, friends, leaderboard records, and match history.',
    ],
    features: [
      'Real-time multiplayer typing duels',
      'Matchmaking and custom rooms',
      'Character and loadout selection',
      'Skill-selection and typing phases',
      'Health, mana, streak, and passive systems',
      'Friends and direct or global chat',
      'Leaderboards and match history',
      'Profile updates and image uploads',
      'Socket.IO and WebSocket synchronization',
      'SQLite persistence',
    ],
    architecture: [
      {
        label: 'Account and lobby',
        detail: 'The Godot client uses the Express API for registration, login, profiles, matchmaking, custom rooms, friends, chat, and leaderboard data.',
      },
      {
        label: 'Loadout selection',
        detail: 'Each player chooses a character, two active skills, and one passive before the room begins the match loop.',
      },
      {
        label: 'Round loop',
        detail: 'Every round moves from skill selection into a shared typing phase that tracks progress, WPM, accuracy, typos, mana, and passive mutations.',
      },
      {
        label: 'Real-time sync',
        detail: 'Socket.IO and WebSocket events carry match joins, skill picks, typing progress, HP updates, phase changes, forfeits, and related live state.',
      },
      {
        label: 'Results and persistence',
        detail: 'The backend saves accounts, social data, leaderboard records, chat, and match history in SQLite while cleaning stale rooms and disconnects.',
      },
    ],
  },
  '06': {
    overview: [
      'CSCprep is a React 19 and TypeScript reviewer application for Civil Service Exam practice. It provides randomized exams, subject-based sessions, optional timed mode, answer review, theme controls, and smooth page transitions.',
      'The question bank is assembled from five local subject JSON files covering verbal reasoning, numerical reasoning, analytical ability, Filipino, and general information. Figure and table questions can reference cropped images stored with the public assets.',
      'The repository also contains scripts used to extract, audit, and crop source material from reviewer PDFs. The documented CSC 11 data set contains 716 verified questions with no missing or duplicate question IDs.',
    ],
    features: [
      'Randomized exam sessions',
      'Subject-specific exams',
      'Optional one-hour timer',
      'Answer review and result filtering',
      'Skipped-item confirmation',
      'Exit confirmation',
      'Dark and light themes',
      'Smooth transitions and Lenis scrolling',
      'Image-backed questions',
      'Audited local question bank',
    ],
    architecture: [
      {
        label: 'Question sources',
        detail: 'Five subject JSON files and public question images provide the content used by the reviewer application.',
      },
      {
        label: 'Question bank',
        detail: 'questionBank.ts combines the subject files into the application question bank used for random and subject-based sessions.',
      },
      {
        label: 'Exam generation',
        detail: 'exam.ts handles exam generation, question-history rules, and the preparation of each practice session.',
      },
      {
        label: 'React interface',
        detail: 'App.tsx drives the exam flow, timer, answer selection, skipped-item checks, review screens, themes, and page transitions.',
      },
      {
        label: 'Build and verification',
        detail: 'Vite builds the static application, while extraction, audit, and image-cropping scripts maintain the PDF-backed question data.',
      },
    ],
  },
  '07': {
    overview: [
      'PocketTrade is a used-phone marketplace with a Flutter Android application, a NestJS API, and a React administration panel. The three applications are organized as separate mobile, backend, and admin projects inside one repository.',
      'The platform supports email and password authentication, email OTP verification and reset, JWT access and refresh tokens, used-phone listings, favorites, conversations, blocks, reports, push tokens, and administrative functions.',
      'Prisma and PostgreSQL store marketplace data, Cloudinary manages uploaded media, Socket.IO carries real-time conversation events, and Firebase Cloud Messaging delivers notifications. The admin application uses React, Vite, Tailwind CSS, and Recharts, while Flutter uses Dio, GoRouter, and secure storage.',
    ],
    features: [
      'Flutter Android marketplace app',
      'React administration panel',
      'Email and password authentication',
      'Email OTP verification and reset',
      'JWT access and refresh tokens',
      'Used-phone listing management',
      'Favorites and conversations',
      'Blocks and user reports',
      'Socket.IO messaging',
      'Firebase push notifications',
    ],
    architecture: [
      {
        label: 'Client applications',
        detail: 'The Flutter mobile app serves buyers and sellers, while the React admin panel provides protected marketplace-management screens.',
      },
      {
        label: 'Authentication API',
        detail: 'NestJS handles registration, login, OTP verification, password reset, token refresh, and logout through documented API routes.',
      },
      {
        label: 'Marketplace modules',
        detail: 'Backend modules process listings, favorites, conversations, blocks, reports, push tokens, users, and administrative operations.',
      },
      {
        label: 'Storage and data',
        detail: 'Prisma writes marketplace records to PostgreSQL, while Cloudinary stores uploaded listing media.',
      },
      {
        label: 'Realtime and notifications',
        detail: 'Socket.IO delivers conversation updates, Firebase Cloud Messaging sends push notifications, and the admin panel reads from the same API.',
      },
    ],
  },
  '08': {
    overview: [
      'Cache Me Outside is a newspaper-style time capsule for selected internet moments from 2020. Public pages are organized by year, month, and day and display reviewed entries through the public archive interface.',
      'The application includes a hidden, desktop-only administration workflow for CMS, generator, review, and preview tools. Admin access requires the secret trigger, an emailed magic link, and a TOTP authenticator code.',
      'The project uses Next.js with Supabase-backed data and can be deployed to Vercel. Public and admin routes are separated, unauthorized or mobile admin requests return a not-found response, and draft preview pages display a visible watermark.',
    ],
    features: [
      'Newspaper-style 2020 archive',
      'Year, month, and day public routes',
      'Reviewed public entries',
      'Hidden admin entry point',
      'Email magic-link verification',
      'TOTP two-factor authentication',
      'Desktop-only admin access',
      'CMS and entry generator',
      'Review and draft preview tools',
      'Supabase and Vercel deployment',
    ],
    architecture: [
      {
        label: 'Public request',
        detail: 'Visitors open the year, month, or day archive routes under the public 2020 section.',
      },
      {
        label: 'Reviewed content',
        detail: 'The public interface renders reviewed entries in the newspaper-style archive rather than exposing draft administration data.',
      },
      {
        label: 'Hidden admin trigger',
        detail: 'An administrator enters the secret word through the hidden public-page form to begin the protected access flow.',
      },
      {
        label: 'Magic link and TOTP',
        detail: 'The system emails a magic link, requires a desktop browser, and verifies an authenticator-app TOTP code before opening admin routes.',
      },
      {
        label: 'CMS workflow',
        detail: 'Protected admin pages provide CMS, generator, review, and watermarked preview tools, with Supabase supplying the configured project data.',
      },
    ],
  },
};

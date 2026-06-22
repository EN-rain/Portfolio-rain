export type ProjectDetail = {
  overview: string[];
  features: string[];
  architecture: { label: string; detail: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  '01': {
    overview: [
      'ChemQuest2 is a Godot 4.6 chemistry-learning game that combines a story-driven hometown hub with quest progression, an element glossary, achievements, and interactive minigames. It is designed for desktop preview and Android export using Godot\'s mobile renderer.',
      'Chapter One begins in the hometown hub and branches into lesson areas for elements, compounds, mixtures, separation methods, accuracy and precision, density, and states of matter. NPC interactions and quests connect those lessons to the game\'s narrative progression.',
      'Shared Godot managers handle quests, saving, spawning, dialogue, music, sound effects, fades, guidance, and player feedback. Quest definitions and supporting content are stored in project data files, while local progress is written through Godot\'s user storage.',
    ],
    features: [
      'Story-driven hometown hub',
      'Quest-based lesson progression',
      'Elements, compounds, and mixtures lessons',
      'Separation-method activities',
      'Accuracy, precision, and density challenges',
      'States-of-matter platforming and minigames',
      'Element glossary and achievements',
      'Local save and Android export support',
    ],
    architecture: [
      {
        label: 'Intro and menu',
        detail: 'Godot opens intro.tscn, then sends the player through the main menu into the story-driven game flow.',
      },
      {
        label: 'Hometown hub',
        detail: 'The hometown provides NPCs, dialogue, map access, panels, and building entrances that guide the player toward lesson objectives.',
      },
      {
        label: 'Quest progression',
        detail: 'QuestManager loads quest definitions, tracks active objectives, and coordinates progress with dialogue and scene transitions.',
      },
      {
        label: 'Lesson areas',
        detail: 'Building One and Building Two contain separate chemistry lessons, activities, platforming sections, and minigames.',
      },
      {
        label: 'Save and export',
        detail: 'SaveManager stores scene, spawn, quest, and feedback data in user storage, while the Android preset packages the mobile build.',
      },
    ],
  },
  '02': {
    overview: [
      'StudentFlow is a student-management platform with a Laravel web application, Laravel REST API, and native Java Android client. It supports administrator, teacher, and student roles across school and classroom workflows.',
      'The system includes teacher and student management, classes, enrollment, classroom join requests, attendance, grade categories, grade items, scores, assignments, announcements, exams, reports, activity logs, and school settings. Student sign-in can also use configured Google or GitHub providers.',
      'The Blade application uses web sessions, while API clients use Laravel Sanctum bearer tokens. SQLite supports local development, Dompdf generates PDF reports, and the Android client uses Java 17, XML layouts, Retrofit, Gson, OkHttp, Material Components, and AndroidX Security.',
    ],
    features: [
      'Administrator, teacher, and student roles',
      'Teacher and student management',
      'Classes, enrollment, and join requests',
      'Attendance tracking',
      'Grade categories, items, and scores',
      'Assignments and submissions',
      'Announcements and email delivery',
      'Exams, attempts, answers, and magic links',
      'Reports and PDF export',
      'Native Java Android client',
    ],
    architecture: [
      {
        label: 'Web and Android clients',
        detail: 'Users access StudentFlow through Blade pages in the Laravel web app or through the native Java Android application.',
      },
      {
        label: 'Authentication',
        detail: 'Web requests use Laravel sessions, while Android and other API requests use Sanctum bearer tokens and supported social sign-in routes.',
      },
      {
        label: 'Laravel modules',
        detail: 'Routes, controllers, middleware, mail classes, and services process classes, students, attendance, grades, assignments, announcements, exams, and reports.',
      },
      {
        label: 'Database layer',
        detail: 'Migrations and models persist accounts, school settings, classroom records, assessments, submissions, attendance, and activity logs.',
      },
      {
        label: 'Responses and reports',
        detail: 'Laravel returns Blade pages or JSON API responses, sends supported email notifications, and generates PDF reports through Dompdf.',
      },
    ],
  },
  '03': {
    overview: [
      'TsukiAI Voice Chat is a .NET 8 and WPF desktop voice assistant with a local HTTP API, multi-provider language-model support, semantic memory, and Discord voice integration through a Node.js bridge.',
      'Its core voice pipeline follows speech-to-text, language-model inference, and text-to-speech. The application supports local and remote inference, configurable providers such as Cerebras, Groq, Gemini, GitHub Models, and Mistral, and an optional Chroma-backed semantic-memory service.',
      'The solution separates core services and models, the WPF application and local ASP.NET Core host, automated tests, the Discord voice bridge, and helper scripts. Retry policies, circuit breakers, correlation IDs, and bounded background queues improve resilience around external services and memory write-back.',
    ],
    features: [
      'WPF desktop voice interface',
      'Speech-to-text, model, and text-to-speech pipeline',
      'Local and remote inference support',
      'Multi-provider model routing',
      'Chroma-backed semantic memory',
      'Local ASP.NET Core API',
      'Discord voice bridge',
      'Optional VOICEVOX local speech synthesis',
      'Retries, circuit breakers, and correlation IDs',
      'Core and runtime test projects',
    ],
    architecture: [
      {
        label: 'Voice input',
        detail: 'Audio enters through the WPF application or the Discord voice bridge and is prepared for the configured recognition service.',
      },
      {
        label: 'Speech to text',
        detail: 'The voice pipeline converts the captured audio into text using the selected local or cloud speech-recognition provider.',
      },
      {
        label: 'Model and memory',
        detail: 'Core services route the text to the configured local or remote language model and can use the Chroma-backed memory service.',
      },
      {
        label: 'Text to speech',
        detail: 'The generated response is converted into audio through the configured speech-synthesis provider, including optional VOICEVOX.',
      },
      {
        label: 'Desktop or Discord output',
        detail: 'The response returns to the WPF interface or through the Node.js bridge to Discord voice, with resilience policies surrounding outbound calls.',
      },
    ],
  },
  '04': {
    overview: [
      'Oozeborne is a Godot 4.6 four-player cooperative survivors game backed by Moon Server, a custom containerized multiplayer backend. The client includes gameplay scenes, scripts, assets, and resource data for classes, skills, and items.',
      'Moon Server separates lobby and account operations from active gameplay. A Node.js lobby API handles authentication, rooms, profiles, and administration, while a Go WebSocket game server runs the authoritative room simulation at 20 updates per second.',
      'PostgreSQL stores persistent player data, Redis handles session state, room registration, and pub/sub, and a Next.js Moon Control Center provides administration and live monitoring. Docker Compose connects and runs the complete stack.',
    ],
    features: [
      'Four-player cooperative survivors gameplay',
      'Email-authenticated JWT accounts',
      'Room-based multiplayer lobbies',
      'Five main classes and eighteen subclasses',
      'Skill trees and player progression',
      'Status effects, shops, coins, and upgrades',
      'Authoritative 20 Hz Go simulation',
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
        detail: 'The Node.js REST service handles JWT authentication, room management, profiles, and administrative requests.',
      },
      {
        label: 'Game server',
        detail: 'The Go WebSocket service runs the authoritative 20 Hz multiplayer simulation and synchronizes active rooms.',
      },
      {
        label: 'PostgreSQL and Redis',
        detail: 'PostgreSQL stores persistent player data, while Redis manages session state, room registry information, and pub/sub.',
      },
      {
        label: 'Control center',
        detail: 'The Next.js Moon Control Center monitors and tunes the services, with Docker Compose managing the complete deployment.',
      },
    ],
  },
  '05': {
    overview: [
      'TypeDuel is a competitive 2D pixel typing duel built with Godot and a Node.js backend. Players log in, enter matchmaking or create custom rooms, choose a character loadout, and fight through round-based typing battles.',
      'Matches combine typing speed and accuracy with health, mana, active skills, passive disruption effects, win streaks, forfeits, and rematches. The current roster includes Riven, Liora, and Zephon, with several active and passive abilities.',
      'REST endpoints support lobby, account, and social flows, while Socket.IO and WebSocket connections synchronize match events. Live rooms remain in server memory, and SQLite persists users, leaderboard records, chat messages, friends, feedback, and match history.',
    ],
    features: [
      'Real-time multiplayer typing duels',
      'Matchmaking and custom rooms',
      'Three playable characters',
      'Active skills and passive disruption effects',
      'Skill-selection and typing phases',
      'Health, mana, streak, and rematch systems',
      'Friends and direct or global chat',
      'Leaderboards and match history',
      'Socket.IO and WebSocket synchronization',
      'SQLite persistence',
    ],
    architecture: [
      {
        label: 'Login and lobby',
        detail: 'The Godot client uses the Express API for registration, login, profiles, matchmaking, custom rooms, friends, chat, and leaderboard data.',
      },
      {
        label: 'Loadout selection',
        detail: 'Each player chooses one character, two active skills, and one passive before the room starts the match.',
      },
      {
        label: 'Round phases',
        detail: 'The match repeats a skill-select phase followed by a shared typing phase that tracks progress, WPM, accuracy, typos, mana, and mutations.',
      },
      {
        label: 'Realtime synchronization',
        detail: 'Socket.IO and WebSocket events carry joins, skill picks, typing progress, HP updates, phase changes, forfeits, and related match state.',
      },
      {
        label: 'Results and persistence',
        detail: 'The backend stores accounts, social data, leaderboards, chat, and match history in SQLite while cleaning stale rooms and disconnects.',
      },
    ],
  },
  '06': {
    overview: [
      'CSCprep is a React 19 and Vite reviewer application for Civil Service Exam practice. It provides randomized exams, subject-specific sessions, an optional one-hour timer, answer review, themes, and smooth transitions.',
      'The question bank combines five local JSON files covering verbal reasoning, numerical reasoning, analytical ability, Filipino, and general information. Figure and table questions can display cropped images from the public question-image directory.',
      'The repository also includes extraction, audit, and image-cropping scripts for the source reviewer PDFs. The documented CSC 11 data set contains 716 extracted and verified questions with no missing or duplicate IDs.',
    ],
    features: [
      'Random and subject-based exam sessions',
      'Optional one-hour timed mode',
      'Answer review with correct and wrong filters',
      'Skipped-item confirmation',
      'In-app exit confirmation',
      'Dark and light themes',
      'Smooth transitions and Lenis scrolling',
      'Image-backed questions',
      'Five local subject question banks',
      'PDF extraction and audit scripts',
    ],
    architecture: [
      {
        label: 'Question sources',
        detail: 'Five subject JSON files and public question images provide the reviewer content.',
      },
      {
        label: 'Combined question bank',
        detail: 'questionBank.ts combines the subject data into the collection used by the application.',
      },
      {
        label: 'Exam generation',
        detail: 'exam.ts prepares random or subject-based sessions and applies question-history logic.',
      },
      {
        label: 'React exam flow',
        detail: 'App.tsx manages the active exam, timer, answers, skipped-item checks, review screens, themes, and transitions.',
      },
      {
        label: 'Build and data audit',
        detail: 'Vite builds the static app, while the Python scripts extract, audit, and crop PDF-backed question content.',
      },
    ],
  },
  '07': {
    overview: [
      'PocketTrade is a used-phone marketplace with a Flutter Android application, NestJS API, and React administration panel. The repository separates those clients into mobile, backend, and admin projects.',
      'The platform supports email and password sign-in, email OTP verification and reset, JWT access and refresh tokens, listings, favorites, conversations, blocks, reports, push tokens, and administrative operations.',
      'Prisma and PostgreSQL persist marketplace data, Cloudinary stores uploaded media, Socket.IO supports realtime communication, and Firebase Cloud Messaging delivers push notifications. The admin panel uses React, Vite, Tailwind CSS, and Recharts, while Flutter uses Dio, GoRouter, and secure storage.',
    ],
    features: [
      'Flutter Android marketplace app',
      'React administration panel',
      'Email and password authentication',
      'Email OTP verification and password reset',
      'JWT access and refresh tokens',
      'Used-phone listing management',
      'Favorites and conversations',
      'Blocks, reports, and push tokens',
      'Cloudinary media storage',
      'Socket.IO and Firebase notifications',
    ],
    architecture: [
      {
        label: 'Mobile and admin clients',
        detail: 'The Flutter Android app serves marketplace users, while the React panel provides protected administrative screens.',
      },
      {
        label: 'NestJS API',
        detail: 'NestJS exposes authentication, listing, favorite, conversation, block, report, push-token, and admin routes.',
      },
      {
        label: 'Prisma and PostgreSQL',
        detail: 'Prisma maps the backend data model and writes accounts, marketplace records, and messaging data to PostgreSQL.',
      },
      {
        label: 'Media storage',
        detail: 'Cloudinary stores uploaded listing media while the database retains the related marketplace metadata.',
      },
      {
        label: 'Realtime and push',
        detail: 'Socket.IO delivers realtime updates, Firebase Cloud Messaging sends notifications, and both clients consume the same API.',
      },
    ],
  },
  '08': {
    overview: [
      'Cache Me Outside is a newspaper-style time capsule for selected internet moments from 2020. Public pages are organized by year, month, and day and display reviewed entries through the archive interface.',
      'The application includes hidden, desktop-only administration tools for CMS management, entry generation, review, and preview. Access begins with a secret trigger, continues through an emailed magic link, and requires a TOTP authenticator code.',
      'The project uses Next.js with Supabase-backed data and is designed for Vercel deployment. Unauthorized or mobile requests to protected admin routes return a not-found response, and draft previews display a visible watermark.',
    ],
    features: [
      'Newspaper-style 2020 archive',
      'Year, month, and day public routes',
      'Reviewed public entries',
      'Hidden admin trigger',
      'Email magic-link verification',
      'TOTP two-factor authentication',
      'Desktop-only admin access',
      'CMS and entry generator',
      'Review and watermarked preview',
      'Supabase and Vercel deployment',
    ],
    architecture: [
      {
        label: 'Public archive routes',
        detail: 'Visitors browse the 2020 archive through year, month, and day routes.',
      },
      {
        label: 'Reviewed entries',
        detail: 'The newspaper interface renders reviewed public entries while keeping draft administration data protected.',
      },
      {
        label: 'Secret trigger',
        detail: 'An administrator enters the hidden secret word from a public page to begin the protected access flow.',
      },
      {
        label: 'Magic link and TOTP',
        detail: 'The system emails a magic link, requires a desktop browser, and verifies an authenticator-app code.',
      },
      {
        label: 'CMS and preview',
        detail: 'Protected admin routes provide CMS, generator, review, and watermarked preview tools using the configured Supabase project.',
      },
    ],
  },
};

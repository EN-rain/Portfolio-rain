export type ProjectDetail = {
  overview: string[];
  features: string[];
  architecture: { label: string; detail: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  '01': {
    overview: [
      'ChemQuest is a Godot 4.6 chemistry-learning game designed for Android, with desktop controls retained for development and testing. The player moves through a hometown hub, talks to NPCs, accepts quests, and enters separate lesson scenes rather than completing every topic through one repeated quiz format.',
      'The implemented lesson content includes elements, compounds, mixtures, separation methods, accuracy and precision, density, and states of matter. Individual activities use their own scene scripts and managers, while shared autoloads handle quests, dialogue, spawning, audio, transitions, guidance, scoring, and feedback across the project.',
      'The game is primarily local and does not require a backend. Quest definitions, NPC dialogue, feedback, and reference data are loaded from JSON files. General progress and lesson-specific spawn history are written to separate files under Godot\'s user storage so a player can continue from the last scene without repeating all previously shown content.',
    ],
    features: [
      'Hometown hub and NPC interactions',
      'Quest-based lesson progression',
      'Topic-specific chemistry activities',
      'JSON quest, dialogue, and reference data',
      'Element glossary and achievement scenes',
      'Scene, spawn, quest, and lesson persistence',
      'Android export configuration',
    ],
    architecture: [
      {
        label: 'Project startup',
        detail: 'Godot loads the main scene and registers autoload managers for quests, dialogue, saving, spawning, audio, transitions, lessons, guidance, scoring, and feedback.',
      },
      {
        label: 'Narrative flow',
        detail: 'NPC and hub scripts request dialogue from DialogueManager, add or complete Quest objects through QuestManager, and move the player into the required lesson scene.',
      },
      {
        label: 'Lesson runtime',
        detail: 'Each chemistry activity runs in its own scene. LessonManager and topic managers track element or compound use, run counts, scores, and level completion while preventing immediate repetition.',
      },
      {
        label: 'Progress updates',
        detail: 'Completed activities update density or states-of-matter progress, emit quest signals, unlock the next quest or level, and request a scene transition through the shared managers.',
      },
      {
        label: 'Local persistence',
        detail: 'SaveManager writes scene, spawn, quest, feedback, density, and state progress to user://save.json. LessonManager separately stores spawn history and run counters in user://lesson_data.json.',
      },
    ],
  },
  '02': {
    overview: [
      'StudentFlow is a Laravel 12 student and classroom management system with three clients and access patterns: a Blade web application using session authentication, a REST API using Laravel Sanctum tokens, and a native Java Android client that calls the API through Retrofit. Administrator, teacher, and student actions are separated by role and active-account middleware.',
      'Administrators manage teacher accounts, school settings, and activity logs. Teachers manage their own classes, enrollments, join requests, attendance, weighted grade categories, grade items, scores, assignments, announcements, and exams. Students use a separate portal for their profile, classes, announcements, assignments, grades, attendance, exams, and classroom join requests.',
      'The grading and exam logic is handled on the server rather than trusted to the clients. Grade weights are validated against a 100 percent total, scores are checked against each item\'s maximum, final grades are calculated by category, and exam submissions are checked for ownership, availability, duration, duplicate answers, and valid question membership before scores are saved.',
    ],
    features: [
      'Administrator, teacher, and student roles',
      'Session and Sanctum authentication',
      'Google and GitHub student sign-in',
      'Class enrollment and join requests',
      'Attendance records and statistics',
      'Weighted grade calculation',
      'Assignments and submissions',
      'Timed exams and magic exam links',
      'Announcements, audit logs, and PDF reports',
      'Native Java Android client',
    ],
    architecture: [
      {
        label: 'Client request',
        detail: 'Blade pages use Laravel sessions, while the Android app and other API clients send Sanctum bearer tokens. Social sign-in endpoints create or connect student accounts before issuing API access.',
      },
      {
        label: 'Access control',
        detail: 'Routes pass through authentication, active-account, and role middleware. Controllers then verify class ownership so teachers can modify only their assigned classes while administrators retain wider access.',
      },
      {
        label: 'Domain processing',
        detail: 'Controllers validate classroom operations and delegate sensitive work to server services. GradeController checks category totals and score limits; ExamSubmissionService validates timing and answers before calculating a score.',
      },
      {
        label: 'Data transaction',
        detail: 'Eloquent models and database transactions store users, classes, enrollments, attendance, grades, assignments, announcements, exams, attempts, answers, and logs. Local development is configured for SQLite.',
      },
      {
        label: 'Response and output',
        detail: 'The same records are returned as Blade views or JSON for Retrofit. Exam scores can synchronize to grade items, announcements can trigger email, and report endpoints generate PDF output through Dompdf.',
      },
    ],
  },
  '03': {
    overview: [
      'TsukiAI is a .NET 8 Windows voice application built with WPF and an ASP.NET Core host. It coordinates speech recognition, configurable model inference, and speech synthesis, while the desktop interface provides configuration and runtime visibility. The core library also includes SQLite support and resilience policies for outbound service calls.',
      'The repository contains a separate Node.js Discord voice bridge. That bridge joins a configured voice channel, decodes Discord Opus audio to PCM, applies volume-based voice activity detection, groups speech into per-user turns, and sends each completed turn through either a cloud speech-to-text provider or the C# speech endpoint.',
      'After transcription, the bridge sends text to the C# /api/voice/process-binary endpoint. The C# side performs the model and text-to-speech stages and returns audio bytes. The bridge places those bytes in a playback queue and streams them back into Discord. The current system therefore depends on the desktop API and whichever speech and model endpoints are configured at runtime.',
    ],
    features: [
      'Windows WPF desktop application',
      'Local ASP.NET Core voice API',
      'Discord voice capture and playback',
      'RMS-based voice activity detection',
      'Per-user turn buffering and cooldowns',
      'Local or cloud speech-to-text paths',
      'Configurable remote model endpoint',
      'Queued text-to-speech playback',
      'HTTP retry and resilience handling',
      'Core and runtime test projects',
    ],
    architecture: [
      {
        label: 'Voice capture',
        detail: 'The Discord bridge subscribes to a user\'s voice stream, decodes Opus frames to 48 kHz PCM, applies RMS-based speech detection, and groups segments until silence or the configured turn limit.',
      },
      {
        label: 'Speech recognition',
        detail: 'A completed PCM turn is sent to AssemblyAI or Groq Whisper when configured. Otherwise it is base64-encoded and posted to the C# /api/voice/stt endpoint for local recognition.',
      },
      {
        label: 'C# processing',
        detail: 'The transcription is posted to /api/voice/process-binary. The WPF/ASP.NET Core process sends the text to the configured inference service, applies its runtime settings, and requests synthesized speech.',
      },
      {
        label: 'Audio return',
        detail: 'The C# endpoint returns raw audio bytes and may include the generated text in a response header. The bridge orders replies in a priority queue to prevent overlapping playback.',
      },
      {
        label: 'Discord playback',
        detail: 'The bridge creates a Discord audio resource from the returned PCM stream, plays it through the active voice connection, and releases the focused user after processing completes or fails.',
      },
    ],
  },
  '04': {
    overview: [
      'Oozeborne is an in-development Godot 4.6 co-op survivors game. The game client contains systems for main classes and subclasses, skills, status effects, levels, coins, shops, upgrades, slime variants, multiplayer state, local run saving, and cloud saving. The current main scene starts at an authentication menu rather than directly entering a match.',
      'The multiplayer backend is the custom Moon Server stack. Authentication, room creation, room joining, profiles, and administration are handled by a Node.js and Express lobby API. Active gameplay uses a separate Go WebSocket server that validates JWTs, creates room state in memory, combines class and subclass statistics, accepts input opcodes, and broadcasts player and world updates.',
      'The Go server controls wave starts, mob spawning, skill cooldowns, mana use, item purchases, effects, and connection limits. PostgreSQL stores persistent account and progression records through the lobby services, while Redis is used for shared runtime configuration and server commands. A Next.js admin portal connects to the same services for monitoring and live configuration.',
    ],
    features: [
      'Godot co-op survivors client',
      'Main-class and subclass combinations',
      'Skill, status-effect, and upgrade systems',
      'JWT account authentication',
      'Room-code multiplayer lobbies',
      'Go WebSocket gameplay server',
      'Server-controlled waves, mobs, skills, and items',
      'PostgreSQL persistence and Redis runtime state',
      'Next.js administration portal',
      'Docker Compose service stack',
    ],
    architecture: [
      {
        label: 'Authentication and lobby',
        detail: 'The Godot client registers or logs in through the Express lobby API, stores the returned session under user://, and requests a room. Create or join responses provide a room ID, room code, and game-server WebSocket URL.',
      },
      {
        label: 'WebSocket admission',
        detail: 'Godot connects with the JWT and room identifiers. The Go server verifies the token, checks connection and room limits, loads class/subclass configuration, creates the player state, and sends snapshots of existing players.',
      },
      {
        label: 'Authoritative simulation',
        detail: 'Clients send typed opcodes for input, readiness, skills, purchases, chat, and other actions. The Go room validates and queues input, starts waves, spawns mobs, applies cooldowns and effects, and updates player vitals and builds.',
      },
      {
        label: 'State synchronization',
        detail: 'The server broadcasts joins, leaves, movement and combat state, wave events, effects, and room messages. Godot normalizes each envelope into match-state signals used by gameplay scenes and UI managers.',
      },
      {
        label: 'Persistent and admin services',
        detail: 'The lobby API writes persistent records to PostgreSQL. Redis carries shared configuration and admin commands, while the Next.js portal reads service data and sends live tuning updates inside the Docker Compose network.',
      },
    ],
  },
  '05': {
    overview: [
      'Type Duel is a Godot 4.6 two-player typing-combat game with a Node.js and Express backend. Players create accounts, enter a matchmaking queue or a room code, select a character, two active skills, and a passive effect, then complete repeating skill-selection and typing phases until one character reaches zero health or a player forfeits.',
      'The backend separates temporary match state from persistent account data. Active rooms, queue entries, timers, progress, chosen skills, health, mana, streaks, mutations, disconnect state, and rematch flags are kept in an in-memory RoomStore. Accounts, social records, chat messages, leaderboard entries, feedback, and match history are stored in SQLite.',
      'The match is not fully server-simulated. The server validates membership, selections, progress ranges, chosen skills, timing state, and first-finish ordering, and it can advance the phase when both players have selected a skill. However, the host remains authoritative for phase requests and health/streak synchronization, so the architecture should be described as host-authoritative combat with server-managed room validation and persistence.',
    ],
    features: [
      'Registration and token-based login',
      'Matchmaking queue and room codes',
      'Character, active-skill, and passive selection',
      'Skill-selection and typing phases',
      'Progress, typo, mana, health, and streak synchronization',
      'Disconnect forfeits and rematches',
      'Friends, direct/global chat, and presence',
      'Leaderboard, feedback, and match history',
      'Socket.IO and WebSocket event transport',
      'SQLite persistent records',
    ],
    architecture: [
      {
        label: 'Account and lobby',
        detail: 'The Godot client uses REST endpoints for authentication, profiles, social data, room creation, room joining, and matchmaking. MatchmakingService pairs queued users, while RoomStore creates an in-memory two-player room.',
      },
      {
        label: 'Loadout validation',
        detail: 'Each client submits its character, active skills, and passive. The server checks that the request belongs to the authenticated actor, validates the selections, and allows only the host to start after both players are ready.',
      },
      {
        label: 'Round synchronization',
        detail: 'RoomStateService initializes skill-select and typing phases. Clients report progress, typos, mana, selected skills, and mutations; the server clamps values, records the first finisher, and advances to typing when both skills are chosen.',
      },
      {
        label: 'Combat resolution',
        detail: 'The host calculates combat results and sends health and streak values. The server accepts HP synchronization only from the host, detects a finished match or forfeit, and exposes the latest room snapshot through REST and real-time events.',
      },
      {
        label: 'Result persistence',
        detail: 'MatchResultService writes completed outcomes to SQLite and updates history or leaderboard data. Room cleanup removes expired rooms and handles disconnect forfeits, while social and chat routes use the same persistent database.',
      },
    ],
  },
  '06': {
    overview: [
      'CSCprep is a client-side React and TypeScript reviewer for Civil Service Examination practice. It does not require user accounts or a database server. Question content is loaded from local JSON files grouped into verbal reasoning, numerical reasoning, analytical ability, Filipino, and general information, with a separate fixed-exam data set.',
      'Users can start a mixed exam, a subject-specific exam, or a fixed exam and optionally enable a timer. The exam generator allocates question counts by mode, filters invalid entries, avoids recently used questions where possible, shuffles eligible questions and choices, and preserves ordering for image-dependent questions.',
      'The React application manages answers, skipped-item warnings, hints, remaining time, results, review filters, attempt history, subject statistics, question reports, themes, and in-progress recovery. These records are saved in localStorage, so progress remains tied to the current browser unless the user manually moves the browser data.',
    ],
    features: [
      'Mixed, subject-specific, and fixed exams',
      'Optional timed sessions',
      'Local JSON question banks',
      'Image-backed questions',
      'Question and choice randomization',
      'Question reuse cooldowns',
      'Skipped-item confirmation and hints',
      'Answer review and subject statistics',
      'In-progress exam recovery',
      'Local attempt history and question reports',
    ],
    architecture: [
      {
        label: 'Question loading',
        detail: 'TypeScript imports the five subject JSON files into a combined question bank and loads a separate fixed-exam set. Only entries with a prompt and at least two choices are eligible.',
      },
      {
        label: 'Session generation',
        detail: 'createExamSession reads local question history, applies mixed or subject allocations, uses cooldown rules to reduce repetition, shuffles eligible items, and builds numbered ExamQuestion objects.',
      },
      {
        label: 'Exam runtime',
        detail: 'App.tsx owns the active session, answer map, timer, skipped-item queue, hints, and screen transitions. A serialized draft stores the session, answers, and remaining time for recovery after refresh.',
      },
      {
        label: 'Submission and review',
        detail: 'Submitting an exam compares selected choices with the local answer data, calculates the score and per-subject statistics, builds review items with explanations, and records which questions were answered.',
      },
      {
        label: 'Browser persistence',
        detail: 'localStorage stores completed-exam counts, question cooldown history, full attempt history, in-progress state, question reports, and theme settings. Vite type-checks and bundles the application as a static site.',
      },
    ],
  },
  '07': {
    overview: [
      'PocketTrade is a used-phone marketplace composed of a Flutter mobile application, a React administration panel, and a NestJS 11 API. Buyers browse and filter active listings, save favorites, open a conversation tied to a listing, and report suspicious activity. Sellers create listings with ordered images, update them, mark devices sold, or republish eligible records.',
      'Authentication supports password registration and login, email OTP verification, password reset, access tokens, refresh tokens, logout, token revocation, and account-status checks. NestJS applies global throttling, JWT, and role guards before requests reach modules for users, listings, storage, favorites, conversations, blocks, reports, push tokens, and administration.',
      'Messaging is persisted before it is broadcast. The service confirms that the listing is active, the buyer is not the seller, neither participant has blocked the other, and the requesting user belongs to the conversation. It then writes the message and timestamp in a transaction, emits the message to an authenticated Socket.IO room, and sends a Firebase notification to the other participant.',
    ],
    features: [
      'Flutter buyer and seller application',
      'React administration panel',
      'Password and email OTP authentication',
      'Access and refresh token management',
      'Searchable used-phone listings',
      'Ordered Cloudinary listing images',
      'Favorites, blocks, and reports',
      'Listing-specific buyer/seller conversations',
      'Authenticated Socket.IO message delivery',
      'Firebase push notifications',
    ],
    architecture: [
      {
        label: 'Client authentication',
        detail: 'Flutter and the React admin panel call the NestJS API. Auth endpoints issue versioned JWT access and refresh tokens; global guards reject revoked sessions, inactive users, unauthorized roles, and excessive requests.',
      },
      {
        label: 'Marketplace operations',
        detail: 'Listings, brands, favorites, profiles, blocks, and reports pass through module controllers and services. Uploaded device photos are stored through Cloudinary, while listing metadata and image order are stored through Prisma.',
      },
      {
        label: 'Persistent data model',
        detail: 'Prisma maps PostgreSQL tables for users, OTP requests, refresh-token revocations, listings, images, conversations, messages, favorites, blocks, push tokens, reports, brands, and search logs.',
      },
      {
        label: 'Conversation delivery',
        detail: 'The REST service validates participants and blocks, writes the message and last-message timestamp in one transaction, then ConversationsGateway emits messageCreated to the authorized conversation room.',
      },
      {
        label: 'Notification and moderation',
        detail: 'PushService notifies the offline participant through Firebase. The React admin client uses protected API routes to review listings, users, reports, account status, and marketplace activity from the same PostgreSQL data.',
      },
    ],
  },
  '08': {
    overview: [
      'Cash Me Out is a Next.js 15 archive for selected internet events from 2020. Public routes are organized at year, month, and day levels and render entries in a newspaper-style layout. The public loader requests only records whose status is published and whose period falls inside the requested date range.',
      'Supabase is the managed source for editorial records, but the public archive has a deliberate local fallback. When Supabase is not configured, returns no entries, or fails, curated JSON items are normalized into the same CapsuleEntry shape and rendered as published fallback content. This keeps the public archive readable during local development or a data-service outage.',
      'The administration area supports entry listing, search, status filters, creation, editing, review, preview, publishing, and archiving. Access requires the hidden entry point, a valid email magic token, a TOTP code, a short-lived fingerprinted session cookie, and a desktop user agent. Published changes trigger period revalidation so public routes refresh their cached content.',
    ],
    features: [
      'Year, month, and day archive routes',
      'Published-only public queries',
      'Curated local fallback content',
      'Entry creation and editing',
      'Review and watermarked draft preview',
      'Publish and archive actions',
      'Magic-link and TOTP verification',
      'Short-lived fingerprinted admin sessions',
      'Desktop-only protected administration',
      'Period-based cache revalidation',
    ],
    architecture: [
      {
        label: 'Public route request',
        detail: 'A Next.js year, month, or day route parses and validates the requested period, then calls loadPublicCapsule with the matching granularity.',
      },
      {
        label: 'Content provider',
        detail: 'The loader queries Supabase capsule_entries for published records inside the date range. If the query fails or returns nothing, curated 2020 JSON items are normalized into CapsuleEntry records.',
      },
      {
        label: 'Capsule rendering',
        detail: 'buildCapsule organizes the selected entries for NewspaperPage. Server-rendered routes attach period metadata and use Next.js revalidation for cached public output.',
      },
      {
        label: 'Admin authentication',
        detail: 'Middleware hides admin pages from mobile clients and requests without a session. Access endpoints verify the magic token and TOTP code, invalidate the token, fingerprint the request, and set the admin cookie.',
      },
      {
        label: 'Editorial mutation',
        detail: 'Protected API routes list, create, update, publish, or archive Supabase entries through admin services. When a record becomes public, the affected year, month, or day route is revalidated.',
      },
    ],
  },
};

import { useRef, useState, useEffect, memo, useMemo, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Blocks, Database, Server, Workflow, AudioLines, Bot, Brain, Gamepad2, MessageSquareMore, Mic, Puzzle } from 'lucide-react';
import imgNeon from '../../assets/images/projects/optimized/desktop_workspace.jpg';
import imgSignal from '../../assets/images/projects/optimized/electronic_office_dualscreen.jpg';
import imgAtlas from '../../assets/images/projects/optimized/minimalist_monitors.jpg';
import imgAR from '../../assets/images/projects/optimized/augmented_reality_headset.jpg';

const experience = [
  {
    year: '2024',
    role: 'Full-Stack Developer Intern',
    place: 'Acme Solutions Inc.',
    summary: 'Built a React dashboard with login and 2FA, developed a Node.js backend with 15+ REST endpoints, automated email-to-CSV reporting with n8n, and implemented Supabase PostgreSQL schemas with row-level security.',
    highlights: ['React', 'Node.js', 'Supabase', 'n8n']
  }
];

const projects = [
  { 
    id: '01', 
    title: 'TSUKIAI', 
    line2: 'VOICE COMPANION', 
    category: 'AI',
    des: 'Desktop AI assistant with WPF and C# orchestration, local and remote LLM routing, and a real-time voice pipeline tuned for sub-100ms response.', 
    img: imgNeon, 
    stack: ['WPF', 'C#', 'Node.js', 'Python'],
    metric: 'Sub-100ms Latency'
  },
  { 
    id: '02', 
    title: 'DISCORD', 
    line2: 'VOICE BRIDGE', 
    category: 'AI',
    des: 'Concurrent Discord voice bridge with per-user state management, audio segmentation, voice activity detection, and live session handling.', 
    img: imgSignal, 
    stack: ['Node.js', 'Discord', 'Audio', 'VAD'],
    metric: 'Real-time Audio'
  },
  { 
    id: '03', 
    title: 'CHEMQUEST2', 
    line2: 'MOBILE GAME', 
    category: 'GAMES',
    des: 'Scene-driven educational chemistry RPG covering quest systems, save and load flows, scene transitions, NPC dialogue, and modular JSON-driven lesson content.', 
    img: imgAtlas, 
    stack: ['Godot', 'GDScript', 'Mobile', 'JSON'],
    metric: 'Educational RPG'
  },
  { 
    id: '04', 
    title: 'SEMANTIC', 
    line2: 'MEMORY HELPER', 
    category: 'AI',
    des: 'Python memory helper for better context retention inside TsukiAI, supporting daily chatmate features and longer-running conversational state.', 
    img: imgAR, 
    stack: ['Python', 'Memory', 'AI', 'Context'],
    metric: 'Context Retention'
  },
];

const highlightIcons = {
  React: Blocks,
  'Node.js': Server,
  Supabase: Database,
  n8n: Workflow,
} as const;

const stackIcons = {
  WPF: Puzzle,
  'C#': Bot,
  'Node.js': Server,
  Python: Workflow,
  Discord: MessageSquareMore,
  Audio: AudioLines,
  VAD: Mic,
  Godot: Gamepad2,
  GDScript: Puzzle,
  Mobile: Gamepad2,
  JSON: Puzzle,
  Memory: Brain,
  AI: Bot,
  Context: Brain,
} as const;

export const WorksSection = memo(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [enOpacity, setEnOpacity] = useState(0);
  const [selectedId, setSelectedId] = useState<string>(projects[0].id);

  const selectedProject = useMemo(() => {
    const found = projects.find(p => p.id === selectedId);
    if (found) return found;
    return projects[0];
  }, [selectedId]);

  const sideProjects = useMemo(() => {
    return projects.filter(p => p.id !== selectedProject?.id);
  }, [selectedProject]);

  useEffect(() => {
    const handleEnReveal = (e: CustomEvent) => {
      if (e.detail.opacity !== undefined) {
        setEnOpacity(e.detail.opacity);
      } else {
        setEnOpacity(e.detail.visible ? 1 : 0);
      }
    };
    window.addEventListener('en-reveal', handleEnReveal as EventListener);
    return () => window.removeEventListener('en-reveal', handleEnReveal as EventListener);
  }, []);

  return (
    <section id="works" className="stack-section mask-shaped-section works-combined-section" style={{ zIndex: 140, '--mask-color': '#6c2bd9' } as CSSProperties}>
      <div className="clip-gap-outer parallax-content h-full w-full">
        <div className="clip-gap-inner absolute inset-0 bg-black overflow-hidden">
          <div ref={scrollContainerRef} className="works-scroll-container h-full w-full overflow-x-auto overflow-y-hidden locked-content bg-black flex">
            
            {/* Experience Part */}
            <div className="experience-part relative min-w-screen h-full flex flex-col justify-center px-6 py-32 flex-shrink-0">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
                  <ellipse cx="350" cy="400" rx="280" ry="180" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.3" />
                  <ellipse cx="1550" cy="650" rx="320" ry="200" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </div>
              <div className="relative z-10 mx-auto w-full max-w-6xl">
                <div className="experience-header mb-14">
                  <div className="tech-font mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-[#6b6486]">
                    <span className="h-[1px] w-8 bg-[#7c3aed]/30"></span>
                    <span>History</span>
                  </div>
                  <h2 className="heading-font text-4xl font-bold leading-[0.95] tracking-tight text-white md:text-6xl">
                    WORK <span className="text-[#7c3aed]">EXPERI<span className="text-white transition-opacity duration-0" style={{ opacity: enOpacity }}>EN</span></span>
                  </h2>
                </div>
                <div className="space-y-6">
                  {experience.map((item) => (
                    <div key={item.role} className="group relative rounded-[20px] border border-white/5 bg-white/5 p-6 transition-all duration-500 hover:bg-white/10 md:p-8">
                      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="tech-font mb-2 text-sm font-bold text-[#7c3aed]">{item.year}</div>
                          <h3 className="text-2xl font-semibold text-white md:text-3xl">{item.role}</h3>
                          <div className="tech-font mt-1 text-[11px] uppercase tracking-wider text-white/50">{item.place}</div>
                          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/70">{item.summary}</p>
                          <div className="mt-6 flex flex-wrap gap-4">
                            {item.highlights.map((tag) => {
                              const Icon = highlightIcons[tag as keyof typeof highlightIcons];
                              return (
                                <span key={tag} className="tech-font flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/40 group-hover:text-white/60">
                                  <Icon size={14} /> {tag}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Part */}
            <div className="projects-wrapper relative min-w-screen h-full flex-shrink-0">
              <div className="projects-part relative h-full flex flex-col justify-center px-6 md:px-12">
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:h-[550px] w-full max-w-7xl mx-auto">
                  {/* Main Gallery Display */}
                  <div className="lg:col-span-4 h-full relative group overflow-hidden rounded-[20px] border border-white/10 bg-black/50">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedProject.id}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <img 
                          src={selectedProject.img} 
                          alt={selectedProject.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`text-${selectedProject.id}`}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <span className="tech-font text-[10px] text-white uppercase tracking-[0.3em] border border-white/30 px-3 py-1 rounded-full">
                              {selectedProject.category}
                            </span>
                            <span className="tech-font text-[10px] text-white/50 uppercase tracking-widest">
                              {selectedProject.metric}
                            </span>
                          </div>
                          
                          <h3 className="heading-font text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            {selectedProject.title}<br/>{selectedProject.line2}
                          </h3>
                          
                          <p className="text-white/70 text-sm md:text-base max-w-2xl mb-8 font-light leading-relaxed">
                            {selectedProject.des}
                          </p>

                          <div className="flex flex-wrap gap-4 mb-8">
                            {selectedProject.stack.map(s => {
                              const Icon = stackIcons[s as keyof typeof stackIcons] ?? Puzzle;
                              return (
                                <span key={s} className="tech-font flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/60">
                                  <Icon size={13} />{s}
                                </span>
                              );
                            })}
                          </div>

                          <button className="bg-white text-black px-10 py-4 rounded-full tech-font text-[11px] font-bold uppercase tracking-wider hover:bg-[#7c3aed] hover:text-white transition-all duration-300 transform hover:scale-105">
                            View Project
                          </button>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Side Gallery (Thumbnails) */}
                  <div className="lg:col-span-1 lg:h-full flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2">
                    <AnimatePresence mode='popLayout'>
                      {sideProjects.map((project) => (
                        <motion.div 
                          key={project.id} 
                          layout
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          onClick={() => setSelectedId(project.id)}
                          className="cursor-pointer group relative w-full aspect-[16/10] lg:h-[160px] flex-shrink-0 overflow-hidden rounded-[15px] border border-white/10 hover:border-[#7c3aed]/50 transition-all duration-500"
                        >
                          <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="tech-font text-[10px] text-white/90 uppercase tracking-widest truncate">{project.title}</p>
                            <p className="tech-font text-[8px] text-white/50 uppercase tracking-[0.2em] mt-1">{project.category}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .works-scroll-container::-webkit-scrollbar { display: none; }
        .works-scroll-container { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; overscroll-behavior-x: contain; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(124, 58, 237, 0.3); border-radius: 10px; transition: background 0.3s; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(124, 58, 237, 0.6); }
      `}</style>
    </section>
  );
});

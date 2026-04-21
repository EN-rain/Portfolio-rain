import { useRef, useState, useEffect, memo, useMemo, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Blocks, Database, Server, Workflow, AudioLines, Bot, Brain, Gamepad2, MessageSquareMore, Mic, Puzzle } from 'lucide-react';
import { useMobileReveal } from '../../hooks/useMobileReveal';
import { experience, projects } from '../../data/works';

const highlightIcons = {
  React: Blocks,
  'Node.js': Server,
  'Express.js': Server,
  Supabase: Database,
  PostgreSQL: Database,
  n8n: Workflow,
  TypeScript: Blocks,
  'Tailwind CSS': Blocks,
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
  const experienceRef = useMobileReveal<HTMLDivElement>();
  const projectsRef = useMobileReveal<HTMLDivElement>();

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
          <div ref={scrollContainerRef} className="works-scroll-container h-full w-full overflow-y-auto overflow-x-hidden locked-content bg-black flex flex-col">
            
            {/* Experience Part */}
            <div ref={experienceRef} className="experience-part relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 flex-shrink-0">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
                  <ellipse cx="350" cy="400" rx="280" ry="180" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.3" />
                  <ellipse cx="1550" cy="650" rx="320" ry="200" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </div>
              <div className="relative z-10 w-full max-w-none">
                <div className="experience-header mb-8 md:mb-12">
                  <h2 className="heading-font text-[28px] font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
                    WORK <span className="text-[#7c3aed] whitespace-nowrap">EXPERI<span data-en-target="experience-en" className="text-white" style={{ opacity: enOpacity }}>EN</span>CE</span>
                  </h2>
                </div>
                <div className="space-y-6">
                  {experience.map((item) => (
                    <div key={item.role} className="group relative rounded-[20px] border border-white/10 bg-white/10 p-6 transition-all duration-500 md:p-8">
                      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="tech-font mb-2 text-sm font-bold text-[#7c3aed]">{item.year}</div>
                          <h3 className="text-2xl font-semibold text-white md:text-3xl">{item.role}</h3>
                          <div className="tech-font mt-1 text-[11px] uppercase tracking-wider text-white/50">{item.place}</div>
                          <p className="mt-4 max-w-none text-[14px] leading-relaxed text-white/70 whitespace-pre-line">{item.summary}</p>
                          <div className="mt-6 flex flex-wrap gap-4">
                            {item.highlights.map((tag) => {
                              const Icon = highlightIcons[tag as keyof typeof highlightIcons];
                              return (
                                <span key={tag} className="tech-font flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/60">
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
            <div ref={projectsRef} className="projects-wrapper relative min-h-screen w-full flex-shrink-0 overflow-hidden">
              <div className="projects-part relative min-h-screen flex flex-col justify-center px-6 md:px-12 w-full max-w-full">
                
                {/* Projects Header */}
                <div className="relative z-10 mx-auto w-full max-w-7xl mb-8 md:mb-12">
                  <h2 className="heading-font text-[28px] font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl uppercase">
                    PERSONAL <span className="text-[#7c3aed] whitespace-nowrap">PROJE<span data-en-target="projects-ct" className="text-white transition-opacity duration-0" style={{ opacity: enOpacity }}>CT</span>S</span>
                  </h2>
                </div>

                {/* Desktop Projects Structure */}
                <div className="hidden lg:grid lg:grid-cols-5 gap-6 lg:h-[460px] w-full max-w-7xl mx-auto items-project-container">
                  {/* Main Gallery Display */}
                  <div data-section2="image" className="lg:col-span-4 h-full relative group overflow-hidden rounded-[20px] border border-white/10 bg-black/50">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedProject.id}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {selectedProject.img ? (
                          <img 
                            src={selectedProject.img} 
                            alt={selectedProject.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-black" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        {!selectedProject.img && selectedProject.status && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="heading-font text-[56px] tracking-[0.22em] text-white/10 uppercase">
                              {selectedProject.status}
                            </div>
                          </div>
                        )}
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
                          <div className="tech-font text-[12px] font-bold text-[#7c3aed] mb-2">{selectedProject.year}</div>
                          <h3 className="heading-font text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            {selectedProject.title}<br/>{selectedProject.line2}
                          </h3>
                          
                          <p data-section2="desc" className="text-white/70 text-[11px] md:text-xs max-w-2xl mb-8 font-light leading-relaxed">
                            {selectedProject.des}
                          </p>

                          {(selectedProject.hoursSpent || selectedProject.timeline) && (
                            <div className="mb-8">
                              {selectedProject.hoursSpent && (
                                <div className="tech-font text-[10px] uppercase tracking-widest text-white/60 mb-3">
                                  Time spent: <span className="text-white/80">{selectedProject.hoursSpent}</span>
                                </div>
                              )}
                              {selectedProject.timeline && selectedProject.timeline.length > 0 && (
                                <div className="space-y-2">
                                  {selectedProject.timeline.map((t) => (
                                    <div key={t.label} className="flex gap-3">
                                      <div className="tech-font text-[9px] uppercase tracking-widest text-[#7c3aed] w-[76px] flex-shrink-0">
                                        {t.label}
                                      </div>
                                      <div className="text-white/60 text-[11px] leading-relaxed">
                                        {t.detail}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          <div data-section2="skills" className="flex flex-wrap gap-4 mb-8">
                            {selectedProject.stack.map(s => {
                              const Icon = stackIcons[s as keyof typeof stackIcons] ?? Puzzle;
                              return (
                                <span key={s} className="tech-font flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/60">
                                  <Icon size={13} />{s}
                                </span>
                              );
                            })}
                          </div>

                          <button className="lg:hidden bg-white text-black px-10 py-4 rounded-full tech-font text-[11px] font-bold uppercase tracking-wider hover:bg-[#7c3aed] hover:text-white transition-all duration-300 transform hover:scale-105">
                            View Project
                          </button>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Side Gallery (Thumbnails) */}
                  <div className="lg:col-span-1 lg:h-full flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2 relative">
                    <AnimatePresence mode='popLayout'>
                      {sideProjects.map((project) => (
                        <motion.div 
                          key={project.id} 
                          layout
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          onClick={() => setSelectedId(project.id)}
                          className="cursor-pointer group relative w-full aspect-[16/10] lg:h-[145px] flex-shrink-0 overflow-hidden rounded-[15px] border border-white/10 hover:border-[#7c3aed]/50 transition-[border-color,transform] duration-500"
                        >
                          <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="tech-font text-[10px] text-white/90 uppercase tracking-widest truncate">{project.title}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Mobile Projects Structure */}
                <div className="lg:hidden flex flex-col gap-10 w-full">
                  {projects.map((project) => (
                    <div key={project.id} className="w-full flex flex-col gap-5">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] border border-white/5">
                        {project.img ? (
                          <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-70"
                          />
                        ) : (
                          <div className="w-full h-full bg-black" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        {!project.img && project.status && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="heading-font text-[28px] tracking-[0.22em] text-white/10 uppercase">
                              {project.status}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col px-1">
                        <div className="tech-font text-[11px] font-bold text-[#7c3aed] mb-1">{project.year}</div>
                        <h3 className="heading-font text-2xl font-bold text-white mb-2 tracking-tight">
                          {project.title} <span className="text-[#7c3aed]">{project.line2}</span>
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-4 font-light">
                          {project.des}
                        </p>

                        {(project.hoursSpent || project.timeline) && (
                          <div className="mb-5">
                            {project.hoursSpent && (
                              <div className="tech-font text-[9px] uppercase tracking-widest text-white/60 mb-3">
                                Time spent: <span className="text-white/80">{project.hoursSpent}</span>
                              </div>
                            )}
                            {project.timeline && project.timeline.length > 0 && (
                              <div className="space-y-2">
                                {project.timeline.map((t) => (
                                  <div key={t.label} className="flex gap-3">
                                    <div className="tech-font text-[8px] uppercase tracking-widest text-[#7c3aed] w-[66px] flex-shrink-0">
                                      {t.label}
                                    </div>
                                    <div className="text-white/60 text-[12px] leading-relaxed">
                                      {t.detail}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                           {project.stack.map(s => {
                              const Icon = stackIcons[s as keyof typeof stackIcons] ?? Puzzle;
                              return (
                                <span key={s} className="tech-font flex items-center gap-1.5 text-[8px] uppercase tracking-widest text-[#7c3aed]/80">
                                  <Icon size={10} />{s}
                                </span>
                              );
                           })}
                        </div>

                        <button className="w-full border border-white/10 bg-white/5 text-white py-4 rounded-xl tech-font text-[10px] font-bold uppercase tracking-widest active:bg-[#7c3aed] active:border-[#7c3aed] transition-colors">
                          Project Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .works-scroll-container::-webkit-scrollbar { display: none; }
        .works-scroll-container { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; overscroll-behavior-y: contain; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(124, 58, 237, 0.3); border-radius: 10px; transition: background 0.3s; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(124, 58, 237, 0.6); }
        .projects-part { width: 100%; }
        .items-project-container { margin-bottom: 48px; }

        @media (max-width: 768px) {
          .works-scroll-container {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            background: #000000 !important;
            padding: 60px 0 20px !important;
            overflow: visible !important;
          }
          
          .projects-part, .projects-wrapper {
            position: relative !important;
            padding: 30px 24px 40px !important; 
            display: block !important;
            width: 100% !important;
          }

          .experience-part {
            padding: 20px 24px 40px !important; 
            min-height: auto !important;
          }

          .experience-header h2, .projects-part h2 {
            font-size: 22px !important;
            margin-bottom: 25px !important;
            line-height: 1.2 !important;
            letter-spacing: -0.03em !important;
            white-space: normal !important;
          }

          .experience-header, .projects-part .max-w-7xl {
             margin-bottom: 20px !important;
          }

          .lg\\:hidden.flex-col {
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
});

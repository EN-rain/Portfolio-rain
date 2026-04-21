import { useRef, useState, useEffect, memo, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
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
  const [selectedId, setSelectedId] = useState<string>('');
  const experienceRef = useMobileReveal<HTMLDivElement>();
  const projectsRef = useMobileReveal<HTMLDivElement>();

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

  // Lock body scroll and pause Lenis when a project is expanded
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.dispatchEvent(new Event('lenis-stop'));
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.dispatchEvent(new Event('lenis-start'));
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.dispatchEvent(new Event('lenis-start'));
    };
  }, [selectedId]);

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
                <div className="experience-header mb-4 md:mb-6">
                  <h2 className="heading-font text-[22px] font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
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
                <div className="relative z-10 mx-auto w-full max-w-7xl mb-8 md:mb-10">
                  <h2 className="heading-font text-[22px] font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl uppercase">
                    PERSONAL <span className="text-[#7c3aed] whitespace-nowrap">PROJE<span data-en-target="projects-ct" className="text-white transition-opacity duration-0" style={{ opacity: enOpacity }}>CT</span>S</span>
                  </h2>
                </div>

                {/* Projects Grid */}
                <div className="relative z-10 mx-auto w-full max-w-7xl">
                  <div className="projects-grid">
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        onClick={() => setSelectedId(project.id)}
                        className="project-card group cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="project-card-image">
                          {project.img ? (
                            <img
                              src={project.img}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] flex items-center justify-center">
                              {project.status && (
                                <span className="heading-font text-[14px] md:text-[18px] tracking-[0.15em] text-white/10 uppercase">{project.status}</span>
                              )}
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        </div>
                        <div className="project-card-info">
                          <div className="tech-font text-[10px] font-bold text-[#7c3aed] mb-1">{project.year}</div>
                          <h3 className="heading-font text-sm md:text-base font-bold text-white leading-tight">{project.title}</h3>
                          <p className="tech-font text-[9px] text-white/40 uppercase tracking-wider mt-1">{project.line2}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .works-scroll-container::-webkit-scrollbar { display: none; }
        .works-scroll-container { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; overscroll-behavior-y: contain; }
        .projects-part { width: 100%; }

        /* ── Project Grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── Project Card ── */
        .project-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          transition: border-color 0.4s ease;
        }
        .project-card:hover {
          border-color: rgba(124, 58, 237, 0.4);
        }
        .project-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .project-card-info {
          padding: 14px 16px 16px;
        }

        /* ── Expanded Overlay (scoped to projects area) ── */
        .project-expanded-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }
        .project-expanded-card {
          position: relative;
          width: 100%;
          max-width: 820px;
          max-height: 85vh;
          overflow: hidden;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #0d0d0d;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(124, 58, 237, 0.15);
        }
        .project-expanded-scroll {
          max-height: 85vh;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .project-expanded-scroll::-webkit-scrollbar { width: 4px; }
        .project-expanded-scroll::-webkit-scrollbar-track { background: transparent; }
        .project-expanded-scroll::-webkit-scrollbar-thumb { background: rgba(124, 58, 237, 0.3); border-radius: 10px; }
        .project-expanded-image {
          position: relative;
          width: calc(100% - 32px);
          margin: 20px 16px 0;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 12px;
        }
        .project-expanded-content {
          padding: 28px 32px 32px;
        }

        /* ── Close Button ── */
        .project-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 50;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .project-close-btn:hover {
          background: rgba(124, 58, 237, 0.6);
          border-color: rgba(124, 58, 237, 0.5);
          transform: rotate(90deg);
        }

        /* ── Scroll hint ── */
        .project-scroll-hint {
          position: absolute;
          bottom: 16px;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 6px 14px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: var(--font-tech, monospace);
          pointer-events: none;
          white-space: nowrap;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

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
            font-size: 18px !important;
            margin-bottom: 12px !important;
            line-height: 1.2 !important;
            letter-spacing: -0.03em !important;
            white-space: normal !important;
          }
          .experience-header, .projects-part .max-w-7xl {
            margin-bottom: 10px !important;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .project-expanded-backdrop {
            padding: 20px;
          }
          .project-expanded-card {
            max-height: 90vh;
          }
          .project-expanded-scroll {
            max-height: 90vh;
          }
          .project-expanded-content {
            padding: 20px 20px 24px;
          }
        }
      `}</style>

      {/* Expanded Project Overlay — portaled above everything */}
      {createPortal(
        <AnimatePresence>
          {selectedId && (() => {
            const proj = projects.find(p => p.id === selectedId);
            if (!proj) return null;
            return (
              <motion.div
                key="project-overlay"
                className="project-expanded-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId('')}
              >
                <motion.div
                  className="project-expanded-card"
                  data-lenis-prevent
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 40 }}
                  onClick={(e) => e.stopPropagation()}
                  onWheel={(e) => e.stopPropagation()}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    className="project-close-btn"
                    onClick={() => setSelectedId('')}
                    aria-label="Close project"
                  >
                    ✕
                  </button>

                  <div className="project-expanded-scroll">
                    {/* Header — above image */}
                    <div className="px-6 pt-4 pb-3">
                      <div className="tech-font text-[11px] font-bold text-[#7c3aed] mb-1">{proj.year}</div>
                      <h3 className="heading-font text-2xl md:text-3xl font-bold text-white leading-tight">{proj.title}</h3>
                      <p className="tech-font text-[10px] text-[#7c3aed]/70 uppercase tracking-widest mt-1">{proj.line2}</p>
                    </div>

                    {/* Image */}
                    <div className="project-expanded-image">
                      {proj.img ? (
                        <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] flex items-center justify-center">
                          {proj.status && (
                            <span className="heading-font text-[28px] tracking-[0.22em] text-white/10 uppercase">{proj.status}</span>
                          )}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>

                    {/* Content below image */}
                    <div className="project-expanded-content">
                      <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed mb-5 font-light w-full">
                        {proj.des}
                      </p>
                      {(proj.hoursSpent || proj.timeline) && (
                        <div className="mb-5">
                          {proj.hoursSpent && (
                            <div className="tech-font text-[10px] uppercase tracking-widest text-white/60 mb-3">
                              Time spent: <span className="text-white/80">{proj.hoursSpent}</span>
                            </div>
                          )}
                          {proj.timeline && proj.timeline.length > 0 && (
                            <div className="space-y-2">
                              {proj.timeline.map((t) => (
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
                      <div className="flex flex-wrap gap-3">
                        {proj.stack.map(s => {
                          const Icon = stackIcons[s as keyof typeof stackIcons] ?? Puzzle;
                          return (
                            <span key={s} className="tech-font flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/60">
                              <Icon size={13} />{s}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Scroll hint — absolute bottom center of card */}
                  <motion.div
                    className="project-scroll-hint"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, 0] }}
                    transition={{ duration: 2.5, times: [0, 0.2, 0.7, 1], delay: 0.6, ease: 'easeOut' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    scroll down
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
});

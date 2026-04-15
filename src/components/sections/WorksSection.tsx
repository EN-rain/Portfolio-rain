import { useRef, useCallback, useState, memo, type CSSProperties, type MouseEvent } from 'react';
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
  { id: '01', title: 'TSUKIAI', line2: 'VOICE COMPANION', des: 'Desktop AI assistant with WPF and C# orchestration, local and remote LLM routing, and a real-time voice pipeline tuned for sub-100ms response.', img: imgNeon, stack: ['WPF', 'C#', 'Node.js', 'Python'] },
  { id: '02', title: 'DISCORD', line2: 'VOICE BRIDGE', des: 'Concurrent Discord voice bridge with per-user state management, audio segmentation, voice activity detection, and live session handling.', img: imgSignal, stack: ['Node.js', 'Discord', 'Audio', 'VAD'] },
  { id: '03', title: 'CHEMQUEST2', line2: 'MOBILE GAME', des: 'Scene-driven educational chemistry RPG covering quest systems, save and load flows, scene transitions, NPC dialogue, and modular JSON-driven lesson content.', img: imgAtlas, stack: ['Godot', 'GDScript', 'Mobile', 'JSON'] },
  { id: '04', title: 'SEMANTIC', line2: 'MEMORY HELPER', des: 'Python memory helper for better context retention inside TsukiAI, supporting daily chatmate features and longer-running conversational state.', img: imgAR, stack: ['Python', 'Memory', 'AI', 'Context'] },
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

const pcAnimationDurationMs = 760;

const getWrappedIndex = (index: number) => (index + projects.length) % projects.length;

export const WorksSection = memo(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const transitionFrameRef = useRef<number>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState<{
    rect: any;
    src: string;
    targetIndex: number;
    type: 'next' | 'prev' | 'thumb';
  } | null>(null);

  const currentProject = projects[activeIndex];
  const visualActiveIndex = transition ? transition.targetIndex : activeIndex;
  const backgroundProject = transition?.type === 'prev'
    ? projects[transition.targetIndex]
    : currentProject;
  const transitionTargetProject = transition
    ? (transition.type === 'prev' ? null : projects[transition.targetIndex])
    : null;
  const contentProject = currentProject;

  const thumbnailProjects = projects.map((_, offset) => {
    const projectIndex = getWrappedIndex(visualActiveIndex + offset + 1);
    return {
      index: projectIndex,
      project: projects[projectIndex],
    };
  });

  const getThumbRect = useCallback((button: HTMLButtonElement) => {
    const carousel = carouselRef.current;
    if (!carousel) return null;
    const carouselRect = carousel.getBoundingClientRect();
    const thumbRect = button.getBoundingClientRect();
    const radius = Number.parseFloat(window.getComputedStyle(button).borderRadius) || 20;
    return {
      height: thumbRect.height,
      left: thumbRect.left - carouselRect.left,
      radius,
      stageHeight: carouselRect.height,
      stageWidth: carouselRect.width,
      top: thumbRect.top - carouselRect.top,
      width: thumbRect.width,
    };
  }, []);

  const finishTransition = useCallback((targetIndex: number) => {
    setActiveIndex(targetIndex);
    if (transitionFrameRef.current) cancelAnimationFrame(transitionFrameRef.current);
    transitionFrameRef.current = requestAnimationFrame(() => {
      transitionFrameRef.current = requestAnimationFrame(() => {
        setTransition(null);
        transitionFrameRef.current = undefined;
      });
    });
  }, []);

  const startTransition = useCallback((nextTransition: any) => {
    clearTimeout(timerRef.current);
    setTransition(nextTransition);
    timerRef.current = setTimeout(() => {
      finishTransition(nextTransition.targetIndex);
    }, pcAnimationDurationMs);
  }, [finishTransition]);

  const handleNext = useCallback(() => {
    if (transition) return;
    const sourceThumb = thumbRef.current?.querySelector(':scope > .pc-thumb') as HTMLButtonElement | null;
    const targetIndex = getWrappedIndex(activeIndex + 1);
    if (!sourceThumb) { setActiveIndex(targetIndex); return; }
    const rect = getThumbRect(sourceThumb);
    if (!rect) { setActiveIndex(targetIndex); return; }
    startTransition({ rect, src: projects[targetIndex].img, targetIndex, type: 'next' });
  }, [activeIndex, getThumbRect, startTransition, transition]);

  const handlePrev = useCallback(() => {
    if (transition) return;
    const sourceThumb = thumbRef.current?.querySelector(':scope > .pc-thumb') as HTMLButtonElement | null;
    const targetIndex = getWrappedIndex(activeIndex - 1);
    if (!sourceThumb) { setActiveIndex(targetIndex); return; }
    const rect = getThumbRect(sourceThumb);
    if (!rect) { setActiveIndex(targetIndex); return; }
    startTransition({ rect, src: currentProject.img, targetIndex, type: 'prev' });
  }, [activeIndex, currentProject.img, getThumbRect, startTransition, transition]);

  const handleThumbnailClick = useCallback((event: MouseEvent<HTMLButtonElement>, targetIndex: number) => {
    if (transition) return;
    const sourceThumb = event.currentTarget;
    const rect = getThumbRect(sourceThumb);
    const thumbImage = sourceThumb.querySelector('img');
    if (!rect || !thumbImage) return;
    startTransition({ rect, src: thumbImage.currentSrc || thumbImage.src, targetIndex, type: 'thumb' });
  }, [getThumbRect, startTransition, transition]);

  return (
    <section id="works" className="stack-section mask-shaped-section works-combined-section" style={{ zIndex: 130, '--mask-color': '#6c2bd9' } as CSSProperties}>
      <div className="clip-gap-outer parallax-content h-full w-full">
        <div className="clip-gap-inner absolute inset-0 bg-black overflow-hidden">
          <div ref={scrollContainerRef} className="works-scroll-container h-full w-full overflow-y-auto overflow-x-hidden locked-content bg-black">
            
            {/* Experience Part */}
            <div className="experience-part relative min-h-screen flex flex-col justify-center px-6 py-32">
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
                    WORK <span className="text-[#7c3aed]">EXPERI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; CE</span>
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

            {/* Gap to ensure they move up properly */}
            <div className="h-[20vh]" />

            {/* Projects Part */}
            <div className="projects-part relative min-h-screen pt-20">
              <div ref={carouselRef} className={`pc-carousel${transition ? ` is-${transition.type}-transition` : ''} h-screen w-full`}>
                <div className="pc-stage h-full w-full">
                  <div className="pc-slide pc-slide-active h-full w-full">
                    <img src={backgroundProject.img} alt={backgroundProject.title} className="pc-stage-image h-full w-full object-cover" />
                    {transitionTargetProject && <img src={transitionTargetProject.img} alt="" className="pc-stage-image pc-stage-image-target h-full w-full object-cover" />}
                    <div className="pc-content-track absolute inset-0 z-10 flex items-center px-[8%]">
                      <div key={contentProject.id} className="pc-content max-w-[700px] text-white">
                        <div className="pc-id tech-font text-sky-400 mb-4 tracking-[0.4em] text-[11px]">PROJECT {contentProject.id}</div>
                        <div className="pc-title text-4xl md:text-6xl font-extrabold uppercase leading-[1.05] tracking-tight">{contentProject.title}<br/>{contentProject.line2}</div>
                        <div className="pc-des mt-6 max-w-md text-sm text-white/70 leading-relaxed font-light">{contentProject.des}</div>
                        <div className="pc-stack mt-6 flex flex-wrap gap-4">
                          {contentProject.stack.map((s) => {
                            const Icon = stackIcons[s as keyof typeof stackIcons] ?? Puzzle;
                            return <span key={s} className="tech-font flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/60"><Icon size={13} />{s}</span>;
                          })}
                        </div>
                        <div className="pc-buttons mt-8"><button className="bg-white text-black px-8 py-3 rounded-lg tech-font text-[11px] font-bold uppercase tracking-wider hover:bg-sky-400 hover:text-white transition-colors">Selected Work</button></div>
                      </div>
                    </div>
                  </div>
                  {transition && (
                    <div className={`pc-transition-layer pc-transition-${transition.type}`} style={{
                      '--pc-expand-radius': `${transition.rect.radius}px`,
                      '--pc-expand-scale-x': transition.rect.width / transition.rect.stageWidth,
                      '--pc-expand-scale-y': transition.rect.height / transition.rect.stageHeight,
                      '--pc-expand-top': `${transition.rect.top}px`,
                      '--pc-expand-left': `${transition.rect.left}px`,
                    } as CSSProperties}>
                      <img src={transition.src} alt="" className="h-full w-full object-cover" />
                    </div>
                  )}
                </div>
                <div ref={thumbRef} className="pc-thumbnail absolute bottom-[52px] right-[-400px] flex gap-5 z-20">
                  {thumbnailProjects.map(({ index, project }) => (
                    <button key={project.id} className={`pc-thumb w-[260px] h-[150px] rounded-[20px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 ${transition?.targetIndex === index ? 'opacity-0' : ''}`} onClick={(e) => handleThumbnailClick(e, index)}>
                      <img src={project.img} alt={project.title} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="pc-arrows absolute bottom-[222px] right-[48px] flex gap-3 z-30">
                  <button onClick={handlePrev} className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white hover:bg-sky-400/30 transition-all">
                    <span className="tech-font text-[10px] tracking-widest uppercase">Prev</span>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><Puzzle size={14} /></div>
                  </button>
                  <button onClick={handleNext} className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white hover:bg-sky-400/30 transition-all">
                    <span className="tech-font text-[10px] tracking-widest uppercase">Next</span>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><Puzzle size={14} /></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .works-scroll-container::-webkit-scrollbar { display: none; }
        .works-scroll-container { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; }
        .pc-stage-image-target { animation: pcStageBackgroundReveal 0.76s linear forwards; }
        @keyframes pcStageBackgroundReveal { 0% { opacity: 0; } 78% { opacity: 0; } 100% { opacity: 1; } }
        .pc-transition-next, .pc-transition-thumb {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          transform: translate3d(var(--pc-expand-left), var(--pc-expand-top), 0) scale(var(--pc-expand-scale-x), var(--pc-expand-scale-y));
          border-radius: var(--pc-expand-radius);
          animation: pcTransitionExpand 0.76s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes pcTransitionExpand { to { transform: translate3d(0, 0, 0) scale(1, 1); border-radius: 0; } }
      `}</style>
    </section>
  );
});

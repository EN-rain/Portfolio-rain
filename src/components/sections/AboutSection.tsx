import profileImage from '../../assets/images/hero.png';
import { Blocks, Box, Braces, Database, Globe, Layers3, Server, Workflow } from 'lucide-react';

const skillIcons = {
  React: Blocks,
  TypeScript: Braces,
  'Node.js': Server,
  PostgreSQL: Database,
  Supabase: Layers3,
  Docker: Box,
  Python: Workflow,
  Godot: Globe,
} as const;

export const AboutSection = () => {
  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner flex flex-col items-center justify-center pb-12">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <line x1="0" y1="15%" x2="30%" y2="15%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.08" />
              <line x1="32%" y1="15%" x2="32%" y2="25%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.08" />
              <line x1="32%" y1="25%" x2="55%" y2="25%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.08" />
              <circle cx="55%" cy="25%" r="3" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.12" />

              <line x1="65%" y1="10%" x2="100%" y2="10%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              <line x1="65%" y1="10%" x2="65%" y2="20%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              <line x1="65%" y1="20%" x2="80%" y2="20%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              <circle cx="80%" cy="20%" r="2.5" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.1" />

              <line x1="10%" y1="80%" x2="40%" y2="80%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.07" />
              <line x1="40%" y1="80%" x2="40%" y2="90%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.07" />
              <line x1="40%" y1="90%" x2="70%" y2="90%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              <circle cx="70%" cy="90%" r="3" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.1" />

              <line x1="75%" y1="75%" x2="95%" y2="75%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.05" />
              <line x1="95%" y1="75%" x2="95%" y2="85%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.05" />

              <circle cx="30%" cy="15%" r="2" fill="#7c3aed" opacity="0.1" />
              <circle cx="65%" cy="10%" r="2" fill="#a78bfa" opacity="0.08" />
              <circle cx="10%" cy="80%" r="2" fill="#7c3aed" opacity="0.08" />
              <circle cx="75%" cy="75%" r="2" fill="#a78bfa" opacity="0.08" />

              <g opacity="0.1" stroke="#6d28d9" strokeWidth="0.6">
                <line x1="20%" y1="48%" x2="20%" y2="52%" />
                <line x1="18%" y1="50%" x2="22%" y2="50%" />
              </g>
              <g opacity="0.08" stroke="#a78bfa" strokeWidth="0.6">
                <line x1="85%" y1="58%" x2="85%" y2="62%" />
                <line x1="83%" y1="60%" x2="87%" y2="60%" />
              </g>

              <polygon points="50,400 60,393 70,400 70,413 60,420 50,413" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.08" />
            </svg>
          </div>

          <div className="about-shell locked-content relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-8 pt-20 text-[#151226]">

            <div className="text-reveal text-reveal-fast text-reveal-delay-1 flex flex-col items-center text-center">
              <div className="tech-font mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-[#6d28d9]/70">
                <span className="h-[1px] w-8 bg-[#a78bfa]/50"></span>
                <span>About Me</span>
                <span className="h-[1px] w-8 bg-[#a78bfa]/50"></span>
              </div>

              <h2 className="heading-font text-reveal text-reveal-delay-2 mb-4 text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
                <span className="text-[#151226]/92">Crafting </span>
                <span style={{ color: '#7c3aed' }}>Digital</span>
                <span className="text-[#151226]/92"> Experiences</span>
              </h2>
            </div>

            <div className="about-core flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">

              <div className="about-media text-reveal text-reveal-delay-3 relative flex shrink-0 flex-col items-center gap-5">
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: '240px',
                    height: '300px',
                    borderRadius: '120px 120px 40px 40px',
                    border: '2px solid rgba(124, 58, 237, 0.12)',
                  }}
                >
                  <img
                    className="about-image"
                    src={profileImage}
                    alt="Developer portrait"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="tech-font text-[10px] uppercase tracking-[0.3em] text-[#5b576f]">Open to work</span>
                </div>
              </div>

              <div className="about-copy scroll-parallax-text flex flex-1 flex-col" data-speed="0.06">
                <p className="about-summary text-reveal text-reveal-fast text-reveal-delay-4 mb-8 max-w-lg text-[15px] font-light leading-[1.9] text-[#5b576f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Junior full-stack developer with hands-on experience in React, Node.js, TypeScript, PostgreSQL, and automation workflows. Built and shipped personal and academic projects across AI, web, and game development, and completed a full-stack internship focused on authentication, REST APIs, and process automation.
                </p>

                <div className="about-tag-list text-reveal text-reveal-fast text-reveal-delay-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Docker', 'Python', 'Godot'].map((skill, i) => {
                    const Icon = skillIcons[skill as keyof typeof skillIcons];
                    return (
                      <div
                        key={i}
                        className="group flex flex-col items-center gap-2 rounded-xl py-4 transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'rgba(124, 58, 237, 0.04)',
                          border: '1px solid rgba(124, 58, 237, 0.08)',
                        }}
                      >
                        <Icon size={20} strokeWidth={1.4} style={{ color: '#7c3aed' }} />
                        <span
                          className="tech-font text-[9px] uppercase"
                          style={{ color: 'rgba(21, 18, 38, 0.72)', letterSpacing: '0.15em' }}
                        >
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1025px) {
          .about-shell {
            gap: 2.5rem !important;
            padding-top: 7.25rem !important;
            padding-bottom: 5.5rem !important;
          }

          .about-core {
            align-items: center !important;
          }

          .about-summary {
            margin-bottom: 1.5rem !important;
            max-width: 34rem !important;
          }

          .about-tag-list {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        @media (max-width: 1024px) {
          .about-shell {
            gap: 1.5rem !important;
            padding-top: 4.25rem !important;
          }

          .about-core {
            flex-direction: column !important;
            align-items: center !important;
          }

          .about-copy {
            align-items: center;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .about-shell {
            gap: 1.1rem !important;
            padding: 5.5rem 1.25rem 4.75rem !important;
          }

          .about-tag-list {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          .about-shell {
            gap: 0.9rem !important;
            padding: 5rem 1rem 5.5rem !important;
          }

          .about-shell h2 {
            margin-bottom: 0.8rem !important;
            font-size: 1.85rem !important;
            line-height: 0.92 !important;
          }

          .about-summary {
            margin-bottom: 0.8rem !important;
            font-size: 13px !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </section>
  );
};

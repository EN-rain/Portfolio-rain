import { Blocks, Database, Server, Workflow } from 'lucide-react';

const experience = [
  {
    year: '2024',
    role: 'Full-Stack Developer Intern',
    place: 'Acme Solutions Inc.',
    summary: 'Built a React dashboard with login and 2FA, developed a Node.js backend with 15+ REST endpoints, automated email-to-CSV reporting with n8n, and implemented Supabase PostgreSQL schemas with row-level security.',
    highlights: ['React', 'Node.js', 'Supabase', 'n8n']
  }
];

const highlightIcons = {
  React: Blocks,
  'Node.js': Server,
  Supabase: Database,
  n8n: Workflow,
} as const;

export const ExperienceSection = () => {
  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 30 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner flex items-center justify-center px-6 py-16 text-[#151226]">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }} />

          <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
              <ellipse cx="350" cy="400" rx="280" ry="180" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.07" />
              <ellipse cx="350" cy="400" rx="220" ry="140" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.06" />
              <ellipse cx="350" cy="400" rx="160" ry="100" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.05" />
              <ellipse cx="350" cy="400" rx="100" ry="60" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.08" />
              <circle cx="350" cy="400" r="3" fill="#7c3aed" opacity="0.12" />

              <ellipse cx="1550" cy="650" rx="320" ry="200" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.05" />
              <ellipse cx="1550" cy="650" rx="250" ry="155" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.045" />
              <ellipse cx="1550" cy="650" rx="180" ry="110" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.055" />
              <ellipse cx="1550" cy="650" rx="110" ry="65" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.065" />
              <circle cx="1550" cy="650" r="3" fill="#a78bfa" opacity="0.1" />

              <g opacity="0.08" stroke="#7c3aed" strokeWidth="0.6">
                <line x1="900" y1="145" x2="900" y2="155" />
                <line x1="895" y1="150" x2="905" y2="150" />
              </g>
              <g opacity="0.06" stroke="#a78bfa" strokeWidth="0.6">
                <line x1="1200" y1="895" x2="1200" y2="905" />
                <line x1="1195" y1="900" x2="1205" y2="900" />
              </g>

              <line x1="0" y1="1" x2="1920" y2="1" stroke="#7c3aed" strokeWidth="0.5" opacity="0.05" />
              <line x1="0" y1="1079" x2="1920" y2="1079" stroke="#7c3aed" strokeWidth="0.5" opacity="0.05" />
              <line x1="1" y1="0" x2="1" y2="1080" stroke="#7c3aed" strokeWidth="0.5" opacity="0.04" />
              <line x1="1919" y1="0" x2="1919" y2="1080" stroke="#7c3aed" strokeWidth="0.5" opacity="0.04" />

              <circle cx="960" cy="150" r="1.5" fill="#7c3aed" opacity="0.08" />
              <circle cx="200" cy="900" r="1.5" fill="#a78bfa" opacity="0.07" />
              <circle cx="1700" cy="200" r="1.5" fill="#7c3aed" opacity="0.06" />
            </svg>
          </div>

          <div className="experience-shell locked-content relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
            <div className="scroll-parallax-text" data-speed="0.055">
              <div className="experience-header mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="tech-font text-reveal text-reveal-fast text-reveal-delay-1 mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-[#6b6486]">
                    <span className="h-[1px] w-8 bg-[#7c3aed]/30"></span>
                    <span>Experience</span>
                  </div>
                  <h2 className="heading-font text-reveal text-reveal-delay-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                    <span className="whitespace-nowrap text-[#151226]/92">WORK</span>
                    <span className="whitespace-nowrap" style={{ color: '#7c3aed' }}>EXPERIENCE</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="scroll-parallax-text relative" data-speed="0.04">
              <div className="absolute bottom-0 left-[60px] top-0 hidden w-[1px] md:block" style={{ backgroundColor: 'rgba(124, 58, 237, 0.14)' }}></div>

              <div className="space-y-5">
                {experience.map((item, index) => (
                  <div
                    key={`${item.year}-${item.role}`}
                    className="experience-card text-reveal text-reveal-fast text-reveal-delay-4 group relative grid cursor-pointer gap-5 rounded-[20px] border p-6 transition-all duration-700 md:grid-cols-[100px_1fr] md:p-7"
                    style={{
                      borderColor: 'rgba(124, 58, 237, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    <div className="absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ backgroundColor: 'rgba(124, 58, 237, 0.04)' }} />

                    <div className="absolute bottom-6 left-0 top-6 w-[2px] rounded-full opacity-0 transition-all duration-700 group-hover:opacity-100" style={{ backgroundColor: '#7c3aed' }} />

                    <div className="relative flex flex-col items-center gap-2 md:items-start">
                      <div
                        className="absolute left-[21px] top-[6px] hidden h-2.5 w-2.5 rounded-full border-2 transition-all duration-500 md:block"
                        style={{
                          borderColor: 'rgba(124, 58, 237, 0.3)',
                          boxShadow: index === 0 ? '0 0 12px rgba(124, 58, 237, 0.18)' : 'none',
                          background: index === 0 ? '#7c3aed' : 'rgba(124, 58, 237, 0.12)'
                        }}
                      ></div>

                      <div className="tech-font text-lg font-bold tracking-[0.3em] text-[#6b6486] transition-colors duration-500 group-hover:text-[#6d28d9] md:ml-10">{item.year}</div>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-4 flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between">
                        <h3 className="text-xl font-semibold tracking-tight text-[#151226]/88 transition-colors duration-500 group-hover:text-[#151226] md:text-2xl">{item.role}</h3>
                        <div className="tech-font flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#6b6486] transition-colors duration-500 group-hover:text-[#6d28d9]">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {item.place}
                        </div>
                      </div>

                      <p className="mb-5 max-w-3xl text-[13px] leading-[1.8] text-[#5b576f] transition-colors duration-500 group-hover:text-[#34304a]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.summary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="tech-font inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#6b6486] transition-all duration-500 group-hover:text-[#4d4667]"
                          >
                            {(() => {
                              const Icon = highlightIcons[tag as keyof typeof highlightIcons];
                              return <Icon size={12} strokeWidth={1.8} />;
                            })()}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .experience-shell {
            padding-top: 5.5rem;
            padding-bottom: 1.5rem;
          }

          .experience-header {
            margin-bottom: 1.5rem !important;
            gap: 1rem !important;
          }

          .experience-card {
            padding: 1rem !important;
            gap: 0.9rem !important;
          }

          .experience-card h3 {
            font-size: 1.1rem !important;
          }

          .experience-card p {
            margin-bottom: 1rem !important;
          }

        }

        @media (max-width: 480px) {
          .experience-shell {
            padding-top: 5rem;
          }

          .experience-header h2 {
            font-size: 2.25rem !important;
          }

          .experience-card .tech-font.text-lg {
            letter-spacing: 0.18em !important;
          }
        }
      `}</style>
    </section>
  );
};

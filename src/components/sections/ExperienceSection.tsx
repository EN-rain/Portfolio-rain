const experience = [
  {
    year: '2026',
    role: 'Lead Frontend Engineer',
    place: 'Void Systems',
    summary: 'Directed immersive web builds, established component standards, and shipped motion-heavy product launches.',
    highlights: ['Team Leadership', 'Design Systems', 'Performance']
  },
  {
    year: '2024',
    role: 'Creative Technologist',
    place: 'Independent Lab',
    summary: 'Built experimental interfaces mixing realtime graphics, sound-reactive visuals, and portfolio systems.',
    highlights: ['WebGL', 'Creative Coding', 'R&D']
  },
  {
    year: '2022',
    role: 'UI Developer',
    place: 'Studio North',
    summary: 'Delivered polished marketing sites and internal tools with a focus on speed, accessibility, and maintainability.',
    highlights: ['Accessibility', 'Performance', 'React']
  }
];

export const ExperienceSection = () => {
  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 50 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner flex items-center justify-center px-6 py-16 text-white">
          {/* Dark base */}
          <div className="absolute inset-0" style={{ backgroundColor: '#08070e' }} />
          
          {/* SVG Topographic contour pattern */}
          <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
              {/* Topographic contour lines */}
              <ellipse cx="350" cy="400" rx="280" ry="180" fill="none" stroke="#b388eb" strokeWidth="0.5" opacity="0.05" />
              <ellipse cx="350" cy="400" rx="220" ry="140" fill="none" stroke="#b388eb" strokeWidth="0.5" opacity="0.04" />
              <ellipse cx="350" cy="400" rx="160" ry="100" fill="none" stroke="#b388eb" strokeWidth="0.5" opacity="0.03" />
              <ellipse cx="350" cy="400" rx="100" ry="60" fill="none" stroke="#b388eb" strokeWidth="0.5" opacity="0.06" />
              <circle cx="350" cy="400" r="3" fill="#b388eb" opacity="0.08" />
              
              {/* Second contour cluster — right side */}
              <ellipse cx="1550" cy="650" rx="320" ry="200" fill="none" stroke="#7f5af0" strokeWidth="0.5" opacity="0.04" />
              <ellipse cx="1550" cy="650" rx="250" ry="155" fill="none" stroke="#7f5af0" strokeWidth="0.5" opacity="0.035" />
              <ellipse cx="1550" cy="650" rx="180" ry="110" fill="none" stroke="#7f5af0" strokeWidth="0.5" opacity="0.045" />
              <ellipse cx="1550" cy="650" rx="110" ry="65" fill="none" stroke="#7f5af0" strokeWidth="0.5" opacity="0.055" />
              <circle cx="1550" cy="650" r="3" fill="#7f5af0" opacity="0.07" />
              
              {/* Scattered measurement markers */}
              <g opacity="0.07" stroke="#b388eb" strokeWidth="0.6">
                <line x1="900" y1="145" x2="900" y2="155" />
                <line x1="895" y1="150" x2="905" y2="150" />
              </g>
              <g opacity="0.05" stroke="#7f5af0" strokeWidth="0.6">
                <line x1="1200" y1="895" x2="1200" y2="905" />
                <line x1="1195" y1="900" x2="1205" y2="900" />
              </g>
              
              {/* Coordinate lines */}
              <line x1="0" y1="1" x2="1920" y2="1" stroke="#b388eb" strokeWidth="0.5" opacity="0.04" />
              <line x1="0" y1="1079" x2="1920" y2="1079" stroke="#b388eb" strokeWidth="0.5" opacity="0.04" />
              <line x1="1" y1="0" x2="1" y2="1080" stroke="#b388eb" strokeWidth="0.5" opacity="0.03" />
              <line x1="1919" y1="0" x2="1919" y2="1080" stroke="#b388eb" strokeWidth="0.5" opacity="0.03" />
              
              {/* Small dots */}
              <circle cx="960" cy="150" r="1.5" fill="#b388eb" opacity="0.06" />
              <circle cx="200" cy="900" r="1.5" fill="#7f5af0" opacity="0.05" />
              <circle cx="1700" cy="200" r="1.5" fill="#b388eb" opacity="0.04" />
            </svg>
          </div>

          <div className="locked-content relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
            {/* Header */}
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="tech-font text-[10px] uppercase tracking-[0.5em] text-white/40 flex items-center gap-3 mb-5">
                  <span className="w-8 h-[1px] bg-white/20"></span>
                  <span>Career Path</span>
                </div>
                <h2 className="heading-font flex flex-wrap items-baseline gap-x-4 gap-y-1 text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                  <span className="whitespace-nowrap text-white/90">WORK</span>
                  <span className="whitespace-nowrap" style={{
                    color: '#b388eb'
                  }}>EXPERIENCE</span>
                </h2>
              </div>
              <p className="max-w-xs text-[13px] leading-[1.9] text-white/35" style={{ fontFamily: 'Inter, sans-serif' }}>
                A journey through creative technology — from crafting pixels to leading teams.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[60px] top-0 bottom-0 w-[1px] hidden md:block" style={{
                backgroundColor: 'rgba(179, 136, 235, 0.08)'
              }}></div>
              
              <div className="space-y-5">
                {experience.map((item, index) => (
                  <div
                    key={`${item.year}-${item.role}`}
                    className="group relative grid gap-5 rounded-[20px] border border-white/[0.05] p-6 md:p-7 transition-all duration-700 hover:border-white/[0.1] md:grid-cols-[100px_1fr] cursor-pointer"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.015)'
                    }}
                  >
                    {/* Card hover accent */}
                    <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                      backgroundColor: 'rgba(179, 136, 235, 0.02)'
                    }} />
                    
                    {/* Left accent */}
                    <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{
                      backgroundColor: '#b388eb'
                    }} />
                    
                    {/* Year column */}
                    <div className="relative flex flex-col items-center md:items-start gap-2">
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute left-[21px] top-[6px] w-2.5 h-2.5 rounded-full border-2 border-[#b388eb]/30 group-hover:border-[#b388eb] group-hover:shadow-[0_0_12px_rgba(179,136,235,0.4)] transition-all duration-500" style={{
                        background: index === 0 ? '#b388eb' : 'rgba(179, 136, 235, 0.15)'
                      }}></div>
                      
                      <div className="tech-font text-lg tracking-[0.3em] text-white/25 group-hover:text-[#b388eb]/70 transition-colors duration-500 font-bold md:ml-10">{item.year}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white/80 group-hover:text-white transition-colors duration-500">{item.role}</h3>
                        <div className="tech-font text-[10px] uppercase tracking-[0.3em] text-white/25 flex items-center gap-2 group-hover:text-[#b388eb]/50 transition-colors duration-500">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {item.place}
                        </div>
                      </div>
                      
                      <p className="text-[13px] leading-[1.8] text-white/35 group-hover:text-white/50 transition-colors duration-500 mb-5 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.summary}
                      </p>
                      
                      {/* Highlight tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="tech-font text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full text-white/25 group-hover:text-white/40 transition-all duration-500"
                            style={{
                              border: '1px solid rgba(255,255,255,0.04)',
                              background: 'rgba(179, 136, 235, 0.03)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom education teaser */}
            <div className="mt-10 flex items-center justify-between border-t border-white/[0.04] pt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-white/[0.06] flex items-center justify-center" style={{
                  background: 'rgba(179, 136, 235, 0.05)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b388eb" strokeWidth="1.5" className="opacity-40">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-white/50 font-medium">Computer Science</div>
                  <div className="tech-font text-[9px] tracking-[0.2em] text-white/20 mt-0.5">BACHELOR'S DEGREE — 2021</div>
                </div>
              </div>
              <div className="tech-font text-[9px] tracking-[0.2em] text-white/15 uppercase hidden md:block">
                Continuous Learner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

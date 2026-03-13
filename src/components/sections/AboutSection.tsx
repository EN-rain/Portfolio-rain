import { MagneticButton } from '../MagneticButton';

export const AboutSection = () => {
  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner flex flex-col justify-center items-center pb-12">
          {/* Dark base */}
          <div className="absolute inset-0" style={{ backgroundColor: '#0a0a12' }}></div>
          
          {/* SVG Circuit board pattern background */}
          <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              {/* Horizontal circuit traces */}
              <line x1="0" y1="15%" x2="30%" y2="15%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.06" />
              <line x1="32%" y1="15%" x2="32%" y2="25%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.06" />
              <line x1="32%" y1="25%" x2="55%" y2="25%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.06" />
              <circle cx="55%" cy="25%" r="3" fill="none" stroke="#67e8f9" strokeWidth="0.5" opacity="0.08" />
              
              <line x1="65%" y1="10%" x2="100%" y2="10%" stroke="#67e8f9" strokeWidth="0.5" opacity="0.05" />
              <line x1="65%" y1="10%" x2="65%" y2="20%" stroke="#67e8f9" strokeWidth="0.5" opacity="0.05" />
              <line x1="65%" y1="20%" x2="80%" y2="20%" stroke="#67e8f9" strokeWidth="0.5" opacity="0.05" />
              <circle cx="80%" cy="20%" r="2.5" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              
              {/* Bottom circuit traces */}
              <line x1="10%" y1="80%" x2="40%" y2="80%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.05" />
              <line x1="40%" y1="80%" x2="40%" y2="90%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.05" />
              <line x1="40%" y1="90%" x2="70%" y2="90%" stroke="#67e8f9" strokeWidth="0.5" opacity="0.05" />
              <circle cx="70%" cy="90%" r="3" fill="none" stroke="#67e8f9" strokeWidth="0.5" opacity="0.07" />
              
              <line x1="75%" y1="75%" x2="95%" y2="75%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.04" />
              <line x1="95%" y1="75%" x2="95%" y2="85%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.04" />
              
              {/* Node dots */}
              <circle cx="30%" cy="15%" r="2" fill="#a78bfa" opacity="0.08" />
              <circle cx="65%" cy="10%" r="2" fill="#67e8f9" opacity="0.06" />
              <circle cx="10%" cy="80%" r="2" fill="#a78bfa" opacity="0.06" />
              <circle cx="75%" cy="75%" r="2" fill="#67e8f9" opacity="0.05" />
              
              {/* Small plus markers */}
              <g opacity="0.08" stroke="#c4b5fd" strokeWidth="0.6">
                <line x1="20%" y1="48%" x2="20%" y2="52%" />
                <line x1="18%" y1="50%" x2="22%" y2="50%" />
              </g>
              <g opacity="0.06" stroke="#67e8f9" strokeWidth="0.6">
                <line x1="85%" y1="58%" x2="85%" y2="62%" />
                <line x1="83%" y1="60%" x2="87%" y2="60%" />
              </g>
              
              {/* Hexagon decoration */}
              <polygon points="50,400 60,393 70,400 70,413 60,420 50,413" fill="none" stroke="#67e8f9" strokeWidth="0.5" opacity="0.06" />
            </svg>
          </div>
          
          <div className="relative w-full max-w-6xl mx-auto px-8 pt-24 text-white z-10 locked-content flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* Left: Content */}
            <div className="flex-1 text-left">
              <div className="tech-font text-[10px] tracking-[0.5em] uppercase text-[#c4b5fd]/70 mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#67e8f9]/50"></span>
                <span>About Me</span>
              </div>
              
              <h2 className="heading-font text-5xl md:text-7xl mb-8 font-bold leading-[0.95] tracking-tighter">
                <span className="block text-white/90">I BUILD</span>
                <span className="block mt-1" style={{
                  color: '#c4b5fd'
                }}>DIGITAL</span>
                <span className="block mt-1 text-white/90">EXPERIENCES</span>
              </h2>
              
              <p className="text-[15px] font-light leading-[1.9] text-white/55 mb-10 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                A passionate developer who merges cutting-edge technology with cinematic design thinking. Every interface I craft is a living canvas — engineered to captivate, perform, and inspire.
              </p>
              
              {/* Skill bars with animated fills */}
              <div className="space-y-4 mb-10 max-w-md">
                {[
                  { name: 'Frontend Architecture', level: 95 },
                  { name: 'UI/UX Design', level: 88 },
                  { name: 'Creative Development', level: 92 },
                  { name: '3D & Motion', level: 80 }
                ].map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-1.5">
                      <span className="tech-font text-[10px] tracking-[0.2em] text-white/50 uppercase group-hover:text-[#c4b5fd] transition-colors duration-300">{skill.name}</span>
                      <span className="tech-font text-[10px] text-[#67e8f9]/50">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/[0.06] rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-700 group-hover:shadow-[0_0_12px_rgba(179,136,235,0.4)]"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: '#a78bfa'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Three.js', 'GSAP', 'TypeScript', 'WebGL', 'Node.js'].map((skill, i) => (
                  <span 
                    key={i} 
                    className="tech-font text-[9px] px-4 py-2 rounded-full cursor-default transition-all duration-500 hover:scale-105"
                    style={{
                      border: '1px solid rgba(167, 139, 250, 0.15)',
                      background: 'rgba(103, 232, 249, 0.03)',
                      color: 'rgba(255,255,255,0.5)',
                      backdropFilter: 'blur(8px)',
                      letterSpacing: '0.15em'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <MagneticButton className="inline-flex items-center gap-3 tech-font text-[10px] tracking-[0.2em] uppercase px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#a78bfa]/15 hover:border-[#a78bfa]/40 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] transition-all duration-500 cursor-hover text-white/60 hover:text-white">
                <span>View Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </MagneticButton>
            </div>
            
            {/* Right: Visual card */}
            <div className="flex-1 w-full flex justify-center mt-8 lg:mt-0 relative">

              
              <div className="relative w-full max-w-[380px]">
                {/* Stats card */}
                <div className="rounded-3xl border border-white/[0.08] p-8 relative overflow-hidden" style={{
                  backgroundColor: 'rgba(255,255,255,0.02)'
                }}>
                  {/* Top accent line */}
                  <div className="absolute top-0 left-[20%] w-[60%] h-[1px]" style={{
                    backgroundColor: 'rgba(103,232,249,0.12)'
                  }}></div>
                  
                  <div className="space-y-8">
                    {[
                      { value: '5+', label: 'Years Experience', icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      )},
                      { value: '50+', label: 'Projects Shipped', icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                        </svg>
                      )},
                      { value: '30+', label: 'Happy Clients', icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      )},
                      { value: '15+', label: 'Awards Won', icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                          <path d="M4 22h16" />
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </svg>
                      )}
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-5 group">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/[0.06] group-hover:border-[#c4b5fd]/30 transition-all duration-500" style={{
                          backgroundColor: 'rgba(167, 139, 250, 0.06)'
                        }}>
                          {stat.icon}
                        </div>
                        <div>
                          <div className="heading-font text-2xl font-bold text-white/90 group-hover:text-[#c4b5fd] transition-colors duration-500">{stat.value}</div>
                          <div className="tech-font text-[9px] tracking-[0.2em] text-white/35 uppercase mt-0.5">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="mt-8 h-[1px] w-full" style={{
                    backgroundColor: 'rgba(103,232,249,0.08)'
                  }}></div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <span className="tech-font text-[9px] tracking-[0.3em] text-white/20 uppercase">Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="tech-font text-[9px] tracking-[0.2em] text-emerald-400/70">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const HomeSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 10, transform: 'translate3d(0, 0, 0)' }}>
      <div className="parallax-content overflow-hidden" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#060b18'
      }}>

        {/* Layer 4 - Deepest background (Slowest) */}
        <div className="parallax-layer" data-speed="0.1" style={{ zIndex: 1 }}>
          <div className="parallax-slide-in layer-1" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <rect width="100%" height="100%" fill="#060b18" />
              <defs>
                <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="150" />
                </filter>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <circle cx="20%" cy="20%" r="450" fill="url(#grad1)" filter="url(#blur1)" />
              {/* Minimal stars */}
              <circle cx="15%" cy="30%" r="1.5" fill="#f8fafc" opacity="0.15" />
              <circle cx="85%" cy="20%" r="2" fill="#6ee7b7" opacity="0.3" />
              <circle cx="75%" cy="80%" r="1" fill="#38bdf8" opacity="0.4" />
              <circle cx="35%" cy="70%" r="2.5" fill="#818cf8" opacity="0.15" />
            </svg>
          </div>
        </div>

        {/* Layer 3 - Mid background elements */}
        <div className="parallax-layer" data-speed="0.25" style={{ zIndex: 2 }}>
          <div className="parallax-slide-in layer-2" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="120" />
                </filter>
              </defs>
              <circle cx="85%" cy="75%" r="400" fill="#818cf8" opacity="0.15" filter="url(#blur2)" />
              
              {/* Elegant geometric accents */}
              <circle cx="50%" cy="50%" r="45vw" fill="none" stroke="#f8fafc" strokeWidth="1" opacity="0.02" />
              <circle cx="50%" cy="50%" r="65vw" fill="none" stroke="#6ee7b7" strokeWidth="1" strokeDasharray="4 12" opacity="0.04" />
              
              {/* Crosshairs */}
              <g opacity="0.08" stroke="#f8fafc" strokeWidth="1">
                <line x1="8%" y1="12%" x2="10%" y2="12%" />
                <line x1="9%" y1="11%" x2="9%" y2="13%" />
                <line x1="90%" y1="88%" x2="92%" y2="88%" />
                <line x1="91%" y1="87%" x2="91%" y2="89%" />
              </g>
            </svg>
          </div>
        </div>

        {/* Layer 2 - Frosted glass elements / Mid-foreground */}
        <div className="parallax-layer" data-speed="0.45" style={{ zIndex: 3 }}>
          <div className="parallax-slide-in layer-3" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '120vw',
              height: '45vh',
              background: 'linear-gradient(180deg, rgba(6,11,24,0) 0%, rgba(6,11,24,0.3) 50%, rgba(6,11,24,0) 100%)',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderTop: '1px solid rgba(110, 231, 183, 0.04)',
              borderBottom: '1px solid rgba(129, 140, 248, 0.04)'
            }} />
          </div>
        </div>

        {/* Layer 1 - Foreground elements (fastest) */}
        <div className="parallax-layer" data-speed="0.7" style={{ zIndex: 4 }}>
          <div className="parallax-slide-in layer-4" style={{ position: 'absolute', inset: 0 }}>
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
               {/* Foreground glow/vignette at the bottom */}
               <rect x="0" y="80%" width="100%" height="20%" fill="url(#bottomGrad)" />
               <defs>
                 <linearGradient id="bottomGrad" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#060b18" stopOpacity="0" />
                   <stop offset="100%" stopColor="#060b18" stopOpacity="0.9" />
                 </linearGradient>
               </defs>
               
               {/* High-tech accent lines */}
               <line x1="0" y1="92%" x2="12%" y2="92%" stroke="#6ee7b7" strokeWidth="1" opacity="0.2" />
               <line x1="88%" y1="8%" x2="100%" y2="8%" stroke="#38bdf8" strokeWidth="1" opacity="0.2" />
             </svg>
          </div>
        </div>

        {/* Hero Text */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
          textAlign: 'center',
          color: '#f8fafc',
          pointerEvents: 'none',
          width: '90%',
          maxWidth: '1200px'
        }}>
          {/* Subtle top label */}
          <div className="tech-font parallax-slide-in layer-1" style={{
            fontSize: '10px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#38bdf8',
            marginBottom: '2.5rem',
            opacity: 0.7
          }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', backgroundColor: '#38bdf8', verticalAlign: 'middle', marginRight: '15px', opacity: 0.5 }} />
            System Online 
            <span style={{ display: 'inline-block', width: '40px', height: '1px', backgroundColor: '#38bdf8', verticalAlign: 'middle', marginLeft: '15px', opacity: 0.5 }} />
          </div>

          <h1 className="parallax-slide-in layer-1" style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(3.5rem, 11vw, 9rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            lineHeight: 1.05,
            textShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}>
            DIGITAL
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #6ee7b7 0%, #38bdf8 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block'
            }}>
              CRAFT.
            </span>
          </h1>
          
          <p className="parallax-slide-in layer-2" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            fontWeight: 300,
            letterSpacing: '0.02em',
            opacity: 0.65,
            marginBottom: '4rem',
            maxWidth: '550px',
            margin: '0 auto 4rem auto',
            color: '#e2e8f0',
            lineHeight: 1.7
          }}>
            Engineering immersive experiences where logic meets artistry. <br className="hidden md:block"/> Exploring the bleeding edge of web technology.
          </p>
          
          {/* Minimal Tech Stats */}
          <div className="parallax-slide-in layer-3" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {[
              { label: 'EXPERIENCE', value: '05 YRS' },
              { label: 'PROJECTS', value: '50 +' },
              { label: 'AWARDS', value: '15 +' }
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: 'left',
                padding: '1.2rem 2.2rem',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                minWidth: '160px',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
              }}>
                <div style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  opacity: 0.4,
                  marginBottom: '0.6rem',
                  color: '#f8fafc',
                  fontFamily: 'Space Mono, monospace'
                }}>{stat.label}</div>
                <div style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  fontWeight: 600,
                  color: '#6ee7b7',
                  fontFamily: 'Outfit, sans-serif'
                }}>{stat.value}</div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="parallax-slide-in layer-4" style={{
            marginTop: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              opacity: 0.3,
              fontFamily: 'Space Mono, monospace',
              color: '#e2e8f0'
            }}>
              DISCOVER
            </div>
            <div style={{
              width: '1px',
              height: '70px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderRadius: '2px'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, transparent, #38bdf8, transparent)',
                animation: 'scrollLine 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'
              }}></div>
            </div>
          </div>
        </div>

      </div>
      
      <style>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
};

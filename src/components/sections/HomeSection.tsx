import { GlitchText } from '../GlitchText';

export const HomeSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 10, transform: 'translate3d(0, 0, 0)' }}>
      <div className="parallax-content overflow-hidden" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a12'
      }}>

        {/* Layer 4 - Stars */}
        <div className="parallax-layer" data-speed="0.1" style={{ zIndex: 1 }}>
          <div className="parallax-slide-in layer-1" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <rect width="100%" height="100%" fill="#0a0a12" />
              <circle cx="5%" cy="8%" r="1.5" fill="#c4b5fd" opacity="0.5" />
              <circle cx="12%" cy="22%" r="1" fill="#e0d6ff" opacity="0.25" />
              <circle cx="20%" cy="5%" r="1.2" fill="#67e8f9" opacity="0.35" />
              <circle cx="28%" cy="35%" r="0.8" fill="#e0d6ff" opacity="0.15" />
              <circle cx="35%" cy="12%" r="1.5" fill="#a78bfa" opacity="0.35" />
              <circle cx="42%" cy="28%" r="1" fill="#67e8f9" opacity="0.2" />
              <circle cx="50%" cy="3%" r="1.3" fill="#c4b5fd" opacity="0.4" />
              <circle cx="58%" cy="18%" r="0.9" fill="#e0d6ff" opacity="0.2" />
              <circle cx="65%" cy="8%" r="1.5" fill="#67e8f9" opacity="0.3" />
              <circle cx="72%" cy="25%" r="1.1" fill="#e0d6ff" opacity="0.15" />
              <circle cx="80%" cy="15%" r="1.4" fill="#a78bfa" opacity="0.35" />
              <circle cx="88%" cy="30%" r="0.8" fill="#67e8f9" opacity="0.25" />
              <circle cx="95%" cy="10%" r="1.2" fill="#c4b5fd" opacity="0.4" />
              <circle cx="15%" cy="45%" r="1" fill="#e0d6ff" opacity="0.12" />
              <circle cx="25%" cy="55%" r="1.3" fill="#a78bfa" opacity="0.2" />
              <circle cx="40%" cy="48%" r="0.9" fill="#67e8f9" opacity="0.15" />
              <circle cx="55%" cy="42%" r="1.5" fill="#c4b5fd" opacity="0.2" />
              <circle cx="70%" cy="50%" r="1" fill="#e0d6ff" opacity="0.12" />
              <circle cx="85%" cy="45%" r="1.2" fill="#67e8f9" opacity="0.25" />
              <circle cx="92%" cy="55%" r="0.7" fill="#e0d6ff" opacity="0.15" />
              <circle cx="8%" cy="65%" r="1.1" fill="#a78bfa" opacity="0.2" />
              <circle cx="18%" cy="75%" r="0.8" fill="#67e8f9" opacity="0.12" />
              <circle cx="32%" cy="70%" r="1.4" fill="#c4b5fd" opacity="0.2" />
              <circle cx="48%" cy="62%" r="1" fill="#e0d6ff" opacity="0.15" />
              <circle cx="62%" cy="72%" r="1.3" fill="#a78bfa" opacity="0.25" />
              <circle cx="78%" cy="68%" r="0.9" fill="#67e8f9" opacity="0.12" />
              <circle cx="90%" cy="78%" r="1.5" fill="#c4b5fd" opacity="0.2" />
              <circle cx="10%" cy="88%" r="1" fill="#67e8f9" opacity="0.15" />
              <circle cx="30%" cy="85%" r="1.2" fill="#a78bfa" opacity="0.2" />
              <circle cx="50%" cy="90%" r="0.8" fill="#e0d6ff" opacity="0.12" />
              <circle cx="68%" cy="82%" r="1.4" fill="#c4b5fd" opacity="0.2" />
              <circle cx="82%" cy="92%" r="1.1" fill="#67e8f9" opacity="0.15" />
              <circle cx="95%" cy="88%" r="1.3" fill="#a78bfa" opacity="0.25" />
              <circle cx="22%" cy="15%" r="2" fill="#c4b5fd" opacity="0.08" />
              <circle cx="75%" cy="38%" r="2.5" fill="#67e8f9" opacity="0.06" />
              <circle cx="45%" cy="78%" r="2.2" fill="#a78bfa" opacity="0.07" />
            </svg>
          </div>
        </div>

        {/* Layer 3 - Grid lines */}
        <div className="parallax-layer" data-speed="0.25" style={{ zIndex: 2 }}>
          <div className="parallax-slide-in layer-2" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.05" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#67e8f9" strokeWidth="0.5" opacity="0.03" />
              <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.05" />
              <line x1="0" y1="100%" x2="40%" y2="0" stroke="#67e8f9" strokeWidth="0.5" opacity="0.04" />
              <line x1="60%" y1="100%" x2="100%" y2="0" stroke="#a78bfa" strokeWidth="0.5" opacity="0.04" />
              <polyline points="0,600 150,600 180,570 350,570" fill="none" stroke="#c4b5fd" strokeWidth="0.8" opacity="0.06" />
              <polyline points="1920,400 1750,400 1720,430 1550,430" fill="none" stroke="#67e8f9" strokeWidth="0.8" opacity="0.06" />
              <g opacity="0.08" stroke="#c4b5fd" strokeWidth="0.6">
                <line x1="15%" y1="18%" x2="15%" y2="22%" />
                <line x1="13%" y1="20%" x2="17%" y2="20%" />
              </g>
              <g opacity="0.06" stroke="#67e8f9" strokeWidth="0.6">
                <line x1="82%" y1="28%" x2="82%" y2="32%" />
                <line x1="80%" y1="30%" x2="84%" y2="30%" />
              </g>
            </svg>
          </div>
        </div>

        {/* Layer 2 - Mid-distance cityscape */}
        <div className="parallax-layer" data-speed="0.45" style={{ zIndex: 3 }}>
          <div className="parallax-slide-in layer-3" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 1080">
              <defs>
                <radialGradient id="wg_cyan" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="wg_purple" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="wg_violet" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Mountain range */}
              <polygon
                points="0,1080 0,680 120,620 260,660 380,580 480,610 580,520 700,560 820,480 920,530 1040,450 1160,500 1280,430 1400,480 1500,400 1600,450 1720,380 1820,420 1920,360 1920,1080"
                fill="#1e1b2e"
              />
              {/* Buildings */}
              <rect x="80" y="320" width="100" height="760" fill="#1e1b2e" />
              <rect x="200" y="280" width="80" height="800" fill="#221f33" />
              <rect x="250" y="250" width="60" height="830" fill="#1e1b2e" />
              <rect x="600" y="300" width="80" height="780" fill="#221f33" />
              <rect x="660" y="320" width="65" height="760" fill="#1e1b2e" />
              <rect x="1100" y="240" width="85" height="840" fill="#221f33" />
              <rect x="1155" y="270" width="60" height="810" fill="#1e1b2e" />
              <rect x="1420" y="280" width="80" height="800" fill="#221f33" />
              <rect x="1500" y="190" width="95" height="890" fill="#1e1b2e" />
              <rect x="1565" y="220" width="65" height="860" fill="#221f33" />
              <rect x="1750" y="260" width="100" height="820" fill="#1e1b2e" />
              {/* Edge highlights */}
              <line x1="80" y1="320" x2="80" y2="1080" stroke="#a78bfa" strokeWidth="1" opacity="0.25" />
              <line x1="200" y1="280" x2="200" y2="1080" stroke="#67e8f9" strokeWidth="1" opacity="0.2" />
              <line x1="1500" y1="190" x2="1500" y2="1080" stroke="#a78bfa" strokeWidth="1" opacity="0.25" />
              <line x1="1750" y1="260" x2="1750" y2="1080" stroke="#67e8f9" strokeWidth="1" opacity="0.2" />

              {/* Glowing windows — bloom ellipse + bright pane */}
              {/* Left building */}
              <ellipse cx="113" cy="355" rx="18" ry="13" fill="url(#wg_cyan)" />
              <rect x="106" y="349" width="14" height="10" rx="1.5" fill="#67e8f9" opacity="0.9" />

              <ellipse cx="113" cy="425" rx="18" ry="13" fill="url(#wg_purple)" />
              <rect x="106" y="419" width="14" height="10" rx="1.5" fill="#c4b5fd" opacity="0.85" />

              {/* Mid-left building */}
              <ellipse cx="235" cy="335" rx="18" ry="13" fill="url(#wg_violet)" />
              <rect x="228" y="329" width="14" height="10" rx="1.5" fill="#a78bfa" opacity="0.9" />

              {/* Center-left building */}
              <ellipse cx="635" cy="345" rx="18" ry="13" fill="url(#wg_cyan)" />
              <rect x="628" y="339" width="14" height="10" rx="1.5" fill="#67e8f9" opacity="0.85" />

              {/* Right cluster */}
              <ellipse cx="1135" cy="295" rx="18" ry="13" fill="url(#wg_purple)" />
              <rect x="1128" y="289" width="14" height="10" rx="1.5" fill="#c4b5fd" opacity="0.9" />

              <ellipse cx="1460" cy="325" rx="18" ry="13" fill="url(#wg_cyan)" />
              <rect x="1453" y="319" width="14" height="10" rx="1.5" fill="#67e8f9" opacity="0.85" />

              <ellipse cx="1790" cy="315" rx="18" ry="13" fill="url(#wg_violet)" />
              <rect x="1783" y="309" width="14" height="10" rx="1.5" fill="#a78bfa" opacity="0.9" />
            </svg>
          </div>
        </div>

        {/* Layer 1 - Foreground buildings */}
        <div className="parallax-layer" data-speed="0.7" style={{ zIndex: 4 }}>
          <div className="parallax-slide-in layer-4" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 1080">
              <defs>
                <radialGradient id="fwg_cyan" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="fwg_purple" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="fwg_violet" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Buildings */}
              <rect x="-20" y="150" width="240" height="930" fill="#18162a" />
              <rect x="180" y="300" width="180" height="780" fill="#1c1930" />
              <rect x="1520" y="250" width="200" height="830" fill="#18162a" />
              <rect x="1700" y="100" width="260" height="980" fill="#1c1930" />
              <rect x="340" y="480" width="140" height="600" fill="#18162a" />
              <rect x="1380" y="450" width="160" height="630" fill="#1c1930" />
              <polygon points="0,1080 0,560 80,560 100,500 220,500 240,560 380,560 380,1080" fill="#18162a" opacity="0.95" />
              <polygon points="1520,1080 1520,560 1600,560 1620,500 1780,500 1800,560 1920,560 1920,1080" fill="#18162a" opacity="0.95" />
              {/* Edge highlights */}
              <line x1="220" y1="300" x2="220" y2="1080" stroke="#c4b5fd" strokeWidth="1.2" opacity="0.35" />
              <line x1="1520" y1="250" x2="1520" y2="1080" stroke="#a78bfa" strokeWidth="1.2" opacity="0.35" />
              <line x1="1700" y1="100" x2="1700" y2="1080" stroke="#c4b5fd" strokeWidth="1.2" opacity="0.3" />

              {/* Glowing windows — foreground (larger bloom) */}
              {/* Left tower */}
              <ellipse cx="65" cy="255" rx="22" ry="16" fill="url(#fwg_purple)" />
              <rect x="56" y="248" width="18" height="13" rx="2" fill="#c4b5fd" opacity="0.95" />

              <ellipse cx="125" cy="305" rx="22" ry="16" fill="url(#fwg_cyan)" />
              <rect x="116" y="298" width="18" height="13" rx="2" fill="#67e8f9" opacity="0.9" />

              {/* Mid-left tower */}
              <ellipse cx="225" cy="405" rx="22" ry="16" fill="url(#fwg_violet)" />
              <rect x="216" y="398" width="18" height="13" rx="2" fill="#a78bfa" opacity="0.95" />

              {/* Right tower */}
              <ellipse cx="1565" cy="285" rx="22" ry="16" fill="url(#fwg_cyan)" />
              <rect x="1556" y="278" width="18" height="13" rx="2" fill="#67e8f9" opacity="0.95" />

              <ellipse cx="1645" cy="355" rx="22" ry="16" fill="url(#fwg_purple)" />
              <rect x="1636" y="348" width="18" height="13" rx="2" fill="#c4b5fd" opacity="0.9" />

              <ellipse cx="1785" cy="155" rx="22" ry="16" fill="url(#fwg_violet)" />
              <rect x="1776" y="148" width="18" height="13" rx="2" fill="#a78bfa" opacity="0.95" />

              {/* Antennas */}
              <line x1="80" y1="150" x2="80" y2="50" stroke="#67e8f9" strokeWidth="2" opacity="0.45" />
              <circle cx="80" cy="48" r="4" fill="#67e8f9" opacity="0.7" />
              <line x1="1840" y1="100" x2="1840" y2="20" stroke="#c4b5fd" strokeWidth="2" opacity="0.45" />
              <circle cx="1840" cy="18" r="4" fill="#c4b5fd" opacity="0.7" />
              <line x1="240" y1="300" x2="240" y2="230" stroke="#a78bfa" strokeWidth="2" opacity="0.45" />
              <circle cx="240" cy="228" r="3" fill="#a78bfa" opacity="0.7" />
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
          color: '#e0d6ff',
          pointerEvents: 'none',
          width: '90%',
          maxWidth: '1200px'
        }}>
          <h1 className="heading-font parallax-slide-in layer-1" style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            fontWeight: 700,
            letterSpacing: '0.3em',
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            <GlitchText>CODE. CREATE.</GlitchText>
            <br />
            <span style={{ color: '#c4b5fd' }}>INNOVATE.</span>
          </h1>
          <p className="tech-font parallax-slide-in layer-2" style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)',
            fontWeight: 300,
            letterSpacing: '0.15em',
            opacity: 0.8,
            marginBottom: '2rem',
            color: '#c4b5fd'
          }}>
            Building the future, one line at a time
          </p>

          {/* Tech Stats */}
          <div className="parallax-slide-in layer-3" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap'
          }}>
            {[
              { label: 'PROJECTS', value: '50+' },
              { label: 'CLIENTS', value: '30+' },
              { label: 'AWARDS', value: '15+' }
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '1rem 1.5rem',
                border: '1px solid rgba(167, 139, 250, 0.2)',
                borderRadius: '8px',
                backgroundColor: 'rgba(10, 10, 18, 0.6)'
              }}>
                <div style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#c4b5fd',
                  fontFamily: 'Syncopate, sans-serif'
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  opacity: 0.5,
                  marginTop: '0.5rem',
                  color: '#94a3b8'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="parallax-slide-in layer-4" style={{ marginTop: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              opacity: 0.5,
              marginBottom: '0.5rem',
              fontFamily: 'Space Mono, monospace',
              color: '#94a3b8'
            }}>
              SCROLL TO EXPLORE
            </div>
            <div style={{
              width: '1px',
              height: '40px',
              backgroundColor: '#67e8f9',
              margin: '0 auto',
              opacity: 0.4,
              animation: 'scrollIndicator 2s ease-in-out infinite 2.5s'
            }}></div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes scrollIndicator {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(10px); }
        }
      `}</style>
    </section>
  );
};

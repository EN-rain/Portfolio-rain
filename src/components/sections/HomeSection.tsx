export const HomeSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 10, transform: 'translate3d(0, 0, 0)' }}>
      <div className="parallax-content overflow-hidden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#060e1a' }}>

        {/* Layer 1 - Sky + Water base + ripples */}
        <div className="parallax-layer" data-speed="0.08" style={{ zIndex: 1, position: 'absolute', inset: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 1080" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#060e1a" />
                <stop offset="100%" stopColor="#0d2240" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d2240" />
                <stop offset="100%" stopColor="#030810" />
              </linearGradient>
            </defs>
            <rect width="1000" height="540" fill="url(#skyGrad)" />
            <rect y="540" width="1000" height="540" fill="url(#waterGrad)" />
            <rect x="0" y="537" width="1000" height="6" fill="#1a4a7a" opacity="0.5" />
            <g stroke="#2a5a8a" strokeWidth="0.8" opacity="0.35" strokeLinecap="round">
              <line x1="80" y1="570" x2="160" y2="570" />
              <line x1="210" y1="590" x2="290" y2="590" />
              <line x1="350" y1="610" x2="430" y2="610" />
              <line x1="520" y1="575" x2="600" y2="575" />
              <line x1="650" y1="595" x2="720" y2="595" />
              <line x1="780" y1="615" x2="860" y2="615" />
              <line x1="140" y1="660" x2="220" y2="660" />
              <line x1="400" y1="680" x2="480" y2="680" />
            </g>
          </svg>
        </div>

        {/* Layer 2 - Background + mid silhouettes + reflections */}
        <div className="parallax-layer" data-speed="0.22" style={{ zIndex: 2, position: 'absolute', inset: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 1080" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="#2a5a8a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <path d="M 120 160 L 126 165 L 132 160" />
              <path d="M 195 130 L 200 134 L 205 130" />
            </g>
            <path fill="#1a3a5c" opacity="0.75" d="M 0 540 L 0 420 H 50 V 340 H 65 V 325 H 75 V 340 H 90 V 390 H 110 V 330 H 125 V 270 L 130 240 L 135 270 V 330 H 160 V 280 H 185 V 265 H 195 V 280 H 220 V 320 H 240 V 295 H 255 V 320 H 280 V 305 L 285 255 L 290 305 V 400 H 340 L 350 315 V 420 H 380 V 290 H 400 V 315 H 450 V 275 L 455 225 L 460 275 V 375 H 510 V 315 H 530 V 300 H 545 V 315 H 580 V 265 H 590 V 250 H 600 V 265 H 650 V 290 L 655 245 L 660 290 V 400 H 700 V 330 H 730 V 305 H 760 V 420 H 820 V 275 L 825 245 L 830 275 V 390 H 870 V 325 H 890 V 340 H 940 V 315 H 960 V 290 H 975 V 315 H 1000 V 540 Z" />
            <path fill="#0f2a45" opacity="0.9" d="M 0 540 L 0 470 H 35 V 460 H 50 V 425 H 70 V 418 H 80 V 425 H 105 V 390 H 120 V 375 H 135 V 390 H 175 V 410 H 210 V 370 H 225 V 355 H 240 V 370 H 285 V 390 H 300 V 370 H 345 V 445 H 385 V 370 H 405 V 385 H 450 V 355 H 470 V 330 L 490 355 V 410 H 535 V 370 L 550 350 L 565 370 V 430 H 630 V 370 H 650 V 385 H 700 V 390 H 715 V 375 H 760 V 430 H 800 V 350 H 820 V 370 H 865 V 385 H 900 V 385 H 950 V 410 L 970 385 L 990 410 V 425 H 1000 V 540 Z" />
            <g transform="translate(0,1080) scale(1,-1)" opacity="0.35">
              <path fill="#1a3a5c" d="M 0 540 L 0 420 H 50 V 340 H 65 V 325 H 75 V 340 H 90 V 390 H 110 V 330 H 125 V 270 L 130 240 L 135 270 V 330 H 160 V 280 H 185 V 265 H 195 V 280 H 220 V 320 H 240 V 295 H 255 V 320 H 280 V 305 L 285 255 L 290 305 V 400 H 340 L 350 315 V 420 H 380 V 290 H 400 V 315 H 450 V 275 L 455 225 L 460 275 V 375 H 510 V 315 H 530 V 300 H 545 V 315 H 580 V 265 H 590 V 250 H 600 V 265 H 650 V 290 L 655 245 L 660 290 V 400 H 700 V 330 H 730 V 305 H 760 V 420 H 820 V 275 L 825 245 L 830 275 V 390 H 870 V 325 H 890 V 340 H 940 V 315 H 960 V 290 H 975 V 315 H 1000 V 540 Z" />
            </g>
            <g transform="translate(0,1080) scale(1,-1)" opacity="0.4">
              <path fill="#0f2a45" d="M 0 540 L 0 470 H 35 V 460 H 50 V 425 H 70 V 418 H 80 V 425 H 105 V 390 H 120 V 375 H 135 V 390 H 175 V 410 H 210 V 370 H 225 V 355 H 240 V 370 H 285 V 390 H 300 V 370 H 345 V 445 H 385 V 370 H 405 V 385 H 450 V 355 H 470 V 330 L 490 355 V 410 H 535 V 370 L 550 350 L 565 370 V 430 H 630 V 370 H 650 V 385 H 700 V 390 H 715 V 375 H 760 V 430 H 800 V 350 H 820 V 370 H 865 V 385 H 900 V 385 H 950 V 410 L 970 385 L 990 410 V 425 H 1000 V 540 Z" />
            </g>
          </svg>
        </div>

        {/* Layer 3 - Foreground buildings + windows */}
        <div className="parallax-layer" data-speed="0.5" style={{ zIndex: 3, position: 'absolute', inset: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 1080" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="windows" width="3" height="3" patternUnits="userSpaceOnUse">
                <line x1="0" y1="1.5" x2="3" y2="1.5" stroke="#1e5080" strokeWidth="0.8" />
              </pattern>
            </defs>
            <path id="fg" fill="#071525" d="M 0 540 L 0 500 H 25 V 455 H 40 V 475 H 55 V 440 H 85 V 430 L 90 415 L 95 430 V 480 H 125 V 425 H 140 V 455 H 170 V 440 H 190 V 340 Q 195 210 215 120 V 100 H 218 V 120 L 225 150 V 158 H 235 V 165 H 225 V 420 H 250 V 430 H 265 V 415 H 295 V 480 H 325 V 405 H 355 V 470 H 385 V 415 H 410 V 390 H 425 V 405 H 450 V 290 H 460 V 275 H 480 V 290 H 500 V 340 L 515 310 L 530 340 V 455 H 575 V 340 H 585 V 325 H 600 V 340 H 635 V 365 H 665 V 415 H 695 V 415 H 725 V 415 H 755 V 480 H 785 V 405 H 815 V 405 H 845 V 415 H 875 V 380 H 905 V 455 H 935 V 415 H 965 V 430 L 980 430 V 480 H 1000 V 540 Z" />
            <use href="#fg" fill="url(#windows)" />
            <g fill="#071525">
              <polygon points="215,120 225,150 225,420 215,420" />
              <rect x="225" y="158" width="10" height="7" />
              <rect x="500" y="340" width="16" height="200" />
            </g>
            <g transform="translate(0,1080) scale(1,-1)" opacity="0.45">
              <path fill="#071525" d="M 0 540 L 0 500 H 25 V 455 H 40 V 475 H 55 V 440 H 85 V 430 L 90 415 L 95 430 V 480 H 125 V 425 H 140 V 455 H 170 V 440 H 190 V 340 Q 195 210 215 120 V 100 H 218 V 120 L 225 150 V 158 H 235 V 165 H 225 V 420 H 250 V 430 H 265 V 415 H 295 V 480 H 325 V 405 H 355 V 470 H 385 V 415 H 410 V 390 H 425 V 405 H 450 V 290 H 460 V 275 H 480 V 290 H 500 V 340 L 515 310 L 530 340 V 455 H 575 V 340 H 585 V 325 H 600 V 340 H 635 V 365 H 665 V 415 H 695 V 415 H 725 V 415 H 755 V 480 H 785 V 405 H 815 V 405 H 845 V 415 H 875 V 380 H 905 V 455 H 935 V 415 H 965 V 430 L 980 430 V 480 H 1000 V 540 Z" />
            </g>
          </svg>
        </div>

        {/* Text content */}
        <div className="home-shell" style={{ position: 'absolute', inset: 0, zIndex: 5, display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(320px, 0.8fr)', alignItems: 'start', gap: '2rem', padding: 'clamp(3.25rem, 8vh, 6rem) clamp(2rem, 4vw, 4rem) clamp(3rem, 6vh, 5rem)' }}>
          <div className="parallax-slide-in layer-1 home-copy scroll-parallax-text" data-speed="0.06" style={{ maxWidth: '920px', color: '#f5f3ff', justifySelf: 'center', alignSelf: 'center' }}>
            <div className="tech-font home-kicker text-reveal text-reveal-fast text-reveal-delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.2rem', fontSize: '10px', letterSpacing: '0.36em', textTransform: 'uppercase', color: 'rgba(196, 181, 253, 0.92)' }}>
              <span style={{ width: '42px', height: '1px', backgroundColor: '#a78bfa', opacity: 0.85 }} />
              Full-Stack Developer
            </div>
            <h1 className="home-title text-reveal text-reveal-delay-2" style={{ margin: 0, fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(3.6rem, 9vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.05em', fontWeight: 800, textTransform: 'uppercase', maxWidth: '980px' }}>
              Building clean<br />
              <span style={{ color: '#a78bfa' }}>digital</span> products<br />
              for real use.
            </h1>
            <div className="parallax-slide-in layer-2 home-summary text-reveal text-reveal-fast text-reveal-delay-3" style={{ marginTop: '1.4rem', maxWidth: '720px', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', lineHeight: 1.75, color: 'rgba(245, 243, 255, 0.74)' }}>
              Web apps, automation, and full-stack implementation focused on useful products and clear execution.
            </div>
            <div className="parallax-slide-in layer-3 home-chip-row text-reveal text-reveal-fast text-reveal-delay-4" style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['React', 'Node.js', 'TypeScript', 'Automation', 'APIs', 'PostgreSQL'].map((item) => (
                <span key={item} className="tech-font" style={{ padding: '0.72rem 1rem', border: '1px solid rgba(167, 139, 250, 0.24)', backgroundColor: 'rgba(7, 21, 37, 0.88)', color: '#f5f3ff', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', borderRadius: '12px' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

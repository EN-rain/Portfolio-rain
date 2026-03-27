import homeImage from '../../assets/images/hero.png';

export const HomeSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 10, transform: 'translate3d(0, 0, 0)' }}>
      <div className="parallax-content home-section">
        <div className="home-section__grain parallax-layer" data-speed="-0.08" />
        <div className="home-section__vignette parallax-layer" data-speed="-0.05" />
        <div className="home-section__ring parallax-layer home-section__intro-ring" data-speed="-0.2" />
        <div className="home-section__crosshair parallax-layer home-section__intro-crosshair" data-speed="0.16" />
        <div className="home-section__circuit home-section__circuit--left parallax-layer home-section__intro-rail-left" data-speed="-0.18" />
        <div className="home-section__circuit home-section__circuit--right parallax-layer home-section__intro-rail-right" data-speed="0.2" />
        <div className="home-section__glyph home-section__glyph--left">{'{}'}</div>
        <div className="home-section__glyph home-section__glyph--right">{'< />'}</div>

        <div className="home-section__code home-section__code--left home-section__intro-copy">
          <span className="home-section__code-line"><em>const</em> hero = <strong>'ED'</strong></span>
          <span className="home-section__code-line"><em>theme</em>: <strong>'black'</strong></span>
          <span className="home-section__code-line"><em>motion</em>: <strong>'parallax'</strong></span>
        </div>

        <div className="home-section__code home-section__code--right home-section__intro-copy">
          <span className="home-section__code-line"><em>render</em>() {'=>'} visible</span>
          <span className="home-section__code-line"><em>image</em>: centered</span>
          <span className="home-section__code-line"><em>intro</em>: active</span>
        </div>

        <div className="home-section__terminal home-section__intro-image">
          <div className="home-section__terminal-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="home-section__terminal-body">
            <div>$ npm run dev</div>
            <div>&gt; vite ready</div>
            <div>&gt; home section online</div>
          </div>
        </div>

        <div className="home-section__center locked-content">
          <div className="home-section__image-wrap">
            <div className="home-section__image-stack home-section__intro-image">
              <div className="home-section__image-shadow" />
              <img className="home-section__image" src={homeImage} alt="Portrait" />
            </div>
          </div>
        </div>

        <div className="home-section__subtext">
          <p className="home-section__subtext-inner home-section__intro-baseline">
            UI engineer building dark, fast, product-facing interfaces.
          </p>
        </div>

      </div>

      <style>{`
        .home-section {
          position: relative;
          overflow: hidden;
          background:
            #020202;
          color: #f3f3f0;
        }

        .home-section__grain,
        .home-section__vignette,
        .home-section__subtext,
        .home-section__center {
          position: absolute;
          inset: 0;
        }

        .home-section__grain {
          opacity: 0.1;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 120px 120px;
          mask-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1) 18%, rgba(0, 0, 0, 1) 82%, transparent);
        }

        .home-section__vignette {
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.2) 22%, rgba(0, 0, 0, 0.2) 78%, rgba(0, 0, 0, 0.94) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.92) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.92) 100%);
        }

        .home-section__ring {
          inset: 12vh auto auto 50%;
          width: min(62vw, 820px);
          height: min(62vw, 820px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          transform: translateX(-50%);
          opacity: 0.55;
        }

        .home-section__crosshair {
          background:
            linear-gradient(90deg, transparent calc(50% - 140px), rgba(255, 255, 255, 0.08) calc(50% - 140px), rgba(255, 255, 255, 0.08) calc(50% - 139px), transparent calc(50% - 139px), transparent calc(50% + 139px), rgba(255, 255, 255, 0.08) calc(50% + 139px), rgba(255, 255, 255, 0.08) calc(50% + 140px), transparent calc(50% + 140px)),
            linear-gradient(180deg, transparent calc(50% - 220px), rgba(255, 255, 255, 0.08) calc(50% - 220px), rgba(255, 255, 255, 0.08) calc(50% - 219px), transparent calc(50% - 219px), transparent calc(50% + 219px), rgba(255, 255, 255, 0.08) calc(50% + 219px), rgba(255, 255, 255, 0.08) calc(50% + 220px), transparent calc(50% + 220px));
          opacity: 0.4;
        }

        .home-section__circuit,
        .home-section__glyph,
        .home-section__code,
        .home-section__terminal {
          position: absolute;
          z-index: 1;
          pointer-events: none;
          will-change: transform;
        }

        .home-section__circuit {
          width: 240px;
          height: 240px;
          opacity: 0.34;
          background-repeat: no-repeat;
        }

        .home-section__circuit--left {
          top: 16%;
          left: 7%;
          background-image:
            linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12)),
            linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.12)),
            linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12));
          background-size: 1px 94px, 92px 1px, 1px 68px;
          background-position: 36px 28px, 36px 122px, 128px 122px;
        }

        .home-section__circuit--right {
          right: 6%;
          bottom: 18%;
          background-image:
            linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12)),
            linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.12)),
            linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.12)),
            radial-gradient(circle, rgba(255,255,255,0.55) 0 2px, transparent 3px);
          background-size: 1px 76px, 102px 1px, 74px 1px, 14px 14px;
          background-position: 182px 40px, 80px 116px, 108px 40px, 175px 34px;
        }

        .home-section__glyph {
          top: 50%;
          font-family: 'Space Mono', monospace;
          font-size: clamp(2rem, 4vw, 3.5rem);
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.18);
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.08);
        }

        .home-section__glyph--left {
          left: 12%;
        }

        .home-section__glyph--right {
          right: 11%;
        }

        .home-section__code {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.42);
          white-space: nowrap;
        }

        .home-section__code--left {
          left: clamp(24px, 5vw, 72px);
          bottom: 22%;
          top: auto;
        }

        .home-section__code--right {
          right: clamp(24px, 5vw, 72px);
          top: 22%;
          text-align: right;
        }

        .home-section__code-line em {
          font-style: normal;
          color: rgba(255, 255, 255, 0.28);
        }

        .home-section__code-line strong {
          font-weight: 400;
          color: rgba(255, 255, 255, 0.82);
        }

        .home-section__terminal {
          left: clamp(24px, 6vw, 96px);
          top: clamp(24px, 6vh, 52px);
          width: min(280px, calc(100vw - 48px));
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(6, 6, 8, 0.7);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(8px);
        }

        .home-section__terminal-bar {
          display: flex;
          gap: 6px;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .home-section__terminal-bar span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.22);
        }

        .home-section__terminal-body {
          padding: 12px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.62);
        }

        .home-section__center {
          z-index: 2;
          display: grid;
          place-items: stretch;
          padding: 0;
        }

        .home-section__intro-copy,
        .home-section__intro-image,
        .home-section__intro-baseline,
        .home-section__intro-ring,
        .home-section__intro-crosshair {
          opacity: 0;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }

        .home-section__intro-image {
          animation-name: homeImageEnter;
          animation-duration: 1.25s;
          animation-delay: 0.32s;
        }

        .home-section__intro-copy {
          animation-name: homeFadeLift;
          animation-duration: 0.9s;
          animation-delay: 0.46s;
        }

        .home-section__intro-baseline {
          animation-name: homeFadeLift;
          animation-duration: 0.9s;
          animation-delay: 0.8s;
        }

        .home-section__intro-ring {
          animation-name: homeRingEnter;
          animation-duration: 1.2s;
          animation-delay: 0.1s;
        }

        .home-section__intro-crosshair {
          animation-name: homeCrosshairEnter;
          animation-duration: 1.2s;
          animation-delay: 0.16s;
        }

        .home-section__subtext {
          inset: auto 0 118px 0;
          z-index: 2;
          display: flex;
          justify-content: center;
          padding: 0 1.5rem;
        }

        .home-section__subtext-inner {
          margin: 0 auto;
          max-width: 520px;
          text-align: center;
          font-size: 13px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.58);
          will-change: transform;
        }

        .home-section__image-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          min-width: 0;
          max-height: none;
          aspect-ratio: auto;
          display: grid;
          place-items: center;
        }

        .home-section__image-stack {
          position: relative;
          width: 100%;
          height: 100%;
          display: grid;
          place-items: stretch;
          will-change: transform;
        }

        .home-section__image-shadow {
          inset: auto;
          width: 72%;
          height: 72%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 18%, transparent 72%);
          filter: blur(18px);
          opacity: 0.22;
        }

        .home-section__image {
          position: relative;
          inset: auto;
          width: 100%;
          height: 100%;
          z-index: 2;
          object-fit: cover;
          object-position: center center;
          mix-blend-mode: normal;
          filter: contrast(1.12) brightness(1.04);
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
          user-select: none;
          pointer-events: none;
          will-change: transform;
        }

        @keyframes homeImageEnter {
          0% {
            opacity: 0;
            transform: translate3d(0, 68px, 0) scale(0.9);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes homeFadeLift {
          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes homeRingEnter {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.94);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        @keyframes homeCrosshairEnter {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 900px) {
          .home-section__image-wrap {
            width: 100%;
            height: 100%;
          }

          .home-section__crosshair {
            opacity: 0.24;
          }

          .home-section__terminal {
            top: 20px;
            left: 20px;
            width: 220px;
          }
        }

        @media (max-width: 640px) {
          .home-section__glyph,
          .home-section__code,
          .home-section__circuit {
            display: none;
          }

          .home-section__subtext {
            bottom: 98px;
            padding: 0 1rem;
          }

          .home-section__subtext-inner {
            max-width: 300px;
            font-size: 12px;
          }

          .home-section__image-wrap {
            width: 100%;
            height: 100%;
          }

          .home-section__terminal {
            left: 12px;
            top: 12px;
            width: min(210px, calc(100vw - 24px));
          }
        }
      `}</style>
    </section>
  );
};

import heroImage from '../../assets/images/hero.png';
import { useMobileReveal } from '../../hooks/useMobileReveal';

export const AboutSection = () => {
  const revealRef = useMobileReveal<HTMLElement>();
  return (
    <section ref={revealRef} id="about" className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          <div className="about-shell locked-content">
            <div className="about-image-container relative">
              <div className="about-image-wrap">
                <img src={heroImage} alt="Profile" className="about-image" />
              </div>

              <div className="about-skills-box about-skills-box--desktop">
                <span className="about-skill-tag">React</span>
                <span className="about-skill-tag">TypeScript</span>
                <span className="about-skill-tag">Node.js</span>
                <span className="about-skill-tag">CSS</span>
                <span className="about-skill-tag">Figma</span>
              </div>
            </div>

            <div className="about-content">
              <h2 className="about-title">Hello, I'm</h2>
              <h3 className="about-name"><span className="about-name-e">E</span>drian<br /><span className="about-name-n">N</span>ieves</h3>
              
              <div className="about-text-wrapper">
                <p className="about-text">
                  I'm a UI engineer passionate about building dark, fast, product-facing interfaces.
                  With a keen eye for detail and a love for smooth animations, I create experiences
                  that feel both intuitive and delightful.
                </p>
                <p className="about-text">
                  My expertise spans modern frontend technologies, responsive design, and
                  performance optimization. I believe great UI is invisible &mdash; it gets out of the
                  way and lets users accomplish their goals effortlessly.
                </p>
              </div>

              <div className="about-skills-box about-skills-box--mobile">
                <span className="about-skill-tag">React</span>
                <span className="about-skill-tag">TypeScript</span>
                <span className="about-skill-tag">Node.js</span>
                <span className="about-skill-tag">CSS</span>
                <span className="about-skill-tag">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Keyframe animations */
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) translateY(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(-60px);
          }
        }

        @keyframes slideFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes slideTextFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-shell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;
          width: 100%;
          height: 100%;
          padding: 4rem;
          z-index: 1;
        }

        .about-image-container {
          flex: 0 0 auto;
        }

        .about-image-wrap {
          position: relative;
          transform: translateY(-60px);
          width: 320px;
          height: 400px;
          border-radius: 16px;
          overflow: visible;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          animation: slideFromLeft 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .about-content {
          flex: 1;
          max-width: 600px;
          padding: 0;
        }

        .about-title {
          font-family: 'Sora', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #11081a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          animation: slideFromTop 0.8s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
          margin: 0;
        }

        .about-name {
          font-family: 'Sora', sans-serif;
          font-size: 3rem;
          font-weight: 600;
          color: #000000;
          margin-top: 0.5rem;
          margin-left: -0.2rem;
          line-height: 1.1;
          animation: slideFromRight 0.8s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
          display: inline-block;
          text-align: left;
        }
        .about-name-e,
        .about-name-n{
          font-size: 6.5rem;
          display: inline-block;
          line-height: 0.8;
          opacity: 0;
          pointer-events: none;
          user-select: none;
        }

        .about-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          animation: slideTextFromBottom 0.8s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
          color: #4a4a5a;
          margin-top: 1.5rem;
          margin-bottom: 0;
        }

        .about-skills-box {
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          animation: slideFromBottom 0.8s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .about-skills-box.about-skills-box--desktop {
          display: flex;
        }

        .about-skills-box.about-skills-box--mobile {
          display: none;
        }

        .about-skill-tag {
          padding: 6px 14px;
          background: rgba(167, 139, 250, 0.1);
          border: 1px solid rgba(167, 139, 250, 0.2);
          border-radius: 100px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem;
          color: #6b4fa8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .about-shell {
            flex-direction: column !important;
            padding: 80px 24px 60px !important;
            height: auto !important;
            min-height: 100vh !important;
            gap: 40px !important;
            align-items: center !important;
            text-align: center !important;
          }

          .about-image-wrap {
            width: 180px !important;
            height: 180px !important;
            border-radius: 50% !important;
            transform: none !important;
            margin: 0 auto !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          }

          .about-image { border-radius: 50% !important; }

          .about-content {
            width: 100% !important;
            max-width: 100% !important;
          }

          .about-title { display: none !important; }

          .about-name {
            font-size: 32px !important;
            text-align: center !important;
            margin: 0 auto 1.5rem !important;
            text-transform: uppercase !important;
          }

          .about-name-e, .about-name-n {
            font-size: 1em !important;
            opacity: 1 !important;
          }

          .about-text {
            font-size: 15px !important;
            line-height: 1.6 !important;
            text-align: center !important;
            margin-top: 1rem !important;
          }

          .about-skills-box {
            justify-content: center !important;
            margin-top: 2rem !important;
          }

          .about-skills-box--desktop {
            display: none !important;
          }

          .about-skills-box--mobile {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};

import heroImage from '../../assets/images/hero.png';

export const AboutSection = () => {
  return (
    <section id="about" className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          <div className="about-shell locked-content">
            <div className="about-image-container relative">
              <div className="about-image-wrap">
                <img src={heroImage} alt="Profile" className="about-image" />
              </div>
              
              <div className="about-skills-box">
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
              <p className="about-text">
                I'm a UI engineer passionate about building dark, fast, product-facing interfaces.
                With a keen eye for detail and a love for smooth animations, I create experiences
                that feel both intuitive and delightful.
                <br/>
                <br/>
                My expertise spans modern frontend technologies, responsive design, and
                performance optimization. I believe great UI is invisible &mdash; it gets out of the
                way and lets users accomplish their goals effortlessly.
              </p>
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
            transform: translateX(-50%) translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes slideFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(30px);
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

        .about-image-wrap {
          position: relative;
          flex: 0 0 auto;
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

        .about-skills-box {
          position: absolute;
          bottom: -10%;
          left: 50%;
          width: 350px;
          height: 130px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 6px;
          line-height: 1.2;
          z-index: 10;
          animation: slideFromBottom 0.8s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .about-skill-tag {
          padding: 4px 10px;
          background: rgba(167, 139, 250, 0.15);
          border: 1px solid rgba(167, 139, 250, 0.4);
          border-radius: 12px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.65rem;
          color: #6b4fa8;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          line-height: 1;
        }

        .about-content {
          flex: 1;
          max-width: 600px;
          padding: 0;
        }

        .about-content > * {
          margin-left: 0;
          padding-left: 0;
        }

        .about-title {
          font-family: 'Sora', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #11081a;
          transform: translateY(30px);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          animation: slideFromTop 0.8s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .about-name {
          font-family: 'Sora', sans-serif;
          font-size: 3rem;
          font-weight: 600;
          color: #000000;
          margin-top: 1rem;
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
          font-size: 1.2rem;
          line-height: 1.8;
          animation: slideTextFromBottom 0.8s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
          color: #4a4a5a;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .about-shell {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding: 80px 24px 60px !important;
            height: auto !important;
            min-height: 100vh !important;
            background: #f7f7fc !important;
            gap: 20px !important;
            opacity: 1 !important;
            transform: none !important;
            overflow-y: auto !important;
          }

          .about-image-container {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 20px !important;
            position: relative !important;
          }

          .about-image-wrap {
            width: 180px !important;
            height: 180px !important;
            border-radius: 50% !important;
            margin: 0 !important;
            flex: none !important;
            opacity: 1 !important;
            transform: none !important;
            position: relative !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
            order: 1 !important;
          }

          .about-image {
             border-radius: 50% !important;
          }

          .about-skills-box {
            position: relative !important;
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 8px !important;
            width: 100% !important;
            height: auto !important;
            margin: 0 !important;
            inset: auto !important;
            transform: none !important;
            opacity: 1 !important;
            order: 2 !important;
          }

          .about-content {
            width: 100% !important;
            text-align: center !important;
            padding: 0 !important;
            opacity: 1 !important;
            transform: none !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
            order: 2 !important; /* Stack after container */
          }

          .about-title {
            font-size: 14px !important;
            font-weight: 700 !important;
            letter-spacing: 0.2em !important;
            color: #7c3aed !important;
            margin: 20px 0 10px 0 !important; /* Space after skills box */
            transform: none !important;
            opacity: 1 !important;
          }

          .about-name {
            font-size: 32px !important;
            line-height: 1.1 !important;
            margin: 0 0 20px 0 !important;
            color: #11081a !important;
            transform: none !important;
            opacity: 1 !important;
            white-space: normal !important;
            text-transform: uppercase !important;
            text-align: center !important;
          }

          .about-name br { display: none !important; }

          .about-text {
            font-size: 14px !important;
            line-height: 1.6 !important;
            color: #4a4a5a !important;
            text-align: center !important;
            margin: 0 auto !important;
            max-width: 320px !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }

        @media (max-width: 480px) {
          .about-image-wrap {
            width: 180px !important;
            height: 180px !important;
          }

          .about-name {
            font-size: 32px !important;
          }

          .about-text {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

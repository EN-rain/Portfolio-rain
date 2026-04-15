import heroImage from '../../assets/images/hero.png';

export const AboutSection = () => {
  return (
    <section id="about" className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          <div className="about-shell locked-content">
            <div className="about-image-wrap">
              <img src={heroImage} alt="Profile" className="about-image" />
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
              <h3 className="about-name">
                &nbsp;drian
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;ieves
              </h3>
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
            transform: translateX(45px) translateY(35px);
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
          bottom: -150px;
          left: 50%;
          transform: translateX(-50%);
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
          transform: translateY(35px) translateX(45px);
          font-family: 'Sora', sans-serif;
          font-size: 3rem;
          font-weight: 600;
          color: #000000;
          margin-bottom: 1.5rem;
          text-transform: lowercase;
          line-height: 1.75;
          animation: slideFromRight 0.8s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
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

        @media (max-width: 1024px) {
          .about-shell {
            flex-direction: column;
            gap: 2rem;
            padding: 3rem 2rem;
          }

          .about-image-wrap {
            width: 240px;
            height: 300px;
          }

          .about-content {
            text-align: center;
            max-width: 100%;
          }

        @media (max-width: 768px) {
          .about-shell {
            padding: 2rem 1.5rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-text {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .about-image-wrap {
            width: 180px;
            height: 220px;
          }

          .about-title {
            font-size: 1.5rem;
          }

          .about-text {
            font-size: 0.85rem;
          }

        }
      `}</style>
    </section>
  );
};

import heroImage from '../../assets/images/hero2.png';
import { useMobileReveal } from '../../hooks/useMobileReveal';
import { experience, projects } from '../../data/works';
import jsIcon from '../../assets/icons/tech/javascript-original.svg';
import reactIcon from '../../assets/icons/tech/react-original.svg';
import tsIcon from '../../assets/icons/tech/typescript-original.svg';
import nodeIcon from '../../assets/icons/tech/nodejs-original.svg';
import expressIcon from '../../assets/icons/tech/express-original.svg';
import supabaseIcon from '../../assets/icons/tech/supabase-original.svg';
import postgresIcon from '../../assets/icons/tech/postgresql-original.svg';
import tailwindIcon from '../../assets/icons/tech/tailwindcss-original.svg';
import cssIcon from '../../assets/icons/tech/css3-original.svg';
import figmaIcon from '../../assets/icons/tech/figma-original.svg';

export const AboutSection = () => {
  const revealRef = useMobileReveal<HTMLElement>();
  const jobStackSkills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'Express.js',
    'Supabase',
    'PostgreSQL',
    'Tailwind CSS',
    'CSS',
    'Figma',
  ] as const;

  const availableSkills = new Set([...experience.flatMap(e => e.highlights ?? []), ...projects.flatMap(p => p.stack ?? [])]);
  const techStackSkills = jobStackSkills.filter(s => s === 'JavaScript' || s === 'CSS' || s === 'Figma' || availableSkills.has(s));

  const skillIcons = {
    JavaScript: jsIcon,
    React: reactIcon,
    TypeScript: tsIcon,
    'Node.js': nodeIcon,
    'Express.js': expressIcon,
    Supabase: supabaseIcon,
    PostgreSQL: postgresIcon,
    'Tailwind CSS': tailwindIcon,
    CSS: cssIcon,
    Figma: figmaIcon,
  } as const;
  return (
    <section ref={revealRef} id="about" className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          <div className="about-shell locked-content">
            <div className="about-image-container relative">
              <div data-about-fade data-about-fade-order="0" className="about-image-wrap about-scroll-fade">
                <img src={heroImage} alt="Profile" className="about-image" />
              </div>

              <div data-about-fade data-about-fade-order="4" className="about-skills-box about-skills-box--desktop about-scroll-fade">
                {techStackSkills.map(s => (
                  <span key={s} className="about-skill-tag">
                    <img
                      className="about-skill-icon"
                      src={skillIcons[s as keyof typeof skillIcons]}
                      alt=""
                      aria-hidden="true"
                    />
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-content">
              <h2 data-about-fade data-about-fade-order="1" className="about-title about-scroll-fade">Hello!, I'm</h2>
              <h3 data-about-fade data-about-fade-order="2" className="about-name about-scroll-fade"><span className="about-name-e">E</span>drian<br /><span className="about-name-n">N</span>ieves</h3>
              
              <div className="about-text-wrapper">
                <p data-about-fade data-about-fade-order="3" className="about-text about-scroll-fade">
                  A Full-Stack Developer based in Leon City, Philippines. I got into development because I like building things that actually solve problems, not just things that look good in a repo.
                </p>
                <p data-about-fade data-about-fade-order="3.4" className="about-text about-scroll-fade">
                  From 2FA dashboards to automated reporting pipelines, I build end-to-end and own every part of it. Open to full-time work, project based and part time.
                </p>
              </div>

              <div className="about-skills-box about-skills-box--mobile">
                {techStackSkills.map(s => (
                  <span key={s} className="about-skill-tag">
                    <img
                      className="about-skill-icon"
                      src={skillIcons[s as keyof typeof skillIcons]}
                      alt=""
                      aria-hidden="true"
                    />
                    {s}
                  </span>
                ))}
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
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-image-wrap {
          position: relative;
          transform: translateY(-60px);
          width: 320px;
          height: 400px;
          border-radius: 16px;
          overflow: visible;
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
          color: #4a4a5a;
          margin-top: 1.5rem;
          margin-bottom: 0;
        }

        @media (min-width: 1024px) {
          .about-scroll-fade {
            opacity: 0;
            animation: none !important;
            transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1);
            will-change: opacity;
          }
        }

        .about-skills-box {
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          align-content: center;
          animation: slideFromBottom 0.8s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .about-skills-box.about-skills-box--desktop {
          display: flex;
          margin-top: -28px;
          width: 400px;
          padding: 0 calc(400px * 0.05);
          box-sizing: content-box;
        }

        .about-skills-box.about-skills-box--mobile {
          display: none;
        }

        .about-skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem;
          color: #6b4fa8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .about-skill-icon {
          width: 14px;
          height: 14px;
          display: block;
          flex: 0 0 auto;
        }

        .about-location-icon {
          display: inline-block;
          vertical-align: middle;
          margin: 0 6px;
          transform: translateY(-1px);
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

import heroImage from '../../assets/images/hero1.2.png';
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
import figmaIcon from '../../assets/icons/tech/figma-original.svg';
import canvaIcon from '../../assets/icons/tech/canva-original.svg';
import dockerIcon from '../../assets/icons/tech/docker-original.svg';
import dotnetCoreIcon from '../../assets/icons/tech/dotnetcore-original.svg';
import cockroachIcon from '../../assets/icons/tech/cockroachdb-original.svg';
import chromaIcon from '../../assets/icons/tech/chromadb-original.svg';
import websocketIcon from '../../assets/icons/tech/websocket-original.svg';

export const AboutSection = () => {
  const revealRef = useMobileReveal<HTMLElement>();
  const jobStackSkills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'Supabase',
    'PostgreSQL',
    'Tailwind CSS',
    'Figma',
    'Canva',
    'Docker',
    'WebSockets',
    'ASP.NET Core',
    'ChromaDB',
    'CockroachDB',
  ] as const;

  const availableSkills = new Set([...experience.flatMap(e => e.highlights ?? []), ...projects.flatMap(p => p.stack ?? [])]);
  const techStackSkills = jobStackSkills.filter(s => s === 'JavaScript' || s === 'Figma' || s === 'Canva' || availableSkills.has(s));
  const desktopSkillGroups = [
    { label: 'Frontend', skills: ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS'] },
    { label: 'Backend', skills: ['Node.js', 'Express', 'ASP.NET Core', 'WebSockets'] },
    { label: 'Database', skills: ['PostgreSQL', 'Supabase', 'ChromaDB', 'CockroachDB'] },
    { label: 'Tooling', skills: ['Figma', 'Canva', 'Docker'] },
  ].map(group => ({
    ...group,
    skills: group.skills.filter(s => techStackSkills.includes(s as typeof techStackSkills[number])),
  })).filter(group => group.skills.length > 0);

  const skillIcons = {
    JavaScript: jsIcon,
    React: reactIcon,
    TypeScript: tsIcon,
    'Node.js': nodeIcon,
    Express: expressIcon,
    Supabase: supabaseIcon,
    PostgreSQL: postgresIcon,
    'Tailwind CSS': tailwindIcon,
    Figma: figmaIcon,
    Canva: canvaIcon,
    Docker: dockerIcon,
    WebSockets: websocketIcon,
    'ASP.NET Core': dotnetCoreIcon,
    ChromaDB: chromaIcon,
    CockroachDB: cockroachIcon,
  } as const;

  const getSkillIcon = (skill: string) => (skillIcons as Record<string, string | undefined>)[skill];
  return (
    <section ref={revealRef} id="about" className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          <div className="about-shell locked-content">
            <div className="about-image-container relative">
              <div data-about-fade data-about-fade-order="0" data-about-fade-dir="left" className="about-image-wrap about-scroll-fade">
                <img src={heroImage} alt="Profile" className="about-image" />
              </div>

              <div data-about-fade data-about-fade-order="5" data-about-fade-dir="pop-children" className="about-skills-box about-skills-box--desktop about-scroll-fade">
                {desktopSkillGroups.map(group => (
                  <div key={group.label} className="about-skill-group">
                    <div className="about-skill-group-title">{group.label}</div>
                    <div className="about-skill-group-list">
                      {group.skills.map(s => (
                        <span key={s} className="about-skill-tag">
                          {getSkillIcon(s) ? (
                            <img
                              className="about-skill-icon"
                              src={getSkillIcon(s)}
                              alt=""
                              aria-hidden="true"
                            />
                          ) : null}
                          {s === 'JavaScript' ? 'JS' : s === 'Tailwind CSS' ? 'Tailwind' : s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-content">
              <h2 data-about-fade data-about-fade-order="1" data-about-fade-dir="top" className="about-title about-scroll-fade">Hello!, I'm</h2>
              <h3 data-about-fade data-about-fade-order="2" data-about-fade-dir="right" className="about-name about-name--first about-scroll-fade"><span className="about-name-e">E</span>drian</h3>
              <h3 data-about-fade data-about-fade-order="2.6" data-about-fade-dir="right" className="about-name about-name--second about-scroll-fade"><span className="about-name-n">N</span>ieves</h3>
              
              <div className="about-text-wrapper">
                <p data-about-fade data-about-fade-order="3" data-about-fade-dir="bottom" className="about-text about-scroll-fade">
                  A Junior Full-Stack Developer based in Leon City, Philippines. I got into development because I like building things that actually solve problems, not just things that look good in a repo.
                </p>
                <p data-about-fade data-about-fade-order="3.5" data-about-fade-dir="bottom" className="about-text about-scroll-fade">
                  From 2FA dashboards to automated reporting pipelines, I build end-to-end and own every part of it. Open to full-time work, project based and part time.
                </p>
              </div>

              <div className="about-skills-box about-skills-box--mobile">
                <div className="about-sr-only">Tech stack: {techStackSkills.join(', ')}</div>

                <div className="about-tech-marquee" aria-hidden="true">
                  <div className="about-tech-row about-tech-row--right">
                    <div className="about-tech-track">
                      <div className="about-tech-set">
                        {techStackSkills.map(s => (
                          <span key={`r-a-${s}`} className="about-skill-tag">
                            {getSkillIcon(s) ? (
                              <img
                                className="about-skill-icon"
                                src={getSkillIcon(s)}
                                alt=""
                                aria-hidden="true"
                              />
                            ) : null}
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="about-tech-set" aria-hidden="true">
                        {techStackSkills.map(s => (
                          <span key={`r-b-${s}`} className="about-skill-tag">
                            {getSkillIcon(s) ? (
                              <img
                                className="about-skill-icon"
                                src={getSkillIcon(s)}
                                alt=""
                                aria-hidden="true"
                              />
                            ) : null}
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="about-tech-row about-tech-row--left">
                    <div className="about-tech-track">
                      <div className="about-tech-set">
                        {techStackSkills.map(s => (
                          <span key={`l-a-${s}`} className="about-skill-tag">
                            {getSkillIcon(s) ? (
                              <img
                                className="about-skill-icon"
                                src={getSkillIcon(s)}
                                alt=""
                                aria-hidden="true"
                              />
                            ) : null}
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="about-tech-set" aria-hidden="true">
                        {techStackSkills.map(s => (
                          <span key={`l-b-${s}`} className="about-skill-tag">
                            {getSkillIcon(s) ? (
                              <img
                                className="about-skill-icon"
                                src={getSkillIcon(s)}
                                alt=""
                                aria-hidden="true"
                              />
                            ) : null}
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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

        @keyframes about-marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes about-marquee-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
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
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-image-wrap {
          position: relative;
          width: min(420px, 100%);
          aspect-ratio: 1 / 1;
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
          max-width: none;
          min-width: 0;
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
          margin-left: -0.2rem;
          line-height: 1.1;
          animation: slideFromRight 0.8s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
          display: block;
          text-align: left;
        }
        .about-name--first {
          margin-top: 0.5rem;
        }
        .about-name--second {
          margin-top: 0;
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
            will-change: opacity, transform;
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
          flex-direction: column;
          gap: 12px;
          margin-top: -28px;
          width: 560px;
          padding: 0;
          box-sizing: content-box;
        }

        .about-skills-box.about-skills-box--mobile {
          display: none;
        }

        .about-skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0;
          border-radius: 0;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.62rem;
          color: #6b4fa8;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          white-space: nowrap;
          flex: 0 0 auto;
        }

        .about-skill-group {
          display: grid;
          grid-template-columns: 92px 1fr;
          align-items: start;
          column-gap: 14px;
          row-gap: 7px;
          min-width: 0;
        }

        .about-skill-group-title {
          font-family: 'Sora', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          line-height: 1;
          color: #11081a;
        }

        .about-skill-group-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 6px 10px;
        }

        .about-skill-icon {
          width: 12px;
          height: 12px;
          display: block;
          flex: 0 0 auto;
        }

        .about-sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .about-tech-marquee {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .about-tech-row {
          position: relative;
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
        }

        .about-tech-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
        }

        .about-tech-set {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 2px 0;
        }

        .about-tech-row--left .about-tech-track {
          animation: none;
        }

        .about-tech-row--right .about-tech-track {
          animation: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-tech-row--left .about-tech-track,
          .about-tech-row--right .about-tech-track {
            animation-duration: 60s;
          }
        }

        .about-location-icon {
          display: inline-block;
          vertical-align: middle;
          margin: 0 6px;
          transform: translateY(-1px);
        }

        @media (max-width: 768px), (hover: none) and (pointer: coarse) {
          .about-shell {
            flex-direction: column !important;
            padding: 80px 20px 60px !important;
            height: auto !important;
            min-height: 100vh !important;
            gap: 40px !important;
            align-items: center !important;
            text-align: center !important;
          }

          .about-image-wrap {
            width: 350px !important;
            height: 350px !important;
            transform: none !important;
            margin: 0 auto !important;
            margin-top: -100px !important;
          }


          .about-content {
            width: 100% !important;
            max-width: 100% !important;
          }

          .about-title { display: none !important; }

          .about-name {
            font-size: 32px !important;
            text-align: center !important;
            margin: 0 auto !important;
            text-transform: uppercase !important;
          }
          .about-name--first {
            margin-bottom: 0 !important;
          }
          .about-name--second {
            margin-bottom: 1.5rem !important;
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
            display: block !important;
            width: 100% !important;
            max-width: 520px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .about-skills-box--mobile .about-skill-tag {
            gap: 8px !important;
            padding: 6px 14px !important;
            border-radius: 100px !important;
            font-size: 0.7rem !important;
            letter-spacing: 0.05em !important;
          }

          .about-skills-box--mobile .about-skill-icon {
            width: 14px !important;
            height: 14px !important;
          }

          .about-tech-row--left .about-tech-track {
            animation: about-marquee-left 50s linear infinite;
            animation-play-state: running;
          }

          .about-tech-row--right .about-tech-track {
            animation: about-marquee-right 50s linear infinite;
            animation-play-state: running;
          }
        }
      `}</style>
    </section>
  );
};

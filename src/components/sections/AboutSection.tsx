import profileImage from '../../assets/images/icon.jpg';
import { MagneticButton } from '../MagneticButton';

export const AboutSection = () => {
  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner flex flex-col items-center justify-center pb-12">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <line x1="0" y1="15%" x2="30%" y2="15%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.08" />
              <line x1="32%" y1="15%" x2="32%" y2="25%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.08" />
              <line x1="32%" y1="25%" x2="55%" y2="25%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.08" />
              <circle cx="55%" cy="25%" r="3" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.12" />

              <line x1="65%" y1="10%" x2="100%" y2="10%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              <line x1="65%" y1="10%" x2="65%" y2="20%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              <line x1="65%" y1="20%" x2="80%" y2="20%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              <circle cx="80%" cy="20%" r="2.5" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.1" />

              <line x1="10%" y1="80%" x2="40%" y2="80%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.07" />
              <line x1="40%" y1="80%" x2="40%" y2="90%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.07" />
              <line x1="40%" y1="90%" x2="70%" y2="90%" stroke="#a78bfa" strokeWidth="0.5" opacity="0.07" />
              <circle cx="70%" cy="90%" r="3" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.1" />

              <line x1="75%" y1="75%" x2="95%" y2="75%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.05" />
              <line x1="95%" y1="75%" x2="95%" y2="85%" stroke="#7c3aed" strokeWidth="0.5" opacity="0.05" />

              <circle cx="30%" cy="15%" r="2" fill="#7c3aed" opacity="0.1" />
              <circle cx="65%" cy="10%" r="2" fill="#a78bfa" opacity="0.08" />
              <circle cx="10%" cy="80%" r="2" fill="#7c3aed" opacity="0.08" />
              <circle cx="75%" cy="75%" r="2" fill="#a78bfa" opacity="0.08" />

              <g opacity="0.1" stroke="#6d28d9" strokeWidth="0.6">
                <line x1="20%" y1="48%" x2="20%" y2="52%" />
                <line x1="18%" y1="50%" x2="22%" y2="50%" />
              </g>
              <g opacity="0.08" stroke="#a78bfa" strokeWidth="0.6">
                <line x1="85%" y1="58%" x2="85%" y2="62%" />
                <line x1="83%" y1="60%" x2="87%" y2="60%" />
              </g>

              <polygon points="50,400 60,393 70,400 70,413 60,420 50,413" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.08" />
            </svg>
          </div>

          <div className="about-shell locked-content relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-8 pt-20 text-[#151226] lg:flex-row lg:gap-16">
            <div className="about-copy flex-1 text-left">
              <div className="tech-font text-reveal text-reveal-fast text-reveal-delay-1 mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-[#6d28d9]/70">
                <span className="h-[1px] w-8 bg-[#a78bfa]/50"></span>
                <span>Summary</span>
              </div>

              <h2 className="heading-font text-reveal text-reveal-delay-2 mb-8 text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
                <span className="block text-[#151226]/92">I BUILD</span>
                <span className="mt-1 block" style={{ color: '#7c3aed' }}>DIGITAL</span>
                <span className="mt-1 block text-[#151226]/92">SYSTEMS</span>
              </h2>

              <p className="about-summary text-reveal text-reveal-fast text-reveal-delay-3 mb-6 max-w-md text-[15px] font-light leading-[1.9] text-[#5b576f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Junior full-stack developer with hands-on experience in React, Node.js, TypeScript, PostgreSQL, and automation workflows. Built and shipped personal and academic projects across AI, web, and game development, and completed a full-stack internship focused on authentication, REST APIs, and process automation.
              </p>

              <div className="about-tag-list text-reveal text-reveal-fast text-reveal-delay-5 mb-5 flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Docker', 'Python', 'Godot'].map((skill, i) => (
                  <span
                    key={i}
                    className="tech-font cursor-default rounded-full px-4 py-2 text-[9px] transition-all duration-500 hover:scale-105"
                    style={{
                      border: '1px solid rgba(124, 58, 237, 0.14)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: 'rgba(21, 18, 38, 0.72)',
                      letterSpacing: '0.15em'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <MagneticButton className="about-button text-reveal text-reveal-fast text-reveal-delay-5 cursor-hover tech-font inline-flex items-center gap-3 rounded-full border border-[#7c3aed]/15 bg-[#ffffff] px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-[#5b576f] transition-all duration-500 hover:border-[#7c3aed]/35 hover:bg-[#f4f1ff] hover:text-[#151226] hover:shadow-[0_0_30px_rgba(124,58,237,0.12)]">
                <span>Open To Remote</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </MagneticButton>
            </div>

            <div className="about-media relative mt-4 flex w-full flex-1 justify-center lg:mt-0 lg:justify-end">
              <div
                className="text-reveal text-reveal-delay-4 relative w-full overflow-hidden"
                style={{
                  maxWidth: '320px',
                  aspectRatio: '1 / 1',
                  borderRadius: '999px'
                }}
              >
                <img
                  className="about-image"
                  src={profileImage}
                  alt="Developer portrait"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1025px) {
          .about-shell {
            gap: 3.25rem !important;
            padding-top: 7.25rem !important;
            padding-bottom: 5.5rem !important;
            align-items: start !important;
          }

          .about-copy h2 {
            margin-bottom: 1.5rem !important;
            font-size: 4.9rem !important;
          }

          .about-summary {
            margin-bottom: 1.5rem !important;
            max-width: 34rem !important;
          }

          .about-tag-list {
            margin-bottom: 1.25rem !important;
          }

          .about-media {
            margin-top: 0 !important;
            align-self: center !important;
          }

          .about-image {
            height: 100% !important;
          }
        }

        @media (max-width: 1024px) {
          .about-shell {
            gap: 1.5rem !important;
            padding-top: 4.25rem !important;
          }
        }

        @media (max-width: 768px) {
          .about-shell {
            gap: 1.1rem !important;
            padding: 5.5rem 1.25rem 4.75rem !important;
          }

          .about-copy {
            width: 100%;
          }

          .about-summary,
          .about-tag-list {
            max-width: 100% !important;
          }

          .about-button {
            width: 100%;
            justify-content: center;
            padding: 1rem 1.1rem !important;
          }

          .about-media {
            margin-top: 0 !important;
          }

          .about-image {
            height: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .about-shell {
            gap: 0.9rem !important;
            padding: 5rem 1rem 5.5rem !important;
          }

          .about-shell h2 {
            margin-bottom: 0.8rem !important;
            font-size: 1.85rem !important;
            line-height: 0.92 !important;
          }

          .about-summary {
            margin-bottom: 0.8rem !important;
            font-size: 13px !important;
            line-height: 1.6 !important;
          }

          .about-tag-list > span {
            padding: 0.55rem 0.8rem !important;
          }

          .about-image {
            height: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

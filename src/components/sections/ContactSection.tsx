import icon from '../../assets/images/hero3.png';
import { useMobileReveal } from '../../hooks/useMobileReveal';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const revealRef = useMobileReveal<HTMLElement>();
  return (
    <section ref={revealRef} id="contact" className="stack-section" style={{ zIndex: 120 }}>
      <div
        className="parallax-content relative flex flex-col items-center justify-center overflow-hidden px-6 text-[#151226]"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
            <g fill="none" stroke="#7c3aed" strokeWidth="0.7" opacity="0.1">
              <path d="M0 210h1920" />
              <path d="M0 540h1920" />
              <path d="M0 860h1920" />
              <path d="M280 0v1080" />
              <path d="M960 0v1080" />
              <path d="M1620 0v1080" />
            </g>
            <g fill="none" stroke="#f5f3ff" strokeWidth="0.6" opacity="0.14">
              <rect x="148" y="164" width="92" height="92" />
              <rect x="1532" y="206" width="74" height="74" />
              <rect x="1360" y="742" width="86" height="86" />
              <rect x="420" y="782" width="66" height="66" />
            </g>
            <g fill="#a78bfa" opacity="0.14">
              <circle cx="288" cy="210" r="2.5" />
              <circle cx="960" cy="540" r="3" />
              <circle cx="1620" cy="860" r="2.5" />
            </g>
          </svg>
        </div>

        <div className="contact-shell locked-content relative z-10 mx-auto grid h-full w-full max-w-6xl grid-cols-[minmax(0,0.9fr)_minmax(320px,380px)_minmax(0,0.9fr)] items-center gap-8 py-12">
          <div className="contact-text contact-copy scroll-parallax-text" data-speed="0.04" style={{ width: '100%', textAlign: 'left' }}>
            <h2
              className="text-reveal text-reveal-delay-2"
              style={{
                margin: 0,
                maxWidth: '760px',
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2.8rem, 6vw, 5.6rem)',
                lineHeight: 0.96,
                letterSpacing: '-0.05em',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#151226'
              }}
            >
              Let&apos;s talk
              <br />
              <span style={{ color: '#7c3aed' }}>about your project.</span>
            </h2>

            <p
              className="text-reveal text-reveal-fast text-reveal-delay-3"
              style={{
                margin: '1.5rem 0 0',
                maxWidth: '500px',
                fontSize: '15px',
                lineHeight: 1.85,
                color: 'rgba(21, 18, 38, 0.72)'
              }}
            >
              Junior Full-stack Engineer focused on building functional, high-performance web applications with modern technologies.
            </p>
          </div>

          <div className="contact-media relative flex w-full items-center justify-center">
            <div
              className="contact-media-card text-reveal text-reveal-fast text-reveal-delay-5"
              style={{
                width: '100%',
                padding: 0
              }}
            >
              <div
                id="contact-icon"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  backgroundColor: 'transparent'
                }}
              >
                <img
                  className="contact-image"
                  src={icon}
                  alt="Developer portrait"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="contact-grid scroll-parallax-text text-reveal text-reveal-fast text-reveal-delay-4"
            data-speed="0.025"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            <div className="hidden md:flex" style={{ width: '100%', maxWidth: '360px', flexDirection: 'column', gap: '0.85rem' }}>
              <div className="text-reveal text-reveal-fast text-reveal-delay-3" style={{ width: '100%', display: 'inline-flex', justifyContent: 'flex-end', gap: '0.5rem', alignItems: 'center', padding: '0 16px', boxSizing: 'border-box', color: 'rgba(21, 18, 38, 0.62)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <MapPin size={14} />
                <span>Leon City, Philippines</span>
              </div>
              <a
                className="contact-text"
                href="mailto:nieves.edriancit2011@email.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '14px 16px',
                  borderRadius: '16px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#151226',
                  textDecoration: 'none'
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <Mail size={18} /> Email
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(21, 18, 38, 0.62)' }}>nieves.edriancit2011@email.com</span>
              </a>

              <a
                className="contact-text"
                href="https://github.com/EN-rain"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '14px 16px',
                  borderRadius: '16px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#151226',
                  textDecoration: 'none'
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <Github size={18} /> GitHub
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(21, 18, 38, 0.62)' }}>@EN-rain</span>
              </a>

              <a
                className="contact-text"
                href="https://linkedin.com/in/en-rain"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '14px 16px',
                  borderRadius: '16px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#151226',
                  textDecoration: 'none'
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <Linkedin size={18} /> LinkedIn
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(21, 18, 38, 0.62)' }}>in/en-rain</span>
              </a>
            </div>

            <div className="md:hidden" style={{ justifyContent: 'center', alignItems: 'center', gap: '1.25rem', width: '100%' }}>
              <a
                className="contact-text"
                href="mailto:nieves.edriancit2011@email.com"
                aria-label="Email"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  border: '1px solid rgba(124, 58, 237, 0.18)',
                  backgroundColor: 'rgba(124, 58, 237, 0.06)',
                  color: '#151226',
                  textDecoration: 'none'
                }}
              >
                <Mail size={22} />
              </a>
              <a
                className="contact-text"
                href="https://github.com/EN-rain"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  border: '1px solid rgba(124, 58, 237, 0.18)',
                  backgroundColor: 'rgba(124, 58, 237, 0.06)',
                  color: '#151226',
                  textDecoration: 'none'
                }}
              >
                <Github size={22} />
              </a>
              <a
                className="contact-text"
                href="https://linkedin.com/in/en-rain"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  border: '1px solid rgba(124, 58, 237, 0.18)',
                  backgroundColor: 'rgba(124, 58, 237, 0.06)',
                  color: '#151226',
                  textDecoration: 'none'
                }}
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-shell {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding-top: 6rem !important;
            padding-bottom: 4rem !important;
            height: auto !important;
          }

          .contact-copy,
          .contact-grid > div {
            text-align: center !important;
          }

          .contact-copy p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        @media (max-width: 768px) {
          .contact-shell {
            display: flex !important;
            flex-direction: column !important;
            padding: 140px 24px 60px !important; 
            height: auto !important;
            min-height: 100vh !important;
            gap: 40px !important;
            justify-content: flex-start !important;
            align-items: center !important;
          }

          .contact-copy,
          .contact-media,
          .contact-grid {
            width: 100% !important;
            max-width: 440px !important;
            margin: 0 auto !important;
          }

          .contact-grid {
            gap: 0 !important;
            border-top: 1px solid rgba(124, 58, 237, 0.1) !important;
          }

          .contact-grid > div {
            padding: 1.25rem 0 !important;
            border-bottom: 1px solid rgba(124, 58, 237, 0.1) !important;
          }

          .contact-image {
            height: 240px !important;
          }

          .contact-copy h2 {
            font-size: 38px !important;
            line-height: 1 !important;
          }
        }

        @media (max-width: 480px) {
          .contact-shell {
            padding-top: 90px !important;
            gap: 35px !important;
          }

          .contact-copy h2 {
            font-size: 32px !important;
          }

          .contact-copy p {
            font-size: 14px !important;
            line-height: 1.6 !important;
            color: rgba(21, 18, 38, 0.6) !important;
          }

          .contact-image {
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

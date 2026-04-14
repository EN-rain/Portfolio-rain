import icon from '../../assets/images/icon.jpg';

export const ContactSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 125 }}>
      <div
        className="parallax-content relative flex flex-col items-center justify-center overflow-hidden px-6 text-white"
        style={{ backgroundColor: '#050308' }}
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
            <div
              className="tech-font text-reveal text-reveal-fast text-reveal-delay-1"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.9rem',
                marginBottom: '1rem',
                fontSize: '10px',
                letterSpacing: '0.34em',
                textTransform: 'uppercase',
                color: 'rgba(167, 139, 250, 0.82)'
              }}
            >
              <span style={{ width: '42px', height: '1px', backgroundColor: '#a78bfa', opacity: 0.85 }} />
              Contact
            </div>

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
                color: '#f5f3ff'
              }}
            >
              Let&apos;s build
              <br />
              <span style={{ color: '#a78bfa' }}>something useful.</span>
            </h2>

            <p
              className="text-reveal text-reveal-fast text-reveal-delay-3"
              style={{
                margin: '1rem 0 0',
                maxWidth: '500px',
                fontSize: '15px',
                lineHeight: 1.85,
                color: 'rgba(245, 243, 255, 0.72)'
              }}
            >
              Open to junior full-stack and associate engineering roles, especially teams working on product systems, AI tools, internal platforms, or automation-heavy workflows.
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
                className="tech-font contact-text"
                style={{
                  marginBottom: '0.5rem',
                  fontSize: '9px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(167, 139, 250, 0.8)'
                }}
              >
                Available for remote roles
              </div>

              <div
                id="contact-icon"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  border: '1px solid rgba(167, 139, 250, 0.16)',
                  backgroundColor: '#0a0712'
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

              <div
                className="contact-text"
                style={{
                  marginTop: '0.7rem',
                  padding: '0.1rem 0.2rem 0.2rem'
                }}
              >
                <div
                  style={{
                    color: '#f5f3ff',
                    fontSize: '16px',
                    lineHeight: 1.5,
                    fontWeight: 600
                  }}
                >
                  React, Node.js, TypeScript, APIs, automation, and product-focused implementation.
                </div>
              </div>
            </div>
          </div>

          <div
            className="contact-grid scroll-parallax-text text-reveal text-reveal-fast text-reveal-delay-4"
            data-speed="0.025"
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem'
            }}
          >
            {[
              { label: 'Email', value: 'alex.rivera@email.com', href: 'mailto:alex.rivera@email.com' },
              { label: 'GitHub', value: 'github.com/alexrivera', href: 'https://github.com/alexrivera' },
              { label: 'LinkedIn', value: 'linkedin.com/in/alexrivera', href: 'https://linkedin.com/in/alexrivera' },
              { label: 'Location', value: 'Metro Manila, PH', href: undefined }
            ].map((item) => (
              <div
                key={item.label}
                className="contact-text"
                style={{
                  borderBottom: '1px solid rgba(167, 139, 250, 0.14)',
                  padding: '0.85rem 0',
                  textAlign: 'left'
                }}
              >
                <div
                  className="tech-font"
                  style={{
                    marginBottom: '0.45rem',
                    fontSize: '9px',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: 'rgba(167, 139, 250, 0.8)'
                  }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    style={{
                      color: '#f5f3ff',
                      textDecoration: 'none',
                      fontSize: '15px',
                      lineHeight: 1.55,
                      wordBreak: 'break-word'
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <div style={{ color: '#f5f3ff', fontSize: '15px', lineHeight: 1.55 }}>{item.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-shell {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding-top: 4.75rem !important;
            padding-bottom: 1rem !important;
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
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }

          .contact-media-card {
            width: 100% !important;
          }

          .contact-image {
            height: 220px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-shell {
            gap: 0.7rem !important;
            padding-top: 4.5rem !important;
            padding-bottom: 0.75rem !important;
          }

          .contact-copy h2 {
            font-size: 2rem !important;
            line-height: 1 !important;
          }

          .contact-copy p {
            margin-top: 0.8rem !important;
            font-size: 12px !important;
            line-height: 1.5 !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
          }

          .contact-grid > div {
            padding: 0.8rem 0 !important;
          }

          .contact-grid a,
          .contact-grid div:not(.tech-font) {
            font-size: 13px !important;
            line-height: 1.4 !important;
          }

          .contact-image {
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  );
};

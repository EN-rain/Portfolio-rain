export const HomeSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 10, transform: 'translate3d(0, 0, 0)' }}>
      <div
        className="parallax-content overflow-hidden"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050308'
        }}
      >
        <div className="parallax-layer" data-speed="0.08" style={{ zIndex: 1 }}>
          <div className="parallax-slide-in layer-1" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <rect width="100%" height="100%" fill="#050308" />
            </svg>
          </div>
        </div>

        <div className="parallax-layer" data-speed="0.18" style={{ zIndex: 2 }}>
          <div className="parallax-slide-in layer-2" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <g stroke="#f5f3ff" strokeWidth="1" fill="none" opacity="0.13">
                <path d="M4 1000V565h62v-98h84v164h74V522h116v122h52V470h96v204h70V598h74v402" />
                <path d="M580 1000V612h88v-120h96v164h56V548h120v140h72V460h94v540" />
                <path d="M1130 1000V580h82V468h88v176h70V522h124v150h58V566h82v434" />
                <path d="M1540 1000V634h92V500h108v148h54V546h88v454" />
                <path d="M66 467h84M668 492h96M1212 523h124M1640 546h88" />
                <path d="M108 467V430M716 492V450M1274 523V486M1684 546V510" />
                <path d="M246 522h94M910 548h102M1496 546h66" />
              </g>
              <g stroke="#a78bfa" strokeWidth="1.2" fill="none" opacity="0.22">
                <path d="M82 1000V720h38m18 0h40m40 0h56m44 0h52m54 0h38" />
                <path d="M622 1000V760h40m18 0h48m30 0h42m50 0h66m36 0h40" />
                <path d="M1184 1000V742h44m26 0h40m34 0h50m42 0h66m34 0h46" />
                <path d="M150 688h48M238 688h46M694 726h52M788 726h40M1280 710h58M1380 710h62" />
                <path d="M1522 772h46M1594 772h38M1670 772h44" />
              </g>
              <g fill="#ffffff" opacity="0.16">
                <rect x="101" y="606" width="7" height="7" />
                <rect x="131" y="606" width="7" height="7" />
                <rect x="252" y="650" width="7" height="7" />
                <rect x="711" y="530" width="7" height="7" />
                <rect x="748" y="530" width="7" height="7" />
                <rect x="1364" y="508" width="7" height="7" />
                <rect x="1714" y="542" width="7" height="7" />
                <rect x="176" y="738" width="6" height="6" />
                <rect x="206" y="738" width="6" height="6" />
                <rect x="730" y="780" width="6" height="6" />
                <rect x="760" y="780" width="6" height="6" />
                <rect x="1308" y="762" width="6" height="6" />
                <rect x="1336" y="762" width="6" height="6" />
              </g>
            </svg>
          </div>
        </div>

        <div className="parallax-layer" data-speed="0.34" style={{ zIndex: 3 }}>
          <div className="parallax-slide-in layer-3" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <g stroke="#c4b5fd" strokeWidth="1.4" fill="none" opacity="0.34">
                <path d="M0 865h1920" />
                <path d="M130 865V420h158v445" />
                <path d="M190 420v-66h44v66" />
                <path d="M410 865V510h136v355" />
                <path d="M576 865V376h176v489" />
                <path d="M652 376v-74h34v74" />
                <path d="M846 865V448h164v417" />
                <path d="M1078 865V540h118v325" />
                <path d="M1248 865V394h178v471" />
                <path d="M1498 865V472h154v393" />
                <path d="M1712 865V322h118v543" />
                <path d="M478 510v-38h22v38M888 448v-44h20v44M1562 472v-34h26v34" />
                <path d="M130 456h158M576 414h176M1248 430h178M1712 362h118" />
              </g>
              <g stroke="#ffffff" strokeWidth="1" opacity="0.22">
                <path d="M152 470h112M152 526h112M152 582h112M152 638h112" />
                <path d="M438 562h84M438 618h84M438 674h84" />
                <path d="M606 428h116M606 492h116M606 556h116M606 620h116" />
                <path d="M872 500h112M872 562h112M872 624h112" />
                <path d="M1278 442h112M1278 506h112M1278 570h112M1278 634h112" />
                <path d="M1740 388h62M1740 448h62M1740 508h62M1740 568h62" />
                <path d="M438 730h84M872 692h112M1278 700h112" />
                <path d="M192 470v168M648 428v192M920 500v156M1334 442v192" />
              </g>
              <g fill="#f5f3ff" opacity="0.14">
                <rect x="452" y="530" width="5" height="5" />
                <rect x="470" y="530" width="5" height="5" />
                <rect x="888" y="468" width="5" height="5" />
                <rect x="906" y="468" width="5" height="5" />
                <rect x="1302" y="474" width="5" height="5" />
                <rect x="1320" y="474" width="5" height="5" />
              </g>
            </svg>
          </div>
        </div>

        <div className="parallax-layer" data-speed="0.5" style={{ zIndex: 4 }}>
          <div className="parallax-slide-in layer-4" style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 900C236 872 412 942 688 906C974 868 1140 840 1428 886C1648 920 1788 890 1920 904" stroke="#5b2fb6" strokeWidth="1.2" opacity="0.35" fill="none" />
            </svg>
          </div>
        </div>

        <div
          className="home-shell"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 5,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(320px, 0.8fr)',
            alignItems: 'center',
            gap: '2rem',
            padding: 'clamp(2rem, 4vw, 4rem)'
          }}
        >
          <div
            className="parallax-slide-in layer-1 home-copy"
            style={{
              maxWidth: '920px',
              color: '#f5f3ff',
              justifySelf: 'center',
              alignSelf: 'center'
            }}
          >
            <div
              className="tech-font home-kicker text-reveal text-reveal-fast text-reveal-delay-1"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.9rem',
                marginBottom: '1.2rem',
                fontSize: '10px',
                letterSpacing: '0.36em',
                textTransform: 'uppercase',
                color: 'rgba(196, 181, 253, 0.92)'
              }}
            >
              <span style={{ width: '42px', height: '1px', backgroundColor: '#a78bfa', opacity: 0.85 }} />
              Full-Stack Developer
            </div>

            <h1
              className="home-title text-reveal text-reveal-delay-2"
              style={{
                margin: 0,
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(3.6rem, 9vw, 8rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.05em',
                fontWeight: 800,
                textTransform: 'uppercase',
                maxWidth: '980px'
              }}
            >
              Building digital
              <br />
              <span style={{ color: '#a78bfa' }}>systems</span> that feel
              <br />
              sharp, fast, and real.
            </h1>

            <div
              className="parallax-slide-in layer-2 home-summary text-reveal text-reveal-fast text-reveal-delay-3"
              style={{
                marginTop: '1.4rem',
                maxWidth: '720px',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: 1.75,
                color: 'rgba(245, 243, 255, 0.74)'
              }}
            >
              AI tools, web apps, automation workflows, and product-focused engineering for teams that need clean execution instead of noise.
            </div>

            <div
              className="parallax-slide-in layer-3 home-chip-row text-reveal text-reveal-fast text-reveal-delay-4"
              style={{
                marginTop: '2rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              {['React', 'Node.js', 'TypeScript', 'Automation', 'APIs', 'PostgreSQL'].map((item) => (
                <span
                  key={item}
                  className="tech-font"
                  style={{
                    padding: '0.72rem 1rem',
                    border: '1px solid rgba(167, 139, 250, 0.24)',
                    backgroundColor: 'rgba(12, 8, 20, 0.86)',
                    color: '#f5f3ff',
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    borderRadius: '12px'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .home-shell {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            padding: 5.5rem 1.25rem 2rem !important;
            align-items: end !important;
          }

          .home-copy {
            max-width: 100% !important;
          }
        }

        @media (max-width: 640px) {
          .home-kicker {
            margin-bottom: 1rem !important;
            gap: 0.7rem !important;
            letter-spacing: 0.28em !important;
          }

          .home-title {
            max-width: 100% !important;
            font-size: clamp(2.55rem, 14vw, 4rem) !important;
            line-height: 0.98 !important;
          }

          .home-summary {
            margin-top: 1rem !important;
            max-width: 100% !important;
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
          }

          .home-chip-row {
            margin-top: 1.5rem !important;
            gap: 0.55rem !important;
          }

          .home-chip-row > span {
            padding: 0.6rem 0.8rem !important;
            font-size: 9px !important;
            letter-spacing: 0.16em !important;
            border-radius: 10px !important;
          }
        }

        @media (max-width: 420px) {
          .home-shell {
            padding: 4.5rem 1rem 1.25rem !important;
            align-items: center !important;
          }

          .home-kicker {
            font-size: 9px !important;
            margin-bottom: 0.85rem !important;
          }

          .home-title {
            font-size: clamp(2.2rem, 13vw, 3rem) !important;
          }

          .home-summary {
            margin-top: 0.8rem !important;
            font-size: 0.9rem !important;
            line-height: 1.65 !important;
          }

          .home-chip-row {
            margin-top: 1.1rem !important;
          }

          .home-chip-row > span:nth-child(n+5) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

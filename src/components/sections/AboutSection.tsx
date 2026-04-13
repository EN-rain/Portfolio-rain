export const AboutSection = () => {
  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner flex flex-col items-center justify-center pb-12">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          <div className="about-section__en-wrap locked-content">
            <div className="about-section__en-text">
              <span className="about-section__e">E</span>
              <span className="about-section__n">N</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section__en-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          transform-origin: center center;
        }

      .about-section__en-text {
        position: absolute;
        top: 46%;
        left: 49.2%;
        z-index: 0;
        font-family: 'Sora', sans-serif;
        font-size: clamp(400px, 150vw, 600px);
        font-weight: 700;
        letter-spacing: 0;
        line-height: 0.82;
        color: #000000;
        transform: translate(-50%, -50%);
        pointer-events: none;
        user-select: none;
        white-space: nowrap;
        will-change: transform;
        display: block;
      }

      .about-section__e {
        position: absolute;
        left: 50%;
        will-change: transform;
      }

      .about-section__n {
        position: absolute;
        left: 50%;
        will-change: transform;
      }

        @media (min-width: 1025px) {
          .about-shell {
            gap: 2.5rem !important;
            padding-top: 7.25rem !important;
            padding-bottom: 5.5rem !important;
            transform-origin: center center;
          }

          .about-core {
            align-items: center !important;
          }

          .about-summary {
            margin-bottom: 1.5rem !important;
            max-width: 34rem !important;
          }

          .about-tag-list {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        @media (max-width: 1024px) {
          .about-shell {
            gap: 1.5rem !important;
            padding-top: 4.25rem !important;
          }

          .about-core {
            flex-direction: column !important;
            align-items: center !important;
          }

          .about-copy {
            align-items: center;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .about-shell {
            gap: 1.1rem !important;
            padding: 5.5rem 1.25rem 4.75rem !important;
          }

          .about-tag-list {
            grid-template-columns: repeat(2, 1fr) !important;
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
        }
      `}</style>
    </section>
  );
};

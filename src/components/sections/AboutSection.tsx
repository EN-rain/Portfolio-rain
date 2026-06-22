import { useEffect, useRef } from 'react';
import heroImage from '../../assets/images/hero1.2.png';
import { useMobileReveal } from '../../hooks/useMobileReveal';

// Canva bg layers — each is 1920×1080 transparent PNG with the element at its exact canvas position
import bgL01 from '../../assets/images/bg_cropped/layer_01_Freeform_2.webp';
import bgL02 from '../../assets/images/bg_cropped/layer_02_Freeform_3.webp';
import bgL03 from '../../assets/images/bg_cropped/layer_03_Freeform_4.webp';
import bgL04 from '../../assets/images/bg_cropped/layer_04_Freeform_5.webp';
import bgL05 from '../../assets/images/bg_cropped/layer_05_Freeform_6.webp';
import bgL06 from '../../assets/images/bg_cropped/layer_06_Freeform_7.webp';
import bgL07 from '../../assets/images/bg_cropped/layer_07_Freeform_8.webp';
import bgL08 from '../../assets/images/bg_cropped/layer_08_Freeform_9.webp';
import bgL09 from '../../assets/images/bg_cropped/layer_09_Freeform_10.webp';
import bgL10 from '../../assets/images/bg_cropped/layer_10_Freeform_11.webp';
import bgL11 from '../../assets/images/bg_cropped/layer_11_Freeform_12.webp';
import bgL12 from '../../assets/images/bg_cropped/layer_12_Freeform_13.webp';
import bgL13 from '../../assets/images/bg_cropped/layer_13_Freeform_14.webp';
import bgL14 from '../../assets/images/bg_cropped/layer_14_Freeform_15.webp';
import bgL15 from '../../assets/images/bg_cropped/layer_15_Freeform_16.webp';
import bgL16 from '../../assets/images/bg_cropped/layer_16_Freeform_17.webp';
import bgL17 from '../../assets/images/bg_cropped/layer_17_Freeform_18.webp';
import bgL18 from '../../assets/images/bg_cropped/layer_18_Freeform_19.webp';
import bgL19 from '../../assets/images/bg_cropped/layer_19_Freeform_20.webp';
import bgL20 from '../../assets/images/bg_cropped/layer_20_Freeform_21.webp';
import bgL21 from '../../assets/images/bg_cropped/layer_21_Freeform_22.webp';
import bgL22 from '../../assets/images/bg_cropped/layer_22_Freeform_23.webp';
import bgL23 from '../../assets/images/bg_cropped/layer_23_Freeform_24.webp';

// Each layer: { src, speedY, speedX }
// Layers 1-4 are large background shapes → slow (far away)
// Layers 5-9 are mid shapes → medium
// Layers 10-23 are small decorative elements → fast (close)
const BG_LAYERS = [
  { src: bgL01, speedY: 0.04, speedX: -0.01, css: { left: '0.0521%', top: '0.0000%', width: '55.9375%', height: '45.9259%' } },
  { src: bgL02, speedY: 0.06, speedX: 0.02, css: { left: '0.0521%', top: '0.0000%', width: '27.3958%', height: '43.7963%' } },
  { src: bgL03, speedY: 0.05, speedX: -0.02, css: { left: '0.0521%', top: '54.0741%', width: '17.8646%', height: '45.9259%' } },
  { src: bgL04, speedY: 0.1, speedX: -0.04, css: { left: '0.0521%', top: '54.0741%', width: '40.4688%', height: '45.9259%' } },
  { src: bgL05, speedY: 0.12, speedX: 0.05, css: { left: '28.5417%', top: '70.7407%', width: '15.5208%', height: '29.2593%' } },
  { src: bgL06, speedY: 0.09, speedX: -0.03, css: { left: '44.0104%', top: '70.7407%', width: '20.2604%', height: '29.2593%' } },
  { src: bgL07, speedY: 0.08, speedX: 0.02, css: { left: '67.8125%', top: '0.0000%', width: '32.1354%', height: '22.9630%' } },
  { src: bgL08, speedY: 0.15, speedX: -0.05, css: { left: '80.0000%', top: '45.8333%', width: '45.0000%', height: '75.0000%' } },
  { src: bgL09, speedY: 0.11, speedX: 0.04, css: { left: '13.0729%', top: '33.2407%', width: '86.9271%', height: '66.7593%' } },
  { src: bgL10, speedY: 0.06, speedX: -0.01, css: { left: '1.1458%', top: '37.4074%', width: '7.2396%', height: '6.3889%' } },
  { src: bgL11, speedY: 0.07, speedX: 0.02, css: { left: '2.3438%', top: '45.8333%', width: '2.4479%', height: '4.2593%' } },
  { src: bgL12, speedY: 0.08, speedX: -0.03, css: { left: '7.1354%', top: '47.7778%', width: '2.4479%', height: '4.3519%' } },
  { src: bgL13, speedY: 0.05, speedX: 0.01, css: { left: '17.8646%', top: '22.8704%', width: '2.4479%', height: '2.2222%' } },
  { src: bgL14, speedY: 0.09, speedX: -0.02, css: { left: '21.4063%', top: '60.3704%', width: '2.4479%', height: '4.2593%' } },
  { src: bgL15, speedY: 0.13, speedX: 0.04, css: { left: '23.8021%', top: '79.0741%', width: '1.1979%', height: '2.2222%' } },
  { src: bgL16, speedY: 0.1, speedX: -0.03, css: { left: '33.3333%', top: '85.3704%', width: '8.3854%', height: '6.3889%' } },
  { src: bgL17, speedY: 0.06, speedX: 0.01, css: { left: '48.8021%', top: '62.5000%', width: '2.3958%', height: '4.2593%' } },
  { src: bgL18, speedY: 0.07, speedX: -0.02, css: { left: '82.0833%', top: '16.5741%', width: '3.6458%', height: '8.5185%' } },
  { src: bgL19, speedY: 0.08, speedX: 0.03, css: { left: '89.2188%', top: '10.3704%', width: '9.6354%', height: '8.4259%' } },
  { src: bgL20, speedY: 0.11, speedX: -0.04, css: { left: '86.8750%', top: '64.5370%', width: '2.3958%', height: '4.2593%' } },
  { src: bgL21, speedY: 0.09, speedX: 0.02, css: { left: '86.8750%', top: '43.7037%', width: '2.3958%', height: '4.2593%' } },
  { src: bgL22, speedY: 0.12, speedX: -0.05, css: { left: '90.4167%', top: '37.4074%', width: '2.4479%', height: '4.3519%' } },
  { src: bgL23, speedY: 0.1, speedX: 0.01, css: { left: '90.4167%', top: '70.7407%', width: '8.4375%', height: '8.4259%' } },
];

export const AboutSection = () => {
  const revealRef = useMobileReveal<HTMLElement>();
  // The 23 Canva background layers will be driven purely by the scroll system now.
  const desktopSkillGroups = [
    {
      label: 'Frontend & Mobile',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Blade', 'Java', 'Flutter', 'Dart'],
    },
    {
      label: 'Backend & Databases',
      skills: ['Laravel', 'PHP', 'Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Prisma', 'Socket.IO', 'PostgreSQL', 'Supabase', 'Firebase', 'Redis'],
    },
    {
      label: 'Tools & Deployment',
      skills: ['Git', 'GitHub', 'Docker', 'Apache', 'Render', 'Vercel', 'Cloudinary', 'Sanctum', 'JWT', 'RBAC', '2FA'],
    },
  ];

  const techStackSkills = desktopSkillGroups.flatMap(group => group.skills);

  return (
    <section ref={revealRef} id="about" className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner">
          <div className="absolute inset-0" style={{ backgroundColor: '#f7f7fc' }}></div>

          {/* ── Canva background layers ──
               Wrapper: bg-image → gets scroll counter-transform (stays screen-fixed)
               Inner img: about-bg-layer → gets scroll parallax depth ── */}
          <div className="about-bg-parallax" aria-hidden="true">
            {BG_LAYERS.map((layer, i) => (
              <div key={i} className="about-bg-wrap bg-image mobile-hide">
                <img
                  src={layer.src}
                  alt=""
                  className="about-bg-layer"
                  style={{
                    left: layer.css.left,
                    top: layer.css.top,
                    width: layer.css.width,
                    height: layer.css.height,
                  }}
                  data-speed={layer.speedY}
                  data-speed-x={layer.speedX}
                  draggable={false}
                />
              </div>
            ))}
          </div>

          <div className="about-shell locked-content">
            <div className="about-image-container relative">
              <div data-about-fade data-about-fade-order="0" data-about-fade-dir="left" className="about-image-wrap about-scroll-fade">
                <img src={heroImage} alt="Profile" className="about-image" />
              </div>

              <div data-about-fade data-about-fade-order="10" data-about-fade-dir="bottom" className="about-skills-box about-skills-box--desktop about-scroll-fade">
                {desktopSkillGroups.map(group => (
                  <div key={group.label} className="about-skill-group">
                    <div className="about-skill-group-title">{group.label}</div>
                    <div className="about-skill-group-list">
                      {group.skills.map(s => (
                        <span key={s} className="about-skill-tag">{s}</span>
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
                <p data-about-fade data-about-fade-order="6" data-about-fade-dir="bottom" className="about-text about-scroll-fade">
                  I’m a Full-Stack Developer based in Leon City, Philippines. My development journey started with curiosity about how digital products work, then grew into a focus on building useful tools that solve real problems.
                </p>
                <p data-about-fade data-about-fade-order="8" data-about-fade-dir="bottom" className="about-text about-scroll-fade">
                  I’ve worked across web applications, dashboards, automation, APIs, and mobile experiences. Each project has helped me improve how I turn ideas into clear, reliable products, from planning the user experience to building and refining the final result.
                </p>
              </div>

              <div className="about-skills-box about-skills-box--mobile">
                <div className="about-sr-only">Tech stack: {techStackSkills.join(', ')}</div>

                <div className="about-tech-marquee" aria-hidden="true">
                  <div className="about-tech-row about-tech-row--right">
                    <div className="about-tech-track">
                      <div className="about-tech-set">
                        {techStackSkills.map(s => (
                          <span key={`r-a-${s}`} className="about-skill-tag">{s}</span>
                        ))}
                      </div>

                      <div className="about-tech-set" aria-hidden="true">
                        {techStackSkills.map(s => (
                          <span key={`r-b-${s}`} className="about-skill-tag">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="about-tech-row about-tech-row--left">
                    <div className="about-tech-track">
                      <div className="about-tech-set">
                        {techStackSkills.map(s => (
                          <span key={`l-a-${s}`} className="about-skill-tag">{s}</span>
                        ))}
                      </div>

                      <div className="about-tech-set" aria-hidden="true">
                        {techStackSkills.map(s => (
                          <span key={`l-b-${s}`} className="about-skill-tag">{s}</span>
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
        /* ── About bg layers ── */
        .about-bg-parallax {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* Wrapper: scroll system writes bg-image counter-transform here — keeps it screen-fixed */
        .about-bg-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Img: JS writes scroll parallax transform here */
        .about-bg-layer {
          position: absolute;
          object-fit: cover;
          object-position: center;
          will-change: transform;
          /* Removed opacity: 0.92 to prevent expensive GPU off-screen buffer blending */
          backface-visibility: hidden;
          user-select: none;
          transform: translate3d(0, 0, 0);
        }

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
          display: grid;
          grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1.22fr);
          grid-template-rows: auto auto;
          grid-template-areas:
            "image content"
            "skills skills";
          align-content: center;
          align-items: center;
          column-gap: clamp(2.5rem, 5vw, 6rem);
          row-gap: clamp(1rem, 2vh, 1.75rem);
          width: 100%;
          height: 100%;
          min-height: 0;
          padding: clamp(5.25rem, 8vh, 6.5rem) clamp(3rem, 5vw, 6rem) clamp(1.5rem, 3vh, 2.5rem);
          z-index: 1;
        }

        .about-image-container {
          display: contents;
        }

        .about-image-wrap {
          grid-area: image;
          position: relative;
          justify-self: center;
          width: min(430px, 100%);
          max-height: 54vh;
          aspect-ratio: 1 / 1;
          overflow: visible;
          opacity: 0;
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }

        .about-content {
          grid-area: content;
          align-self: center;
          max-width: 700px;
          min-width: 0;
          padding: 0;
        }

        .about-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.2rem, 1.8vw, 1.8rem);
          font-weight: 700;
          color: #11081a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0;
          margin: 0;
        }

        .about-name {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.5rem, 4vw, 4.5rem);
          font-weight: 600;
          color: #000000;
          margin-left: -0.2rem;
          line-height: 1.1;
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
          font-size: 1.5em;
          display: inline-block;
          line-height: 0.8;
          opacity: 0;
          pointer-events: none;
          user-select: none;
        }

        .about-text-wrapper {
          max-width: 680px;
        }

        .about-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(0.92rem, 1vw, 1.02rem);
          line-height: 1.6;
          color: #4a4a5a;
          margin-top: 1.5rem;
          margin-bottom: 0;
          opacity: 0;
        }
        
        .about-scroll-fade {
          opacity: 0;
          animation: none !important;
          will-change: opacity, transform;
        }

        .about-skills-box {
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          align-content: center;
          opacity: 0;
        }

        .about-skills-box.about-skills-box--desktop {
          grid-area: skills;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          margin-top: 0;
          width: 100%;
          padding: 0.85rem 0 0;
          border-top: 1px solid rgba(17, 8, 26, 0.14);
          box-sizing: border-box;
        }

        .about-skills-box.about-skills-box--mobile {
          display: none;
        }

        .about-skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0;
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
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.55rem;
          min-width: 0;
          padding: 0 1.25rem;
          border-right: 1px solid rgba(17, 8, 26, 0.1);
        }

        .about-skill-group:first-child { padding-left: 0; }
        .about-skill-group:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .about-skill-group-title {
          font-family: 'Sora', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          line-height: 1.25;
          color: #11081a;
          white-space: nowrap;
        }

        .about-skill-group-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 0.4rem 0.75rem;
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
            display: flex !important;
            flex-direction: column !important;
            padding: 80px 20px 60px !important;
            height: auto !important;
            min-height: 100vh !important;
            gap: 40px !important;
            align-items: center !important;
            text-align: center !important;
          }

          .about-image-container {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
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

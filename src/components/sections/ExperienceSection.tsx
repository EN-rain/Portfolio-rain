import { useEffect, useMemo, useState } from 'react';

const experiences = [
  {
    year: '2024 - PRESENT',
    role: 'SENIOR ENGINEER',
    company: 'VOID TECHNOLOGIES',
    description:
      'Architecting immersive web experiences, leading frontend systems, and shipping scalable micro-frontend platforms.',
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    panel: 'PANEL 01',
  },
  {
    year: '2021 - 2024',
    role: 'UI/UX DEVELOPER',
    company: 'NEXUS DYNAMICS',
    description:
      'Drove design system migration and interaction quality, connecting visual direction with production-ready code.',
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
    panel: 'PANEL 02',
  },
  {
    year: '2019 - 2021',
    role: 'FRONTEND INTERN',
    company: 'QUANTUM LABS',
    description:
      'Built and maintained reusable React modules used across dozens of client-facing product and marketing pages.',
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2400&auto=format&fit=crop",
    panel: 'PANEL 03',
  },
  {
    year: '2018 - 2019',
    role: 'WEB CREATIVE',
    company: 'FREELANCE STUDIO',
    description:
      'Delivered rapid concept websites and interactive showcases with a focus on storytelling, motion, and performance.',
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2400&auto=format&fit=crop",
    panel: 'PANEL 04',
  },
];

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const easeInOutCubic = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const handleExperienceProgress = (event: Event) => {
      const customEvent = event as CustomEvent<{ activeIndex?: number; progress?: number }>;
      const nextIndex = customEvent.detail?.activeIndex;
      if (typeof nextIndex === 'number') {
        setActiveIndex(Math.max(0, Math.min(experiences.length - 1, nextIndex)));
      }
      setSectionProgress(clamp01(customEvent.detail?.progress ?? 0));
    };

    window.addEventListener('experience-progress', handleExperienceProgress as EventListener);
    return () =>
      window.removeEventListener('experience-progress', handleExperienceProgress as EventListener);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  const activeExperience = experiences[activeIndex];
  const previewPanels = useMemo(() => {
    const nextStart = (activeIndex + 1) % experiences.length;
    const ordered = experiences
      .map((_, index) => index)
      .filter((index) => index !== activeIndex)
      .sort((a, b) => {
        const distanceA = (a - nextStart + experiences.length) % experiences.length;
        const distanceB = (b - nextStart + experiences.length) % experiences.length;
        return distanceA - distanceB;
      });

    return ordered.slice(0, 3).map((index) => ({ ...experiences[index], index }));
  }, [activeIndex]);

  const firstInactive = previewPanels[0] ?? null;
  const progressIndex = sectionProgress * (experiences.length - 1);
  const localProgress = progressIndex - Math.floor(progressIndex);
  const zoomProgress = reducedMotion ? 0 : easeInOutCubic(clamp01((localProgress - 0.12) / 0.78));
  const zoomScale = 0.2 + (zoomProgress * 0.8);
  const zoomOpacity = zoomProgress * 0.95;

  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 40 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner relative overflow-hidden">
          <div
            className="bg-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2400&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-[#050816]/78"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(162,120,255,0.27),transparent_42%),radial-gradient(circle_at_78%_78%,rgba(66,177,255,0.2),transparent_44%)]"></div>
          <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#8e6bff]/20 blur-[120px]"></div>
          <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[#43b8ff]/18 blur-[130px]"></div>

          <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${firstInactive?.image ?? activeExperience.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transformOrigin: 'bottom right',
                transform: `scale(${zoomScale})`,
                opacity: zoomOpacity,
                transition: reducedMotion ? 'none' : 'opacity 160ms linear',
              }}
            ></div>
            <div className="absolute inset-0 bg-[#040612]/54"></div>
          </div>

          <div className="relative z-10 h-full w-full px-5 pb-9 pt-14 text-white md:px-10 lg:px-14 locked-content">
            <div className="mx-auto relative h-full max-w-[1820px] p-5 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="tech-font text-[11px] tracking-[0.32em] text-[#cfb9ff]">
                  /// EXPERIENCE SHOWCASE
                </p>
                <div className="hidden items-center gap-2 md:flex">
                  {experiences.map((item, index) => (
                    <button
                      key={item.panel}
                      type="button"
                      className={`h-2.5 w-7 rounded-full border transition-all duration-300 ${
                        index === activeIndex
                          ? 'border-[#d9c8ff] bg-[#c6a8ff]'
                          : 'border-white/30 bg-white/10 hover:border-white/60'
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Switch to ${item.role}`}
                    />
                  ))}
                </div>
              </div>

              <article key={activeExperience.panel} className="experience-active-panel mt-7 max-w-[920px] text-left">
                <div className="flex items-center justify-between gap-4">
                  <p className="tech-font text-[11px] tracking-[0.28em] text-[#cfb5ff]">
                    {activeExperience.year}
                  </p>
                  <div className="tech-font rounded-full border border-[#b388eb]/55 bg-[#111633]/80 px-4 py-2 text-[10px] tracking-[0.26em] text-[#ddc8ff]">
                    {activeExperience.panel}
                  </div>
                </div>

                <h3 className="heading-font mt-7 text-3xl leading-[0.95] text-white drop-shadow-[0_0_24px_rgba(0,0,0,0.45)] md:text-[54px]">
                  {activeExperience.role}
                </h3>
                <p className="tech-font mt-4 text-xs uppercase tracking-[0.22em] text-white/50">
                  {activeExperience.company}
                </p>
                <p className="mt-7 max-w-[760px] text-base leading-relaxed text-white/88 md:text-[21px] md:leading-[1.42]">
                  {activeExperience.description}
                </p>
                <div className="mt-7 h-[2px] w-[260px] bg-gradient-to-r from-[#b388eb] via-[#e6dbff] to-transparent"></div>
              </article>

              <div className="absolute bottom-5 left-5 right-5 flex justify-end gap-3 md:bottom-8 md:left-auto md:right-8 md:gap-4">
                {previewPanels.map((item, idx) => (
                  <button
                    key={item.role}
                    type="button"
                    className="experience-preview-panel group h-[102px] w-[126px] cursor-pointer rounded-[3px] border-[2px] border-white/80 bg-[#121830]/82 p-3 text-left backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#d4beff] hover:shadow-[0_0_22px_rgba(179,136,235,0.35)] md:h-[124px] md:w-[176px]"
                    style={{
                      animationDelay: `${idx * 90}ms`,
                      transform: idx === 0 ? `scale(${1 + (zoomProgress * 0.06)})` : 'scale(1)',
                    }}
                    onClick={() => setActiveIndex(item.index)}
                    aria-label={`Show ${item.role}`}
                  >
                    <p className="tech-font text-[9px] tracking-[0.2em] text-[#d2beff]">{item.panel}</p>
                    <h4 className="heading-font mt-2 text-[13px] leading-tight md:text-[15px]">
                      {item.role}
                    </h4>
                    <p className="tech-font mt-1 text-[8px] tracking-[0.18em] text-white/50">
                      CLICK
                    </p>
                    <div className="mt-2 h-px w-full bg-white/30 transition-colors duration-300 group-hover:bg-[#e4d7ff]"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes experienceActivePanelIn {
          0% {
            opacity: 0;
            transform: translate3d(-56px, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes experiencePreviewPanelIn {
          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .experience-active-panel {
          animation: experienceActivePanelIn 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .experience-preview-panel {
          animation: experiencePreviewPanelIn 460ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-active-panel,
          .experience-preview-panel {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

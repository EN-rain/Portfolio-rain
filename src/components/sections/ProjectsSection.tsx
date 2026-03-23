import { useRef, useCallback, useEffect, useState, memo, type CSSProperties, type MouseEvent } from 'react';
import imgNeon from '../../assets/images/projects/optimized/desktop_workspace.jpg';
import imgSignal from '../../assets/images/projects/optimized/electronic_office_dualscreen.jpg';
import imgAtlas from '../../assets/images/projects/optimized/minimalist_monitors.jpg';
import imgAR from '../../assets/images/projects/optimized/augmented_reality_headset.jpg';

const projects = [
  { id: '01', title: 'TSUKIAI', line2: 'VOICE COMPANION', des: 'Desktop AI assistant with WPF and C# orchestration, local and remote LLM routing, and a real-time voice pipeline tuned for sub-100ms response.', img: imgNeon, stack: ['WPF', 'C#', 'Node.js', 'Python'] },
  { id: '02', title: 'DISCORD', line2: 'VOICE BRIDGE', des: 'Concurrent Discord voice bridge with per-user state management, audio segmentation, voice activity detection, and live session handling.', img: imgSignal, stack: ['Node.js', 'Discord', 'Audio', 'VAD'] },
  { id: '03', title: 'CHEMQUEST2', line2: 'MOBILE GAME', des: 'Scene-driven educational chemistry RPG covering quest systems, save and load flows, scene transitions, NPC dialogue, and modular JSON-driven lesson content.', img: imgAtlas, stack: ['Godot', 'GDScript', 'Mobile', 'JSON'] },
  { id: '04', title: 'SEMANTIC', line2: 'MEMORY HELPER', des: 'Python memory helper for better context retention inside TsukiAI, supporting daily chatmate features and longer-running conversational state.', img: imgAR, stack: ['Python', 'Memory', 'AI', 'Context'] },
];

const pcAnimationDurationMs = 760;

type TransitionRect = {
  height: number;
  left: number;
  radius: number;
  stageHeight: number;
  stageWidth: number;
  top: number;
  width: number;
};

type TransitionState = {
  rect: TransitionRect;
  src: string;
  targetIndex: number;
  type: 'next' | 'prev' | 'thumb';
};

const getWrappedIndex = (index: number) => (index + projects.length) % projects.length;

export const ProjectsSection = memo(() => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState<TransitionState | null>(null);

  const currentProject = projects[activeIndex];
  const visualActiveIndex = transition ? transition.targetIndex : activeIndex;
  const backgroundProject = transition
    ? projects[transition.targetIndex]
    : currentProject;
  const contentProject = currentProject;

  const thumbnailProjects = projects.map((_, offset) => {
    const projectIndex = getWrappedIndex(visualActiveIndex + offset + 1);
    return {
      index: projectIndex,
      project: projects[projectIndex],
    };
  });

  const getThumbRect = useCallback((button: HTMLButtonElement) => {
    const carousel = carouselRef.current;
    if (!carousel) return null;

    const carouselRect = carousel.getBoundingClientRect();
    const thumbRect = button.getBoundingClientRect();
    const radius = Number.parseFloat(window.getComputedStyle(button).borderRadius) || 20;

    return {
      height: thumbRect.height,
      left: thumbRect.left - carouselRect.left,
      radius,
      stageHeight: carouselRect.height,
      stageWidth: carouselRect.width,
      top: thumbRect.top - carouselRect.top,
      width: thumbRect.width,
    };
  }, []);

  const finishTransition = useCallback((targetIndex: number) => {
    setActiveIndex(targetIndex);
    setTransition(null);
  }, []);

  const startTransition = useCallback((nextTransition: TransitionState) => {
    clearTimeout(timerRef.current);
    setTransition(nextTransition);
    timerRef.current = setTimeout(() => {
      finishTransition(nextTransition.targetIndex);
    }, pcAnimationDurationMs);
  }, [finishTransition]);

  const handleNext = useCallback(() => {
    if (transition) return;

    const sourceThumb = thumbRef.current?.querySelector(':scope > .pc-thumb') as HTMLButtonElement | null;
    const targetIndex = getWrappedIndex(activeIndex + 1);
    if (!sourceThumb) {
      setActiveIndex(targetIndex);
      return;
    }

    const rect = getThumbRect(sourceThumb);
    if (!rect) {
      setActiveIndex(targetIndex);
      return;
    }

    startTransition({
      rect,
      src: projects[targetIndex].img,
      targetIndex,
      type: 'next',
    });
  }, [activeIndex, getThumbRect, startTransition, transition]);

  const handlePrev = useCallback(() => {
    if (transition) return;

    const sourceThumb = thumbRef.current?.querySelector(':scope > .pc-thumb') as HTMLButtonElement | null;
    const targetIndex = getWrappedIndex(activeIndex - 1);
    if (!sourceThumb) {
      setActiveIndex(targetIndex);
      return;
    }

    const rect = getThumbRect(sourceThumb);
    if (!rect) {
      setActiveIndex(targetIndex);
      return;
    }

    startTransition({
      rect,
      src: currentProject.img,
      targetIndex,
      type: 'prev',
    });
  }, [activeIndex, currentProject.img, getThumbRect, startTransition, transition]);

  const handleThumbnailClick = useCallback((event: MouseEvent<HTMLButtonElement>, targetIndex: number) => {
    if (transition) return;

    const sourceThumb = event.currentTarget;
    const rect = getThumbRect(sourceThumb);
    const thumbImage = sourceThumb.querySelector('img');
    if (!rect || !thumbImage) return;

    startTransition({
      rect,
      src: thumbImage.currentSrc || thumbImage.src,
      targetIndex,
      type: 'thumb',
    });
  }, [getThumbRect, startTransition, transition]);

  useEffect(() => () => {
    clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    projects.forEach((project) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = project.img;
    });
  }, []);

  return (
    <section className="stack-section mask-shaped-section" style={{ zIndex: 30, '--mask-color': '#6c2bd9', '--mask-shadow': '#6c2bd98c' } as CSSProperties}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner" style={{ position: 'absolute', inset: 0, backgroundColor: '#0a1020' }}>
          <div
            ref={carouselRef}
            className={`pc-carousel locked-content${transition ? ` is-${transition.type}-transition` : ''}`}
            style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
          >
            <div className="pc-stage">
              <div className="pc-slide pc-slide-active">
                <img
                  src={backgroundProject.img}
                  alt={backgroundProject.title}
                  decoding="async"
                  fetchPriority="high"
                />
                <div key={contentProject.id} className={`pc-content${transition ? ' is-transitioning' : ''}`}>
                  <div className="pc-id">PROJECT {contentProject.id}</div>
                  <div className="pc-title">{contentProject.title}<br/>{contentProject.line2}</div>
                  <div className="pc-des">{contentProject.des}</div>
                  <div className="pc-stack">{contentProject.stack.map((stackItem) => <span key={stackItem}>{stackItem}</span>)}</div>
                  <div className="pc-buttons"><button>Selected Work</button></div>
                </div>
              </div>

              {transition ? (
                <div
                  aria-hidden="true"
                  className={`pc-transition-layer pc-transition-${transition.type}`}
                  style={{
                    '--pc-expand-radius': `${transition.rect.radius}px`,
                    '--pc-expand-scale-x': `${transition.rect.width / transition.rect.stageWidth}`,
                    '--pc-expand-scale-y': `${transition.rect.height / transition.rect.stageHeight}`,
                    '--pc-expand-top': `${transition.rect.top}px`,
                    '--pc-expand-left': `${transition.rect.left}px`,
                  } as CSSProperties}
                >
                  <img src={transition.src} alt="" decoding="async" fetchPriority="high" />
                </div>
              ) : null}
            </div>

            <div ref={thumbRef} className="pc-thumbnail">
              {thumbnailProjects.map(({ index, project }, order) => {
                const isTransitionSource = transition
                  ? transition.type !== 'prev' && index === transition.targetIndex
                  : false;

                return (
                  <button
                    key={project.id}
                    type="button"
                    className={`pc-thumb${isTransitionSource ? ' is-transition-source' : ''}`}
                    onClick={(event) => handleThumbnailClick(event, index)}
                    aria-label={`Show project ${project.title} ${project.line2}`}
                    style={{ zIndex: order === 0 ? 1 : 2 }}
                  >
                    <img src={project.img} alt={project.title} decoding="async" loading="lazy" />
                  </button>
                );
              })}
            </div>

            <div className="pc-arrows">
              <button type="button" aria-label="Previous project" onClick={handlePrev}>
                <span className="pc-arrow-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </span>
                <span className="pc-arrow-label">Prev</span>
              </button>
              <button type="button" aria-label="Next project" onClick={handleNext}>
                <span className="pc-arrow-label">Next</span>
                <span className="pc-arrow-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pc-carousel {
          position: relative;
          height: 100%;
          width: 100%;
          --pc-thumb-w: 260px;
          --pc-thumb-h: 150px;
          --pc-thumb-gap: 20px;
          --pc-thumb-right: -400px;
          --pc-thumb-bottom: 52px;
          --pc-ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
          --pc-ease-soft: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pc-stage {
          position: absolute;
          inset: 0;
        }

        .pc-slide-active {
          position: absolute;
          inset: 0;
        }
        .pc-slide-active img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .pc-slide-active::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          background: rgba(0, 0, 0, 0.42);
        }

        .pc-content {
          position: absolute;
          top: 20%;
          left: 8%;
          width: 700px;
          max-width: 75%;
          z-index: 2;
          color: #fff;
          text-shadow: 0 5px 10px rgba(0,0,0,0.3);
        }
        .pc-content.is-transitioning {
          opacity: 0;
        }
        .pc-content .pc-id,
        .pc-content .pc-title,
        .pc-content .pc-des,
        .pc-content .pc-stack,
        .pc-content .pc-buttons {
          transform: translateY(34px);
          filter: blur(12px);
          opacity: 0;
          animation: pcShowContent 0.72s var(--pc-ease-soft) 1 forwards;
          will-change: transform, opacity, filter;
        }
        .pc-id {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.4em;
          color: #38bdf8;
          margin-bottom: 14px;
          animation-delay: 0.2s;
        }
        .pc-title {
          font-family: 'Syncopate', sans-serif;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation-delay: 0.3s;
        }
        .pc-des {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 300;
          max-width: 400px;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
          animation-delay: 0.45s;
        }
        .pc-stack {
          margin-top: 22px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          animation-delay: 0.55s;
        }
        .pc-stack span {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(56,189,248,0.25);
          color: rgba(255,255,255,0.6);
          background: rgba(56,189,248,0.08);
          backdrop-filter: blur(8px);
        }
        .pc-buttons {
          margin-top: 28px;
          animation-delay: 0.65s;
        }
        .pc-buttons button {
          background: #fff;
          color: #000;
          border: none;
          padding: 12px 28px;
          border-radius: 6px;
          font-family: 'Space Mono', monospace;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.36s var(--pc-ease-soft), transform 0.36s var(--pc-ease-soft), color 0.36s var(--pc-ease-soft), box-shadow 0.36s var(--pc-ease-soft);
          box-shadow: 0 10px 24px rgba(255,255,255,0.12);
        }
        .pc-buttons button:hover {
          background: #38bdf8;
          color: #fff;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 18px 40px rgba(56,189,248,0.28);
        }

        @keyframes pcShowContent {
          to {
            transform: translateY(0);
            filter: blur(0);
            opacity: 1;
          }
        }

        .pc-thumbnail {
          position: absolute;
          right: var(--pc-thumb-right);
          bottom: var(--pc-thumb-bottom);
          width: max-content;
          z-index: 120;
          display: flex;
          gap: var(--pc-thumb-gap);
          isolation: isolate;
        }
        .pc-thumb {
          width: var(--pc-thumb-w);
          height: var(--pc-thumb-h);
          flex-shrink: 0;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          transition: transform 0.42s var(--pc-ease-soft), box-shadow 0.42s var(--pc-ease-soft), opacity 0.3s var(--pc-ease-soft), filter 0.42s var(--pc-ease-soft);
          border: none;
          padding: 0;
          background: transparent;
          will-change: transform, opacity;
        }
        .pc-thumb:hover {
          transform: translateY(-4px) scale(1.025);
          box-shadow: 0 20px 38px rgba(56,189,248,0.22);
          filter: saturate(1.08);
        }
        .pc-thumb:focus-visible {
          outline: 2px solid #38bdf8;
          outline-offset: 4px;
        }
        .pc-thumb.is-transition-source {
          opacity: 0;
          transform: none;
          box-shadow: none;
        }
        .pc-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .pc-transition-layer {
          position: absolute;
          overflow: hidden;
          pointer-events: none;
          inset: 0;
          z-index: 110;
          box-shadow: 0 30px 80px rgba(0,0,0,0.45);
          will-change: transform, border-radius, opacity;
          transform: translateZ(0);
          transform-origin: top left;
          backface-visibility: hidden;
        }
        .pc-transition-layer img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .pc-transition-next,
        .pc-transition-thumb {
          border-radius: var(--pc-expand-radius);
          transform: translate3d(var(--pc-expand-left), var(--pc-expand-top), 0) scale(var(--pc-expand-scale-x), var(--pc-expand-scale-y));
          animation: pcTransitionExpand 0.76s var(--pc-ease-smooth) forwards;
        }
        .pc-transition-prev {
          border-radius: 0;
          z-index: 121;
          animation: pcTransitionShrink 0.76s var(--pc-ease-smooth) forwards;
        }
        @keyframes pcTransitionExpand {
          to {
            border-radius: 0;
            transform: translate3d(0, 0, 0) scale(1, 1);
            box-shadow: none;
          }
        }
        @keyframes pcTransitionShrink {
          from {
            border-radius: 0;
            transform: translate3d(0, 0, 0) scale(1, 1);
            box-shadow: 0 30px 80px rgba(0,0,0,0.45);
          }
          to {
            border-radius: var(--pc-expand-radius);
            transform: translate3d(var(--pc-expand-left), var(--pc-expand-top), 0) scale(var(--pc-expand-scale-x), var(--pc-expand-scale-y));
            box-shadow: none;
          }
        }

        .pc-arrows {
          position: absolute;
          right: 48px;
          bottom: calc(var(--pc-thumb-bottom) + var(--pc-thumb-h) + 20px);
          z-index: 130;
          display: flex;
          gap: 12px;
        }
        .pc-arrows button {
          min-width: 108px;
          height: 52px;
          border-radius: 999px;
          padding: 0 18px;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.24);
          transition: transform 0.36s var(--pc-ease-soft), background 0.36s var(--pc-ease-soft), border-color 0.36s var(--pc-ease-soft), box-shadow 0.36s var(--pc-ease-soft), color 0.36s var(--pc-ease-soft);
        }
        .pc-arrows button:hover {
          transform: translateY(-3px);
          background: rgba(56, 189, 248, 0.28);
          border-color: rgba(56,189,248,0.42);
          box-shadow: 0 18px 44px rgba(30,58,138,0.28);
        }
        .pc-arrows button:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }
        .pc-arrow-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .pc-arrow-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .pc-carousel.is-next-transition .pc-thumbnail,
        .pc-carousel.is-thumb-transition .pc-thumbnail {
          animation: pcShiftLeft 0.76s var(--pc-ease-smooth) 1 forwards;
        }
        .pc-carousel.is-prev-transition .pc-thumbnail {
          animation: pcShiftRight 0.76s var(--pc-ease-smooth) 1 forwards;
        }
        @keyframes pcShiftLeft {
          from { transform: translateX(calc(var(--pc-thumb-w) + var(--pc-thumb-gap))); }
          to { transform: translateX(0); }
        }
        @keyframes pcShiftRight {
          from { transform: translateX(calc((var(--pc-thumb-w) + var(--pc-thumb-gap)) * -1)); }
          to { transform: translateX(0); }
        }

        .pc-carousel.is-next-transition .pc-thumb,
        .pc-carousel.is-prev-transition .pc-thumb,
        .pc-carousel.is-thumb-transition .pc-thumb,
        .pc-carousel.is-next-transition .pc-arrows button,
        .pc-carousel.is-prev-transition .pc-arrows button,
        .pc-carousel.is-thumb-transition .pc-arrows button {
          pointer-events: none;
        }
        .pc-carousel.is-next-transition .pc-arrows button,
        .pc-carousel.is-prev-transition .pc-arrows button,
        .pc-carousel.is-thumb-transition .pc-arrows button {
          opacity: 0.5;
        }

        @media (max-width: 1024px) {
          .pc-carousel {
            --pc-thumb-w: 200px;
            --pc-thumb-h: 116px;
            --pc-thumb-gap: 12px;
            --pc-thumb-right: -12px;
            --pc-thumb-bottom: 34px;
          }

          .pc-content {
            top: 14%;
            left: 6%;
            width: min(560px, 82%);
          }
        }

        @media (max-width: 768px) {
          .pc-carousel {
            --pc-thumb-w: 126px;
            --pc-thumb-h: 74px;
            --pc-thumb-gap: 10px;
            --pc-thumb-right: 20px;
            --pc-thumb-bottom: 84px;
          }

          .pc-content {
            top: 12%;
            left: 20px;
            width: calc(100% - 40px);
            max-width: none;
          }

          .pc-title {
            font-size: clamp(1.8rem, 8vw, 2.8rem);
            letter-spacing: 1px;
          }

          .pc-des {
            margin-top: 14px;
            max-width: none;
            font-size: 13px;
            line-height: 1.5;
          }

          .pc-stack {
            margin-top: 16px;
            gap: 6px;
          }

          .pc-buttons {
            margin-top: 20px;
          }

          .pc-buttons button {
            padding: 10px 18px;
            font-size: 10px;
          }

          .pc-thumbnail {
            left: auto;
            right: var(--pc-thumb-right);
            width: max-content;
          }

          .pc-thumb:nth-child(n+4) {
            display: none;
          }

          .pc-arrows {
            right: 20px;
            bottom: calc(var(--pc-thumb-bottom) + var(--pc-thumb-h) + 14px);
            gap: 10px;
          }

          .pc-arrows button {
            min-width: 92px;
            height: 46px;
            padding: 0 14px;
          }

          .pc-arrow-label {
            font-size: 9px;
          }
        }

        @media (max-width: 560px) {
          .pc-carousel {
            --pc-thumb-w: 104px;
            --pc-thumb-h: 64px;
            --pc-thumb-gap: 8px;
            --pc-thumb-right: 14px;
            --pc-thumb-bottom: 78px;
          }

          .pc-content {
            top: 10%;
            left: 14px;
            width: calc(100% - 28px);
          }

          .pc-id {
            margin-bottom: 10px;
            letter-spacing: 0.28em;
          }

          .pc-title {
            font-size: clamp(1.45rem, 8vw, 2.2rem);
            letter-spacing: 0.04em;
          }

          .pc-des {
            margin-top: 12px;
            font-size: 12px;
            line-height: 1.45;
            max-width: 92%;
          }

          .pc-stack {
            margin-top: 12px;
            gap: 5px;
          }

          .pc-stack span {
            font-size: 8px;
            padding: 5px 10px;
          }

          .pc-buttons {
            margin-top: 16px;
          }

          .pc-buttons button {
            width: 100%;
            max-width: 180px;
            padding: 10px 14px;
          }

          .pc-arrows {
            left: 14px;
            right: 14px;
            bottom: 18px;
            justify-content: space-between;
          }

          .pc-arrows button {
            min-width: 0;
            width: calc(50% - 6px);
            height: 42px;
            padding: 0 12px;
          }
        }
      `}</style>
    </section>
  );
});

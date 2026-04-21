import { useEffect, useRef } from 'react';
import { useLenis } from './useLenis';
import { useDomCache } from './useDomCache';
import { updateBackground } from './backgroundAnimation';
import { animateBackdrop } from './backdropAnimation';
import { animateContact } from './contactAnimation';
import { animateSection0, animateSection1, animateSection2, animateSection3, invalidateEnTargetCache } from './sectionAnimations';
import type { ScrollContext, SectionAnimationState } from './types';

export const useScrollAnimation = (onSectionChange: (index: number) => void) => {
  const lenisRef = useLenis();
  const { domCacheRef, vhRef, cacheDom } = useDomCache();
  const lastScrollRef = useRef(-1);
  const rafIdRef = useRef<number>();

  useEffect(() => {
    cacheDom();

    const handleResize = () => {
      vhRef.current = window.innerHeight;
      cacheDom();
      invalidateEnTargetCache();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const createScrollContext = (currentScroll: number): ScrollContext => {
      const vh = vhRef.current;
      const transitionLength = vh;
      const pauseLength = vh;
      return {
        currentScroll,
        vh,
        transitionLength,
        pauseLength,
        sectionUnit: vh + pauseLength,
        gapVh: 25,
        bgTransitionSpeed: transitionLength * 0.65,
      };
    };

    const applySectionTransform = (
      sec: HTMLElement,
      state: SectionAnimationState,
      bgImages: NodeListOf<HTMLElement>
    ) => {
      const { currentYMoveVh, currentRotation, currentRotationX, currentRotationY, currentScale, currentOpacity } = state;

      sec.style.transformOrigin = 'center center';
      sec.style.transform = `perspective(2000px) translate3d(0vw, ${currentYMoveVh}vh, 0) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) rotateZ(${currentRotation}deg) scale(${currentScale})`;
      sec.style.opacity = currentOpacity.toString();

      if (bgImages.length > 0) {
        const safeScale = Math.max(0.001, currentScale);
        const invScale = 1 / safeScale;
        const bgTransform = `scale(${invScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(${-currentRotationX}deg) translate3d(0vw, ${-currentYMoveVh}vh, 0)`;
        bgImages.forEach(bg => {
          bg.style.transform = bgTransform;
        });
      }
    };

    const handleScroll = () => {
      const currentScroll = lenisRef.current?.scroll ?? (window.pageYOffset || document.documentElement.scrollTop);

      if (Math.abs(currentScroll - lastScrollRef.current) < 0.5) return;
      lastScrollRef.current = currentScroll;

      const ctx = createScrollContext(currentScroll);
      const { transitionLength, pauseLength, sectionUnit } = ctx;

      // Section detection
      let newActiveIndex = currentScroll < sectionUnit * 0.5 ? 0
        : currentScroll < sectionUnit * 1.5 ? 1
        : currentScroll < sectionUnit * 2.5 ? 2 : 3;

      if (domCacheRef.current.sections) {
        const sectionsArray = Array.from(domCacheRef.current.sections);
        const navbarHeight = document.querySelector('.fixed-navbar')?.getBoundingClientRect().height ?? 0;
        const probeY = Math.min(window.innerHeight - 1, Math.max(1, navbarHeight + 8));

        const activeByProbeIndex = sectionsArray.findIndex((sec) => {
          const rect = sec.getBoundingClientRect();
          return rect.top <= probeY && rect.bottom > probeY;
        });

        if (activeByProbeIndex >= 0) {
          newActiveIndex = activeByProbeIndex;
        } else {
          const viewportMiddle = window.innerHeight / 2;

          let minDistance = Infinity;
          sectionsArray.forEach((sec, idx) => {
            const rect = sec.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - viewportMiddle);
            if (distance < minDistance) {
              minDistance = distance;
              newActiveIndex = idx;
            }
          });
        }
      }
      
      onSectionChange(newActiveIndex);

      const { progressEl, root, globalEnBackdrop: cachedBackdrop, experienceEnSpan, sections, sectionCaches, contactIcon, contactTexts } = domCacheRef.current;

      // Update progress bar
      if (progressEl) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        progressEl.style.width = `${(currentScroll / maxScroll) * 100}%`;
      }

      // Update background
      updateBackground(currentScroll, ctx, root);

      // Section animations
      sections?.forEach((sec, i) => {
        const secEl = sec as HTMLElement;
        const cache = sectionCaches[i];
        if (!cache) return;

        let state: SectionAnimationState;

        switch (i) {
          case 0:
            state = animateSection0(secEl, currentScroll, ctx, cachedBackdrop, experienceEnSpan, cache);
            break;
          case 1:
            state = animateSection1(secEl, currentScroll, ctx);
            break;
          case 2:
            state = animateSection2(secEl, currentScroll, ctx, cache);
            break;
          case 3:
            state = animateSection3(secEl, currentScroll, ctx);
            break;
          default:
            state = { currentYMoveVh: 0, currentRotation: 0, currentRotationX: 0, currentRotationY: 0, currentScale: 1, currentOpacity: 1, lockedContentXVw: 0 };
        }

        applySectionTransform(secEl, state, cache.bgImages);

        // Sub-elements animation using cache
        const { currentYMoveVh, currentRotation, currentRotationY, currentOpacity, currentScale } = state;
        const safeScale = Math.max(0.001, currentScale);
        const invScale = 1 / safeScale;
        const transformBase = `scale(${invScale}) rotateZ(${-currentRotation}deg) translate3d(0vw, ${-currentYMoveVh}vh, 0)`;

        if (cache.parallaxContent) {
          cache.parallaxContent.style.transform = 'translate3d(0, 0, 0)';
        }

        cache.lockedContent.forEach(content => {
          if (i === 0 && content.classList.contains('parallax-image')) return;
          if (i === 2 && currentScroll >= (i * (transitionLength + pauseLength) + pauseLength)) {
            content.style.transform = `scale(${invScale}) rotateY(${-currentRotationY}deg) rotateZ(${-currentRotation}deg) translate3d(0vw, ${-currentYMoveVh}vh, 0)`;
          } else {
            content.style.transform = transformBase;
          }
          content.style.opacity = (i === 2 && currentScroll >= (pauseLength + transitionLength + pauseLength) && currentScroll < (2 * (transitionLength + pauseLength) + pauseLength)) ? '1' : currentOpacity.toString();
        });

        if (i === 2 && window.matchMedia('(min-width: 1024px)').matches) {
          const section2ImageEl = (secEl.querySelector('[data-section2="image"]') as HTMLElement | null) ?? cache.section2Image;
          const section2DescEl = (secEl.querySelector('[data-section2="desc"]') as HTMLElement | null) ?? cache.section2Desc;
          const section2SkillsEl = (secEl.querySelector('[data-section2="skills"]') as HTMLElement | null) ?? cache.section2Skills;

          // Section 2 contains an internal scroll container (experience -> projects). These elements
          // only become visible once the internal scroll reaches the projects area.
          const worksContainer = cache.worksScrollContainer;
          const baseP = (() => {
            if (!worksContainer || !section2ImageEl) return 1;
            const revealStart = section2ImageEl.offsetTop - worksContainer.clientHeight * 0.55;
            const revealRange = Math.max(1, worksContainer.clientHeight * 0.35);
            const raw = (worksContainer.scrollTop - revealStart) / revealRange;
            return Math.max(0, Math.min(1, raw));
          })();

          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

          const applyFade = (el: HTMLElement | null, t: number, baseYPx: number) => {
            if (!el) return;
            const e = easeOut(t);
            el.style.opacity = e.toString();
            el.style.transform = `translate3d(0, ${(1 - e) * baseYPx}px, 0)`;
            if (t >= 1) {
              el.style.transform = 'translate3d(0, 0, 0)';
            }
            if (t <= 0) {
              el.style.opacity = '0';
            }
          };

          // Staggered fade-in
          const imgT = Math.max(0, Math.min(1, (baseP - 0.00) / 0.75));
          const descT = Math.max(0, Math.min(1, (baseP - 0.18) / 0.75));
          const skillsT = Math.max(0, Math.min(1, (baseP - 0.35) / 0.70));

          // Before fadeStart, keep hidden; after fadeEnd, keep fully shown.
          applyFade(section2ImageEl, imgT, 120);
          applyFade(section2DescEl, descT, 90);
          applyFade(section2SkillsEl, skillsT, 70);

          // Respect section-level fade-out when leaving
          if (currentOpacity < 0.99) {
            const safeOpacity = Math.max(0, Math.min(1, currentOpacity));
            if (section2ImageEl) section2ImageEl.style.opacity = safeOpacity.toString();
            if (section2DescEl) section2DescEl.style.opacity = safeOpacity.toString();
            if (section2SkillsEl) section2SkillsEl.style.opacity = safeOpacity.toString();
          }
        }

        if (i === 1) {
          // About (Section 1): scroll-driven fade-in/out for content elements.
          // The section enter transition moves it from off-screen to resting position.
          // Content should fade in AFTER the section has settled (during the pause),
          // because the section has overflow:hidden which clips content during transition.
          const { aboutFadeTargets } = cache;
          if (aboutFadeTargets && aboutFadeTargets.length > 0) {
            const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (isDesktop) {
              if (reduceMotion) {
                aboutFadeTargets.forEach((el) => {
                  el.style.opacity = '1';
                  el.style.transform = '';
                });
              } else {
                // Section 1 settles at enterEnd = pauseLength + transitionLength.
                // Content fade-in should happen right around that settlement point.
                const enterEnd = pauseLength + transitionLength;
                // Start fading slightly before section 1 fully settles (last 20% of enter)
                const fadeStart = enterEnd - transitionLength * 0.2;
                const fadeRange = transitionLength * 0.35;
                const rawProgress = Math.max(0, Math.min(1, (currentScroll - fadeStart) / fadeRange));
                // Smooth ease-out
                const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

                aboutFadeTargets.forEach((el) => {
                  const order = parseFloat(el.getAttribute('data-about-fade-order') || '0');
                  // Stagger: each order unit delays by 6% of progress range
                  const staggerOffset = order * 0.06;
                  const denominator = Math.max(0.01, 1 - staggerOffset);
                  const elementProgress = Math.max(0, Math.min(1, (easedProgress - staggerOffset) / denominator));
                  el.style.transition = 'none';
                  el.style.opacity = elementProgress.toString();
                  // Slide up from 40px
                  const slideY = (1 - elementProgress) * 40;
                  const baseY = el.classList.contains('about-image-wrap') ? -60 : 0;
                  el.style.transform = `translateY(${baseY + slideY}px)`;
                });

                // When section is leaving (opacity < 1), override to fade out
                if (currentOpacity < 0.99) {
                  const safeOpacity = Math.max(0, Math.min(1, currentOpacity));
                  aboutFadeTargets.forEach((el) => {
                    el.style.opacity = safeOpacity.toString();
                  });
                }
              }
            }
          }
        }

        const referenceStart = i === 0 ? 0 : ((i - 1) * (transitionLength + pauseLength)) + pauseLength;
        cache.textParallaxBlocks.forEach(block => {
          const speed = parseFloat(block.getAttribute('data-speed') || '0.04');
          block.style.transform = `translate3d(0, ${(currentScroll - referenceStart) * speed * 0.08}px, 0)`;
        });

        if (cache.frameOverlay) {
          cache.frameOverlay.style.transform = `scale(${invScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(0deg) translate3d(0vw, ${-currentYMoveVh}vh, 0)`;
        }
      });

      // Backdrop animation
      animateBackdrop(currentScroll, ctx, cachedBackdrop);

      // Contact animations
      animateContact(currentScroll, ctx, contactIcon, contactTexts);
    };

    const rafScrollHandler = () => {
      if (rafIdRef.current) return;
      rafIdRef.current = requestAnimationFrame(() => {
        handleScroll();
        rafIdRef.current = undefined;
      });
    };

    if (lenisRef.current) {
      lenisRef.current.on('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', rafScrollHandler, { passive: true });
    }

    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', rafScrollHandler);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [onSectionChange, cacheDom, lenisRef]);
};

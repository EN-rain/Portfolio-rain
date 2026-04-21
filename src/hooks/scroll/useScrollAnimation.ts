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
          // Works (Section 2) is moved into view during its enter transition; fading during that
          // phase can be mostly off-screen. Instead, start fading once it's centered.
          const enterStart = pauseLength + transitionLength + pauseLength;
          const enterEnd = enterStart + transitionLength;
          const leaveStart = 2 * (pauseLength + transitionLength) + pauseLength;

          // Fade during the early part of the centered/pause window
          const fadeStart = enterEnd;
          const fadeDuration = pauseLength * 0.6;
          const fadeEnd = Math.min(leaveStart, fadeStart + fadeDuration);

          const rawP = (currentScroll - fadeStart) / Math.max(1, (fadeEnd - fadeStart));
          const p = Math.max(0, Math.min(1, rawP));

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
          const imgT = Math.max(0, Math.min(1, (p - 0.00) / 0.75));
          const descT = Math.max(0, Math.min(1, (p - 0.18) / 0.75));
          const skillsT = Math.max(0, Math.min(1, (p - 0.35) / 0.70));

          // Before fadeStart, keep hidden; after fadeEnd, keep fully shown.
          applyFade(cache.section2Image, imgT, 28);
          applyFade(cache.section2Desc, descT, 22);
          applyFade(cache.section2Skills, skillsT, 16);

          // Respect section-level fade-out when leaving
          if (currentOpacity < 0.99) {
            const safeOpacity = Math.max(0, Math.min(1, currentOpacity));
            if (cache.section2Image) cache.section2Image.style.opacity = safeOpacity.toString();
            if (cache.section2Desc) cache.section2Desc.style.opacity = safeOpacity.toString();
            if (cache.section2Skills) cache.section2Skills.style.opacity = safeOpacity.toString();
          }
        }

        if (i === 1 && window.matchMedia('(min-width: 1024px)').matches) {
          // About (Section 1): tie fade-in to scroll (desktop only).
          const { aboutFadeTargets } = cache;
          if (aboutFadeTargets && aboutFadeTargets.length > 0) {
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduceMotion) {
              aboutFadeTargets.forEach((el) => {
                el.style.opacity = '1';
                el.style.transitionDelay = '0ms';
              });
            } else {
            const shouldShow = newActiveIndex === 1;
            const baseDelayMs = 90;

            aboutFadeTargets.forEach((el) => {
              const order = parseFloat(el.getAttribute('data-about-fade-order') || '0');
              el.style.transitionDelay = `${Math.max(0, order) * baseDelayMs}ms`;
              el.style.opacity = shouldShow ? '1' : '0';
            });

            // Respect section-level fade-out when leaving
            if (currentOpacity < 0.99) {
              const safeOpacity = Math.max(0, Math.min(1, currentOpacity));
              aboutFadeTargets.forEach((el) => {
                el.style.opacity = safeOpacity.toString();
              });
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

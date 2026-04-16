import { useEffect, useRef } from 'react';
import { useLenis } from './useLenis';
import { useDomCache } from './useDomCache';
import { updateBackground } from './backgroundAnimation';
import { animateBackdrop } from './backdropAnimation';
import { animateContact } from './contactAnimation';
import { animateSection0, animateSection1, animateSection2, animateSection3 } from './sectionAnimations';
import type { ScrollContext, SectionAnimationState } from './types';

const MAX_SCALE = 1.2;

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
      const newActiveIndex = currentScroll < sectionUnit * 0.5 ? 0
        : currentScroll < sectionUnit * 1.5 ? 1
        : currentScroll < sectionUnit * 2.8 ? 2 : 3;
      onSectionChange(newActiveIndex);

      const { progressEl, root, globalEnBackdrop: cachedBackdrop, sections, sectionCaches, contactIcon, contactTexts } = domCacheRef.current;

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
            state = animateSection0(secEl, currentScroll, ctx, cachedBackdrop, cache);
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

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
      sec: Element,
      state: SectionAnimationState,
      currentXMoveVw: number
    ) => {
      const secEl = sec as HTMLElement;
      const { currentYMoveVh, currentRotation, currentRotationX, currentRotationY, currentScale, currentOpacity } = state;

      secEl.style.transformOrigin = 'center center';
      secEl.style.transform = `perspective(2000px) translate3d(${currentXMoveVw}vw, ${currentYMoveVh}vh, 0) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) rotateZ(${currentRotation}deg) scale(${currentScale})`;
      secEl.style.opacity = currentOpacity.toString();

      const safeScale = Math.max(0.001, currentScale);
      const bgImages = sec.querySelectorAll('.bg-image') as NodeListOf<HTMLElement>;
      bgImages.forEach(bg => {
        bg.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(${-currentRotationX}deg) translate3d(${-currentXMoveVw}vw, ${-currentYMoveVh}vh, 0)`;
      });
    };

    const handleScroll = () => {
      const currentScroll = lenisRef.current?.scroll ?? (window.pageYOffset || document.documentElement.scrollTop);

      if (Math.abs(currentScroll - lastScrollRef.current) < 1) return;
      lastScrollRef.current = currentScroll;

      const ctx = createScrollContext(currentScroll);
      const { transitionLength, pauseLength, sectionUnit } = ctx;

      // Section detection
      const newActiveIndex = currentScroll < sectionUnit * 0.5 ? 0
        : currentScroll < sectionUnit * 1.5 ? 1
        : currentScroll < sectionUnit * 2.8 ? 2 : 3;
      onSectionChange(newActiveIndex);

      const { progressEl, root, globalEnBackdrop: cachedBackdrop, sections, contactIcon, contactTexts } = domCacheRef.current;

      // Update progress bar
      if (progressEl) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        progressEl.style.width = `${(currentScroll / maxScroll) * 100}%`;
      }

      // Update background
      updateBackground(currentScroll, ctx, root);

      // Ensure first section visible on initial load
      if (currentScroll < 10 && sections?.[0]) {
        const sec0 = sections[0] as HTMLElement;
        sec0.style.transform = `translate3d(0vw, 0vh, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(${MAX_SCALE})`;
        sec0.style.opacity = '1';
      }

      // Animate sections
      sections?.forEach((sec, i) => {
        const inner = sec.querySelector('.parallax-content') as HTMLElement;
        let state: SectionAnimationState;

        switch (i) {
          case 0:
            state = animateSection0(sec, currentScroll, ctx, cachedBackdrop);
            break;
          case 1:
            state = animateSection1(sec, currentScroll, ctx);
            break;
          case 2:
            state = animateSection2(sec, currentScroll, ctx);
            break;
          case 3:
            state = animateSection3(sec, currentScroll, ctx);
            break;
          default:
            state = { currentYMoveVh: 0, currentRotation: 0, currentRotationX: 0, currentRotationY: 0, currentScale: 1, currentOpacity: 1, lockedContentXVw: 0 };
        }

        applySectionTransform(sec, state, 0);

        // Inner content
        if (inner) {
          inner.style.transform = 'translate3d(0, 0, 0)';
          inner.style.filter = 'brightness(1)';
        }

        // Locked content
        const lockedContent = sec.querySelectorAll('.locked-content') as NodeListOf<HTMLElement>;
        const { currentYMoveVh, currentRotation, currentRotationY, currentOpacity, currentScale } = state;
        const safeScale = Math.max(0.001, currentScale);
        const invScale = 1 / safeScale;

        const enterStart = i === 0 ? 0 : ((i - 1) * (transitionLength + pauseLength)) + pauseLength;
        const leaveStart = i * (transitionLength + pauseLength) + pauseLength;

        lockedContent.forEach(content => {
          if (i === 0 && content.classList.contains('parallax-image')) return;
          if (i === 2 && currentScroll >= leaveStart) {
            content.style.transform = `scale(${invScale}) rotateY(${-currentRotationY}deg) rotateZ(${-currentRotation}deg) translate3d(0vw, ${-currentYMoveVh}vh, 0)`;
            content.style.opacity = currentOpacity.toString();
          } else if (i === 2 && currentScroll >= enterStart && currentScroll < leaveStart) {
            content.style.transform = `scale(${invScale}) rotateZ(${-currentRotation}deg) translate3d(0vw, ${-currentYMoveVh}vh, 0)`;
            content.style.opacity = '1';
          } else {
            content.style.transform = `scale(${invScale}) rotateZ(${-currentRotation}deg) translate3d(0vw, ${-currentYMoveVh}vh, 0)`;
            content.style.opacity = currentOpacity.toString();
          }
        });

        // Text parallax blocks
        const textParallaxBlocks = sec.querySelectorAll('.scroll-parallax-text') as NodeListOf<HTMLElement>;
        const referenceStart = i === 0 ? 0 : enterStart;
        textParallaxBlocks.forEach(block => {
          const speed = parseFloat(block.getAttribute('data-speed') || '0.04');
          block.style.transform = `translate3d(0, ${(currentScroll - referenceStart) * speed * 0.08}px, 0)`;
        });

        // Frame overlay
        const frameOverlay = sec.querySelector('.section-frame-overlay') as HTMLElement;
        if (frameOverlay) {
          frameOverlay.style.transform = `scale(${invScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(0deg) translate3d(0vw, ${-currentYMoveVh}vh, 0)`;
          frameOverlay.style.zIndex = '999';
        }

        // Clip paths
        const clipInner = sec.querySelector('.clip-gap-inner') as HTMLElement;
        if (clipInner) clipInner.style.clipPath = 'none';
        const clipOuter = sec.querySelector('.clip-gap-outer') as HTMLElement;
        if (clipOuter) clipOuter.style.clipPath = 'none';
      });

      // Backdrop animation
      animateBackdrop(currentScroll, ctx, cachedBackdrop);

      // Contact animations
      animateContact(currentScroll, ctx, contactIcon, contactTexts);

      // Experience progress event
      window.dispatchEvent(new CustomEvent('experience-progress', { detail: { progress: 0, activeIndex: 0 } }));
    };

    // RAF throttling for fallback
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

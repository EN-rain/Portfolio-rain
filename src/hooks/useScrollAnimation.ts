import { useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = (onSectionChange: (index: number) => void) => {
  const lenisRef = useRef<any>(null);
  // Cache DOM elements to avoid repeated queries
  const domCacheRef = useRef<{
    sections: NodeListOf<Element> | null;
    globalEnBackdrop: HTMLElement | null;
    progressEl: HTMLElement | null;
    root: HTMLElement | null;
    contactIcon: HTMLElement | null;
    contactTexts: NodeListOf<HTMLElement> | null;
  }>({} as any);
  // Track last scroll position to skip unnecessary updates
  const lastScrollRef = useRef(-1);
  const rafIdRef = useRef<number>();
  const vhRef = useRef(window.innerHeight);

  // Cache DOM elements once
  const cacheDom = useCallback(() => {
    domCacheRef.current = {
      sections: document.querySelectorAll('.stack-section'),
      globalEnBackdrop: document.querySelector('.global-en-backdrop') as HTMLElement | null,
      progressEl: document.getElementById('section-progress'),
      root: document.getElementById('root'),
      contactIcon: document.getElementById('contact-icon') as HTMLElement | null,
      contactTexts: document.querySelectorAll('.contact-text') as NodeListOf<HTMLElement>,
    };
  }, []);

  useEffect(() => {
    // Load Lenis dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lenis@1.1.13/dist/lenis.min.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if ((window as any).Lenis) {
        lenisRef.current = new (window as any).Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time: number) {
          lenisRef.current?.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const handleLenisScroll = (e: any) => {
          lenisRef.current?.scrollTo(e.detail);
        };
        window.addEventListener('lenis-scroll', handleLenisScroll);

        // Store the handler on lenis container to decouple it for cleaning up
        (lenisRef.current as any)._customCustomHandler = handleLenisScroll;
      }
    };

    return () => {
      if (lenisRef.current && (lenisRef.current as any)._customCustomHandler) {
         window.removeEventListener('lenis-scroll', (lenisRef.current as any)._customCustomHandler);
      }
      document.head.removeChild(script);
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    // Cache DOM on mount
    cacheDom();
    
    const handleResize = () => { 
      vhRef.current = window.innerHeight;
      // Re-cache DOM on resize in case of re-renders
      cacheDom();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Pre-compute constants
    const backgroundStops = [
      [255, 255, 255], [255, 255, 255], [0, 0, 0], [0, 0, 0],
      [255, 255, 255], [255, 255, 255], [255, 255, 255],
    ] as const;

    const mixChannel = (from: number, to: number, progress: number) => from + ((to - from) * progress);
    const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
    const easeInOut = (value: number) => {
      const p = clamp(value);
      return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    };

    const handleScroll = () => {
      const currentScroll = lenisRef.current?.scroll ?? (window.pageYOffset || document.documentElement.scrollTop);
      
      // Skip if scroll position hasn't changed significantly (threshold: 1px)
      if (Math.abs(currentScroll - lastScrollRef.current) < 1) return;
      lastScrollRef.current = currentScroll;
      
      const vh = vhRef.current;
      
      const transitionLength = vh;
      const pauseLength = vh;
      const sectionUnit = vh + pauseLength;
      
      // Section detection
      let newActiveIndex = currentScroll < sectionUnit * 0.5 ? 0 
        : currentScroll < sectionUnit * 1.5 ? 1 
        : currentScroll < sectionUnit * 2.5 ? 2 : 3;
      
      onSectionChange(newActiveIndex);

      // Update progress bar (use cached element)
      const { progressEl, root, globalEnBackdrop: cachedBackdrop, sections, contactIcon, contactTexts } = domCacheRef.current;
      if (progressEl) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        progressEl.style.width = `${(currentScroll / maxScroll) * 100}%`;
      }

      const gapVh = 25;
      const bgTransitionSpeed = transitionLength * 0.65;

      // Pre-computed section anchors for performance
      const sectionAnchors = [
        0, pauseLength, pauseLength + bgTransitionSpeed,
        pauseLength + transitionLength + pauseLength,
        pauseLength + transitionLength + pauseLength + bgTransitionSpeed,
        2 * (pauseLength + transitionLength) + pauseLength,
        2 * (pauseLength + transitionLength) + pauseLength + bgTransitionSpeed,
      ];

      let backgroundIndex = 0;
      while (backgroundIndex < sectionAnchors.length - 1 && currentScroll > sectionAnchors[backgroundIndex + 1]) {
        backgroundIndex += 1;
      }

      const nextBackgroundIndex = Math.min(backgroundStops.length - 1, backgroundIndex + 1);
      const currentAnchor = sectionAnchors[backgroundIndex];
      const nextAnchor = sectionAnchors[nextBackgroundIndex];
      const backgroundProgress = clamp((currentScroll - currentAnchor) / (nextAnchor - currentAnchor));

      const r = mixChannel(backgroundStops[backgroundIndex][0], backgroundStops[nextBackgroundIndex][0], backgroundProgress);
      const g = mixChannel(backgroundStops[backgroundIndex][1], backgroundStops[nextBackgroundIndex][1], backgroundProgress);
      const b = mixChannel(backgroundStops[backgroundIndex][2], backgroundStops[nextBackgroundIndex][2], backgroundProgress);
      const shellBackground = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

      // Batch background updates
      document.body.style.backgroundColor = shellBackground;
      document.documentElement.style.backgroundColor = shellBackground;
      if (root) root.style.backgroundColor = shellBackground;

      
      const minScale = 0.5;
      const maxScale = 1.2;
      let section4ProgressSnapshot = 0;

      // Use cached sections
      
      // Ensure first section is visible on initial load
      if (currentScroll < 10 && sections?.[0]) {
        const sec0 = sections[0] as HTMLElement;
        sec0.style.transform = `translate3d(0vw, 0vh, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(${maxScale})`;
        sec0.style.opacity = '1';
      }
        
      sections?.forEach((sec, i) => {
        const inner = sec.querySelector('.parallax-content') as HTMLElement;
        const bgImages = sec.querySelectorAll('.bg-image') as NodeListOf<HTMLElement>;
          
        const enterStart = i === 0 ? 0 : ((i - 1) * (transitionLength + pauseLength)) + pauseLength;
        const enterEnd = i === 0 ? 0 : enterStart + transitionLength;
        const leaveStart = i * (transitionLength + pauseLength) + pauseLength;
        const leaveEnd = leaveStart + transitionLength;

        let currentYMoveVh = 0;
        let currentRotation = 0;
        let currentRotationX = 0;
        let currentRotationY = 0;
        let currentScale = 1;
        let currentOpacity = 1;
        let lockedContentXVw = 0;

        if (i === 0) {
          // SECTION 1 LOGIC (Home)
          if (currentScroll < leaveStart) {
            currentYMoveVh = 0; currentRotation = 0; currentScale = maxScale; currentOpacity = 1;
          } else if (currentScroll >= leaveStart && currentScroll < leaveEnd) {
            const progress = (currentScroll - leaveStart) / transitionLength;
            const smoothProgress = progress < 0.75 ? (progress / 0.75) * (progress / 0.75) : 1;
            currentYMoveVh = progress * (100 + gapVh);
            currentRotation = progress * 10;
            currentScale = maxScale - (smoothProgress * (maxScale - minScale));
            currentOpacity = 1;
          } else {
            currentYMoveVh = 100 + gapVh; currentRotation = 10; currentScale = minScale; currentOpacity = 1;
          }
        } else if (i === 1) {
          // SECTION 2 LOGIC (About)
          if (currentScroll < enterStart) {
            currentYMoveVh = -(100 + gapVh); currentRotation = -10; currentScale = minScale; currentOpacity = 1;
          } else if (currentScroll >= enterStart && currentScroll < enterEnd) {
            const progress = (currentScroll - enterStart) / transitionLength;
            const smoothProgress = progress < 0.75 ? (progress / 0.75) * (progress / 0.75) : 1;
            currentYMoveVh = -(100 + gapVh) + (progress * (100 + gapVh));
            currentRotation = -10 + (progress * 10);
            currentScale = minScale + (smoothProgress * (maxScale - minScale));
            currentOpacity = 1;
          } else if (currentScroll >= enterEnd && currentScroll < leaveStart) {
            currentYMoveVh = 0; currentRotation = 0; currentScale = maxScale; currentOpacity = 1;
          } else if (currentScroll >= leaveStart && currentScroll < leaveEnd) {
            const progress = (currentScroll - leaveStart) / transitionLength;
            const smoothProgress = progress < 0.75 ? (progress / 0.75) * (progress / 0.75) : 1;
            currentYMoveVh = progress * (100 + gapVh);
            currentRotation = progress * 10;
            currentScale = maxScale - (smoothProgress * (maxScale - minScale));
            currentOpacity = 1;
          } else {
            currentYMoveVh = 100 + gapVh; currentRotation = 10; currentScale = minScale; currentOpacity = 1;
          }
        } else if (i === 2) {
          // SECTION 3 LOGIC (Works)
          const worksContainer = sec.querySelector('.works-scroll-container') as HTMLElement | null;
          
          if (currentScroll < enterStart) {
            currentYMoveVh = -(100 + gapVh); currentRotation = -10; currentScale = minScale; currentOpacity = 1;
          } else if (currentScroll >= enterStart && currentScroll < enterEnd) {
            const progress = (currentScroll - enterStart) / transitionLength;
            const smoothProgress = progress < 0.75 ? (progress / 0.75) * (progress / 0.75) : 1;
            currentYMoveVh = -(100 + gapVh) + (progress * (100 + gapVh));
            currentRotation = -10 + (progress * 10);
            currentScale = minScale + (smoothProgress * (maxScale - minScale));
            currentOpacity = 1;
          } else if (currentScroll >= enterEnd && currentScroll < leaveStart) {
            currentYMoveVh = 0; currentRotation = 0; currentScale = maxScale; currentOpacity = 1;
            if (worksContainer) {
              const scrollRange = worksContainer.scrollHeight - worksContainer.clientHeight;
              worksContainer.scrollTop = ((currentScroll - enterEnd) / (leaveStart - enterEnd)) * scrollRange;
            }
          } else if (currentScroll >= leaveStart && currentScroll < leaveEnd) {
            const progress = (currentScroll - leaveStart) / transitionLength;
            const pShrink = Math.max(0, Math.min(1, progress / 0.35));
            const pRotate = Math.max(0, Math.min(1, (progress - 0.15) / 0.40));
            const pExit = Math.max(0, Math.min(1, (progress - 0.70) / 0.30));
            const sShrink = pShrink < 0.5 ? 2 * pShrink * pShrink : 1 - Math.pow(-2 * pShrink + 2, 2) / 2;
            const sRotate = pRotate < 0.5 ? 2 * pRotate * pRotate : 1 - Math.pow(-2 * pRotate + 2, 2) / 2;
            const sExit = pExit < 0.5 ? 2 * pExit * pExit : 1 - Math.pow(-2 * pExit + 2, 2) / 2;
            currentScale = maxScale - (sShrink * (maxScale * 0.8));
            currentYMoveVh = (sShrink * 30) + (sExit * (100 + gapVh - 30));
            currentRotationY = sRotate * 70;
            currentOpacity = 1;
            currentRotation = 0;
            if (worksContainer) worksContainer.scrollTop = worksContainer.scrollHeight - worksContainer.clientHeight;
          } else {
            currentYMoveVh = 100 + gapVh; currentRotation = 0; currentRotationY = 70;
            currentScale = maxScale - (maxScale * 0.8); currentOpacity = 0;
          }
        } else if (i === 3) {
          // SECTION 4 LOGIC (Contact)
          const contactRevealStart = 3 * (transitionLength + pauseLength) - (transitionLength * 0.4);
          if (currentScroll < contactRevealStart) {
            currentYMoveVh = 0; currentOpacity = 0;
          } else if (currentScroll >= contactRevealStart && currentScroll < contactRevealStart + (transitionLength * 0.4)) {
            currentYMoveVh = 0; currentOpacity = (currentScroll - contactRevealStart) / (transitionLength * 0.4);
          } else {
            currentYMoveVh = 0; currentOpacity = 1;
          }
          currentRotation = 0; currentScale = 1;
        }

        const currentXMoveVw = 0;
        const secEl = sec as HTMLElement;
        secEl.style.transformOrigin = 'center center';
        secEl.style.transform = `perspective(2000px) translate3d(${currentXMoveVw}vw, ${currentYMoveVh}vh, 0) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) rotateZ(${currentRotation}deg) scale(${currentScale})`;
        secEl.style.opacity = currentOpacity.toString();
        
        const safeScale = Math.max(0.001, currentScale);
        bgImages.forEach((bg: HTMLElement) => {
          bg.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(${-currentRotationX}deg) translate3d(${-currentXMoveVw}vw, ${-currentYMoveVh}vh, 0)`;
        });

        const edTransitionStart = pauseLength + (transitionLength * 0.2);
        const edTransitionEnd = pauseLength + transitionLength;

        if (cachedBackdrop) {
          const section2Start = pauseLength;
          const section2End = (pauseLength + transitionLength) * 2;
          cachedBackdrop.style.mixBlendMode = (currentScroll >= section2Start && currentScroll < section2End) ? 'difference' : 'normal';
          cachedBackdrop.style.opacity = '1';
        }

        let edTranslateX = -50, edTranslateY = -50, edScale = 1, edPrimaryOpacity = 1;
        let edPrimaryColor = 'rgba(255, 255, 255, 0.76)';
        let homeLetterEX = 0, homeLetterEY = 0, homeLetterNX = 0, homeLetterNY = 0, homeEnScale = 1;
        let letterEX = 0, letterEY = 0, letterNX = 0, letterNY = 0, globalEnScale = 1;
        let globalEnTranslateX = -50, globalEnTranslateY = -50;

        // Position calculations
        if (currentScroll > edTransitionStart) {
          const progress = easeInOut(clamp((currentScroll - edTransitionStart) / Math.max(1, edTransitionEnd - edTransitionStart)));
          globalEnTranslateX = -50 + (progress * 18);
          globalEnTranslateY = -50 - (progress * 15);
          letterEX = progress * -1;
          letterEY = progress * -16;
          letterNX = progress * -86.7;
          letterNY = progress * 1;
          globalEnScale = 1 - (progress * 0.83);

          const section3EnterStart = pauseLength + transitionLength + pauseLength;
          const section3SettleEnd = section3EnterStart + (transitionLength * 0.8);
          
          if (currentScroll > section3EnterStart) {
            const progress3 = easeInOut(clamp((currentScroll - section3EnterStart) / Math.max(1, section3SettleEnd - section3EnterStart)));
            globalEnTranslateX += (progress3 * -10);
            globalEnTranslateY += (progress3 * 35);
            letterEX += (progress3 * 11);
            letterEY += (progress3 * -28.8);
            letterNX += (progress3 * 12.5);
            letterNY += (progress3 * -45.8);
            globalEnScale = Math.max(0.01, globalEnScale - (progress3 * 0.07));
          }
        }

        if (currentScroll > edTransitionStart) {
          const progress = easeInOut((currentScroll - edTransitionStart) / Math.max(1, edTransitionEnd - edTransitionStart));
          edTranslateX = -50 + (progress * 10);
          edTranslateY = -50 - (progress * 10);
          edScale = 1 - (progress * 0.83);
          edPrimaryOpacity = 1 - (progress * 0.58);
          edPrimaryColor = `rgba(255, 255, 255, ${0.76 - (progress * 0.2)})`;
          homeLetterEX = progress * 24;
          homeLetterEY = progress * -30;
          homeLetterNX = progress * -68;
          homeLetterNY = progress * -10;
          homeEnScale = 1 - (progress * 0.83);
        }

        // Parallax Layers for Section 1
        if (i === 0) {
          const edPrimary = sec.querySelector('.home-section__image-bg-text') as HTMLElement | null;
          const heroPortrait = sec.querySelector('.home-section__intro-image') as HTMLElement | null;

          if (edPrimary) {
            edPrimary.style.transform = `translate3d(${edTranslateX}%, ${edTranslateY}%, 0)`;
            edPrimary.style.opacity = `${edPrimaryOpacity}`;
            edPrimary.style.color = edPrimaryColor;
            const homeLetterE = edPrimary.querySelector('.home-letter-e') as HTMLElement | null;
            const homeLetterN = edPrimary.querySelector('.home-letter-n') as HTMLElement | null;
            if (homeLetterE) homeLetterE.style.transform = `translate3d(${homeLetterEX}%, ${homeLetterEY}%, 0) scale(${homeEnScale})`;
            if (homeLetterN) homeLetterN.style.transform = `translate3d(${homeLetterNX}%, ${homeLetterNY}%, 0) scale(${homeEnScale})`;
          }

          if (heroPortrait) {
            heroPortrait.style.transform = `scale(${edScale})`;
            heroPortrait.style.opacity = `${edPrimaryOpacity}`;
          }

          if (cachedBackdrop) {
            cachedBackdrop.style.transform = `translate3d(${globalEnTranslateX}%, ${globalEnTranslateY}%, 0)`;
            const letterE = cachedBackdrop.querySelector('.letter-e') as HTMLElement | null;
            const letterN = cachedBackdrop.querySelector('.letter-n') as HTMLElement | null;
            if (letterE) letterE.style.transform = `translate3d(${letterEX}%, ${letterEY}%, 0) scale(${globalEnScale})`;
            if (letterN) letterN.style.transform = `translate3d(${letterNX}%, ${letterNY}%, 0) scale(${globalEnScale})`;
          }

          // Parallax layers - batch query
          const parallaxLayers = sec.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>;
          const parallaxIntensity = 0.5;
          parallaxLayers.forEach(layer => {
            const speedY = parseFloat(layer.getAttribute('data-speed') || '0');
            const speedX = parseFloat(layer.getAttribute('data-speed-x') || '0');
            layer.style.transform = `translate3d(${currentScroll * speedX * parallaxIntensity}px, ${currentScroll * speedY * parallaxIntensity}px, 0)`;
          });

          // Text parallax
          const textElements = sec.querySelectorAll('.parallax-text') as NodeListOf<HTMLElement>;
          textElements.forEach(el => {
            el.style.transform = `translate3d(0, ${currentScroll * parseFloat(el.getAttribute('data-text-speed') || '0.2')}px, 0)`;
          });

          // Code lines parallax
          const codeLines = sec.querySelectorAll('.home-section__code-line') as NodeListOf<HTMLElement>;
          const codeYOffset = currentScroll * 0.12;
          codeLines.forEach((line) => { line.style.transform = `translate3d(0, ${codeYOffset}px, 0)`; });

          // Float elements with class-based direction lookup
          const floatElements = sec.querySelectorAll('.parallax-float') as NodeListOf<HTMLElement>;
          floatElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-float-speed') || '0.1');
            // Use classList lookup map for direction
            let xDirection = 0, yDirection = 0;
            const cl = el.classList;
            if (cl.contains('home-section__code--left')) { xDirection = -0.7; yDirection = 0.2; }
            else if (cl.contains('home-section__code--right')) { xDirection = 0.7; yDirection = -0.2; }
            else if (cl.contains('home-section__glyph--en-1')) { xDirection = -1.25; yDirection = 0.1; }
            else if (cl.contains('home-section__glyph--en-2')) { xDirection = 1.25; yDirection = 0.15; }
            else if (cl.contains('home-section__glyph--en-3')) { xDirection = 0; yDirection = -1.2; }
            else if (cl.contains('home-section__glyph--en-4')) { xDirection = -0.9; yDirection = -0.8; }
            else if (cl.contains('home-section__glyph--en-5')) { xDirection = 0.95; yDirection = -0.85; }
            else if (cl.contains('home-section__glyph--en-6')) { xDirection = -0.85; yDirection = 1.05; }
            else if (cl.contains('home-section__glyph--en-7')) { xDirection = 0.9; yDirection = 1.1; }
            const spread = currentScroll * speed;
            el.style.transform = `translate3d(${spread * 1.15 * xDirection}px, ${spread * 1.2 * yDirection}px, 0)`;
          });

          // Image parallax
          const imageWrap = sec.querySelector('.parallax-image') as HTMLElement;
          const imgElement = sec.querySelector('.parallax-img') as HTMLElement;
          if (imageWrap && imgElement) {
            const yOffsetWrap = currentScroll * parseFloat(imageWrap.getAttribute('data-img-speed') || '0.02');
            const yOffsetImg = currentScroll * parseFloat(imgElement.getAttribute('data-img-scroll') || '0.04');
            imageWrap.style.transform = `translate3d(0, ${yOffsetWrap}px, 0)`;
            imgElement.style.transform = `translate3d(0, ${yOffsetImg - yOffsetWrap}px, 0)`;
          } else if (imageWrap) {
            imageWrap.style.transform = `translate3d(0, ${currentScroll * parseFloat(imageWrap.getAttribute('data-img-speed') || '0.02')}px, 0)`;
          }

          // Image shadow parallax
          const imageShadow = sec.querySelector('.parallax-shadow') as HTMLElement;
          if (imageShadow) {
            const shadowSpeed = currentScroll * parseFloat(imageShadow.getAttribute('data-shadow-speed') || '0.06');
            imageShadow.style.transform = `translate3d(${shadowSpeed * 0.2}px, ${shadowSpeed}px, 0)`;
          }
        }

        if (inner) {
          inner.style.transform = `translate3d(0, 0, 0)`;
          inner.style.filter = `brightness(1)`;
        }

        const lockedContent = sec.querySelectorAll('.locked-content') as NodeListOf<HTMLElement>;
        lockedContent.forEach(content => {
          if (i === 0 && content.classList.contains('parallax-image')) return;
          const invScale = 1 / safeScale;
          if (i === 2 && currentScroll >= leaveStart) {
            content.style.transform = `scale(${invScale}) rotateY(${-currentRotationY}deg) rotateZ(${-currentRotation}deg) translate3d(${lockedContentXVw}vw, ${-currentYMoveVh}vh, 0)`;
            content.style.opacity = currentOpacity.toString();
          } else if (i === 2 && currentScroll >= enterStart && currentScroll < leaveStart) {
            content.style.transform = `scale(${invScale}) rotateZ(${-currentRotation}deg) translate3d(${lockedContentXVw}vw, ${-currentYMoveVh}vh, 0)`;
            content.style.opacity = '1';
          } else {
            content.style.transform = `scale(${invScale}) rotateZ(${-currentRotation}deg) translate3d(${lockedContentXVw}vw, ${-currentYMoveVh}vh, 0)`;
            content.style.opacity = currentOpacity.toString();
          }
        });

        const textParallaxBlocks = sec.querySelectorAll('.scroll-parallax-text') as NodeListOf<HTMLElement>;
        const referenceStart = i === 0 ? 0 : enterStart;
        textParallaxBlocks.forEach((block) => {
          const speed = parseFloat(block.getAttribute('data-speed') || '0.04');
          block.style.transform = `translate3d(0, ${(currentScroll - referenceStart) * speed * 0.08}px, 0)`;
        });

        const frameOverlay = sec.querySelector('.section-frame-overlay') as HTMLElement;
        if (frameOverlay) {
          frameOverlay.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(${-currentRotationX}deg) translate3d(${-currentXMoveVw}vw, ${-currentYMoveVh}vh, 0)`;
          frameOverlay.style.zIndex = '999';
        }

        const clipInner = sec.querySelector('.clip-gap-inner') as HTMLElement;
        if (clipInner) clipInner.style.clipPath = 'none';
        const clipOuter = sec.querySelector('.clip-gap-outer') as HTMLElement;
        if (clipOuter) clipOuter.style.clipPath = 'none';
      });

      // Experience progress event
      const experiencePanelCount = 4;
      const experienceActiveIndex = Math.max(0, Math.min(experiencePanelCount - 1, Math.floor((section4ProgressSnapshot * (experiencePanelCount - 1)) + 0.0001)));
      window.dispatchEvent(new CustomEvent('experience-progress', { detail: { progress: section4ProgressSnapshot, activeIndex: experienceActiveIndex } }));

      // Contact animations using cached elements
      const contactAnimDuration = transitionLength * 0.6;
      const contactEnterStart = 3 * (transitionLength + pauseLength);

      if (currentScroll < contactEnterStart) {
        if (contactIcon) { contactIcon.style.transform = `rotateY(90deg)`; contactIcon.style.opacity = '0'; }
        contactTexts?.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translate(0,0)'; });
      } else if (currentScroll >= contactEnterStart && currentScroll < contactEnterStart + contactAnimDuration) {
        const p = (currentScroll - contactEnterStart) / contactAnimDuration;
        const eased = 1 - Math.pow(1 - p, 3);
        if (contactIcon) { contactIcon.style.transform = `rotateY(${90 - eased * 90}deg)`; contactIcon.style.opacity = String(eased); }
        const textEased = 1 - Math.pow(1 - Math.min(1, Math.max(0, (p - 0.2) / 0.8)), 3);
        contactTexts?.forEach(el => { el.style.opacity = String(textEased); el.style.transform = `translateY(${(1 - textEased) * 20}px)`; });
      } else {
        if (contactIcon) { contactIcon.style.transform = `rotateY(0deg)`; contactIcon.style.opacity = '1'; }
        contactTexts?.forEach(el => { el.style.opacity = '1'; el.style.transform = 'translate(0,0)'; });
      }
    };

    // Attach scroll handler with rAF throttling for fallback
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
  }, [onSectionChange, cacheDom]);
};

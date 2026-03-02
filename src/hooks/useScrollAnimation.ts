import { useEffect, useRef } from 'react';

export const useScrollAnimation = (onSectionChange: (index: number) => void) => {
  const lenisRef = useRef<any>(null);

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
    let vh = window.innerHeight;
    const handleResize = () => { vh = window.innerHeight; };
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const currentScroll = lenisRef.current?.scroll ?? (window.pageYOffset || document.documentElement.scrollTop);
      
      // Update section indicator
      const newActiveIndex = Math.max(0, Math.min(4, Math.floor((currentScroll + vh) / (vh * 1.5))));
      onSectionChange(newActiveIndex);

      // Update progress bar
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (currentScroll / maxScroll) * 100;
      const progressEl = document.getElementById('section-progress');
      if (progressEl) progressEl.style.width = `${scrollProgress}%`;

      const transitionLength = vh;
      const pauseLength = vh * 0.3; // Reduced from 0.5 to 0.3 for less space
      const gapVh = 25; // Reduced from 40 to 25

      // --- ADJUST SCALE HERE ---
      const minScale = 0.5; // Scale when dropping in or out
      const maxScale = 1.2;  // Scale when perfectly centered (change to 1.3 for zoom effect)

      // Section 4 (Experience) gets a dedicated horizontal-scroll phase.
      const section4EnterStart = ((3 - 1) * (transitionLength + pauseLength)) + pauseLength;
      const section4EnterEnd = section4EnterStart + transitionLength;
      const section4HorizontalLength = vh * 2.6;
      const section4HorizontalStart = section4EnterEnd;
      const section4HorizontalEnd = section4HorizontalStart + section4HorizontalLength;
      const section4LeaveStart = section4HorizontalEnd;
      const section4LeaveEnd = section4LeaveStart + transitionLength;

      // Section 5 can only start after the horizontal phase of section 4 is complete.
      const section5EnterStart = section4LeaveStart;
      const section5EnterEnd = section5EnterStart + transitionLength;
      let section4ProgressSnapshot = 0;

      const sections = document.querySelectorAll('.stack-section');
      sections.forEach((sec, i) => {
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
        let section4HorizontalProgress = 0;

        if (i === 0) {
          // --- SECTION 1 LOGIC ---
          const sec2EnterEnd = pauseLength + transitionLength;

          if (currentScroll <= sec2EnterEnd) {
            currentYMoveVh = 0;
          } else {
            currentYMoveVh = 100 + gapVh;
          }
          currentRotation = 0;
          currentScale = 1;
        } else if (i === 4) {
          // SECTION 5 LOGIC (CONTACT - Final Section)
          if (currentScroll < section5EnterStart) {
            currentYMoveVh = -100;
          } else if (currentScroll >= section5EnterStart && currentScroll < section5EnterEnd) {
            let progress = (currentScroll - section5EnterStart) / transitionLength;
            currentYMoveVh = -100 + (progress * 100);
          } else {
            currentYMoveVh = 0;
          }
          currentRotation = 0;
          currentScale = 1;
        } else if (i === 3) {
          // SECTION 4 LOGIC (EXPERIENCE - hold in center and scroll left-to-right first)
          if (currentScroll < enterStart) {
            currentYMoveVh = -(100 + gapVh);
            currentRotation = -10;
            currentScale = minScale;
            currentOpacity = 1;
            lockedContentXVw = 0;
            section4HorizontalProgress = 0;
          } else if (currentScroll >= enterStart && currentScroll < enterEnd) {
            let progress = (currentScroll - enterStart) / transitionLength;
            // Adjusted to reach max scale at 75% instead of 50%
            let smoothProgress = progress < 0.75 ? (progress / 0.75) * (progress / 0.75) : 1;
            currentYMoveVh = -(100 + gapVh) + (progress * (100 + gapVh));
            currentRotation = -10 + (progress * 10);
            currentScale = minScale + (smoothProgress * (maxScale - minScale));
            currentOpacity = 1;
            lockedContentXVw = 0;
            section4HorizontalProgress = 0;
          } else if (currentScroll >= enterEnd && currentScroll < section4LeaveStart) {
            currentYMoveVh = 0;
            currentRotation = 0;
            currentScale = maxScale;
            currentOpacity = 1;
            const horizontalProgress = Math.max(
              0,
              Math.min(1, (currentScroll - section4HorizontalStart) / section4HorizontalLength)
            );
            const smoothHorizontalProgress = horizontalProgress < 0.5
              ? 2 * horizontalProgress * horizontalProgress
              : 1 - Math.pow(-2 * horizontalProgress + 2, 2) / 2;
            lockedContentXVw = 0;
            section4HorizontalProgress = smoothHorizontalProgress;
          } else if (currentScroll >= section4LeaveStart && currentScroll < section4LeaveEnd) {
            let progress = (currentScroll - section4LeaveStart) / transitionLength;
            
            // Overlapping Animation Logic:
            // Phase 1: Shrink/Move to bottom center (0.0 to 0.35)
            // Phase 2: Rotate (centered) (0.15 to 0.55) - Starts midway of Phase 1
            // Phase 3: Move out and Fade (0.7 to 1.0)
            
            let pShrink = Math.max(0, Math.min(1, progress / 0.35));
            let pRotate = Math.max(0, Math.min(1, (progress - 0.15) / 0.40));
            let pExit = Math.max(0, Math.min(1, (progress - 0.70) / 0.30));

            let sShrink = pShrink < 0.5 ? 2 * pShrink * pShrink : 1 - Math.pow(-2 * pShrink + 2, 2) / 2;
            let sRotate = pRotate < 0.5 ? 2 * pRotate * pRotate : 1 - Math.pow(-2 * pRotate + 2, 2) / 2;
            let sExit = pExit < 0.5 ? 2 * pExit * pExit : 1 - Math.pow(-2 * pExit + 2, 2) / 2;

            currentScale = maxScale - (sShrink * (maxScale * 0.8));
            // Move down explicitly: center pull (30) then move out (100+gapVh-30)
            currentYMoveVh = (sShrink * 30) + (sExit * (100 + gapVh - 30));
            currentRotationY = sRotate * 70; // Changed from 90 to 70
            currentOpacity = 1 - sExit;
            
            currentRotation = 0; // No Z spin
            lockedContentXVw = 0;
            section4HorizontalProgress = 1;
          } else {
            currentYMoveVh = 100 + gapVh;
            currentRotation = 0;
            currentRotationY = 70; // Changed from 90 to 70
            currentScale = maxScale - (maxScale * 0.8);
            currentOpacity = 0;
            lockedContentXVw = 0;
            section4HorizontalProgress = 1;
          }
          section4ProgressSnapshot = section4HorizontalProgress;
        } else {
          // SECTIONS 2, 3 LOGIC (Dynamic Folders)
          if (currentScroll < enterStart) {
            currentYMoveVh = -(100 + gapVh);
            currentRotation = -10;
            currentScale = minScale;
            currentOpacity = 1;
          } else if (currentScroll >= enterStart && currentScroll < enterEnd) {
            let progress = (currentScroll - enterStart) / transitionLength;
            // Adjusted to reach max scale at 75% instead of 50%
            let smoothProgress = progress < 0.75 ? (progress / 0.75) * (progress / 0.75) : 1;
            currentYMoveVh = -(100 + gapVh) + (progress * (100 + gapVh));
            currentRotation = -10 + (progress * 10);
            currentScale = minScale + (smoothProgress * (maxScale - minScale));
            currentOpacity = 1;
          } else if (currentScroll >= enterEnd && currentScroll < leaveStart) {
            currentYMoveVh = 0;
            currentRotation = 0;
            currentScale = maxScale;
            currentOpacity = 1;
          } else if (currentScroll >= leaveStart && currentScroll < leaveEnd) {
            let progress = (currentScroll - leaveStart) / transitionLength;
            let smoothProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            currentYMoveVh = progress * (100 + gapVh);
            currentRotation = progress * 10;
            currentScale = maxScale - (smoothProgress * (maxScale - minScale));
            currentOpacity = 1;
          } else {
            currentYMoveVh = 100 + gapVh;
            currentRotation = 10;
            currentScale = minScale;
            currentOpacity = 1;
          }
        }

        let currentXMoveVw = 0;
        // Section 5 now rotates centered
        (sec as HTMLElement).style.transformOrigin = 'center center';
        currentXMoveVw = 0;

        // --- 1. Apply Movement, Rotation, and Scale ---
        (sec as HTMLElement).style.transform = `perspective(2000px) translate3d(${currentXMoveVw}vw, ${currentYMoveVh}vh, 0) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) rotateZ(${currentRotation}deg) scale(${currentScale})`;
        (sec as HTMLElement).style.opacity = currentOpacity.toString();
        
        // --- 2. Counter-Transform Backgrounds (LOCKED IMAGE) ---
        bgImages.forEach(bg => {
          const safeScale = Math.max(0.001, currentScale);
          bg.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(${-currentRotationX}deg) translate3d(${-currentXMoveVw}vw, ${-currentYMoveVh}vh, 0)`;
        });

        // --- 2.5. Parallax Layers for Section 1 ---
        if (i === 0) {
          const parallaxLayers = sec.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>;
          
          parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed') || '0');
            // Improved parallax calculation for smoother sync
            const parallaxIntensity = 0.3; // Reduced for smoother effect
            const yOffset = currentScroll * speed * parallaxIntensity;
            
            // Add easing for smoother transitions
            layer.style.transform = `translateY(${yOffset}px)`;
            layer.style.transition = 'transform 0.1s ease-out';
          });
        }

        if (inner) {
          inner.style.transform = `translate3d(0, 0, 0)`;
          inner.style.filter = `brightness(1)`;
        }

        // --- 2.6. Lock text content in place like images ---
        const lockedContent = sec.querySelectorAll('.locked-content') as NodeListOf<HTMLElement>;
        lockedContent.forEach(content => {
          const safeScale = Math.max(0.001, currentScale);
          content.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) translate3d(${lockedContentXVw}vw, ${-currentYMoveVh}vh, 0)`;
        });

        // --- 2.7. Lock section frame overlay in place ---
        const frameOverlay = sec.querySelector('.section-frame-overlay') as HTMLElement;
        if (frameOverlay) {
          const safeScale = Math.max(0.001, currentScale);
          frameOverlay.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(${-currentRotationX}deg) translate3d(${-currentXMoveVw}vw, ${-currentYMoveVh}vh, 0)`;
          frameOverlay.style.zIndex = '999';
        }

        const clipInner = sec.querySelector('.clip-gap-inner') as HTMLElement;
        if (clipInner) {
          // Keep flat rectangle - no folder morphing
          clipInner.style.clipPath = 'none';
        }

        const clipOuter = sec.querySelector('.clip-gap-outer') as HTMLElement;
        if (clipOuter) {
          // Keep flat rectangle - no folder morphing
          clipOuter.style.clipPath = 'none';
        }
      });

      const experiencePanelCount = 4;
      const experienceActiveIndex = Math.max(
        0,
        Math.min(
          experiencePanelCount - 1,
          Math.floor((section4ProgressSnapshot * (experiencePanelCount - 1)) + 0.0001)
        )
      );
      window.dispatchEvent(
        new CustomEvent('experience-progress', {
          detail: {
            progress: section4ProgressSnapshot,
            activeIndex: experienceActiveIndex,
          },
        })
      );


      // Icon and Text animation for Section 5 (CONTACT)
      const contactIcon = document.getElementById('contact-icon') as HTMLElement;
      const contactTexts = document.querySelectorAll('.contact-text') as NodeListOf<HTMLElement>;
      
      const contactSecStart = section5EnterStart;
      const contactSecEnd = section5EnterEnd;

      if (currentScroll >= contactSecStart && currentScroll <= contactSecEnd) {
        let p = (currentScroll - contactSecStart) / transitionLength;
        
        // Icon Animation (0.7 to 1.0)
        let iconP = Math.max(0, Math.min(1, (p - 0.7) / 0.3));
        let easeIcon = 1 - Math.pow(1 - iconP, 3);
        if (contactIcon) {
          let rotY = 90 - (easeIcon * 90);
          contactIcon.style.transform = `rotateY(${rotY}deg)`;
          contactIcon.style.opacity = String(easeIcon);
        }

        // Text Animation (starts slightly after icon starts: 0.8 to 1.0)
        let textP = Math.max(0, Math.min(1, (p - 0.8) / 0.2));
        let easeText = 1 - Math.pow(1 - textP, 3);
        contactTexts.forEach(el => {
          el.style.opacity = String(easeText);
          // Optional: Subtle slide effect
          const isLeft = el.classList.contains('text-left');
          const isRight = el.classList.contains('text-right');
          const slideDist = (1 - easeText) * 30;
          if (isLeft) el.style.transform = `translateX(${-slideDist}px)`;
          else if (isRight) el.style.transform = `translateX(${slideDist}px)`;
          else el.style.transform = `translateY(${slideDist}px)`;
        });

      } else if (currentScroll > contactSecEnd) {
        if (contactIcon) {
          contactIcon.style.transform = `rotateY(0deg)`;
          contactIcon.style.opacity = '1';
        }
        contactTexts.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'translate(0,0)';
        });
      } else {
        if (contactIcon) {
          contactIcon.style.transform = `rotateY(90deg)`;
          contactIcon.style.opacity = '0';
        }
        contactTexts.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translate(0,0)';
        });
      }
    };

    if (lenisRef.current) {
      lenisRef.current.on('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onSectionChange]);
};

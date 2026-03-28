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

      // Section 4 (Experience) uses standard timing but has a custom shrink/flip exit animation
      const section4LeaveStart = 3 * (transitionLength + pauseLength) + pauseLength;
      const section4LeaveEnd = section4LeaveStart + transitionLength;

      let section4ProgressSnapshot = 0;

      const sections = document.querySelectorAll('.stack-section');
      
      // Ensure first section is visible on initial load
      if (currentScroll < 10 && sections[0]) {
        (sections[0] as HTMLElement).style.transform = 'translate3d(0vw, 0vh, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';
        (sections[0] as HTMLElement).style.opacity = '1';
      }
      
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
          // SECTION 5 LOGIC (CONTACT)
          if (currentScroll < section4LeaveStart) {
            currentYMoveVh = 100;
          } else {
            currentYMoveVh = 0;
          }
          currentRotation = 0;
          currentScale = 1;
        } else if (i === 3) {
          // SECTION 4 LOGIC (EXPERIENCE)
          if (currentScroll < enterStart) {
            currentYMoveVh = -(100 + gapVh);
            currentRotation = -10;
            currentScale = minScale;
            currentOpacity = 1;
            lockedContentXVw = 0;
            section4HorizontalProgress = 0;
          } else if (currentScroll >= enterStart && currentScroll < enterEnd) {
            let progress = (currentScroll - enterStart) / transitionLength;
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
            lockedContentXVw = 0;
            section4HorizontalProgress = 0;
          } else if (currentScroll >= section4LeaveStart && currentScroll < section4LeaveEnd) {
            let progress = (currentScroll - section4LeaveStart) / transitionLength;

            let pShrink = Math.max(0, Math.min(1, progress / 0.35));
            let pRotate = Math.max(0, Math.min(1, (progress - 0.15) / 0.40));
            let pExit = Math.max(0, Math.min(1, (progress - 0.70) / 0.30));

            let sShrink = pShrink < 0.5 ? 2 * pShrink * pShrink : 1 - Math.pow(-2 * pShrink + 2, 2) / 2;
            let sRotate = pRotate < 0.5 ? 2 * pRotate * pRotate : 1 - Math.pow(-2 * pRotate + 2, 2) / 2;
            let sExit = pExit < 0.5 ? 2 * pExit * pExit : 1 - Math.pow(-2 * pExit + 2, 2) / 2;

            currentScale = maxScale - (sShrink * (maxScale * 0.8));
            currentYMoveVh = (sShrink * 30) + (sExit * (100 + gapVh - 30));
            currentRotationY = sRotate * 70;
            currentOpacity = 1 - sExit;

            currentRotation = 0;
            lockedContentXVw = 0;
            section4HorizontalProgress = 1;
          } else {
            currentYMoveVh = 100 + gapVh;
            currentRotation = 0;
            currentRotationY = 70;
            currentScale = maxScale - (maxScale * 0.8);
            currentOpacity = 0;
            lockedContentXVw = 0;
            section4HorizontalProgress = 1;
          }
          section4ProgressSnapshot = section4HorizontalProgress;
        } else if (i === 1) {
          // SECTION 2 LOGIC (About) — enters from TOP (slides down)
          if (currentScroll < enterStart) {
            currentYMoveVh = -(100 + gapVh);
            currentRotation = -10;
            currentScale = minScale;
            currentOpacity = 1;
          } else if (currentScroll >= enterStart && currentScroll < enterEnd) {
            let progress = (currentScroll - enterStart) / transitionLength;
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
            currentYMoveVh = 0;
            currentRotation = 0;
            currentScale = maxScale;
            currentOpacity = 1;
          } else {
            currentYMoveVh = 100 + gapVh;
            currentRotation = 10;
            currentScale = minScale;
            currentOpacity = 1;
          }
        } else {
          // SECTION 3 LOGIC (Projects) — enters from TOP
          if (currentScroll < enterStart) {
            currentYMoveVh = -(100 + gapVh);
            currentRotation = -10;
            currentScale = minScale;
            currentOpacity = 1;
          } else if (currentScroll >= enterStart && currentScroll < enterEnd) {
            let progress = (currentScroll - enterStart) / transitionLength;
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
            currentYMoveVh = 0;
            currentRotation = 0;
            currentScale = maxScale;
            currentOpacity = 1;
          } else {
            currentYMoveVh = 100 + gapVh;
            currentRotation = 10;
            currentScale = minScale;
            currentOpacity = 1;
          }
        }

        let currentXMoveVw = 0;
        (sec as HTMLElement).style.transformOrigin = 'center center';
        currentXMoveVw = 0;

        (sec as HTMLElement).style.transform = `perspective(2000px) translate3d(${currentXMoveVw}vw, ${currentYMoveVh}vh, 0) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) rotateZ(${currentRotation}deg) scale(${currentScale})`;
        (sec as HTMLElement).style.opacity = currentOpacity.toString();
        
        bgImages.forEach(bg => {
          const safeScale = Math.max(0.001, currentScale);
          bg.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(${-currentRotationX}deg) translate3d(${-currentXMoveVw}vw, ${-currentYMoveVh}vh, 0)`;
        });

        // Parallax Layers for Section 1
        if (i === 0) {
          const parallaxLayers = sec.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>;
          
          parallaxLayers.forEach(layer => {
            const speedY = parseFloat(layer.getAttribute('data-speed') || '0');
            const speedX = parseFloat(layer.getAttribute('data-speed-x') || '0');
            const parallaxIntensity = 0.5;
            const yOffset = currentScroll * speedY * parallaxIntensity;
            const xOffset = currentScroll * speedX * parallaxIntensity;
            
            layer.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
            layer.style.transition = 'transform 0.08s ease-out';
          });

          // Text parallax with fade
          const textElements = sec.querySelectorAll('.parallax-text') as NodeListOf<HTMLElement>;
          textElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-text-speed') || '0.2');
            const yOffset = currentScroll * speed;
            el.style.transform = `translate3d(0, ${yOffset}px, 0)`;
          });

          // Code lines parallax - both blocks move down together
          const codeLines = sec.querySelectorAll('.home-section__code-line') as NodeListOf<HTMLElement>;
          codeLines.forEach((line) => {
            const speed = 0.12;
            const yOffset = currentScroll * speed;
            line.style.transform = `translate3d(0, ${yOffset}px, 0)`;
          });
          const floatElements = sec.querySelectorAll('.parallax-float') as NodeListOf<HTMLElement>;
          floatElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-float-speed') || '0.1');
            
            // Determine direction based on position class
            let xDirection = 0;
            let yDirection = 0;
            
            if (el.classList.contains('home-section__glyph--left') || 
                el.classList.contains('home-section__code--left') ||
                el.classList.contains('home-section__glyph--topleft') ||
                el.classList.contains('home-section__glyph--bottomleft')) {
              xDirection = -1; // Move LEFT
            } else if (el.classList.contains('home-section__glyph--right') || 
                       el.classList.contains('home-section__code--right') ||
                       el.classList.contains('home-section__glyph--topright') ||
                       el.classList.contains('home-section__glyph--bottomright')) {
              xDirection = 1; // Move RIGHT
            }
            
            if (el.classList.contains('home-section__glyph--top')) {
              yDirection = -1; // Move UP faster
            } else if (el.classList.contains('home-section__glyph--bottom')) {
              yDirection = 1; // Move DOWN
            }
            
            const yOffset = currentScroll * speed * (1 + yDirection * 0.3);
            const xOffset = currentScroll * speed * 0.4 * xDirection;
            el.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
            el.style.transition = 'transform 0.1s ease-out';
          });

          // Image parallax - vertical drift only (no scale)
          const imageWrap = sec.querySelector('.parallax-image') as HTMLElement;
          const imgElement = sec.querySelector('.parallax-img') as HTMLElement;
          
          if (imageWrap && imgElement) {
            // Both exist - create layered parallax effect
            const wrapSpeed = parseFloat(imageWrap.getAttribute('data-img-speed') || '0.02');
            const imgSpeed = parseFloat(imgElement.getAttribute('data-img-scroll') || '0.04');
            const yOffsetWrap = currentScroll * wrapSpeed;
            const yOffsetImg = currentScroll * imgSpeed;
            // Container moves slower, image moves faster for depth
            imageWrap.style.transform = `translate3d(0, ${yOffsetWrap}px, 0)`;
            imgElement.style.transform = `translate3d(0, ${yOffsetImg - yOffsetWrap}px, 0)`;
            imgElement.style.transition = 'transform 0.08s ease-out';
          } else if (imageWrap) {
            // Only container exists
            const speed = parseFloat(imageWrap.getAttribute('data-img-speed') || '0.02');
            const yOffset = currentScroll * speed;
            imageWrap.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            imageWrap.style.transition = 'transform 0.1s ease-out';
          }

          // Image shadow parallax (moves faster for depth)
          const imageShadow = sec.querySelector('.parallax-shadow') as HTMLElement;
          if (imageShadow) {
            const speed = parseFloat(imageShadow.getAttribute('data-shadow-speed') || '0.06');
            const yOffset = currentScroll * speed;
            const xOffset = currentScroll * speed * 0.2;
            imageShadow.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
            imageShadow.style.transition = 'transform 0.08s ease-out';
          }
        }

        if (inner) {
          inner.style.transform = `translate3d(0, 0, 0)`;
          inner.style.filter = `brightness(1)`;
        }

        const lockedContent = sec.querySelectorAll('.locked-content') as NodeListOf<HTMLElement>;
        lockedContent.forEach(content => {
          // Skip parallax elements in home section - they handle their own transforms
          if (i === 0 && (content.classList.contains('parallax-image') || 
                         content.querySelector('.parallax-img'))) {
            return;
          }
          
          const safeScale = Math.max(0.001, currentScale);
          if (i === 3 && currentScroll >= section4LeaveStart) {
            const contentExitScale = Math.max(0.72, 1 - section4HorizontalProgress * 0.28);
            content.style.transform = `scale(${contentExitScale / safeScale}) rotateZ(${-currentRotation}deg) translate3d(${lockedContentXVw}vw, ${-currentYMoveVh}vh, 0)`;
          } else {
            content.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) translate3d(${lockedContentXVw}vw, ${-currentYMoveVh}vh, 0)`;
          }
        });

        const textParallaxBlocks = sec.querySelectorAll('.scroll-parallax-text') as NodeListOf<HTMLElement>;
        textParallaxBlocks.forEach((block) => {
          const speed = parseFloat(block.getAttribute('data-speed') || '0.04');
          const referenceStart = i === 0 ? 0 : enterStart;
          const localScroll = currentScroll - referenceStart;
          const yOffset = localScroll * speed * 0.08;
          block.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        });

        const frameOverlay = sec.querySelector('.section-frame-overlay') as HTMLElement;
        if (frameOverlay) {
          const safeScale = Math.max(0.001, currentScale);
          frameOverlay.style.transform = `scale(${1 / safeScale}) rotateZ(${-currentRotation}deg) rotateY(${-currentRotationY}deg) rotateX(${-currentRotationX}deg) translate3d(${-currentXMoveVw}vw, ${-currentYMoveVh}vh, 0)`;
          frameOverlay.style.zIndex = '999';
        }

        const clipInner = sec.querySelector('.clip-gap-inner') as HTMLElement;
        if (clipInner) {
          clipInner.style.clipPath = 'none';
        }

        const clipOuter = sec.querySelector('.clip-gap-outer') as HTMLElement;
        if (clipOuter) {
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

      const contactIcon = document.getElementById('contact-icon') as HTMLElement;
      const contactTexts = document.querySelectorAll('.contact-text') as NodeListOf<HTMLElement>;
      const contactAnimDuration = transitionLength * 0.6;

      if (currentScroll < section4LeaveEnd) {
        if (contactIcon) {
          contactIcon.style.transform = `rotateY(90deg)`;
          contactIcon.style.opacity = '0';
        }
        contactTexts.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translate(0,0)';
        });
      } else if (currentScroll >= section4LeaveEnd && currentScroll < section4LeaveEnd + contactAnimDuration) {
        const p = (currentScroll - section4LeaveEnd) / contactAnimDuration;
        const eased = 1 - Math.pow(1 - p, 3);
        if (contactIcon) {
          contactIcon.style.transform = `rotateY(${90 - eased * 90}deg)`;
          contactIcon.style.opacity = String(eased);
        }
        const textEased = 1 - Math.pow(1 - Math.min(1, Math.max(0, (p - 0.2) / 0.8)), 3);
        contactTexts.forEach(el => {
          el.style.opacity = String(textEased);
          el.style.transform = `translateY(${(1 - textEased) * 20}px)`;
        });
      } else {
        if (contactIcon) {
          contactIcon.style.transform = `rotateY(0deg)`;
          contactIcon.style.opacity = '1';
        }
        contactTexts.forEach(el => {
          el.style.opacity = '1';
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

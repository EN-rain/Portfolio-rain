import { useCallback, useRef } from 'react';
import type { DomCache, SectionCache } from './types';

export const useDomCache = () => {
  const domCacheRef = useRef<DomCache>({} as DomCache);
  const vhRef = useRef(window.innerHeight);

  const cacheDom = useCallback(() => {
    const sections = document.querySelectorAll('.stack-section');
    const sectionCaches: SectionCache[] = Array.from(sections).map(sec => ({
      parallaxContent: sec.querySelector('.parallax-content') as HTMLElement | null,
      lockedContent: sec.querySelectorAll('.locked-content') as NodeListOf<HTMLElement>,
      textParallaxBlocks: sec.querySelectorAll('.scroll-parallax-text') as NodeListOf<HTMLElement>,
      frameOverlay: sec.querySelector('.section-frame-overlay') as HTMLElement | null,
      clipInner: sec.querySelector('.clip-gap-inner') as HTMLElement | null,
      clipOuter: sec.querySelector('.clip-gap-outer') as HTMLElement | null,
      bgImages: sec.querySelectorAll('.bg-image') as NodeListOf<HTMLElement>,
      edPrimaryElements: sec.querySelectorAll('.home-section__image-bg-text') as NodeListOf<HTMLElement>,
      heroPortrait: sec.querySelector('.home-section__intro-image') as HTMLElement | null,
      parallaxLayers: sec.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>,
      textElements: sec.querySelectorAll('.parallax-text') as NodeListOf<HTMLElement>,
      codeLines: sec.querySelectorAll('.home-section__code-line') as NodeListOf<HTMLElement>,
      floatElements: sec.querySelectorAll('.parallax-float') as NodeListOf<HTMLElement>,
      imageWrap: sec.querySelector('.parallax-image') as HTMLElement | null,
      imageShadow: sec.querySelector('.parallax-shadow') as HTMLElement | null,
      worksScrollContainer: sec.querySelector('.works-scroll-container') as HTMLElement | null,
      parallaxImg: sec.querySelector('.parallax-img') as HTMLElement | null,
      section2Desc: sec.querySelector('[data-section2="desc"]') as HTMLElement | null,
      section2Image: sec.querySelector('[data-section2="image"]') as HTMLElement | null,
      section2Skills: sec.querySelector('[data-section2="skills"]') as HTMLElement | null,
      aboutFadeTargets: sec.querySelectorAll('[data-about-fade]') as NodeListOf<HTMLElement>,
    }));

    domCacheRef.current = {
      sections,
      sectionCaches,
      globalEnBackdrop: document.querySelector('.global-en-backdrop') as HTMLElement | null,
      experienceEnSpan: document.querySelector('[data-en-target="experience-en"]') as HTMLElement | null,
      progressEl: document.getElementById('section-progress'),
      root: document.getElementById('root'),
      contactIcon: document.getElementById('contact-icon') as HTMLElement | null,
      contactHeading: document.querySelector('.contact-copy h2') as HTMLElement | null,
      contactSubtext: document.querySelector('.contact-copy p') as HTMLElement | null,
      contactGrid: document.querySelector('.contact-grid') as HTMLElement | null,
      contactTexts: document.querySelectorAll('.contact-text') as NodeListOf<HTMLElement>,
    };
  }, []);

  return { domCacheRef, vhRef, cacheDom };
};

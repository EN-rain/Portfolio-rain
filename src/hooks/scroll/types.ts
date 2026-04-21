export interface SectionCache {
  parallaxContent: HTMLElement | null;
  lockedContent: NodeListOf<HTMLElement>;
  textParallaxBlocks: NodeListOf<HTMLElement>;
  frameOverlay: HTMLElement | null;
  clipInner: HTMLElement | null;
  clipOuter: HTMLElement | null;
  bgImages: NodeListOf<HTMLElement>;
  // For specific sections (cached globally to be safe)
  edPrimaryElements: NodeListOf<HTMLElement>;
  heroPortrait: HTMLElement | null;
  parallaxLayers: NodeListOf<HTMLElement>;
  textElements: NodeListOf<HTMLElement>;
  codeLines: NodeListOf<HTMLElement>;
  floatElements: NodeListOf<HTMLElement>;
  imageWrap: HTMLElement | null;
  imageShadow: HTMLElement | null;
  worksScrollContainer: HTMLElement | null;
  parallaxImg: HTMLElement | null;
  section2Desc: HTMLElement | null;
  section2Image: HTMLElement | null;
  section2Skills: HTMLElement | null;
  aboutFadeTargets: NodeListOf<HTMLElement>;
}

export interface DomCache {
  sections: NodeListOf<Element> | null;
  sectionCaches: SectionCache[];
  globalEnBackdrop: HTMLElement | null;
  experienceEnSpan: HTMLElement | null;
  progressEl: HTMLElement | null;
  root: HTMLElement | null;
  contactIcon: HTMLElement | null;
  contactTexts: NodeListOf<HTMLElement> | null;
}

export interface ScrollContext {
  currentScroll: number;
  vh: number;
  transitionLength: number;
  pauseLength: number;
  sectionUnit: number;
  gapVh: number;
  bgTransitionSpeed: number;
}

export interface SectionAnimationState {
  currentYMoveVh: number;
  currentRotation: number;
  currentRotationX: number;
  currentRotationY: number;
  currentScale: number;
  currentOpacity: number;
  lockedContentXVw: number;
}

export interface LenisInstance {
  scroll: number;
  raf: (time: number) => void;
  on: (event: string, callback: (e: any) => void) => void;
  scrollTo: (value: number | string | HTMLElement) => void;
  destroy: () => void;
}

declare global {
  interface Window {
    Lenis: new (options: LenisOptions) => LenisInstance;
  }
}

export interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal' | 'both';
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  lerp?: number;
  wheelMultiplier?: number;
  infinite?: boolean;
}

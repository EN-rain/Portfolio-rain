export interface DomCache {
  sections: NodeListOf<Element> | null;
  globalEnBackdrop: HTMLElement | null;
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
  scrollTo: (value: number) => void;
  destroy: () => void;
}

declare global {
  interface Window {
    Lenis: new (options: LenisOptions) => LenisInstance;
  }
}

export interface LenisOptions {
  duration: number;
  easing: (t: number) => number;
  smoothWheel: boolean;
}

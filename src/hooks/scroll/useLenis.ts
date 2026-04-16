import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import type { LenisInstance } from './types';

export const useLenis = () => {
  const lenisRef = useRef<LenisInstance | null>(null);
  const rafIdRef = useRef<number>();

  useEffect(() => {
    // Initialize Lenis directly from npm package
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      lerp: 0.08,
    } as any) as unknown as LenisInstance;

    lenisRef.current = lenis;

    // Optimized RAF loop
    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    // Handle custom scroll events from navigation
    const handleLenisScroll = (e: CustomEvent<number>) => {
      lenis.scrollTo(e.detail);
    };
    window.addEventListener('lenis-scroll', handleLenisScroll as EventListener);
    (lenis as any)._customHandler = handleLenisScroll;

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener('lenis-scroll', handleLenisScroll as EventListener);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
};

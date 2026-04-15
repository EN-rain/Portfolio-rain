import { useEffect, useRef } from 'react';
import type { LenisInstance } from './types';

export const useLenis = () => {
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lenis@1.1.13/dist/lenis.min.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.Lenis) {
        lenisRef.current = new window.Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        const raf = (time: number) => {
          lenisRef.current?.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        const handleLenisScroll = (e: any) => {
          lenisRef.current?.scrollTo(e.detail);
        };
        window.addEventListener('lenis-scroll', handleLenisScroll);
        (lenisRef.current as any)._customHandler = handleLenisScroll;
      }
    };

    return () => {
      if (lenisRef.current && (lenisRef.current as any)._customHandler) {
        window.removeEventListener('lenis-scroll', (lenisRef.current as any)._customHandler);
      }
      document.head.removeChild(script);
      lenisRef.current?.destroy();
    };
  }, []);

  return lenisRef;
};

import { useCallback, useRef } from 'react';
import type { DomCache } from './types';

export const useDomCache = () => {
  const domCacheRef = useRef<DomCache>({} as DomCache);
  const vhRef = useRef(window.innerHeight);

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

  return { domCacheRef, vhRef, cacheDom };
};

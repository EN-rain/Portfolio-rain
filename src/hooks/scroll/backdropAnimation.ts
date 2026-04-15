import type { ScrollContext } from './types';

export const animateBackdrop = (
  currentScroll: number,
  ctx: ScrollContext,
  cachedBackdrop: HTMLElement | null
): void => {
  if (!cachedBackdrop) return;

  const { transitionLength, pauseLength } = ctx;
  const section2Start = pauseLength;
  const section2End = (pauseLength + transitionLength) * 2;
  const section3EnterStart = pauseLength + transitionLength + pauseLength;
  const section3SettleEnd = section3EnterStart + transitionLength * 0.8;

  cachedBackdrop.style.mixBlendMode = currentScroll >= section2Start && currentScroll < section2End ? 'difference' : 'normal';

  if (currentScroll >= section3SettleEnd) {
    cachedBackdrop.style.opacity = '0';
    cachedBackdrop.style.visibility = 'hidden';
    window.dispatchEvent(new CustomEvent('en-reveal', { detail: { visible: true } }));
  } else {
    cachedBackdrop.style.opacity = '1';
    cachedBackdrop.style.visibility = 'visible';
    window.dispatchEvent(new CustomEvent('en-reveal', { detail: { visible: false } }));
  }
};

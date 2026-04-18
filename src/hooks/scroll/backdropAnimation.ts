import { clamp, easeInOut } from './utils';
import type { ScrollContext } from './types';

export const animateBackdrop = (
  currentScroll: number,
  ctx: ScrollContext,
  cachedBackdrop: HTMLElement | null
): void => {
  if (!cachedBackdrop) return;

  const { transitionLength, pauseLength } = ctx;
  const section2Start = pauseLength;

  const mergeStart = pauseLength + transitionLength + pauseLength;
  const mergeSettleEnd = mergeStart + transitionLength * 0.8;

  // Flow after EN settles into position (merge into WORKS "EXPERIENCE"):
  // 1. Turn off blend mode (removes color inversion) - after settled (~90%)
  const blendOffThreshold = 0.94;
  // 2. Show local EN overlapping the global EN 
  const localAppearThreshold = 0.9999;
  // 3. Snap global EN to invisible 
  const globalDisappearThreshold = 0.99999;

  // Keep blend as 'difference' through Section 2 and Section 3 merge;
  // the merge logic below will switch to 'normal' at the right time.
  let mixBlendMode: 'difference' | 'normal' =
    currentScroll >= section2Start ? 'difference' : 'normal';

  let backdropOpacity = 1;
  let backdropVisibility: 'visible' | 'hidden' = 'visible';
  let localEnOpacity = 0;

  if (currentScroll >= mergeStart) {
    const mergeProgress = easeInOut(
      clamp((currentScroll - mergeStart) / Math.max(1, mergeSettleEnd - mergeStart))
    );

    // Keep blend/invert for most of Section 3, then disable it only near the end so EXPERIENCE
    // doesn't flash black as the EN settles into its final position.
    if (mergeProgress >= localAppearThreshold) localEnOpacity = 1;
    if (mergeProgress >= globalDisappearThreshold) {
      backdropOpacity = 0;
      backdropVisibility = 'hidden';
    }

    // Only disable blend when the merge is far enough along that the letters
    // are actually close to settled. The intersection check alone was too eager
    // (bounding boxes overlap early during approach, causing premature white flash).
    if (mergeProgress >= blendOffThreshold) {
      mixBlendMode = 'normal';
    }

    // After settle, keep the end-state stable even if other animations stop updating.
    if (currentScroll > mergeSettleEnd) {
      mixBlendMode = 'normal';
      localEnOpacity = 1;
      backdropOpacity = 0;
      backdropVisibility = 'hidden';
    }
  }

  cachedBackdrop.style.mixBlendMode = mixBlendMode;
  cachedBackdrop.style.opacity = String(backdropOpacity);
  cachedBackdrop.style.visibility = backdropVisibility;

  // Local EN opacity is driven via event so React can re-render WORKS header.
  window.dispatchEvent(new CustomEvent('en-reveal', { detail: { opacity: localEnOpacity } }));
};

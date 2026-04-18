import { clamp, easeInOut, smoothProgress } from '../utils';
import type { ScrollContext, SectionAnimationState, SectionCache } from '../types';

const minScale = 0.5;
const maxScale = 1.2;

// Small visual nudges to account for font hinting/subpixel rounding.
// Negative = move left, positive = move right. Applied progressively via scroll progress.
const ABOUT_TARGET_NUDGE_EM = 0.11;
const EXPERIENCE_TARGET_NUDGE_EM = 0.17;

// Kept for compatibility with resize handling in the main scroll hook.
export const invalidateEnTargetCache = () => {
  _phase2MergeCache = null;
};

let _phase2MergeCache:
  | {
      startGlobalTranslateOffsetX: number;
      startGlobalTranslateOffsetY: number;
      startScale: number;
      startLetterEX: number;
      startLetterEY: number;
      startLetterNX: number;
      startLetterNY: number;
      startLetterEOffsetX: number;
      startLetterEOffsetY: number;
      startLetterNOffsetX: number;
      startLetterNOffsetY: number;
      startBackdropCenterX: number;
      startBackdropCenterY: number;
      startLetterECenterX: number;
      startLetterECenterY: number;
      startLetterNCenterX: number;
      startLetterNCenterY: number;
    }
  | null = null;

export const animateSection0 = (
  _sec: Element,
  currentScroll: number,
  ctx: ScrollContext,
  cachedBackdrop: HTMLElement | null,
  experienceEnSpan: HTMLElement | null,
  cache: SectionCache
): SectionAnimationState => {
  const { transitionLength, pauseLength, gapVh, sectionUnit } = ctx;
  const leaveStart = pauseLength;
  const leaveEnd = leaveStart + transitionLength;

  let currentYMoveVh = 0;
  let currentRotation = 0;
  let currentScale = maxScale;
  let currentOpacity = 1;

  if (currentScroll < leaveStart) {
    currentYMoveVh = 0;
    currentRotation = 0;
    currentScale = maxScale;
    currentOpacity = 1;
  } else if (currentScroll >= leaveStart && currentScroll < leaveEnd) {
    const progress = (currentScroll - leaveStart) / transitionLength;
    const smProgress = smoothProgress(progress);
    currentYMoveVh = progress * (100 + gapVh);
    currentRotation = progress * 10;
    currentScale = maxScale - smProgress * (maxScale - minScale);
    currentOpacity = 1;
  } else {
    currentYMoveVh = 100 + gapVh;
    currentRotation = 10;
    currentScale = minScale;
    currentOpacity = 1;
  }

  // Parallax and backdrop animations - run through Phase 2 (Section 3 merge)
  // sectionUnit * 2 covers: pauseLength + transitionLength + pauseLength + transitionLength
  if (currentScroll < sectionUnit * 2) {
    animateSection0Parallax(currentScroll, ctx, cachedBackdrop, experienceEnSpan, cache);
  }

  return { currentYMoveVh, currentRotation, currentRotationX: 0, currentRotationY: 0, currentScale, currentOpacity, lockedContentXVw: 0 };
};

const animateSection0Parallax = (
  currentScroll: number,
  ctx: ScrollContext,
  cachedBackdrop: HTMLElement | null,
  experienceEnSpan: HTMLElement | null,
  cache: SectionCache
): void => {
  const { transitionLength, pauseLength } = ctx;
  const edTransitionStart = pauseLength + transitionLength * 0.2;
  const edTransitionEnd = pauseLength + transitionLength;
  const section3EnterStart = pauseLength + transitionLength + pauseLength;
  const section3SettleEnd = section3EnterStart + transitionLength * 0.8;

  // EN text animation - Phase 1 values (shrinking in Section 2)
  let edTranslateX = -50, edTranslateY = -50, edScale = 1, edPrimaryOpacity = 1;
  let edPrimaryColor = 'rgba(255, 255, 255, 1)';
  let homeLetterEX = 0, homeLetterEY = 0, homeLetterNX = 0, homeLetterNY = 0, homeEnScale = 1;
  let letterEX = 0, letterEY = 0, letterNX = 0, letterNY = 0, globalEnScale = 1;
  let globalEnTranslateX = -50, globalEnTranslateY = -50;
  let globalEnTranslateOffsetX = 0, globalEnTranslateOffsetY = 0;
  let letterEOffsetX = 0, letterEOffsetY = 0, letterNOffsetX = 0, letterNOffsetY = 0;

  // Track Phase 2 progress for crossfade
  // const phase2Progress = 0; // Removed unused variable
  
  // Phase 1: Section 2 shrink animation
  if (currentScroll > edTransitionStart && cachedBackdrop) {
    const progress = easeInOut(clamp((currentScroll - edTransitionStart) / Math.max(1, edTransitionEnd - edTransitionStart)));
    const aboutE = document.querySelector('.about-name-e') as HTMLElement | null;
    const aboutN = document.querySelector('.about-name-n') as HTMLElement | null;

    // Baseline (section 1 state) before applying dynamic phase-1 correction.
    globalEnTranslateX = -50;
    globalEnTranslateY = -50;
    globalEnScale = 1;
    letterEX = 0;
    letterEY = 0;
    letterNX = 0;
    letterNY = 0;

    if (aboutE && aboutN) {
      const eTargetRect = aboutE.getBoundingClientRect();
      const nTargetRect = aboutN.getBoundingClientRect();
      const eTargetCenterX = eTargetRect.left + eTargetRect.width / 2;
      const eTargetCenterY = eTargetRect.top + eTargetRect.height / 2;
      const nTargetCenterX = nTargetRect.left + nTargetRect.width / 2;
      const nTargetCenterY = nTargetRect.top + nTargetRect.height / 2;
      const aboutFontSize = parseFloat(window.getComputedStyle(aboutE).fontSize);
      const aboutNudgeX = (Number.isFinite(aboutFontSize) ? aboutFontSize : 0) * ABOUT_TARGET_NUDGE_EM;

      const nudgedETargetCenterX = eTargetCenterX + aboutNudgeX;
      const nudgedNTargetCenterX = nTargetCenterX + aboutNudgeX;

      const targetCenterX = (nudgedETargetCenterX + nudgedNTargetCenterX) / 2;
      const targetCenterY = (eTargetCenterY + nTargetCenterY) / 2;
      const backdropFontSize = parseFloat(window.getComputedStyle(cachedBackdrop).fontSize) || 600;
      const targetScale = aboutFontSize / backdropFontSize;

      // Measure from known baseline, then move dynamically to About E/N.
      cachedBackdrop.style.transform = `translate3d(${globalEnTranslateX}%, ${globalEnTranslateY}%, 0)`;
      const letterEEl = cachedBackdrop.querySelector('.letter-e') as HTMLElement | null;
      const letterNEl = cachedBackdrop.querySelector('.letter-n') as HTMLElement | null;
      if (letterEEl) letterEEl.style.transform = `translate3d(${letterEX}%, ${letterEY}%, 0) scale(${globalEnScale})`;
      if (letterNEl) letterNEl.style.transform = `translate3d(${letterNX}%, ${letterNY}%, 0) scale(${globalEnScale})`;

      const backdropRect = cachedBackdrop.getBoundingClientRect();
      const backdropCenterX = backdropRect.left + backdropRect.width / 2;
      const backdropCenterY = backdropRect.top + backdropRect.height / 2;
      globalEnTranslateOffsetX = (targetCenterX - backdropCenterX) * progress;
      globalEnTranslateOffsetY = (targetCenterY - backdropCenterY) * progress;
      globalEnScale = 1 + (targetScale - 1) * progress;

      if (letterEEl && letterNEl) {
        cachedBackdrop.style.transform = `translate3d(calc(${globalEnTranslateX}% + ${globalEnTranslateOffsetX}px), calc(${globalEnTranslateY}% + ${globalEnTranslateOffsetY}px), 0)`;
        letterEEl.style.transform = `translate3d(${letterEX}%, ${letterEY}%, 0) scale(${globalEnScale})`;
        letterNEl.style.transform = `translate3d(${letterNX}%, ${letterNY}%, 0) scale(${globalEnScale})`;

        const eRect = letterEEl.getBoundingClientRect();
        const nRect = letterNEl.getBoundingClientRect();
        const eCenterX = eRect.left + eRect.width / 2;
        const eCenterY = eRect.top + eRect.height / 2;
        const nCenterX = nRect.left + nRect.width / 2;
        const nCenterY = nRect.top + nRect.height / 2;
        letterEOffsetX = (nudgedETargetCenterX - eCenterX) * progress;
        letterEOffsetY = (eTargetCenterY - eCenterY) * progress;
        letterNOffsetX = (nudgedNTargetCenterX - nCenterX) * progress;
        letterNOffsetY = (nTargetCenterY - nCenterY) * progress;
      }
    }
  }

  // Phase 2: Section 3 merge animation - DYNAMIC MEASUREMENT
  if (currentScroll > section3EnterStart && cachedBackdrop && experienceEnSpan) {
    const progress3 = easeInOut(clamp((currentScroll - section3EnterStart) / Math.max(1, section3SettleEnd - section3EnterStart)));
    // Cache once so phase 2 starts exactly from the phase-1 end state (About alignment),
    // then lerps to the Experience EN target without snapping back to the global baseline.
    if (!_phase2MergeCache) {
      // Ensure DOM is in the current phase-1 state before measuring.
      cachedBackdrop.style.transform = `translate3d(calc(${globalEnTranslateX}% + ${globalEnTranslateOffsetX}px), calc(${globalEnTranslateY}% + ${globalEnTranslateOffsetY}px), 0)`;
      const letterEEl = cachedBackdrop.querySelector('.letter-e') as HTMLElement | null;
      const letterNEl = cachedBackdrop.querySelector('.letter-n') as HTMLElement | null;
      if (letterEEl) letterEEl.style.transform = `translate3d(calc(${letterEX}% + ${letterEOffsetX}px), calc(${letterEY}% + ${letterEOffsetY}px), 0) scale(${globalEnScale})`;
      if (letterNEl) letterNEl.style.transform = `translate3d(calc(${letterNX}% + ${letterNOffsetX}px), calc(${letterNY}% + ${letterNOffsetY}px), 0) scale(${globalEnScale})`;

      const backdropRect = cachedBackdrop.getBoundingClientRect();
      const backdropCenterX = backdropRect.left + backdropRect.width / 2;
      const backdropCenterY = backdropRect.top + backdropRect.height / 2;

      const eRect = letterEEl?.getBoundingClientRect();
      const nRect = letterNEl?.getBoundingClientRect();
      const eCenterX = eRect ? eRect.left + eRect.width / 2 : backdropCenterX;
      const eCenterY = eRect ? eRect.top + eRect.height / 2 : backdropCenterY;
      const nCenterX = nRect ? nRect.left + nRect.width / 2 : backdropCenterX;
      const nCenterY = nRect ? nRect.top + nRect.height / 2 : backdropCenterY;

      _phase2MergeCache = {
        startGlobalTranslateOffsetX: globalEnTranslateOffsetX,
        startGlobalTranslateOffsetY: globalEnTranslateOffsetY,
        startScale: globalEnScale,
        startLetterEX: letterEX,
        startLetterEY: letterEY,
        startLetterNX: letterNX,
        startLetterNY: letterNY,
        startLetterEOffsetX: letterEOffsetX,
        startLetterEOffsetY: letterEOffsetY,
        startLetterNOffsetX: letterNOffsetX,
        startLetterNOffsetY: letterNOffsetY,
        startBackdropCenterX: backdropCenterX,
        startBackdropCenterY: backdropCenterY,
        startLetterECenterX: eCenterX,
        startLetterECenterY: eCenterY,
        startLetterNCenterX: nCenterX,
        startLetterNCenterY: nCenterY
      };
    }

    const data = _phase2MergeCache;

    const targetRect = experienceEnSpan.getBoundingClientRect();
    const targetFontSize = parseFloat(window.getComputedStyle(experienceEnSpan).fontSize);
    const expNudgeX = (Number.isFinite(targetFontSize) ? targetFontSize : 0) * EXPERIENCE_TARGET_NUDGE_EM;

    const targetCenterX = targetRect.left + targetRect.width / 2 + expNudgeX;
    const targetCenterY = targetRect.top + targetRect.height / 2;
    const backdropFontSize = parseFloat(window.getComputedStyle(cachedBackdrop).fontSize) || 600;
    const targetScale = targetFontSize / backdropFontSize;

    // Lerp from phase-1 end state (About alignment) to the *current* Experience EN position.
    const parentDeltaFullX = targetCenterX - data.startBackdropCenterX;
    const parentDeltaFullY = targetCenterY - data.startBackdropCenterY;
    globalEnTranslateOffsetX = data.startGlobalTranslateOffsetX + parentDeltaFullX * progress3;
    globalEnTranslateOffsetY = data.startGlobalTranslateOffsetY + parentDeltaFullY * progress3;
    globalEnScale = data.startScale + (targetScale - data.startScale) * progress3;

    // Collapse any residual percent offsets during the merge.
    letterEX = data.startLetterEX * (1 - progress3);
    letterEY = data.startLetterEY * (1 - progress3);
    letterNX = data.startLetterNX * (1 - progress3);
    letterNY = data.startLetterNY * (1 - progress3);

    // Pixel offsets: start where phase 1 left them, then nudge to the current character centers.
    const textNode = Array.from(experienceEnSpan.childNodes).find(
      node => node.nodeType === Node.TEXT_NODE && (node.textContent?.length || 0) >= 2
    ) as Text | undefined;

    let targetECenterX = targetRect.left + targetRect.width * 0.25 + expNudgeX;
    let targetECenterY = targetCenterY;
    let targetNCenterX = targetRect.left + targetRect.width * 0.75 + expNudgeX;
    let targetNCenterY = targetCenterY;

    if (textNode) {
      const range = document.createRange();
      range.setStart(textNode, 0);
      range.setEnd(textNode, 1);
      const eCharRect = range.getBoundingClientRect();
      range.setStart(textNode, 1);
      range.setEnd(textNode, 2);
      const nCharRect = range.getBoundingClientRect();
      if (eCharRect.width > 0 || eCharRect.height > 0) {
        targetECenterX = eCharRect.left + eCharRect.width / 2 + expNudgeX;
        targetECenterY = eCharRect.top + eCharRect.height / 2;
      }
      if (nCharRect.width > 0 || nCharRect.height > 0) {
        targetNCenterX = nCharRect.left + nCharRect.width / 2 + expNudgeX;
        targetNCenterY = nCharRect.top + nCharRect.height / 2;
      }
    }

    // Letter centers also move with the parent; subtract the full parent delta so the correction
    // lands on the character centers (instead of being offset by the parent's movement).
    letterEOffsetX =
      data.startLetterEOffsetX +
      (targetECenterX - data.startLetterECenterX - parentDeltaFullX) * progress3;
    letterEOffsetY =
      data.startLetterEOffsetY +
      (targetECenterY - data.startLetterECenterY - parentDeltaFullY) * progress3;
    letterNOffsetX =
      data.startLetterNOffsetX +
      (targetNCenterX - data.startLetterNCenterX - parentDeltaFullX) * progress3;
    letterNOffsetY =
      data.startLetterNOffsetY +
      (targetNCenterY - data.startLetterNCenterY - parentDeltaFullY) * progress3;
  }

  if (currentScroll > edTransitionStart) {
    const progress = easeInOut((currentScroll - edTransitionStart) / Math.max(1, edTransitionEnd - edTransitionStart));
    edTranslateX = -50 + progress * 10;
    edTranslateY = -50 - progress * 10;
    edScale = 1 - progress * 0.83;
    edPrimaryOpacity = 1 - progress * 0.5;
    edPrimaryColor = `rgba(255, 255, 255, ${1 - progress * 0.2})`;
    homeLetterEX = progress * -10;
    homeLetterEY = progress * -100;
    homeLetterNX = progress * -90;
    homeLetterNY = progress * -40;
    homeEnScale = 1 - progress * 0.83;
  }

  const { edPrimaryElements, heroPortrait } = cache;

  edPrimaryElements.forEach(edPrimary => {
    edPrimary.style.transform = `translate3d(${edTranslateX}%, ${edTranslateY}%, 0)`;
    edPrimary.style.opacity = `${edPrimaryOpacity}`;
    edPrimary.style.color = edPrimaryColor;
    const homeLetterE = edPrimary.querySelector('.home-letter-e') as HTMLElement | null;
    const homeLetterN = edPrimary.querySelector('.home-letter-n') as HTMLElement | null;
    if (homeLetterE) homeLetterE.style.transform = `translate3d(${homeLetterEX}%, ${homeLetterEY}%, 0) scale(${homeEnScale})`;
    if (homeLetterN) homeLetterN.style.transform = `translate3d(${homeLetterNX}%, ${homeLetterNY}%, 0) scale(${homeEnScale})`;
  });

  if (heroPortrait) {
    heroPortrait.style.transform = `scale(${edScale})`;
    heroPortrait.style.opacity = `${edPrimaryOpacity}`;
  }

  if (cachedBackdrop) {
    cachedBackdrop.style.transform = `translate3d(calc(${globalEnTranslateX}% + ${globalEnTranslateOffsetX}px), calc(${globalEnTranslateY}% + ${globalEnTranslateOffsetY}px), 0)`;
    const letterE = cachedBackdrop.querySelector('.letter-e') as HTMLElement | null;
    const letterN = cachedBackdrop.querySelector('.letter-n') as HTMLElement | null;
    if (letterE) letterE.style.transform = `translate3d(calc(${letterEX}% + ${letterEOffsetX}px), calc(${letterEY}% + ${letterEOffsetY}px), 0) scale(${globalEnScale})`;
    if (letterN) letterN.style.transform = `translate3d(calc(${letterNX}% + ${letterNOffsetX}px), calc(${letterNY}% + ${letterNOffsetY}px), 0) scale(${globalEnScale})`;
  }

  // Parallax layers
  const { parallaxLayers } = cache;
  const parallaxIntensity = 0.5;
  parallaxLayers.forEach(layer => {
    const speedY = parseFloat(layer.getAttribute('data-speed') || '0');
    const speedX = parseFloat(layer.getAttribute('data-speed-x') || '0');
    layer.style.transform = `translate3d(${currentScroll * speedX * parallaxIntensity}px, ${currentScroll * speedY * parallaxIntensity}px, 0)`;
  });

  // Text parallax
  const { textElements } = cache;
  textElements.forEach(el => {
    el.style.transform = `translate3d(0, ${currentScroll * parseFloat(el.getAttribute('data-text-speed') || '0.2')}px, 0)`;
  });

  // Code lines parallax
  const { codeLines } = cache;
  const codeYOffset = currentScroll * 0.12;
  codeLines.forEach(line => {
    line.style.transform = `translate3d(0, ${codeYOffset}px, 0)`;
  });

  // Float elements
  const { floatElements } = cache;
  floatElements.forEach(el => {
    const speed = parseFloat(el.getAttribute('data-float-speed') || '0.1');
    let xDirection = 0, yDirection = 0;
    const cl = el.classList;
    if (cl.contains('home-section__code--left')) { xDirection = -0.7; yDirection = 0.2; }
    else if (cl.contains('home-section__code--right')) { xDirection = 0.7; yDirection = -0.2; }
    else if (cl.contains('home-section__glyph--en-1')) { xDirection = -1.25; yDirection = 0.1; }
    else if (cl.contains('home-section__glyph--en-2')) { xDirection = 1.25; yDirection = 0.15; }
    else if (cl.contains('home-section__glyph--en-3')) { xDirection = 0; yDirection = -1.2; }
    else if (cl.contains('home-section__glyph--en-4')) { xDirection = -0.9; yDirection = -0.8; }
    else if (cl.contains('home-section__glyph--en-5')) { xDirection = 0.95; yDirection = -0.85; }
    else if (cl.contains('home-section__glyph--en-6')) { xDirection = -0.85; yDirection = 1.05; }
    else if (cl.contains('home-section__glyph--en-7')) { xDirection = 0.9; yDirection = 1.1; }
    const spread = currentScroll * speed;
    el.style.transform = `translate3d(${spread * 1.15 * xDirection}px, ${spread * 1.2 * yDirection}px, 0)`;
  });

  // Image parallax
  const { imageWrap, parallaxImg: imgElement } = cache;
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    if (imageWrap) {
      const mobileSpeed = parseFloat(imageWrap.getAttribute('data-speed-mobile') || '0.15');
      imageWrap.style.transform = `translate3d(0, ${currentScroll * mobileSpeed}px, 0)`;
    }
    if (imgElement) {
      const imgMobileSpeed = parseFloat(imgElement.getAttribute('data-img-scroll-mobile') || '0.25');
      imgElement.style.transform = `translate3d(0, ${currentScroll * imgMobileSpeed}px, 0)`;
    }
    
    // Subtext mobile parallax
    const subtext = Array.from(cache.textElements).find(el => el.classList.contains('home-section__subtext')) as HTMLElement | null;
    if (subtext) {
      const subtextSpeed = parseFloat(subtext.getAttribute('data-speed-mobile') || '0.08');
      subtext.style.transform = `translate3d(0, ${currentScroll * subtextSpeed}px, 0)`;
    }
  } else {
    if (imageWrap && imgElement) {
      const yOffsetWrap = currentScroll * parseFloat(imageWrap.getAttribute('data-img-speed') || '0.02');
      const yOffsetImg = currentScroll * parseFloat(imgElement.getAttribute('data-img-scroll') || '0.04');
      imageWrap.style.transform = `translate3d(0, ${yOffsetWrap}px, 0)`;
      imgElement.style.transform = `translate3d(0, ${yOffsetImg - yOffsetWrap}px, 0)`;
    } else if (imageWrap) {
      imageWrap.style.transform = `translate3d(0, ${currentScroll * parseFloat(imageWrap.getAttribute('data-img-speed') || '0.02')}px, 0)`;
    }
  }

  // Image shadow parallax
  const { imageShadow } = cache;
  if (imageShadow) {
    const shadowSpeed = currentScroll * parseFloat(imageShadow.getAttribute('data-shadow-speed') || '0.06');
    imageShadow.style.transform = `translate3d(${shadowSpeed * 0.2}px, ${shadowSpeed}px, 0)`;
  }
};

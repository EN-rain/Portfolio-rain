import { clamp, easeInOut, smoothProgress } from '../utils';
import type { ScrollContext, SectionAnimationState, SectionCache } from '../types';

const minScale = 0.5;
const maxScale = 1.2;

export const animateSection0 = (
  _sec: Element,
  currentScroll: number,
  ctx: ScrollContext,
  cachedBackdrop: HTMLElement | null,
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

  // Parallax and backdrop animations - only run if logically visible
  if (currentScroll < sectionUnit * 1.5) {
    animateSection0Parallax(currentScroll, ctx, cachedBackdrop, cache);
  }

  return { currentYMoveVh, currentRotation, currentRotationX: 0, currentRotationY: 0, currentScale, currentOpacity, lockedContentXVw: 0 };
};

const animateSection0Parallax = (
  currentScroll: number,
  ctx: ScrollContext,
  cachedBackdrop: HTMLElement | null,
  cache: SectionCache
): void => {
  const { transitionLength, pauseLength } = ctx;
  const edTransitionStart = pauseLength + transitionLength * 0.2;
  const edTransitionEnd = pauseLength + transitionLength;

  // EN text animation
  let edTranslateX = -50, edTranslateY = -50, edScale = 1, edPrimaryOpacity = 1;
  let edPrimaryColor = 'rgba(255, 255, 255, 1)';
  let homeLetterEX = 0, homeLetterEY = 0, homeLetterNX = 0, homeLetterNY = 0, homeEnScale = 1;
  let letterEX = 0, letterEY = 0, letterNX = 0, letterNY = 0, globalEnScale = 1;
  let globalEnTranslateX = -50, globalEnTranslateY = -50;

  if (currentScroll > edTransitionStart) {
    const progress = easeInOut(clamp((currentScroll - edTransitionStart) / Math.max(1, edTransitionEnd - edTransitionStart)));
    globalEnTranslateX = -50 + progress * 18;
    globalEnTranslateY = -50 - progress * 15;
    letterEX = progress * -1;
    letterEY = progress * -16;
    letterNX = progress * -86.7;
    letterNY = progress * 1;
    globalEnScale = 1 - progress * 0.83;

    const section3EnterStart = pauseLength + transitionLength + pauseLength;
    const section3SettleEnd = section3EnterStart + transitionLength * 0.8;

    if (currentScroll > section3EnterStart) {
      const progress3 = easeInOut(clamp((currentScroll - section3EnterStart) / Math.max(1, section3SettleEnd - section3EnterStart)));
      globalEnTranslateX += progress3 * -10;
      globalEnTranslateY += progress3 * 35;
      letterEX += progress3 * -1.4;
      letterEY += progress3 * -30;
      letterNX += progress3 * 3;
      letterNY += progress3 * -47;
      globalEnScale = Math.max(0.01, globalEnScale - progress3 * 0.07);
    }
  }

  if (currentScroll > edTransitionStart) {
    const progress = easeInOut((currentScroll - edTransitionStart) / Math.max(1, edTransitionEnd - edTransitionStart));
    edTranslateX = -50 + progress * 10;
    edTranslateY = -50 - progress * 10;
    edScale = 1 - progress * 0.83;
    edPrimaryOpacity = 1 - progress * 0.5;
    edPrimaryColor = `rgba(255, 255, 255, ${1 - progress * 0.2})`;
    homeLetterEX = progress * 24;
    homeLetterEY = progress * -30;
    homeLetterNX = progress * -68;
    homeLetterNY = progress * -10;
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
    cachedBackdrop.style.transform = `translate3d(${globalEnTranslateX}%, ${globalEnTranslateY}%, 0)`;
    const letterE = cachedBackdrop.querySelector('.letter-e') as HTMLElement | null;
    const letterN = cachedBackdrop.querySelector('.letter-n') as HTMLElement | null;
    if (letterE) letterE.style.transform = `translate3d(${letterEX}%, ${letterEY}%, 0) scale(${globalEnScale})`;
    if (letterN) letterN.style.transform = `translate3d(${letterNX}%, ${letterNY}%, 0) scale(${globalEnScale})`;
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

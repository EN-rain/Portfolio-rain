import type { ScrollContext } from './types';

export const animateContact = (
  currentScroll: number,
  ctx: ScrollContext,
  contactIcon: HTMLElement | null,
  contactTexts: NodeListOf<HTMLElement> | null
): void => {
  const { transitionLength, pauseLength } = ctx;
  const section2LeaveStart = 2 * (transitionLength + pauseLength) + pauseLength;
  const buffer = pauseLength * 0.2;
  const contactEnterStart = section2LeaveStart + buffer;
  const contactAnimDuration = transitionLength * 0.6;

  if (currentScroll < contactEnterStart) {
    if (contactIcon) {
      contactIcon.style.transform = 'rotateY(90deg)';
      contactIcon.style.opacity = '0';
    }
    contactTexts?.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translate(0,0)';
    });
  } else if (currentScroll >= contactEnterStart && currentScroll < contactEnterStart + contactAnimDuration) {
    const p = (currentScroll - contactEnterStart) / contactAnimDuration;
    const eased = 1 - Math.pow(1 - p, 3);
    if (contactIcon) {
      contactIcon.style.transform = `rotateY(${90 - eased * 90}deg)`;
      contactIcon.style.opacity = String(eased);
    }
    const textEased = 1 - Math.pow(1 - Math.min(1, Math.max(0, (p - 0.2) / 0.8)), 3);
    contactTexts?.forEach(el => {
      el.style.opacity = String(textEased);
      el.style.transform = `translateY(${(1 - textEased) * 20}px)`;
    });
  } else {
    if (contactIcon) {
      contactIcon.style.transform = 'rotateY(0deg)';
      contactIcon.style.opacity = '1';
    }
    contactTexts?.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translate(0,0)';
    });
  }
};

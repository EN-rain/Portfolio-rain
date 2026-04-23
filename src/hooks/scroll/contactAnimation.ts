import type { ScrollContext } from './types';

export const animateContact = (
  currentScroll: number,
  ctx: ScrollContext,
  contactIcon: HTMLElement | null,
  contactHeading: HTMLElement | null,
  contactSubtext: HTMLElement | null,
  contactGrid: HTMLElement | null,
  contactTexts: NodeListOf<HTMLElement> | null
): void => {
  const { transitionLength, pauseLength } = ctx;
  const section2LeaveStart = 2 * (transitionLength + pauseLength) + pauseLength;
  const buffer = pauseLength * 0.1;
  const contactEnterStart = section2LeaveStart + buffer;
  const contactAnimDuration = transitionLength * 0.8;
  const stepCount = 6;

  if (currentScroll < contactEnterStart) {
    // Initial states
    if (contactIcon) {
      contactIcon.style.transform = 'translate3d(0, 0, 0)';
      contactIcon.style.opacity = '1';
      contactIcon.style.clipPath = 'inset(0 0 100% 0)';
    }
    if (contactHeading) {
      contactHeading.style.clipPath = 'inset(0 0 100% 0)';
      contactHeading.style.transform = 'translate3d(0, 120px, 0)';
      contactHeading.style.opacity = '1';
    }
    if (contactSubtext) {
      contactSubtext.style.opacity = '0';
      contactSubtext.style.transform = 'none';
    }
    if (contactGrid) {
      contactGrid.style.opacity = '1';
      contactGrid.style.transform = 'translate3d(0, 40px, 0)';
    }
    contactTexts?.forEach(el => {
      el.style.opacity = '0';
    });
  } else if (currentScroll >= contactEnterStart && currentScroll < contactEnterStart + contactAnimDuration) {
    const p = (currentScroll - contactEnterStart) / contactAnimDuration;
    const stepped = Math.floor(p * stepCount) / stepCount;
    
    // Icon: Stepped Reveal
    if (contactIcon) {
      contactIcon.style.clipPath = `inset(0 0 ${(1 - stepped) * 100}% 0)`;
    }
    
    // Heading: Clipped Slide Up
    if (contactHeading) {
      const headingEased = 1 - Math.pow(1 - p, 3);
      contactHeading.style.clipPath = `inset(0 0 ${(1 - stepped) * 100}% 0)`;
      contactHeading.style.transform = `translate3d(0, ${(1 - headingEased) * 120}px, 0)`;
      contactHeading.style.opacity = '1';
    }
    
    // Subtext: Fade only
    if (contactSubtext) {
      const subP = Math.max(0, Math.min(1, (p - 0.2) / 0.6));
      contactSubtext.style.opacity = subP.toString();
    }
    
    // Grid: Slide up only (no fade)
    if (contactGrid) {
      const gridP = Math.max(0, Math.min(1, (p - 0.4) / 0.6));
      const gridEased = 1 - Math.pow(1 - gridP, 3);
      contactGrid.style.transform = `translate3d(0, ${(1 - gridEased) * 40}px, 0)`;
    }

    // Individual links fade
    contactTexts?.forEach(el => {
      const linkP = Math.max(0, Math.min(1, (p - 0.5) / 0.5));
      el.style.opacity = linkP.toString();
    });
  } else {
    // Final states
    if (contactIcon) contactIcon.style.clipPath = 'inset(0% 0 0 0)';
    if (contactHeading) {
      contactHeading.style.clipPath = 'inset(0% 0 0 0)';
      contactHeading.style.transform = 'translate3d(0, 0, 0)';
      contactHeading.style.opacity = '1';
    }
    if (contactSubtext) contactSubtext.style.opacity = '1';
    if (contactGrid) contactGrid.style.transform = 'translate3d(0, 0, 0)';
    
    contactTexts?.forEach(el => {
      el.style.opacity = '1';
    });
  }
};

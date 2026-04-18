import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const useMobileReveal = <T extends HTMLElement = HTMLElement>() => {
  const ref = useRef<T>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;

    // Set initial state
    gsap.set(el, { opacity: 0, y: 60 });
    
    // Optional: selector for content elements if you want to stagger
    // For now we'll just animate the container and its direct children
    const children = el.children;
    if (children.length > 0) {
      gsap.set(children, { opacity: 0, y: 30 });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline({
            defaults: { ease: 'power4.out', duration: 1.2 }
          });

          tl.to(el, { opacity: 1, y: 0 })
            .to(children, { 
              opacity: 1, 
              y: 0, 
              stagger: 0.15,
              duration: 1.0
            }, '-=0.8');

          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, { scope: ref });

  return ref;
};

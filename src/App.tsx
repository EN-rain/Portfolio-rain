import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import {
  HomeSection,
  AboutSection,
  WorksSection,
  ContactSection
} from './components/sections';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useScrollAnimation(setCurrentSection);

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Increased timeout to match Lenis duration (1.4s)
    };

    // Use wheel and touchmove for more immediate response in some browsers
    window.addEventListener('scroll', handleScrollState, { passive: true });
    window.addEventListener('wheel', handleScrollState, { passive: true });
    window.addEventListener('touchmove', handleScrollState, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScrollState);
      window.removeEventListener('wheel', handleScrollState);
      window.removeEventListener('touchmove', handleScrollState);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setVh(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationValues = useMemo(() => {
    const transitionLength = vh;
    const pauseLength = vh;
    const sectionUnit = transitionLength + pauseLength;

    return {
      home: 0,
      about: sectionUnit,
      works: 2 * sectionUnit,
      contact: 3 * sectionUnit,
    };
  }, [vh]);

  const scrollToSection = useCallback((section: 'home' | 'about' | 'works' | 'contact') => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const target = isMobile ? `#${section}` : navigationValues[section];
    
    // Force immediate scroll to the calculated target
    window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: target }));
  }, [navigationValues]);

  return (
    <>
      <nav className={`fixed-navbar ${isScrolling ? 'scrolling' : ''}`}>
        <button 
          onClick={() => scrollToSection('home')} 
          className={`navbar-link ${currentSection === 0 ? 'active' : ''}`}
        >
          <span className="link-text">Home</span>
          <span className="link-dot"></span>
        </button>
        <button 
          onClick={() => scrollToSection('about')} 
          className={`navbar-link ${currentSection === 1 ? 'active' : ''}`}
        >
          <span className="link-text">About</span>
          <span className="link-dot"></span>
        </button>
        <button 
          onClick={() => scrollToSection('works')} 
          className={`navbar-link ${currentSection === 2 ? 'active' : ''}`}
        >
          <span className="link-text">Works</span>
          <span className="link-dot"></span>
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className={`navbar-link ${currentSection === 3 ? 'active' : ''}`}
        >
          <span className="link-text">Contact</span>
          <span className="link-dot"></span>
        </button>
      </nav>
      <main style={{ position: 'relative', height: '900vh' }}>
        <div aria-hidden="true" className="global-en-backdrop mobile-hide">
          <span className="letter-e">E</span>
          <span className="letter-n">N</span>
        </div>
        <HomeSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;

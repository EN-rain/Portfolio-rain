import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import {
  HomeSection,
  AboutSection,
  WorksSection,
  ContactSection
} from './components/sections';
import { LoadingScreen } from './components/LoadingScreen';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import './App.css';

const assetModules = import.meta.glob('./assets/**/*.{png,jpg,jpeg,webp,gif,svg,mp4,webm,ogg,mp3,wav}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const preloadUrls = Array.from(new Set(Object.values(assetModules)));
const mediaExtensions = /\.(mp4|webm|ogg|mp3|wav)(\?.*)?$/i;

const withTimeout = (promise: Promise<void>, timeoutMs: number) =>
  new Promise<void>((resolve) => {
    const timeout = window.setTimeout(resolve, timeoutMs);
    promise.finally(() => {
      window.clearTimeout(timeout);
      resolve();
    });
  });

const preloadImage = (url: string) =>
  withTimeout(new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => {
      if (img.decode) {
        img.decode().then(resolve).catch(resolve);
      } else {
        resolve();
      }
    };
    img.onerror = () => resolve();
    img.src = url;
  }), 12000);

const preloadMedia = (url: string) =>
  withTimeout(new Promise<void>((resolve) => {
    const media = document.createElement(url.match(/\.(mp4|webm)(\?.*)?$/i) ? 'video' : 'audio');
    media.preload = 'auto';
    media.oncanplaythrough = () => resolve();
    media.onloadeddata = () => resolve();
    media.onerror = () => resolve();
    media.src = url;
    media.load();
  }), 12000);

const waitForWindowLoad = () =>
  withTimeout(new Promise<void>((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
      return;
    }
    window.addEventListener('load', () => resolve(), { once: true });
  }), 12000);

const waitForFonts = () =>
  withTimeout(document.fonts ? document.fonts.ready.then(() => undefined).catch(() => undefined) : Promise.resolve(), 12000);

function PortfolioApp() {
  const [currentSection, setCurrentSection] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);
  const [isScrolling, setIsScrolling] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useScrollAnimation(setCurrentSection);

  useEffect(() => {
    let cancelled = false;
    let completed = 0;
    const tasks = [
      ...preloadUrls.map((url) => mediaExtensions.test(url) ? preloadMedia(url) : preloadImage(url)),
      waitForFonts(),
      waitForWindowLoad(),
    ];

    const updateProgress = () => {
      completed += 1;
      if (!cancelled) {
        setLoadingProgress(Math.round((completed / tasks.length) * 100));
      }
    };

    tasks.forEach(task => {
      task.then(updateProgress).catch(updateProgress);
    });

    Promise.all(tasks).then(() => {
      if (!cancelled) {
        setLoadingProgress(100);
        setIsLoaded(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

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
      {showLoading && (
        <LoadingScreen
          progress={loadingProgress}
          isComplete={isLoaded}
          onComplete={() => setShowLoading(false)}
        />
      )}
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

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = () => setPathname(window.location.pathname);
    const handleNavigation = (event: Event) => {
      const path = (event as CustomEvent<{ path: string }>).detail.path;
      if (!path || path === window.location.pathname || isTransitioning) return;

      setIsTransitioning(true);
      window.setTimeout(() => {
        window.history.pushState({}, '', path);
        setPathname(path);
        window.requestAnimationFrame(() => {
          window.scrollTo(0, 0);
          window.requestAnimationFrame(() => setIsTransitioning(false));
        });
      }, 320);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('portfolio-navigate', handleNavigation);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('portfolio-navigate', handleNavigation);
    };
  }, [isTransitioning]);

  return (
    <>
      <div className={`route-content ${isTransitioning ? 'route-content--hidden' : ''}`}>
        {pathname === '/projects' ? (
          <ProjectsPage />
        ) : pathname.startsWith('/projects/') ? (
          <ProjectDetailPage projectId={pathname.split('/')[2]} />
        ) : (
          <PortfolioApp />
        )}
      </div>
      <div className={`route-transition ${isTransitioning ? 'route-transition--active' : ''}`} aria-hidden="true" />
    </>
  );
}

export default App;

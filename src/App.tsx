import { useState } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import {
  HomeSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection
} from './components/sections';
import { SocialLinks } from './components/SocialLinks';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  
  useScrollAnimation(setCurrentSection);

  return (
    <>
      <SocialLinks />

      {/* Section Indicator */}
      <div style={{
        position: 'fixed',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {['HOME', 'ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((label, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{
              fontSize: '10px',
              color: currentSection === i ? '#6ee7b7' : 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '0.1em',
              opacity: currentSection === i ? 1 : 0,
              transform: currentSection === i ? 'translateX(0)' : 'translateX(10px)',
              transition: 'all 0.3s ease'
            }}>
              {label}
            </span>
            <div style={{
              width: currentSection === i ? '30px' : '15px',
              height: '2px',
              background: currentSection === i ? '#6ee7b7' : 'rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              boxShadow: currentSection === i ? '0 0 10px #6ee7b7' : 'none'
            }} />
          </div>
        ))}
      </div>

      <main style={{ position: 'relative', height: '900vh' }}>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;

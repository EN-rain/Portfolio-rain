import { useState } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import {
  HomeSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection
} from './components/sections';
import './App.css';

function App() {
  const [, setCurrentSection] = useState(0);
  
  useScrollAnimation(setCurrentSection);

  return (
    <>
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

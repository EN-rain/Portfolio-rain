import { useEffect, useState } from 'react';
import gsap from 'gsap';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            gsap.to('.loading-screen', {
              opacity: 0,
              duration: 0.8,
              ease: 'power2.inOut',
              onComplete
            });
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="loading-screen"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: '#000',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '0 20px' }}>
        <h1
          className="heading-font"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            letterSpacing: '0.3em',
            marginBottom: '2rem',
            color: '#6ee7b7'
          }}
        >
          LOADING
        </h1>

        <div
          style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
            marginBottom: '1rem'
          }}
        >
          <div
            style={{
              width: `${Math.min(progress, 100)}%`,
              height: '100%',
              background: '#6ee7b7',
              transition: 'width 0.3s ease',
              boxShadow: '0 0 10px rgba(110, 231, 183, 0.45)'
            }}
          />
        </div>

        <div
          className="tech-font"
          style={{
            fontSize: '12px',
            letterSpacing: '0.2em',
            opacity: 0.6
          }}
        >
          {Math.floor(Math.min(progress, 100))}%
        </div>
      </div>
    </div>
  );
};

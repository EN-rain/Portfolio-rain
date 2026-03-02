import layer4 from '../../assets/images/a1/1.png';
import layer3 from '../../assets/images/a1/2.png';
import layer2 from '../../assets/images/a1/3.png';
import layer1 from '../../assets/images/a1/4.png';
import { GlitchText } from '../GlitchText';

export const HomeSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 10, transform: 'translate3d(0, 0, 0)' }}>
      <div className="parallax-content bg-black overflow-hidden" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        
        {/* Animated Grid Background */}
        <div className="animated-grid" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(179, 136, 235, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(179, 136, 235, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 1,
          animation: 'gridMove 20s linear infinite'
        }}></div>

        {/* Hero Text - NOT using locked-content class */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 3,
          textAlign: 'center',
          color: '#ffffff',
          pointerEvents: 'none',
          width: '90%',
          maxWidth: '1200px'
        }}>
          {/* Animated Badge */}
          <div className="parallax-slide-in layer-1" style={{
            display: 'inline-block',
            padding: '8px 20px',
            border: '1px solid rgba(179, 136, 235, 0.3)',
            borderRadius: '50px',
            fontSize: '11px',
            letterSpacing: '0.2em',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
            background: 'rgba(0, 0, 0, 0.3)',
            animation: 'fadeInUp 1s ease-out 0.5s both'
          }}>
            ✨ AVAILABLE FOR FREELANCE
          </div>

          <h1 className="heading-font parallax-slide-in layer-1" style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            fontWeight: 700,
            letterSpacing: '0.3em',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            textShadow: '0 4px 30px rgba(179, 136, 235, 0.5), 0 0 60px rgba(179, 136, 235, 0.3)'
          }}>
            <GlitchText>CREATIVE</GlitchText>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #b388eb 0%, #7f5af0 50%, #ff006e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>DEVELOPER</span>
          </h1>
          
          <p className="tech-font parallax-slide-in layer-2" style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)',
            fontWeight: 300,
            letterSpacing: '0.15em',
            opacity: 0.9,
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.9)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Crafting digital experiences that blend art with technology
          </p>
          
          {/* CTA Buttons */}
          <div className="parallax-slide-in layer-3" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '12px 32px',
              background: 'linear-gradient(135deg, #b388eb, #7f5af0)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontSize: '14px',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Space Mono, monospace',
              pointerEvents: 'auto',
              boxShadow: '0 4px 20px rgba(179, 136, 235, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(179, 136, 235, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(179, 136, 235, 0.4)';
            }}>
              VIEW WORK
            </button>
            <button style={{
              padding: '12px 32px',
              background: 'transparent',
              border: '1px solid rgba(179, 136, 235, 0.5)',
              borderRadius: '50px',
              color: 'white',
              fontSize: '14px',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Space Mono, monospace',
              pointerEvents: 'auto',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(179, 136, 235, 0.1)';
              e.currentTarget.style.borderColor = '#b388eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(179, 136, 235, 0.5)';
            }}>
              GET IN TOUCH
            </button>
          </div>
          
          {/* Tech Stats */}
          <div className="parallax-slide-in layer-3" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap'
          }}>
            {[
              { label: 'PROJECTS', value: '50+', icon: '🚀' },
              { label: 'CLIENTS', value: '30+', icon: '🤝' },
              { label: 'AWARDS', value: '15+', icon: '🏆' }
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '1.5rem 2rem',
                border: '1px solid rgba(179, 136, 235, 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                background: 'rgba(0, 0, 0, 0.3)',
                minWidth: '140px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#b388eb';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(179, 136, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(179, 136, 235, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#b388eb',
                  fontFamily: 'Syncopate, sans-serif',
                  marginBottom: '0.5rem'
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  opacity: 0.6
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="parallax-slide-in layer-4" style={{
            marginTop: '4rem'
          }}>
            <div style={{
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              opacity: 0.6,
              marginBottom: '0.5rem',
              fontFamily: 'Space Mono, monospace'
            }}>
              SCROLL TO EXPLORE
            </div>
            <div style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(180deg, #b388eb, transparent)',
              margin: '0 auto',
              animation: 'scrollIndicator 2s ease-in-out infinite 2.5s'
            }}></div>
          </div>
        </div>

        {/* Layer 4 - Background */}
        <div 
          className="parallax-layer" 
          data-speed="0.1"
          style={{ zIndex: 1 }}
        >
          <div 
            className="parallax-slide-in layer-1"
            style={{ 
              backgroundImage: `url(${layer4})`,
              position: 'absolute',
              inset: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        {/* Layer 3 */}
        <div 
          className="parallax-layer" 
          data-speed="0.25"
          style={{ zIndex: 2 }}
        >
          <div 
            className="parallax-slide-in layer-2"
            style={{ 
              backgroundImage: `url(${layer3})`,
              position: 'absolute',
              inset: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        {/* Layer 2 */}
        <div 
          className="parallax-layer" 
          data-speed="0.45"
          style={{ zIndex: 3 }}
        >
          <div 
            className="parallax-slide-in layer-3"
            style={{ 
              backgroundImage: `url(${layer2})`,
              position: 'absolute',
              inset: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        {/* Layer 1 - Foreground */}
        <div 
          className="parallax-layer" 
          data-speed="0.7"
          style={{ zIndex: 4 }}
        >
          <div 
            className="parallax-slide-in layer-4"
            style={{ 
              backgroundImage: `url(${layer1})`,
              position: 'absolute',
              inset: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
      </div>
      
      <style>{`
        @keyframes scrollIndicator {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(10px);
          }
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
};

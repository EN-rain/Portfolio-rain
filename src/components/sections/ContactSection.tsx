import icon from '../../assets/images/icon.jpg';
import { MagneticButton } from '../MagneticButton';

export const ContactSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 45 }}>
      <div className="parallax-content flex flex-col items-center justify-center text-white px-6 relative overflow-hidden" style={{ backgroundColor: '#08070e' }}>
        
        {/* SVG Geometric diamond grid pattern */}
        <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
            {/* Diamond grid */}
            <g opacity="0.04" stroke="#b388eb" strokeWidth="0.5" fill="none">
              <rect x="200" y="150" width="60" height="60" transform="rotate(45 230 180)" />
              <rect x="400" y="300" width="50" height="50" transform="rotate(45 425 325)" />
              <rect x="650" y="100" width="45" height="45" transform="rotate(45 672 122)" />
              <rect x="900" y="250" width="55" height="55" transform="rotate(45 927 277)" />
              <rect x="1150" y="120" width="50" height="50" transform="rotate(45 1175 145)" />
              <rect x="1400" y="280" width="60" height="60" transform="rotate(45 1430 310)" />
              <rect x="1650" y="180" width="45" height="45" transform="rotate(45 1672 202)" />
            </g>
            <g opacity="0.035" stroke="#7f5af0" strokeWidth="0.5" fill="none">
              <rect x="100" y="700" width="55" height="55" transform="rotate(45 127 727)" />
              <rect x="350" y="850" width="50" height="50" transform="rotate(45 375 875)" />
              <rect x="600" y="750" width="60" height="60" transform="rotate(45 630 780)" />
              <rect x="850" y="900" width="45" height="45" transform="rotate(45 872 922)" />
              <rect x="1100" y="800" width="55" height="55" transform="rotate(45 1127 827)" />
              <rect x="1350" y="920" width="50" height="50" transform="rotate(45 1375 945)" />
              <rect x="1600" y="780" width="60" height="60" transform="rotate(45 1630 810)" />
              <rect x="1800" y="880" width="45" height="45" transform="rotate(45 1822 902)" />
            </g>
            
            {/* Center accent — concentric diamonds */}
            <g opacity="0.06" stroke="#b388eb" strokeWidth="0.5" fill="none">
              <rect x="910" y="490" width="100" height="100" transform="rotate(45 960 540)" />
              <rect x="925" y="505" width="70" height="70" transform="rotate(45 960 540)" />
              <rect x="940" y="520" width="40" height="40" transform="rotate(45 960 540)" />
            </g>
            <circle cx="960" cy="540" r="2" fill="#b388eb" opacity="0.1" />
            
            {/* Scattered small dots */}
            <circle cx="150" cy="450" r="1.5" fill="#b388eb" opacity="0.06" />
            <circle cx="500" cy="550" r="1.5" fill="#7f5af0" opacity="0.05" />
            <circle cx="1400" cy="500" r="1.5" fill="#b388eb" opacity="0.05" />
            <circle cx="1750" cy="400" r="1.5" fill="#7f5af0" opacity="0.04" />
            
            {/* Corner accent marks */}
            <g opacity="0.06" stroke="#b388eb" strokeWidth="0.6">
              <line x1="50" y1="50" x2="80" y2="50" />
              <line x1="50" y1="50" x2="50" y2="80" />
            </g>
            <g opacity="0.06" stroke="#b388eb" strokeWidth="0.6">
              <line x1="1870" y1="1030" x2="1840" y2="1030" />
              <line x1="1870" y1="1030" x2="1870" y2="1000" />
            </g>
          </svg>
        </div>
        
        <div className="locked-content relative flex items-center justify-center w-full max-w-6xl h-full mx-auto">
           
           {/* Left Info Column */}
           <div className="hidden md:flex absolute left-0 flex-col gap-12 text-left tech-font contact-text">
              <div className="group cursor-crosshair">
                <div className="text-[10px] tracking-[0.3em] opacity-30 uppercase mb-3 group-hover:opacity-60 transition-opacity">Initiate Comms</div>
                <div className="text-xl lg:text-3xl font-bold tracking-tighter hover:text-[#b388eb] transition-colors relative">
                  HELLO@VOID.TECH
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b388eb] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
              <div className="group cursor-crosshair">
                <div className="text-[10px] tracking-[0.3em] opacity-30 uppercase mb-3 group-hover:opacity-60 transition-opacity">Secure Line</div>
                <div className="text-xl lg:text-3xl font-bold tracking-tighter hover:text-[#b388eb] transition-colors relative">
                  +1 800 000 000
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b388eb] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
           </div>

           {/* Center Icon (Retains its ID for scrolling animation) */}
           <div className="icon-container z-10 relative group">
             <div className="absolute inset-0 bg-[#b388eb] rounded-full opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700"></div>
             <img 
               src={icon} 
               alt="icon" 
               className="w-[200px] md:w-[350px] h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700 relative z-10" 
               id="contact-icon" 
             />
             {/* Rotating ring */}
             <div className="absolute inset-0 border-2 border-[#b388eb]/20 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDuration: '20s' }}></div>
           </div>

           {/* Right Info Column */}
           <div className="hidden md:flex absolute right-0 flex-col gap-12 text-right tech-font contact-text">
              <div className="group cursor-crosshair">
                <div className="text-[10px] tracking-[0.3em] opacity-30 uppercase mb-3 group-hover:opacity-60 transition-opacity">Base Location</div>
                <div className="text-xl lg:text-3xl font-bold tracking-tighter hover:text-[#b388eb] transition-colors relative">
                  SECTOR 01 // TOKYO
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#b388eb] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
              <div className="group cursor-crosshair">
                <div className="text-[10px] tracking-[0.3em] opacity-30 uppercase mb-3 group-hover:opacity-60 transition-opacity">Social Grid</div>
                <div className="flex gap-6 justify-end text-sm tracking-[0.2em] font-bold">
                  <MagneticButton className="hover:text-[#b388eb] transition-all cursor-hover">
                    GITHUB
                  </MagneticButton>
                  <MagneticButton className="hover:text-[#b388eb] transition-all cursor-hover">
                    LINKEDIN
                  </MagneticButton>
                </div>
              </div>
           </div>

           {/* Mobile Only Info */}
           <div className="md:hidden mt-12 flex flex-col items-center gap-6 tech-font contact-text">
              <div className="text-sm font-bold tracking-widest hover:text-[#b388eb] transition-colors cursor-pointer">HELLO@VOID.TECH</div>
              <div className="flex gap-6 text-[10px] tracking-widest opacity-50">
                <span className="hover:opacity-100 hover:text-[#b388eb] transition-all cursor-pointer">GITHUB</span>
                <span className="hover:opacity-100 hover:text-[#b388eb] transition-all cursor-pointer">LINKEDIN</span>
              </div>
           </div>

        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

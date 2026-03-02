import icon from '../../assets/images/icon.jpg';
import { MagneticButton } from '../MagneticButton';

export const ContactSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 45 }}>
      <div className="parallax-content bg-white flex flex-col items-center justify-center text-black px-6 relative overflow-hidden">
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #b388eb 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#b388eb] rounded-full opacity-10 blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7f5af0] rounded-full opacity-10 blur-[120px] animate-float-delayed"></div>
        
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

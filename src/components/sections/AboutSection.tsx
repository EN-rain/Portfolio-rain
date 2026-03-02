import { MagneticButton } from '../MagneticButton';

export const AboutSection = () => {
  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 20 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner flex flex-col justify-center items-center pb-12">
          <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2000&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative w-full max-w-5xl mx-auto px-6 pt-24 text-white z-10 locked-content flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 text-left">
              <div className="tech-font text-xs tracking-[0.4em] uppercase text-[#b388eb] mb-4 animate-pulse">/// Identity</div>
              <h2 className="heading-font text-5xl md:text-7xl mb-6 font-bold leading-none tracking-tighter">
                CREATOR<br/>OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b388eb] via-[#7f5af0] to-[#ff006e] animate-gradient">WORLDS</span>
              </h2>
              <p className="text-sm md:text-lg font-light tracking-wide leading-relaxed opacity-80 mb-8 max-w-lg">
                I'm a visionary developer who merges cutting-edge tech with cinematic design. By treating every interface as a living, breathing canvas, I craft web experiences that don't just function—they captivate.
              </p>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Three.js', 'GSAP', 'TypeScript', 'WebGL', 'Node.js'].map((skill, i) => (
                  <span key={i} className="tech-font text-[10px] px-3 py-1.5 border border-[#b388eb]/30 rounded-full backdrop-blur-sm bg-black/20 hover:bg-[#b388eb]/20 hover:border-[#b388eb] transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 tech-font text-xs">
                 <MagneticButton className="border border-white/20 px-6 py-3 rounded uppercase tracking-widest backdrop-blur-sm bg-black/30 hover:bg-white hover:text-black transition-all duration-300 cursor-hover">
                   Discover Origin
                 </MagneticButton>
              </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center mt-12 lg:mt-0 relative group">
              <div className="absolute inset-0 bg-[#b388eb] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="w-full max-w-[320px] aspect-[4/5] border border-white/20 p-2 rounded-2xl bg-white/5 backdrop-blur-md relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620121692029-d088224cb77d?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" 
                  alt="Abstract tech visual" 
                />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between tracking-widest tech-font text-[10px] text-white bg-black/50 backdrop-blur-sm p-3 rounded border border-white/10">
                  <span>SYSTEM_ACT</span>
                  <span className="text-[#b388eb]">V.1.0.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="stack-section mask-shaped-section mask-theme-purple" style={{ zIndex: 30 }}>
      <div className="clip-gap-outer parallax-content">
        <div className="clip-gap-inner flex items-center justify-center">
          <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative w-full max-w-6xl mx-auto px-6 pt-24 text-white z-10 locked-content">
            <div className="flex flex-row justify-between items-end gap-6 mb-12 border-b border-white/20 pb-6 w-full">
              <div className="text-left">
                <div className="tech-font text-[10px] tracking-[0.3em] uppercase text-[#b388eb] mb-2">/// Artifacts</div>
                <h2 className="heading-font text-5xl md:text-7xl">EXHIBIT</h2>
              </div>
              <p className="tech-font text-xs md:text-sm opacity-60 text-right max-w-xs">
                A selection of digital spaces forged through innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
               {[
                 {title: "ECLIPSE", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800", cat: "FRONTEND", tech: "React • GSAP"},
                 {title: "NEXUS", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800", cat: "FULL STACK", tech: "Node • MongoDB"},
                 {title: "OBLIVION", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800", cat: "WEBGL", tech: "Three.js • Shaders"}
                ].map((p, i) => (
                  <div key={i} className="group relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-md cursor-pointer hover:border-[#b388eb]/50 transition-colors duration-500">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80"></div>
                    
                    {/* Hover Overlay Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b388eb] to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b388eb] to-transparent"></div>
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#b388eb] to-transparent"></div>
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#b388eb] to-transparent"></div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="tech-font text-[10px] tracking-widest text-[#b388eb] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{p.cat}</div>
                      <h3 className="heading-font text-3xl tracking-wide mb-2">{p.title}</h3>
                      <p className="tech-font text-[9px] opacity-60 mb-3 opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-150">{p.tech}</p>
                      <div className="h-[2px] w-0 bg-[#b388eb] group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                    
                    {/* View Project Button */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-black/30 hover:bg-white hover:text-black transition-all duration-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </div>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


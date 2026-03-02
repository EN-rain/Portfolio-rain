export const ContactSection = () => {
  return (
    <section className="stack-section" style={{ zIndex: 45 }}>
      <div className="parallax-content bg-gradient-to-br from-white via-gray-50 to-purple-50 flex flex-col items-center justify-center text-black px-6 relative overflow-hidden">
        
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
        
        <div className="locked-content relative flex flex-col items-center justify-center w-full max-w-6xl h-full mx-auto">
           
           {/* Header */}
           <div className="text-center mb-12">
             <div className="tech-font text-[10px] tracking-[0.3em] uppercase text-[#b388eb] mb-4">/// Let's Connect</div>
             <h2 className="heading-font text-5xl md:text-7xl mb-4 text-black">GET IN TOUCH</h2>
             <p className="text-sm md:text-base opacity-60 max-w-md mx-auto">
               Have a project in mind? Let's create something amazing together.
             </p>
           </div>

           {/* Contact Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-12">
             {/* Email Card */}
             <div className="group bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-8 hover:border-[#b388eb] hover:shadow-[0_10px_40px_rgba(179,136,235,0.2)] transition-all duration-300 cursor-pointer">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#b388eb]/10 flex items-center justify-center group-hover:bg-[#b388eb] group-hover:scale-110 transition-all duration-300">
                   <svg className="w-6 h-6 text-[#b388eb] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <div className="flex-1">
                   <div className="tech-font text-[10px] tracking-[0.2em] uppercase text-black/40 mb-2">Email</div>
                   <div className="text-lg font-semibold text-black group-hover:text-[#b388eb] transition-colors">hello@portfolio.dev</div>
                 </div>
               </div>
             </div>

             {/* Phone Card */}
             <div className="group bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-8 hover:border-[#b388eb] hover:shadow-[0_10px_40px_rgba(179,136,235,0.2)] transition-all duration-300 cursor-pointer">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#b388eb]/10 flex items-center justify-center group-hover:bg-[#b388eb] group-hover:scale-110 transition-all duration-300">
                   <svg className="w-6 h-6 text-[#b388eb] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </div>
                 <div className="flex-1">
                   <div className="tech-font text-[10px] tracking-[0.2em] uppercase text-black/40 mb-2">Phone</div>
                   <div className="text-lg font-semibold text-black group-hover:text-[#b388eb] transition-colors">+1 (555) 123-4567</div>
                 </div>
               </div>
             </div>

             {/* Location Card */}
             <div className="group bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-8 hover:border-[#b388eb] hover:shadow-[0_10px_40px_rgba(179,136,235,0.2)] transition-all duration-300 cursor-pointer">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#b388eb]/10 flex items-center justify-center group-hover:bg-[#b388eb] group-hover:scale-110 transition-all duration-300">
                   <svg className="w-6 h-6 text-[#b388eb] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                 </div>
                 <div className="flex-1">
                   <div className="tech-font text-[10px] tracking-[0.2em] uppercase text-black/40 mb-2">Location</div>
                   <div className="text-lg font-semibold text-black group-hover:text-[#b388eb] transition-colors">San Francisco, CA</div>
                 </div>
               </div>
             </div>

             {/* Availability Card */}
             <div className="group bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-8 hover:border-[#b388eb] hover:shadow-[0_10px_40px_rgba(179,136,235,0.2)] transition-all duration-300 cursor-pointer">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#b388eb]/10 flex items-center justify-center group-hover:bg-[#b388eb] group-hover:scale-110 transition-all duration-300">
                   <svg className="w-6 h-6 text-[#b388eb] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <div className="flex-1">
                   <div className="tech-font text-[10px] tracking-[0.2em] uppercase text-black/40 mb-2">Availability</div>
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <div className="text-lg font-semibold text-black group-hover:text-[#b388eb] transition-colors">Available Now</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Social Links */}
           <div className="flex gap-4 mb-8">
             {[
               { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
               { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
               { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
             ].map((social, i) => (
               <a
                 key={i}
                 href="#"
                 className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:border-[#b388eb] hover:bg-[#b388eb] hover:scale-110 hover:shadow-[0_5px_20px_rgba(179,136,235,0.4)] transition-all duration-300 group"
                 aria-label={social.name}
               >
                 <svg className="w-5 h-5 text-black group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                   <path d={social.icon} />
                 </svg>
               </a>
             ))}
           </div>

           {/* CTA Button */}
           <button className="tech-font text-sm px-10 py-4 bg-gradient-to-r from-[#b388eb] to-[#7f5af0] text-white rounded-full uppercase tracking-widest hover:shadow-[0_10px_40px_rgba(179,136,235,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer">
             📧 Send Message
           </button>

        </div>
      </div>
    </section>
  );
};

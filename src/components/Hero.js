import React, { useState, useEffect, useRef } from 'react';
import minaphoto from '../assets/mina.jpg'; // Adjust the path as necessary

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredTech, setHoveredTech] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const heroRef = useRef(null);

  // Immediate entrance animation - no delay
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Optimized mouse tracking with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking && heroRef.current) {
        requestAnimationFrame(() => {
          const rect = heroRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
          setMousePos({ x: x * 15, y: y * 15 });
          ticking = false;
        });
        ticking = true;
      }
    };

    // Debounce mouse events
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { name: 'React', color: 'from-blue-400 to-cyan-400', shadow: 'shadow-blue-500/50' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-400', shadow: 'shadow-green-500/50' },
    { name: 'TypeScript', color: 'from-blue-500 to-indigo-500', shadow: 'shadow-blue-600/50' },
    { name: 'Python', color: 'from-yellow-400 to-orange-400', shadow: 'shadow-yellow-500/50' },
    { name: 'AWS', color: 'from-orange-400 to-red-400', shadow: 'shadow-orange-500/50' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/minaboktor1/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-400 hover:border-blue-400/50 hover:shadow-blue-400/20'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/MinaBoktor',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-gray-300 hover:border-gray-400/50 hover:shadow-gray-400/20'
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/Mina__Boktor',
      icon: (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2H21.5l-7.4 8.487L22.5 22h-6.244l-4.84-5.873L6.195 22H2.939l7.8-8.944L1.5 2h6.244l4.356 5.302L18.244 2zm-1.07 18h1.64L8.864 4h-1.64l9.95 16z" />
          </svg>

      ),
      color: 'hover:text-sky-400 hover:border-sky-400/50 hover:shadow-sky-400/20'
    },
    {
      name: 'Email',
      href: 'mailto:mina.maged.pe@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'hover:text-emerald-400 hover:border-emerald-400/50 hover:shadow-emerald-400/20'
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden pt-20"
    >
      {/* Optimized Grid Pattern - CSS only */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          willChange: 'transform',
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`
        }}
      />

      {/* Simplified Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 65%)',
            willChange: 'transform',
            transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)`
          }}
        />
        
        <div 
          className="absolute top-2/3 left-1/4 w-60 h-60 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 65%)',
            willChange: 'transform',
            transform: `translate3d(${-mousePos.x * 0.15}px, ${-mousePos.y * 0.15}px, 0)`
          }}
        />
      </div>

      {/* Vertical Social Links */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center space-y-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-slate-600" />
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/60 backdrop-blur-sm border border-slate-700 text-slate-400 transition-all duration-300 group relative overflow-hidden
              ${hoveredSocial === index 
                ? `scale-110 shadow-lg ${social.color.split(' ')[1]} ${social.color.split(' ')[2]} ${social.color.split(' ')[3]}` 
                : 'hover:scale-105'
              } ${social.color}`}
            onMouseEnter={() => setHoveredSocial(index)}
            onMouseLeave={() => setHoveredSocial(null)}
            style={{
              willChange: 'transform',
              transform: `translate3d(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px, 0)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative z-10">
              {social.icon}
            </span>
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-slate-200 text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {social.name}
            </div>
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-slate-600" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center relative z-10 pt-20 pb-16">
        
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-6xl mx-auto mb-16">
          
          {/* Left Content - Immediate render */}
          <div className={`space-y-8 lg:space-y-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Status Indicator - Enhanced hover */}
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-emerald-400/50 transition-all duration-300" />
              <p className="text-slate-300 text-lg font-light tracking-wide uppercase group-hover:text-emerald-300 transition-colors duration-300">
                Available for work
              </p>
            </div>

            {/* Typography - Optimized for LCP */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-white hover:text-slate-200 transition-colors duration-300 cursor-default">MINA</span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-500 cursor-default">
                  BOKTOR
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-light text-slate-400 tracking-wide uppercase hover:text-slate-300 transition-colors duration-300 cursor-default">
                Software Engineer
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl hover:text-slate-200 transition-colors duration-300 cursor-default">
                Turning code into impactful, user-friendly solutions through
                <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300"> full-stack development</span> and 
                <span className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300"> scalable architecture</span>.
              </p>
            </div>

            {/* Tech Stack - Enhanced with individual hover effects */}
            <div className="flex flex-wrap gap-3 pt-2">
              {techStack.map((tech, i) => (
                <span 
                  key={tech.name}
                  className={`px-4 py-2 bg-slate-800/60 border border-slate-700 text-slate-300 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer group relative overflow-hidden
                    ${hoveredTech === i ? `shadow-xl ${tech.shadow} border-slate-500 text-white scale-105` : 'hover:border-slate-600 hover:scale-105 hover:shadow-lg'}
                  `}
                  onMouseEnter={() => setHoveredTech(i)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {hoveredTech === i && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-10 transition-opacity duration-300`} />
                  )}
                  <span className="relative z-10">{tech.name}</span>
                </span>
              ))}
            </div>

            {/* CTA Row with Social Links (Mobile) */}
            <div className="space-y-4 pt-4">
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume.pdf"
                  download="Mina-Boktor-Resume.pdf"
                >
                  <button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    <span className="relative z-10">Download CV</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </a>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-slate-800/50 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden hover:shadow-lg hover:shadow-slate-800/50 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/0 via-slate-600/10 to-slate-600/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative z-10">View Portfolio</span>
                </button>
              </div>

              {/* Mobile Social Links */}
              <div className="flex lg:hidden items-center gap-3">
                <span className="text-slate-500 text-sm font-medium">Connect:</span>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800/60 backdrop-blur-sm border border-slate-700 text-slate-400 transition-all duration-300 group relative overflow-hidden
                        ${hoveredSocial === index 
                          ? `scale-110 shadow-lg ${social.color.split(' ')[1]} ${social.color.split(' ')[2]} ${social.color.split(' ')[3]}` 
                          : 'hover:scale-105'
                        } ${social.color}`}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      <span className="relative z-10 text-sm">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Optimized */}
          <div className={`relative transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto group">
              
              {/* Background Shape - CSS only */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-3xl border border-slate-700/50 backdrop-blur-sm group-hover:from-blue-500/25 group-hover:to-purple-500/25 group-hover:border-slate-600/70 transition-all duration-500"
                style={{
                  willChange: 'transform',
                  transform: `translate3d(${mousePos.x * 0.08}px, ${mousePos.y * 0.08}px, 0) rotate(3deg)`
                }}
              />
              
              {/* Profile Container */}
              <div className="relative w-full h-full bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group-hover:shadow-3xl group-hover:border-slate-600 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 opacity-60" />
                    <img src={minaphoto} alt="Mina Boktor" className="w-full h-full mb-20 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* Floating Stats - Enhanced hover effects */}
              <div 
                className="absolute -top-4 -right-6 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-xl hover:bg-slate-700/90 hover:border-slate-600 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-110 transition-all duration-300 cursor-default group/stat"
                style={{
                  willChange: 'transform',
                  transform: `translate3d(${mousePos.x * 0.04}px, ${mousePos.y * 0.04}px, 0)`
                }}
              >
                <div className="text-center min-w-16">
                  <div className="text-2xl font-bold text-emerald-400 group-hover/stat:text-emerald-300 transition-colors duration-300">3+</div>
                  <div className="text-xs text-slate-400 font-light uppercase tracking-wide group-hover/stat:text-slate-300 transition-colors duration-300">Years</div>
                </div>
              </div>

              <div 
                className="absolute top-20 -left-6 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-xl hover:bg-slate-700/90 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-110 transition-all duration-300 cursor-default group/stat"
                style={{
                  willChange: 'transform',
                  transform: `translate3d(${-mousePos.x * 0.03}px, ${mousePos.y * 0.03}px, 0)`
                }}
              >
                <div className="text-center min-w-16">
                  <div className="text-2xl font-bold text-blue-400 group-hover/stat:text-blue-300 transition-colors duration-300">15+</div>
                  <div className="text-xs text-slate-400 font-light uppercase tracking-wide group-hover/stat:text-slate-300 transition-colors duration-300">Projects</div>
                </div>
              </div>

              <div 
                className="absolute -bottom-4 left-8 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-xl hover:bg-slate-700/90 hover:border-slate-600 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-110 transition-all duration-300 cursor-default group/stat"
                style={{
                  willChange: 'transform',
                  transform: `translate3d(${mousePos.x * 0.035}px, ${-mousePos.y * 0.035}px, 0)`
                }}
              >
                <div className="text-center min-w-16">
                  <div className="text-2xl font-bold text-purple-400 group-hover/stat:text-purple-300 transition-colors duration-300">98%</div>
                  <div className="text-xs text-slate-400 font-light uppercase tracking-wide group-hover/stat:text-slate-300 transition-colors duration-300">Success</div>
                </div>
              </div>

              <div 
                className="absolute bottom-16 -right-6 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-xl hover:bg-slate-700/90 hover:border-slate-600 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-110 transition-all duration-300 cursor-default group/stat"
                style={{
                  willChange: 'transform',
                  transform: `translate3d(${-mousePos.x * 0.05}px, ${-mousePos.y * 0.05}px, 0)`
                }}
              >
                <div className="text-center min-w-16">
                  <div className="text-2xl font-bold text-cyan-400 group-hover/stat:text-cyan-300 transition-colors duration-300">4</div>
                  <div className="text-xs text-slate-400 font-light uppercase tracking-wide group-hover/stat:text-slate-300 transition-colors duration-300">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
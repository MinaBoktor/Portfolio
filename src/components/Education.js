import React, { useState, useEffect, useRef } from 'react';
import asu from '../assets/asu.png';
import uel from '../assets/uel.png';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const educationRef = useRef(null);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for parallax effects - optimized like Hero
  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking && educationRef.current) {
        requestAnimationFrame(() => {
          const rect = educationRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
          setMousePos({ x: x * 15, y: y * 15 });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const educationData = [
    {
      id: 1,
      institution: "University of East London",
      location: "London, UK",
      degree: "Bachelor's degree in Computer Science",
      department: "Artificial Intelligence Department",
      period: "October 2023 — Present",
      status: "In Progress",
      color: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/30",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      flag: "🇬🇧",
      logo: uel,
      url: "https://www.uel.ac.uk"
    },
    {
      id: 2,
      institution: "Ain Shams University",
      location: "Cairo, Egypt",
      degree: "Bachelor's degree in Computer Science",
      department: "Artificial Intelligence Department",
      period: "October 2023 — Present",
      status: "In Progress",
      color: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/30",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      flag: "🇪🇬",
      logo: asu,
      url: "https://ums.asu.edu.eg"
    },

  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      ref={educationRef}
      id="education"
      className="min-h-screen relative overflow-hidden py-20"
    >
      {/* Grid Pattern Background - matching Hero */}
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

      {/* Floating Orbs - matching Hero style */}
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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400" />
            <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            EDUCATION
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Building expertise in <span className="text-blue-400 font-medium">Artificial Intelligence</span> through 
            comprehensive dual-degree programs across international institutions.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`group relative transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(edu.url)}
            >
              {/* Card Background */}
              <div 
                className={`relative bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 transition-all duration-500 group-hover:bg-slate-800/80 group-hover:border-slate-600 group-hover:shadow-2xl overflow-hidden
                  ${hoveredCard === index ? `${edu.shadowColor} shadow-2xl scale-[1.02]` : 'hover:scale-[1.01]'}
                `}
                style={{
                  willChange: 'transform',
                  transform: `translate3d(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px, 0)`
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-slate-800 rounded-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img src={edu.logo} alt={`${edu.institution} logo`} className="w-16 h-16 mb-2" />
                      
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors duration-300">
                          {edu.institution}
                        </h3>
                        <p className="text-slate-400 text-sm font-medium flex items-center gap-1">
                          <span>{edu.flag}</span>
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${edu.borderColor} ${edu.accentColor} bg-slate-800/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}>
                      {edu.status}
                    </div>
                  </div>

                  {/* Degree Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`} />
                      <h4 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                        {edu.degree}
                      </h4>
                    </div>
                    
                    <p className={`${edu.accentColor} font-medium text-sm pl-5`}>
                      {edu.department}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-3 text-slate-400 text-sm mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{edu.period}</span>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
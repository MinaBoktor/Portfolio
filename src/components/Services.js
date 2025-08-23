import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const servicesRef = useRef(null);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll functions
  const scrollToContactSection = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mouse tracking for parallax effects (desktop only)
  useEffect(() => {
    if (isMobile) return; // Skip mouse tracking on mobile

    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking && servicesRef.current) {
        requestAnimationFrame(() => {
          const rect = servicesRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
          setMousePos({ x: x * 5, y: y * 5 }); // Reduced intensity
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Intersection observer for entrance animation with better mobile support
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: isMobile ? 0.1 : 0.2, // Lower threshold for mobile
        rootMargin: isMobile ? '50px' : '0px' // Earlier trigger on mobile
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  const scrollToContact = (serviceName) => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll animation to complete, then set the message
      setTimeout(() => {
        const messageField = document.querySelector('textarea[name="message"]');
        if (messageField) {
          try {
            // More robust value setting for mobile
            messageField.value = `I'm interested in ${serviceName}`;
            
            // Try multiple event dispatch methods for better mobile compatibility
            const events = ['input', 'change', 'focus'];
            events.forEach(eventType => {
              const event = new Event(eventType, { bubbles: true });
              messageField.dispatchEvent(event);
            });
            
            messageField.focus();
          } catch (error) {
            console.log('Form auto-fill not available on this device');
          }
        }
      }, 800);
    }
  };

  const services = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Full-Stack Web Applications",
      subtitle: "End-to-End Development",
      description: "Custom web applications built with React, Node.js, and modern frameworks. From concept to deployment, I deliver scalable solutions that grow with your business.",
      features: ["Responsive Design", "API Development", "Database Architecture", "Cloud Deployment"],
      color: "from-blue-400 to-cyan-400",
      shadow: "shadow-blue-500/20",
      hoverShadow: "shadow-blue-500/40"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      title: "Desktop Applications",
      subtitle: "Cross-Platform Solutions",
      description: "Powerful desktop applications using Electron, Python, or native technologies. Perfect for businesses needing robust, offline-capable software solutions.",
      features: ["Cross-Platform Support", "Native Performance", "Offline Functionality", "Custom UI/UX"],
      color: "from-purple-400 to-indigo-400",
      shadow: "shadow-purple-500/20",
      hoverShadow: "shadow-purple-500/40"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Shopify Custom Development",
      subtitle: "E-commerce Excellence",
      description: "Custom Shopify themes, apps, and integrations that convert visitors into customers. Optimized for performance and built for sales success.",
      features: ["Custom Themes", "App Development", "Payment Integration", "SEO Optimization"],
      color: "from-emerald-400 to-green-400",
      shadow: "shadow-emerald-500/20",
      hoverShadow: "shadow-emerald-500/40"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance Optimization",
      subtitle: "Speed & Efficiency",
      description: "Transform slow websites into lightning-fast experiences. Database optimization, code refactoring, and infrastructure improvements that boost conversions.",
      features: ["Speed Optimization", "Database Tuning", "Code Refactoring", "Monitoring Setup"],
      color: "from-yellow-400 to-orange-400",
      shadow: "shadow-yellow-500/20",
      hoverShadow: "shadow-yellow-500/40"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "API Development & Integration",
      subtitle: "Seamless Connections",
      description: "Custom APIs and third-party integrations that connect your systems. RESTful APIs, webhooks, and microservices architecture for modern businesses.",
      features: ["RESTful APIs", "Third-party Integration", "Microservices", "Real-time Data"],
      color: "from-red-400 to-pink-400",
      shadow: "shadow-red-500/20",
      hoverShadow: "shadow-red-500/40"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "Technical Consulting",
      subtitle: "Strategic Guidance",
      description: "Expert technical consultation to guide your project decisions. Architecture planning, technology stack selection, and scalability strategies for long-term success.",
      features: ["Architecture Planning", "Tech Stack Selection", "Scalability Strategy", "Code Reviews"],
      color: "from-cyan-400 to-blue-400",
      shadow: "shadow-cyan-500/20",
      hoverShadow: "shadow-cyan-500/40"
    }
  ];

  return (
    <section 
      ref={servicesRef}
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group cursor-default">
            <div className="w-2 h-2 bg-blue-400 rounded-full transition-all duration-300" 
                 style={{ transform: !isMobile && hoveredService !== null ? 'scale(1.25)' : 'scale(1)' }} />
            <span className="text-blue-400 font-medium tracking-wide uppercase text-xs sm:text-sm transition-colors duration-300">
              Professional Services
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight">
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Vision
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Premium software solutions crafted with precision and delivered with excellence. 
            Let's build something extraordinary together.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              id={`service-${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              data-service-title={service.title}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700 p-4 sm:p-6 md:p-8 transition-all duration-500 cursor-pointer group relative overflow-hidden
                ${!isMobile && hoveredService === index 
                  ? `scale-105 shadow-2xl ${service.hoverShadow} border-slate-600 bg-slate-800/80` 
                  : 'active:scale-95 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-800/50'
                }
                ${isMobile ? 'active:bg-slate-800/80' : ''}
              `}
              onMouseEnter={() => !isMobile && setHoveredService(index)}
              onMouseLeave={() => !isMobile && setHoveredService(null)}
              onTouchStart={() => isMobile && setHoveredService(index)}
              onTouchEnd={() => isMobile && setTimeout(() => setHoveredService(null), 150)}
              onClick={() => scrollToContact(service.title)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translate3d(0, ${isVisible ? 0 : 40}px, 0) ${!isMobile ? `translate3d(${mousePos.x * 0.005}px, ${mousePos.y * 0.005}px, 0)` : ''}`,
                transition: `all 0.5s ease-out ${index * 0.1}s, transform 0.3s ease-out`,
                willChange: 'transform, opacity', // Optimize for mobile performance
              }}
            >
              {/* Gradient Overlay on Hover */}
              {hoveredService === index && (
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 transition-opacity duration-300`} />
              )}
              
              {/* Shimmer Effect - Disabled on mobile for performance */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              )}
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} p-3 sm:p-4 text-white mb-4 sm:mb-6 transition-all duration-300 ${service.shadow}`}
                     style={{ 
                       transform: !isMobile && hoveredService === index ? 'scale(1.1) rotate(3deg)' : 'scale(1) rotate(0deg)' 
                     }}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-blue-400 mb-3 sm:mb-4 uppercase tracking-wide">
                    {service.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 sm:px-3 py-1 bg-slate-700/60 text-slate-300 rounded-full border border-slate-600/50 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-700 p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden group transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transition-all duration-500" 
               style={{ 
                 background: hoveredService !== null ? 'linear-gradient(135deg, rgb(59 130 246 / 0.1), rgb(147 51 234 / 0.1))' : 'linear-gradient(135deg, rgb(59 130 246 / 0.05), rgb(147 51 234 / 0.05))'
               }} />
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss your vision and create a solution that exceeds expectations. 
              Free consultation included with every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={scrollToContactSection}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 active:from-blue-700 active:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/40 active:scale-95 group relative overflow-hidden"
              >
                {!isMobile && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                )}
                <span className="relative z-10">Start Your Project</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-slate-800/50 active:scale-95 group relative overflow-hidden hover:shadow-lg hover:shadow-slate-800/50"
              >
                {!isMobile && (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/0 via-slate-600/10 to-slate-600/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                )}
                <span className="relative z-10">View My Work</span>
              </button>
            </div>
            
            <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free consultation & project estimate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
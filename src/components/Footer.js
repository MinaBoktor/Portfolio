import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
          const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
          setMousePos({ x: x * 10, y: y * 10 });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to scroll to specific service
  const scrollToService = (serviceName) => {
    // Create a service ID from the service name (matching your Services.js structure)
    const serviceId = serviceName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    // First try to find the specific service element
    let serviceElement = document.getElementById(`service-${serviceId}`);
    
    // If specific service element doesn't exist, find it by text content
    if (!serviceElement) {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const serviceCards = servicesSection.querySelectorAll('[data-service-title]');
        serviceElement = Array.from(serviceCards).find(card => 
          card.getAttribute('data-service-title') === serviceName
        );
      }
    }
    
    // If we found the specific service, scroll to it
    if (serviceElement) {
      // Calculate offset to account for fixed header (adjust as needed)
      const headerOffset = 100;
      const elementPosition = serviceElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Highlight the service temporarily
      setTimeout(() => {
        serviceElement.style.transform = 'scale(1.02)';
        serviceElement.style.boxShadow = '0 25px 50px -12px rgba(59, 130, 246, 0.5)';
        
        setTimeout(() => {
          serviceElement.style.transform = '';
          serviceElement.style.boxShadow = '';
        }, 2000);
      }, 800);
    } else {
      // Fallback: scroll to services section
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigationLinks = [
    { name: 'Home', onClick: scrollToTop },
    { name: 'About', onClick: () => scrollToSection('education') },
    { name: 'Services', onClick: () => scrollToSection('services') },
    { name: 'Projects', onClick: () => scrollToSection('projects') },
    { name: 'Experience', onClick: () => scrollToSection('experience') },
    { name: 'Contact', onClick: () => scrollToSection('contact') }
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
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

  const quickServices = [
    'Full-Stack Web Applications',
    'Desktop Applications', 
    'Shopify Custom Development',
    'Performance Optimization',
    'API Development & Integration',
    'Technical Consulting'
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                  MINA BOKTOR
                </h3>
                <p className="text-slate-400 font-light uppercase tracking-wide text-sm">
                  Software Engineer
                </p>
              </div>
              
              <p className="text-slate-300 leading-relaxed">
                Crafting digital experiences through innovative software solutions and modern web technologies.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-emerald-400/50 transition-all duration-300" />
                <p className="text-slate-300 text-sm font-medium group-hover:text-emerald-300 transition-colors duration-300">
                  Available for new projects
                </p>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={link.onClick}
                      className={`text-slate-400 hover:text-white transition-all duration-300 cursor-pointer text-left group flex items-center gap-2
                        ${hoveredLink === index ? 'text-white translate-x-1' : ''}
                      `}
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`w-1 h-1 bg-blue-400 rounded-full transition-all duration-300 ${hoveredLink === index ? 'w-3 bg-blue-300' : ''}`} />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3">
                {quickServices.map((service, index) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToService(service)}
                      className="text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2 group text-left w-full"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors duration-300" />
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg uppercase tracking-wider">
                Connect
              </h4>

              {/* Social Links */}
              <div>
                <p className="text-slate-500 text-sm mb-4 uppercase tracking-wide">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-400 transition-all duration-300 group relative overflow-hidden
                        ${hoveredSocial === index 
                          ? `scale-110 shadow-lg ${social.color.split(' ')[1]} ${social.color.split(' ')[2]} ${social.color.split(' ')[3]}` 
                          : 'hover:scale-105'
                        } ${social.color}`}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      <span className="relative z-10">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download="Mina-Boktor-Resume.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:scale-105 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative z-10">Download CV</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-slate-900 px-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-slate-500 text-sm text-center">
              <span>© 2025 Mina Boktor. All rights reserved.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
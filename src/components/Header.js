import React, { useState, useEffect } from 'react';
import signature from '../assets/signature.png'; // Adjust the path as necessary

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      // Scroll to top for home/hero section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'education', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo/Brand - Now clickable */}
          <div className="flex items-center">
            <button onClick={scrollToTop} className="focus:outline-none">
              <img 
                src={signature} 
                alt="Logo" 
                className="h-12 lg:h-14 mt-2 filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-200 cursor-pointer" 
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 lg:px-6 py-2 text-sm lg:text-base font-medium text-slate-300 hover:text-white relative group transition-all duration-200 tracking-wide uppercase"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold text-xs lg:text-sm tracking-widest uppercase transition-all duration-200 flex items-center gap-2 hover:gap-3 shadow-lg shadow-blue-600/20"
            >
              LET'S TALK
              <svg 
                className="w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 focus:outline-none border border-transparent hover:border-slate-700/50"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute inset-x-0 top-0 h-0.5 bg-slate-300 rounded transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2.5 bg-white' : 'translate-y-0'
              }`}></span>
              <span className={`absolute inset-x-0 top-2.5 h-0.5 bg-slate-300 rounded transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute inset-x-0 top-5 h-0.5 bg-slate-300 rounded transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2.5 bg-white' : 'translate-y-0'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-slate-900/95 backdrop-blur-lg rounded-2xl mt-2 border border-slate-700/50 shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 transform tracking-wide uppercase ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            
            <div className="px-6 pt-4 pb-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-sm tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                LET'S TALK
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Header;
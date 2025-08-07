import React, { useState, useEffect } from 'react';
import './Header.css';

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-text">Portfolio</span>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-links">
              <button 
                className="nav-link home-link"
                onClick={() => scrollToSection('hero')}
              >
                Home
              </button>
              <button 
                className="nav-link about-link"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button 
                className="nav-link projects-link"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
              <button 
                className="nav-link skills-link"
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
              <button 
                className="nav-link contact-link"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </div>
            
            <div className="nav-cta">
              <span className="availability-status">✅ Available for work</span>
            </div>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


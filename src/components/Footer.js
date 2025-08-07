import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-name">Portfolio</h3>
              <p className="brand-tagline">
                Building digital experiences that make a difference
              </p>
              <div className="social-links">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="GitHub"
                >
                  <span>📚</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <span>💼</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="Twitter"
                >
                  <span>🐦</span>
                </a>
                <a 
                  href="mailto:hello@developer.com" 
                  className="social-link"
                  aria-label="Email"
                >
                  <span>📧</span>
                </a>
              </div>
            </div>

            <div className="footer-nav">
              <div className="nav-section">
                <h4 className="nav-title">Navigation</h4>
                <ul className="nav-links">
                  <li>
                    <button onClick={() => scrollToSection('hero')} className="nav-link">
                      Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('about')} className="nav-link">
                      About
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('projects')} className="nav-link">
                      Projects
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('skills')} className="nav-link">
                      Skills
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('contact')} className="nav-link">
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div className="nav-section">
                <h4 className="nav-title">Services</h4>
                <ul className="nav-links">
                  <li><span className="nav-link">Web Development</span></li>
                  <li><span className="nav-link">Frontend Development</span></li>
                  <li><span className="nav-link">Backend Development</span></li>
                  <li><span className="nav-link">Full Stack Solutions</span></li>
                  <li><span className="nav-link">API Development</span></li>
                </ul>
              </div>

              <div className="nav-section">
                <h4 className="nav-title">Technologies</h4>
                <ul className="nav-links">
                  <li><span className="nav-link">React & Next.js</span></li>
                  <li><span className="nav-link">Node.js & Express</span></li>
                  <li><span className="nav-link">MongoDB & PostgreSQL</span></li>
                  <li><span className="nav-link">TypeScript</span></li>
                  <li><span className="nav-link">Cloud Services</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-cta">
            <div className="cta-content">
              <h3>Ready to start your project?</h3>
              <p>Let's work together to bring your ideas to life</p>
              <button 
                className="cta-button"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p className="copyright">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <div className="footer-links">
              <span className="footer-link">Privacy Policy</span>
              <span className="footer-divider">•</span>
              <span className="footer-link">Terms of Service</span>
              <span className="footer-divider">•</span>
              <span className="footer-link">Sitemap</span>
            </div>
          </div>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>⬆️</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


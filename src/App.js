import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Career from './components/Career';

function App() {
  useEffect(() => {
    // Add structured data for better SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Portfolio - Full Stack Developer",
      "url": "https://yourportfolio.com",
      "description": "Professional portfolio showcasing full stack development skills and projects",
      "author": {
        "@type": "Person",
        "name": "Portfolio Developer",
        "jobTitle": "Full Stack Developer"
      },
      "mainEntity": {
        "@type": "Person",
        "name": "Portfolio Developer",
        "jobTitle": "Full Stack Developer",
        "knowsAbout": ["JavaScript", "React", "Node.js", "TypeScript", "Full Stack Development"]
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main role="main">
        <Hero />
        <Education />
        <Projects />
        <Career />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


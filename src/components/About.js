import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3 className="about-title">
                Web Developer ⚡ | UI/UX Enthusiast 💻
              </h3>
              
              <p className="about-description">
                I'm a passionate web developer focused on building fast, full-stack applications 
                using modern technologies like the MERN stack (MongoDB, Express, React, Node.js), 
                along with Next.js and TypeScript.
              </p>
              
              <p className="about-description">
                My journey into web development began through self-learning and continuous exploration 
                of new technologies. I've developed strong skills in tools such as Tailwind CSS, 
                Redux, and various modern frameworks. I'm passionate about delivering seamless 
                digital experiences and continuously growing my capabilities.
              </p>
              
              <p className="about-description">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and tutorials.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>I love tackling complex challenges and finding elegant solutions</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Performance Focused</h4>
                  <p>Optimizing applications for speed and user experience</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🎨</div>
                <div className="highlight-content">
                  <h4>Design Minded</h4>
                  <p>Creating beautiful interfaces that users love to interact with</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">📚</div>
                <div className="highlight-content">
                  <h4>Continuous Learner</h4>
                  <p>Always staying updated with the latest technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span className="profile-emoji">👨‍💻</span>
                </div>
              </div>
              
              <div className="profile-info">
                <h4 className="profile-name">Full Stack Developer</h4>
                <p className="profile-location">📍 Available Worldwide</p>
                
                <div className="profile-stats">
                  <div className="profile-stat">
                    <span className="stat-value">3+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="profile-stat">
                    <span className="stat-value">50+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="profile-stat">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tech-icons">
              <div className="tech-icon react">
                <span>⚛️</span>
                <span>React</span>
              </div>
              <div className="tech-icon node">
                <span>🟢</span>
                <span>Node.js</span>
              </div>
              <div className="tech-icon js">
                <span>🟨</span>
                <span>JavaScript</span>
              </div>
              <div className="tech-icon python">
                <span>🐍</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


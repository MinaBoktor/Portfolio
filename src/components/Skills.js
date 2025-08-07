import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'HTML5', level: 95, icon: '🟠' },
        { name: 'CSS3', level: 90, icon: '🔵' },
        { name: 'Tailwind CSS', level: 92, icon: '💨' },
        { name: 'Sass/SCSS', level: 85, icon: '💗' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚀' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Django', level: 75, icon: '🎯' },
        { name: 'REST APIs', level: 90, icon: '🔗' },
        { name: 'GraphQL', level: 70, icon: '📊' },
        { name: 'Socket.io', level: 78, icon: '⚡' },
        { name: 'Microservices', level: 72, icon: '🏗️' }
      ]
    },
    database: {
      title: 'Database & Cloud',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'MySQL', level: 78, icon: '🔶' },
        { name: 'Redis', level: 75, icon: '🔴' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Firebase', level: 82, icon: '🔥' },
        { name: 'Vercel', level: 88, icon: '▲' }
      ]
    },
    tools: {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 92, icon: '📚' },
        { name: 'GitHub', level: 90, icon: '🐙' },
        { name: 'VS Code', level: 95, icon: '💙' },
        { name: 'Figma', level: 80, icon: '🎨' },
        { name: 'Postman', level: 85, icon: '📮' },
        { name: 'Jest', level: 78, icon: '🃏' },
        { name: 'Webpack', level: 75, icon: '📦' },
        { name: 'Linux', level: 80, icon: '🐧' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-navigation">
            {categories.map(category => (
              <button
                key={category}
                className={`skill-nav-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="nav-icon">{skillCategories[category].icon}</span>
                <span className="nav-text">{skillCategories[category].title}</span>
              </button>
            ))}
          </div>

          <div className="skills-display">
            <div className="skills-header">
              <h3 className="skills-category-title">
                <span className="category-icon">{skillCategories[activeCategory].icon}</span>
                {skillCategories[activeCategory].title}
              </h3>
            </div>

            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-icon">💻</div>
              <div className="stat-content">
                <h4>Frontend</h4>
                <p>Modern UI/UX with React & Next.js</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">⚙️</div>
              <div className="stat-content">
                <h4>Backend</h4>
                <p>Scalable APIs with Node.js & Python</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🗄️</div>
              <div className="stat-content">
                <h4>Database</h4>
                <p>Efficient data management & cloud services</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🛠️</div>
              <div className="stat-content">
                <h4>DevOps</h4>
                <p>Modern development tools & workflows</p>
              </div>
            </div>
          </div>

          <div className="skills-cta">
            <h3>Ready to work together?</h3>
            <p>I'm always excited to take on new challenges and collaborate on interesting projects.</p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


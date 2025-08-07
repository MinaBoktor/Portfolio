import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Full-Stack E-commerce Platform",
      description: "A high-performance Next.js e-commerce platform with Redux Toolkit, dynamic filtering, and Stripe payments, powered by a robust Node.js and Prisma backend.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Node.js", "Prisma", "Redux Toolkit", "Stripe", "TailwindCSS"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "A complete LMS built with React (Vite), Node.js, and MongoDB, featuring robust course management, PayPal integration, and distinct layouts for teachers and students.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "PayPal", "Tailwind CSS"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Gamified Learning Dashboard",
      description: "An interactive reward-based dashboard built with Next.js and modern gamification techniques. Features real-time point tracking, badge achievements, and a dynamic reward store.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "React Query", "TailwindCSS", "Day.js", "Sonner"],
      category: "frontend",
      liveUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Business Dashboard App",
      description: "Dashboard App is an easy-to-use tool for managing your business. Designed to be simple yet powerful, with all the features you need to stay organized and productive.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Tailwind CSS", "Chart.js"],
      category: "frontend",
      liveUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "REST API with Authentication",
      description: "A robust RESTful API built with Node.js and Express, featuring JWT authentication, role-based access control, and comprehensive documentation.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      category: "backend",
      liveUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and group chat functionality using Socket.io and React.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Material-UI"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="project-icon">💻</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-badge">Featured Project</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link live" target="_blank" rel="noopener noreferrer">
                    <span>🔗</span> Live Demo
                  </a>
                  <a href={project.codeUrl} className="project-link code" target="_blank" rel="noopener noreferrer">
                    <span>📁</span> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects */}
        <div className="all-projects">
          <h3 className="projects-section-title">All Projects</h3>
          
          <div className="project-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="card-image">
                  <div className="image-placeholder">
                    <span className="project-icon">🚀</span>
                  </div>
                  <div className="card-overlay">
                    <div className="overlay-links">
                      <a href={project.liveUrl} className="overlay-link" target="_blank" rel="noopener noreferrer">
                        <span>🔗</span>
                      </a>
                      <a href={project.codeUrl} className="overlay-link" target="_blank" rel="noopener noreferrer">
                        <span>📁</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="card-content">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-description">{project.description}</p>
                  
                  <div className="card-tech">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag small">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag small more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React, { useState, useEffect, useRef } from 'react';
import cognara from '../assets/cognara.png';
import apexequity from '../assets/apexequity.png';
import offline from '../assets/offline.png';
import lumora from '../assets/lumora.png';
import lemon from '../assets/lemon.png';
import cs50 from '../assets/cs50.png';
import rsa from '../assets/rsa.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectsRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    // Create the observer with a callback that updates state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id');
            // Use the functional update form to avoid needing visibleProjects in dependencies
            setVisibleProjects(prev => {
              if (projectId && !prev.includes(projectId)) {
                return [...prev, projectId];
              }
              return prev;
            });
            // Once the element is visible, we can stop observing it for performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Find all project elements and start observing them
    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => observer.observe(el));

    // A simple fallback in case the observer doesn't fire for some reason
    const fallbackTimer = setTimeout(() => {
      const allProjectIds = Array.from(projectElements).map(el => el.getAttribute('data-project-id'));
      setVisibleProjects(allProjectIds); // Make all visible after 2 seconds
    }, 2000);

    // Cleanup function: disconnect the observer and clear the timer when the component unmounts
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Project categories for filtering
  const categories = [
    { id: 'all', name: 'All Projects', count: 11 },
    { id: 'web', name: 'Web Development', count: 5 },
    { id: 'ai', name: 'AI/ML', count: 2 },
    { id: 'security', name: 'Security', count: 2 },
    { id: 'tools', name: 'Tools & Utils', count: 2 }
  ];

  // Your actual GitHub projects
  const projects = [
        {
      id: 'project-apex-equity',
      title: 'Apex Equity',
      category: 'web',
      description: 'A JavaScript-based equity management platform with Boost Software License, focusing on financial data processing and analysis.',
      longDescription: 'Apex Equity provides comprehensive tools for equity management, featuring advanced analytics and user-friendly interfaces.',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS', 'Web Platform'],
      githubUrl: 'https://github.com/MinaBoktor/Apex-Equity',
      liveUrl: 'https://apexequity.netlify.app/',
      featured: false,
      impact: {
        metric: 'Financial',
        description: 'Data Platform'
      },
      img: apexequity,
      status: 'Active',
      year: '2024'
    },

        {
      id: 'project-rsa-securex',
      title: 'RSA SecureX',
      category: 'security',
      description: 'Implementation of RSA public-key cryptosystem using extended precision arithmetic for handling huge integers (hundreds of digits).',
      longDescription: 'RSA SecureX demonstrates advanced cryptographic principles with the ability to handle extremely large numbers for enhanced security.',
      technologies: ['C#', 'Cryptography', 'Extended Precision Arithmetic', 'RSA Algorithm'],
      githubUrl: 'https://github.com/MinaBoktor/RSA-secureX',
      featured: false,
      impact: {
        metric: 'Complex',
        description: 'Encryption and Decryption'
      },
      img: rsa,
      status: 'Complete',
      year: '2025'
    },
    {
      
      id: 'project-cognara',
      title: 'Cognara',
      category: 'ai',
      description: 'An advanced AI-powered cognitive assistance platform built with JavaScript, featuring intelligent automation and user interaction capabilities.',
      longDescription: 'Cognara is a sophisticated AI platform designed to enhance cognitive processes through intelligent automation and seamless user interactions.',
      technologies: ['React.js', 'Django', 'Python', 'JavaScript', 'AI/ML', 'API Integration'],
      liveUrl: 'https://cognara-blog.netlify.app/',
      featured: true,
      impact: {
        metric: 'AI-Powered',
        description: 'Cognitive Assistant'
      },
      img: cognara,
      status: 'Active',
      year: '2025'
    },
    {
      id: 'project-lumora',
      title: 'Lumora Chrome Extension',
      category: 'tools',
      description: 'A minimalist Chrome extension designed to help capture brilliant insights from web reading with simple highlighting and organization features.',
      longDescription: 'Lumora preserves insights that matter most by organizing highlighted content by website, making it easy to review and reference important information.',
      technologies: ['JavaScript', 'Chrome Extension API', 'Local Storage', 'DOM Manipulation'],
      githubUrl: 'https://github.com/MinaBoktor/Lumora',
      featured: true,
      impact: {
        metric: 'High',
        description: 'Usability and Productivity'
      },
      img: lumora,
      status: 'Published',
      year: '2025'
    },
    {
      id: 'project-offline-mode',
      title: 'Offline Mode for Raindrop.io',
      category: 'tools',
      description: 'A Python application that creates local copies of Raindrop.io bookmarks for offline access and backup purposes.',
      longDescription: 'This tool ensures your important bookmarks are always accessible, even without internet connection, by maintaining synchronized local copies.',
      technologies: ['Python', 'API Integration', 'File Management', 'Synchronization'],
      githubUrl: 'https://github.com/MinaBoktor/Offline-mode',
      featured: true,
      impact: {
        metric: 'Offline',
        description: 'Bookmark Access'
      },
      img: offline,
      status: 'Active',
      year: '2025'
    },

    {
      id: 'project-cs50-final',
      title: 'Harvard CS50 Final Project',
      category: 'web',
      description: 'Final project for Harvard\'s CS50 course, demonstrating comprehensive web development skills and problem-solving abilities.',
      longDescription: 'A culminating project showcasing the knowledge and skills acquired throughout the renowned Harvard CS50 computer science course.',
      technologies: ['Flask', 'Python', 'UI/UX', 'HTML5', 'CSS', 'JavaScript', 'Web Development'],
      githubUrl: 'https://github.com/MinaBoktor/Harvard-CS50-Final-Project',
      featured: false,
      impact: {
        metric: 'Harvard',
        description: 'CS50 Graduate'
      },
      img: cs50,
      status: 'Complete',
      year: '2024'
    },

    {
      id: 'project-little-lemon',
      title: 'Little Lemon Restaurant',
      category: 'web',
      description: 'A restaurant website project built with JavaScript, featuring menu management, reservations, and customer interaction features.',
      longDescription: 'Complete restaurant website solution with modern design, interactive menus, and booking functionality.',
      technologies: ['JavaScript', 'Web Development', 'UI/UX', 'Restaurant Management'],
      githubUrl: 'https://github.com/MinaBoktor/little-lemon',
      featured: false,
      impact: {
        metric: 'Full',
        description: 'Restaurant Site'
      },
      img: lemon,
      status: 'Complete',
      year: '2023'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section 
      id="projects"
      ref={projectsRef}
      className="min-h-screen py-20 relative"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 group">
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300" />
            <p className="text-blue-400 text-lg font-light tracking-wide uppercase group-hover:text-blue-300 transition-colors duration-300">
              Portfolio Showcase
            </p>
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300" />
          </div>

          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="block text-white hover:text-slate-200 transition-colors duration-300 cursor-default">MY PROJECTS</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-300 group relative overflow-hidden border ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-xl shadow-blue-600/20'
                  : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:bg-slate-700/60 hover:text-white hover:border-slate-600'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                {category.name}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Featured Projects Highlight */}
        {activeFilter === 'all' && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full" />
              Featured Projects
              <span className="text-sm bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full font-medium">
                Spotlight
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-project-id={project.id}
                  className={`group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:bg-slate-700/60 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ${
                    visibleProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
                      project.status === 'Live' || project.status === 'Active' || project.status === 'Published'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      {project.img ? (
                        <img src={project.img} style={{objectFit:'cover'}} className='w-full h-full' alt="project" ></img>) : (
                      <div className="text-slate-500 text-sm">{project.title}</div>
                      )}
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h4>
                      <span className="text-xs text-slate-500 font-medium">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Impact Metric */}
                    <div className="mb-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600/30">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">
                        {project.impact.metric}
                      </div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">
                        {project.impact.description}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-slate-700/60 text-slate-300 px-2 py-1 rounded border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-slate-500 px-2 py-1">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
            {activeFilter === 'all' ? 'All Projects' : categories.find(c => c.id === activeFilter)?.name}
            <span className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-medium">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </span>
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:bg-slate-700/60 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ${
                  visibleProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
                    project.status === 'Live' || project.status === 'Active' || project.status === 'Published'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      {project.img ? (
                        <img src={project.img} style={{objectFit:'cover'}} className='w-full h-full' alt="project" ></img>) : (
                      <div className="text-slate-500 text-sm">{project.title}</div>
                      )}
                    </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Impact Metric */}
                  <div className="mb-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600/30">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">
                      {project.impact.metric}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">
                      {project.impact.description}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-700/60 text-slate-300 px-2 py-1 rounded border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-slate-500 px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-16">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl border border-slate-600 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-slate-400 mb-6">
              Let's collaborate on your next innovative project. From concept to deployment, 
              I'll help bring your vision to life with cutting-edge technology and clean code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 group relative overflow-hidden hover:shadow-xl hover:shadow-blue-600/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative z-10">Start a Project</span>
              </a>
              <a
                href="https://github.com/MinaBoktor"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50"
              >
                View All Repos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
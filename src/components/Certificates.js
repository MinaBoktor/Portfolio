import React, { useState, useEffect, useRef } from 'react';

import cs50x from '../assets/certificates/CS50x.png';
import cs50p from '../assets/certificates/CS50P.png';
import metaFrontend from '../assets/certificates/meta-frontend.png';
import GoogleFoundations from '../assets/certificates/Google Foundations of Project Management.jpg';
import ProjectIntialization from '../assets/certificates/Google Project Initiation, Starting a Successful Project.png';
import IBMLinux from '../assets/certificates/Hands-on Introduction to Linux Commands and Shell Scripting.png';
import BackendMeta from '../assets/certificates/Introduction to Back-End Development.png';
import databasesMeta from '../assets/certificates/Introduction to Databases for Back-End Development.png';
import SweIBM from '../assets/certificates/Introduction to Software Engineering.png';
import Learn from '../assets/certificates/Learn How to Learn.png';
import Testing from '../assets/certificates/Mina Maged Naem Boktor - Software Testing Bootcamp-1.png';
import Python from '../assets/certificates/Programming in Python.png';
import Negotiation from '../assets/certificates/Successful Negotiation Essential Strategies and Skills.png';
import Wellbeing from '../assets/certificates/The Science of Well-Being.png';
import Git from '../assets/certificates/Version Control.png';
import Emails from '../assets/certificates/Writing Professional Emails in English.png';




const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCert, setHoveredCert] = useState(null);
  const [visibleCerts, setVisibleCerts] = useState([]);
  const certsRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const certId = entry.target.getAttribute('data-cert-id');
            setVisibleCerts(prev => {
              if (certId && !prev.includes(certId)) {
                return [...prev, certId];
              }
              return prev;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const certElements = document.querySelectorAll('[data-cert-id]');
    certElements.forEach(el => observer.observe(el));

    const fallbackTimer = setTimeout(() => {
      const allCertIds = Array.from(certElements).map(el => el.getAttribute('data-cert-id'));
      setVisibleCerts(allCertIds);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Certificate categories
  const categories = [
    { id: 'all', name: 'All Certificates', count: 17 },
    { id: 'programming', name: 'Programming', count: 2 },
    { id: 'web', name: 'Web Development', count: 5 },
    { id: 'backend', name: 'Back-End & Databases', count: 3 },
    { id: 'softskills', name: 'Soft Skills', count: 4 },
    { id: 'other', name: 'Other', count: 3 }
  ];

  // Your certificates data
  const certificates = [
    {
      id: 'cert-cs50x',
      title: 'CS50x: Introduction to Computer Science',
      issuer: 'Harvard University',
      category: 'programming',
      date: '2021',
      credentialId: '154a7ac4-1cf0-44a3-aec5-09155369227',
      description: 'Comprehensive computer science fundamentals including ten problem sets, ten labs, and one final project.',
      skills: ['C', 'Python', 'SQL', 'JavaScript', 'HTML/CSS'],
      verifyUrl: 'https://cs50.harvard.edu/certificates/154a7ac4-1cf0-44a3-aec5-09155369227',
      featured: false,
      icon: '🎓',
      color: 'from-red-600 to-pink-600',
      img: cs50x
    },
    {
      id: 'cert-cs50p',
      title: 'CS50P: Introduction to Programming with Python',
      issuer: 'Harvard University',
      category: 'programming',
      date: '2023',
      credentialId: 'ecd98bf7-a030-4f31-aafc-356354821d2',
      description: 'Python programming fundamentals including nine problem sets and one final project.',
      skills: ['Python', 'Programming', 'Problem Solving'],
      verifyUrl: 'https://cs50.harvard.edu/certificates/ecd98bf7-a030-4f31-aafc-356354821d2',
      featured: false,
      icon: '🐍',
      color: 'from-blue-600 to-cyan-600',
      img: cs50p
    },
    {
      id: 'cert-meta-frontend',
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta',
      category: 'web',
      date: '2023',
      credentialId: 'Z4V64UXHJVVF',
      description: '9-course program preparing learners for an entry-level career as a front-end developer.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Version Control', 'UI/UX'],
      verifyUrl: 'https://coursera.org/verify/professional-cert/Z4V64UXHJVVF',
      featured: false,
      icon: '⚛️',
      color: 'from-blue-500 to-blue-700',
      img: metaFrontend
    },
    {
      id: 'cert-version-control',
      title: 'Version Control',
      issuer: 'Meta',
      category: 'web',
      date: '2023',
      credentialId: '7KKZ6S7B4XJU',
      description: 'Version control systems and Git workflow for collaborative development.',
      skills: ['Git', 'GitHub', 'Version Control'],
      verifyUrl: 'https://coursera.org/verify/7KKZ6S7B4XJU',
      featured: false,
      icon: '📋',
      color: 'from-slate-600 to-gray-700',
      img: Git
    },
    {
      id: 'cert-intro-backend',
      title: 'Introduction to Back-End Development',
      issuer: 'Meta',
      category: 'backend',
      date: '2023',
      credentialId: 'LUJQ2B9N96VE',
      description: 'Fundamentals of back-end web development and server-side programming.',
      skills: ['Back-End', 'Server-Side', 'Web Development'],
      verifyUrl: 'https://coursera.org/verify/LUJQ2B9N96VE',
      featured: false,
      icon: '🔧',
      color: 'from-green-600 to-emerald-600',
      img: BackendMeta
    },
    {
      id: 'cert-intro-databases',
      title: 'Introduction to Databases for Back-End Development',
      issuer: 'Meta',
      category: 'backend',
      date: '2024',
      credentialId: 'FEWJLH3PXB8H',
      description: 'Database fundamentals for back-end development and data management.',
      skills: ['Databases', 'SQL', 'Data Management'],
      verifyUrl: 'https://coursera.org/verify/FEWJLH3PXB8H',
      featured: false,
      icon: '🗄️',
      color: 'from-indigo-600 to-purple-600',
      img: databasesMeta
    },
    {
      id: 'cert-programming-python',
      title: 'Programming in Python',
      issuer: 'Meta',
      category: 'backend',
      date: '2024',
      credentialId: 'V9XBKQXKDSU4',
      description: 'Python programming for back-end development applications.',
      skills: ['Python', 'Back-End', 'Programming'],
      verifyUrl: 'https://coursera.org/verify/V9XBKQXKDSU4',
      featured: false,
      icon: '🐍',
      color: 'from-yellow-600 to-orange-600',
      img: Python
    },
    {
      id: 'cert-linux-shell',
      title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
      issuer: 'IBM',
      category: 'other',
      date: '2024',
      credentialId: '6TV7B7FQCBVA',
      description: 'Practical Linux command line skills and shell scripting techniques.',
      skills: ['Linux', 'Shell Scripting', 'Command Line'],
      verifyUrl: 'https://coursera.org/verify/6TV7B7FQCBVA',
      featured: false,
      icon: '🐧',
      color: 'from-orange-600 to-red-600',
      img: IBMLinux
    },
    {
      id: 'cert-software-engineering',
      title: 'Introduction to Software Engineering',
      issuer: 'IBM',
      category: 'other',
      date: '2024',
      credentialId: '3SNKWQTWFFAK',
      description: 'Software development lifecycle, methodologies, and engineering best practices.',
      skills: ['Software Engineering', 'SDLC', 'Best Practices'],
      verifyUrl: 'https://coursera.org/verify/3SNKWQTWFFAK',
      featured: false,
      icon: '⚙️',
      color: 'from-blue-700 to-indigo-700',
      img: SweIBM
    },
    {
      id: 'cert-negotiation',
      title: 'Successful Negotiation: Essential Strategies and Skills',
      issuer: 'University of Michigan',
      category: 'softskills',
      date: '2021',
      credentialId: 'DTZRQH4GR8Z7',
      description: 'Negotiation strategies and skills for professional and personal success.',
      skills: ['Negotiation', 'Communication', 'Strategy'],
      verifyUrl: 'https://coursera.org/verify/DTZRQH4GR8Z7',
      featured: false,
      icon: '🤝',
      color: 'from-yellow-500 to-orange-500',
      img: Negotiation
    },
    {
      id: 'cert-wellbeing',
      title: 'The Science of Well-Being',
      issuer: 'Yale University',
      category: 'softskills',
      date: '2021',
      credentialId: 'JD4L85E54972',
      description: 'Scientific insights into happiness and well-being from Yale University.',
      skills: ['Psychology', 'Well-Being', 'Personal Development'],
      verifyUrl: 'https://coursera.org/verify/JD4L85E54972',
      featured: false,
      icon: '🧠',
      color: 'from-blue-600 to-indigo-600',
      img: Wellbeing
    },
    {
      id: 'cert-learning',
      title: 'Learning How to Learn',
      issuer: 'McMaster University & UC San Diego',
      category: 'softskills',
      date: '2021',
      credentialId: 'QZGHG6E7P8HC',
      description: 'Powerful mental tools to help master tough subjects and improve learning effectiveness.',
      skills: ['Learning Techniques', 'Memory', 'Study Skills'],
      verifyUrl: 'https://coursera.org/verify/QZGHG6E7P8HC',
      featured: false,
      icon: '📚',
      color: 'from-purple-600 to-pink-600',
      img: Learn
    },
    {
      id: 'cert-professional-emails',
      title: 'Write Professional Emails in English',
      issuer: 'Georgia Institute of Technology',
      category: 'softskills',
      date: '2021',
      credentialId: '3MJ85YRXXJEM',
      description: 'Professional email writing skills for business communication.',
      skills: ['Business Writing', 'Communication', 'English'],
      verifyUrl: 'https://coursera.org/verify/3MJ85YRXXJEM',
      featured: false,
      icon: '✉️',
      color: 'from-amber-600 to-yellow-600',
      img: Emails
    },
    {
      id: 'cert-project-initiation',
      title: 'Project Initiation: Starting a Successful Project',
      issuer: 'Google',
      category: 'other',
      date: '2022',
      credentialId: 'V8JMWJAT4BMK',
      description: 'Project management fundamentals and successful project initiation strategies.',
      skills: ['Project Management', 'Planning', 'Initiation'],
      verifyUrl: 'https://coursera.org/verify/V8JMWJAT4BMK',
      featured: false,
      icon: '🚀',
      color: 'from-blue-500 to-blue-600',
      img: ProjectIntialization
    },
    {
      id: 'cert-project-foundations',
      title: 'Foundations of Project Management',
      issuer: 'Google',
      category: 'other',
      date: '2022',
      credentialId: 'E7KA5UN43C4Q',
      description: 'Core concepts and foundations of effective project management.',
      skills: ['Project Management', 'Planning', 'Organization'],
      verifyUrl: 'https://coursera.org/verify/E7KA5UN43C4Q',
      featured: false,
      icon: '📊',
      color: 'from-green-500 to-green-600',
      img: GoogleFoundations
    },
    {
      id: 'cert-software-testing',
      title: 'Software Testing Bootcamp',
      issuer: 'Learn IT - Career180',
      category: 'web',
      date: '2024',
      credentialId: 'Career180-2024',
      description: '200 hours intensive software testing bootcamp covering testing methodologies and practices.',
      skills: ['Software Testing', 'QA', 'Test Automation'],
      verifyUrl: '#',
      featured: false,
      icon: '🧪',
      color: 'from-cyan-600 to-blue-600',
      img: Testing
      
    }
  ];

  const filteredCerts = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  const featuredCerts = certificates.filter(cert => cert.featured);

  return (
    <section 
      id="certificates"
      ref={certsRef}
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 group">
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300" />
            <p className="text-blue-400 text-lg font-light tracking-wide uppercase group-hover:text-blue-300 transition-colors duration-300">
              Professional Development
            </p>
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300" />
          </div>

          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="block text-white hover:text-slate-200 transition-colors duration-300 cursor-default">CERTIFICATES</span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Continuous learning through world-class institutions and industry leaders
          </p>
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

        {/* All Certificates Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
            {activeFilter === 'all' ? 'All Certifications' : categories.find(c => c.id === activeFilter)?.name}
            <span className="text-sm bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-medium">
              {filteredCerts.length} {filteredCerts.length === 1 ? 'Certificate' : 'Certificates'}
            </span>
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCerts.map((cert, index) => (
              <div
                key={cert.id}
                data-cert-id={cert.id}
                className={`group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:bg-slate-700/60 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col ${
                  visibleCerts.includes(cert.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Certificate Icon/Image Header */}
                <div className={`relative h-48 overflow-hidden flex-shrink-0 ${cert.img ? 'bg-white' : `bg-gradient-to-br ${cert.color}`}`}>
                  {cert.img ? (
                    <img 
                      src={cert.img} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl">{cert.icon}</div>
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent transition-opacity duration-300 ${
                    hoveredCert === cert.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2 line-clamp-2">
                      {cert.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <p className="text-blue-400 text-sm font-semibold">{cert.issuer}</p>
                      <span className="text-xs text-slate-500 font-medium">{cert.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-slate-700/60 text-slate-300 px-2 py-1 rounded border border-slate-600/50 h-fit"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* Verify Button */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-center py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-blue-600/30"
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
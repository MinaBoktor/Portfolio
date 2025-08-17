import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredMethod, setHoveredMethod] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef(null);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for parallax effects
  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking && contactRef.current) {
        requestAnimationFrame(() => {
          const rect = contactRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
          setMousePos({ x: x * 8, y: y * 8 });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('sending');

    try {
      const response = await fetch(process.env.REACT_APP_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New contact from ${formData.name || 'your website'}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const contactMethods = [
    {
      name: 'Professional Email',
      value: 'Mina.maged.pe@gmail.com',
      href: 'mailto:Mina.maged.pe@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-emerald-400 to-green-400',
      shadow: 'shadow-emerald-500/50',
      description: 'Direct & professional'
    },
    {
      name: 'LinkedIn',
      value: 'Professional network',
      href: 'https://www.linkedin.com/in/minaboktor1/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-400 to-blue-500',
      shadow: 'shadow-blue-500/50',
      description: 'Connect professionally'
    },
    {
      name: 'WhatsApp',
      value: 'Instant messaging',
      href: 'https://wa.me/+201069275882',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.51 3.488"/>
        </svg>
      ),
      color: 'from-green-400 to-emerald-400',
      shadow: 'shadow-green-500/50',
      description: 'Quick chat & updates'
    },
    {
      name: 'X (Twitter)',
      value: 'Social updates',
      href: 'https://x.com/Mina__Boktor',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2H21.5l-7.4 8.487L22.5 22h-6.244l-4.84-5.873L6.195 22H2.939l7.8-8.944L1.5 2h6.244l4.356 5.302L18.244 2zm-1.07 18h1.64L8.864 4h-1.64l9.95 16z" />
        </svg>
      ),
      color: 'from-slate-400 to-slate-500',
      shadow: 'shadow-slate-500/50',
      description: 'Follow my updates'
    }
  ];

  return (
    <section 
      ref={contactRef}
      id="contact"
      className="min-h-screen relative overflow-hidden py-20"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)`
        }}
      />

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/3 w-40 h-40 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
            transform: `translate3d(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px, 0)`
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full opacity-6"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            transform: `translate3d(${-mousePos.x * 0.08}px, ${-mousePos.y * 0.08}px, 0)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header - Professional but Friendly */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            LET'S WORK <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TOGETHER</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
            Have a project in mind? I'd love to hear about it and discuss how I can help bring your vision to life.
          </p>
          
          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Currently open for freelance opportunities</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>I usually reply within 24-48 hours</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Based in Cairo, Egypt</span>
            </div>
          </div>
        </div>

        {/* Main Contact Grid - Equal Height Columns */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto lg:items-stretch">
          
          {/* Contact Form - Primary Method */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-8 relative overflow-hidden h-full flex flex-col">
              
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded" />
                  Send a Message
                </h3>
                <p className="text-slate-400">Tell me about your project and I'll get back to you soon.</p>
              </div>

              {/* Simplified Form - Only Essential Fields */}
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                {/* Honeypot for spam protection (hidden) */}
                <input type="text" name="_gotcha" style={{display: 'none'}} tabIndex="-1" autoComplete="off" />
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full h-full min-h-[120px] px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <div className="space-y-4">
                  {/* Privacy Notice */}
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Your information will never be shared with third parties.</span>
                  </div>

                  {/* Form Status Messages */}
                  {formStatus === 'sending' && (
                    <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 text-blue-300 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
                        Sending your message...
                      </div>
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-300 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        Sorry, there was an error sending your message. Please try again.
                      </div>
                    </div>
                  )}

                  {formStatus === 'success' && (
                    <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg p-4 text-emerald-300 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Thanks! I'll get back to you within 24-48 hours.
                      </div>
                    </div>
                  )}

                  {/* Clear Button Text */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Alternative Contact Methods & Trust Signals */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="h-full flex flex-col space-y-8">
              
              {/* Alternative Methods */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded" />
                  Other Ways to Connect
                </h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.name}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`group relative p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-600 hover:scale-[1.02] hover:shadow-xl overflow-hidden block
                        ${hoveredMethod === index ? `${method.shadow} border-slate-600` : ''}
                      `}
                      onMouseEnter={() => setHoveredMethod(index)}
                      onMouseLeave={() => setHoveredMethod(null)}
                      style={{
                        transform: `translate3d(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px, 0)`
                      }}
                    >
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white group-hover:text-slate-100 transition-colors duration-300">
                            {method.name}
                          </h4>
                          <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                            {method.description}
                          </p>
                          <p className="text-slate-300 font-medium text-sm mt-1">
                            {method.value}
                          </p>
                        </div>
                        <div className="w-6 h-6 text-slate-400 group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-300">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Proof & Trust Signals */}
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl p-6 space-y-6">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Why Work With Me
                </h4>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-slate-300 font-medium">3+ Years Experience</div>
                      <div className="text-slate-400">Building scalable web applications</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-slate-300 font-medium">15+ Projects Delivered</div>
                      <div className="text-slate-400">From startups to enterprise solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-slate-300 font-medium">Fast Communication</div>
                      <div className="text-slate-400">Regular updates and clear timelines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
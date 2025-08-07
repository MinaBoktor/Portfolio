import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@developer.com',
      link: 'mailto:hello@developer.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Available Worldwide',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's work together to create something amazing!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3 className="contact-title">Let's start a conversation</h3>
              <p className="contact-description">
                I'm always interested in hearing about new opportunities, 
                interesting projects, and ways to collaborate. Whether you're 
                a company looking to hire, or you're a fellow developer wanting 
                to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">{item.icon}</div>
                  <div className="method-content">
                    <h4 className="method-title">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="method-value"
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="method-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-connect">
              <h4>Connect with me</h4>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <span>📚</span>
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <span>🐦</span>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send me a message</h3>
                <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or just say hello..."
                  rows="5"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-success">
                  <span>✅</span>
                  <p>Thank you! Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to work together?</h3>
            <p>I'm currently available for freelance projects and full-time opportunities.</p>
            <div className="availability-status">
              <span className="status-indicator"></span>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


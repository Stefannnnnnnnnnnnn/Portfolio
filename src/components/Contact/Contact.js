import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // email address
  const YOUR_EMAIL = "borjastefanoliver@gmail.com";
  // Social media and platform links
  const SOCIAL_LINKS = {
    github: "https://github.com/Stefannnnnnnnnnnnn",      
    linkedin: "https://linkedin.com/in/yourprofile", 
    twitter: "",                                      
    instagram: "",                                   
    facebook: "",                                    
  };
  
  const CONTACT_MESSAGE = "Have a question or want to work together? Feel free to reach out!";
  //formspree id
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/meeljegk";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _to: YOUR_EMAIL
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      
      // Fallback: Open default email client with pre-filled message
      const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\\nEmail: ${formData.email}\\n\\nMessage:\\n${formData.message}`
      )}`;
      
      // Show alert with fallback option
      if (window.confirm('Form service not configured yet. Open your email app instead?')) {
        window.location.href = mailtoLink;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
          <p className="section-subtitle">{CONTACT_MESSAGE}</p>
        </div>
        
        <div className="contact-content">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            {/* Email */}
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <span>Email</span>
                <a href={`mailto:${YOUR_EMAIL}`}>{YOUR_EMAIL}</a>
              </div>
            </div>
            
            {/* Availability */}
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <span>Availability</span>
                <p>Open to opportunities & collaborations</p>
              </div>
            </div>
            
            {/* Response Time */}
            <div className="contact-item">
              <i className="fas fa-paper-plane"></i>
              <div>
                <span>Response Time</span>
                <p>Usually within 1-3 Hours</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {SOCIAL_LINKS.github && (
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {SOCIAL_LINKS.linkedin && (
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                {SOCIAL_LINKS.twitter && (
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                {SOCIAL_LINKS.instagram && (
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
                {SOCIAL_LINKS.facebook && (
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Side: Contact Form with Backend */}
          <div className="contact-form-container">
            <h3>Send a Message</h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="form-status success">
                <i className="fas fa-check-circle"></i>
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="form-status error">
                <i className="fas fa-exclamation-circle"></i>
                <p>Something went wrong. Please try email instead.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Job Opportunity / Question"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to discuss..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
              
              <small className="form-note">
                <i className="fas fa-lock"></i>
                Your information is secure and will only be used to respond to your inquiry.
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
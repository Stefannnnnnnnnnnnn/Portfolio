import React from 'react';
import './Hero.css';

const Hero = () => {

  const YOUR_NAME = "Stefan Oliver Borja";
  
  // job title
  const YOUR_TITLE = "Aspiring Developer / Student Intern";
  //Short Introduction
  const SHORT_INTRO = `I am Stefan Oliver Borja, a Bachelor of Science in Computer Science student 
  with a strong interest in machine learning, AI automation, computer vision, and data analysis. 
  I am currently interning at Highly Succeed, gaining hands-on experience in the industry. 
  I am also studying web development technologies such as JavaScript, Node.js, the MERN stack, and Tailwind CSS, 
  along with quality assurance practices including QA automation. 
  These help me expand my skills and continue growing through hands-on experience and 
  continuous learning.`;

  // Add profile image
  const PROFILE_IMAGE = "";
  
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      // Smooth scroll with offset for fixed navbar
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        {/* Profile Image - Only shows if PROFILE_IMAGE is set */}
        {PROFILE_IMAGE && (
          <div className="hero-image">
            <img src={PROFILE_IMAGE} alt={YOUR_NAME} />
          </div>
        )}
        
        {/* Main Text Content */}
        <div className="hero-content">
          {/* Greeting with your name */}
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{YOUR_NAME}</span>
          </h1>
          
          {/* Your title/role */}
          <h2 className="hero-subtitle">{YOUR_TITLE}</h2>
          
          {/* Short introduction paragraph */}
          <p className="hero-description">
            {SHORT_INTRO}
          </p>
          
          {/*CTA Button*/}
          <button className="cta-button enhanced" onClick={scrollToProjects}>
            <span className="cta-text">View My Work</span>
            <div className="cta-icon">
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="cta-particles">
              <span></span><span></span><span></span>
            </div>
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
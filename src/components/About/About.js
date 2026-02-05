import React from 'react';
import './About.css';

const About = () => {
  const BACKGROUND_TEXT = `No background yet`;
  //My skills
  const SKILLS = [
    // Programming & Core
    { name: "Python", icon: "fab fa-python", level: "Intermediate" },
    { name: "JavaScript", icon: "fab fa-js", level: "Beginner" },
    { name: "HTML5", icon: "fab fa-html5", level: "Beginner" },
    { name: "CSS3", icon: "fab fa-css3-alt", level: "Beginner" },
    
    // Machine Learning & AI
    { name: "Machine Learning", icon: "fas fa-brain", level: "Intermediate" },
    { name: "TensorFlow", icon: "fas fa-robot", level: "Intermediate" },
    { name: "PyTorch", icon: "fas fa-fire", level: "Intermediate" },
    
    // Web Development
    { name: "React", icon: "fab fa-react", level: "Beginner" },
    { name: "Node.js", icon: "fab fa-node-js", level: "Beginner" },
  ];
  //My Interest
  const INTERESTS = [
    { name: "Web Development", icon: "fas fa-laptop-code" },
    { name: "Data Analysis", icon: "fas fa-chart-pie" },
    { name: "QA Automation", icon: "fas fa-cogs" },
    { name: "Machine Learning", icon: "fas fa-brain" },
    { name: "Prompt Engineering", icon: "fas fa-magic" },
    { name: "Full Stack Development", icon: "fas fa-layer-group" },
    { name: "Python Scripting", icon: "fab fa-python" },
    { name: "Neural Networks", icon: "fas fa-network-wired" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          {/* Left Column: Background Text */}
          <div className="about-text">
            <h3>My Background</h3>
            <p>{BACKGROUND_TEXT}</p>
          </div>
          
          {/* Right Column: Skills */}
          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {SKILLS.map((skill, index) => (
                <div key={index} className="skill-card" title={`Level: ${skill.level}`}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                  <small>{skill.level}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Interests Section */}
        <div className="interests-section">
          <h3>My Interests</h3>
          <div className="interests-grid">
            {INTERESTS.map((interest, index) => (
              <div key={index} className="interest-tag">
                <i className={interest.icon}></i>
                <span>{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import './Projects.css';

const Projects = () => {

  const PROJECTS = [
    //Project 1
    {
      id: 1,
      title: "",
      description: "",
      technologies: [""],
      image: "", 
      liveLink: "",
      githubLink: "" 
    },
  //Project 2
    {
      id: 2,
      title: "",
      description: "",
      technologies: [""],
      image: "", 
      liveLink: "", 
      githubLink: ""
    },

    {
      id: 3,
      title: "",
      description: "",
      technologies: [""],
      image: "",
      liveLink: "",
      githubLink: ""
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Here are some of the projects I've worked on (Project import soon)
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <i className="fas fa-image"></i>
                    <span>Project Screenshot</span>
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* Technologies Used */}
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="project-links">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn primary"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn secondary"
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


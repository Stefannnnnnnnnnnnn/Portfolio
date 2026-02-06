import React from 'react';
import './Projects.css';

const Projects = () => {

  const PROJECTS = [
    //Project 1
    {
      id: 1,
      title: "Skytrips",
      description: "SkyTrips is a student-developed airline mobile application created using Kotlin. The app includes a user registration feature connected to a PHP database, allowing users to create and store accounts. This project focuses on learning mobile app development, basic database integration, and building a simple user interface for an airline-themed application.",
      technologies: ["Kotlin, Java, PHP, XML"],
      image: "https://raw.githubusercontent.com/Stefannnnnnnnnnnnn/Skytrips/refs/heads/main/app/src/main/res/drawable/logo__skytrips_.png", 
      liveLink: "",
      githubLink: "https://github.com/Stefannnnnnnnnnnnn/Skytrips" 
    },
  //Project 2
    {
      id: 2,
      title: "Throwaway",
      description: "ThrowAway is a student-developed smart waste management system that uses a webcam, Arduino-controlled conveyor belt, and computer vision to sort trash in real time. It combines YOLO for detection and CNN for classification, sorting items into six categories: glass, metal, plastic, paper, organic, and unsupported. The project demonstrates automated waste sorting with hardware and AI integration.",
      technologies: ["Python, C++, Pytorch, CNN, YOLO"],
      image: "https://raw.githubusercontent.com/Stefannnnnnnnnnnnn/Portfolio/refs/heads/main/pictures/Throwaway.jpg", 
      liveLink: "https://drive.google.com/file/d/1cWRKywTAQK4aWoACEastiML1JHEhZrr6/view", 
      githubLink: "https://github.com/pazjanleandy/ThrowAway"
    },

    {
      id: 3,
      title: "Giglyst",
      description: "Giglyst is a Figma prototype of a booking platform for musicians, solo artists, bands, organizers, and venues. The design showcases user profiles, availability status, and contract management features, including a down payment system. This prototype focuses on demonstrating the user interface and workflow of the app, serving as a visual representation before full development.",
      technologies: ["Figma"],
      image: "https://raw.githubusercontent.com/Stefannnnnnnnnnnnn/Portfolio/refs/heads/main/pictures/Giglyst.jpg",
      liveLink: "https://drive.google.com/file/d/1_SdI2BoRjfa753omFSiLSQNm4CKtr-DC/view?fbclid=IwY2xjawPyJWZleHRuA2FlbQIxMABicmlkETFKaTh4QjdZbVJBbnh2cDZWc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuKdYxCWUVJqvb1Z0pL7qTo3mt-o_YfTHaQ6e5WJ1PqjPMOf9u-c2LwsoNkw_aem_y9B4lQwUNrUvuT_AX-NN6g",
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
                      Demo Video
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
                      View Repository
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


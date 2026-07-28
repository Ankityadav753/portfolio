import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { MagneticButton } from './ui/MagneticButton';
import './Projects.css';

export const Projects = () => {
  const projectsList = portfolioData.projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container container">
        <h2 className="section-subtitle">Portfolio</h2>
        <h3 className="section-title">Featured <span>Projects</span></h3>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projectsList.map((project, index) => (
            <GlassCard 
              key={project.id}
              className="project-card"
              hoverLift={true}
              hoverGlow={true}
              delay={index * 0.15}
            >
              {/* Image Banner */}
              <div className="project-image-box">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay" />
              </div>

              {/* Card Body */}
              <div className="project-body">
                {/* Tech Badges */}
                <div className="project-tech-tags">
                  {project.tech.map((techItem, techIdx) => (
                    <span key={techIdx} className="tech-tag">
                      {techItem}
                    </span>
                  ))}
                </div>

                <h4 className="project-card-title">{project.title}</h4>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>

                {/* Features Checklist */}
                <div className="project-features">
                  <h5 className="features-header">Key Features:</h5>
                  <ul className="features-list">
                    {project.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="feature-item">
                        <span className="feature-check"><FaCheck /></span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Links */}
                <div className="project-links">
                  <MagneticButton>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-btn btn-code"
                    >
                      <FaGithub className="project-btn-icon" />
                      <span>Code</span>
                    </a>
                  </MagneticButton>

                  <MagneticButton>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-btn btn-demo"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="project-btn-icon small" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;

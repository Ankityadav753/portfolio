import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaRegCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import './Experience.css';

export const Experience = () => {
  const experiences = portfolioData.experience;

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
    <section id="experience" className="experience-section section">
      <div className="experience-container container">
        <h2 className="section-subtitle">Career Path</h2>
        <h3 className="section-title">Work <span>Experience</span></h3>

        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Vertical central divider line */}
          <div className="exp-line" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx} 
                className={`exp-item ${isEven ? 'left-align' : 'right-align'}`}
                initial={{ opacity: 0, y: 40, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Visual marker in center of line */}
                <div className="exp-marker">
                  <FaBriefcase />
                </div>

                {/* Glass Card content */}
                <div className="exp-content-box">
                  <GlassCard className="exp-card" hoverLift={true} hoverGlow={true}>
                    {/* Header: Date Duration */}
                    <div className="exp-card-header">
                      <div className="exp-duration">
                        <FaRegCalendarAlt className="duration-icon" />
                        <span>{exp.duration}</span>
                      </div>
                      <span className="exp-company-tag">{exp.company}</span>
                    </div>

                    <h4 className="exp-role">{exp.role}</h4>
                    
                    {/* Responsibilities */}
                    <ul className="exp-bullets">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="exp-bullet-item">
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {/* Utilized tech stacks */}
                    <div className="exp-tech">
                      <span className="exp-tech-title">Tech:</span>
                      <div className="exp-tech-list">
                        {exp.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="exp-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Experience;

import React from 'react';
import { Briefcase, Calendar as CalendarIcon, MapMarker } from './ui/Icons';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { ScrollReveal } from './ui/ScrollReveal';
import './Experience.css';

export const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="experience-section section" aria-label="Work Experience">
      <div className="experience-container container">
        
        <p className="section-subtitle">Career Path</p>
        <h2 className="section-title">Work <span>Experience</span></h2>

        <div className="experience-timeline">
          {/* Vertical central divider line */}
          <div className="exp-line" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <ScrollReveal 
                key={idx} 
                className={`exp-item ${isEven ? 'left-align' : 'right-align'}`}
                direction={isEven ? 'left' : 'right'}
                delay={idx * 0.12}
              >
                {/* Visual marker */}
                <div className="exp-marker" aria-hidden="true">
                  <Briefcase style={{ width: '1.1rem', height: '1.1rem' }} />
                </div>

                {/* Glass Card content */}
                <div className="exp-content-box">
                  <GlassCard className="exp-card" hoverLift={true} hoverGlow={true}>
                    {/* Header: Company & Duration */}
                    <div className="exp-card-header">
                      <div>
                        <h3 className="exp-role">{exp.role}</h3>
                        <h4 className="exp-company-name">{exp.company}</h4>
                      </div>

                      <div className="exp-meta-tags">
                        {exp.duration && (
                          <div className="exp-duration">
                            <CalendarIcon style={{ width: '0.85rem', height: '0.85rem' }} />
                            <span>{exp.duration}</span>
                          </div>
                        )}
                        {exp.location && (
                          <div className="exp-location">
                            <MapMarker style={{ width: '0.85rem', height: '0.85rem' }} />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {exp.project && (
                      <div className="exp-project-pill">
                        <span>Project:</span> <strong>{exp.project}</strong>
                      </div>
                    )}

                    {/* Responsibilities list */}
                    <ul className="exp-bullets">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="exp-bullet-item">
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies list */}
                    <div className="exp-tech">
                      <span className="exp-tech-title">Technologies:</span>
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

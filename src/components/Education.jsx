import React from 'react';
import { GraduationCap, Award, Calendar } from './ui/Icons';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { ScrollReveal } from './ui/ScrollReveal';
import './Education.css';

export const Education = () => {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="education-section section" aria-label="Education Background">
      <div className="education-container container">
        
        <p className="section-subtitle">Academic Journey</p>
        <h2 className="section-title">My <span>Education</span></h2>

        <div className="education-timeline-wrapper">
          <div className="education-timeline-line" />

          {educationList.map((item, index) => (
            <ScrollReveal 
              key={index}
              className="education-timeline-item"
              direction="up"
              delay={index * 0.12}
            >
              {/* Timeline Marker */}
              <div className="education-marker" aria-hidden="true">
                <GraduationCap style={{ width: '1.2rem', height: '1.2rem' }} />
              </div>

              {/* Education Card */}
              <GlassCard className="education-card" hoverLift={true} hoverGlow={true}>
                <div className="education-card-top">
                  <div className="education-time-badge">
                    <Calendar style={{ width: '0.9rem', height: '0.9rem' }} />
                    <span>{item.duration}</span>
                  </div>

                  <span className="education-score-badge">
                    {item.score}
                  </span>
                </div>

                <h3 className="education-degree">{item.degree}</h3>
                <h4 className="education-institution">{item.institution}</h4>

                {item.achievement && (
                  <div className="education-achievement-pill">
                    <Award style={{ width: '0.95rem', height: '0.95rem', flexShrink: 0 }} />
                    <span>{item.achievement}</span>
                  </div>
                )}

                {item.details && (
                  <p className="education-details">{item.details}</p>
                )}

                {item.coursework && item.coursework.length > 0 && (
                  <div className="education-coursework">
                    <span className="coursework-label">Relevant Coursework:</span>
                    <div className="coursework-tags">
                      {item.coursework.map((course, cIdx) => (
                        <span key={cIdx} className="coursework-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

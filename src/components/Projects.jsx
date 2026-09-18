import React from 'react';
import { Github, ExternalLink, Check, MapMarker } from './ui/Icons';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { MagneticButton } from './ui/MagneticButton';
import { ScrollReveal } from './ui/ScrollReveal';
import './Projects.css';

export const Projects = () => {
  const projectsList = portfolioData.projects;
  const featuredProject = projectsList.find((p) => p.isFeatured) || projectsList[0];
  const otherProjects = projectsList.filter((p) => p.id !== featuredProject.id);

  const featuredLiveUrl = featuredProject ? (featuredProject.live || featuredProject.liveUrl || featuredProject.demoUrl || featuredProject.url) : null;

  return (
    <section id="projects" className="projects-section section" aria-label="Featured Projects">
      <div className="projects-container container">
        
        <p className="section-subtitle">Portfolio</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>

        {/* 1. Featured Project Banner (TripMind AI) */}
        {featuredProject && (
          <ScrollReveal direction="up" className="featured-project-wrapper">
            <GlassCard 
              className={`featured-project-card ${featuredLiveUrl ? 'has-live-link' : ''}`}
              hoverLift={true} 
              hoverGlow={true}
              onClick={featuredLiveUrl ? () => window.open(featuredLiveUrl, '_blank', 'noopener,noreferrer') : undefined}
            >
              <div className="featured-badge-bar">
                <span className="featured-label">Featured Project</span>
                <span className="featured-tagline">{featuredProject.tagline}</span>
              </div>

              <div className="featured-content-grid">
                {/* Left/Top Content */}
                <div className="featured-info">
                  {featuredLiveUrl ? (
                    <a 
                      href={featuredLiveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="featured-title-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h3 className="featured-title">{featuredProject.title}</h3>
                    </a>
                  ) : (
                    <h3 className="featured-title">{featuredProject.title}</h3>
                  )}

                  <p className="featured-desc">{featuredProject.description}</p>

                  <div className="project-features-block">
                    <h4 className="features-subheading">Key Implemented Features:</h4>
                    <ul className="features-list">
                      {featuredProject.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-check" aria-hidden="true">
                            <Check style={{ width: '0.75rem', height: '0.75rem' }} />
                          </span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech-tags">
                    {featuredProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag featured-tech">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {featuredProject.github && (
                      <MagneticButton>
                        <a 
                          href={featuredProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-btn btn-code"
                          aria-label={`View ${featuredProject.title} source code on GitHub`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="project-btn-icon" />
                          <span>View on GitHub</span>
                        </a>
                      </MagneticButton>
                    )}

                    {featuredLiveUrl && (
                      <MagneticButton>
                        <a 
                          href={featuredLiveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-btn btn-demo"
                          aria-label={`View live project for ${featuredProject.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Project</span>
                          <ExternalLink className="project-btn-icon small" />
                        </a>
                      </MagneticButton>
                    )}
                  </div>
                </div>

                {/* Right Visual Architecture Box: Illustrative TripMind AI Travel Planner UI Preview */}
                <div 
                  className={`featured-visual-box ${featuredLiveUrl ? 'clickable-visual' : ''}`}
                  onClick={featuredLiveUrl ? (e) => { e.stopPropagation(); window.open(featuredLiveUrl, '_blank', 'noopener,noreferrer'); } : undefined}
                >
                  <div className="tripmind-preview-window">
                    <div className="preview-window-bar">
                      <div className="window-dots">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                      </div>
                      <span className="preview-window-title">TripMind AI &bull; Travel Planner (Product Preview)</span>
                    </div>

                    <div className="tripmind-dashboard">
                      {/* Destination Header */}
                      <div className="tripmind-dest-header">
                        <div>
                          <div className="dest-title-row">
                            <MapMarker style={{ width: '0.85rem', height: '0.85rem', color: 'var(--accent-highlight)' }} />
                            <span className="dest-name">Manali, Himachal Pradesh</span>
                          </div>
                          <span className="dest-params">Preview Scenario: 4 Days &bull; 2 Travelers &bull; Moderate Budget</span>
                        </div>
                        <span className="tripmind-status-badge">
                          <span className="status-live-dot" /> Visual Product Preview
                        </span>
                      </div>

                      {/* Estimated Budget Engine Breakdown */}
                      <div className="tripmind-budget-widget">
                        <div className="budget-widget-header">
                          <span className="widget-label">Smart Estimated Budget</span>
                          <span className="budget-total">&#8377;40,000 Total Est.</span>
                        </div>
                        <div className="budget-bars-grid">
                          <div className="budget-bar-item">
                            <div className="budget-bar-label">
                              <span>Stays</span>
                              <span>&#8377;14,000 (35%)</span>
                            </div>
                            <div className="budget-progress-track">
                              <div className="budget-progress-fill" style={{ width: '35%', background: '#9C5B32' }} />
                            </div>
                          </div>
                          <div className="budget-bar-item">
                            <div className="budget-bar-label">
                              <span>Dining &amp; Food</span>
                              <span>&#8377;9,600 (24%)</span>
                            </div>
                            <div className="budget-progress-track">
                              <div className="budget-progress-fill" style={{ width: '24%', background: '#C36433' }} />
                            </div>
                          </div>
                          <div className="budget-bar-item">
                            <div className="budget-bar-label">
                              <span>Local Transit</span>
                              <span>&#8377;8,400 (21%)</span>
                            </div>
                            <div className="budget-progress-track">
                              <div className="budget-progress-fill" style={{ width: '21%', background: '#D97706' }} />
                            </div>
                          </div>
                          <div className="budget-bar-item">
                            <div className="budget-bar-label">
                              <span>Activities</span>
                              <span>&#8377;8,000 (20%)</span>
                            </div>
                            <div className="budget-progress-track">
                              <div className="budget-progress-fill" style={{ width: '20%', background: '#2E6F40' }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Day-by-Day Timeline Preview */}
                      <div className="tripmind-timeline-widget">
                        <div className="widget-label">Dynamic Itinerary Schedule</div>
                        <div className="timeline-mini-list">
                          <div className="timeline-mini-day">
                            <span className="timeline-day-pill">Day 1</span>
                            <span className="timeline-day-desc">Arrival, Hotel Check-in &amp; Old Manali Heritage Walk</span>
                          </div>
                          <div className="timeline-mini-day">
                            <span className="timeline-day-pill">Day 2</span>
                            <span className="timeline-day-desc">Solang Valley Adventure Sports &amp; Atal Tunnel Excursion</span>
                          </div>
                        </div>
                      </div>

                      <div className="tripmind-tag-bar">
                        <span>AI Engine Active &bull; Supabase Persistent Storage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        )}

        {/* 2. Responsive 2-Column Grid for Other Projects */}
        <div className="projects-grid">
          {otherProjects.map((project, index) => {
            const projectLiveUrl = project.live || project.liveUrl || project.demoUrl || project.url;
            return (
              <ScrollReveal
                key={project.id || index}
                direction="up"
                delay={index * 0.15}
              >
                <GlassCard 
                  className={`project-card ${projectLiveUrl ? 'has-live-link' : ''}`}
                  hoverLift={true}
                  hoverGlow={true}
                  onClick={projectLiveUrl ? () => window.open(projectLiveUrl, '_blank', 'noopener,noreferrer') : undefined}
                >
                  <div className="project-body">
                    <div className="project-header-row">
                      <div>
                        {projectLiveUrl ? (
                          <a 
                            href={projectLiveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-title-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <h3 className="project-card-title">{project.title}</h3>
                          </a>
                        ) : (
                          <h3 className="project-card-title">{project.title}</h3>
                        )}
                        <span className="project-subtitle">{project.tagline}</span>
                      </div>
                    </div>

                    <p className="project-desc">{project.description}</p>

                    <div className="project-features">
                      <h4 className="features-header">Key Implemented Features:</h4>
                      <ul className="features-list">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="feature-item">
                            <span className="feature-check" aria-hidden="true">
                              <Check style={{ width: '0.75rem', height: '0.75rem' }} />
                            </span>
                            <span className="feature-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech-tags">
                      {project.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.github && (
                        <MagneticButton>
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-btn btn-code"
                            aria-label={`View ${project.title} on GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="project-btn-icon" />
                            <span>View on GitHub</span>
                          </a>
                        </MagneticButton>
                      )}

                      {projectLiveUrl && (
                        <MagneticButton>
                          <a 
                            href={projectLiveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-btn btn-demo"
                            aria-label={`View live project for ${project.title}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View Project</span>
                            <ExternalLink className="project-btn-icon small" />
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;

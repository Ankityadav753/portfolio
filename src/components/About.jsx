import React from 'react';
import { GraduationCap, Briefcase, LaptopCode, Brain, ExternalLink } from './ui/Icons';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { ScrollReveal } from './ui/ScrollReveal';
import './About.css';

export const About = () => {
  const { resumeUrl } = portfolioData.personalInfo;
  const highlights = portfolioData.aboutHighlights;

  const highlightIcons = [
    <GraduationCap key="edu" className="highlight-icon icon-accent-highlight" />,
    <Briefcase key="exp" className="highlight-icon icon-accent-primary" />,
    <LaptopCode key="web" className="highlight-icon icon-accent-secondary" />,
    <Brain key="dsa" className="highlight-icon icon-accent-highlight" />
  ];

  return (
    <section id="about" className="about-section section" aria-label="About Me">
      <div className="about-container container">
        
        <p className="section-subtitle">Background</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-grid">
          {/* Portrait Image / Personal Photo */}
          <div className="about-graphic-container">
            <ScrollReveal direction="left" className="portrait-scroll-reveal">
              <div className="portrait-wrapper">
                <img 
                  src="/profile.jpg" 
                  alt="Ankit Kumar - Software Engineer"
                  className="portrait-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <div className="portrait-overlay" />
              </div>
            </ScrollReveal>
          </div>

          {/* Narrative Content */}
          <div className="about-content">
            <ScrollReveal direction="right">
              <h3 className="about-subtitle">
                Software Engineering &amp; Problem Solving
              </h3>

              <p className="about-text">
                I am a Computer Science Engineering student at <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong> (2023–2027) with an academic CGPA of <strong>8.37</strong>. My core interest lies in software engineering, full-stack web development, and algorithmic problem-solving.
              </p>

              <p className="about-text">
                Through hands-on software engineering and frontend developer internships, I have worked directly on web platforms—debugging functionality, resolving UI inconsistencies across viewports, and building modular client components. I thrive on translating requirements into practical, well-engineered applications.
              </p>

              <div className="about-cta">
                <a 
                  href={resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  aria-label="View Resume PDF"
                >
                  <ExternalLink style={{ width: '1.1rem', height: '1.1rem' }} />
                  <span>View Resume</span>
                </a>
              </div>
            </ScrollReveal>

            {/* 4 Professional Highlight Cards */}
            <div className="about-highlights-grid">
              {highlights.map((item, index) => (
                <GlassCard 
                  key={index}
                  className="highlight-card"
                  hoverLift={true}
                  hoverGlow={true}
                  delay={index * 0.1}
                >
                  <div className="highlight-header">
                    <div className="highlight-icon-box">
                      {highlightIcons[index % highlightIcons.length]}
                    </div>
                    <div>
                      <h4 className="highlight-title">{item.title}</h4>
                      <span className="highlight-subtitle">{item.subtitle}</span>
                    </div>
                  </div>
                  <p className="highlight-desc">{item.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

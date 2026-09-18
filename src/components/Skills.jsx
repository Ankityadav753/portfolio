import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { ScrollReveal } from './ui/ScrollReveal';
import { Code, LaptopCode, Briefcase, Award } from './ui/Icons';
import './Skills.css';

export const Skills = () => {
  const skillCategories = portfolioData.skills;

  const categoryIcons = {
    'Languages': <Code className="category-icon" />,
    'Frontend': <LaptopCode className="category-icon" />,
    'Backend': <Briefcase className="category-icon" />,
    'Databases': <Award className="category-icon" />,
    'Tools': <Code className="category-icon" />,
    'Core Computer Science': <Award className="category-icon" />
  };

  return (
    <section id="skills" className="skills-section section" aria-label="Technical Skills">
      <div className="skills-container container">
        
        <p className="section-subtitle">Proficiencies</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>

        <div className="skills-categories-grid">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal 
              key={catIdx}
              direction="up"
              delay={catIdx * 0.08}
            >
              <GlassCard 
                className="skills-category-card"
                hoverLift={true}
                hoverGlow={true}
              >
                <div className="category-header">
                  <div className="category-icon-box">
                    {categoryIcons[category.category] || <Code className="category-icon" />}
                  </div>
                  <div>
                    <h3 className="category-name">{category.category}</h3>
                    <span className="category-count">{category.items.length} Skills</span>
                  </div>
                </div>

                <div className="skills-chips-wrapper">
                  {category.items.map((skill, skillIdx) => (
                    <span key={skillIdx} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

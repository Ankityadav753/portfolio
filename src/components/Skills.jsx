import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import './Skills.css';

export const Skills = () => {
  const skillCategories = portfolioData.skills;
  const circleRadius = 26;
  const circumference = 2 * Math.PI * circleRadius; // ~163.36

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="skills-section section">
      {/* SVG Gradients definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="skill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-3)" />
            <stop offset="50%" stopColor="var(--accent-1)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="skills-container container">
        <h2 className="section-subtitle">Proficiencies</h2>
        <h3 className="section-title">My <span>Skills</span></h3>

        <motion.div 
          className="skills-categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx} 
              className="skills-category-block"
              variants={categoryVariants}
            >
              <h4 className="category-title">{category.category}</h4>
              
              <div className="skills-items-grid">
                {category.items.map((skill, skillIdx) => (
                  <GlassCard 
                    key={skillIdx}
                    className="skill-card"
                    hoverLift={true}
                    hoverGlow={true}
                  >
                    <div className="skill-card-inner">
                      {/* Skill Name */}
                      <span className="skill-name">{skill.name}</span>

                      {/* SVG Progress Circle */}
                      <div className="progress-circle-container">
                        <svg className="progress-circle" width="64" height="64">
                          {/* Background Circle */}
                          <circle
                            cx="32"
                            cy="32"
                            r={circleRadius}
                            className="circle-bg"
                            strokeWidth="4"
                            fill="transparent"
                          />
                          {/* Active Animated Circle */}
                          <motion.circle
                            cx="32"
                            cy="32"
                            r={circleRadius}
                            className="circle-progress"
                            stroke="url(#skill-grad)"
                            strokeWidth="4"
                            fill="transparent"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{ strokeDashoffset: circumference - (skill.level / 100) * circumference }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                          />
                        </svg>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;

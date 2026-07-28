import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaLaptopCode, FaRegSmile } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import './About.css';

export const About = () => {
  const { name, description } = portfolioData.personalInfo;
  const education = portfolioData.education[0];

  const stats = [
    {
      icon: <FaLaptopCode className="stat-icon icon-blue" />,
      title: "Experience",
      value: "Frontend Developer",
      desc: "Dream Blend Solutions"
    },
    {
      icon: <FaAward className="stat-icon icon-purple" />,
      title: "B.Tech CGPA",
      value: "8.38",
      desc: "MMMUT Gorakhpur"
    },
    {
      icon: <FaGraduationCap className="stat-icon icon-cyan" />,
      title: "DSA Solved",
      value: "500+",
      desc: "LeetCode & Codeforces"
    },
    {
      icon: <FaRegSmile className="stat-icon icon-pink" />,
      title: "Projects",
      value: "12+",
      desc: "Completed & Deployed"
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        
        <h2 className="section-subtitle">Introduction</h2>
        <h3 className="section-title">About <span>Me</span></h3>

        <div className="about-grid">
          {/* Left Side: Portrait Graphic */}
          <motion.div 
            className="about-graphic-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="portrait-wrapper">
              <div className="portrait-glow" />
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                alt="Ankit Kumar Profile" 
                className="portrait-img"
              />
              <div className="portrait-overlay" />
            </div>
            
            {/* Abstract floating circles */}
            <div className="about-shape shape-1" />
            <div className="about-shape shape-2" />
          </motion.div>

          {/* Right Side: Text & Quick Stats */}
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="about-subtitle">Who is Ankit?</h4>
              <p className="about-text">
                {description}
              </p>
              <p className="about-text">
                Currently, I am pursuing my Bachelor of Technology in Computer Science & Engineering at <strong>Madan Mohan Malaviya University of Technology, Gorakhpur</strong>. I specialize in the MERN stack (MongoDB, Express, React, Node) and love to solve complex logic puzzles through Competitive Programming.
              </p>
            </motion.div>

            {/* Quick Cards Grid */}
            <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <GlassCard 
                  key={index}
                  className="stat-card"
                  hoverLift={true}
                  hoverGlow={true}
                  delay={index * 0.1}
                >
                  <div className="stat-card-header">
                    {stat.icon}
                    <h5 className="stat-title">{stat.title}</h5>
                  </div>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-desc">{stat.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline-container">
          <motion.h4 
            className="timeline-header-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education Path
          </motion.h4>
          
          <div className="timeline-wrapper">
            <div className="timeline-line" />
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="timeline-marker">
                <FaGraduationCap />
              </div>
              <GlassCard className="timeline-card" hoverLift={false} hoverGlow={true}>
                <div className="timeline-card-header">
                  <span className="timeline-date">{education.duration}</span>
                  <span className="timeline-cgpa">CGPA: {education.cgpa}</span>
                </div>
                <h5 className="timeline-degree">{education.degree}</h5>
                <h6 className="timeline-inst">{education.institution}</h6>
                <p className="timeline-details">{education.details}</p>
              </GlassCard>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default About;

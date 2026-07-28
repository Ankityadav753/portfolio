import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiLeetcode, SiCplusplus } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { MagneticButton } from './ui/MagneticButton';
import './Hero.css';

export const Hero = () => {
  const { name, titles, description, socials } = portfolioData.personalInfo;
  
  // Custom typing hook
  const typedText = useTypingEffect(titles, 80, 40, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        
        {/* Left Side: Content */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hi,
          </motion.p>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            I'm <span className="name-gradient">{name}</span>
          </motion.h1>

          <motion.div className="hero-typed-container" variants={itemVariants}>
            <span className="hero-typed-text">{typedText}</span>
            <span className="hero-typed-cursor">|</span>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div className="hero-buttons" variants={itemVariants}>
            <MagneticButton>
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="btn-primary"
              >
                Hire Me
              </button>
            </MagneticButton>
            <MagneticButton>
              <button 
                onClick={() => handleScrollTo('projects')} 
                className="btn-secondary"
              >
                View Projects
              </button>
            </MagneticButton>
          </motion.div>

          {/* Social Icons */}
          <motion.div className="hero-socials" variants={itemVariants}>
            <MagneticButton>
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
                <SiLeetcode />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={`mailto:${portfolioData.personalInfo.email}`} aria-label="Email">
                <FaEnvelope />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right Side: IDE Mockup & Visuals */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Glowing background behind visual */}
          <div className="hero-glow-back" />

          {/* Code Editor Box */}
          <div className="code-editor">
            <div className="editor-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="file-name">AnkitKumar.jsx</span>
            </div>
            <div className="editor-body">
              <pre>
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = &#123;<br />
                  &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Ankit Kumar"</span>,<br />
                  &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"Full Stack Developer"</span>,<br />
                  &nbsp;&nbsp;<span className="property">skills</span>: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"React"</span>, <span className="string">"Node"</span>, <span className="string">"Express"</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"MongoDB"</span>, <span className="string">"C++"</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;<span className="property">solvedProblems</span>: <span className="number">500</span>,<br />
                  &nbsp;&nbsp;<span className="property">passionate</span>: <span className="boolean">true</span><br />
                  &#125;;<br /><br />
                  <span className="keyword">if</span> (developer.<span className="property">passionate</span>) &#123;<br />
                  &nbsp;&nbsp;<span className="variable">console</span>.<span className="method">log</span>(<span className="string">"Keep Building! 🚀"</span>);<br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div 
            className="floating-badge badge-dsa"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="badge-glow" />
            <div className="badge-content">
              <span className="badge-icon dsa-icon">📚</span>
              <div>
                <p className="badge-num">500+</p>
                <p className="badge-label">DSA Solved</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="floating-badge badge-cgp"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="badge-glow" />
            <div className="badge-content">
              <span className="badge-icon cgp-icon">⭐</span>
              <div>
                <p className="badge-num">8.38</p>
                <p className="badge-label">B.Tech CGPA</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div 
            className="floating-icon icon-react"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <FaReact />
          </motion.div>
          
          <motion.div 
            className="floating-icon icon-js"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaJsSquare />
          </motion.div>

          <motion.div 
            className="floating-icon icon-cpp"
            animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <SiCplusplus />
          </motion.div>

          <motion.div 
            className="floating-icon icon-git"
            animate={{ x: [0, -6, 0], y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaGitAlt />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
export default Hero;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './ui/MagneticButton';
import './Footer.css';

export const Footer = () => {
  const { name, logoText, socials } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container container">
        
        {/* Top Info Block */}
        <div className="footer-top">
          {/* Logo Column */}
          <div className="footer-col-logo">
            <a href="#home" className="footer-logo" onClick={(e) => handleLinkClick(e, 'home')}>
              <span className="logo-accent">&lt;</span>
              <span className="logo-text">{logoText}</span>
              <span className="logo-accent"> /&gt;</span>
            </a>
            <p className="footer-desc">
              Building premium interfaces and solving complex algorithmic challenges.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col-links">
            <h5 className="footer-title">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
              <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a></li>
              <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
              <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="footer-col-socials">
            <h5 className="footer-title">Social Links</h5>
            <div className="footer-socials">
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
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} <span className="text-highlight">{name}</span>. All rights reserved.
          </p>
          <p className="footer-author-tag">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Back to top"
          >
            <FaChevronUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
export default Footer;

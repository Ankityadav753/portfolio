import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaDownload } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './ui/MagneticButton';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { logoText, resumeUrl } = portfolioData.personalInfo;

  const menuItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Achievements', target: 'achievements' },
    { label: 'Profiles', target: 'coding-profiles' },
    { label: 'Contact', target: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach((item) => {
      const el = document.getElementById(item.target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="navbar-container container">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'home')}>
            <span className="logo-accent">&lt;</span>
            <span className="logo-text">{logoText}</span>
            <span className="logo-accent"> /&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.target}>
                <a 
                  href={`#${item.target}`} 
                  className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.target)}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.div 
                      className="nav-link-indicator"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Download Button */}
          <div className="nav-actions">
            <MagneticButton>
              <a href={resumeUrl} className="btn-resume">
                <span>Resume</span>
                <FaDownload className="btn-resume-icon" />
              </a>
            </MagneticButton>

            {/* Mobile Hamburger Trigger */}
            <button 
              className="mobile-menu-trigger" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-overlay-container">
              <ul className="mobile-nav-links">
                {menuItems.map((item) => (
                  <motion.li key={item.target} variants={linkVariants}>
                    <a 
                      href={`#${item.target}`}
                      className={`mobile-nav-link ${activeSection === item.target ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, item.target)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li variants={linkVariants} className="mobile-resume-container">
                  <a href={resumeUrl} className="btn-resume-mobile">
                    <span>Download Resume</span>
                    <FaDownload />
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;

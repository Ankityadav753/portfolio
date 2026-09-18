import React, { useEffect, useState } from 'react';
import { ChevronUp, Github, Linkedin, Envelope } from './ui/Icons';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './ui/MagneticButton';
import './Footer.css';

export const Footer = () => {
  const { name, logoText, socials, email } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
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
      const navHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="footer-section" aria-label="Footer">
      <div className="footer-container container">
        
        {/* Top Info Block */}
        <div className="footer-top">
          {/* Logo Column */}
          <div className="footer-col-logo">
            <a 
              href="#home" 
              className="footer-logo" 
              onClick={(e) => handleLinkClick(e, 'home')}
              aria-label="Back to Top Home"
            >
              <span className="logo-accent">&lt;</span>
              <span className="logo-text">{logoText}</span>
              <span className="logo-accent"> /&gt;</span>
            </a>
            <p className="footer-desc">
              Computer Science Engineering Student &amp; Aspiring Software Engineer building reliable, high-quality web applications.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col-links">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="footer-col-socials">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-socials">
              <MagneticButton>
                <a 
                  href={socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                >
                  <Github />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a 
                  href={socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a 
                  href={`mailto:${email}`} 
                  aria-label="Email Ankit Kumar"
                >
                  <Envelope />
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
            Engineered with React &bull; Hosted on Vite
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button 
        className={`back-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
      >
        <ChevronUp style={{ width: '1.25rem', height: '1.25rem' }} />
      </button>
    </footer>
  );
};

export default Footer;

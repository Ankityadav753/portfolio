import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from './ui/Icons';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './ui/MagneticButton';
import './Navbar.css';

const MENU_ITEMS = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Education', target: 'education' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { logoText, resumeUrl } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 40);

      // Section tracking for active state
      const sections = MENU_ITEMS.map((item) => document.getElementById(item.target));
      const currentScroll = scrollPosition + 120; // offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= currentScroll) {
          setActiveSection(MENU_ITEMS[i].target);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const el = document.getElementById(targetId);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container container">
          {/* Logo */}
          <a 
            href="#home" 
            className="navbar-logo" 
            onClick={(e) => handleLinkClick(e, 'home')}
            aria-label="Ankit Kumar Portfolio Home"
          >
            <span className="logo-accent">&lt;</span>
            <span className="logo-text">{logoText}</span>
            <span className="logo-accent">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <ul className="nav-links">
              {MENU_ITEMS.map((item) => (
                <li key={item.target}>
                  <a 
                    href={`#${item.target}`} 
                    className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, item.target)}
                  >
                    {item.label}
                    {activeSection === item.target && (
                      <span className="nav-link-indicator" aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume CTA & Mobile Hamburger */}
          <div className="nav-actions">
            <MagneticButton>
              <a 
                href={resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-resume"
                aria-label="View Ankit Kumar's Resume"
              >
                <span>Resume</span>
                <ExternalLink className="btn-resume-icon" />
              </a>
            </MagneticButton>

            {/* Mobile Hamburger Trigger */}
            <button 
              className="mobile-menu-trigger" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-overlay-container">
          <ul className="mobile-nav-links">
            {MENU_ITEMS.map((item) => (
              <li key={item.target}>
                <a 
                  href={`#${item.target}`}
                  className={`mobile-nav-link ${activeSection === item.target ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.target)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-resume-container">
              <a 
                href={resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-resume-mobile"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="View Ankit Kumar's Resume"
              >
                <span>View Resume</span>
                <ExternalLink />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

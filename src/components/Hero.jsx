import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, ArrowRight, Envelope } from './ui/Icons';
import { portfolioData } from '../data/portfolioData';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { MagneticButton } from './ui/MagneticButton';
import './Hero.css';

export const Hero = () => {
  const { name, titles, description, socials, resumeUrl, email } = portfolioData.personalInfo;
  
  // Dynamic background image loader with automated fallback
  const [heroBgUrl, setHeroBgUrl] = useState('/aesthetic-nature-bg.jpg');

  useEffect(() => {
    let isMounted = true;
    const primaryImg = new Image();
    primaryImg.src = '/aesthetic-nature-bg.jpg';

    primaryImg.onload = () => {
      if (isMounted) {
        setHeroBgUrl('/aesthetic-nature-bg.jpg');
      }
    };

    primaryImg.onerror = () => {
      if (isMounted) {
        setHeroBgUrl('/hero-bg.jpg');
      }
    };

    return () => {
      isMounted = false;
    };
  }, []);

  // Typing effect
  const typedText = useTypingEffect(titles, 75, 35, 2200);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
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
    <section 
      id="home" 
      className="hero-section" 
      aria-label="Introduction"
      style={{ '--hero-bg-url': `url('${heroBgUrl}')` }}
    >
      <div className="hero-container container">
        
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">
              <span className="badge-dot" />
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
          
          <div className="hero-title-group">
            <span className="hero-greeting">Hi, I'm</span>
            <h1 className="hero-name">
              <span className="name-gradient">{name}</span>
            </h1>
          </div>

          <h2 className="hero-headline">
            Computer Science Engineering Student &amp; Aspiring Software Engineer
          </h2>

          <div className="hero-typed-container" aria-label={`Current role focus: ${typedText}`}>
            <span className="hero-typed-prefix">&gt;&nbsp;</span>
            <span className="hero-typed-text">{typedText}</span>
            <span className="hero-typed-cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero-description">
            {description}
          </p>

          {/* Action CTA Buttons */}
          <div className="hero-buttons">
            <MagneticButton>
              <button 
                onClick={() => handleScrollTo('projects')} 
                className="btn-primary"
                aria-label="View Projects section"
              >
                <span>View Projects</span>
                <ArrowRight style={{ width: '1rem', height: '1rem' }} />
              </button>
            </MagneticButton>

            <MagneticButton>
              <a 
                href={resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="View Ankit Kumar's Resume PDF"
              >
                <ExternalLink style={{ width: '1rem', height: '1rem' }} />
                <span>View Resume</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="btn-ghost"
                aria-label="Scroll to Contact section"
              >
                <span>Contact Me</span>
              </button>
            </MagneticButton>
          </div>

          {/* Verified Social Icons */}
          <div className="hero-socials" aria-label="Social profiles">
            <MagneticButton>
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile (opens in new tab)"
                className="social-btn"
              >
                <Github />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile (opens in new tab)"
                className="social-btn"
              >
                <Linkedin />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a 
                href={`mailto:${email}`} 
                aria-label={`Send email to ${email}`}
                className="social-btn"
              >
                <Envelope />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Right Side: Professional Terminal / Code Mockup */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-glow-back" />

          {/* Terminal Box */}
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="terminal-title">ankit@developer: ~/portfolio</span>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">cat profile.json</span>
              </div>

              <pre className="terminal-code">
                <code>
                  &#123;<br />
                  &nbsp;&nbsp;<span className="key">"name"</span>: <span className="val-str">"Ankit Kumar"</span>,<br />
                  &nbsp;&nbsp;<span className="key">"degree"</span>: <span className="val-str">"B.Tech Computer Science"</span>,<br />
                  &nbsp;&nbsp;<span className="key">"institution"</span>: <span className="val-str">"MMMUT Gorakhpur"</span>,<br />
                  &nbsp;&nbsp;<span className="key">"cgpa"</span>: <span className="val-num">8.37</span>,<br />
                  &nbsp;&nbsp;<span className="key">"coreFocus"</span>: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="val-str">"Software Engineering"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="val-str">"Full-Stack Development"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="val-str">"DSA &amp; Problem Solving"</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;<span className="key">"primaryLanguages"</span>: [<span className="val-str">"C++"</span>, <span className="val-str">"JavaScript"</span>, <span className="val-str">"C"</span>],<br />
                  &nbsp;&nbsp;<span className="key">"status"</span>: <span className="val-str">"Open to software engineering roles"</span><br />
                  &#125;
                </code>
              </pre>

              <div className="terminal-line status-line">
                <span className="prompt">$</span>
                <span className="status-text">git status</span>
              </div>
              <div className="status-output">
                On branch main — Working tree clean. Ready to build.
              </div>
            </div>
          </div>

          {/* Clean Metric Badges (Grounded strictly in verified data, no negative-margin collision) */}
          <div className="hero-meta-badges">
            <div className="stat-pill">
              <span className="pill-dot" />
              <div>
                <span className="pill-title">B.Tech CSE</span>
                <span className="pill-sub">MMMUT &bull; 8.37 CGPA</span>
              </div>
            </div>

            <div className="stat-pill">
              <span className="pill-dot" />
              <div>
                <span className="pill-title">Software Engineering</span>
                <span className="pill-sub">Internship Experience</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Cinematic Scroll Indicator */}
      <button 
        onClick={() => handleScrollTo('about')} 
        className="hero-scroll-indicator" 
        aria-label="Scroll down to About section"
      >
        <span className="mouse-wheel">
          <span className="mouse-wheel-dot" />
        </span>
      </button>
    </section>
  );
};

export default Hero;

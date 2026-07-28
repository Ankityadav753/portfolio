import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { MagneticButton } from './ui/MagneticButton';
import './CodingProfiles.css';

export const CodingProfiles = () => {
  const profiles = portfolioData.codingProfiles;

  // Helper function to render react-icons based on string representation
  const renderLogo = (logoName, brandColor) => {
    const style = { color: brandColor, fontSize: '3rem' };
    switch (logoName) {
      case 'FaGithub':
        return <FaGithub style={style} />;
      case 'SiLeetcode':
        return <SiLeetcode style={style} />;
      case 'SiCodeforces':
        return <SiCodeforces style={style} />;
      case 'FaLinkedin':
        return <FaLinkedin style={style} />;
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="coding-profiles" className="profiles-section section">
      <div className="profiles-container container">
        <h2 className="section-subtitle">Platforms</h2>
        <h3 className="section-title">Coding <span>Profiles</span></h3>

        <motion.div 
          className="profiles-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {profiles.map((profile, idx) => (
            <GlassCard 
              key={idx}
              className="profile-card"
              hoverLift={true}
              hoverGlow={true}
              delay={idx * 0.1}
              style={{
                // Custom CSS variable to pass the platform brand color to card hover borders
                '--brand-color': profile.platformColor
              }}
            >
              <div className="profile-card-glow" style={{ background: `radial-gradient(120px circle at 50% 50%, ${profile.platformColor}15, transparent 80%)` }} />
              
              <div className="profile-logo-box">
                {renderLogo(profile.logo, profile.platformColor)}
              </div>

              <h4 className="profile-name">{profile.name}</h4>
              <p className="profile-username">@{profile.username}</p>

              <MagneticButton className="profile-btn-wrapper">
                <a 
                  href={profile.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="profile-visit-btn"
                >
                  <span>Visit Profile</span>
                  <FaArrowRight className="visit-arrow-icon" />
                </a>
              </MagneticButton>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default CodingProfiles;

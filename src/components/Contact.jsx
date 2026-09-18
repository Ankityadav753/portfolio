import React, { useState } from 'react';
import { MapMarker, Envelope, Github, Linkedin, PaperPlane, Check } from './ui/Icons';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { MagneticButton } from './ui/MagneticButton';
import { ScrollReveal } from './ui/ScrollReveal';
import './Contact.css';

export const Contact = () => {
  const { email, location, socials } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct genuine mailto action (no fake server illusions)
    const subjectLine = formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim() || 'Recruiter'}`;
    const bodyText = `Hi Ankit,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\nContact Email: ${formData.email.trim()}`;
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`;
    
    // Open genuine email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="contact-section section" aria-label="Contact Ankit Kumar">
      <div className="contact-container container">
        
        <p className="section-subtitle">Get In Touch</p>
        <h2 className="section-title">Contact <span>Me</span></h2>

        <div className="contact-grid">
          {/* Left Side: Genuine Mailto Contact Form */}
          <ScrollReveal 
            className="contact-form-box"
            direction="left"
          >
            <GlassCard className="form-card" hoverLift={false} hoverGlow={true}>
              <div className="form-header">
                <h3 className="form-title">Send a Direct Message</h3>
                <p className="form-note">
                  Submitting will draft an email directly to <strong>{email}</strong> via your default email application.
                </p>
              </div>

              <form 
                onSubmit={handleSubmit} 
                className="contact-form"
              >
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                    required
                  />
                </div>

                <MagneticButton className="submit-btn-wrapper">
                  <button 
                    type="submit" 
                    className="btn-submit"
                    aria-label="Open email client to send message"
                  >
                    <span>Compose Email</span>
                    <PaperPlane className="submit-icon" style={{ width: '1rem', height: '1rem' }} />
                  </button>
                </MagneticButton>
              </form>
            </GlassCard>
          </ScrollReveal>

          {/* Right Side: Contact Info & Socials */}
          <ScrollReveal 
            className="contact-info-box"
            direction="right"
          >
            <div className="info-cards-list">
              {/* Email Card */}
              <GlassCard className="info-card" hoverLift={true} hoverGlow={true}>
                <div className="info-card-icon-box info-glow-amber">
                  <Envelope style={{ width: '1.2rem', height: '1.2rem' }} />
                </div>
                <div className="info-card-text">
                  <h4>Email</h4>
                  <a href={`mailto:${email}`} className="info-link" aria-label={`Email ${email}`}>
                    {email}
                  </a>
                  <button 
                    type="button" 
                    onClick={handleCopyEmail} 
                    className="copy-email-btn"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <span className="copied-status">
                        <Check style={{ width: '0.8rem', height: '0.8rem' }} /> Copied!
                      </span>
                    ) : (
                      <span>Copy Address</span>
                    )}
                  </button>
                </div>
              </GlassCard>

              {/* Location Card */}
              <GlassCard className="info-card" hoverLift={true} hoverGlow={true}>
                <div className="info-card-icon-box info-glow-terracotta">
                  <MapMarker style={{ width: '1.2rem', height: '1.2rem' }} />
                </div>
                <div className="info-card-text">
                  <h4>Location</h4>
                  <p>{location}</p>
                </div>
              </GlassCard>
            </div>

            {/* Social Connect Block */}
            <div className="info-social-block">
              <h4 className="social-block-title">Professional Profiles</h4>
              <p className="social-block-desc">
                Connect with me on GitHub to view my repositories or reach out via LinkedIn.
              </p>

              <div className="contact-social-buttons">
                <a 
                  href={socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-card-btn"
                  aria-label="Visit Ankit's GitHub Profile"
                >
                  <Github className="social-card-icon" />
                  <div>
                    <span className="social-platform-name">GitHub</span>
                    <span className="social-handle">@Ankityadav753</span>
                  </div>
                </a>

                <a 
                  href={socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-card-btn"
                  aria-label="Visit Ankit's LinkedIn Profile"
                >
                  <Linkedin className="social-card-icon" />
                  <div>
                    <span className="social-platform-name">LinkedIn</span>
                    <span className="social-handle">Ankit Kumar</span>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;

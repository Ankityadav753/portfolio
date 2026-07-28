import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { MagneticButton } from './ui/MagneticButton';
import './Contact.css';

export const Contact = () => {
  const { email, phone, location, socials } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Simulate API request
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container container">
        <h2 className="section-subtitle">Get In Touch</h2>
        <h3 className="section-title">Contact <span>Me</span></h3>

        <div className="contact-grid">
          {/* Left Side: Modern Glass Form */}
          <motion.div 
            className="contact-form-box"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="form-card" hoverLift={false} hoverGlow={true}>
              <AnimatePresence mode="wait">
                {!status.success ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-group-row">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
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
                        placeholder="Subject Topic"
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
                        placeholder="Your Message..."
                        rows="5"
                        required
                      />
                    </div>

                    <MagneticButton className="submit-btn-wrapper">
                      <button 
                        type="submit" 
                        className="btn-submit"
                        disabled={status.submitting}
                      >
                        {status.submitting ? (
                          <span className="spinner" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FaPaperPlane className="submit-icon" />
                          </>
                        )}
                      </button>
                    </MagneticButton>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-banner"
                    className="form-success-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="success-icon-box">🎉</div>
                    <h4 className="success-title">Message Sent!</h4>
                    <p className="success-text">
                      Thank you for reaching out. Ankit will get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setStatus({ submitting: false, success: false, error: null })} 
                      className="btn-reset"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>

          {/* Right Side: Contact Info */}
          <motion.div 
            className="contact-info-box"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Info Cards */}
            <div className="info-cards-list">
              <GlassCard className="info-card" hoverLift={true} hoverGlow={true}>
                <div className="info-card-icon-box blue-glow">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-card-text">
                  <h5>Location</h5>
                  <p>{location}</p>
                </div>
              </GlassCard>

              <GlassCard className="info-card" hoverLift={true} hoverGlow={true}>
                <div className="info-card-icon-box purple-glow">
                  <FaEnvelope />
                </div>
                <div className="info-card-text">
                  <h5>Email</h5>
                  <p><a href={`mailto:${email}`}>{email}</a></p>
                </div>
              </GlassCard>

              <GlassCard className="info-card" hoverLift={true} hoverGlow={true}>
                <div className="info-card-icon-box cyan-glow">
                  <FaPhoneAlt />
                </div>
                <div className="info-card-text">
                  <h5>Phone</h5>
                  <p>{phone}</p>
                </div>
              </GlassCard>
            </div>

            {/* Social Block */}
            <div className="info-social-block">
              <h4>Connect with me on Socials</h4>
              <div className="contact-social-icons">
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

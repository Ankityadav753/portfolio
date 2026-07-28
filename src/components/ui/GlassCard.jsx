import React from 'react';
import { motion } from 'framer-motion';
import './GlassCard.css';

export const GlassCard = ({ 
  children, 
  className = '', 
  hoverGlow = true, 
  hoverLift = true,
  delay = 0,
  ...props 
}) => {
  const handleMouseMove = (e) => {
    if (!hoverGlow) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      className={`glass-card ${hoverLift ? 'hover-lift' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div className="glass-card-glow" />
      <div className="glass-card-border" />
      <div className="glass-card-content">
        {children}
      </div>
    </motion.div>
  );
};

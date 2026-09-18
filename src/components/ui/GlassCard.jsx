import React, { useEffect, useRef, useState } from 'react';
import './GlassCard.css';

export const GlassCard = ({ 
  children, 
  className = '', 
  hoverGlow = true, 
  hoverLift = true,
  delay = 0,
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

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
    <div
      ref={cardRef}
      className={`glass-card ${hoverLift ? 'hover-lift' : ''} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div className="glass-card-glow" />
      <div className="glass-card-border" />
      <div className="glass-card-content">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;

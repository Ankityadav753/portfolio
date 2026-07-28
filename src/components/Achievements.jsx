import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import './Achievements.css';

// Reusable CountUp component using time-based interpolation for smooth 60fps rendering
const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const endValue = parseInt(to, 10);
    const totalDuration = duration * 1000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / totalDuration, 1);
      
      setCount(Math.floor(progress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, to, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export const Achievements = () => {
  const achievements = portfolioData.achievements;

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
    <section id="achievements" className="achievements-section section">
      <div className="achievements-container container">
        <h2 className="section-subtitle">Milestones</h2>
        <h3 className="section-title">My <span>Achievements</span></h3>

        <motion.div 
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {achievements.map((ach, idx) => (
            <GlassCard 
              key={idx} 
              className="achievement-card"
              hoverLift={true}
              hoverGlow={true}
              delay={idx * 0.1}
            >
              <div className="counter-container">
                <span className="counter-number">
                  <CountUp to={ach.count} />
                  <span className="counter-suffix">{ach.suffix}</span>
                </span>
              </div>
              <p className="achievement-label">{ach.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Achievements;

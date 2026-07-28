import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticButton wrapper component that uses Framer Motion's spring animations
 * to pull itself towards the user's cursor.
 */
export const MagneticButton = ({ children, className = '', ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from cursor to center of button
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Apply dampening factor so the button moves a fraction of the distance (e.g., 30%)
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 180, damping: 12, mass: 0.2 }}
      className={`magnetic-button-wrapper ${className}`}
      style={{ display: 'inline-block' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

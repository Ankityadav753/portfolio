import React, { useRef, useState } from 'react';

/**
 * MagneticButton wrapper component that uses pure CSS transitions
 * to pull itself towards the user's cursor.
 */
export const MagneticButton = ({ children, className = '', ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from cursor to center of button
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Apply dampening factor so the button moves a fraction of the distance (e.g., 30%)
    setPosition({ x: x * 0.3, y: y * 0.3 });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const { x, y } = position;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-button-wrapper ${className}`}
      style={{ 
        display: 'inline-block',
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default MagneticButton;

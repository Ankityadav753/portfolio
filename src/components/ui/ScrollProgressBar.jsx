import React, { useEffect, useState } from 'react';
import './ScrollProgressBar.css';

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize once
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="scroll-progress-bar" 
      style={{ 
        transform: `scaleX(${scrollProgress / 100})`, 
        transformOrigin: 'left',
        transition: 'transform 0.1s ease-out'
      }} 
    />
  );
};

export default ScrollProgressBar;

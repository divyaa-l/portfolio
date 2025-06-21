
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrolled / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        style={{ 
          scaleX: scrollProgress,
          transformOrigin: 'left'
        }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
};

export default ScrollProgressBar;

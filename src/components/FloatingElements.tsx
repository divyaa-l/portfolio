
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Zap, Star, Heart, Sparkles, Cpu, Wifi, Globe, Rocket } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const icons = [Code, Database, Zap, Star, Heart, Sparkles, Cpu, Wifi, Globe, Rocket];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Enhanced floating icons */}
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-300"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 80 - 40, 0],
            rotate: [0, 360, 0],
            scale: [0.8, 1.5, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut",
          }}
        >
          <Icon size={32 + Math.random() * 24} />
        </motion.div>
      ))}
      
      {/* Enhanced gradient orbs */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/40 blur-2xl"
          style={{
            width: `${150 + Math.random() * 120}px`,
            height: `${150 + Math.random() * 120}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 400 - 200, 0],
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8,
          }}
        />
      ))}
      
      {/* Enhanced flowing lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/80 to-transparent"
          style={{
            width: '300px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [-300, window.innerWidth + 300],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear",
          }}
        />
      ))}

      {/* Pulsing dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;

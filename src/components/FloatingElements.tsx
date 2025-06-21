
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Zap, Star, Heart, Sparkles } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const icons = [Code, Database, Zap, Star, Heart, Sparkles];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <Icon size={24 + Math.random() * 16} />
        </motion.div>
      ))}
      
      {/* Gradient orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
          style={{
            width: `${100 + Math.random() * 100}px`,
            height: `${100 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;

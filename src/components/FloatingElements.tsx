
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Globe, Zap, Settings, Terminal, GitBranch, Layers, Box } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const techIcons = [Code2, Database, Cpu, Globe, Zap, Settings, Terminal, GitBranch, Layers, Box];
  
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full overflow-hidden">
      {/* Professional floating tech icons */}
      {techIcons.map((Icon, index) => (
        <motion.div
          key={`tech-${index}`}
          className="absolute text-purple-400/20"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <Icon size={16 + Math.random() * 8} />
        </motion.div>
      ))}
      
      {/* Subtle gradient orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl"
          style={{
            width: `${150 + Math.random() * 100}px`,
            height: `${150 + Math.random() * 100}px`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border border-purple-400/15"
          style={{
            width: '30px',
            height: '30px',
            left: `${Math.random() * 95}%`,
            top: `${Math.random() * 95}%`,
            borderRadius: i % 2 === 0 ? '50%' : '0%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        />
      ))}

      {/* Minimal pulsing dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-purple-400/40 rounded-full"
          style={{
            left: `${Math.random() * 98}%`,
            top: `${Math.random() * 98}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;

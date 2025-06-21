
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('hero');
    },
  });

  const roles = [
    'Data Scientist',
    'Data Engineer', 
    'Software Developer',
    'AI/ML Engineer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/lssdivya',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/divyaa-l',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      url: 'mailto:Lss.divya27@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0c1a] to-[#1a1a2e]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative mt-16 w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#DB2777] p-1 shadow-2xl transform translate-y-8">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/55fc955c-5023-4d3d-ba13-8d30a1ef83c1.png"
                  alt="Sai Divya Lanka"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#DB2777] bg-clip-text text-transparent">
              Sai Divya Lanka
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-[#94A3B8] mb-8 max-w-4xl mx-auto leading-relaxed px-4"
          >
            <span className="text-[#94A3B8]">I am a </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-[#06B6D4] font-semibold"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-br from-[#5B21B6] to-[#DB2777] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#06B6D4]"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#5B21B6] to-[#DB2777] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-16 border border-[#06B6D4]"
          >
            See My Work
          </motion.button>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-[#94A3B8]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

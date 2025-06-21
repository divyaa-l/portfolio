
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import FloatingElements from '../components/FloatingElements';
import ScrollProgressBar from '../components/ScrollProgressBar';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      {/* Background animations - render first with negative z-index */}
      <AnimatedBackground />
      <FloatingElements />
      
      {/* Main app content */}
      <motion.div 
        className="min-h-screen bg-black relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ScrollProgressBar />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <Hero setActiveSection={setActiveSection} />
            <About setActiveSection={setActiveSection} darkMode={true} />
            <Skills setActiveSection={setActiveSection} />
            <Experience setActiveSection={setActiveSection} />
            <Projects setActiveSection={setActiveSection} />
            <Contact setActiveSection={setActiveSection} />
          </motion.div>
        </main>
        
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;

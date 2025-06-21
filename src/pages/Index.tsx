
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

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      {/* Background layers */}
      <AnimatedBackground />
      <FloatingElements />
      <ScrollProgressBar />

      {/* Main content */}
      <motion.div
        className="min-h-screen bg-transparent transition-colors duration-300 relative overflow-x-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <main className="relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <Hero setActiveSection={setActiveSection} />
            <About setActiveSection={setActiveSection} darkMode />
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
}

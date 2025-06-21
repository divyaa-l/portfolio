
import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter';
import { Coffee, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  setActiveSection: (section: string) => void;
  darkMode?: boolean;
}

// Simple ProgressBar component
const ProgressBar: React.FC<{ color: string; value: number }> = ({ color, value }) => (
  <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
    <div 
      className="h-full transition-all duration-1000 ease-out rounded-full"
      style={{ 
        width: `${value}%`, 
        backgroundColor: color 
      }}
    />
  </div>
);

const About: React.FC<AboutProps> = ({ setActiveSection, darkMode = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('about');
    },
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const aboutText = "I'm a passionate Data Engineer and Full-Stack Developer who transforms raw data into powerful, scalable solutions that drive business impact. With 4+ years of experience building enterprise-grade data pipelines, modern web applications, and intelligent analytics platforms, I specialize in bridging the gap between complex data challenges and elegant user experiences. From architecting cloud native ETL frameworks that process terabytes of data to developing responsive React applications serving hundreds of thousands of users, I thrive on turning ambitious ideas into production-ready solutions. My expertise spans the entire data lifecycle from ingestion and processing to visualization and deployment, always with a focus on performance, scalability, and innovation.";

  const words = aboutText.split(' ');

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const spans = textRef.current?.querySelectorAll('span');
      if (!spans) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        pin: true,
        scrub: 12,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalWords = spans.length;
          const currentIndex = Math.floor(progress * totalWords);

          spans.forEach((span, index) => {
            if (index <= currentIndex) {
              gsap.to(span, {
                color: '#8B5CF6',
                duration: 0.5,
                ease: "power2.out"
              });
            } else {
              gsap.to(span, {
                color: '#6B7280',
                duration: 0.5,
                ease: "power2.out"
              });
            }
          });
        }
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-black" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-br from-purple-600 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="pt-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16" ref={containerRef}>
            {/* Left Column - Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-48 h-48 rounded-full bg-purple-800 flex items-center justify-center p-4">
                <img src="/bitmoji.png" className="w-full h-full rounded-full object-cover" alt="Avatar" />
              </div>
            </motion.div>

            {/* Right Column - Content Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg flex-1 relative overflow-hidden"
            >
              <h3 className="text-5xl font-bold text-purple-600 mb-6">About Me</h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-700 leading-relaxed text-lg"
                ref={textRef}
              >
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="inline-block mr-2 transition-colors duration-500"
                    style={{ color: '#6B7280' }}
                  >
                    {word}
                  </span>
                ))}
              </motion.div>

              {/* Progress Bars */}
              <div className="space-y-4 mt-6">
                <ProgressBar color="#FBBF24" value={80} />
                <ProgressBar color="#EF4444" value={65} />
                <ProgressBar color="#8B5CF6" value={70} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { end: 4, label: 'Years Experience', suffix: '+' },
            { end: 48, label: 'Projects Delivered', suffix: '' },
            { end: 100, label: 'Users Served', suffix: 'K+' },
            { end: 1000, label: 'Cups of Coffee', suffix: '?', icon: Coffee, note: 'Not sure though, haha' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-black backdrop-blur-sm rounded-2xl p-6 border border-purple-600 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2 flex items-center justify-center gap-2">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} isInView={statsInView} />
                {stat.icon && <stat.icon size={32} className="text-pink-500" />}
              </div>
              <div className="text-purple-200 font-medium">
                {stat.label}
                {stat.note && <div className="text-xs text-slate-400 mt-1">{stat.note}</div>}
                {index === 1 && <div className="text-xs text-slate-400 mt-1">Still counting...</div>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-br from-purple-600 to-purple-500 bg-clip-text text-transparent">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Leadership', subtitle: 'Software Development Club Lead' },
              { title: 'Teaching', subtitle: 'Graduate Teaching Assistant for Database Systems' },
              { title: 'Research', subtitle: 'Graduate Research Assistant' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-black rounded-2xl p-6 border border-purple-600 text-center shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <div className="font-semibold text-pink-500 mb-2">{achievement.title}</div>
                <div className="text-purple-200 text-sm">{achievement.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

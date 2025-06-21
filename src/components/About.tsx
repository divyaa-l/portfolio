
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import { Coffee } from 'lucide-react';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('about');
    },
  });

  const aboutText = "I'm a passionate Data Engineer and Full-Stack Developer who transforms raw data into powerful, scalable solutions that drive business impact. With 4+ years of experience building enterprise-grade data pipelines, modern web applications, and intelligent analytics platforms, I specialize in bridging the gap between complex data challenges and elegant user experiences. From architecting cloud-native ETL frameworks that process terabytes of data to developing responsive React applications serving hundreds of thousands of users, I thrive on turning ambitious ideas into production-ready solutions. My expertise spans the entire data lifecycle from ingestion and processing to visualization and deployment, always with a focus on performance, scalability, and innovation.";

  const words = aboutText.split(' ');
  const [highlightedWords, setHighlightedWords] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isScrollLocked) return;

      e.preventDefault();
      
      if (e.deltaY > 0) {
        // Scrolling down - highlight next word
        setHighlightedWords(prev => Math.min(prev + 1, words.length));
      } else {
        // Scrolling up - unhighlight previous word
        setHighlightedWords(prev => Math.max(prev - 1, 0));
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (isInViewport && highlightedWords < words.length) {
        setIsScrollLocked(true);
        document.body.style.overflow = 'hidden';
      } else if (highlightedWords >= words.length) {
        setIsScrollLocked(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [inView, isScrollLocked, highlightedWords, words.length]);

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto" ref={sectionRef}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 min-h-[50vh] flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl leading-relaxed"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className={`inline-block mr-2 transition-colors duration-200 ${
                    index < highlightedWords 
                      ? 'text-white dark:text-white' 
                      : 'text-gray-500 dark:text-gray-500'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { end: 4, label: 'Years Experience', suffix: '+' },
            { end: 48, label: 'Projects Delivered', suffix: '' },
            { end: 100, label: 'Users Served', suffix: 'K+' },
            { end: 1000, label: 'Cups of Coffee', suffix: '?', icon: Coffee },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 flex items-center justify-center gap-2">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} isInView={inView} />
                {stat.icon && <stat.icon size={32} className="text-amber-500" />}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
                {index === 1 && <div className="text-xs text-gray-500 mt-1">Still counting...</div>}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Achievements
          </h3>
          <div className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              <AnimatedCounter end={3} isInView={inView} />
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Key Achievements
              <div className="text-xs text-gray-500 mt-1">Still counting...</div>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <div>• Software Development Club Lead</div>
              <div>• Graduate Teaching Assistant for Database Systems</div>
              <div>• Graduate Research Assistant</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

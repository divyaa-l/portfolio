
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const textRef = useRef<HTMLParagraphElement>(null);

  const aboutText = "I'm a passionate Data Engineer and Full-Stack Developer who transforms raw data into powerful, scalable solutions that drive business impact. With 4+ years of experience building enterprise-grade data pipelines, modern web applications, and intelligent analytics platforms, I specialize in bridging the gap between complex data challenges and elegant user experiences. From architecting cloud-native ETL frameworks that process terabytes of data to developing responsive React applications serving hundreds of thousands of users, I thrive on turning ambitious ideas into production-ready solutions. My expertise spans the entire data lifecycle from ingestion and processing to visualization and deployment, always with a focus on performance, scalability, and innovation.";

  useEffect(() => {
    if (inView && textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      words.forEach((word, index) => {
        setTimeout(() => {
          word.classList.add('highlighted');
        }, index * 100);
      });
    }
  }, [inView]);

  const renderAnimatedText = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span
        key={index}
        className="word inline-block transition-all duration-300 opacity-50 hover:opacity-100"
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {word}&nbsp;
      </span>
    ));
  };

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
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-purple-100 dark:border-purple-800/30">
            <p
              ref={textRef}
              className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
            >
              {renderAnimatedText(aboutText)}
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .word.highlighted {
          opacity: 1;
          color: rgb(147 51 234);
        }
        .dark .word.highlighted {
          color: rgb(196 181 253);
        }
      `}</style>
    </section>
  );
};

export default About;

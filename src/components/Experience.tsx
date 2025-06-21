
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  setActiveSection: (section: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('experience');
    },
  });

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences = [
    {
      title: 'Data Engineer & Full-Stack Solutions',
      company: 'UNC Charlotte',
      period: 'Feb 2024 – Dec 2024',
      location: 'Charlotte, NC',
      description: 'Led full-stack development and data engineering initiatives for university systems.',
      details: [
        'Designed scalable full-stack apps (JavaScript, React, Python) for 10K+ users',
        'Developed robust ETL pipelines with Python, SQL, and cloud solutions',
        'Created interactive dashboards enabling real-time analytics',
        'Delivered 15+ data-driven projects with comprehensive documentation',
      ],
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Data Engineer Intern',
      company: 'FireEye',
      period: 'Sep 2024 – Dec 2024',
      location: 'Remote',
      description: 'Contributed to cybersecurity data analytics and pipeline optimization.',
      details: [
        'Built scalable analytics apps using Python, Java, JavaScript',
        'Reduced ETL pipeline dev-time by 70% using Apache Airflow',
        'Enhanced app performance and reliability metrics by 90%',
        'Collaborated with cross-functional teams for efficient delivery',
      ],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Data Engineer',
      company: 'Tata Consultancy Services',
      period: 'Aug 2021 – Aug 2023',
      location: 'India',
      description: 'Engineered enterprise-scale data solutions for Fortune 500 clients.',
      details: [
        'Engineered enterprise-grade data pipelines handling terabytes of data',
        'Automated ETL processes reducing manual interventions by 80%',
        'Delivered BI dashboards enabling strategic decision-making',
        'Improved data warehouse query performance by 60%',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="experience" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-blue-900/10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:ml-20' : 'md:ml-20 md:pl-8'}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block" />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-2`}>
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedCard === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          {exp.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIndex * 0.1 }}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

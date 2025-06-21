
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillsProps {
  setActiveSection: (section: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('skills');
    },
  });

  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: ['Python', 'Java', 'C/C++', 'Node.js', 'Shell Scripting'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Data Engineering & Databases',
      skills: ['SQL', 'PostgreSQL', 'Apache Airflow', 'ETL/ELT', 'BigQuery', 'MongoDB'],
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Data Science & ML',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${group.gradient} rounded-lg flex items-center justify-center mb-4`}>
                <div className="w-6 h-6 bg-white rounded opacity-80" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                {group.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (groupIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 bg-gradient-to-r ${group.gradient} text-white text-sm rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

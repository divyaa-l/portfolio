
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaAws, 
  FaDocker, 
  FaGitAlt,
  FaCogs,
  FaTerminal,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiApacheairflow, 
  SiGooglebigquery, 
  SiMongodb, 
  SiKubernetes, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiTensorflow, 
  SiPytorch 
} from 'react-icons/si';

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
      skills: [
        { name: 'React.js', icon: FaReact },
        { name: 'JavaScript', icon: FaJs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt }
      ],
      gradient: 'from-[#5B21B6] to-[#DB2777]',
      headerIcon: FaReact,
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'C/C++', icon: FaCogs },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Shell Scripting', icon: FaTerminal }
      ],
      gradient: 'from-[#5B21B6] to-[#DB2777]',
      headerIcon: FaPython,
    },
    {
      title: 'Data Engineering & Databases',
      skills: [
        { name: 'SQL', icon: FaDatabase },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Apache Airflow', icon: SiApacheairflow },
        { name: 'ETL/ELT', icon: FaCogs },
        { name: 'BigQuery', icon: SiGooglebigquery },
        { name: 'MongoDB', icon: SiMongodb }
      ],
      gradient: 'from-[#5B21B6] to-[#DB2777]',
      headerIcon: FaDatabase,
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'CI/CD', icon: FaGitAlt },
        { name: 'Git', icon: FaGitAlt }
      ],
      gradient: 'from-[#5B21B6] to-[#DB2777]',
      headerIcon: FaAws,
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Pandas', icon: SiPandas },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Scikit-learn', icon: SiScikitlearn },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch }
      ],
      gradient: 'from-[#5B21B6] to-[#DB2777]',
      headerIcon: SiTensorflow,
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#DB2777] bg-clip-text text-transparent">
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
              className="bg-gradient-to-br from-[#5B21B6] to-[#DB2777] backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-[#06B6D4] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#06B6D4] rounded-lg flex items-center justify-center mb-4">
                <group.headerIcon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">
                {group.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (groupIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-2 bg-[#06B6D4] text-white text-sm rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
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

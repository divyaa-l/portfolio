
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('projects');
    },
  });

  const projects = [
    {
      title: 'Darknet Traffic Detection (LSTM)',
      description: 'Improved IoT security by classifying malicious network patterns using advanced LSTM neural networks.',
      details: 'Enhanced prediction accuracy by 20% using LSTM neural networks',
      github: '#',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400',
      gradient: 'from-red-500 to-orange-500',
      tech: ['Python', 'TensorFlow', 'LSTM', 'Cybersecurity'],
    },
    {
      title: 'Computer Vision Icon Matching',
      description: 'Automated PDF analysis with OpenCV reducing manual work by 80% through intelligent icon detection.',
      details: 'Ensured 95%+ accuracy in icon detection for document automation',
      github: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400',
      gradient: 'from-blue-500 to-purple-500',
      tech: ['Python', 'OpenCV', 'Computer Vision', 'PDF Processing'],
    },
    {
      title: 'YouTube Stats Analyzer',
      description: 'Provided deep analytics of global YouTube trends, earnings, and demographics using advanced data visualization.',
      details: 'Delivered insights using Python and data visualization libraries',
      github: '#',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400',
      gradient: 'from-green-500 to-teal-500',
      tech: ['Python', 'Data Analytics', 'Visualization', 'APIs'],
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-pink-900/10 dark:to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Showcasing innovative solutions • <span className="text-purple-600 dark:text-purple-400 font-semibold">Still counting...</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
                  {project.description}
                </p>
                
                <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                  {project.details}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-shadow duration-200`}
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

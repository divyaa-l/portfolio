
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-gray-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <ChevronUp size={24} />
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
              Sai Divya Lanka
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Transforming data into powerful solutions that drive business impact.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400">
              © 2025 Sai Divya Lanka. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

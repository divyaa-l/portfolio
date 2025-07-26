
import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-purple-500/20 border border-gray-200/30 hover:shadow-purple-500/40 transition-all duration-300"
    >
      <h4 className="text-lg font-bold mb-4">
        <span className="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Let's discuss!
        </span>
      </h4>
      <p className="text-gray-600 mb-4">
        Don't like forms? Send me an <span className="text-purple-600 font-semibold">email</span>. 👋
      </p>
    </motion.div>
  );
};

export default ContactInfo;

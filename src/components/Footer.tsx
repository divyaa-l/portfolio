
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/lssdivya',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/divyaa-l',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      url: 'mailto:Lss.divya27@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] border-t border-[#06B6D4] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#DB2777] bg-clip-text text-transparent mb-4">
              Sai Divya Lanka
            </h3>
            <p className="text-[#94A3B8] max-w-md">
              Transforming data into insights, building scalable solutions, and bridging the gap between technology and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-br from-[#5B21B6] to-[#DB2777] rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#06B6D4]"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-[#06B6D4] pt-8 text-center"
          >
            <p className="text-[#94A3B8] text-sm flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-[#DB2777]" /> by Sai Divya Lanka
            </p>
            <p className="text-[#94A3B8] text-xs mt-2">
              © 2024 All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

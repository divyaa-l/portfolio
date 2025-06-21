
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  setActiveSection: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('contact');
    },
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'your_service_id',
        'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'your_public_key'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/lssdivya',
      color: 'from-[#5B21B6] to-[#DB2777]',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/divyaa-l',
      color: 'from-[#5B21B6] to-[#DB2777]',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:Lss.divya27@gmail.com',
      color: 'from-[#5B21B6] to-[#DB2777]',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#DB2777] bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#5B21B6] to-[#DB2777] backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-[#06B6D4]"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#94A3B8] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#06B6D4] bg-white/10 text-white focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent transition-colors duration-200 placeholder-[#94A3B8]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#94A3B8] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#06B6D4] bg-white/10 text-white focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent transition-colors duration-200 placeholder-[#94A3B8]"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#94A3B8] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#06B6D4] bg-white/10 text-white focus:ring-2 focus:ring-[#06B6D4] focus:border-transparent transition-colors duration-200 resize-none placeholder-[#94A3B8]"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#06B6D4] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-500/20 text-green-300 border border-green-500'
                      : 'bg-red-500/20 text-red-300 border border-red-500'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      Message sent successfully! I'll get back to you soon.
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      Failed to send message. Please try again or contact me directly.
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#5B21B6] to-[#DB2777] backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-[#06B6D4]">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Connect with me
              </h3>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#06B6D4] text-white shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <link.icon size={24} />
                    <span className="font-semibold">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

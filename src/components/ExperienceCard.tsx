
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, MapPin } from 'lucide-react';
import { ExperienceItem } from './ExperienceData';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
  inView: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  isExpanded,
  onToggle,
  inView
}) => {
  console.log(`Rendering experience ${index}:`, experience.title);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative md:ml-20"
    >
      <div className="bg-blue-900 -m-8 mb-6 p-6 rounded-t-2xl border-b border-purple-500">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-pink-500 mb-2">
              {experience.title}
            </h3>
            <div className="text-lg font-semibold text-purple-300 mb-2">
              {experience.company}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-purple-200">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {experience.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                {experience.location}
              </div>
            </div>
          </div>
          <button
            onClick={() => onToggle(index)}
            className="text-pink-500"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </motion.div>
          </button>
        </div>
      </div>
      
      <ul className="space-y-2 text-purple-200">
        {experience.description.map((point, pointIndex) => (
          <li key={pointIndex} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 mt-4 pt-4 border-t border-purple-500">
              {experience.details.map((detail, detailIndex) => (
                <motion.li
                  key={detailIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: detailIndex * 0.1 }}
                  className="flex items-start gap-2 text-purple-200"
                >
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperienceCard;

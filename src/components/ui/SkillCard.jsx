import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, name, level, delay = 0 }) => {
  const levelPercentage = {
    expert: 90,
    advanced: 75,
    intermediate: 60,
    beginner: 40,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-card p-4 text-center"
    >
      {Icon && (
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="flex justify-center mb-3"
        >
          <Icon className="w-10 h-10 text-primary" />
        </motion.div>
      )}
      <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">{name}</h3>

      {level && (
        <div className="w-full bg-light-surface dark:bg-dark-surface rounded-full h-2 mb-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${levelPercentage[level] || 70}%` }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-primary rounded-full"
          />
        </div>
      )}

      <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary capitalize">
        {level}
      </p>
    </motion.div>
  );
};

export default SkillCard;

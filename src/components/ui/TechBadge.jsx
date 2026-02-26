import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ children, variant = 'default', icon: Icon = null, className = '' }) => {
  const variants = {
    default: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light border border-primary/20 dark:border-primary/30',
    success: 'bg-success/10 text-success border border-success/20 dark:border-success/30',
    accent: 'bg-accent/10 text-accent border border-accent/20 dark:border-accent/30',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className={`tech-badge ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3 h-3 inline mr-1" />}
      {children}
    </motion.span>
  );
};

export default TechBadge;

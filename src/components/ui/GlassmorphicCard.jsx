import React from 'react';
import { motion } from 'framer-motion';

const GlassmorphicCard = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' } : {}}
      className={`glass-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassmorphicCard;

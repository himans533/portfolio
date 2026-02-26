import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 0.6,
  className = '',
}) => {
  const directionVariants = {
    up: { initial: { opacity: 0, y: distance }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -distance }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: distance }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -distance }, animate: { opacity: 1, x: 0 } },
  };

  const variants = directionVariants[direction];

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

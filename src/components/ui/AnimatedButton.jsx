import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon: Icon = null,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 flex items-center gap-2';

  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-glow',
    secondary: 'border-2 border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white',
    outline: 'border-2 border-light-text-secondary dark:border-dark-text-secondary text-light-text dark:text-dark-text hover:border-primary hover:text-primary',
    ghost: 'text-primary hover:bg-primary/10 dark:hover:bg-primary/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
};

export default AnimatedButton;

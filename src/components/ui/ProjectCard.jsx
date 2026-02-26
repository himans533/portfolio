import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi';
import TechBadge from './TechBadge';

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
  features = [],
  delay = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-primary">
        {image ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/30 text-5xl">
            {title.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-gradient transition-colors">
            {title}
          </h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown className="text-primary" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech, idx) => (
            <TechBadge key={idx}>{tech}</TechBadge>
          ))}
          {technologies.length > 3 && (
            <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
              +{technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:shadow-glow transition-all"
            >
              <FiExternalLink className="w-4 h-4" /> Live
            </motion.a>
          )}
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-2 border-2 border-primary text-primary dark:text-primary-light rounded-lg text-sm font-semibold hover:bg-primary hover:text-white dark:hover:text-white transition-all"
            >
              <FiGithub className="w-4 h-4" /> Code
            </motion.a>
          )}
        </div>

        {/* Expandable Features */}
        <AnimatePresence>
          {isExpanded && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
              <ul className="text-sm text-light-text-secondary dark:text-dark-text-secondary space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

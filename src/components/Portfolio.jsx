import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import ProjectCard from "./ui/ProjectCard";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Array Destructuring",
      description: "Advanced JavaScript destructuring patterns and best practices",
      image: arrayDestruct,
      technologies: ["JavaScript", "ES6", "React"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      features: [
        "Real-time destructuring demos",
        "Interactive code examples",
        "Performance optimization tips",
      ],
      category: "frontend",
    },
    {
      id: 2,
      title: "React Parallax Effect",
      description: "Smooth parallax scrolling implementation with React",
      image: reactParallax,
      technologies: ["React", "Framer Motion", "CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      features: [
        "Smooth parallax animations",
        "Responsive design",
        "Performance optimized",
      ],
      category: "frontend",
    },
    {
      id: 3,
      title: "Navigation Component",
      description: "Modern and responsive navigation with animations",
      image: navbar,
      technologies: ["React", "Tailwind CSS", "Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      features: [
        "Mobile-first design",
        "Smooth transitions",
        "Accessibility focus",
      ],
      category: "frontend",
    },
    {
      id: 4,
      title: "Smooth Scroll Navigation",
      description: "Elegant smooth scrolling with anchor navigation",
      image: reactSmooth,
      technologies: ["React", "React Scroll", "JavaScript"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      features: [
        "Smooth scroll anchors",
        "Active link highlighting",
        "SEO optimized",
      ],
      category: "frontend",
    },
    {
      id: 5,
      title: "Node.js Installation Guide",
      description: "Comprehensive guide for setting up Node.js",
      image: installNode,
      technologies: ["Node.js", "npm", "Documentation"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      features: [
        "Step-by-step instructions",
        "Platform guides",
        "Troubleshooting section",
      ],
      category: "backend",
    },
    {
      id: 6,
      title: "Weather Application",
      description: "Real-time weather app with API integration",
      image: reactWeather,
      technologies: ["React", "API", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      features: [
        "Real-time weather data",
        "Location-based search",
        "Dark/Light theme",
      ],
      category: "fullstack",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      name="portfolio"
      className="section-container relative"
    >
      {/* Section Header */}
      <ScrollReveal className="mb-16 md:mb-20">
        <motion.div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              My Portfolio
            </p>
          </motion.div>
          <h2 className="heading-premium text-gradient">
            Featured Projects
          </h2>
          <p className="subheading max-w-lg">Showcasing my best work and technical expertise across frontend, backend, and full-stack development</p>
          <motion.div
            className="w-20 h-1 bg-gradient-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-12 justify-center"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${filter === category.id
                ? "bg-gradient-primary text-white shadow-glow"
                : "glass-card text-light-text dark:text-dark-text hover:border-primary/50"
              }`}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                features={project.features}
                delay={idx * 0.05}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Call to Action */}
      <ScrollReveal direction="up" delay={0.4} className="mt-16 text-center">
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">
            Interested in collaborating?
          </h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
            I'm always open to interesting projects and freelance opportunities. Let's create
            something amazing together.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-glow transition-all"
          >
            Get In Touch
          </motion.a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Portfolio;

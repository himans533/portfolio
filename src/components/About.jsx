import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiTrendingUp } from "react-icons/fi";
import ScrollReveal from "./ui/ScrollReveal";
import GlassmorphicCard from "./ui/GlassmorphicCard";

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: "Product-Focused Developer",
      description:
        "Building scalable and maintainable applications used in real business environments.",
    },
    {
      icon: FiLayers,
      title: "Full Stack Expertise",
      description:
        "Experienced in designing complete systems from responsive UI to secure backend APIs.",
    },
    {
      icon: FiTrendingUp,
      title: "Growth Mindset",
      description:
        "Continuously improving skills, exploring new technologies, and adopting best practices.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section name="about" className="section-container relative">
      {/* Section Header */}
      <ScrollReveal className="mb-12 md:mb-16">
        <div className="space-y-3">
          <h2 className="heading-premium bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full" />
        </div>
      </ScrollReveal>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Text Content */}
        <div className="lg:col-span-2 space-y-6">
          <ScrollReveal direction="left" distance={50}>
            <p className="subheading">
              I am a Full Stack Developer currently working in a professional
              software environment, building scalable web applications and
              solving real-world business problems through technology.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" distance={50} delay={0.2}>
            <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              My expertise spans backend development with Java & Spring Boot,
              RESTful APIs, and database design, along with modern frontend
              development using React.js. I focus on writing clean, secure,
              and maintainable code that supports long-term product growth.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" distance={50} delay={0.4}>
            <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              I enjoy transforming complex requirements into efficient,
              user-friendly solutions. Beyond development, I actively explore
              modern architectures, performance optimization, and best
              engineering practices to continuously improve the systems I build.
            </p>
          </ScrollReveal>
        </div>

        {/* Quick Facts Card */}
        <ScrollReveal direction="right" distance={50}>
          <GlassmorphicCard className="p-6 h-fit sticky top-32">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-6">
              Professional Snapshot
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1+</span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Years of Professional Experience
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">Full Stack</span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Development (Frontend + Backend)
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">Java</span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Spring Boot & REST API Development
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">React</span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  Modern UI & Responsive Design
                </span>
              </li>
            </ul>
          </GlassmorphicCard>
        </ScrollReveal>
      </div>

      {/* Highlights */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {highlights.map((highlight, idx) => {
          const { icon: Icon } = highlight;
          return (
            <motion.div key={idx} variants={itemVariants}>
              <GlassmorphicCard className="p-6 h-full text-center">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="flex justify-center mb-4"
                >
                  <Icon className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="font-bold text-light-text dark:text-dark-text mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {highlight.description}
                </p>
              </GlassmorphicCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default About;
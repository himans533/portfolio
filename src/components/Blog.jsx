
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import ScrollReveal from "./ui/ScrollReveal";
import GlassmorphicCard from "./ui/GlassmorphicCard";
import TechBadge from "./ui/TechBadge";

const posts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    slug: "react-hooks-guide",
    excerpt:
      "Master React Hooks and learn how to write cleaner, more reusable component logic in your React applications.",
    description:
      "In this comprehensive guide, we'll explore React Hooks in depth. You'll learn about useState, useEffect, custom hooks, and best practices for managing state and side effects in functional components.",
    date: "Dec 20, 2024",
    datetime: "2024-12-20",
    readTime: 8,
    category: { title: "React", href: "#" },
    author: {
      name: "You",
      role: "Full Stack Developer",
      href: "#",
      imageUrl:
        "./assets/myphoto.jpeg",
    },
  },
  {
    id: 2,
    title: "Tailwind CSS Tips and Tricks",
    slug: "tailwind-tips",
    excerpt:
      "Discover advanced Tailwind CSS techniques to build modern, responsive interfaces faster and more efficiently.",
    description:
      "Learn advanced Tailwind CSS features including custom configurations, plugins, responsive design patterns, and performance optimization techniques.",
    date: "Dec 18, 2024",
    datetime: "2024-12-18",
    readTime: 6,
    category: { title: "CSS", href: "#" },
    author: {
      name: "You",
      role: "Full Stack Developer",
      href: "#",
      imageUrl:
        "./assets/myphoto.jpeg",
    },
  },
  {
    id: 3,
    title: "Building Full Stack Apps with Node.js",
    slug: "nodejs-fullstack",
    excerpt:
      "Learn how to build scalable full-stack applications using Node.js, Express, and modern database technologies.",
    description:
      "A deep dive into building production-ready full-stack applications. We'll cover backend architecture, database design, authentication, and deployment strategies.",
    date: "Dec 15, 2024",
    datetime: "2024-12-15",
    readTime: 10,
    category: { title: "Backend", href: "#" },
    author: {
      name: "You",
      role: "Full Stack Developer",
      href: "#",
      imageUrl:
        "./assets/myphoto.jpeg",
    },
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(posts.map((p) => p.category.title))];

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((p) => p.category.title === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section name="blog" className="section-container relative">
      {/* Section Header */}
      <ScrollReveal className="mb-12 md:mb-16">
        <div className="space-y-3">
          <h2 className="heading-premium bg-gradient-primary bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="subheading">
            Insights on web development, best practices, and tech trends
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full" />
        </div>
      </ScrollReveal>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-12 justify-center"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${selectedCategory === category
              ? "bg-gradient-primary text-white shadow-glow"
              : "glass-card text-light-text dark:text-dark-text hover:border-primary/50"
              }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredPosts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <GlassmorphicCard className="p-6 h-full flex flex-col">
              {/* Category Badge */}
              <div className="mb-4">
                <TechBadge variant="accent">{post.category.title}</TechBadge>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3 line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4 flex-grow line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-4 text-xs text-light-text-secondary dark:text-dark-text-secondary">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {post.readTime} min read
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-light-text dark:text-dark-text">
                      {post.author.name}
                    </p>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {/* Read More Link */}
                <motion.a
                  href={`/blog/${post.slug}`}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm mt-4"
                >
                  Read Article
                  <FiArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </GlassmorphicCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <ScrollReveal className="text-center py-12">
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg">
            No articles found in this category.
          </p>
        </ScrollReveal>
      )}

      {/* Call to Action */}
      <ScrollReveal direction="up" delay={0.4} className="mt-16 text-center">
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">
            Interested in my writing?
          </h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
            Subscribe to my newsletter to get notified about new articles, tips, and exclusive
            content.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-glow transition-all"
          >
            Subscribe Now
          </motion.a>
        </div>
      </ScrollReveal>
    </section>
  );
}



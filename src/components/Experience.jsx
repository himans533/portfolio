import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiTool,
  FiExternalLink,
} from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiSpring,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "React", icon: SiReact, level: "Expert", link: "https://react.dev/" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", link: "https://tailwindcss.com/docs" },
      { name: "HTML5", icon: SiHtml5, level: "Expert", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: SiCss3, level: "Expert", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs, level: "Advanced", link: "https://nodejs.org/en/docs" },
      { name: "Java", icon: FaJava, level: "Advanced", link: "https://docs.oracle.com/en/java/" },
      { name: "Spring Boot", icon: SiSpring, level: "Intermediate", link: "https://docs.spring.io/spring-boot/index.html" },
    ],
    database: [
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", link: "https://www.mongodb.com/docs/" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced", link: "https://www.postgresql.org/docs/" },
    ],
    devops: [
      { name: "Docker", icon: SiDocker, level: "Intermediate", link: "https://docs.docker.com/" },
      { name: "Git", icon: SiGit, level: "Expert", link: "https://git-scm.com/docs" },
    ],
  };

  const categories = [
    { id: "frontend", label: "Frontend", icon: FiCode },
    { id: "backend", label: "Backend", icon: FiDatabase },
    { id: "database", label: "Database", icon: FiDatabase },
    { id: "devops", label: "DevOps", icon: FiTool },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Technologies I use to build scalable & production-ready applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${active
                    ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:scale-105"
                  }`}
              >
                <Icon />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData[activeCategory].map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.a
                key={i}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-teal-500/40 to-emerald-600/30"
              >
                <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 text-center backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg transition-all">

                  <FiExternalLink className="absolute top-4 right-4 text-gray-400 opacity-0 group-hover:opacity-100" />

                  <motion.div
                    whileHover={{ rotate: 6 }}
                    className="inline-flex p-4 rounded-xl bg-teal-500/10 mb-4"
                  >
                    <Icon className="text-3xl text-teal-500" />
                  </motion.div>

                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>

                  <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-300 font-semibold">
                    {skill.level}
                  </span>

                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer card */}
        <div className="mt-24 text-center max-w-2xl mx-auto p-10 rounded-3xl
        bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/10
        border border-gray-200 dark:border-white/10 shadow-xl backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
            Always Learning 🚀
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            I constantly explore modern technologies like Cloud, Microservices,
            and System Design to stay ahead in the industry.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
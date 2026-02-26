import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";
import pic from "../assets/myphoto.jpeg";
import ThemeToggle from "./ui/ThemeToggle";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "portfolio", label: "Projects" },
    { id: 4, link: "experience", label: "Skills" },
    { id: 5, link: "blog", label: "Blog" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  /* ===== Scroll Progress + Hide Navbar ===== */
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // progress bar
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((currentScroll / totalHeight) * 100);

      // hide/show navbar
      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Animation Variants ===== */
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <motion.nav
        variants={navVariants}
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.35 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl
        bg-white/10 dark:bg-black/30 border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        mx-3 md:mx-6 mt-3 rounded-2xl"
      >
        {/* Scroll Progress */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-teal-400 to-emerald-500"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
          {/* ===== Logo ===== */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-100 bg-gradient-to-r from-teal-400 to-emerald-500 transition" />
              <img
                src={pic}
                alt="profile"
                className="h-11 w-11 rounded-full border-2 border-primary object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-gradient">Himanshu Hanwat</h1>
              <p className="text-xs opacity-70">Full-Stack Developer</p>
            </div>
          </div>

          {/* ===== Desktop Links ===== */}
          <ul className="hidden lg:flex items-center gap-2">
            {links.map(({ id, link, label }) => (
              <li key={id} className="relative">
                <Link
                  to={link}
                  smooth
                  duration={500}
                  spy={true}
                  onSetActive={() => setActiveLink(link)}
                  className="px-4 py-2 text-sm font-semibold cursor-pointer relative group"
                >
                  {activeLink === link && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/10 to-emerald-500/10"
                    />
                  )}
                  <span className="relative z-10 group-hover:text-primary">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* ===== Right Section ===== */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold
              bg-gradient-to-r from-teal-500 to-emerald-600 text-white
              shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition"
            >
              Hire Me
            </a>

            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-xl"
              onClick={() => setNav(!nav)}
            >
              {nav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ===== Mobile Overlay ===== */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
              onClick={() => setNav(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-24 left-4 right-4 z-50
              backdrop-blur-2xl bg-white/10 dark:bg-black/30
              border border-white/10 rounded-2xl shadow-2xl"
            >
              <ul className="flex flex-col divide-y divide-white/10">
                {links.map(({ id, link, label }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      smooth
                      duration={500}
                      onClick={() => setNav(false)}
                      className="flex justify-between items-center px-6 py-4 text-sm font-semibold hover:bg-white/5"
                    >
                      {label}
                      <FiArrowRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-24"></div>
    </>
  );
};

export default NavBar;
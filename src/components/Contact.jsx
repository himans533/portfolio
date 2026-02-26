import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCheckCircle,
} from "react-icons/fi";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success("Message sent successfully 🚀");
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  /* ✅ CONTACT LINKS */
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "himanshuhanwat104@gmail.com",
      href: "mailto:himanshuhanwat104@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 9479662172",
      href: "tel:+919479662172",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Bhopal, Madhya Pradesh",
      href: "https://maps.google.com/?q=Bhopal,Madhya+Pradesh",
    },
  ];

  /* ✅ ADD YOUR REAL LINKS HERE */
  const socials = [
    {
      icon: FiGithub,
      url: "https://github.com/YOUR_USERNAME",
    },
    {
      icon: FiLinkedin,
      url: "https://linkedin.com/in/YOUR_USERNAME",
    },
    {
      icon: FiTwitter,
      url: "https://twitter.com/YOUR_USERNAME",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">

      {/* glow background */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
            Let’s Build Something Great
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            I’m open to opportunities, collaborations & exciting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* CONTACT CARDS */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 p-6 rounded-2xl
                  bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10
                  shadow-md hover:shadow-xl transition cursor-pointer"
                >
                  <div className="p-4 rounded-xl bg-teal-500/10">
                    <Icon className="text-teal-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {item.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10
                    text-gray-600 dark:text-gray-300 hover:text-teal-500 shadow-md hover:shadow-lg
                    cursor-pointer transition"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="p-10 rounded-3xl
            bg-gradient-to-br from-white to-gray-50
            dark:from-white/5 dark:to-white/10
            border border-gray-200 dark:border-white/10
            backdrop-blur-xl shadow-xl space-y-6"
          >

            {["name", "email", "subject"].map((field, i) => (
              <input
                key={i}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/10
                bg-transparent text-gray-800 dark:text-white focus:border-teal-500 focus:outline-none transition"
              />
            ))}

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/10
              bg-transparent text-gray-800 dark:text-white focus:border-teal-500 focus:outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600
              text-white font-semibold shadow-lg hover:shadow-emerald-500/30 transition flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : success ? <><FiCheckCircle /> Sent</> : <><FiSend /> Send Message</>}
            </motion.button>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
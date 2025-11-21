'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Zap,
  ArrowRight,
  Sparkles,
  Laptop,
  Smartphone,
  Globe
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      gradient: "from-purple-500 to-pink-500",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "AI Content Generator",
      description: "Smart content creation tool powered by machine learning with intuitive UI",
      tech: ["React", "Python", "OpenAI", "TailwindCSS"],
      gradient: "from-blue-500 to-cyan-500",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with personalized workout plans",
      tech: ["React Native", "Node.js", "MongoDB", "Redux"],
      gradient: "from-green-500 to-emerald-500",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and reporting",
      tech: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
      gradient: "from-orange-500 to-red-500",
      icon: <Laptop className="w-6 h-6" />
    }
  ];

  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"], icon: <Code2 /> },
    { name: "Design", items: ["UI/UX", "Figma", "Adobe XD", "Prototyping"], icon: <Palette /> },
    { name: "Performance", items: ["Optimization", "SEO", "Analytics", "Testing"], icon: <Zap /> }
  ];

  return (
    <main className="relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>
          <div className="flex gap-6">
            {['Work', 'Skills', 'About', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 glow mx-auto flex items-center justify-center">
                <span className="text-5xl">👋</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-gradient">Creative</span>
              <br />
              Developer
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Crafting beautiful, performant web experiences with cutting-edge technology
              and pixel-perfect design
            </motion.p>

            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 glass rounded-full font-semibold hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: <Github />, href: "#" },
                { icon: <Linkedin />, href: "#" },
                { icon: <Mail />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-400">
              Selected works that showcase my expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 glow`}>
                    {project.icon}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    {project.title}
                    <ExternalLink
                      className={`w-6 h-6 transition-transform ${hoveredProject === i ? 'translate-x-1 -translate-y-1' : ''}`}
                    />
                  </h3>

                  <p className="text-gray-400 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 glass rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-6">
              Skills & <span className="text-gradient-2">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass rounded-3xl p-10 hover:scale-105 transition-transform text-center"
              >
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-6">{skill.name}</h3>

                <div className="space-y-3">
                  {skill.items.map((item, j) => (
                    <motion.div
                      key={j}
                      className="py-3 px-6 glass rounded-xl"
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-bold mb-8">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  I'm a passionate full-stack developer and designer with 5+ years of experience
                  creating exceptional digital experiences. I specialize in building modern,
                  scalable web applications that users love.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving,
                  ensuring every project not only looks beautiful but performs flawlessly.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing
                  to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-12"
            >
              <div className="space-y-8">
                {[
                  { label: "Years Experience", value: "5+" },
                  { label: "Projects Completed", value: "50+" },
                  { label: "Happy Clients", value: "30+" },
                  { label: "Code Commits", value: "10k+" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-4xl font-bold text-gradient">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold mb-6">
              Let's <span className="text-gradient-2">Connect</span>
            </h2>
            <p className="text-xl text-gray-400">
              Have a project in mind? Let's make it happen
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-6 py-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              />
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg glow hover:scale-105 transition-transform"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Portfolio. Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}

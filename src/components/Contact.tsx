"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, Send, CheckCircle } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/aryan-tripathi-9254a611b", color: "from-blue-500 to-cyan-500" },
  { name: "GitHub", icon: Github, href: "https://github.com/aryan3002", color: "from-zinc-400 to-zinc-600" },
  { name: "Email", icon: Mail, href: "mailto:triaryan3002@gmail.com", color: "from-rose-500 to-pink-500" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient Orb - reduced opacity */}
      <motion.div
        animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none"
      />

      <div className="container relative z-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Connect
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8">
            Let&apos;s Build the Future
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            If you&apos;re building something ambitious — let&apos;s talk.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.05 }}
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.05 }}
              className="card text-center group hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <link.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1 text-lg flex items-center justify-center gap-2">
                {link.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-zinc-900/50 text-white rounded-xl px-4 py-3 border border-zinc-800 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-zinc-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-zinc-900/50 text-white rounded-xl px-4 py-3 border border-zinc-800 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-zinc-600"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full bg-zinc-900/50 text-white rounded-xl px-4 py-3 border border-zinc-800 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all placeholder:text-zinc-600 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary py-4 flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

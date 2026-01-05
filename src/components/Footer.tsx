"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "https://github.com/aryan-tripathi", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aryantripathi", label: "LinkedIn" },
  { icon: Mail, href: "mailto:atripath@asu.edu", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">AT</span>
            <span className="text-zinc-500 text-sm">© 2025</span>
          </div>

          {/* Tagline */}
          <p className="text-zinc-500 text-sm text-center">
            Designed & built with precision — crafting AI experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-zinc-500 hover:text-white text-sm transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

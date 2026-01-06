"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: shouldReduceMotion ? 0 : -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.04]" 
            : ""
        }`}
        style={{ height: '72px' }}
      >
        <div className="w-full px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.span 
                className="text-xl font-semibold"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15, ease: [0.2, 0.9, 0.3, 1] }}
              >
                <span className="gradient-text-accent">AT</span>
              </motion.span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1.5">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.2, 0.9, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="relative px-5 py-2.5 text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/[0.04] group"
                  >
                    {item.name}
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-200 group-hover:w-4" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
              >
                <Link
                  href="#contact"
                  className="ml-6 px-7 py-2.5 text-sm font-semibold bg-white text-black rounded-full 
                           transition-all duration-200 ease-[cubic-bezier(0.2,0.9,0.3,1)]
                           hover:bg-zinc-100 hover:shadow-lg hover:shadow-white/10
                           active:scale-[0.98]"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/[0.04] transition-colors duration-150"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.2, 0.9, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.2, 0.9, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl text-zinc-400 hover:text-white py-2 transition-colors duration-150"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ease: [0.2, 0.9, 0.3, 1] }}
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 btn-primary text-center block"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles, FileText } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Single Radial Gradient Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-950/20 via-black to-black" />
      </div>

      {/* Main Content */}
      <motion.div
        style={shouldReduceMotion ? {} : { y, opacity }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-6 text-center" style={{ maxWidth: '1100px' }}>
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-zinc-400">Open to opportunities</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="font-bold leading-[0.95] tracking-tight mb-8 mx-auto"
          style={{
            fontSize: 'clamp(48px, 6.5vw, 88px)',
            maxWidth: '900px'
          }}
        >
          <span className="gradient-text block">I build AI systems</span>
          <span className="gradient-text block">that don&apos;t feel like</span>
          <span className="relative inline-block">
            <span className="gradient-text-accent">software</span>
            <motion.span
              animate={{ opacity: shouldReduceMotion ? 1 : [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -right-6 top-0 text-indigo-500"
            >
              _
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-light text-zinc-400 mb-4">
            Aryan Tripathi
          </h2>
          <div className="flex items-center justify-center gap-3 text-lg text-zinc-500">
            <span className="text-zinc-300">AI Engineer</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-300">Full-Stack Builder</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-300">Systems Thinker</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Explore My Work
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </motion.a>
        </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.45 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

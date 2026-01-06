"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles, FileText } from "lucide-react";
import AmbientLight from "./AmbientLight";
import CurvedLoop from "./CurvedLoop";
import LiquidEther from "./LiquidEther";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep black base with subtle radial gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900/30 via-black to-black" />
      </div>

      {/* Ambient Light Spheres - Spatial Depth with floating animation */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [0, -20, 0],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <AmbientLight 
          position={{ x: 65, y: 25 }} 
          color="99, 102, 241" 
          size={900} 
          intensity={0.12}
          duration={20}
        />
      </motion.div>
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [0, 15, 0],
          x: [0, -10, 0],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <AmbientLight 
          position={{ x: 30, y: 70 }} 
          color="139, 92, 246" 
          size={700} 
          intensity={0.08}
          duration={25}
        />
      </motion.div>

      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Liquid Ether Background Effect - Full Screen */}
      <div className="fixed inset-0" style={{ zIndex: 1 }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: '100vw', height: '100vh' }}
        />
      </div>


      {/* Main Content */}
      <motion.div
        style={shouldReduceMotion ? {} : { y, opacity, scale }}
        className="relative z-10 w-full max-w-none pointer-events-none"
      >
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 text-center pointer-events-auto">
          <div className="max-w-[1000px] mx-auto">
        {/* Curved Loop Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.9, 0.3, 1] }}
          className="mb-16 -mx-6"
        >
          <CurvedLoop 
            marqueeText="OPEN TO WORK ✦ " 
            speed={1.5}
            curveAmount={300}
            className="fill-transparent stroke-indigo-400/40"
          />
        </motion.div>

         

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.9, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-sm text-zinc-400 font-medium">Open to opportunities</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.9, 0.3, 1] }}
          className="font-bold leading-[0.92] tracking-[-0.03em] mb-8 mx-auto"
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
              transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -right-6 top-0 text-indigo-400"
            >
              _
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.2, 0.9, 0.3, 1] }}
          className="mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-light text-zinc-400 mb-4 tracking-[-0.01em]">
            Aryan Tripathi
          </h2>
          <div className="flex items-center justify-center gap-3 text-lg text-zinc-500">
            <span className="text-zinc-300 font-medium">AI Engineer</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-300 font-medium">Full-Stack Builder</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-300 font-medium">Systems Thinker</span>
          </div>
        </motion.div>

        {/* CTA Buttons - Refined with micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#projects"
            className="btn-primary flex items-center gap-2.5 group"
          >
            <Sparkles className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            Explore My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="btn-secondary flex items-center gap-2.5 group"
          >
            <FileText className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
            View Resume
          </a>
        </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2.5 text-zinc-500"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

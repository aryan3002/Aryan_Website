"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Brain, Code2, Cpu, Layers } from "lucide-react";

const philosophyPoints = [
  {
    icon: Brain,
    title: "AI-First Thinking",
    description: "Every solution starts with understanding how intelligence can enhance the experience.",
  },
  {
    icon: Code2,
    title: "Full-Stack Execution",
    description: "From system design to pixel-perfect UI, I build products end-to-end.",
  },
  {
    icon: Cpu,
    title: "Systems Architecture",
    description: "Distributed systems, real-time processing, and scalable infrastructure.",
  },
  {
    icon: Layers,
    title: "Product Vision",
    description: "Technology serves the user. Every feature must earn its place.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 lg:py-40 overflow-hidden w-full"
    >
      {/* Edge-to-edge gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10 w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8 tracking-[-0.02em]">
            Building the Future of Human-Machine Interaction
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Not just building software. Engineering the future of human–machine interaction.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.9, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-xl text-zinc-300 leading-relaxed">
              I&apos;m a senior Computer Science student at Arizona State University, 
              pursuing a 4+1 accelerated Master&apos;s in AI. My work sits at the intersection 
              of <span className="text-white font-medium">large language models</span>, 
              <span className="text-white font-medium"> distributed systems</span>, and 
              <span className="text-white font-medium"> product engineering</span>.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              I believe the best AI systems are invisible — they enhance human capability 
              without demanding attention. Every project I build reflects this philosophy: 
              powerful technology, seamless experience.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800/50">
              <div>
                <p className="text-4xl font-bold gradient-text-accent tracking-[-0.02em]">3.8</p>
                <p className="text-sm text-zinc-500 mt-1">GPA</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text-accent tracking-[-0.02em]">15+</p>
                <p className="text-sm text-zinc-500 mt-1">Projects Built</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Philosophy Cards */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.9, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.06, ease: [0.2, 0.9, 0.3, 1] }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] cursor-pointer
                           transition-all duration-200 ease-[cubic-bezier(0.2,0.9,0.3,1)]
                           hover:bg-white/[0.04] hover:border-indigo-400/25 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center mb-5 
                               transition-transform duration-200 ease-[cubic-bezier(0.2,0.9,0.3,1)]
                               group-hover:scale-105">
                  <point.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-white mb-2 tracking-[-0.01em]">{point.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
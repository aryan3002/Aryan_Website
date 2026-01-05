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
    <section id="about" ref={ref} className="relative py-40 lg:py-52 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8">
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
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-xl text-zinc-300 leading-relaxed">
              I&apos;m a senior Computer Science student at Arizona State University, 
              pursuing a 4+1 accelerated Master&apos;s in AI. My work sits at the intersection 
              of <span className="text-white">large language models</span>, 
              <span className="text-white"> distributed systems</span>, and 
              <span className="text-white"> product engineering</span>.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              I believe the best AI systems are invisible — they enhance human capability 
              without demanding attention. Every project I build reflects this philosophy: 
              powerful technology, seamless experience.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
              <div>
                <p className="text-4xl font-bold gradient-text-accent">3.8</p>
                <p className="text-sm text-zinc-500 mt-1">GPA</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text-accent">15+</p>
                <p className="text-sm text-zinc-500 mt-1">Projects Built</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Philosophy Cards */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.05 }}
                whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.02 }}
                className="card cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <point.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-zinc-500">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Building2, Calendar, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "AI Engineering Intern",
    company: "CRIBLIV",
    type: "AI Real Estate Startup",
    period: "Summer 2024",
    description: [
      "Built production-grade frontend systems with React/Next.js",
      "Implemented authentication workflows and user management",
      "Integrated AI chatbot for real estate inquiries",
      "Delivered pixel-perfect UI/UX from Figma designs",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "OpenAI"],
  },
  {
    role: "Undergraduate Researcher",
    company: "ASU AI Lab",
    type: "Academic Research",
    period: "2023 – Present",
    description: [
      "Researching conversational AI and multi-agent systems",
      "Developing novel prompt engineering methodologies",
      "Building RAG pipelines for academic applications",
    ],
    tech: ["Python", "LangChain", "PyTorch", "Hugging Face"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 lg:py-40 overflow-hidden w-full"
    >
      {/* Edge-to-edge gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/5 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 w-full max-w-none px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8">
            In the Real World
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Building production systems at scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 w-full max-w-[1200px]">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ x: 8, scale: 1.01 }}
              className="glass rounded-2xl p-10 lg:p-12 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-zinc-400">{exp.company} <span className="text-zinc-600">· {exp.type}</span></p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-400">
                        <ArrowUpRight className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Period */}
                <div className="flex items-center gap-2 text-zinc-500 lg:text-right">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  context: string;
}

interface Category {
  title: string;
  color: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Languages",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95, context: "Primary for AI/ML systems" },
      { name: "TypeScript", level: 90, context: "Full-stack development" },
      { name: "JavaScript", level: 90, context: "Frontend & Node.js" },
      { name: "Java", level: 80, context: "Enterprise systems" },
      { name: "SQL", level: 85, context: "Database design" },
      { name: "Swift", level: 75, context: "iOS development" },
    ],
  },
  {
    title: "AI / ML",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "LangChain", level: 95, context: "RAG & agent pipelines" },
      { name: "OpenAI API", level: 95, context: "GPT-4, embeddings" },
      { name: "PyTorch", level: 85, context: "Deep learning" },
      { name: "Hugging Face", level: 85, context: "Transformers" },
      { name: "Vector DBs", level: 90, context: "Pinecone, Chroma" },
      { name: "Prompt Engineering", level: 95, context: "LLM optimization" },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90, context: "Server applications" },
      { name: "FastAPI", level: 90, context: "Python APIs" },
      { name: "PostgreSQL", level: 85, context: "Relational DBs" },
      { name: "MongoDB", level: 85, context: "Document storage" },
      { name: "Redis", level: 80, context: "Caching" },
      { name: "GraphQL", level: 80, context: "API design" },
    ],
  },
  {
    title: "Cloud",
    color: "from-orange-500 to-yellow-500",
    skills: [
      { name: "AWS", level: 85, context: "EC2, Lambda, S3" },
      { name: "GCP", level: 80, context: "Cloud Run, Vertex AI" },
      { name: "Docker", level: 90, context: "Containerization" },
      { name: "Vercel", level: 90, context: "Edge deployment" },
      { name: "CI/CD", level: 85, context: "GitHub Actions" },
    ],
  },
  {
    title: "Frontend",
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "React", level: 95, context: "Component UI" },
      { name: "Next.js", level: 90, context: "Full-stack React" },
      { name: "React Native", level: 80, context: "Mobile apps" },
      { name: "Tailwind", level: 95, context: "Utility CSS" },
      { name: "Framer Motion", level: 85, context: "Animations" },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 lg:py-40 overflow-hidden w-full"
    >
      {/* Edge-to-edge background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/5 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10 w-full max-w-none px-6 sm:px-8 lg:px-16 xl:px-24 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8 tracking-[-0.02em]">
            Technology Stack
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A refined toolkit for building intelligent, scalable systems.
          </p>
        </motion.div>

        {/* Category Tabs - Refined */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.9, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat, index) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ease-[cubic-bezier(0.2,0.9,0.3,1)] relative z-10 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/[0.03] border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.1]"
              }`}
              style={{ cursor: 'pointer' }}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration: 0.25, ease: [0.2, 0.9, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
          >
            {categories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: index * 0.03, ease: [0.2, 0.9, 0.3, 1] }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative group"
              >
                <div
                  className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center cursor-pointer
                    transition-all duration-200 ease-[cubic-bezier(0.2,0.9,0.3,1)]
                    hover:bg-white/[0.04] hover:border-indigo-400/25 hover:-translate-y-1
                    ${hoveredSkill === skill.name ? "border-indigo-400/30" : ""}`}
                >
                  <h4 className="font-semibold text-white mb-2.5 tracking-[-0.01em]">{skill.name}</h4>
                  
                  {/* Progress Bar */}
                  <div className="h-1 bg-zinc-800/80 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.7, delay: 0.1 + index * 0.03, ease: [0.2, 0.9, 0.3, 1] }}
                      className={`h-full bg-gradient-to-r ${categories[activeCategory].color} rounded-full`}
                    />
                  </div>
                  
                  <p className="text-xs text-zinc-500">{skill.context}</p>
                  
                  {/* Subtle glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${categories[activeCategory].color} 
                      opacity-0 group-hover:opacity-[0.03] transition-opacity duration-200 pointer-events-none`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

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
    <section id="skills" ref={ref} className="relative py-40 lg:py-52 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8">
            Technology Stack
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A refined toolkit for building intelligent, scalable systems.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat.title}
              onClick={() => setActiveCategory(index)}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className={`px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30"
                  : "glass text-zinc-400 hover:text-white hover:border-indigo-500/30"
              }`}
            >
              {cat.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {categories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.05 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative group"
              >
                <div
                  className={`card text-center cursor-pointer
                    ${hoveredSkill === skill.name ? "border-indigo-500/40" : ""}`}
                >
                  <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                  
                  {/* Progress Bar */}
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.03 }}
                      className={`h-full bg-gradient-to-r ${categories[activeCategory].color} rounded-full`}
                    />
                  </div>
                  
                  <p className="text-xs text-zinc-500">{skill.context}</p>
                  
                  {/* Glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${categories[activeCategory].color} 
                      opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
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

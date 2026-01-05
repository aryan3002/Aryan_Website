"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  MessageSquare,
  Mic,
  Users,
  Calendar,
  BarChart3,
  Lock,
  FileText,
  Database,
  Zap,
  Smartphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ConvoArchitecture from "@/components/ConvoArchitecture";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: { icon: React.ElementType; title: string; description: string }[];
  tech: string[];
  color: string;
  demoUrl?: string;
  githubUrl?: string;
  isHero?: boolean;
}

const projects: Project[] = [
  {
    id: "convo",
    title: "Convo",
    tagline: "What if businesses didn't need websites — only conversations?",
    description:
      "An agentic SaaS platform replacing traditional business websites with intelligent AI conversations. Features GPT-4 powered chat, voice AI via Twilio, and real-time scheduling.",
    features: [
      { icon: MessageSquare, title: "Consumer GPT", description: "Natural language booking & inquiries" },
      { icon: Mic, title: "Voice Agent", description: "Twilio-powered phone interactions" },
      { icon: Users, title: "Owner GPT", description: "Business intelligence dashboard" },
      { icon: Calendar, title: "Atomic Locking", description: "Real-time slot management" },
      { icon: BarChart3, title: "Analytics", description: "LLM performance dashboards" },
      { icon: Lock, title: "Enterprise Security", description: "SOC2-compliant handling" },
    ],
    tech: ["Next.js", "GPT-4", "LangChain", "Twilio", "PostgreSQL", "Redis"],
    color: "from-indigo-500 to-purple-500",
    demoUrl: "#",
    githubUrl: "#",
    isHero: true,
  },
  {
    id: "pdf-sql",
    title: "PDF-to-SQL Extractor",
    tagline: "Transform documents into queryable intelligence",
    description:
      "NLP pipeline extracting structured data from PDFs, enabling natural language SQL queries over unstructured information.",
    features: [
      { icon: FileText, title: "Document Parsing", description: "Multi-format with OCR" },
      { icon: Database, title: "Schema Generation", description: "Auto SQL schema creation" },
      { icon: Zap, title: "Real-time Queries", description: "NL to SQL translation" },
    ],
    tech: ["Python", "LangChain", "GPT-4", "PostgreSQL", "FastAPI"],
    color: "from-emerald-500 to-cyan-500",
    githubUrl: "#",
  },
  {
    id: "compliance-rag",
    title: "Finance RAG Chatbot",
    tagline: "AI-powered regulatory compliance",
    description:
      "Retrieval-augmented generation chatbot specialized in financial compliance with full audit trail.",
    features: [
      { icon: Database, title: "Vector KB", description: "Semantic document search" },
      { icon: MessageSquare, title: "Citations", description: "Source attribution" },
      { icon: Lock, title: "Audit Trail", description: "Complete logging" },
    ],
    tech: ["Python", "Pinecone", "OpenAI", "FastAPI", "React"],
    color: "from-amber-500 to-orange-500",
    githubUrl: "#",
  },
  {
    id: "rental",
    title: "P2P Equipment Rental",
    tagline: "The Airbnb for professional equipment",
    description:
      "Native iOS app enabling peer-to-peer equipment rentals with real-time availability and secure payments.",
    features: [
      { icon: Smartphone, title: "Native iOS", description: "SwiftUI performance" },
      { icon: Users, title: "P2P Marketplace", description: "Direct connections" },
      { icon: Lock, title: "Secure Payments", description: "Stripe escrow" },
    ],
    tech: ["Swift", "SwiftUI", "Firebase", "Stripe", "MapKit"],
    color: "from-pink-500 to-rose-500",
    githubUrl: "#",
  },
];

function HeroProject({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative mb-24"
    >
      {/* Glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 blur-3xl rounded-3xl`} />

      <div className="relative glass rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="p-10 lg:p-16 text-center border-b border-zinc-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-zinc-400 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Featured Project
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              {project.title}
            </h3>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto">
              &ldquo;{project.tagline}&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Description + Diagram */}
        <div className="p-10 lg:p-16 border-b border-zinc-800/50">
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto text-center mb-12"
          >
            {project.description}
          </motion.p>
          
          {project.id === "convo" && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <ConvoArchitecture />
            </motion.div>
          )}
        </div>

        {/* Features */}
        <div className="p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-xl p-5 group hover:border-indigo-500/30 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-zinc-500">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech + Links */}
        <div className="p-10 lg:p-16 bg-zinc-900/50 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                whileHover={{ scale: 1.05 }}
                className="btn-primary flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                whileHover={{ scale: 1.05 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Source
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
      className="group"
    >
      <div
        className={`card cursor-pointer overflow-hidden
          ${expanded ? "border-indigo-500/40" : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="p-8 lg:p-10">
          <div className="flex items-start justify-between mb-6">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center transition-transform ${shouldReduceMotion ? "" : "group-hover:scale-110 group-hover:rotate-3"}`}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{project.tagline}</p>

          <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
            <span>{expanded ? "Collapse" : "Learn more"}</span>
            <motion.div animate={{ rotate: expanded ? 90 : 0 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-zinc-800/50 overflow-hidden"
            >
              <div className="p-6 lg:p-8 space-y-4">
                <p className="text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const heroProject = projects.find((p) => p.isHero);
  const otherProjects = projects.filter((p) => !p.isHero);

  return (
    <section id="projects" ref={ref} className="relative py-40 lg:py-52 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8">
            Built Different
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Each project is a product. Engineered with precision, designed with intent.
          </p>
        </motion.div>

        {/* Hero Project */}
        <div className="flex justify-center mb-20">
          {heroProject && <HeroProject project={heroProject} />}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

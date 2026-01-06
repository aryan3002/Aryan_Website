"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
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
      {
        icon: MessageSquare,
        title: "Consumer GPT",
        description: "Natural language booking & inquiries",
      },
      {
        icon: Mic,
        title: "Voice Agent",
        description: "Twilio-powered phone interactions",
      },
      {
        icon: Users,
        title: "Owner GPT",
        description: "Business intelligence dashboard",
      },
      {
        icon: Calendar,
        title: "Atomic Locking",
        description: "Real-time slot management",
      },
      {
        icon: BarChart3,
        title: "Analytics",
        description: "LLM performance dashboards",
      },
      {
        icon: Lock,
        title: "Enterprise Security",
        description: "SOC2-compliant handling",
      },
    ],
    tech: ["Next.js", "GPT-4", "LangChain", "Twilio", "PostgreSQL", "Redis"],
    color: "from-indigo-500 to-purple-500",
    demoUrl: "https://convo-website-two.vercel.app/",
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
      {
        icon: FileText,
        title: "Document Parsing",
        description: "Multi-format with OCR",
      },
      {
        icon: Database,
        title: "Schema Generation",
        description: "Auto SQL schema creation",
      },
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
      transition={{ duration: 1, ease: [0.2, 0.9, 0.3, 1] }}
      // margin-bottom creates clear gap before the small project cards
      className="relative w-full max-w-6xl mx-auto mb-24"
    >
      {/* 🔥 removed the huge absolute blurred glow so it doesn't wash everything out */}

      {/* Featured card itself – still glassy, but less “giant pill in the middle” */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-black/40 to-black/80 shadow-2xl">
        {/* Header */}
        <div className="p-12 lg:p-16 text-center border-b border-white/[0.04]">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.9, 0.3, 1] }}
            className="space-y-6 flex flex-col items-center"
          >
            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] text-sm text-zinc-300 border border-white/[0.06] backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Featured Project
              </span>
              <span className="px-3 py-1.5 rounded-full bg-indigo-500/10 text-xs font-medium text-indigo-200 border border-indigo-400/20">
                Agentic SaaS
              </span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-xs font-medium text-emerald-200 border border-emerald-400/20">
                Voice + Chat
              </span>
              <span className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-xs font-medium text-cyan-200 border border-cyan-400/20">
                Live Scheduling
              </span>
            </div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.9, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em]"
              style={{
                textShadow:
                  "0 8px 32px rgba(99, 102, 241, 0.25), 0 2px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              {project.title}
            </motion.h3>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light tracking-[-0.01em]"
            >
              &ldquo;{project.tagline}&rdquo;
            </motion.p>
          </motion.div>
        </div>

        {/* Description + Architecture */}
        <div className="p-12 lg:p-16 border-b border-white/[0.04] flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.9, 0.3, 1] }}
            className="text-lg text-zinc-400 max-w-2xl text-center mb-14 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {project.id === "convo" && (
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.9, 0.3, 1] }}
            >
              <ConvoArchitecture />
            </motion.div>
          )}
        </div>

        {/* Features grid */}
        <div className="p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.08,
                  ease: [0.2, 0.9, 0.3, 1],
                }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] 
                           transition-all duration-200 hover:bg-white/[0.04]"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-r ${project.color} 
                                flex items-center justify-center mb-4 
                                transition-transform duration-200
                                group-hover:scale-105`}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1.5 tracking-[-0.01em]">
                  {feature.title}
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer – more breathing room around the buttons */}
        <div className="p-14 lg:p-18 bg-gradient-to-r from-white/[0.02] via-black/40 to-white/[0.03] border-t border-white/[0.04] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 text-xs font-medium bg-zinc-800/80 text-zinc-400 rounded-full border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-6 lg:mt-0">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2.5 px-5 py-3 group"
              >
                <Play className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="btn-secondary flex items-center gap-2.5 px-5 py-3 group"
              >
                <Github className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" />
                Source
              </a>
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
        <div className="p-10 lg:p-12">
          <div className="flex items-start justify-between mb-8">
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center transition-transform ${
                shouldReduceMotion
                  ? ""
                  : "group-hover:scale-110 group-hover:rotate-3"
              }`}
            >
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

          <h3 className="text-xl font-semibold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            {project.tagline}
          </p>

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
              <div className="p-8 lg:p-10 space-y-6">
                <p className="text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-full"
                    >
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

  const heroProject = projects.find((p) => p.isHero) ?? projects[0];
  const otherProjects = projects.filter((p) => !p.isHero);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen flex items-center py-32 lg:py-40 overflow-hidden w-full"
    >
      {/* Edge-to-edge gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
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
            Each project is a product. Engineered with precision, designed with
            intent.
          </p>
        </motion.div>

        {/* Featured project */}
        <HeroProject project={heroProject} />

        {/* Smaller project cards – now clearly separated by the mb-24 above */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[1600px] mx-auto">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

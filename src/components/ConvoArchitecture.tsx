"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, Mic, BarChart3, Phone, Calendar } from "lucide-react";

const nodes = [
  { id: "consumer", icon: MessageSquare, label: "Consumer GPT", x: 20, y: 30, color: "#6366f1" },
  { id: "voice", icon: Mic, label: "Voice Agent", x: 20, y: 70, color: "#8b5cf6" },
  { id: "core", icon: Phone, label: "Convo Core", x: 50, y: 50, color: "#a78bfa", main: true },
  { id: "booking", icon: Calendar, label: "Booking Engine", x: 80, y: 30, color: "#c4b5fd" },
  { id: "owner", icon: BarChart3, label: "Owner Dashboard", x: 80, y: 70, color: "#ddd6fe" },
];

const connections = [
  { from: "consumer", to: "core" },
  { from: "voice", to: "core" },
  { from: "core", to: "booking" },
  { from: "core", to: "owner" },
];

export default function ConvoArchitecture() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video bg-gradient-to-b from-zinc-900/60 to-zinc-900/40 rounded-2xl border border-white/[0.06] overflow-hidden p-6 md:p-10">
      {/* Subtle depth glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-purple-500/[0.03]" />
      
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((conn, i) => {
          const from = nodes.find((n) => n.id === conn.from)!;
          const to = nodes.find((n) => n.id === conn.to)!;
          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="url(#gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{ duration: 1.4, delay: 0.4 + i * 0.12, ease: [0.2, 0.9, 0.3, 1] }}
            />
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.2, 0.9, 0.3, 1] }}
          className={`absolute flex items-center gap-2.5 ${
            node.main 
              ? "bg-white/[0.06] backdrop-blur-sm p-3.5 rounded-xl border border-white/[0.1]" 
              : "bg-white/[0.03] backdrop-blur-sm p-2.5 rounded-lg border border-white/[0.06]"
          } transition-all duration-200 hover:border-indigo-400/30 hover:bg-white/[0.08]`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`${node.main ? "w-10 h-10" : "w-8 h-8"} rounded-lg flex items-center justify-center transition-transform duration-200`}
            style={{ backgroundColor: `${node.color}15` }}
          >
            <node.icon className={`${node.main ? "w-5 h-5" : "w-4 h-4"}`} style={{ color: node.color }} />
          </div>
          <span className={`text-white ${node.main ? "font-semibold text-sm" : "text-xs font-medium"} whitespace-nowrap`}>
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* Animated data pulse - refined */}
      <motion.div
        animate={shouldReduceMotion ? {} : { 
          x: ["-100%", "200%"], 
          opacity: [0, 0.8, 0.8, 0] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        className="absolute top-[40%] left-[25%] w-4 h-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-sm"
      />
    </div>
  );
}

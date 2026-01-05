"use client";

import { motion } from "framer-motion";
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
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden p-6 md:p-10">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

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
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className={`absolute flex items-center gap-2 ${
            node.main ? "glass-strong p-3 rounded-xl" : "glass p-2 rounded-lg"
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`${node.main ? "w-10 h-10" : "w-8 h-8"} rounded-lg flex items-center justify-center`}
            style={{ backgroundColor: `${node.color}20` }}
          >
            <node.icon className={`${node.main ? "w-5 h-5" : "w-4 h-4"}`} style={{ color: node.color }} />
          </div>
          <span className={`text-white ${node.main ? "font-semibold text-sm" : "text-xs"} whitespace-nowrap`}>
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* Animated pulse */}
      <motion.div
        animate={{ x: ["-100%", "200%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[25%] w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-md"
      />
    </div>
  );
}

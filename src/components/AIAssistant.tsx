"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessage: Message = {
  role: "assistant",
  content: "Hi! I'm Aryan's AI assistant. Ask me anything about his skills, projects, or experience!",
};

const responses: Record<string, string> = {
  skills: "Aryan specializes in AI/ML (LangChain, OpenAI, PyTorch), full-stack development (React, Next.js, Node.js), and cloud infrastructure (AWS, GCP, Docker). He's particularly strong in building RAG systems and conversational AI.",
  projects: "His flagship project is Convo — an agentic SaaS platform that replaces business websites with AI conversations. He's also built a PDF-to-SQL extractor, a finance compliance RAG chatbot, and a P2P equipment rental iOS app.",
  experience: "Aryan interned at CRIBLIV, an AI real estate startup, where he built production frontend systems and integrated AI chatbots. He's also a research assistant at ASU's AI Lab, focusing on conversational AI and multi-agent systems.",
  education: "Aryan is a senior CS student at Arizona State University, pursuing a 4+1 accelerated Master's in AI. He maintains a 3.8 GPA and focuses on LLMs, distributed systems, and product engineering.",
  contact: "You can reach Aryan at atripath@asu.edu, on LinkedIn at /in/aryantripathi, or on GitHub. He's currently open to opportunities!",
  convo: "Convo is Aryan's flagship project — an agentic SaaS platform that replaces traditional business websites with intelligent AI conversations. It features Consumer GPT for bookings, Voice Agent via Twilio, Owner GPT for business intelligence, and atomic slot locking for scheduling.",
  default: "I can tell you about Aryan's skills, projects, experience, education, or how to contact him. What would you like to know?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) return responses.skills;
  if (lower.includes("project") || lower.includes("work") || lower.includes("built")) return responses.projects;
  if (lower.includes("experience") || lower.includes("intern") || lower.includes("job")) return responses.experience;
  if (lower.includes("education") || lower.includes("school") || lower.includes("degree") || lower.includes("asu")) return responses.education;
  if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("reach")) return responses.contact;
  if (lower.includes("convo")) return responses.convo;
  return responses.default;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] glass rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Aryan&apos;s AI</h3>
                <p className="text-xs text-zinc-500">Ask me anything</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-indigo-500 text-white rounded-br-md"
                        : "bg-zinc-800 text-zinc-300 rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 text-zinc-400 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Typing...
                    </motion.span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-zinc-900 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center hover:bg-indigo-400 transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

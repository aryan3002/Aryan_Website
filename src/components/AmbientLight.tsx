"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AmbientLightProps {
  /** Position as percentage from top-left */
  position?: { x: number; y: number };
  /** Color of the ambient light */
  color?: string;
  /** Size of the light sphere in pixels */
  size?: number;
  /** Opacity of the light (0-1) */
  intensity?: number;
  /** Animation duration in seconds */
  duration?: number;
}

export default function AmbientLight({
  position = { x: 50, y: 30 },
  color = "99, 102, 241", // Indigo RGB values
  size = 600,
  intensity = 0.12,
  duration = 20,
}: AmbientLightProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: intensity,
        scale: 1,
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Primary light sphere */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgba(${color}, 0.25) 0%, rgba(${color}, 0.08) 40%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [1, 0.85, 1],
              }
        }
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary subtle glow for depth */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at center, rgba(${color}, 0.1) 0%, transparent 50%)`,
          filter: "blur(60px)",
          transform: "scale(1.3)",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1.3, 1.4, 1.3],
                opacity: [0.6, 0.8, 0.6],
              }
        }
        transition={{
          duration: duration * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: duration * 0.1,
        }}
      />
    </motion.div>
  );
}

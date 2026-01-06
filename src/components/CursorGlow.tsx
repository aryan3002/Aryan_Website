"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const isTouch = useRef(false);

  // Smooth spring physics for the glow following cursor
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check for touch device
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      isTouch.current = true;
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  // Return null for touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Primary glow - follows cursor with spring physics */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            background: `radial-gradient(circle at center, rgba(99, 102, 241, 0.06) 0%, rgba(99, 102, 241, 0.02) 35%, transparent 60%)`,
            filter: "blur(1px)",
          }}
        />
      </motion.div>

      {/* Secondary subtle outer glow for depth */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          opacity: isVisible ? 0.5 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.03) 0%, transparent 50%)`,
            filter: "blur(40px)",
          }}
        />
      </motion.div>
    </>
  );
}

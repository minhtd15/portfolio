"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  direction = "up",
  duration = 0.65,
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const offsets = {
    up:    { y: prefersReduced ? 0 : 30, x: 0 },
    down:  { y: prefersReduced ? 0 : -30, x: 0 },
    left:  { y: 0, x: prefersReduced ? 0 : 30 },
    right: { y: 0, x: prefersReduced ? 0 : -30 },
    none:  { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.02, 0.73, 0.98] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

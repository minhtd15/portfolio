"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

const container = (stagger: number) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.21, 1.02, 0.73, 0.98] as [number, number, number, number],
    },
  },
};

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={container(staggerDelay)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

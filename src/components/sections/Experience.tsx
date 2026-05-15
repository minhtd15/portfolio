"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import Badge from "@/components/ui/Badge";
import { Briefcase } from "lucide-react";

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.21, 1.02, 0.73, 0.98] as [number, number, number, number] }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
        className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 bg-[#030303] flex items-center justify-center"
        style={{ borderColor: "rgba(0,229,255,0.75)", boxShadow: exp.current ? "0 0 14px rgba(0,229,255,0.5), 0 0 28px rgba(0,229,255,0.2)" : "0 0 8px rgba(0,229,255,0.2)" }}
      >
        {exp.current && (
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#00e5ff", boxShadow: "0 0 6px #00e5ff" }} />
        )}
      </motion.div>

      <div className="glass border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] glow-card transition-all duration-500 group">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-white text-base">{exp.role}</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Briefcase size={12} className="text-zinc-600" />
              <span className="text-sm" style={{ color: "#00e5ff" }}>{exp.company}</span>
            </div>
          </div>
          <span className="text-xs text-zinc-600 font-mono whitespace-nowrap bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.05]">
            {exp.period}
          </span>
        </div>

        <p className="text-zinc-500 text-sm leading-relaxed mb-4">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <SectionHeading
          label="Experience"
          title="My journey so far"
          description="The roles and companies that shaped how I think about software."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            ref={lineRef}
            className="absolute left-2 top-0 bottom-0 w-px bg-white/[0.05]"
          >
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-500/70 via-pink-500/30 to-transparent"
              initial={{ height: 0 }}
              animate={lineInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

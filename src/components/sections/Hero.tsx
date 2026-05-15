"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/lib/data";
import CodingFigure from "@/components/ui/CodingFigure";

/* Floating orb that slightly follows the mouse */
function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          x: useTransform(springX, (v) => v * 0.08),
          y: useTransform(springY, (v) => v * 0.08),
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.18) 0%, rgba(255,0,128,0.1) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

/* Animated grid lines */
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Circuit grid */}
      <div className="absolute inset-0 bg-circuit opacity-100" />

      {/* Radial fade over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,229,255,0.12),transparent)]" />

      {/* Outer vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#030303_100%)]" />

      {/* Top glow bar — cyan brighter */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
      {/* Second glow bar slightly wider and softer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-3 bg-gradient-to-b from-cyan-400/20 to-transparent blur-sm" />

      {/* Floating orbs — cyan + pink boosted */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "rgba(0,229,255,0.14)" }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "rgba(255,0,128,0.13)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.35, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none" />
    </div>
  );
}

/* Typewriter chip */
const roles = ["Software Engineer", "Management Associate", "Go Developer", "Fintech Builder"];

function RoleChip() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const role = roles[roleIdx];
      if (!deleting) {
        charIdx++;
        if (ref.current) ref.current.textContent = role.slice(0, charIdx);
        if (charIdx === role.length) {
          deleting = true;
          timeout = setTimeout(tick, 2000);
          return;
        }
      } else {
        charIdx--;
        if (ref.current) ref.current.textContent = role.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 40 : 80);
    }

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span
      className="gradient-text-blue font-bold"
      ref={ref}
      aria-label="Software Engineer"
    >
      Software Engineer
    </span>
  );
}

const socialLinks = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
  { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 1.02, 0.73, 0.98] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <GridBackground />
      <MouseGlow />

      {/* Two-column layout: text left, figure right */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

        {/* ── Left: text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left flex-1 min-w-0"
        >
          {/* Status pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-400/35 text-xs text-zinc-300 font-mono tracking-wide mb-8" style={{ boxShadow: "0 0 20px rgba(0,229,255,0.14), inset 0 0 20px rgba(0,229,255,0.03)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#00ff87", boxShadow: "0 0 8px #00ff87" }} />
              Available for new opportunities
              <Sparkles size={12} className="text-cyan-600" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-[0.95] cursor-default"
          >
            <span
              className="gradient-text"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.animation = "glitch 0.4s step-end, glitch-color 0.4s step-end";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.animation = "";
              }}
            >{personalInfo.name}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={item}
            className="text-xl sm:text-2xl text-zinc-400 mb-6 h-8"
          >
            <RoleChip />
            <span className="ml-0.5 inline-block w-0.5 h-6 align-middle animate-pulse" style={{ backgroundColor: "#00e5ff", boxShadow: "0 0 6px #00e5ff" }} />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(0,229,255,0.7), 0 0 60px rgba(0,229,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: "linear-gradient(135deg,#00e5ff,#9900ff)", color: "#030303", boxShadow: "0 0 20px rgba(0,229,255,0.5), 0 0 40px rgba(0,229,255,0.2)" }}
            >
              View my work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, borderColor: "rgba(255,0,128,0.5)", boxShadow: "0 0 20px rgba(255,0,128,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl glass border border-cyan-400/50 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/8 transition-all"
              style={{ boxShadow: "0 0 12px rgba(0,229,255,0.15), inset 0 0 12px rgba(0,229,255,0.04)" }}
            >
              Get in touch →
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass border border-cyan-500/25 flex items-center justify-center text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/60 transition-all"
                style={{ transition: "all 0.25s" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(0,229,255,0.35), inset 0 0 10px rgba(0,229,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <Icon size={16} />
              </motion.a>
            ))}

            <div className="h-5 w-px bg-white/10" />

            <span className="text-xs text-zinc-600 font-mono">{personalInfo.location}</span>
          </motion.div>
        </motion.div>

        {/* ── Right: coding figure ── */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.21, 1.02, 0.73, 0.98] }}
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <CodingFigure className="w-72 xl:w-80" />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}

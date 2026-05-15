"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#tech", label: "Tech" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Observe active section
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 1.02, 0.73, 0.98] as [number, number, number, number] }}
        className="fixed top-0 left-0 right-0 z-50 px-4"
      >
        <div
          className={`mx-auto max-w-5xl mt-4 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "glass-heavy shadow-2xl shadow-black/40"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-14 px-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-600 flex items-center justify-center text-xs font-bold text-white" style={{ boxShadow: "0 0 12px rgba(0,229,255,0.3)" }}>
                TĐM
              </span>
              <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                {personalInfo.name}
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-cyan-300"
                      : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(0,229,255,0.07)", boxShadow: "inset 0 0 8px rgba(0,229,255,0.08)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="px-4 py-1.5 text-sm rounded-lg font-medium transition-all text-cyan-300 border border-cyan-400/55 hover:bg-cyan-500/10"
                style={{ boxShadow: "0 0 16px rgba(0,229,255,0.25)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(0,229,255,0.55), 0 0 50px rgba(0,229,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(0,229,255,0.25)";
                }}
              >
                Hire me
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 glass-heavy rounded-2xl shadow-2xl p-4"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/5 mt-2 pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-xl font-medium text-sm text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
                >
                  Hire me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Send, Mail, CheckCircle2, Loader2, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const socialLinks = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub", handle: "minhtd15" },
  { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn", handle: "Đức Minh Tống" },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", handle: personalInfo.email },
];

type FormState = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,229,255,0.04),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: info panel */}
          <FadeInWhenVisible direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-6 h-full">
              {/* Location card */}
              <div className="glass border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}>
                    <MapPin size={16} style={{ color: "#00e5ff" }} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 font-mono">LOCATION</p>
                    <p className="text-sm text-white font-medium">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="h-px bg-white/[0.05] my-4" />

                <p className="text-sm text-zinc-500 leading-relaxed">
                  Open to remote opportunities worldwide. Available for full-time roles and freelance projects.
                </p>
              </div>

              {/* Social links */}
              <div className="glass border border-white/[0.06] rounded-2xl p-6">
                <p className="text-xs text-zinc-600 font-mono tracking-widest uppercase mb-4">Find me on</p>
                <div className="flex flex-col gap-3">
                  {socialLinks.map(({ href, icon: Icon, label, handle }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-3 text-zinc-500 group transition-colors"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#00e5ff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "";
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg glass border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.15] transition-colors">
                        <Icon size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-600">{label}</p>
                        <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                          {handle}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Right: form */}
          <FadeInWhenVisible delay={0.15} className="lg:col-span-3">
            <div className="glass border border-white/[0.06] rounded-2xl p-8 relative overflow-hidden">
              {/* Inner glow */}
              <div className="absolute top-0 right-0 w-60 h-60 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,229,255,0.05)" }} />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle2 size={52} style={{ color: "#00e5ff", filter: "drop-shadow(0 0 8px rgba(0,229,255,0.5))" }} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">Message sent!</h3>
                    <p className="text-zinc-500 text-sm max-w-xs">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 px-4 py-2 rounded-lg glass border border-white/10 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="relative flex flex-col gap-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-zinc-600 font-mono" htmlFor="name">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-zinc-600 font-mono" htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-600 font-mono" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about your project, idea, or just say hello..."
                        value={form.message}
                        onChange={handleChange}
                        style={{ resize: "none" }}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400 text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2.5 px-4">
                        Something went wrong. Please try again or email me directly.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg,#00e5ff,#9900ff)", color: "#030303", boxShadow: "0 0 22px rgba(0,229,255,0.45), 0 0 50px rgba(0,229,255,0.15)" }}
                      onMouseEnter={(e) => {
                        if ((e.currentTarget as HTMLButtonElement).disabled) return;
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,229,255,0.7), 0 0 80px rgba(0,229,255,0.25)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 22px rgba(0,229,255,0.45), 0 0 50px rgba(0,229,255,0.15)";
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

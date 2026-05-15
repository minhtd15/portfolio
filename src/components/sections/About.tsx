"use client";

import { motion } from "framer-motion";
import { skills, personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { MapPin, Briefcase, Code2 } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "30+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Cups of Coffee", value: "∞" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.04),transparent)]" />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          label="About me"
          title="Crafting code with purpose"
          description="A brief look at who I am and what drives my work."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio card */}
          <FadeInWhenVisible direction="left">
            <div className="glass border border-white/[0.06] rounded-2xl p-8 glow-card transition-all duration-500 relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,rgba(0,229,255,0.12),rgba(255,0,128,0.08))", border: "1px solid rgba(0,229,255,0.2)", boxShadow: "0 0 15px rgba(0,229,255,0.1)" }}>
                  <Code2 size={20} style={{ color: "#00e5ff" }} />
                </div>
                <div>
                  <p className="font-semibold text-white">{personalInfo.name}</p>
                  <p className="text-xs text-zinc-500">Software Engineer</p>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
                {personalInfo.bio}
              </p>

              <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                When I&apos;m not writing code, I&apos;m exploring system design patterns, contributing to open-source projects, and staying current with the ever-evolving cloud-native landscape.
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <MapPin size={13} className="text-zinc-600" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Briefcase size={13} className="text-zinc-600" />
                  Open to remote &amp; on-site roles
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass border border-white/[0.06] rounded-xl p-4 text-center group hover:border-white/[0.12] transition-all"
                >
                  <p className="text-xl font-bold gradient-text-blue mb-1">{stat.value}</p>
                  <p className="text-[10px] text-zinc-600 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>

          {/* Right: Skill cards */}
          <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.08}>
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={staggerItem}
                className="glass border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.12] glow-card transition-all duration-500 group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{skill.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
                    </div>
                    <p className="text-xs text-zinc-600 mb-3">{skill.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-zinc-400 font-mono group-hover:border-white/[0.1] transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import Badge from "@/components/ui/Badge";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Decorative blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="A selection of projects that showcase my range — from distributed backend systems to polished web applications."
        />

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className={`relative glass border ${project.borderColor} rounded-2xl overflow-hidden group cursor-default`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Card inner glow on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Top glow line */}
              <div
                className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}60, transparent)` }}
              />

              <div className="relative p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {project.featured && (
                      <span className="inline-block text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-2">
                        Featured
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>

                  {/* Action icons */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={14} />
                    </a>
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                {/* Footer links */}
                <div className="flex items-center gap-4 text-xs text-zinc-600">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-zinc-300 transition-colors"
                  >
                    <GithubIcon size={12} /> Source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo === "#" ? project.github : project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-zinc-300 transition-colors"
                    >
                      <ArrowUpRight size={12} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* All projects link */}
        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/minhtd15"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-sm text-zinc-400 hover:text-white hover:border-white/20 transition-all"
          >
            <GithubIcon size={16} />
            See all projects on GitHub
            <ArrowUpRight size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

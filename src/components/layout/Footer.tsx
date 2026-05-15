"use client";

import { personalInfo } from "@/lib/data";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t py-10 px-6" style={{ borderColor: "rgba(0,229,255,0.08)" }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Framer Motion.
        </p>

        <div className="flex items-center gap-4">
          {[
            { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
            { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-600 transition-colors"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#00e5ff";
                (e.currentTarget as HTMLElement).style.textShadow = "0 0 8px rgba(0,229,255,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "";
                (e.currentTarget as HTMLElement).style.textShadow = "";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

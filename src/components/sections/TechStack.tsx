"use client";

import { useRef } from "react";
import { techStack } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

/* Duplicate array so the marquee loops seamlessly */
const doubled = [...techStack, ...techStack];
const halfA = doubled.slice(0, Math.ceil(doubled.length / 2));
const halfB = doubled.slice(Math.ceil(doubled.length / 2));

function TechPill({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 glass border border-white/[0.06] rounded-xl mx-2 hover:border-white/[0.12] transition-all group cursor-default">
      <span
        className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
      />
      <span className="text-sm text-zinc-300 font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
  speed = "30s",
}: {
  items: typeof techStack;
  reverse?: boolean;
  speed?: string;
}) {
  return (
    <div className="relative overflow-hidden py-2">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: speed }}
      >
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} name={tech.name} color={tech.color} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="relative py-32">
      {/* Gradient dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(139,92,246,0.04),transparent)]" />

      <div className="relative">
        <div className="px-6">
          <SectionHeading
            label="Tech Stack"
            title="Tools I work with"
            description="The technologies I reach for when building production systems."
          />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <Marquee items={techStack} speed="35s" />
          <Marquee items={[...techStack].reverse()} reverse speed="28s" />
        </div>
      </div>
    </section>
  );
}

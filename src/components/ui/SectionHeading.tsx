import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

interface Props {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: Props) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 mb-16 ${alignClass}`}>
      <FadeInWhenVisible>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyan-400/35 text-xs text-zinc-300 font-mono tracking-widest uppercase" style={{ boxShadow: "0 0 16px rgba(0,229,255,0.1)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#00e5ff", boxShadow: "0 0 6px #00e5ff" }} />
          {label}
        </span>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text">
          {title}
        </h2>
      </FadeInWhenVisible>

      {description && (
        <FadeInWhenVisible delay={0.2}>
          <p className="text-zinc-500 max-w-xl leading-relaxed">
            {description}
          </p>
        </FadeInWhenVisible>
      )}
    </div>
  );
}

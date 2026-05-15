import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export default function Badge({ children, className, color }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium font-mono",
        "bg-white/[0.05] border border-white/[0.07] text-zinc-300",
        "transition-colors hover:bg-white/[0.08] hover:border-white/[0.12]",
        className
      )}
    >
      {color && (
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: color }}
        />
      )}
      {children}
    </span>
  );
}

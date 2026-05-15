"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, children, ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";

    const variants = {
      primary:
        "bg-white text-black hover:bg-zinc-100 active:scale-[0.98] shadow-lg shadow-white/5",
      outline:
        "glass border border-white/10 text-white hover:border-white/20 hover:bg-white/5 active:scale-[0.98]",
      ghost:
        "text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...(props as object)}
      >
        {/* Shimmer overlay on hover */}
        <span className="absolute inset-0 opacity-0 hover:opacity-100 shimmer transition-opacity duration-300 pointer-events-none" />
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
export default Button;

"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-glow-sm hover:shadow-glow-md border border-emerald-400/30",
      cyan: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-glow-cyan border border-cyan-400/30",
      secondary: "bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700/80 hover:border-slate-600 backdrop-blur-md",
      outline: "bg-transparent hover:bg-slate-800/50 text-emerald-400 hover:text-emerald-300 border border-emerald-500/40 hover:border-emerald-400",
      ghost: "bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-slate-100",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs gap-1.5",
      md: "px-4 py-2 text-sm gap-2",
      lg: "px-6 py-3 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

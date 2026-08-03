"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "emerald" | "cyan" | "violet" | "slate" | "outline";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "emerald",
  children,
  ...props
}) => {
  const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors";
  
  const variants = {
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    violet: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    slate: "bg-slate-800 text-slate-300 border border-slate-700",
    outline: "border border-slate-700 text-slate-400 bg-transparent",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};

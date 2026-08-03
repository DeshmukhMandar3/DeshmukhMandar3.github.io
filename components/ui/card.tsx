"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverGlow?: boolean;
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverGlow = true, glass = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/60 p-6 transition-all duration-300 relative overflow-hidden text-slate-900 dark:text-slate-100 shadow-sm dark:shadow-none",
          glass && "backdrop-blur-md bg-white/70 dark:bg-slate-900/70",
          hoverGlow && "hover:border-emerald-500/50 dark:hover:border-emerald-500/40 hover:shadow-glow-sm hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

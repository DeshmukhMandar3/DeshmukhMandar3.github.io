"use client";

import React from "react";
import { motion } from "framer-motion";
import { Milestone, CheckCircle, Sparkles, ArrowDown, GraduationCap, Code2, Server, Cpu, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TIMELINE } from "@/constants/data";

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="violet" className="mb-3">
            EVOLUTION & PROGRESSION
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-slate-100">
            Learning & Career <span className="text-gradient-emerald">Timeline</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-base sm:text-lg">
            From Mechanical Engineering to Full-Stack PWA craft and scalable backend architecture.
          </p>
        </div>

        {/* Timeline Flow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-400 to-violet-500 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 z-10 shadow-glow-sm">
                    {item.isCurrent ? (
                      <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? "sm:pl-0" : "sm:pr-0"}`}>
                    <Card className="space-y-3 bg-slate-900/80 border-slate-800 hover:border-emerald-500/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <Badge variant={item.isCurrent ? "emerald" : "cyan"}>
                          {item.period}
                        </Badge>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-mono text-lg font-bold text-slate-100">
                          {item.title}
                        </h3>
                        <div className="text-xs font-mono text-emerald-400 mt-0.5">
                          {item.subtitle}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Takeaways */}
                      <div className="pt-2 border-t border-slate-800/80 space-y-1">
                        {item.keyTakeaways.map((takeaway, tIdx) => (
                          <div key={tIdx} className="text-[11px] text-slate-300 flex items-center gap-1.5 font-mono">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{takeaway}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Compass, Cpu, ShieldAlert, Award, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/constants/data";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="emerald" className="mb-3">
            BACKGROUND & PHILOSOPHY
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-slate-100">
            About <span className="text-gradient-emerald">Mandar Deshmukh</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-base sm:text-lg">
            Engineering discipline applied to full-stack web software and distributed backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="h-full space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-slate-100">
                    The Engineering Journey
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    Mechanical Engineering → Full Stack Developer → Distributed Systems Track
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  My journey began in <span className="text-slate-100 font-semibold">Mechanical Engineering</span>, where I mastered mathematical modeling, thermodynamics, and rigorous system analysis. That structural mindset translated seamlessly into software engineering when I dedicated 1200+ hours to practical programming and software design.
                </p>
                <p>
                  Today, as a <span className="text-emerald-400 font-semibold">Full Stack Developer at Hyperface Technologies</span>, I engineer production credit card management applications and Progressive Web Apps (PWAs). I take pride in delivering resilient user experiences, zero-regression features, and secure authentication flows.
                </p>
                <p>
                  I thrive on solving complex backend problems: decoupling data layers with the <span className="text-cyan-400 font-mono">Repository Pattern</span>, enforcing <span className="text-cyan-400 font-mono">Cache-Aside Redis</span> strategies, and optimizing PostgreSQL queries for high concurrency.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="text-xs text-slate-400">Primary Focus</div>
                  <div className="text-sm font-semibold text-slate-100 mt-0.5">Fintech & Backend Systems</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="text-xs text-slate-400">Engineering Mindset</div>
                  <div className="text-sm font-semibold text-emerald-400 mt-0.5">Clean Code & High Performance</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Core Areas of Interest (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <Card className="h-full">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-slate-100">
                    Core Technical Focus
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    System Design & Architectural Passions
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {PERSONAL_INFO.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-medium text-slate-200 group-hover:text-emerald-300">
                        {interest}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

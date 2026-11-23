"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ShieldCheck, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE } from "@/constants/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="cyan" className="mb-3">
            PROFESSIONAL EXPERIENCE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-slate-100">
            Work <span className="text-gradient-emerald">Experience</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-base sm:text-lg">
            Credit card PWAs and the backend services behind them, for banks and fintech partners.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <Card key={index} className="space-y-6 border-slate-800 bg-slate-900/80">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <Building2 className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-mono font-bold text-slate-100">
                        {exp.company}
                      </h3>
                      <div className="text-sm font-semibold text-emerald-400">
                        {exp.role}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <Badge variant="emerald">{exp.period}</Badge>
                  <span className="flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                  </span>
                  <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                  Key Engineering Contributions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <Badge key={tIdx} variant="slate">
                    {tech}
                  </Badge>
                ))}
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

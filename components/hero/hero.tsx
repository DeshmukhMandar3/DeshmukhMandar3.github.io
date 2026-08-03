"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Layers, FileText, Send, ArrowRight, ShieldCheck, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/constants/data";
import { scrollToSection } from "@/lib/utils";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-16 overflow-hidden">
      {/* Dynamic Background Mesh & Glowing Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Top Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-glow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-slate-300 font-medium">
                Full Stack Developer <span className="text-slate-600">|</span> High-Performance & Distributed Web Systems
              </span>
            </div>
          </motion.div>

          {/* Name & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-mono font-extrabold tracking-tight text-slate-100">
              Mandar <span className="text-gradient-emerald">Deshmukh</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 max-w-3xl leading-snug">
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          {/* Subtext / Bio snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Full Stack Engineer at <span className="text-slate-200 font-semibold">Hyperface Technologies</span> with a Mechanical Engineering foundation. Crafting high-performance Node.js backend services, PostgreSQL schemas, Redis Cache-Aside pipelines, and production PWAs.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              <Layers className="w-4 h-4 mr-1" /> View Projects
            </Button>
            <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">
                <FileText className="w-4 h-4 mr-1" /> Download Resume
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <Send className="w-4 h-4 mr-1" /> Contact Me
            </Button>
          </motion.div>

          {/* Live Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full pt-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 text-left">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">1200+</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Practical Coding Hours</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 text-left">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400">Hyperface</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Fintech PWA & Cards</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 text-left">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-violet-400">Redis & SQL</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Cache-Aside & Dynamic SQL</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 text-left">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">99.9%</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Target Systems Reliability</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

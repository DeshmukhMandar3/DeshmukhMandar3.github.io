"use client";

import React from "react";
import { Terminal, Github, Linkedin, Mail, ArrowUp, Heart, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/constants/data";
import { scrollToSection } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-slate-100 font-mono font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span>Mandar Deshmukh</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Full Stack Developer specializing in high-throughput web applications, Node.js/PostgreSQL backend architecture, Redis caching, and distributed systems.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              System Status: All Services Operational (99.9% Mindset)
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-slate-200 tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {["about", "experience", "skills", "architecture", "projects", "timeline"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="hover:text-emerald-400 transition-colors capitalize text-slate-400"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Resume */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-slate-200 tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" /> LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" /> Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Mandar Deshmukh. Engineered with Next.js App Router, TypeScript & Tailwind CSS.
          </div>
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

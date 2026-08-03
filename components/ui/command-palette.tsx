"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2, User, Briefcase, Cpu, Layers, Mail, FileText, ArrowRight, X, Sparkles, Terminal } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { PERSONAL_INFO } from "@/constants/data";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    {
      id: "hero",
      title: "Home / Overview",
      category: "Navigation",
      icon: User,
      action: () => scrollToSection("hero"),
    },
    {
      id: "about",
      title: "About Mandar Deshmukh",
      category: "Navigation",
      icon: User,
      action: () => scrollToSection("about"),
    },
    {
      id: "experience",
      title: "Work Experience & Hyperface Tech",
      category: "Navigation",
      icon: Briefcase,
      action: () => scrollToSection("experience"),
    },
    {
      id: "skills",
      title: "Engineering Skills & Technical Matrix",
      category: "Navigation",
      icon: Cpu,
      action: () => scrollToSection("skills"),
    },
    {
      id: "architecture",
      title: "Backend Architecture & Employee System",
      category: "Navigation",
      icon: Terminal,
      action: () => scrollToSection("architecture"),
    },
    {
      id: "projects",
      title: "Featured Engineering Projects",
      category: "Navigation",
      icon: Layers,
      action: () => scrollToSection("projects"),
    },
    {
      id: "timeline",
      title: "Career & Learning Timeline",
      category: "Navigation",
      icon: Code2,
      action: () => scrollToSection("timeline"),
    },
    {
      id: "contact",
      title: "Contact & Reach Out",
      category: "Navigation",
      icon: Mail,
      action: () => scrollToSection("contact"),
    },
    {
      id: "resume",
      title: "Download Official Resume (PDF)",
      category: "Actions",
      icon: FileText,
      action: () => window.open(PERSONAL_INFO.resumeUrl, "_blank"),
    },
    {
      id: "copy-email",
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: "Actions",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Header / Input */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
              <Search className="w-5 h-5 text-emerald-400 mr-3" />
              <input
                type="text"
                placeholder="Type a command or search section..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-base"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
              {copied && (
                <div className="p-3 mb-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Email address copied to clipboard!
                </div>
              )}

              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => {
                  const IconComponent = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => {
                        cmd.action();
                        if (cmd.id !== "copy-email") setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 text-left transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-emerald-500/10 text-slate-400 group-hover:text-emerald-400 border border-slate-700/50 group-hover:border-emerald-500/30 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-200 group-hover:text-emerald-300">
                            {cmd.title}
                          </div>
                          <div className="text-xs text-slate-500">{cmd.category}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-slate-500 text-sm">
                  No command found matching &quot;{query}&quot;
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-800 bg-slate-950/60 text-xs text-slate-500">
              <span>Use <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300 font-mono">ESC</kbd> to exit</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" /> Command Palette
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

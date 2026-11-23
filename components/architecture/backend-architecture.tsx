"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, Server, Shield, Database, FolderTree, Code2, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CODE_SNIPPETS, FEATURED_BACKEND_PROJECT } from "@/constants/data";
import { ArchitectureDiagram } from "./architecture-diagram";

export const BackendArchitecture = () => {
  const [activeTab, setActiveTab] = useState(CODE_SNIPPETS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeSnippet = CODE_SNIPPETS.find((s) => s.id === activeTab) || CODE_SNIPPETS[0];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const folderStructure = `src/
├── config/
│   ├── db.config.ts          # PostgreSQL Pool & Transactions
│   └── redis.config.ts       # Redis Client Setup
├── controllers/              # Express Request/Response Handlers
├── middlewares/              # JWT Auth, Zod Validation, Error Handlers
├── repositories/             # Decoupled SQL Queries & Data Access
├── services/                 # Business Logic & Cache-Aside Redis Manager
├── types/                    # Zod Schemas & TypeScript Contracts
└── app.ts                    # Server Bootstrap & Middleware Setup`;

  return (
    <section id="architecture" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="emerald" className="mb-3">
            FEATURED BACKEND SHOWCASE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-slate-100">
            Backend <span className="text-gradient-emerald">Architecture Deep-Dive</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-base sm:text-lg">
            Inside my Employee Management System, a personal project: a Node.js API with layered architecture, PostgreSQL and Redis caching.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-slate-200">JWT Token Rotation</div>
              <div className="text-[11px] text-slate-400">Redis Refresh Blacklist</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-slate-200">Repository Pattern</div>
              <div className="text-[11px] text-slate-400">Layered Data Isolation</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-slate-200">PostgreSQL SQL</div>
              <div className="text-[11px] text-slate-400">Dynamic Filtering & Sort</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-slate-200">Cache-Aside Redis</div>
              <div className="text-[11px] text-slate-400">Repeated Reads Skip the DB</div>
            </div>
          </div>
        </div>

        {/* Architecture Diagram Component */}
        <div className="mb-16">
          <ArchitectureDiagram />
        </div>

        {/* Folder Structure & Code Snippet Showcase Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Folder Tree Structure (Left 4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="h-full">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
                <FolderTree className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-sm font-bold text-slate-100">
                  Folder Structure
                </h3>
              </div>
              <pre className="font-mono text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800/80 overflow-x-auto leading-relaxed">
                {folderStructure}
              </pre>
              <div className="pt-4 text-xs text-slate-400 space-y-2">
                <p>
                  Strict separation of concerns prevents business logic leaks into HTTP handlers or SQL repositories.
                </p>
              </div>
            </Card>
          </div>

          {/* Code Snippet Tabs & Viewer (Right 8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {CODE_SNIPPETS.map((snippet) => (
                  <button
                    key={snippet.id}
                    onClick={() => setActiveTab(snippet.id)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-xl transition-all ${
                      activeTab === snippet.id
                        ? "bg-emerald-500 text-slate-950 font-bold shadow-glow-sm"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    {snippet.title.split(" ")[0]} {snippet.title.split(" ")[1]}
                  </button>
                ))}
              </div>

              {/* Copy Code Button */}
              <button
                onClick={() => handleCopy(activeSnippet.code, activeSnippet.id)}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-slate-300 hover:text-emerald-400 bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors"
              >
                {copiedId === activeSnippet.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Code
                  </>
                )}
              </button>
            </div>

            {/* Code Box */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
              {/* Code Box Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>{activeSnippet.filename}</span>
                </div>
                <span className="text-slate-500 uppercase">{activeSnippet.language}</span>
              </div>

              {/* Description Banner */}
              <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/60 text-xs text-slate-400">
                {activeSnippet.description}
              </div>

              {/* Code Area */}
              <pre className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed max-h-[420px] overflow-y-auto">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, ShieldCheck, CheckSquare, Layers, Database, Cpu, ArrowRight, RefreshCw, Zap } from "lucide-react";

export const ArchitectureDiagram = () => {
  return (
    <div className="w-full p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-2xl relative overflow-hidden font-mono">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Layered Architecture & Redis Cache Flow
          </span>
        </div>
        <span className="text-xs text-slate-500">
          Node.js / Express / PostgreSQL / Redis
        </span>
      </div>

      {/* Diagram Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        
        {/* Node 1: Client Request */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2 relative group hover:border-emerald-500/50 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 mx-auto group-hover:text-emerald-400">
            <User className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-slate-200">1. Client Request</div>
          <div className="text-[10px] text-slate-400">JSON Payload / Bearer Token</div>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex justify-center text-slate-600">
          <ArrowRight className="w-5 h-5 animate-pulse text-emerald-400" />
        </div>

        {/* Node 2: API Gateway / Middleware */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2 relative group hover:border-cyan-500/50 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-slate-200">2. Auth & Zod Gate</div>
          <div className="text-[10px] text-cyan-400">JWT Token & Payload Contract</div>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex justify-center text-slate-600">
          <ArrowRight className="w-5 h-5 animate-pulse text-cyan-400" />
        </div>

        {/* Node 3: Service Layer */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2 relative group hover:border-violet-500/50 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mx-auto">
            <Layers className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold text-slate-200">3. Service Layer</div>
          <div className="text-[10px] text-violet-400">Business Logic & Invalidation</div>
        </div>

      </div>

      {/* Cache-Aside Branching Section */}
      <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Branch A: Redis Cache Hit */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-emerald-500/30 space-y-3 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-300">Redis Cache Hit</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">FAST PATH</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Service layer checks Redis key (<code className="text-emerald-300">emp_list:*</code>). If key exists, cached JSON response is returned directly to the client without querying PostgreSQL.
          </p>
        </div>

        {/* Branch B: PostgreSQL DB Miss & Write-Back */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-cyan-500/30 space-y-3 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-300">PostgreSQL Repository SQL</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">CACHE MISS</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Repository executes parameterized SQL with dynamic filters, sorting, and connection pooling. Query result is written back to Redis with a 5-min TTL.
          </p>
        </div>

      </div>
    </div>
  );
};

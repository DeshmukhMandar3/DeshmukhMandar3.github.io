"use client";

import React from "react";
import { BookOpen, ArrowRight, Clock, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const BlogPreview = () => {
  const articles = [
    {
      title: "Designing Layered Architecture in Node.js & Express: Decoupling SQL Repositories",
      date: "Coming Soon",
      readTime: "7 min read",
      category: "Backend Architecture",
      excerpt: "Why keeping raw SQL queries inside Express routes hurts testability, and how the Repository Pattern provides clean data layer isolation."
    },
    {
      title: "Cache-Aside Redis Strategy with PostgreSQL: Handling TTL Invalidation",
      date: "Coming Soon",
      readTime: "5 min read",
      category: "Caching & Performance",
      excerpt: "Step-by-step implementation of Redis in-memory caching to achieve sub-5ms API response times without serving stale data."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="cyan" className="mb-3">
            TECHNICAL WRITING & ARTICLES
          </Badge>
          <h2 className="text-3xl font-mono font-bold text-slate-100">
            Engineering <span className="text-gradient-emerald">Blog & Publications</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm max-w-xl">
            Deep-dives into backend architecture, system design trade-offs, and PostgreSQL tuning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((art, idx) => (
            <Card key={idx} className="space-y-4 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="cyan">{art.category}</Badge>
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readTime}
                  </span>
                </div>
                <h3 className="font-mono text-base font-bold text-slate-100 hover:text-emerald-300 transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{art.date}</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  Read Preview <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

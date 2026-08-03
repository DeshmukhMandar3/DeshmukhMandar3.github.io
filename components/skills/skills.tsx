"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Search, CheckCircle, Sparkles, Server, Database, Layers, Terminal, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILL_CATEGORIES } from "@/constants/data";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoryNames = ["All", ...SKILL_CATEGORIES.map((cat) => cat.name)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const isCategoryMatch = activeCategory === "All" || cat.name === activeCategory;
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...cat,
      isVisible: isCategoryMatch && (searchQuery === "" || matchingSkills.length > 0),
      skills: searchQuery ? matchingSkills : cat.skills,
    };
  }).filter((cat) => cat.isVisible);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Backend Engineering":
        return Server;
      case "Databases & Caching":
        return Database;
      case "Distributed Systems & System Design":
        return Layers;
      case "Frontend Craftsmanship":
        return Terminal;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="violet" className="mb-3">
            ENGINEERING CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-slate-100">
            Skills & <span className="text-gradient-emerald">Technical Competencies</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-base sm:text-lg">
            Structured skill categories highlighting full-stack engineering and backend architecture mastery.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md w-full md:w-auto">
            {categoryNames.map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all duration-200 ${
                  activeCategory === catName
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-glow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {catName}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Redis, JWT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const IconComponent = getCategoryIcon(category.name);
            return (
              <Card key={idx} className="space-y-4 flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-4">
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-slate-100 text-base">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 ${
                          skill.highlight
                            ? "bg-slate-950 text-emerald-300 border-emerald-500/40 shadow-glow-sm"
                            : "bg-slate-950/60 text-slate-300 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-500 ml-1">
                            ({skill.level})
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>{category.skills.length} Capabilities</span>
                  <span className="text-emerald-400/80">Production Verified</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

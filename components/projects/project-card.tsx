"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Cpu, CheckCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col justify-between p-6 bg-slate-900/80 border-slate-800 hover:border-emerald-500/40 hover:shadow-glow-sm transition-all duration-300 group">
        
        <div className="space-y-4">
          {/* Image & Category Overlay */}
          <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            {/* Category Tag Overlay */}
            <div className="absolute top-3 left-3">
              <Badge variant={project.featured ? "emerald" : "cyan"}>
                {project.category}
              </Badge>
            </div>

            {project.featured && (
              <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                <Sparkles className="w-3 h-3" /> FEATURED
              </div>
            )}
          </div>

          {/* Titles & Subtitle */}
          <div>
            <h3 className="font-mono text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-emerald-400 mt-1 line-clamp-1">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Architecture Highlights */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="text-[11px] font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Architecture Highlights:
              </div>
              <ul className="space-y-1">
                {project.architecture.slice(0, 2).map((arch, aIdx) => (
                  <li key={aIdx} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                    <span className="text-emerald-400">•</span>
                    <span className="line-clamp-1">{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag, tIdx) => (
              <Badge key={tIdx} variant="slate" className="text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Card Footer Links */}
        <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

      </Card>
    </motion.div>
  );
};

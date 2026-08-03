"use client";

import React from "react";
import { Quote, Sparkles, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS } from "@/constants/data";

export const Testimonials = () => {
  return (
    <section className="py-16 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="emerald" className="mb-3">
            PEER & LEADERSHIP RECOGNITION
          </Badge>
          <h2 className="text-3xl font-mono font-bold text-slate-100">
            Engineering <span className="text-gradient-emerald">Testimonials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item, idx) => (
            <Card key={idx} className="space-y-4 flex flex-col justify-between">
              <Quote className="w-8 h-8 text-emerald-500/40" />
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-mono font-bold text-slate-100">
                    {item.author}
                  </div>
                  <div className="text-xs text-slate-400">{item.role}</div>
                </div>
                <Badge variant="slate" className="flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-emerald-400" /> {item.company}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

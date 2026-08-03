"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, FileText, Sparkles, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/constants/data";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Send form via Getform.io endpoint preserved from original setup
      await fetch("https://getform.io/f/4c7f4c3d-b837-48eb-a797-0c571063d3f4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (e) {
      console.error(e);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="emerald" className="mb-3">
            GET IN TOUCH
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-slate-100">
            Let&apos;s Connect & <span className="text-gradient-emerald">Build Together</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl text-base sm:text-lg">
            Open for Full Stack Engineering roles, Backend opportunities, system architecture discussions, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Contact Information & Social Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <Card className="space-y-4 bg-slate-900/90 border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-slate-100">Direct Email</h3>
                  <p className="text-xs text-slate-400">Preferred channel for inquiries</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between font-mono text-xs text-slate-200">
                <span className="truncate mr-2">{PERSONAL_INFO.email}</span>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/60 transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Email address copied!
                </div>
              )}
            </Card>

            {/* Direct Phone & Social Links */}
            <Card className="space-y-4 bg-slate-900/90 border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-slate-100">Phone & Socials</h3>
                  <p className="text-xs text-slate-400">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-emerald-400" /> LinkedIn Profile
                  </span>
                  <span>↗</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-emerald-400" /> GitHub Repositories
                  </span>
                  <span>↗</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" /> Official Resume PDF
                  </span>
                  <span>↗</span>
                </a>
              </div>
            </Card>

          </div>

          {/* Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <Card className="bg-slate-900/90 border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-slate-100">Send a Message</h3>
                  <p className="text-xs text-slate-400">Directly dispatches to Mandar Deshmukh</p>
                </div>
              </div>

              {submitted && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been transmitted successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
                
                {/* Name */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Vance"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-[10px] mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                    })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-[10px] mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack / Systems Engineering Opportunity"
                    {...register("subject")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message or project requirements..."
                    {...register("message", { required: "Message is required" })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-red-400 text-[10px] mt-1 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                </Button>

              </form>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};

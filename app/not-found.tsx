"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 glass-card p-8 rounded-2xl border border-slate-800">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto animate-pulse">
          <Terminal className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            ERROR 404
          </span>
          <h1 className="text-3xl font-mono font-bold text-slate-100 mt-1">
            Endpoint Not Found
          </h1>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            The requested route does not exist on this server. The resource may have been relocated or purged from cache.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-slate-900 font-mono text-xs text-slate-400 text-left border border-slate-800">
          <span className="text-red-400">HTTP/1.1 404 Not Found</span>
          <br />
          Cache-Status: MISS
          <br />
          Path: {typeof window !== "undefined" ? window.location.pathname : "/unknown"}
        </div>
        <Link href="/" className="inline-block w-full">
          <Button variant="primary" className="w-full">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Terminal Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

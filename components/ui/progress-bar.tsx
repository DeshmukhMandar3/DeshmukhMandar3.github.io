"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight > 0) {
        const currentScroll = window.scrollY;
        setScrollPercentage((currentScroll / documentHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-950 z-50 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-violet-500 transition-all duration-150 ease-out shadow-glow-sm"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

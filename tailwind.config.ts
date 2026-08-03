import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#e6f9f5",
          100: "#c0f2e6",
          200: "#96ebd5",
          300: "#6be3c3",
          400: "#44ddb4",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          cyan: "#06b6d4",
          violet: "#8b5cf6"
        },
        dark: {
          bg: "#05070a",
          card: "#0d1117",
          border: "#1f293d",
          muted: "#1e293b",
          hover: "#131b2e"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "border-glow": "borderGlow 4s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        borderGlow: {
          "0%": { borderColor: "rgba(16, 185, 129, 0.2)" },
          "50%": { borderColor: "rgba(6, 182, 212, 0.6)" },
          "100%": { borderColor: "rgba(16, 185, 129, 0.2)" },
        }
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(16, 185, 129, 0.25)",
        "glow-md": "0 0 25px -5px rgba(16, 185, 129, 0.35)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }
    },
  },
  plugins: [],
};
export default config;

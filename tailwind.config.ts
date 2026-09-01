import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        ink: "#050508",
        obsidian: "#0A0A0F",
        panel: "rgba(17, 17, 26, 0.75)",
        "panel-solid": "#11111A",
        "panel-light": "rgba(24, 24, 36, 0.8)",
        line: "rgba(255, 255, 255, 0.08)",
        "line-bright": "rgba(255, 255, 255, 0.16)",
        "accent-purple": "#8B5CF6",
        "accent-cyan": "#06B6D4",
        "accent-emerald": "#10B981",
        "accent-coral": "#FF6B61",
        "accent-amber": "#F59E0B",
        ivory: "#F5F5FA",
        muted: "#9494A8",
        "muted-dark": "#5A5A6E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139, 92, 246, 0.35)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.35)",
        "glow-emerald": "0 0 40px -10px rgba(16, 185, 129, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

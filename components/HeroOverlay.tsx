"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal, Mail } from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.97 1.49 1.49 0 0 0 0-2.97z" />
    </svg>
  );
}

interface HeroOverlayProps {
  onOpenTerminal: () => void;
}

export default function HeroOverlay({ onOpenTerminal }: HeroOverlayProps) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-12 lg:px-20 pt-24 pb-14 sm:pt-28 sm:pb-16 z-10 mx-auto max-w-7xl">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-2xl">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 sm:px-4 py-1.5 backdrop-blur-md max-w-full"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
          </span>
          <span className="font-sans text-[10px] sm:text-xs font-semibold text-ivory tracking-wide text-left">
            AVAILABLE FOR SOFTWARE DEV &bull; FULL-STACK &amp; CLOUD &bull; N8N AI AGENTS
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-5 sm:mt-6 text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-ivory drop-shadow-2xl"
        >
          Ayush <span className="text-gradient-purple">Karan</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-5 text-sm sm:text-xl text-muted font-normal leading-relaxed max-w-xl"
        >
          Full-Stack Engineer &amp; Aspiring Cloud Architect. Crafting high-performance Web Applications,
          Cloud Systems, autonomous n8n workflow automations, and multi-agent AI pipelines.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="pointer-events-auto mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-indigo-600 px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-glow hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
          >
            <span>Explore Projects</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <button
            onClick={onOpenTerminal}
            className="flex items-center justify-center gap-2 rounded-xl border border-line bg-panel-solid/80 px-5 py-3.5 font-sans text-sm font-semibold text-ivory backdrop-blur-xl hover:border-accent-cyan/60 hover:bg-accent-cyan/10 hover:scale-[1.02] active:scale-[0.98] transition-all group w-full sm:w-auto"
          >
            <Terminal className="h-4 w-4 text-accent-cyan group-hover:rotate-12 transition-transform" />
            <span>AK-OS Console</span>
          </button>
        </motion.div>

        {/* Quick Metric Badges (3 Clean Cards) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pointer-events-auto mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full"
        >
          <div className="rounded-xl border border-line bg-panel/60 p-3.5 sm:p-4 backdrop-blur-md hover:border-accent-purple/40 transition-colors text-left">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-accent-purple">ENGINEERING</p>
            <p className="mt-1 font-sans text-lg sm:text-xl font-bold text-ivory">Full-Stack</p>
            <p className="text-[11px] text-muted font-medium">Next.js &bull; Node &bull; MongoDB</p>
          </div>

          <div className="rounded-xl border border-line bg-panel/60 p-3.5 sm:p-4 backdrop-blur-md hover:border-accent-cyan/40 transition-colors text-left">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-accent-cyan">AUTOMATION</p>
            <p className="mt-1 font-sans text-lg sm:text-xl font-bold text-ivory">n8n Agents</p>
            <p className="text-[11px] text-muted font-medium">Sequential AI Pipelines</p>
          </div>

          <div className="rounded-xl border border-line bg-panel/60 p-3.5 sm:p-4 backdrop-blur-md hover:border-accent-emerald/40 transition-colors text-left">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-accent-emerald">ACADEMICS</p>
            <p className="mt-1 font-sans text-lg sm:text-xl font-bold text-ivory">B.Tech CSE</p>
            <p className="text-[11px] text-muted font-medium">Cloud Computing &amp; Automation</p>
          </div>
        </motion.div>

        {/* Social Icons Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="pointer-events-auto mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-3.5 text-muted flex-wrap"
        >
          <a
            href="https://github.com/ayush07571"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-panel p-2.5 hover:border-accent-purple hover:text-ivory transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/ayush-karan"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-panel p-2.5 hover:border-accent-cyan hover:text-ivory transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:ayushkaran328@gmail.com"
            className="rounded-full border border-line bg-panel p-2.5 hover:border-accent-purple hover:text-ivory transition-all"
            title="Send Email"
          >
            <Mail className="h-4 w-4 text-accent-purple" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-muted font-mono text-xs tracking-widest uppercase flex-col items-center gap-1 opacity-70"
      >
        <span>scroll down</span>
        <ArrowDown className="h-3.5 w-3.5 text-accent-purple" />
      </motion.div>
    </section>
  );
}

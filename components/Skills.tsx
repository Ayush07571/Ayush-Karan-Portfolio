"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Terminal, Copy, Check, Bot, Cpu, Globe, Wrench } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  color: string;
  badgeColor: string;
  skills: { name: string; level: string; desc: string }[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "ai",
    title: "AI & Agentic Automation",
    icon: Bot,
    color: "text-accent-purple",
    badgeColor: "bg-accent-purple/20 text-accent-purple border-accent-purple/30",
    skills: [
      { name: "n8n AI Agents", level: "Advanced", desc: "Sequential PR code reviews, OpenRouter LLM routing" },
      { name: "Agentic AI Pipelines", level: "Advanced", desc: "Multi-agent task refinement & human-in-the-loop approval" },
      { name: "Prompt Engineering", level: "Expert", desc: "Structured JSON schemas & LLM context optimization" },
      { name: "Automation Workflows", level: "Advanced", desc: "Gmail API, GitHub Webhooks, Safe-string diff processing" },
    ],
  },
  {
    id: "web",
    title: "Full-Stack Web Engineering",
    icon: Globe,
    color: "text-accent-cyan",
    badgeColor: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30",
    skills: [
      { name: "Next.js 14", level: "Production", desc: "App Router, Server Actions, SSR & SSG Optimization" },
      { name: "React.js", level: "Expert", desc: "Hooks, Context API, Framer Motion, Responsive UI" },
      { name: "Node.js & Express", level: "Advanced", desc: "RESTful APIs, middleware, authentication & RBAC" },
      { name: "Tailwind CSS", level: "Expert", desc: "Design systems, glassmorphism, dark mode tokens" },
    ],
  },
  {
    id: "languages",
    title: "Languages & Foundations",
    icon: Cpu,
    color: "text-accent-emerald",
    badgeColor: "bg-accent-emerald/20 text-accent-emerald border-accent-emerald/30",
    skills: [
      { name: "JavaScript (ES6+)", level: "Expert", desc: "Async/Await, Promises, Closures, DOM Manipulation" },
      { name: "C++", level: "Core CS", desc: "Data structures, algorithms, object-oriented programming" },
      { name: "Python", level: "3★ Badge", desc: "Scripting, API integrations, data manipulation" },
      { name: "Java", level: "Core CS", desc: "OOP principles, enterprise application foundations" },
    ],
  },
  {
    id: "tools",
    title: "Cloud & Developer Tools",
    icon: Wrench,
    color: "text-accent-amber",
    badgeColor: "bg-accent-amber/20 text-accent-amber border-accent-amber/30",
    skills: [
      { name: "Git & GitHub", level: "Advanced", desc: "Branching workflows, webhooks, pull requests" },
      { name: "MongoDB", level: "Proficient", desc: "NoSQL document modeling, indexing & aggregation" },
      { name: "REST APIs", level: "Advanced", desc: "API endpoint design, JWT authentication, error handling" },
      { name: "Vercel / Render / Railway", level: "Production", desc: "CI/CD deployment, environment configuration" },
    ],
  },
];

const RAW_SKILLS_JSON = {
  developer: "Ayush Karan",
  degree: "B.Tech CSE (Cloud Computing & Automation)",
  institution: "VIT Bhopal University",
  contact: {
    email: "ayushkaran328@gmail.com",
    availability: "Available for Software Development, Full-Stack & n8n AI Agent roles"
  },
  technical_stack: {
    languages: ["C++", "Java", "Python", "JavaScript (ES6+)", "HTML5", "CSS3"],
    frameworks: ["React.js", "Next.js 14", "Node.js", "Express.js", "Tailwind CSS"],
    ai_automation: ["n8n AI Agents", "Multi-Agent Orchestration", "OpenRouter", "Prompt Engineering"],
    database_cloud: ["MongoDB", "Cloud Computing", "Vercel", "Render", "Railway"],
    tools_libraries: ["Git", "GitHub Webhooks", "Gmail API", "REST APIs"],
  },
  experience_highlights: [
    "Software Development Intern @ Datatrack (Completed)",
    "Software Development Intern @ Quantumard (Completed)",
    "Founder @ EvolVIT Club (VIT Bhopal's 100th Official Club)",
    "IIT Patna NPTEL Elite Top 5% Certification",
  ],
};

export default function Skills() {
  const [viewMode, setViewMode] = useState<"visual" | "json">("visual");
  const [copied, setCopied] = useState(false);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(RAW_SKILLS_JSON, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 z-10">
      <Reveal>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                04 &bull; Technical Capabilities
              </span>
              <div className="h-[1px] w-12 bg-line" />
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-ivory tracking-tight">
              Skills &amp; Tech Ecosystem
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 rounded-xl border border-line bg-panel p-1.5 backdrop-blur-md">
            <button
              onClick={() => setViewMode("visual")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-sans text-xs transition-all ${
                viewMode === "visual"
                  ? "bg-accent-purple/20 text-accent-purple font-semibold border border-accent-purple/40"
                  : "text-muted hover:text-ivory font-medium"
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              <span>Visual Grid</span>
            </button>

            <button
              onClick={() => setViewMode("json")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-sans text-xs transition-all ${
                viewMode === "json"
                  ? "bg-accent-cyan/20 text-accent-cyan font-semibold border border-accent-cyan/40"
                  : "text-muted hover:text-ivory font-medium"
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>skills.json</span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Visual Grid View */}
      {viewMode === "visual" && (
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.id} delay={idx * 0.1} className="flex">
                <div className="glass-panel-interactive w-full rounded-2xl p-5 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="rounded-xl border border-line bg-panel-light p-2.5">
                          <Icon className={`h-5 w-5 ${cat.color}`} />
                        </div>
                        <h3 className="font-sans text-base sm:text-lg font-bold text-ivory">
                          {cat.title}
                        </h3>
                      </div>
                      <span className={`font-sans text-[10px] rounded-full border px-2.5 py-0.5 font-semibold ${cat.badgeColor}`}>
                        {cat.skills.length} Skills
                      </span>
                    </div>

                    <div className="mt-5 sm:mt-6 space-y-3">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="rounded-xl border border-line bg-panel-light/60 p-3 sm:p-3.5">
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-xs sm:text-sm font-bold text-ivory">
                              {skill.name}
                            </span>
                            <span className="font-sans text-[10px] font-semibold rounded bg-ink px-2 py-0.5 text-accent-purple border border-line">
                              {skill.level}
                            </span>
                          </div>
                          <p className="mt-1 text-[11px] sm:text-xs text-muted leading-normal">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      )}

      {/* JSON Viewer Mode */}
      {viewMode === "json" && (
        <Reveal delay={0.1} className="mt-8 sm:mt-10">
          <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-line relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
                <Terminal className="h-4 w-4" />
                <span>skills.json</span>
              </div>

              <button
                onClick={handleCopyJson}
                className="flex items-center gap-1.5 rounded-lg border border-line bg-panel-light px-3 py-1.5 font-mono text-xs text-muted hover:text-ivory hover:border-line-bright transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-accent-emerald" />
                    <span className="text-accent-emerald">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>
            </div>

            <pre className="mt-4 overflow-x-auto font-mono text-[11px] sm:text-xs text-accent-purple/90 p-3.5 sm:p-4 rounded-xl bg-ink/90 border border-line leading-relaxed max-h-[450px]">
              {JSON.stringify(RAW_SKILLS_JSON, null, 2)}
            </pre>
          </div>
        </Reveal>
      )}
    </section>
  );
}

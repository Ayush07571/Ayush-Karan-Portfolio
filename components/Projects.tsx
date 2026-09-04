"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import {
  ExternalLink,
  Bot,
  Workflow,
  ArrowRight,
  ShieldAlert,
  Code2,
  MailCheck,
  X,
  CheckCircle2,
  GitPullRequest,
  Lock,
} from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

interface Project {
  id: string;
  name: string;
  category: "ai" | "web";
  liveUrl?: string;
  githubUrl?: string;
  displayUrl?: string;
  image?: string;
  metrics: string;
  tags: string[];
  shortDesc: string;
  fullDesc: string;
  keyFeatures: string[];
  accentBorder: string;
  accentBadge: string;
  hasDiagram?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "susi-pizza",
    name: "Susi's Universe 🍕 — 3D Pizza Experience",
    category: "web",
    liveUrl: "https://susi-pizza-landing-page.vercel.app/",
    displayUrl: "susi-pizza-landing-page.vercel.app",
    image: "/susi.png",
    metrics: "Cinematic 3D Scroll • Live in Production",
    tags: ["Next.js 14", "React Three Fiber", "Three.js", "GSAP", "Lenis", "Framer Motion", "Zustand"],
    shortDesc:
      "A cinematic, scroll-driven 3D web application engineered for Susi Pizza in Ranchi, featuring R3F GLSL shaders, GSAP ScrollTrigger, and Lenis smooth scroll.",
    fullDesc:
      "Susi Pizza is an immersive web application designed for Ranchi's signature wood-fired pizza brand. Built with Next.js 14 and React Three Fiber, it features custom GLSL cheese drip shaders, interactive topping customizers, smooth Lenis scrolling, and responsive 2D/3D performance fallbacks.",
    keyFeatures: [
      "Custom React Three Fiber 3D scene & GLSL cheese drip texture shader",
      "GSAP ScrollTrigger & Lenis smooth scroll integration for cinematic section transitions",
      "Responsive device detection hook toggling 3D canvas on Desktop/Tablet & 2D fallback on Mobile",
      "Dynamic menu and store outlet showcase optimized for Vercel edge deployment",
    ],
    accentBorder: "hover:border-accent-amber/60",
    accentBadge: "bg-accent-amber/20 text-accent-amber border-accent-amber/30",
  },
  {
    id: "multi-agent-reviewer",
    name: "Multi-Agent Sequential PR Code Reviewer (n8n)",
    category: "ai",
    githubUrl: "https://github.com/Ayush07571/Multi-Agent-Github-Code-Reviewer",
    displayUrl: "n8n.workflow/multi-agent-reviewer",
    image: "/n8n.png",
    metrics: "3-Tier Routing &bull; 4-Stage AI Refinement Loop",
    tags: ["n8n", "OpenRouter", "Step-3.5-Flash", "Nvidia Nemotron", "GitHub API", "Gmail Approval"],
    shortDesc:
      "A high-fidelity GitHub PR reviewer built on n8n that utilizes a Smart Sequential Refinement Loop and 3-tier routing logic for open-source maintainers.",
    fullDesc:
      "Designed specifically for Open Source Maintainers and Student Contributors to scale mentorship and eliminate review bottlenecks. Features a 3-tier routing engine (handling small ≤20 diffs, standard 21-200 diffs, and massive >200 diffs) paired with a 4-stage sequential refinement loop and human-in-the-loop Gmail manual approval.",
    keyFeatures: [
      "Dynamic 3-Tier Routing (If1 & If2 Nodes): Small PRs Fast-Track, Standard PRs 4-Stage Loop, Massive PRs (>200) flagged for human review",
      "Stage 1: Initial Auditor (Step-3.5-Flash) identifying logic errors & security risks",
      "Stage 2: Critical Reviewer (Nvidia Nemotron-3) analyzing technical debt and gaps",
      "Stage 3: Synthesizer consolidating findings into clean, non-redundant feedback",
      "Stage 4: Polishing Agent (Nvidia Nemotron-12b) formatting a concise 3-4 line summary",
      "Human-in-the-Loop Gmail manual 'Yes/No' approval before posting inline GitHub PR comments",
    ],
    accentBorder: "hover:border-accent-cyan/60",
    accentBadge: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30",
    hasDiagram: true,
  },
  {
    id: "ai-worksheet",
    name: "AI Worksheet Generator (Pracup)",
    category: "ai",
    liveUrl: "https://pracup.co.in",
    displayUrl: "pracup.co.in",
    image: "/pracup.png",
    metrics: "Production-ready • In Active Use",
    tags: ["Next.js 14", "AI Generation", "Tailwind", "Vercel", "MongoDB"],
    shortDesc:
      "A scalable Next.js application integrating AI-driven content generation for automated, personalized worksheet creation.",
    fullDesc:
      "Pracup is an AI-powered education platform engineered to eliminate manual worksheet preparation for teachers and students. Powered by Next.js 14 and custom prompt pipelines, it dynamically converts topic inputs into structured, printable, and exportable worksheets with solution keys.",
    keyFeatures: [
      "Dynamic prompt-to-worksheet generation engine with custom topic difficulty sliders",
      "Instant PDF/Print exporter maintaining clean typography and layout formatting",
      "Integrated testing flow for real-time user feedback ahead of public launch",
      "Responsive interactive product showcase built with Next.js",
    ],
    accentBorder: "hover:border-accent-purple/60",
    accentBadge: "bg-accent-purple/20 text-accent-purple border-accent-purple/30",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeDiagramStep, setActiveDiagramStep] = useState(1);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 z-10">
      <Reveal>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                03 &bull; Featured Systems &amp; Projects
              </span>
              <div className="h-[1px] w-12 bg-line" />
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-ivory tracking-tight">
              Selected Work &amp; AI Systems
            </h2>
          </div>
        </div>
      </Reveal>

      {/* Projects Cards Grid (Directly Rendered) */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.1} className="flex">
            <div
              className={`glass-panel-interactive w-full rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-line ${project.accentBorder}`}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className={`font-sans text-[11px] rounded-full border px-3 py-0.5 font-semibold ${project.accentBadge}`}>
                    {project.metrics}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-lg border border-line bg-panel-light p-2 text-muted hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                        title="Live Site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-lg border border-line bg-panel-light p-2 text-muted hover:text-ivory hover:border-line-bright transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 text-base sm:text-xl font-bold text-ivory group-hover:text-accent-purple transition-colors">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Browser Window Frame with Screenshot */}
                {project.image && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-line bg-ink/90 shadow-glass group/frame">
                    <div className="flex items-center justify-between border-b border-line bg-panel-solid px-3 py-1.5 font-mono text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-md border border-line bg-ink px-2.5 py-0.5 text-[10px] text-muted max-w-[180px] w-full justify-center truncate">
                        <Lock className="h-3 w-3 text-accent-emerald shrink-0" />
                        <span className="truncate">{project.displayUrl || "https://dev.local"}</span>
                      </div>
                      <div className="w-8" />
                    </div>
                    <div className="relative aspect-video w-full overflow-hidden bg-ink/80">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover object-top group-hover/frame:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                )}

                {project.hasDiagram && (
                  <div className="mt-4 rounded-xl border border-accent-cyan/30 bg-accent-cyan/5 p-3 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-xs text-accent-cyan font-mono">
                      <Workflow className="h-4 w-4 shrink-0" />
                      <span>Smart Pipeline Flow Architecture Included</span>
                    </div>
                    <span className="font-mono text-[10px] text-ivory underline">View Flow &rarr;</span>
                  </div>
                )}
              </div>

              <div>
                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-line">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-line bg-ink/60 px-2 py-0.5 font-sans text-[10px] sm:text-[11px] font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between font-sans text-xs text-accent-purple font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View Project Details</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>


      {/* Interactive Architecture Diagram Section for Multi-Agent Code Reviewer */}
      <Reveal delay={0.3} className="mt-10 sm:mt-14">
        <div className="glass-panel rounded-2xl p-5 sm:p-7 border border-accent-cyan/30 relative overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-3 border-b border-line pb-4">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-accent-cyan shrink-0" />
              <h3 className="font-mono text-sm sm:text-base font-bold text-ivory">
                Architecture Spotlight: Multi-Agent PR Review Flow (n8n)
              </h3>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-muted">Smart Sequential Refinement Loop</span>
          </div>

          {/* Interactive Steps Selector */}
          <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {[
              { step: 1, label: "3-Tier Routing", icon: GitPullRequest, title: "Dynamic Routing (If1 & If2)", color: "text-accent-purple" },
              { step: 2, label: "Initial Audit", icon: Code2, title: "Step-3.5-Flash Auditor", color: "text-accent-cyan" },
              { step: 3, label: "Nemotron Review", icon: ShieldAlert, title: "Nemotron-3 Debt Analysis", color: "text-accent-emerald" },
              { step: 4, label: "Gmail Approval", icon: MailCheck, title: "Human Approval & Delivery", color: "text-accent-amber" },
            ].map((s) => {
              const Icon = s.icon;
              const isActive = activeDiagramStep === s.step;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveDiagramStep(s.step)}
                  className={`rounded-xl border p-3 sm:p-4 text-left transition-all ${
                    isActive
                      ? "border-accent-cyan bg-accent-cyan/15 shadow-glow-cyan"
                      : "border-line bg-panel-light/50 hover:border-line-bright"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-muted">STAGE 0{s.step}</span>
                    <Icon className={`h-4 w-4 ${s.color} shrink-0`} />
                  </div>
                  <p className="mt-1.5 sm:mt-2 font-mono text-xs sm:text-sm font-semibold text-ivory">{s.label}</p>
                </button>
              );
            })}
          </div>

          {/* Step Detail Explanation Card */}
          <div className="mt-4 sm:mt-5 rounded-xl border border-line bg-ink/70 p-4 sm:p-5">
            {activeDiagramStep === 1 && (
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-accent-purple font-semibold uppercase">Stage 01: Dynamic 3-Tier Routing Logic (If1 &amp; If2 Nodes)</span>
                <h4 className="mt-1 text-sm sm:text-base font-bold text-ivory">Massive vs Standard vs Small PR Route</h4>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  • <strong>Massive PRs (&gt;200 Changes):</strong> Flagged automatically for human intervention with <code className="text-accent-purple bg-ink px-1 py-0.5 rounded">waitingForHuman</code> label.<br />
                  • <strong>Standard PRs (21–200 Changes):</strong> Triggers full 4-Stage Sequential AI Loop.<br />
                  • <strong>Small PRs (&le;20 Changes):</strong> Routed to Fast-Track Auditor (Agent 4) for quick 1-sentence verification.
                </p>
              </div>
            )}
            {activeDiagramStep === 2 && (
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-accent-cyan font-semibold uppercase">Stage 02: Initial Auditor (AI Agent 1)</span>
                <h4 className="mt-1 text-sm sm:text-base font-bold text-ivory">Logic &amp; Security Audit (Step-3.5-Flash)</h4>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  Performs the initial deep pass using Step-3.5-Flash to spot logic errors, boundary edge cases, syntax anti-patterns, and vulnerability risks across modified files.
                </p>
              </div>
            )}
            {activeDiagramStep === 3 && (
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-accent-emerald font-semibold uppercase">Stage 03: Critical Reviewer &amp; Synthesizer</span>
                <h4 className="mt-1 text-sm sm:text-base font-bold text-ivory">Technical Debt &amp; Polishing (Nvidia Nemotron)</h4>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  • <strong>Critical Reviewer:</strong> Uses Nvidia Nemotron-3 to identify architectural gaps.<br />
                  • <strong>Synthesizer:</strong> Consolidates findings without redundancy.<br />
                  • <strong>Polishing Agent:</strong> Uses Nvidia Nemotron-12b to format a humanized, concise 3-4 line review.
                </p>
              </div>
            )}
            {activeDiagramStep === 4 && (
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-accent-amber font-semibold uppercase">Stage 04: Reliability &amp; Human-in-the-Loop Approval</span>
                <h4 className="mt-1 text-sm sm:text-base font-bold text-ivory">Gmail Approval &bull; Universal Metadata</h4>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  Before posting to GitHub, the workflow emails finalized suggestions via Gmail for manual <strong>Yes/No</strong> approval. Uses dynamic metadata expressions and safe-string diff cleaning for universal repository compatibility.
                </p>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      {/* Project Detail Deep-Dive Modal Drawer */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/80 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel w-full max-w-2xl rounded-2xl p-5 sm:p-8 border border-line shadow-glass relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 rounded-full border border-line bg-panel-light p-2 text-muted hover:text-ivory"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="pr-10">
              <span className={`font-mono text-xs rounded-full border px-3 py-0.5 font-medium ${selectedProject.accentBadge}`}>
                {selectedProject.metrics}
              </span>

              <h3 className="mt-3 text-xl sm:text-3xl font-extrabold text-ivory">
                {selectedProject.name}
              </h3>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-ivory/90 leading-relaxed">
              {selectedProject.fullDesc}
            </p>

            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent-cyan font-bold">
                Key Engineering Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {selectedProject.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                    <CheckCircle2 className="h-4 w-4 text-accent-purple shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-line">
              {selectedProject.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-line bg-panel-light px-4 py-2.5 font-mono text-xs text-ivory hover:border-line-bright"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub Repo</span>
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-indigo-600 px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-glow hover:scale-[1.02] transition-all"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

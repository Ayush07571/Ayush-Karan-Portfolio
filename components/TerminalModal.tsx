"use client";

import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { X, Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

const RESUME_URL = "/resume.pdf";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      cmd: "system --init",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-accent-cyan font-bold">AK-OS v2.4 (Interactive Shell) [Cloud &amp; AI Node]</p>
          <p className="text-muted">Type <span className="text-accent-purple font-bold">help</span> or click quick actions below to inspect profile.</p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const runCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    let response: React.ReactNode;

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1.5 text-xs text-muted">
            <p className="text-ivory font-bold">Available Commands:</p>
            <p><span className="text-accent-purple font-mono font-bold">bio</span> — Summary &amp; Background overview</p>
            <p><span className="text-accent-cyan font-mono font-bold">experience</span> — Software Development Internships (Datatrack &amp; Quantumard)</p>
            <p><span className="text-accent-amber font-mono font-bold">leadership</span> — EvolVIT Founder &amp; FinTech Co-Lead</p>
            <p><span className="text-accent-amber font-mono font-bold">achievements</span> — Hackathons, NPTEL Elite &amp; Badges</p>
            <p><span className="text-accent-purple font-mono font-bold">education</span> — B.Tech CSE (VIT Bhopal, CGPA 9.10), Schooling</p>
            <p><span className="text-accent-cyan font-mono font-bold">skills</span> — Technical Stack (Languages, Frameworks, AI &amp; Cloud)</p>
            <p><span className="text-accent-emerald font-mono font-bold">projects</span> — Featured web apps &amp; n8n AI systems</p>
            <p><span className="text-accent-amber font-mono font-bold">contact</span> — Email, LinkedIn &amp; GitHub links</p>
            <p><span className="text-accent-coral font-mono font-bold">resume</span> — Open Resume (PDF)</p>
            <p><span className="text-accent-purple font-mono font-bold">hire</span> — Recruit Ayush Karan</p>
            <p><span className="text-muted font-mono font-bold">clear</span> — Clear terminal screen</p>
          </div>
        );
        break;

      case "bio":
        response = (
          <div className="space-y-1 text-xs">
            <p className="text-ivory font-bold">Ayush Karan — Full-Stack Engineer &amp; Aspiring Cloud Architect</p>
            <p className="text-muted">B.Tech CSE (Cloud Computing &amp; Automation) student at VIT Bhopal with 6+ months across two full-stack internships, shipping AI-powered web applications with Next.js, React, and n8n.</p>
            <p className="text-accent-purple font-mono">Founder &amp; President of EvolVIT, VIT Bhopal&apos;s 100th official university club.</p>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="space-y-2.5 text-xs">
            <div>
              <p className="text-accent-purple font-bold">1. Software Development Intern — Datatrack <span className="text-muted font-normal">(Mar &apos;26 – Jun &apos;26)</span></p>
              <p className="text-muted">• Building an AI-powered worksheet generation platform (pracup.co.in) that automates personalized worksheet creation, currently in active testing and refinement ahead of public launch.</p>
              <p className="text-muted">• Developed responsive landing pages and interactive 3D web experiences using Next.js and Speckit for client-facing product pages.</p>
            </div>
            <div>
              <p className="text-accent-cyan font-bold">2. Software Development Intern — Quantumard <span className="text-muted font-normal">(Dec &apos;25 – Feb &apos;26)</span></p>
              <p className="text-muted">• Built a Role-Based Project Management System with secure role-based access control, task tracking, and multi-user collaboration using Next.js and MongoDB.</p>
              <p className="text-muted">• Participated in requirement analysis, testing, and deployment of scalable web applications across team project pipelines.</p>
            </div>
          </div>
        );
        break;

      case "leadership":
      case "extracurricular":
      case "clubs":
        response = (
          <div className="space-y-2.5 text-xs">
            <div>
              <p className="text-accent-purple font-bold">1. Founder &amp; President — EvolVIT Club, VIT Bhopal University <span className="text-muted font-normal">(Oct &apos;25 – Present)</span></p>
              <p className="text-muted">• Founded VIT Bhopal&apos;s 100th official club, connecting students with industry through internships and live projects.</p>
              <p className="text-muted">• Launched the EvolVIT Internship Program and led the Idea2Industry initiative, linking students with startups, ideathons, and industrial visits.</p>
            </div>
            <div>
              <p className="text-accent-cyan font-bold">2. Tech Team Co-Lead — FinTech Club, VIT Bhopal University <span className="text-muted font-normal">(Nov &apos;25 – Present)</span></p>
              <p className="text-muted">• Promoted from Core Member (Nov &apos;24 – Nov &apos;25) to Tech Team Co-Lead based on technical contributions and project leadership.</p>
              <p className="text-muted">• Mentor club members and lead development of FinTech web projects, ensuring code quality and timely delivery.</p>
            </div>
          </div>
        );
        break;

      case "achievements":
      case "awards":
      case "honors":
        response = (
          <div className="space-y-1.5 text-xs">
            <p className="text-accent-amber font-bold">🏆 Winner — AI-ZEN Hackathon (Google Crowdsource)</p>
            <p className="text-muted">First place team award for constructing AI applications leveraging Google Crowdsource API.</p>
            
            <p className="text-accent-purple font-bold mt-2">🚀 Founder — EvolVIT, VIT Bhopal&apos;s 100th Official Club</p>
            <p className="text-muted">Established university club connecting student developers to industry projects.</p>

            <p className="text-accent-cyan font-bold mt-2">📜 NPTEL Elite — Cloud Computing &amp; Distributed Systems (IIT Patna)</p>
            <p className="text-muted">Elite certification with 90% score, placed in Top 5% nationally.</p>

            <p className="text-accent-coral font-bold mt-2">🔥 Hacktoberfest 2024</p>
            <p className="text-muted">Successfully completed all four open-source contribution levels.</p>

            <p className="text-accent-emerald font-bold mt-2">⭐ HackerRank — 3★ Python Badge</p>
            <p className="text-muted">Verified specialist rating in Python programming.</p>
          </div>
        );
        break;

      case "education":
        response = (
          <div className="space-y-2 text-xs">
            <div>
              <p className="text-accent-purple font-bold">1. VIT Bhopal University, Sehore <span className="text-muted font-normal">(Sep &apos;24 – 2028)</span></p>
              <p className="text-ivory">B.Tech CSE (Cloud Computing &amp; Automation) — <span className="text-accent-cyan font-mono font-bold">CGPA: 9.10</span></p>
            </div>
            <div>
              <p className="text-accent-cyan font-bold">2. DAV Kapildev Public School, Ranchi <span className="text-muted font-normal">(2021 – 2023)</span></p>
              <p className="text-muted">Higher Secondary (CBSE) — <span className="text-ivory font-mono font-bold">84%</span></p>
            </div>
            <div>
              <p className="text-accent-amber font-bold">3. St. Francis School, Ranchi <span className="text-muted font-normal">(2009 – 2021)</span></p>
              <p className="text-muted">High School (ICSE) — <span className="text-ivory font-mono font-bold">82.4%</span></p>
            </div>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-accent-purple font-bold">// Languages:</p>
            <p className="text-ivory">C++, Java, Python, JavaScript, TypeScript, HTML, CSS</p>
            <p className="text-accent-cyan font-bold mt-2">// Frameworks &amp; Libraries:</p>
            <p className="text-ivory">React.js, Next.js, React Three Fiber (R3F), Three.js, Node.js, Tailwind CSS</p>
            <p className="text-accent-emerald font-bold mt-2">// AI &amp; Automation:</p>
            <p className="text-ivory">n8n (workflow automation), AI agent orchestration, prompt engineering, Speckit (AI-assisted spec-driven development)</p>
            <p className="text-accent-amber font-bold mt-2">// Tools &amp; Platforms:</p>
            <p className="text-ivory">Git, GitHub, Vercel, Render, Railway, MongoDB</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-2 text-xs">
            <div>
              <p className="text-accent-amber font-bold">1. Susi&apos;s Universe 🍕 — 3D Pizza Experience</p>
              <p className="text-muted">
                Cinematic Next.js 14 &amp; R3F scroll-driven app for Ranchi&apos;s signature wood-fired pizza brand. (
                <a href="https://susi-pizza-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent-cyan underline">
                  susi-pizza-landing-page.vercel.app
                </a>)
              </p>
            </div>
            <div>
              <p className="text-accent-cyan font-bold">2. Multi-Agent Sequential PR Code Reviewer (n8n)</p>
              <p className="text-muted">
                Sequential 4-stage AI agent flow reviewing GitHub PRs with 3-tier routing &amp; Gmail approval. (
                <a href="https://github.com/Ayush07571/Multi-Agent-Github-Code-Reviewer" target="_blank" rel="noopener noreferrer" className="text-accent-purple underline">
                  GitHub Repo
                </a>)
              </p>
            </div>
            <div>
              <p className="text-accent-purple font-bold">3. AI Worksheet Generator (pracup.co.in)</p>
              <p className="text-muted">
                Next.js 14 automated worksheet creation app in active production use. (
                <a href="https://pracup.co.in" target="_blank" rel="noopener noreferrer" className="text-accent-cyan underline">
                  pracup.co.in
                </a>)
              </p>
            </div>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-ivory">Email: <a href="mailto:ayushkaran328@gmail.com" className="text-accent-cyan underline">ayushkaran328@gmail.com</a></p>
            <p className="text-ivory">GitHub: <a href="https://github.com/Ayush07571" target="_blank" className="text-accent-purple underline">github.com/Ayush07571</a></p>
            <p className="text-ivory">LinkedIn: <a href="https://linkedin.com/in/ayush-karan" target="_blank" className="text-accent-cyan underline">linkedin.com/in/ayush-karan</a></p>
          </div>
        );
        break;

      case "resume":
        window.open(RESUME_URL, "_blank");
        response = (
          <p className="text-xs text-accent-cyan">Opening Resume PDF in new tab...</p>
        );
        break;

      case "hire":
      case "sudo hire":
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        response = (
          <div className="space-y-1.5 text-xs">
            <p className="text-accent-emerald font-bold text-sm">🎉 Excellent Choice!</p>
            <p className="text-ivory">Ayush Karan is available for Software Development, Full-Stack, Cloud Architecture &amp; n8n AI Agent roles.</p>
            <p className="text-accent-cyan font-mono">Direct Email: ayushkaran328@gmail.com</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        response = (
          <p className="text-xs text-red-400">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-accent-purple font-bold">help</span> for valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output: response }]);
    setInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-2xl rounded-2xl border border-line shadow-glass overflow-hidden flex flex-col h-[82vh] max-h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-line px-4 sm:px-5 py-3 bg-panel-solid/90">
          <div className="flex items-center gap-2">
            <TerminalIcon className="h-4 w-4 text-accent-purple shrink-0" />
            <span className="font-mono text-xs font-bold text-ivory">AK-OS Console</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-line bg-panel-light p-1 text-muted hover:text-ivory"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Action Chips */}
        <div className="flex items-center gap-2 overflow-x-auto p-2.5 sm:p-3 border-b border-line bg-ink/50 no-scrollbar font-mono text-[11px]">
          {["help", "bio", "experience", "leadership", "achievements", "education", "skills", "projects", "contact", "resume", "hire", "clear"].map((c) => (
            <button
              key={c}
              onClick={() => runCommand(c)}
              className="rounded-lg border border-line bg-panel-light px-2.5 py-1 text-muted hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors shrink-0"
            >
              $ {c}
            </button>
          ))}
        </div>

        {/* Terminal Output Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 font-mono space-y-4 bg-ink/90">
          {history.map((h, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-accent-purple font-bold">visitor@ak-os</span>
                <span className="text-muted">:~$</span>
                <span className="text-ivory">{h.cmd}</span>
              </div>
              <div className="pl-3 sm:pl-4 border-l border-line/40">{h.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input Prompt Form */}
        <form onSubmit={handleFormSubmit} className="flex items-center border-t border-line bg-panel-solid px-3.5 sm:px-4 py-2.5 sm:py-3">
          <span className="font-mono text-xs text-accent-purple font-bold mr-2">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command ('help', 'bio', 'experience', 'skills')..."
            className="flex-1 bg-transparent font-mono text-base sm:text-xs text-ivory focus:outline-none placeholder:text-muted-dark"
          />
          <button type="submit" className="text-muted hover:text-accent-cyan p-1">
            <CornerDownLeft className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

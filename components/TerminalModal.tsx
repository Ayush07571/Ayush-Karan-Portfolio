"use client";

import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { X, Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/1S03oJ8WHTO-VegBR1_LJT9DTE_zNIuEw/view?usp=sharing";

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
            <p><span className="text-accent-purple font-mono">bio</span> — Brief about Ayush Karan &amp; Cloud background</p>
            <p><span className="text-accent-cyan font-mono font-bold">experience</span> — Completed internships &amp; software history</p>
            <p><span className="text-accent-cyan font-mono font-bold">skills</span> — Full tech stack overview</p>
            <p><span className="text-accent-emerald font-mono">projects</span> — Key projects &amp; n8n AI systems</p>
            <p><span className="text-accent-amber font-mono font-bold">contact</span> / <span className="text-accent-amber font-mono">phone</span> — Phone (+91 8873718596) &amp; Email</p>
            <p><span className="text-accent-coral font-mono">resume</span> — Open Google Drive resume</p>
            <p><span className="text-accent-purple font-mono font-bold">hire</span> — Recruit Ayush Karan</p>
            <p><span className="text-muted font-mono font-bold">clear</span> — Clear terminal screen</p>
          </div>
        );
        break;

      case "bio":
        response = (
          <div className="space-y-1 text-xs">
            <p className="text-ivory font-bold">Ayush Karan — Full-Stack Engineer &amp; Aspiring Cloud Architect</p>
            <p className="text-muted">B.Tech CSE Senior (Cloud Computing &amp; Automation) at VIT Bhopal.</p>
            <p className="text-muted">Completed Software Internships @ Datatrack (pracup.co.in) &amp; Quantumard.</p>
            <p className="text-accent-purple font-mono">Founder of EvolVIT Club (VIT Bhopal&apos;s 100th Official University Club).</p>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="space-y-2 text-xs">
            <div>
              <p className="text-accent-purple font-bold">1. Software Development Intern @ Datatrack (pracup.co.in) [Completed]</p>
              <p className="text-muted">• Architected AI-powered worksheet generation platform &amp; Next.js 14 web app.</p>
            </div>
            <div>
              <p className="text-accent-cyan font-bold">2. Software Development Intern @ Quantumard [Completed]</p>
              <p className="text-muted">• Engineered RBAC project management tool with MongoDB &amp; REST APIs.</p>
            </div>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-accent-purple font-bold">// Languages:</p>
            <p className="text-ivory">JavaScript (ES6+), C++, Python (3★ Badge), Java, HTML5/CSS3</p>
            <p className="text-accent-cyan font-bold mt-2">// Web &amp; Cloud Frameworks:</p>
            <p className="text-ivory">Next.js 14, React.js, Node.js, Express, Cloud Infrastructure, Tailwind CSS, REST APIs</p>
            <p className="text-accent-emerald font-bold mt-2">// AI &amp; Cloud Systems:</p>
            <p className="text-ivory">n8n Multi-Agent Sequential AI Reviewers, OpenRouter, MongoDB, Vercel, Railway</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-2 text-xs">
            <div>
              <p className="text-accent-cyan font-bold">1. Multi-Agent Code Reviewer (n8n)</p>
              <p className="text-muted">Sequential 4-stage AI agent flow reviewing GitHub PRs with 3-tier routing &amp; Gmail approval.</p>
            </div>
            <div>
              <p className="text-accent-purple font-bold">2. AI Worksheet Generator (pracup.co.in)</p>
              <p className="text-muted">Next.js 14 automated worksheet creation app in active production use.</p>
            </div>
          </div>
        );
        break;

      case "contact":
      case "phone":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-accent-amber font-bold">Phone / WhatsApp: +91 8873718596</p>
            <p className="text-ivory">Email: <a href="mailto:ayushkaran328@gmail.com" className="text-accent-cyan underline">ayushkaran328@gmail.com</a></p>
            <p className="text-ivory">GitHub: <a href="https://github.com/Ayush07571" target="_blank" className="text-accent-purple underline">github.com/Ayush07571</a></p>
            <p className="text-ivory">LinkedIn: <a href="https://linkedin.com/in/ayush-karan" target="_blank" className="text-accent-cyan underline">linkedin.com/in/ayush-karan</a></p>
          </div>
        );
        break;

      case "resume":
        window.open(RESUME_URL, "_blank");
        response = (
          <p className="text-xs text-accent-cyan">Opening Google Drive resume in new tab...</p>
        );
        break;

      case "hire":
      case "sudo hire":
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        response = (
          <div className="space-y-1.5 text-xs">
            <p className="text-accent-emerald font-bold text-sm">🎉 Excellent Choice!</p>
            <p className="text-ivory">Ayush Karan is available for Software Development, Full-Stack, Cloud Architecture &amp; n8n AI Agent roles.</p>
            <p className="text-accent-amber font-mono font-bold">Direct Phone: +91 8873718596</p>
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
          {["help", "bio", "experience", "skills", "projects", "contact", "phone", "resume", "hire", "clear"].map((c) => (
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

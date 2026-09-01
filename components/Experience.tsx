"use client";

import Reveal from "./Reveal";
import { Calendar, CheckCircle, ExternalLink } from "lucide-react";

interface Job {
  role: string;
  company: string;
  url?: string;
  period: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  bullets: string[];
  tags: string[];
}

const JOBS: Job[] = [
  {
    role: "Software Development Intern",
    company: "Datatrack",
    url: "https://pracup.co.in",
    period: "Internship Completed",
    badge: "Completed",
    badgeColor: "bg-accent-emerald/20 text-accent-emerald border-accent-emerald/40",
    accentColor: "border-accent-emerald text-accent-emerald",
    bullets: [
      "Architected and built an AI-powered worksheet generation platform (pracup.co.in) automating personalized worksheet creation from user prompts.",
      "Engineered high-conversion responsive landing pages and interactive web features using Next.js for product deployment.",
      "Integrated automated content workflows, accelerating worksheet generation and export flows for active platform users.",
    ],
    tags: ["Next.js 14", "React", "AI Integration", "Tailwind CSS", "MongoDB"],
  },
  {
    role: "Software Development Intern",
    company: "Quantumard",
    period: "Completed",
    badge: "Completed",
    badgeColor: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/40",
    accentColor: "border-accent-cyan text-accent-cyan",
    bullets: [
      "Built a robust, role-based project management system with fine-grained access control, real-time task tracking, and team collaboration features.",
      "Implemented secure MongoDB schemas and REST APIs using Next.js Server Actions and JWT-based authorization.",
      "Participated end-to-end in sprint requirement analysis, integration testing, and production deployment across team pipelines.",
    ],
    tags: ["Next.js", "Node.js", "MongoDB", "RBAC Security", "REST APIs", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 z-10">
      <Reveal>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            // 02. Professional Experience
          </span>
          <div className="h-[1px] flex-1 bg-line" />
        </div>
        <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-ivory tracking-tight">
          Where I&apos;ve Engineered &amp; Delivered
        </h2>
      </Reveal>

      {/* Timeline List */}
      <div className="mt-10 sm:mt-12 relative border-l-2 border-line/60 ml-3 sm:ml-8 space-y-8 sm:space-y-12 pl-5 sm:pl-10">
        {JOBS.map((job, idx) => (
          <Reveal key={job.company} delay={idx * 0.12} className="relative group">
            {/* Timeline Node Point */}
            <div
              className={`absolute -left-[1.7rem] sm:-left-[3.05rem] top-1.5 h-5 w-5 rounded-full border-2 bg-ink shadow-glow transition-transform group-hover:scale-125 ${job.accentColor}`}
            >
              <div className="h-full w-full rounded-full bg-current opacity-40 animate-pulse" />
            </div>

            {/* Main Card */}
            <div className="glass-panel-interactive rounded-2xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-accent-purple shrink-0" />
                      {job.period}
                    </span>
                    <span className={`font-mono text-[10px] rounded-full border px-2.5 py-0.5 font-medium ${job.badgeColor}`}>
                      {job.badge}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg sm:text-2xl font-bold text-ivory flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span>{job.role}</span>
                    <span className="text-muted font-normal text-sm sm:text-lg">
                      @ {job.company}
                    </span>
                  </h3>
                </div>

                {job.url && (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-line bg-panel-light px-3 py-1.5 font-mono text-xs text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/10 transition-all w-fit"
                  >
                    <span>pracup.co.in</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Bullet Points */}
              <ul className="mt-5 sm:mt-6 space-y-3">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted leading-relaxed">
                    <CheckCircle className="h-4 w-4 text-accent-purple shrink-0 mt-0.5" />
                    <span className="text-ivory/90">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 pt-4 border-t border-line">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-line bg-ink/70 px-2.5 py-1 font-mono text-[11px] text-muted hover:text-ivory hover:border-accent-purple/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import Reveal from "./Reveal";
import { Trophy, Award, Star, Flame } from "lucide-react";

interface Achievement {
  title: string;
  issuer: string;
  badge: string;
  color: string;
  icon: any;
  desc: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Winner — AI-ZEN Hackathon",
    issuer: "Google Crowdsource",
    badge: "1st Place Winner",
    color: "text-accent-amber border-accent-amber/40 bg-accent-amber/15",
    icon: Trophy,
    desc: "First place team award for constructing AI applications leveraging Google Crowdsource API.",
  },
  {
    title: "NPTEL Elite Certification",
    issuer: "IIT Patna",
    badge: "Top 5% Score",
    color: "text-accent-purple border-accent-purple/40 bg-accent-purple/15",
    icon: Award,
    desc: "Elite certificate in Cloud Computing & Distributed Systems from IIT Patna with top 5% national ranking.",
  },
  {
    title: "Founder — EvolVIT Club",
    issuer: "VIT Bhopal University",
    badge: "100th Official Club",
    color: "text-accent-cyan border-accent-cyan/40 bg-accent-cyan/15",
    icon: Star,
    desc: "Established the university's 100th official club, creating live tech projects for student developers.",
  },
  {
    title: "Hacktoberfest Contributor",
    issuer: "Open Source",
    badge: "All 4 Levels Merged",
    color: "text-accent-coral border-accent-coral/40 bg-accent-coral/15",
    icon: Flame,
    desc: "Successfully merged qualifying open-source pull requests across all 4 contribution tiers.",
  },
];

const TICKER_ITEMS = [
  "Winner — AI-ZEN Hackathon (Google Crowdsource)",
  "IIT Patna NPTEL Elite — Cloud Computing & Distributed Systems (Top 5%)",
  "Founder — EvolVIT, VIT Bhopal's 100th Official Club",
  "Hacktoberfest Open Source Contributor — All 4 Levels Merged",
  "HackerRank — 3★ Python Specialist Badge",
];

export default function Achievements() {
  const marqueeList = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section id="achievements" className="relative py-20 border-y border-line bg-panel-solid/50 z-10 overflow-hidden">
      {/* Marquee Banner */}
      <div className="no-scrollbar overflow-hidden py-4 border-b border-line bg-ink/60">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {marqueeList.map((item, i) => (
            <span key={i} className="flex items-center gap-3 font-mono text-xs sm:text-sm text-muted">
              <span className="text-accent-purple animate-pulse">◆</span>
              <span className="text-ivory font-medium">{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16">
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
              // Honors &amp; Certifications
            </span>
            <div className="h-[1px] flex-1 bg-line" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ivory tracking-tight">
            Recognitions &amp; Achievements
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.1} className="flex">
                <div className="glass-panel-interactive w-full rounded-2xl p-6 border border-line flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl border ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] text-muted border border-line px-2 py-0.5 rounded">
                        {item.issuer}
                      </span>
                    </div>

                    <h3 className="mt-4 font-mono text-base font-bold text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line">
                    <span className={`inline-block font-mono text-[10px] rounded-full border px-2.5 py-0.5 ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

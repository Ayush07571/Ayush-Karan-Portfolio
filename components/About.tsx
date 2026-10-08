"use client";

import Reveal from "./Reveal";
import { Users, Cpu, GraduationCap, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 z-10">
      <Reveal>
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-cyan">
            01 &bull; About &amp; Background
          </span>
          <div className="h-[1px] flex-1 bg-line" />
        </div>
        <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-ivory tracking-tight">
          Architecting Cloud Systems &amp; AI Automation
        </h2>
      </Reveal>

      {/* Bento Grid */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1: Main Story Bio (Span 8) */}
        <Reveal delay={0.08} className="md:col-span-8 flex">
          <div className="glass-panel-interactive w-full rounded-2xl p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 h-32 w-32 bg-accent-purple/10 blur-3xl pointer-events-none rounded-full" />
            
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel-light px-3 py-1 font-sans text-xs font-semibold text-accent-purple w-fit">
                  <GraduationCap className="h-3.5 w-3.5 shrink-0" />
                  <span>B.Tech CSE &bull; Cloud &amp; Automation &apos;26</span>
                </span>
                <span className="font-sans text-xs font-medium text-muted">VIT Bhopal University</span>
              </div>

              <p className="mt-5 text-base sm:text-xl leading-relaxed text-ivory font-normal">
                I am a Full-Stack Engineer, Aspiring Cloud Architect, and Computer Science student at VIT Bhopal specializing in Cloud Computing &amp; Automation.
              </p>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted leading-relaxed">
                With experience across three internships at Ripplica (Web Dev &amp; SEO Intern), Datatrack (<a href="https://pracup.co.in" target="_blank" rel="noopener noreferrer" className="text-accent-cyan underline hover:text-accent-purple transition-colors font-medium">pracup.co.in</a>), and Quantumard,
                I build production-grade Next.js/React applications, SEO-optimized client websites, custom n8n automation workflows, and agentic AI pipelines.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 pt-4 border-t border-line">
              <span className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-sans text-[11px] font-medium text-muted">
                Web Dev &amp; SEO
              </span>
              <span className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-sans text-[11px] font-medium text-muted">
                Next.js &amp; React
              </span>
              <span className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-sans text-[11px] font-medium text-muted">
                SSG / SSR
              </span>
              <span className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-sans text-[11px] font-medium text-muted">
                n8n AI Agents
              </span>
              <span className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-sans text-[11px] font-medium text-muted">
                Speckit
              </span>
              <span className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-sans text-[11px] font-medium text-muted">
                Cloud &amp; MongoDB
              </span>
            </div>
          </div>
        </Reveal>

        {/* Card 2: Profile Photo Card (Span 4) */}
        <Reveal delay={0.14} className="md:col-span-4 flex">
          <div className="glass-panel-interactive w-full rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-accent-purple/70 bg-panel-light shadow-glow animate-border-glow group-hover:scale-105 transition-transform duration-300">
              <img
                src="/profile.jpg"
                alt="Ayush Karan"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-4 font-sans text-base font-bold text-ivory">
              Ayush Karan
            </h3>
            <p className="mt-1 font-sans text-xs text-accent-cyan font-semibold">
              Full-Stack &amp; AI Automation Engineer
            </p>

            <div className="mt-4 w-full rounded-xl border border-line bg-ink/50 p-3 text-left space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-purple shrink-0" />
                <span>Web Dev &amp; SEO Intern @ Ripplica</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-emerald shrink-0" />
                <span>Ex-Intern @ Datatrack &amp; Quantumard</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan shrink-0" />
                <span>B.Tech Cloud Computing &amp; Automation</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card 3: Leadership Spotlight (Span 6) */}
        <Reveal delay={0.2} className="md:col-span-6">
          <div className="glass-panel-interactive h-full w-full rounded-2xl p-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs text-accent-purple font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  Campus Leadership
                </span>
                <span className="font-sans text-[11px] font-medium text-muted">VIT Bhopal</span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-line bg-panel-light/70 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="font-sans text-sm font-bold text-ivory">Tech Co-Lead &amp; Founder &bull; EvolVIT Club</h4>
                    <span className="font-sans text-[10px] font-semibold rounded bg-accent-purple/20 px-2 py-0.5 text-accent-purple">100th Official Club</span>
                  </div>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    Founded VIT Bhopal&apos;s 100th official club. Currently Tech Team Co-Lead mentoring members on web &amp; automation projects; launched EvolVIT Internship Program &amp; Idea2Industry initiative.
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-panel-light/70 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="font-sans text-sm font-bold text-ivory">Tech Team Co-Lead &bull; FinTech Club</h4>
                    <span className="font-sans text-[10px] font-semibold rounded bg-accent-cyan/20 px-2 py-0.5 text-accent-cyan">Promoted</span>
                  </div>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    Promoted from Core Member to Tech Team Co-Lead based on technical contributions; mentoring members and leading FinTech web projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card 4: Quick Metrics & Core Focus (Span 6) */}
        <Reveal delay={0.26} className="md:col-span-6 flex">
          <div className="glass-panel-interactive w-full rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs text-accent-emerald font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5" />
                Technical Specializations
              </span>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-panel-light/70 p-3.5 sm:p-4">
                  <p className="font-sans text-xl sm:text-2xl font-extrabold text-accent-purple">01</p>
                  <p className="mt-1 font-sans text-sm font-bold text-ivory">Full-Stack Web</p>
                  <p className="mt-1 text-xs text-muted">Next.js 14, React, Node.js, MongoDB, REST APIs</p>
                </div>

                <div className="rounded-xl border border-line bg-panel-light/70 p-3.5 sm:p-4">
                  <p className="font-sans text-xl sm:text-2xl font-extrabold text-accent-cyan">02</p>
                  <p className="mt-1 font-sans text-sm font-bold text-ivory">n8n AI Agents</p>
                  <p className="mt-1 text-xs text-muted">Sequential AI PR reviewers, OpenRouter, Gmail approval</p>
                </div>

                <div className="rounded-xl border border-line bg-panel-light/70 p-3.5 sm:p-4">
                  <p className="font-sans text-xl sm:text-2xl font-extrabold text-accent-emerald">03</p>
                  <p className="mt-1 font-sans text-sm font-bold text-ivory">Cloud Systems</p>
                  <p className="mt-1 text-xs text-muted">Cloud Computing, Distributed Systems, Vercel, Railway</p>
                </div>

                <div className="rounded-xl border border-line bg-panel-light/70 p-3.5 sm:p-4">
                  <p className="font-sans text-xl sm:text-2xl font-extrabold text-accent-amber">04</p>
                  <p className="mt-1 font-sans text-sm font-bold text-ivory">Open Source</p>
                  <p className="mt-1 text-xs text-muted">Hacktoberfest Contributor &bull; GitHub PR Reviewer</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

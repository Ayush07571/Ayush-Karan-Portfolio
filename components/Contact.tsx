"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Reveal from "./Reveal";
import { Mail, Copy, Check, Send, ArrowUp, Clock, FileText, ExternalLink, Phone, MessageSquare, AlertCircle } from "lucide-react";

const RESUME_URL = "/resume.pdf";

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

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeString(now.toLocaleTimeString("en-US", options) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText("ayushkaran328@gmail.com");
    setEmailCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("8873718596");
    setPhoneCopied(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit message");
      }

      setLoading(false);
      setFormSubmitted(true);
      confetti({ particleCount: 120, spread: 75, origin: { y: 0.7 } });
    } catch (err: any) {
      setLoading(false);
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 z-10">
      <Reveal>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan">
            // 05. Initiate Connection
          </span>
          <div className="h-[1px] flex-1 bg-line" />
        </div>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-ivory tracking-tight">
          Let&apos;s Build Something Extraordinary
        </h2>
      </Reveal>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Direct Links & Info (Span 5) */}
        <Reveal delay={0.1} className="lg:col-span-5 flex">
          <div className="glass-panel-interactive w-full rounded-2xl p-5 sm:p-7 border border-line flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Uploaded Profile Photo */}
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-2xl border border-accent-purple/50 bg-panel-light shadow-glow">
                  <img
                    src="/profile.jpg"
                    alt="Ayush Karan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-mono text-base sm:text-lg font-bold text-ivory">Ayush Karan</h3>
                  <p className="font-mono text-xs text-accent-cyan">
                    Full-Stack &amp; Aspiring Cloud Architect
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs sm:text-sm text-muted leading-relaxed">
                Available for Software Development, Full-Stack engineering, Cloud Architecture, and n8n AI Agent automation workflows. Reach out via call, WhatsApp, or email!
              </p>

              {/* Direct Quick Interactive Contact Cards */}
              <div className="mt-5 sm:mt-6 space-y-3">
                {/* Phone Card with Call & WhatsApp options */}
                <div className="w-full rounded-xl border border-line bg-panel-light/70 p-3 sm:p-3.5 font-mono text-xs text-ivory">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-accent-amber shrink-0" />
                      <span className="font-bold">+91 8873718596</span>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="text-muted hover:text-ivory transition-colors p-1"
                      title="Copy Phone Number"
                    >
                      {phoneCopied ? (
                        <span className="text-accent-emerald text-[10px] flex items-center gap-1">
                          <Check className="h-3 w-3" /> Copied
                        </span>
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                  <div className="mt-2.5 flex flex-col sm:flex-row items-center gap-2">
                    <a
                      href="tel:8873718596"
                      className="w-full sm:flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-accent-amber/40 bg-accent-amber/15 py-2 font-mono text-xs font-semibold text-ivory hover:bg-accent-amber/30 transition-all"
                      title="Call directly"
                    >
                      <Phone className="h-3.5 w-3.5 text-accent-amber" />
                      <span>Direct Call</span>
                    </a>
                    <a
                      href="https://wa.me/918873718596"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-accent-emerald/40 bg-accent-emerald/15 py-2 font-mono text-xs font-semibold text-ivory hover:bg-accent-emerald/30 transition-all"
                      title="Open WhatsApp chat"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-accent-emerald" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="w-full flex items-center justify-between gap-2 rounded-xl border border-line bg-panel-light/70 p-3 sm:p-3.5 font-mono text-xs text-ivory hover:border-accent-purple/50 transition-colors">
                  <a
                    href="mailto:ayushkaran328@gmail.com"
                    className="flex items-center gap-2 sm:gap-2.5 hover:text-accent-purple transition-colors flex-1 overflow-hidden"
                    title="Click to open Email app"
                  >
                    <Mail className="h-4 w-4 text-accent-purple shrink-0" />
                    <span className="underline underline-offset-2 truncate">ayushkaran328@gmail.com</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 rounded-lg border border-line bg-ink/60 px-2 py-1 text-muted hover:text-ivory hover:border-line-bright transition-colors shrink-0 text-[11px]"
                    title="Copy Email Address"
                  >
                    {emailCopied ? (
                      <span className="text-accent-emerald flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Copied</span>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Resume Card */}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between rounded-xl border border-line bg-panel-light/70 p-3 sm:p-3.5 font-mono text-xs text-ivory hover:border-accent-cyan/50 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="h-4 w-4 text-accent-cyan shrink-0" />
                    <span>View Resume (PDF)</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted group-hover:text-ivory shrink-0" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="mt-6 sm:mt-8">
                <p className="font-mono text-xs text-muted uppercase tracking-wider">Social Channels</p>
                <div className="mt-3 flex flex-col sm:flex-row gap-2.5 sm:gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/ayush07571"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-line bg-ink/60 py-2.5 text-muted hover:text-ivory hover:border-line-bright transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ayush-karan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-line bg-ink/60 py-2.5 text-muted hover:text-ivory hover:border-accent-cyan transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4 text-accent-cyan" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Time Clock */}
            <div className="mt-6 sm:mt-8 pt-4 border-t border-line flex items-center justify-between font-mono text-xs text-muted">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-accent-purple shrink-0" />
                <span>{timeString || "IST Time"}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Interactive Form (Span 7) */}
        <Reveal delay={0.2} className="lg:col-span-7 flex">
          <div className="glass-panel w-full rounded-2xl p-5 sm:p-8 border border-line shadow-glass flex flex-col justify-between">
            {formSubmitted ? (
              <div className="my-auto text-center py-10 sm:py-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/40 shadow-glow-emerald">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-ivory">Message Transmitted!</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted max-w-sm mx-auto">
                  Thank you for reaching out, {formData.name}. Your message has been sent directly to <span className="text-accent-purple font-mono">ayushkaran328@gmail.com</span>!
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 font-mono text-xs text-accent-purple underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4 sm:space-y-5">
                <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-accent-purple font-semibold">
                  Send a Direct Message
                </h3>

                {errorMsg && (
                  <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3.5 font-mono text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block font-mono text-xs text-muted mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full rounded-xl border border-line bg-ink/70 px-4 py-3 font-mono text-base sm:text-sm text-ivory focus:border-accent-purple focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex.mercer@techcorp.io"
                    className="w-full rounded-xl border border-line bg-ink/70 px-4 py-3 font-mono text-base sm:text-sm text-ivory focus:border-accent-purple focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted mb-1.5">Message / Project Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Ayush, we're building a web platform and want to integrate an n8n AI agent pipeline..."
                    className="w-full rounded-xl border border-line bg-ink/70 px-4 py-3 font-mono text-base sm:text-sm text-ivory focus:border-accent-purple focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-indigo-600 px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold text-white shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Transmitting Message...
                    </span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      {/* Footer Bar */}
      <div className="mt-16 sm:mt-24 border-t border-line pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <p className="text-ivory font-semibold">
            &copy; {new Date().getFullYear()} Ayush Karan
          </p>
          <span className="hidden sm:inline text-line">•</span>
          <p className="text-muted">
            Crafting high-performance web systems, cloud architecture &amp; AI automations
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-accent-emerald/30 bg-accent-emerald/10 px-3 py-1 text-[11px] text-accent-emerald">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald" />
            </span>
            <span>Available for Opportunities</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-lg border border-line bg-panel-light/70 px-3 py-1.5 text-muted hover:text-ivory hover:border-accent-purple/50 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Terminal, FileText, Menu, X, ExternalLink } from "lucide-react";

interface NavProps {
  onOpenTerminal?: () => void;
}

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#achievements", label: "achievements" },
  { href: "#contact", label: "contact" },
];

const RESUME_URL = "/resume.pdf";

export default function Nav({ onOpenTerminal }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section detector
      const sections = LINKS.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "py-2.5 sm:py-3" : "py-3 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 ${
            scrolled
              ? "border border-line bg-panel-solid/90 backdrop-blur-xl shadow-glass"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-tight text-ivory"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
            <span>ayush</span>
            <span className="text-accent-purple group-hover:rotate-180 transition-transform inline-block duration-500">
              .
            </span>
            <span className="text-muted group-hover:text-ivory transition-colors">dev</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-6 font-mono text-xs text-muted md:flex">
            {LINKS.map((l) => {
              const isCurrent = activeSection === l.href.substring(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative py-1 transition-colors hover:text-ivory ${
                    isCurrent ? "text-ivory font-medium" : ""
                  }`}
                >
                  <span className="text-accent-purple/75 mr-1">//</span>
                  {l.label}
                  {isCurrent && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Terminal Launcher */}
            <button
              onClick={onOpenTerminal}
              className="hidden sm:flex items-center gap-1.5 rounded-lg border border-line bg-panel-light/60 px-3 py-1.5 font-mono text-xs text-ivory hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all group"
              title="Launch Interactive Terminal"
            >
              <Terminal className="h-3.5 w-3.5 text-accent-cyan group-hover:scale-110 transition-transform" />
              <span>Console</span>
            </button>

            {/* Resume Link */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-accent-purple/40 bg-accent-purple/15 px-2.5 sm:px-3 py-1.5 font-mono text-xs text-ivory hover:bg-accent-purple/25 hover:border-accent-purple transition-all"
            >
              <FileText className="h-3.5 w-3.5 text-accent-purple" />
              <span className="hidden sm:inline">Resume</span>
              <ExternalLink className="h-3 w-3 text-muted" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted hover:text-ivory md:hidden touch-manipulation"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-line bg-panel-solid/95 p-5 backdrop-blur-2xl shadow-glass md:hidden animate-fadeIn">
            <nav className="flex flex-col gap-3 font-mono text-sm">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 py-1.5 text-muted hover:text-ivory transition-colors"
                >
                  <span className="text-accent-purple">&gt;</span>
                  {l.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-line flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal?.();
                  }}
                  className="flex items-center gap-2 rounded-xl border border-line bg-panel-light/60 p-2.5 font-mono text-xs text-accent-cyan hover:border-accent-cyan transition-colors text-left"
                >
                  <Terminal className="h-4 w-4 shrink-0" />
                  <span>Launch AK-OS Console</span>
                </button>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-accent-purple/40 bg-accent-purple/15 p-2.5 font-mono text-xs text-ivory hover:bg-accent-purple/25 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent-purple" />
                    <span>View Resume (PDF)</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

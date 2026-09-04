"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import HeroOverlay from "@/components/HeroOverlay";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import TerminalModal from "@/components/TerminalModal";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
});

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="top" className="relative bg-ink text-ivory min-h-screen selection:bg-accent-purple selection:text-white bg-noise">
      {/* IMPROVEMENT 3: Vertical Scroll Progress Bar (2px line on right edge with #7340FF glow) */}
      <div className="fixed top-0 right-0 bottom-0 w-[2px] z-50 pointer-events-none bg-line/20">
        <div
          className="w-full bg-[#7340FF] shadow-[0_0_10px_#7340FF,0_0_20px_#7340FF] transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Master 3D Fixed Canvas Background */}
      <Hero3D />

      {/* Floating Glass Navigation */}
      <Nav onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Page Content Overlays */}
      <div className="relative z-10">
        <HeroOverlay onOpenTerminal={() => setTerminalOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </div>

      {/* AK-OS Command Terminal Sandbox */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </main>
  );
}


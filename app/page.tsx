"use client";

import { useState } from "react";
import Hero3D from "@/components/Hero3D";
import Nav from "@/components/Nav";
import HeroOverlay from "@/components/HeroOverlay";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import TerminalModal from "@/components/TerminalModal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <main id="top" className="relative bg-ink text-ivory min-h-screen selection:bg-accent-purple selection:text-white bg-noise">
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

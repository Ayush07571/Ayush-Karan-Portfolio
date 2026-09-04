# Ayush Karan — 3D Engineering Portfolio 🚀

Live Site: **[ayush-karan-portfolio-eta.vercel.app](https://ayush-karan-portfolio-eta.vercel.app/)**

A high-performance, interactive 3D developer portfolio featuring a master Three.js interactive avatar scene, lerp-based loader, GSAP scroll-driven camera transitions, n8n multi-agent architecture spotlight, and interactive terminal console (AK-OS).

---

## 🌟 Highlights & Features

- 🎭 **Master 3D Three.js Avatar Engine**: Interactive FBX avatar with real-time pose transitions (`idle` → `waving` → `typing`), dynamic lighting, starfield particle field, dynamic cyber glass workstation keyboard desk, and responsive screen scaling.
- ⚡ **Lerp-Based Smooth Loader**: Smooth animated loader with `requestAnimationFrame` @ `0.08` lerp factor, 3-stage progress messages (*Loading environment...*, *Loading 3D avatar...*, *Initializing scene...*), 400ms completion hold, and `0.6s` ease-out opacity transition.
- 🍕 **Featured Project Mockups with Browser Window Frames**:
  - **Susi's Universe 🍕 — 3D Pizza Experience** (`susi-pizza-landing-page.vercel.app`): Cinematic scroll-driven Next.js 14 & R3F app built for Ranchi's signature wood-fired pizza brand.
  - **Multi-Agent Sequential PR Code Reviewer (n8n)**: High-fidelity GitHub PR reviewer using 3-tier routing (If1 & If2 nodes), 4-stage sequential refinement loop, and human-in-the-loop Gmail manual approval.
  - **AI Worksheet Generator (Pracup)** (`pracup.co.in`): Production Next.js 14 application converting topic inputs into exportable worksheets with solution keys.
- 💈 **Cinematic UI Enhancements**:
  - Circular glowing profile avatar with 2s infinite CSS pulse ring (`animate-border-glow`).
  - Right-edge 2px vertical scroll progress bar with `#7340FF` glow.
  - Section transition cinematic accent color flash overlay on pose changes.
- 💻 **AK-OS Command Terminal Console**: Interactive terminal sandbox supporting commands like `help`, `bio`, `experience`, `skills`, `projects`, `contact`, `resume`, and `hire` (with confetti animation!).
- 📄 **Direct Resume (PDF)**: Integrated `/resume.pdf` opening in a new tab across header navigation, terminal console, and contact section.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **3D Engine**: Three.js, FBXLoader
- **Animations**: GSAP (ScrollTrigger), Framer Motion, Canvas Confetti
- **Styling**: Tailwind CSS, Vanilla CSS Glassmorphism & Keyframes
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 📂 Project Architecture

```
├── app/
│   ├── api/contact/        # Serverless contact form email handler
│   ├── globals.css         # Custom design system, glassmorphism & keyframe animations
│   ├── layout.tsx          # Root layout & SEO meta tags
│   └── page.tsx            # Home page & vertical scroll progress bar
├── components/
│   ├── Hero3D.tsx          # Master Three.js WebGL canvas engine & lerp loader
│   ├── Nav.tsx             # Floating glass header navigation & drawer
│   ├── HeroOverlay.tsx     # Hero section headline & console triggers
│   ├── About.tsx           # Bento grid bio, glowing profile avatar & leadership
│   ├── Experience.tsx      # Internship history @ Datatrack & Quantumard
│   ├── Projects.tsx        # Projects grid with browser window mockups & n8n architecture flow
│   ├── Skills.tsx          # Interactive tech stack categories & json code viewer
│   ├── Achievements.tsx    # Hackathons & leadership milestones
│   ├── Contact.tsx         # Direct contact form, email request actions, time clock
│   └── TerminalModal.tsx   # Interactive AK-OS terminal modal
└── public/
    ├── models/             # Avatar FBX model files
    ├── n8n.png             # Multi-Agent PR Reviewer mockup screenshot
    ├── pracup.png          # Pracup AI Worksheet Generator mockup screenshot
    ├── susi.png            # Susi Pizza 3D Landing Page mockup screenshot
    ├── profile.jpg         # Ayush Karan profile photo
    └── resume.pdf          # Software Engineering Resume (PDF)
```

---

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ayush07571/Ayush-Karan-Portfolio.git
   cd Ayush-Karan-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 License & Credits

Designed and engineered by **[Ayush Karan](https://linkedin.com/in/ayush-karan)**.
B.Tech Computer Science & Engineering (Cloud Computing & Automation) at VIT Bhopal.

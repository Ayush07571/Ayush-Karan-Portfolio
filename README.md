# Ayush Karan — portfolio

Full premium portfolio built from your resume: pinned cinematic 3D hero,
GSAP scroll-driven reveals, and content sections styled around a
dev/terminal identity (commit-log timeline, repo-style project cards,
a syntax-highlighted `skills.json` block) rather than generic SaaS cards.

## Structure

- `components/Hero3D.tsx` — the only Three.js canvas on the page. Pinned
  via CSS `position: sticky`, with GSAP `ScrollTrigger` reporting scroll
  progress (0→1) that drives the camera and crossfades idle → typing →
  waving as an intro beat. Name/tagline fade in with GSAP on mount.
- `components/Nav.tsx` — fixed nav that fades in once you scroll past
  the hero (GSAP `ScrollTrigger`).
- `components/Reveal.tsx` — shared scroll-reveal wrapper (fade + slight
  rise, plays once) used by every section below the hero.
- `components/About.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`,
  `Achievements.tsx`, `Contact.tsx` — real content sections, pulled from
  your resume.
- `public/models/` — your three FBX files (idle with skin, typing and
  waving without skin).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Things to finish

- **Your photo**: `components/Contact.tsx` currently shows an "AK"
  initials circle where your photo goes. Drop an image into
  `public/photo.jpg` and swap the placeholder `div` for:
  ```tsx
  <img src="/photo.jpg" alt="Ayush Karan" className="h-16 w-16 rounded-full object-cover" />
  ```
- **Live links**: `pracup.co.in` is referenced as text in the projects
  card — wrap it in an `<a>` once the site is public if you want it
  clickable.
- **Phone number**: left off the public Contact section by default (it's
  on your resume but usually not something you want scraped from a
  public site) — add it back in `Contact.tsx` if you'd rather have it
  visible.
- **21st.dev / component polish**: I couldn't pull live components from
  21st.dev in this environment (no network access here), so instead I
  built the repo-card / commit-log / code-block treatments as bespoke
  components matching your dev/automation background. If there's a
  specific 21st.dev component you like the look of, paste a screenshot
  or link and I can match the styling.
- **Camera framing**: `Hero3D.tsx`'s `BEATS` array controls the three
  camera positions during the pinned intro — nudge `camPos`/`lookAt` if
  the character isn't framed the way you want once you see it live.

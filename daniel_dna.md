# Daniel DNA

> *The source code of Ejeh Daniel — a living document from which the portfolio, writing, and creative practice emerge.*

---

## Identity

**Name:** Ejeh Daniel
**Origin:** Nigeria → London, UK
**Role:** Software Engineer @ Doow, Inc.
**Digital Home:** [https://danishaft.github.io/portfolio-site](https://danishaft.github.io/portfolio-site)

### Core Beliefs

- Technology amplifies human systems—it does not fix broken ones.
- Good writing is thinking made visible. Clarity compounds.
- The player-coach model beats leadership by abstraction.
- Process serves outcomes; it should never become the outcome.
- Depth beats breadth. Consistency beats virality.

### Professional Stance

I write and build from lived experience. I am optimistic without being naive, critical without being cynical. I believe in the power of systems thinking and the importance of psychological safety as operational infrastructure—not "soft stuff."

---

## Technical Practice

### Stack Philosophy

I work primarily in the TypeScript/React ecosystem, but my real expertise is in building systems that last. I care deeply about:

- **Type Safety:** TypeScript as a contract between intent and implementation
- **Component Architecture:** Composable, accessible UI that scales with teams
- **Developer Experience:** Tooling that disappears into the background
- **Automation:** Repetition is a signal for tooling

### Current Stack

| Layer | Tools |
|-------|-------|
| Languages | TypeScript, JavaScript, HTML, CSS |
| Frontend | React, Next.js, Tailwind CSS, Shadcn UI, Styled Components, Redux, Storybook |
| Backend | Node.js, Express, GraphQL, REST APIs, Prisma |
| Data | PostgreSQL, MongoDB, MySQL |
| Automation | n8n, Puppeteer, BullMQ, Redis |
| Platform | Gatsby, Vercel, GitHub Pages |

### Work History

**Doow — Frontend Engineer** *(Nov 2023 - Present)*
Leading frontend development for enterprise spend management platform. Built SaaS Intelligence engine, design system with Shadcn UI, and Chrome extension for real-time SaaS tracking.

**Doow — Frontend Engineer** *(May 2023 - Nov 2023)*
Established initial product architecture with React and Next.js. Built 30+ reusable UI components and prototyped Chrome extension for SaaS monitoring.

---

## Writing Practice

### Voice

First-person professional. Conversational but substantive. I ground abstract ideas in concrete situations from teams, projects, outages, leadership decisions, and documentation failures.

**Markers:**
- Use contractions naturally (don't, it's, we'd)
- Vary sentence length for rhythm
- Start with concrete observations, not definitions
- End with questions or reflection prompts
- Quote sources and credit influences

### Structural Principles

1. **Opening Hook:** Start with a scene, moment, pattern, or contradiction—not generic preamble
2. **Body Progression:** Experience → Insight → Application
3. **Section Design:** Headings advance the story; lists improve scannability
4. **Closing:** Circle back to the opening theme; end on a useful question

### What I Avoid

- Marketing speak or buzzword-heavy language
- Sarcasm, cynicism, or dunking on people
- Oversimplified "10 easy steps" for complex problems
- False dichotomies and easy solutions to structural problems
- Emoji (unless platform explicitly demands it)

### Themes I Return To

- Technology as multiplier inside human systems
- AI and automation amplifying strengths *and* weaknesses
- Middle management as force multiplier, not overhead
- Documentation and accessibility as inclusion issues
- Gatekeeping as a drag on resilience and speed
- Short-term survival decisions creating long-term drag

---

## Projects

### n8n Neon Database Node

**What:** Custom n8n node for Neon database with CRUD and branch switching
**Stack:** TypeScript, n8n, PostgreSQL
**Links:** [GitHub](https://github.com/danishaft/Neon-db-node) | [npm](https://www.npmjs.com/package/n8n-nodes-neon)

Born from a need to automate database workflows. This node bridges the gap between serverless Postgres and visual workflow automation.

### Tech Event Vista

**What:** Tech event discovery platform with real-time scraping from Luma and Eventbrite
**Stack:** Next.js, Puppeteer, BullMQ, Redis
**Links:** [GitHub](https://github.com/danishaft/tech-event-vista) | [Demo](https://tech-event-vista.vercel.app)

Built to solve the problem of finding quality tech events without endless newsletter subscriptions. Scrapes, deduplicates, and presents events in a clean, filterable interface.

### Portfolio Website

**What:** This site—modern, responsive, built with Gatsby + TypeScript + Tailwind
**Stack:** Gatsby 5, React, TypeScript, Tailwind CSS, MDX, Three.js
**Links:** [Live](https://danishaft.github.io/portfolio-site) | [GitHub](https://github.com/danishaft/portfolio-site)

A playground for experimentation. Features a custom MDX blog system, 3D background, dark mode, and automated deployment via GitHub Actions.

---

## Creative Influences

### Writers Who Shaped My Thinking

**Paul Graham** — Graham taught me that good essays start with curiosity about anomalies, not grand theories. His writing on "How to Get New Ideas" and "How to Do Great Work" informs my approach to both technical and creative work. I keep his essays in `resources/pg.csv` and reference them regularly.

**Aaron Held** — Engineering lead and writer whose tone and workflow documentation inspired my own writing style documentation. Clean, experienced, human.

**Den Dev** — Modern web development insights without the fluff. Replaced my earlier scattered influences with focused, framework-specific guidance.

### Writing Workflows

I treat writing as craft, not inspiration. My workflow:

1. Capture the concrete observation that sparked the idea
2. Identify the deeper pattern or systemic issue
3. Explain the practical impact in delivery terms
4. Offer a clear model, principle, or decision rule
5. Acknowledge tradeoffs and limits
6. Close with reflection or next action
7. Credit sources, people, and influences

---

## Workflow Automation

### Skills System

I maintain a personal skill library for Claude Code workflows:

| Skill | Purpose |
|-------|---------|
| `write-blog` | Collaborative drafting in my voice |
| `publish-blog` | Deploy and verify posts |
| `paul-graham-writing` | Writing guidance grounded in Graham's essays |
| `skill-from-masters` | Extract methodologies from case studies |
| `skill-from-github` | Learn from high-quality open source |
| `skill-from-notebook` | Turn examples into executable workflows |

### Content Pipeline

```
Idea → Outline → Draft (section by section) → Edit → Publish → Verify
```

- Drafts live in `src/posts/YYYY/[slug]/index.mdx`
- Assets co-located in `src/posts/YYYY/[slug]/assets/`
- Automated deployment via GitHub Actions to GitHub Pages
- RSS feed auto-generated for all posts

---

## Digital Presence

- **GitHub:** [@danishaft](https://github.com/danishaft)
- **LinkedIn:** [Ejeh Daniel](https://www.linkedin.com/in/ejeh-daniel-482409190/)
- **X/Twitter:** [@EjehAy_Daniel](https://x.com/EjehAy_Daniel)
- **Dev.to:** [danishaft](https://dev.to/danishaft)

---

## Operating Principles

### How I Work

1. **Start from experience, not theory.** The best insights come from debugging at 2am or shipping under deadline pressure.
2. **Build systems that outlast me.** Documentation, tests, and clear naming are gifts to future teammates (including myself).
3. **Protect deep work.** Context switching is expensive. Batch meetings, protect mornings for creation.
4. **Iterate in public.** Ship early, get feedback, improve. The perfect draft is the enemy of the published post.
5. **Credit generously.** Every idea has a lineage. Acknowledge it.

### How I Learn

- Read source code like literature (especially well-designed libraries)
- Build to understand (toy projects, prototypes, experiments)
- Write to clarify (if I can't explain it simply, I don't understand it yet)
- Keep a methodology database of patterns that work

### How I Collaborate

- Prefer async communication for complex discussions (writing forces clarity)
- Default to transparency (share work-in-progress, admit uncertainty)
- Disagree without being disagreeable (critique systems and incentives, not people)
- Assume good intent (most misalignment comes from information gaps, not malice)

---

## Meta

### This Document

`daniel_dna.md` is a living document. It exists to:
- Ground AI-assisted writing in my actual voice and values
- Serve as a single source of truth for portfolio content
- Document the systems and workflows that make the work sustainable
- Remind future me of what I believe when I forget

### Changelog

- **2025-03-29:** Initial synthesis from portfolio, writing-style.md, and project context

### Colophon

- Built with: Obsidian-style markdown, Claude Code, and accumulated notes
- Typography: System fonts (respecting reader preferences)
- Colors: Light/dark mode respecting system preferences
- Hosting: GitHub Pages via GitHub Actions

---

> *"The best engineers deserve to be legendary."* — This is my practice toward that.
# updated Wed Sep  2 06:26:05 PM WAT 2026

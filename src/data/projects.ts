import type { Project } from "../types/Project"

export const projects: Project[] = [
  {
    id: "reaper-mcp",
    name: "REAPER MCP",
    year: "2026",
    category: "Music production",
    tagline: "Control REAPER from AI clients, scripts, and the command line.",
    summary:
      "A producer-focused control layer for creating tracks, editing MIDI, arranging songs, mixing, mastering, and rendering REAPER projects.",
    image: "/media/projects/reaper-mcp.webp",
    imageAlt:
      "A multitrack digital audio workstation with waveforms, MIDI notes, automation, mixer channels, and analysis panels",
    featured: true,
    stack: ["Python", "Lua", "MCP", "REST", "REAPER"],
    highlights: [
      "Built 170 Python tools covering composition, arrangement, mixing, mastering, project management, and delivery.",
      "Connected Python services to REAPER through a Lua bridge and exposed the same capabilities through MCP, CLI, and REST interfaces.",
      "Added stable REAPER identities, preflight validation, structured results, guarded filesystem access, and one-step undo for mutations.",
      "Live verified the REAPER integration on Linux; macOS and Windows currently have CI and installer coverage but still need live DAW acceptance.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/danishaft/reaper-mcp",
      },
      {
        label: "System design",
        url: "https://github.com/danishaft/reaper-mcp#architecture",
      },
    ],
  },
  {
    id: "stem-splitter",
    name: "StemSplitter",
    year: "2026",
    category: "Audio and machine learning",
    tagline: "Upload a song and pull it apart into playable, downloadable stems.",
    summary:
      "A React workspace and asynchronous separation service for uploading songs, splitting them into isolated stems, auditioning each result, and downloading the outputs.",
    image: "/media/projects/stem-splitter.webp",
    imageAlt:
      "StemSplitter interface with an audio upload panel, separation controls, product contract, and results workspace",
    featured: true,
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "Modal"],
    highlights: [
      "Built the upload, progress, individual-stem playback, and download experience in React.",
      "Built a FastAPI control plane for jobs, authentication, queueing, artifact delivery, and GPU-worker coordination.",
      "Separated authoritative job state, durable dispatch, object storage, and remote model inference across PostgreSQL, Redis/RQ, S3-compatible storage, and Modal.",
      "Kept the current eleven-stem route explicitly evaluation-only until its quality benchmark and listening qualification are complete.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/danishaft/StemSplitter-Audio-Separation-Server",
      },
      {
        label: "Architecture",
        url: "https://github.com/danishaft/StemSplitter-Audio-Separation-Server/blob/main/docs/architecture/PRODUCTION_ARCHITECTURE.md",
      },
    ],
  },
  {
    id: "peruz",
    name: "Peruz",
    year: "2026",
    category: "Developer tools",
    tagline: "Control and inspect a live browser from the terminal.",
    summary:
      "A local TypeScript CLI for reading pages, interacting with elements, capturing screenshots, inspecting network traffic, and running browser workflows.",
    image: "/media/projects/peruz.webp",
    imageAlt:
      "Peruz banner showing terminal commands, a browser automation agent, and screenshot capture",
    featured: true,
    stack: ["TypeScript", "Node.js", "Chrome Native Messaging", "MCP"],
    highlights: [
      "Connected the CLI to a Chromium extension through a Node.js native host and Chrome Native Messaging.",
      "Added semantic page reading, interaction, screenshots, network inspection, emulation, workflows, and an optional MCP interface.",
      "Made installation browser-aware for Chrome, Chromium, Brave, Edge, and Arc where the platform supports them.",
      "Built a draggable Grab control for selecting visible interface elements and returning implementation context.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/danishaft/peruz-cli",
      },
      {
        label: "System design",
        url: "https://github.com/danishaft/peruz-cli/blob/main/system.md",
      },
    ],
  },
  {
    id: "continues-cli",
    name: "continues-cli",
    year: "2026",
    category: "Developer tools",
    tagline:
      "Resume Claude Code and Codex sessions, or continue the work in the other CLI.",
    summary:
      "A strict TypeScript command-line tool that discovers local agent sessions, delegates native resumes, and builds bounded handoffs when work moves between coding agents.",
    featured: false,
    stack: ["TypeScript", "Node.js", "CLI"],
    highlights: [
      "Reads local JSONL session history incrementally instead of loading every conversation in full.",
      "Uses each agent's native resume command when possible and private temporary artifacts for cross-agent handoffs.",
      "Keeps the target prompt bounded while preserving the working state needed to continue.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/danishaft/resume-cli-",
      },
    ],
  },
  {
    id: "neon-n8n",
    name: "Neon for n8n",
    year: "2025",
    category: "Data and automation",
    tagline: "Use Neon Postgres inside self-hosted n8n workflows.",
    summary:
      "An n8n community node for selecting, inserting, updating, deleting, and querying data in a Neon Postgres database.",
    featured: false,
    stack: ["TypeScript", "n8n", "PostgreSQL", "Node.js"],
    highlights: [
      "Added dynamic schema discovery and native n8n controls for tables, columns, enums, filters, and output mapping.",
      "Implemented sequential, independent, and transactional batch execution with explicit failure behavior.",
      "Used parameterized values and bounded identifier and operator handling for built-in database operations.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/danishaft/Neon-db-node",
      },
      {
        label: "npm",
        url: "https://www.npmjs.com/package/n8n-nodes-neon",
      },
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProject(projectId: string): Project | undefined {
  return projects.find((project) => project.id === projectId)
}

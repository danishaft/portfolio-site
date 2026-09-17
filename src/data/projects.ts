import type { Project } from "../types/Project"

export const projects: Project[] = [
  {
    id: "reaper-mcp",
    name: "REAPER MCP",
    year: "2026",
    category: "Music production",
    tagline: "Control REAPER from AI clients, scripts, and the command line.",
    summary:
      "Built so an AI collaborator can work inside the same REAPER project as the producer, rather than replacing the DAW. Its 170 operations cover the path from an empty session to an arranged, mixed, mastered, and rendered song, with every change visible and undoable.",
    image: "/media/projects/reaper-mcp.webp",
    imageAlt:
      "A REAPER 7 production session with vocal and instrument tracks, waveforms, automation, and the mixer behind the REAPER MCP title",
    featured: true,
    stack: ["Python", "Lua", "MCP", "REST", "REAPER"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/danishaft/reaper-mcp",
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
      "StemSplitter pulls a finished song apart into eight playable stems from a single upload. Musicians can isolate the parts inside the mix, audition them together, and download them for practice, remixing, or production.",
    image: "/media/projects/stem-splitter.webp",
    imageAlt:
      "StemSplitter interface with an audio upload panel, separation controls, product contract, and results workspace",
    featured: true,
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "Modal"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/danishaft/auralith-stemsplitter",
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
      "An isolated automation browser loses the tabs, login, and context already in use. Peruz gives agents that existing context from the terminal while keeping browser control and data on the local machine.",
    image: "/media/projects/peruz.webp",
    imageAlt:
      "Doow's light homepage with the Peruz Grab control visible over the page and its embedded product dashboard",
    featured: true,
    stack: ["TypeScript", "Node.js", "Chrome Native Messaging", "MCP"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/danishaft/peruz-cli",
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
    image: "/media/projects/continues-cli.webp",
    imageAlt:
      "continues-cli terminal output showing local agent session discovery and command usage",
    featured: false,
    stack: ["TypeScript", "Node.js", "CLI"],
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
    image: "/media/projects/neon-n8n.webp",
    imageAlt:
      "n8n Neon node editor showing SQL query controls with input and output panes",
    featured: false,
    stack: ["TypeScript", "n8n", "PostgreSQL", "Node.js"],
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

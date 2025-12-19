import { Projects } from "../types/Project"

export const projects: Projects = {
  "n8n-node-neon": {
    id: "n8n-node-neon",
    name: "🗄️ n8n Neon Database Node",
    srcURL: { url: "https://github.com/danishaft/Neon-db-node" },
    demoURL: { url: "https://www.npmjs.com/package/n8n-nodes-neon" },
    cover: { srcPath: "projects/n8n-node-neon/cover.png" },
    startDate: "2025-09-07",
    summary: [
      "Custom n8n node for Neon database with CRUD and branch switching.",
    ],
    tags: [
      { name: "n8n" },
      { name: "Neon" },
      { name: "PostgreSQL" },
      { name: "Automation" },
      { name: "TypeScript" },
    ],
    gitHubRepo: {
      owner: "danishaft",
      repo: "Neon-db-node",
    },
    achievements: [],
  },
  "tech-radar": {
    id: "tech-radar",
    name: "📅 Tech Event Vista",
    srcURL: { url: "https://github.com/danishaft/tech-event-vista" },
    demoURL: { url: "https://tech-event-vista.vercel.app" },
    cover: { srcPath: "projects/tech-radar/cover.webp" },
    startDate: "2025-11-23",
    summary: [
      "Tech event discovery platform with real-time scraping from Luma and Eventbrite.",
    ],
    tags: [
      { name: "Next.js" },
      { name: "Puppeteer" },
      { name: "BullMQ" },
      { name: "Redis" },
      { name: "Web Scraping" },
    ],
    gitHubRepo: {
      owner: "danishaft",
      repo: "tech-event-vista",
    },
    achievements: [],
  },
}

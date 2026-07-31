import type { WorkExperience } from "../types/WorkExperience"

export const workExperience: WorkExperience[] = [
  {
    company: "Doow",
    role: "Software Engineer",
    location: "Remote",
    startDate: "November 2023",
    endDate: "Present",
    introduction:
      "I work end to end on product features, framing the problem and working with design, frontend, and backend teams to deliver them.",
    highlights: [
      "Expanded Doow's browser extension into a shared browser and desktop application, working across the frontend and backend, building the interfaces in React and the Tauri host in Rust, and adopting a monorepo structure with Turborepo.",
      "Built Derek and Mina, Doow's AI agents, along with native, interactive spreadsheet and deck web applications that let agents and users create, edit, and interact with data and presentations through familiar Excel- and PowerPoint-like experiences.",
      "Contributed to building Hawky, Doow's internal AI engineering agent for pull-request review and CI. It automated code review, security scanning, tests, and visual checks across repositories, giving security teams and engineers insights and feedback they could act on.",
      "Integrated Grafana and Datadog for frontend monitoring across Doow's web application, covering all Core Web Vitals and performance metrics, then used the monitoring data to improve the application's performance.",
    ],
  },
  {
    company: "Doow",
    role: "Frontend Engineering Intern",
    location: "Remote",
    startDate: "May 2023",
    endDate: "November 2023",
    introduction:
      "Worked with the founding team to build the first version of Doow, a spend-management platform for CFOs and finance teams.",
    highlights: [
      "Built the company website and documentation with React and Next.js.",
      "Implemented reusable frontend systems, components, and abstractions for the web application.",
      "Built the browser extension that monitors SaaS application usage.",
    ],
  },
  {
    company: "Independent",
    role: "Freelance Software Engineer",
    location: "Remote",
    startDate: "2022",
    endDate: "2023",
    highlights: [],
  },
]

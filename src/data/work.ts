import type { WorkExperience } from "../types/WorkExperience"

export const workExperience: WorkExperience[] = [
  {
    company: "Doow",
    companyUrl: "https://doow.co",
    role: "Software Engineer",
    location: "Remote",
    startDate: "November 2023",
    endDate: "Present",
    logo: "/media/doow-logo.webp",
    highlights: [
      "Built product features for Doow's all-in-one finance operating system, which brings multi-country banking, wallets, cards, payments, invoicing, and non-payroll spend into one platform. Worked from problem framing with design through frontend and backend implementation across the web, browser, and desktop applications.",
      "Expanded our SaaS usage-tracking infrastructure into shared browser and desktop applications built with React, Tauri, and Rust, adopting a Turborepo monorepo across both applications.",
      "Built Derek and Mina, Doow's finance agents, together with native, interactive spreadsheet and deck applications from the ground up. They let agents and CFOs collaborate to create, edit, and interact with data and presentations through familiar Excel- and PowerPoint-like experiences.",
      "Introduced a pull-request quality gate within Hawky, Doow's internal AI code-review agent, which catches and fixes bugs before they are merged with an 80% success rate. Built the CI validation with automated tests, Playwright browser checks, and visual UI comparisons, raising the bar for code and UI quality across all feature journeys.",
      "Integrated Grafana and Datadog across Doow's web application to monitor Core Web Vitals and frontend performance, then used the resulting data to improve application performance.",
    ],
  },
  {
    company: "Doow",
    companyUrl: "https://doow.co",
    role: "Frontend Engineer",
    location: "Remote",
    startDate: "May 2023",
    endDate: "November 2023",
    logo: "/media/doow-logo.webp",
    introduction:
      "Worked with the founding team to build Doow's first product, a SaaS management platform that gave finance teams one view of the software their company used, who used it, and what it cost, helping them reduce unnecessary spend.",
    highlights: [
      "Architected and built significant parts of the MVP: the web app, landing page, and documentation in TypeScript, React, and Next.js; the browser extension; and the backend of our SaaS application usage infrastructure in NestJS, MongoDB, and Azure.",
      "Implemented reusable frontend systems, components, and abstractions for the web application. Defined standards for how we built our prefetching and optimistic UI strategies. Led efforts to clean up and standardize how we handled responsiveness and performance optimization.",
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

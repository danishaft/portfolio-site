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
      "Built Derek and Mina, Doow's LLM-powered finance agents, alongside native spreadsheet and deck applications. They let agents and CFOs create, edit, and work with financial data and presentations through familiar Excel- and PowerPoint-like interfaces.",
      "Rebuilt Doow's Alternatives experience, which helps finance teams compare replacement applications, by tracing every visible value to its GraphQL source, removing unsupported financial and recommendation claims, and preserving backend truth throughout the comparison.",
      "Expanded our SaaS usage-tracking infrastructure from a browser extension into a shared browser and desktop product with React, Tauri, and Rust, adopting Turborepo across both applications.",
      "Built the authentication flows used across Doow's web, browser, and desktop applications, including OAuth and SAML integrations.",
      "Introduced a pull-request quality gate within Hawky, Doow's internal AI code-review agent, which catches and fixes bugs before merge with an 80% success rate. Built its CI validation with automated tests, Playwright browser checks, and visual UI comparisons.",
      "Integrated Grafana and Datadog across Doow's web application to monitor Core Web Vitals and frontend performance, then used the data to catch production regressions and ship fixes.",
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
      "Architected and built significant parts of the MVP. This included the web app, landing page, and documentation in TypeScript, React, and Next.js, the browser extension, and the backend of our SaaS application usage infrastructure in Node.js, NestJS, MongoDB, and Azure.",
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

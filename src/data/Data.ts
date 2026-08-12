// #region types
export type Technology = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  href: string;
};
// #endregion

// #region data
export const technology: Record<string, Technology> = {
  Frontend: {
    title: "Frontend",
    items: [
      "HTML / CSS",
      "JavaScript",
      "TypeScript",
      "React 18",
      "React 19",
      "React Native",
      "Next.js",
      "jQuery",
      "Vite",
      "Bootstrap",
      "Tailwind",
      "Sass/SCSS",
    ],
  },

  JSandReactLibraries: {
    title: "React & JS Libraries",
    items: [
      "React Router",
      "TanStack Query",
      "Material UI",
      "Redux Toolkit",
      "Axios",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Chart.js",
      "Mapbox",
      "Leaflet",
      "Material UI X",
      "Base UI",
      "Day.js",
      "Moment.js",
    ],
  },

  Backend: {
    title: "Backend",
    items: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Python",
      "FastAPI",
      "Node.js",
      "Entity Framework Core",
      "Pydantic",
      "Supabase",
      "Postman",
    ],
  },

  Data: {
    title: "Data & Databases",
    items: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Microsoft SQL Server",
      "MongoDB",
      "NoSQL",
      "Database Design",
      "Data Modelling",
      "Query Optimisation",
    ],
  },

  Cloud: {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Azure DevOps",
      "Vercel",
      "CI/CD",
      "Docker",
      "Auth0",
    ],
  },

  Testing: {
    title: "Testing",
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "xUnit",
      "NUnit",
      "Pytest",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
      "Test-Driven Development",
    ],
  },

  ArchitectureAndEngineering: {
    title: "Architecture & Engineering",
    items: [
      "Microservices",
      "Monorepos",
      "Object-Oriented Programming",
      "Functional Programming",
      "REST API Design",
      "Component Architecture",
      "Design Patterns",
      "SOLID Principles",
      "Clean Architecture",
    ],
  },

  Collaboration: {
    title: "Collaboration & Workflow",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Pull Requests",
      "Code Review",
      "JIRA",
      "Agile / Scrum",
    ],
  },

  AI: {
    title: "AI Tooling",
    items: [
      "ChatGPT",
      "GitHub Copilot",
      "Claude",
      "AI-Assisted Development",
      "Prompt Engineering",
      "AI Code Generation",
      "AI Code Review",
      "AI-Powered Developer Workflows",
    ],
  },
};

export const professionalProjects: Project[] = [
  {
    title: "BareFLEET Vessel Monitoring",
    description:
      "A remote fleet monitoring and analytics platform for commercial vessels, providing real-time insights into fuel consumption, engine health, vessel motion, navigation, and overall performance. The platform helps operators monitor fleet operations, identify inefficiencies, and make data-driven decisions.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tanstack Query",
      "Mapbox",
      "Chart.js",
      "Material UI",
      "Python",
      "FastAPI",
      ".NET",
      "SQL",
      "Azure Devops",
      "AWS",
    ],
    accent: "01",
    href: "https://ast-reygar.com/barefleet/",
  },
  {
    title: "CEFAS Clean Catch Mobile App",
    description:
      "A mobile application developed for Cefas to enable UK fishers to self-report bycatch and fishing activity, helping researchers collect accurate data from vessels at sea. The app supports Cefas and Clean Catch’s efforts to understand and reduce accidental catches of sensitive marine species.",
    tags: [
      "React Native",
      "TypeScript",
      "Mobile",
      "Tailwind",
      "Leaflet",
      "iOS",
      "Android",
      ".NET",
      "MongoDB",
      "GitLab",
    ],
    accent: "02",
    href: "https://www.cleancatchuk.com/our-work/self-report-app/",
  },
];

export const personalProjects: Project[] = [
  {
    title: "DailySaints",
    description:
      "A web application exploring the life and ministry of saints canonized in the Catholic Church.",
    tags: ["React", "TypeScript", "Vite", "Material UI", "Day.js", "Vercel"],
    accent: "01",
    href: "https://www.dailysaints.co.uk/",
  },
  {
    title: "GoodDoggo",
    description:
      "A playful community app for discovering and uploading dog pictures.",
    tags: ["React", "TypeScript", "Vite", "Tanstack Query", "Supabase"],
    accent: "02",
    href: "https://gooddoggo.vercel.app/",
  },
];

export const skills: string[] = [
  "Adaptability",
  "Analytical Thinking",
  "Application of Software Methodologies",
  "Attention to Detail",
  "Clear Verbal & Written Communication",
  "Continuous Improvement",
  "Creative Thinking",
  "Critical Thinking",
  "Debugging & Troubleshooting",
  "Fast Learning",
  "Knowledge Sharing",
  "Logical Thinking",
  "Ownership & Accountability",
  "Peer Collaboration",
  "Prioritisation",
  "Problem Solving",
  "Requirements Analysis",
  "Technical Documentation",
  "Teamwork",
  "Translating Requirements into Technical Solutions",
];
// #endregion

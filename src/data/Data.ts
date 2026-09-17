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
  languages: {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "Python", "SQL", "HTML", "CSS"],
  },

  frontend: {
    title: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Vite",
      "React Router",
      "Material UI",
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Responsive UI",
      "Mobile-First Development",
    ],
  },

  dataVisualisationMapping: {
    title: "Data Visualisation & Mapping",
    items: ["Chart.js", "Mapbox", "Leaflet"],
  },

  backend: {
    title: "Backend",
    items: [
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "Node.js",
      "FastAPI",
      "Pydantic",
      "REST APIs",
    ],
  },

  databases: {
    title: "Databases",
    items: [
      "PostgreSQL",
      "Microsoft SQL Server",
      "MySQL",
      "MongoDB",
      "SQL",
      "NoSQL",
      "Database Design",
      "Data Modelling",
      "Query Optimisation",
    ],
  },

  cloudDevOps: {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Vercel", "Docker", "CI/CD", "Auth0", "YAML"],
  },

  testing: {
    title: "Testing",
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "xUnit",
      "NUnit",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
      "Test-Driven Development",
    ],
  },

  architectureEngineering: {
    title: "Architecture & Engineering",
    items: [
      "Microservices",
      "Microfrontend Architecture",
      "Monorepos",
      "Component Architecture",
      "Object-Oriented Programming",
      "Functional Programming",
      "Design Patterns",
      "SOLID Principles",
      "Clean Architecture",
    ],
  },

  developmentTools: {
    title: "Development Tools",
    items: ["Git", "GitHub", "GitLab", "Bitbucket", "JIRA", "Bash", "Postman"],
  },

  aiAssistedDevelopment: {
    title: "AI-Assisted Development",
    items: [
      "GitHub Copilot",
      "Claude",
      "ChatGPT",
      "AI-Assisted Development",
      "Prompt Engineering",
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
  "Problem Solving",
  "Requirements Analysis",
  "Debugging & Troubleshooting",
  "Analytical Thinking",
  "Technical Documentation",
  "Communication",
  "Ownership & Accountability",
  "Prioritisation",
  "Continuous Improvement",
  "Adaptability",
];
// #endregion

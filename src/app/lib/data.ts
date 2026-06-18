import type { IconName } from "../components/Icons";

/* ----------------------------------------------------------------
   Single source of truth for all portfolio content.
   Sourced from Minhazul's résumé. Update links marked TODO.
   ---------------------------------------------------------------- */

export const profile = {
  name: "Minhazul Islam Choudhury",
  firstName: "Minhazul",
  role: "DevOps & Full-Stack Engineer",
  tagline: "I automate the path from commit to production.",
  location: "Guwahati, Assam, India",
  email: "michoudhury2005@gmail.com",
  phone: "+91 84532 44745",
  phoneHref: "+918453244745",
  // TODO: replace with real profile URLs
  github: "https://github.com/minhazul-islam",
  linkedin: "https://www.linkedin.com/in/minhazul-islam-choudhury",
  resumeUrl: "/Minhazul_Islam_Choudhury_Resume.pdf",
  summary:
    "DevOps-focused full-stack engineer skilled in automating multi-server deployments, building CI/CD pull-and-deploy pipelines, and containerizing applications with Docker, Docker Compose, and Docker Swarm. I administer Linux VPS fleets and GCP environments, configure Nginx reverse proxies, and orchestrate processes with PM2 and systemd — backed by hands-on backend (Node.js, Express, GraphQL) and frontend (React, Next.js) engineering.",
  available: true,
};

export type Stat = { value: string; label: string; icon: IconName };

export const stats: Stat[] = [
  { value: "5", label: "Production VPS automated", icon: "server" },
  { value: "Zero-touch", label: "Deployments on every push", icon: "workflow" },
  { value: "Multi-node", label: "Docker Swarm orchestration", icon: "container" },
  { value: "2", label: "Engineering internships", icon: "briefcase" },
];

export type SkillGroup = {
  title: string;
  icon: IconName;
  accent: "accent" | "cyan" | "violet";
  span: "wide" | "tall" | "normal";
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "DevOps & Infrastructure",
    icon: "container",
    accent: "accent",
    span: "wide",
    blurb: "Containerize, orchestrate, and ship reliably across a cluster.",
    items: [
      "Docker",
      "Docker Compose",
      "Docker Swarm",
      "CI/CD Pipelines",
      "Nginx (Reverse Proxy & LB)",
      "PM2",
      "systemd",
      "VPS Administration",
      "Linux",
      "Bash Scripting",
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: "cloud",
    accent: "cyan",
    span: "tall",
    blurb: "Provision and deploy cloud-hosted services with automated workflows.",
    items: [
      "Google Cloud Platform",
      "Contabo VPS",
      "Pull-and-Deploy Automation",
      "Containerized Deployments",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    accent: "accent",
    span: "normal",
    blurb: "Scalable APIs and server-side logic.",
    items: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: "code",
    accent: "violet",
    span: "normal",
    blurb: "Fast, animated, responsive interfaces.",
    items: ["React.js", "Next.js", "JavaScript", "GSAP", "Framer Motion"],
  },
  {
    title: "Databases",
    icon: "database",
    accent: "cyan",
    span: "normal",
    blurb: "Relational and document data.",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Version Control & Practices",
    icon: "gitBranch",
    accent: "accent",
    span: "normal",
    blurb: "Disciplined, test-driven delivery.",
    items: [
      "Git & GitHub",
      "Branch & PR Workflows",
      "Test-Driven Development",
      "Project Management",
      "Critical Thinking",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "DevOps & Full-Stack Developer Intern",
    company: "VrixaaLabs",
    period: "Jun 2025 — May 2026",
    current: true,
    summary:
      "Owned deployment automation and infrastructure for a multi-node production cluster while building a scalable social platform end to end.",
    points: [
      "Built and maintained CI/CD pipelines that automated pull-and-deploy workflows across 5 production VPS instances (Contabo), enabling consistent, zero-touch deployments on every code push.",
      "Containerized and orchestrated services with Docker, Docker Compose, and Docker Swarm, supporting multi-node scaling and reliable rollouts across the cluster.",
      "Configured Nginx as a reverse proxy to route and load-balance traffic across multiple application instances.",
      "Managed application processes and zero-downtime restarts using PM2 and systemd across all server environments.",
      "Spearheaded full-stack development of a scalable social-media platform, building GraphQL APIs with Node.js/Express and dynamic React.js/Next.js frontends.",
    ],
    stack: ["Docker Swarm", "CI/CD", "Nginx", "PM2", "Node.js", "GraphQL", "Next.js"],
  },
  {
    role: "Software Developer Intern",
    company: "Aortem.io",
    period: "Oct 2025 — Feb 2026",
    current: false,
    summary:
      "Engineered a sophisticated QA testing platform across the stack and streamlined its release process on Google Cloud.",
    points: [
      "Designed and implemented automated deployment pipelines, streamlining the release process for a QA testing platform.",
      "Worked with Google Cloud Platform (GCP) to provision and deploy cloud-hosted application services.",
      "Engineered both frontend and backend architecture for a sophisticated QA testing application, integrating Dart SDKs for cross-platform performance.",
      "Built a fully functional in-app code editor for real-time test execution and a seamless developer workflow.",
      "Implemented secure third-party API integrations, including GitHub, for repository syncing and management.",
    ],
    stack: ["GCP", "CI/CD", "Dart SDK", "GitHub API", "Full-Stack"],
  },
];

export type Project = {
  name: string;
  tag: string;
  org: string;
  icon: IconName;
  accent: "accent" | "cyan" | "violet";
  description: string;
  highlights: string[];
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "Zero-Touch CI/CD Pipeline",
    tag: "Infrastructure",
    org: "VrixaaLabs",
    icon: "workflow",
    accent: "accent",
    featured: true,
    description:
      "An automated pull-and-deploy system delivering zero-touch releases across a 5-node production VPS fleet on every code push.",
    highlights: [
      "5 production VPS, one git push to ship",
      "Nginx reverse proxy + load balancing",
      "Zero-downtime restarts via PM2 & systemd",
    ],
    stack: ["Docker Swarm", "Nginx", "Bash", "PM2", "systemd", "Contabo"],
  },
  {
    name: "Scalable Social Platform",
    tag: "Full-Stack",
    org: "VrixaaLabs",
    icon: "layers",
    accent: "cyan",
    featured: true,
    description:
      "A social-media application with a robust GraphQL backend and dynamic, animated React/Next.js frontends — containerized and orchestrated for multi-node scaling.",
    highlights: [
      "GraphQL APIs on Node.js / Express",
      "Dynamic React.js & Next.js frontends",
      "Containerized for multi-node scaling",
    ],
    stack: ["GraphQL", "Node.js", "Express", "Next.js", "MongoDB", "Docker"],
  },
  {
    name: "QA Testing Platform",
    tag: "Product",
    org: "Aortem.io",
    icon: "terminal",
    accent: "violet",
    featured: false,
    description:
      "A sophisticated QA testing application with a built-in, fully functional in-app code editor for real-time test execution and GitHub-synced repositories.",
    highlights: [
      "In-app code editor, real-time execution",
      "Dart SDK cross-platform integration",
      "Secure GitHub repo sync & management",
    ],
    stack: ["GCP", "Dart SDK", "GitHub API", "CI/CD"],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Tezpur University",
    period: "2024 — 2028",
    detail: "GPA 7.5 / 10",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

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
  github: "https://github.com/minkha-afk",
  linkedin: "https://www.linkedin.com/in/minhazul-i-choudhury-a64073326/",
  resumeUrl: "/Minhazul_Islam_Choudhury_Resume_1Page.pdf",
  summary:
    "DevOps-focused full-stack engineer specializing in automated multi-server deployments, CI/CD pull-and-deploy pipelines, and containerized microservices with Docker, Docker Compose, and Docker Swarm. I administer Linux VPS fleets and GCP environments, configure Nginx reverse proxies and load balancing, and orchestrate zero-downtime releases with PM2 and systemd — pairing strong infrastructure work with production full-stack delivery across Node.js, Express, GraphQL, React, and Next.js.",
  available: true,
};

export type Stat = { value: string; label: string; icon: IconName };

export const stats: Stat[] = [
  { value: "5", label: "Production VPS automated", icon: "server" },
  { value: "Zero-touch", label: "Deploys on every push", icon: "workflow" },
  { value: "3", label: "Full-stack apps shipped", icon: "rocket" },
  { value: "Multi-node", label: "Docker Swarm clusters", icon: "container" },
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
      "Nginx (Reverse Proxy & LB)",
      "Multi-Stage Builds",
      "PM2",
      "systemd",
      "Health Checks",
      "Load Testing (Artillery)",
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
      "Vercel",
      "Render",
      "Contabo VPS",
      "MongoDB Atlas",
      "Pull-and-Deploy Automation",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    accent: "accent",
    span: "normal",
    blurb: "Scalable APIs, microservices, and server-side logic.",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Microservices",
      "JWT & RBAC",
      "Socket.IO",
    ],
  },
  {
    title: "Frontend",
    icon: "code",
    accent: "violet",
    span: "normal",
    blurb: "Fast, animated, responsive interfaces.",
    items: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    accent: "cyan",
    span: "normal",
    blurb: "Relational and document data.",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas", "PostgreSQL"],
  },
  {
    title: "Version Control & Practices",
    icon: "gitBranch",
    accent: "accent",
    span: "normal",
    blurb: "Disciplined, test-driven delivery.",
    items: [
      "Git & GitHub",
      "GitLab",
      "Branch & PR Workflows",
      "Monorepo Management",
      "Test-Driven Development",
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
      "Load-tested the cluster with Artillery — simulating thousands of concurrent users and sustained traffic spikes — to validate Nginx load balancing, capacity limits, and zero-downtime rollouts; profiled the results to remove bottlenecks and keep p95 latency stable under peak load.",
      "Managed application processes and zero-downtime restarts using PM2 and systemd across all server environments.",
      "Spearheaded full-stack development of a scalable social-media platform, building GraphQL APIs with Node.js/Express and dynamic React.js/Next.js frontends.",
    ],
    stack: ["Docker Swarm", "CI/CD", "Nginx", "Artillery", "PM2", "Node.js", "GraphQL", "Next.js"],
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
  url: string; // live demo
  icon: IconName;
  accent: "accent" | "cyan" | "violet";
  description: string;
  highlights: string[];
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "MedClarity",
    tag: "AI · Healthcare",
    url: "https://pyro-six.vercel.app",
    icon: "sparkles",
    accent: "accent",
    featured: true,
    description:
      "An AI healthcare platform that turns medical PDFs and images into safe, patient-friendly explanations — with multilingual voice, a Telegram bot client, and auto-generated medication reminders.",
    highlights: [
      "Google Gemini Vision reads medical PDFs/images into safe, non-diagnostic summaries",
      "Multilingual voice across 10 Indian languages (Edge TTS + ElevenLabs)",
      "Prescription parser → structured JSON + .ics email reminders via Nodemailer",
      "Telegram bot client reusing one shared Next.js API layer across web & chat",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini Vision",
      "ElevenLabs",
      "Edge TTS",
      "Telegram API",
      "Vercel",
    ],
  },
  {
    name: "Elevana",
    tag: "Microservices · EdTech",
    url: "https://elevana-rosy.vercel.app",
    icon: "container",
    accent: "cyan",
    featured: true,
    description:
      "A full-stack e-learning platform built as four Dockerized microservices (auth, catalog, learning, chat) over a shared MongoDB Atlas database, with real-time classrooms and a teacher studio.",
    highlights: [
      "4-service microservices architecture on a shared, domain-scoped MongoDB Atlas",
      "Multi-stage Docker builds deployed across Vercel, Render & Atlas with health checks",
      "JWT auth + RBAC, ownership checks, and server-side quiz grading",
      "Real-time Socket.IO chat (presence, typing, enrollment-gated channels)",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Express",
      "MongoDB Atlas",
      "Socket.IO",
      "JWT",
      "Docker",
      "shadcn/ui",
    ],
  },
  {
    name: "AdAlign",
    tag: "AI · Marketing",
    url: "https://ad-align.vercel.app",
    icon: "zap",
    accent: "violet",
    featured: false,
    description:
      "An AI dashboard that analyzes ad creatives and generates personalized landing pages aligned to each ad's headline, CTA, tone, audience, and brand — through a multi-step Next.js generation pipeline.",
    highlights: [
      "Generates landing pages aligned to an ad's headline, CTA, tone & brand",
      "Multi-step Next.js API pipeline: analyze → extract → generate → validate",
      "Hardened with API-key validation, model fallback, retry & rate-limit handling",
      "Multimodal AI via OpenRouter from uploaded ad images or image URLs",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenRouter",
      "Gemini",
      "REST API",
    ],
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

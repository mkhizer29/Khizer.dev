// ═══════════════════════════════════════════════════════
// DOMAIN DATA — The three engineering domains for the 3D carousel
// ═══════════════════════════════════════════════════════

export interface DomainProject {
  name: string;
  slug: string;
}

export interface Domain {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  color: string;         // hex accent
  colorRgb: string;      // rgb values for glow
  projects: DomainProject[];
  sectionId: string;     // scroll target
}

export const domains: Domain[] = [
  {
    id: "ai-systems",
    label: "AI SYSTEMS",
    subtitle: "Intelligence Layer",
    description:
      "Applied AI, RAG workflows, machine learning models, and intelligent automation.",
    color: "#6FA8DC",
    colorRgb: "111, 168, 220",
    projects: [
      { name: "Lumo Assistant", slug: "lumo-assistant" },
      { name: "Kaggle ML Competitions", slug: "kaggle-ml" },
      { name: "AI Maze Solver", slug: "ai-maze-solver" },
    ],
    sectionId: "aiml",
  },
  {
    id: "web-systems",
    label: "WEB SYSTEMS",
    subtitle: "Application Layer",
    description:
      "Full-stack platforms, backend APIs, dashboards, and real product workflows.",
    color: "#E9A93A",
    colorRgb: "233, 169, 58",
    projects: [
      { name: "UniPool", slug: "unipool" },
      { name: "S.H.A.R.E", slug: "share" },
      { name: "Campus Lost & Found", slug: "lost-and-found" },
    ],
    sectionId: "fullstack",
  },
  {
    id: "secure-systems",
    label: "SECURE SYSTEMS",
    subtitle: "Security Layer",
    description:
      "Distributed systems, operating systems, blockchain logic, testing, and secure workflows.",
    color: "#8B5CF6",
    colorRgb: "139, 92, 246",
    projects: [
      { name: "Distributed Crawler / PageRank", slug: "distributed-pagerank" },
      { name: "xv6 MLFQ Scheduler", slug: "xv6-mlfq" },
      { name: "Bitcoin Node / Solidity Banking", slug: "bitcoin-node" },
    ],
    sectionId: "systems",
  },
];

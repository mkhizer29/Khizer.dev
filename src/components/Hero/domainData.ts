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
      "RAG systems, ML pipelines, model evaluation, cited AI tools.",
    color: "#6FA8DC",
    colorRgb: "111, 168, 220",
    projects: [
      { name: "Lumo Assistant", slug: "lumo-assistant" },
      { name: "Kaggle ML Competitions", slug: "kaggle-ml" },
      { name: "AI Maze Solver", slug: "ai-maze-solver" },
    ],
    sectionId: "projects-ai",
  },
  {
    id: "product-builds",
    label: "PRODUCT BUILDS",
    subtitle: "Application Layer",
    description:
      "SaaS platforms, backend APIs, dashboards, real product workflows.",
    color: "#E9A93A",
    colorRgb: "233, 169, 58",
    projects: [
      { name: "UniPool", slug: "unipool" },
      { name: "S.H.A.R.E", slug: "share" },
      { name: "Campus Lost & Found", slug: "lost-and-found" },
    ],
    sectionId: "projects-fullstack",
  },
  {
    id: "secure-engineering",
    label: "SECURE ENGINEERING",
    subtitle: "Trust Layer",
    description:
      "API testing, RBAC, authentication, PII protection, database validation.",
    color: "#8B5CF6",
    colorRgb: "139, 92, 246",
    projects: [
      { name: "Lumo QA", slug: "lumo-qa" },
      { name: "UniPool Testing", slug: "unipool-testing" },
      { name: "Lost & Found RBAC", slug: "lf-rbac" },
      { name: "S.H.A.R.E Privacy", slug: "share-privacy" },
    ],
    sectionId: "projects-systems",
  },
];

// ═══════════════════════════════════════════════════════
// PROJECTS DATA — Central data file for all portfolio projects
// Edit this file to update project info across the entire site.
// ═══════════════════════════════════════════════════════

export type ProjectDomain =
  | "ai-systems"
  | "product-builds"
  | "secure-engineering"
  | "systems"
  | "blockchain";

export type ProjectCategory = "fullstack" | "ai-ml" | "systems";

export interface ProjectColors {
  primary: string;
  secondary: string;
  bg: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  domains: ProjectDomain[];
  category: ProjectCategory;
  colors: ProjectColors;
  tags: string[];
  stack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  role?: string;
  impact?: string;
  challenges?: string[];
  securityNotes?: string;
  metrics?: Record<string, string>;
}

export const projects: Project[] = [
  // ── Full-Stack / Frontend / Backend ──────────────────

  {
    slug: "unipool",
    title: "UniPool",
    tagline: "University Carpooling Platform",
    description:
      "Verified campus ride-sharing platform for IBA students with IBA-email-only access, scheduled/instant rides, gender-aware ride options, driver onboarding, vehicle management, ride publishing, route intelligence, stop sequencing, fare suggestions, live tracking, payment settlement, mutual ratings, and license-plate verification.",
    domains: ["product-builds", "secure-engineering"],
    category: "fullstack",
    colors: {
      primary: "#F4B64A",
      secondary: "#111827",
      bg: "rgba(244,182,74,0.04)",
      text: "#F9F6EF",
    },
    tags: ["Full-Stack", "Backend/API", "Frontend", "PostgreSQL", "Prisma", "Auth", "Real-Time", "Route Intelligence"],
    stack: [
      "React 19", "Vite", "Node.js", "Express",
      "PostgreSQL", "Prisma", "JWT",
      "Leaflet", "OSRM", "Nominatim", "SSE",
    ],
    github: "https://github.com/aimansabir/Uni-Pool-Project",
    featured: true,
    role: "Full-Stack Developer",
    impact: "Built a complete campus mobility platform handling real-time ride matching for 100+ concurrent users.",
    challenges: [
      "Designed route intelligence with OSRM for optimal stop sequencing and fare calculation",
      "Built SSE-based live tracking with sub-second position updates",
      "Implemented gender-aware matching logic with privacy-first filtering",
      "Created JWT auth flow with IBA-email-only domain restriction",
    ],
    securityNotes: "JWT-based auth, IBA-email domain restriction, license-plate verification, input validation on all API endpoints.",
  },

  {
    slug: "share",
    title: "S.H.A.R.E",
    tagline: "Mental Health SaaS Platform",
    description:
      "Multi-role mental-health SaaS platform for patients, professionals, and admins, with protected portals for bookings, chat, mood tracking, professional verification, analytics, crisis workflows, pseudonymous access, professional discovery, appointment booking, and secure messaging.",
    domains: ["product-builds", "secure-engineering"],
    category: "fullstack",
    colors: {
      primary: "#7C3AED",
      secondary: "#A78BFA",
      bg: "rgba(124,58,237,0.04)",
      text: "#F5F3FF",
    },
    tags: ["Frontend/UIUX", "SaaS", "Firebase", "Firestore", "Auth", "Privacy", "Role-Based Access"],
    stack: [
      "React", "Vite", "Tailwind CSS",
      "Firebase Auth", "Firestore", "Zustand",
    ],
    live: "https://share-platform-2a6a2.web.app",
    featured: true,
    role: "Frontend & UX Lead",
    impact: "Delivered a privacy-first mental health platform supporting 3 user roles with pseudonymous patient access.",
    challenges: [
      "Designed multi-role portal architecture with Firebase custom claims",
      "Built real-time chat with Firestore listeners and message encryption",
      "Implemented mood tracking analytics with Zustand state management",
      "Created crisis workflow with immediate escalation and notification triggers",
    ],
    securityNotes: "Pseudonymous patient IDs, role-based Firestore rules, professional verification workflow, encrypted messaging.",
  },

  {
    slug: "lost-and-found",
    title: "Campus Lost & Found",
    tagline: "Management System",
    description:
      "Full-stack campus Lost & Found platform for reporting, searching, claiming, and managing lost/found items. Includes normalized Oracle database, weighted SQL matching algorithm, OTP email verification, high-value claim approval rules, RBAC-based admin controls, and PII-protection workflows.",
    domains: ["product-builds", "secure-engineering"],
    category: "fullstack",
    colors: {
      primary: "#DC2626",
      secondary: "#991B1B",
      bg: "rgba(220,38,38,0.04)",
      text: "#F3F4F6",
    },
    tags: ["Full-Stack", "Flask", "Oracle SQL", "RBAC", "OTP", "Database", "PII Protection"],
    stack: ["React", "Flask", "Oracle SQL", "OTP Verification", "RBAC"],
    featured: true,
    role: "Full-Stack Developer",
    impact: "Built a campus-wide item recovery system with intelligent matching that reduced manual search time by 60%.",
    challenges: [
      "Designed weighted SQL matching algorithm scoring item similarity across attributes",
      "Built OTP email verification for claim authenticity",
      "Implemented high-value item approval workflow with admin escalation",
      "Created normalized Oracle DB schema for items, claims, users, and audit logs",
    ],
    securityNotes: "RBAC admin controls, OTP verification, PII-protection on user data, proxied messaging between claimants.",
  },

  {
    slug: "lumo-assistant",
    title: "Lumo Assistant",
    tagline: "AI Academic RAG Chatbot Platform",
    description:
      "AI academic assistant where students select subject-specific chatbots and receive cited answers from curated textbooks, lecture notes, and past papers. Includes Supabase authentication, protected dashboard routing, subject workspace loading, chat navigation, and admin-controlled subject creation.",
    domains: ["ai-systems", "product-builds", "secure-engineering"],
    category: "fullstack",
    colors: {
      primary: "#00e5ff",
      secondary: "#0891b2",
      bg: "rgba(0,229,255,0.04)",
      text: "#ecfeff",
    },
    tags: ["AI Product", "Next.js", "Supabase", "RAG", "Auth", "Dashboard", "QA Planning"],
    stack: [
      "Next.js", "React", "TypeScript", "Supabase",
      "Tailwind CSS", "AnythingLLM", "REST APIs", "RAG",
    ],
    github: "https://github.com/aimansabir/Lumo-Assistant",
    featured: true,
    role: "Lead Developer",
    impact: "Built an AI academic tool serving cited answers from curated knowledge bases across multiple university subjects.",
    challenges: [
      "Architected RAG pipeline with AnythingLLM for subject-specific knowledge retrieval",
      "Designed structured workspace naming convention for scalable knowledge base management",
      "Built Supabase auth with protected dashboard routing and session persistence",
      "Created admin interface for subject creation and workspace configuration",
    ],
    securityNotes: "QA/security planning for citation integrity, answer reliability, role-based access, performance, and CI quality gates.",
  },

  // ── AI / ML ──────────────────────────────────────────

  {
    slug: "kaggle-ml",
    title: "Kaggle Tabular ML",
    tagline: "Classification & Regression Ensemble Modeling",
    description:
      "End-to-end ML pipelines for imbalanced insurance-claims classification and housing-price regression using preprocessing, feature selection, PCA, cross-validation, model benchmarking, and boosted-tree stacking.",
    domains: ["ai-systems"],
    category: "ai-ml",
    colors: {
      primary: "#3B82F6",
      secondary: "#64748B",
      bg: "rgba(59,130,246,0.04)",
      text: "#E2E8F0",
    },
    tags: ["Machine Learning", "Classification", "Regression", "Ensemble", "Data Science"],
    stack: [
      "Python", "scikit-learn", "XGBoost", "LightGBM",
      "CatBoost", "Logistic Regression", "PCA", "GridSearchCV",
    ],
    featured: false,
    role: "ML Engineer",
    impact: "Achieved 0.64560 AUROC for classification and 12.58 RMSE for regression using ensemble stacking methods.",
    challenges: [
      "Handled severe class imbalance in insurance claims dataset with SMOTE and class weights",
      "Built ensemble stacking pipeline combining XGBoost, LightGBM, and CatBoost",
      "Optimized hyperparameters using GridSearchCV with stratified cross-validation",
      "Applied PCA for dimensionality reduction while preserving 95% variance",
    ],
    metrics: { "AUROC": "0.64560", "RMSE": "12.58116" },
  },

  {
    slug: "ai-maze-solver",
    title: "AI Maze Solver",
    tagline: "EA vs PSO Pathfinding",
    description:
      "Interactive maze-solving simulator comparing Evolutionary Algorithm and Particle Swarm Optimization for pathfinding, with real-time path animation and performance analytics.",
    domains: ["ai-systems"],
    category: "ai-ml",
    colors: {
      primary: "#22C55E",
      secondary: "#166534",
      bg: "rgba(34,197,94,0.04)",
      text: "#F0FDF4",
    },
    tags: ["Metaheuristics", "Pathfinding", "Visualization", "Algorithm Comparison"],
    stack: [
      "Python", "Pygame", "Evolutionary Algorithm",
      "Particle Swarm Optimization", "Matplotlib",
    ],
    featured: false,
    role: "Algorithm Developer",
    impact: "PSO achieved ~15% faster convergence than EA in maze pathfinding benchmarks.",
    challenges: [
      "Implemented custom PSO particle representation for discrete maze grid traversal",
      "Designed fitness function balancing path length, validity, and convergence speed",
      "Built real-time Pygame visualization for path evolution across generations",
      "Created comparative analytics dashboard with Matplotlib for algorithm benchmarking",
    ],
    metrics: { "PSO Speedup": "~15%" },
  },

  // ── Systems ──────────────────────────────────────────

  {
    slug: "distributed-pagerank",
    title: "Distributed PageRank",
    tagline: "Web Crawler & Parallel PageRank Engine",
    description:
      "Distributed graph-processing pipeline that fetches archived pages from CommonCrawl, extracts hyperlinks, constructs directed graphs, and computes PageRank using Ray workers and actor-based shared state.",
    domains: ["systems"],
    category: "systems",
    colors: {
      primary: "#0E7490",
      secondary: "#38BDF8",
      bg: "rgba(14,116,144,0.04)",
      text: "#CBD5E1",
    },
    tags: ["Distributed Computing", "Graph Processing", "Web Crawling", "Parallel"],
    stack: ["Python", "Ray", "NetworkX", "CommonCrawl", "BeautifulSoup"],
    featured: false,
    role: "Systems Developer",
    impact: "Processed graphs of ~37K nodes and ~68K directed edges using distributed Ray workers.",
    challenges: [
      "Designed actor-based shared state for concurrent graph construction across Ray workers",
      "Built efficient hyperlink extraction pipeline from CommonCrawl WARC archives",
      "Implemented iterative PageRank with convergence detection and damping factor tuning",
      "Handled worker failures and retry logic in distributed crawling pipeline",
    ],
    metrics: { "Nodes": "~37K", "Edges": "~68K" },
  },

  {
    slug: "xv6-mlfq",
    title: "xv6 MLFQ Scheduler",
    tagline: "OS Scheduling Implementation",
    description:
      "Operating systems project implementing Multi-Level Feedback Queue scheduling with process priority management, timer tick accounting, starvation prevention, and scheduler behavior analysis.",
    domains: ["systems"],
    category: "systems",
    colors: {
      primary: "#A3E635",
      secondary: "#F59E0B",
      bg: "rgba(163,230,53,0.04)",
      text: "#E5E7EB",
    },
    tags: ["Operating Systems", "Kernel", "Scheduling", "C Programming"],
    stack: ["C", "xv6", "Operating Systems"],
    featured: false,
    role: "Systems Programmer",
    impact: "Implemented MLFQ scheduling in xv6 kernel with starvation prevention and priority boosting.",
    challenges: [
      "Modified xv6 kernel scheduler to support multiple priority queues",
      "Implemented timer tick accounting for CPU burst tracking per process",
      "Built starvation prevention with periodic priority boosting across all queues",
      "Analyzed scheduler behavior under mixed I/O-bound and CPU-bound workloads",
    ],
  },

  {
    slug: "bitcoin-node",
    title: "Bitcoin Full Node & Miner",
    tagline: "Blockchain Node Implementation",
    description:
      "Blockchain node/miner implementing proof-of-work mining, UTXO validation, transaction verification, double-spend prevention, chain validation, and signature verification.",
    domains: ["secure-engineering", "blockchain"],
    category: "systems",
    colors: {
      primary: "#F59E0B",
      secondary: "#B45309",
      bg: "rgba(245,158,11,0.04)",
      text: "#FDE68A",
    },
    tags: ["Blockchain", "Cryptography", "P2P", "Proof-of-Work"],
    stack: ["Python", "Blockchain Concepts"],
    featured: false,
    role: "Blockchain Developer",
    impact: "Built a working Bitcoin-style full node with complete UTXO validation and proof-of-work mining.",
    challenges: [
      "Implemented UTXO model with transaction input/output validation",
      "Built proof-of-work mining with adjustable difficulty targeting",
      "Created chain validation with fork detection and longest-chain selection",
      "Designed signature verification for transaction authenticity",
    ],
  },

  {
    slug: "solidity-banking",
    title: "Solidity Banking Contract",
    tagline: "Ethereum Smart Contract",
    description:
      "Smart contract implementing banking-style operations with blockchain-based account and transaction logic on Ethereum.",
    domains: ["secure-engineering", "blockchain"],
    category: "systems",
    colors: {
      primary: "#F59E0B",
      secondary: "#B45309",
      bg: "rgba(245,158,11,0.04)",
      text: "#FDE68A",
    },
    tags: ["Smart Contracts", "Ethereum", "DeFi", "Solidity"],
    stack: ["Solidity", "Ethereum", "Smart Contracts"],
    featured: false,
    role: "Smart Contract Developer",
    impact: "Deployed banking-style smart contract handling deposits, withdrawals, and transfers on Ethereum testnet.",
    challenges: [
      "Implemented reentrancy guards and withdrawal patterns for secure fund management",
      "Built role-based access control for admin operations",
    ],
  },
];

// ── Helper functions ──────────────────────────────────

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByDomain(domain: ProjectDomain): Project[] {
  return projects.filter((p) => p.domains.includes(domain));
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

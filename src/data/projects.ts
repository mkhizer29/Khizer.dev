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
export type ProjectType = "project" | "technical-study";
export type ShowcaseType = "app-window" | "technical-visual" | "none";

export interface ProjectColors {
  primary: string;
  secondary: string;
  bg: string;
  text: string;
}

export interface Project {
  slug: string;
  type: ProjectType;
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
  timeline?: string;
  team?: string;
  impact?: string;
  challenges?: string[];
  securityNotes?: string;
  metrics?: Record<string, string>;

  // ── New detailed fields for "Projects" ──
  showcaseType?: ShowcaseType;
  about?: {
    problem: string;
    solution: string;
    myRole: string;
  };
  features?: string[];
  stackDetails?: Record<string, string[]>;
  technicalHighlights?: string[];
  learnings?: string[];

  // ── New detailed fields for "Technical Studies" ──
  technicalStudyDetails?: {
    studyType: string;
    focus: string;
    whatWasImplemented: string[];
    takeaway: string;
  };
}

export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════
  // MAIN PROJECTS
  // ═══════════════════════════════════════════════════════

  {
    slug: "unipool",
    type: "project",
    showcaseType: "app-window",
    title: "UniPool",
    tagline: "University Carpooling Platform",
    description: "Verified campus ride-sharing platform for IBA students with IBA-email-only access, scheduled/instant rides, gender-aware ride options, and live tracking.",
    domains: ["product-builds", "secure-engineering"],
    category: "fullstack",
    colors: {
      primary: "#F4B64A",
      secondary: "#111827",
      bg: "rgba(244,182,74,0.04)",
      text: "#F9F6EF",
    },
    tags: ["Full-Stack", "Backend/API", "Frontend", "PostgreSQL", "Prisma", "Auth", "Real-Time", "Route Intelligence"],
    stack: ["React 19", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Leaflet", "OSRM", "Nominatim", "SSE"],
    featured: true,
    role: "Full-Stack Developer",
    impact: "Built a complete campus mobility platform handling real-time ride matching for 100+ concurrent users.",
    
    about: {
      problem: "University students frequently struggle with expensive independent commutes or uncoordinated, unsafe carpooling arrangements.",
      solution: "A closed-loop, verified platform that exclusively connects students from the same university to share rides safely, reducing costs and carbon footprint.",
      myRole: "Architected the backend APIs, developed the route-matching algorithms, built the frontend UI, and integrated real-time tracking.",
    },
    features: [
      "IBA-email domain restricted authentication",
      "Real-time ride publishing and matching",
      "Gender-aware ride filtering logic",
      "Dynamic fare suggestions based on route distance",
      "Sub-second position updates via Server-Sent Events (SSE)",
      "Automated license-plate verification",
      "Mutual driver-passenger rating system",
    ],
    stackDetails: {
      "Frontend": ["React 19", "Vite", "Tailwind CSS"],
      "Backend": ["Node.js", "Express", "Prisma ORM"],
      "Mapping / Routing": ["Leaflet", "OSRM", "Nominatim", "SSE"],
      "Database": ["PostgreSQL"],
      "Auth / Security": ["JWT", "Domain Restriction"],
    },
    technicalHighlights: [
      "Designed route intelligence with OSRM for optimal stop sequencing",
      "Built low-latency SSE-based live tracking",
      "Created normalized relational schema for complex ride lifecycle states",
    ],
    learnings: [
      "Managing complex state transitions for real-time ride tracking taught me the importance of robust server-sent events over constant polling.",
    ],
  },

  {
    slug: "share",
    type: "project",
    showcaseType: "app-window",
    title: "S.H.A.R.E",
    tagline: "Mental Health SaaS Platform",
    description: "Multi-role mental-health SaaS platform for patients, professionals, and admins, with protected portals, secure messaging, and mood analytics.",
    domains: ["product-builds", "secure-engineering"],
    category: "fullstack",
    colors: {
      primary: "#7C3AED",
      secondary: "#A78BFA",
      bg: "rgba(124,58,237,0.04)",
      text: "#F5F3FF",
    },
    tags: ["Frontend/UIUX", "SaaS", "Firebase", "Firestore", "Auth", "Privacy", "Role-Based Access"],
    stack: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore", "Zustand"],
    live: "https://share-platform-2a6a2.web.app",
    featured: true,
    role: "Frontend & UX Lead",
    impact: "Delivered a privacy-first mental health platform supporting 3 user roles with pseudonymous patient access.",
    
    about: {
      problem: "Accessing mental health support is often hindered by privacy concerns and fragmented communication tools between patients and professionals.",
      solution: "A unified SaaS platform providing secure, pseudonymous portals for patients to book sessions, chat securely, and track moods while allowing professionals to manage cases.",
      myRole: "Led the frontend architecture, designed the UI/UX for all three role portals, and integrated Firebase backend services.",
    },
    features: [
      "Pseudonymous patient access and onboarding",
      "Multi-role dashboards (Admin, Professional, Patient)",
      "Secure real-time chat with message encryption",
      "Interactive mood tracking and analytics",
      "Appointment scheduling and professional discovery",
      "Automated crisis escalation workflows",
    ],
    stackDetails: {
      "Frontend": ["React", "Vite", "Tailwind CSS", "Zustand"],
      "Backend / DB": ["Firebase Auth", "Firestore"],
      "Auth / Security": ["Role-based Custom Claims", "Encrypted Messaging"],
    },
    technicalHighlights: [
      "Designed multi-role portal architecture with Firebase custom claims",
      "Built real-time chat with Firestore listeners",
      "Implemented mood tracking analytics with complex Zustand state management",
    ],
    learnings: [
      "Balancing high-security requirements with a seamless, comforting user experience requires deep integration between UX design and backend access control rules.",
    ],
  },

  {
    slug: "lumo-assistant",
    type: "project",
    showcaseType: "app-window",
    title: "Lumo Assistant",
    tagline: "AI Academic RAG Chatbot Platform",
    description: "AI academic assistant where students select subject-specific chatbots and receive cited answers from curated textbooks and lecture notes.",
    domains: ["ai-systems", "product-builds", "secure-engineering"],
    category: "fullstack",
    colors: {
      primary: "#00e5ff",
      secondary: "#0891b2",
      bg: "rgba(0,229,255,0.04)",
      text: "#ecfeff",
    },
    tags: ["AI Product", "Next.js", "Supabase", "RAG", "Auth", "Dashboard", "QA Planning"],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "AnythingLLM", "REST APIs", "RAG"],
    github: "https://github.com/aimansabir/Lumo-Assistant",
    featured: true,
    role: "Lead Developer",
    impact: "Built an AI academic tool serving cited answers from curated knowledge bases across multiple university subjects.",
    
    about: {
      problem: "Generic AI chatbots hallucinate academic facts. Students need reliable, cited answers based strictly on their actual course materials.",
      solution: "A Retrieval-Augmented Generation (RAG) platform that scopes AI answers exclusively to admin-curated textbooks and lecture slides per subject.",
      myRole: "Architected the Next.js frontend, Supabase backend, and integrated the AnythingLLM RAG pipeline via REST APIs.",
    },
    features: [
      "Subject-specific AI workspaces",
      "Strict RAG-enforced answer generation with citations",
      "Supabase authenticated user dashboards",
      "Admin interface for uploading and indexing course materials",
      "Persistent chat history and session management",
    ],
    stackDetails: {
      "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      "Backend": ["Supabase", "REST APIs"],
      "AI / ML": ["AnythingLLM", "RAG Pipeline"],
      "Auth / Security": ["Supabase Auth", "Workspace Isolation"],
    },
    technicalHighlights: [
      "Architected RAG pipeline with AnythingLLM for high-accuracy knowledge retrieval",
      "Designed structured workspace naming conventions for scalable context injection",
      "Built protected dashboard routing and session persistence",
    ],
    learnings: [
      "Tuning RAG chunking strategies and prompts was critical to eliminate hallucinations and ensure the AI always cited the specific lecture slide.",
    ],
  },

  {
    slug: "lost-and-found",
    type: "project",
    showcaseType: "app-window",
    title: "Campus Lost & Found",
    tagline: "Item Management System",
    description: "Full-stack campus Lost & Found platform for reporting, searching, claiming, and managing lost/found items with intelligent SQL matching.",
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

    about: {
      problem: "University lost and found systems are highly fragmented, leading to poor recovery rates and manual matching overhead.",
      solution: "A centralized platform utilizing an intelligent weighted matching algorithm to automatically connect lost reports with found reports.",
      myRole: "Designed the Oracle database schema, wrote the matching algorithms, and built the full-stack web application.",
    },
    features: [
      "Weighted SQL-based item matching algorithm",
      "OTP email verification for claim authenticity",
      "High-value claim approval workflow (Admin escalation)",
      "PII-protected proxied messaging between users",
      "Role-based access control (Students vs. Admins)",
      "Comprehensive audit logging",
    ],
    stackDetails: {
      "Frontend": ["React", "Tailwind CSS"],
      "Backend": ["Python", "Flask"],
      "Database": ["Oracle SQL"],
      "Auth / Security": ["OTP", "RBAC", "PII Protection"],
      "Algorithms": ["Weighted Feature Matching"],
    },
    technicalHighlights: [
      "Designed weighted SQL matching algorithm scoring item similarity across varying attributes",
      "Created a highly normalized Oracle DB schema",
      "Built secure claim workflows to prevent fraudulent item claiming",
    ],
    learnings: [
      "Building the weighted SQL matcher taught me how to handle fuzzy categorical comparisons directly within the database layer for performance.",
    ],
  },

  {
    slug: "ai-maze-solver",
    type: "project",
    showcaseType: "technical-visual",
    title: "AI Maze Solver",
    tagline: "EA vs PSO Pathfinding",
    description: "Interactive maze-solving simulator comparing Evolutionary Algorithm and Particle Swarm Optimization for pathfinding, with real-time analytics.",
    domains: ["ai-systems"],
    category: "ai-ml",
    colors: {
      primary: "#22C55E",
      secondary: "#166534",
      bg: "rgba(34,197,94,0.04)",
      text: "#F0FDF4",
    },
    tags: ["Metaheuristics", "Pathfinding", "Visualization", "Algorithm Comparison"],
    stack: ["Python", "Pygame", "Evolutionary Algorithm", "Particle Swarm Optimization", "Matplotlib"],
    featured: false,
    role: "Algorithm Developer",
    impact: "PSO achieved ~15% faster convergence than EA in maze pathfinding benchmarks.",

    about: {
      problem: "Understanding how different metaheuristic algorithms navigate discrete, highly constrained search spaces (like mazes) requires visual insight.",
      solution: "A visual simulation platform that pits Evolutionary Algorithms against Particle Swarm Optimization in real-time maze solving.",
      myRole: "Implemented both metaheuristic algorithms from scratch, designed the grid environment, and built the visualization engine.",
    },
    features: [
      "Real-time Pygame visualization of algorithm search spaces",
      "Custom discrete-space Particle Swarm Optimization implementation",
      "Evolutionary Algorithm with custom crossover/mutation logic",
      "Comparative analytics dashboard (Matplotlib)",
      "Dynamic maze generation",
    ],
    stackDetails: {
      "AI / ML": ["Evolutionary Algorithm", "Particle Swarm Optimization"],
      "Visualization": ["Pygame", "Matplotlib"],
      "Language": ["Python"],
    },
    technicalHighlights: [
      "Implemented custom PSO particle representation for discrete maze grid traversal",
      "Designed complex fitness function balancing path length, validity, and convergence speed",
    ],
    learnings: [
      "Adapting PSO, typically used for continuous spaces, to a discrete grid required creative velocity mapping techniques to prevent particles from jumping walls.",
    ],
  },

  {
    slug: "distributed-pagerank",
    type: "project",
    showcaseType: "technical-visual",
    title: "Distributed PageRank",
    tagline: "Web Crawler & Parallel PageRank Engine",
    description: "Distributed graph-processing pipeline that fetches archived pages, constructs directed graphs, and computes PageRank using Ray workers.",
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
    
    about: {
      problem: "Computing PageRank on large internet subgraphs cannot fit in memory and requires robust distributed computation.",
      solution: "A parallel pipeline using Ray that streams data from CommonCrawl, constructs the graph distributively, and iteratively computes PageRank.",
      myRole: "Engineered the Ray worker architecture, built the crawler parser, and implemented the distributed PageRank algorithm.",
    },
    features: [
      "Distributed task execution using Ray",
      "Actor-based shared state management for graph building",
      "Parallel hyperlink extraction from CommonCrawl WARC files",
      "Iterative PageRank computation with dampening and convergence detection",
      "Fault-tolerant worker retry logic",
    ],
    stackDetails: {
      "Distributed Processing": ["Ray Framework"],
      "Data Processing": ["NetworkX", "BeautifulSoup", "CommonCrawl API"],
      "Language": ["Python"],
    },
    technicalHighlights: [
      "Designed actor-based shared state for concurrent graph construction across Ray workers",
      "Built an efficient, memory-safe pipeline to parse massive WARC archives",
      "Implemented PageRank convergence detection across partitioned graphs",
    ],
    learnings: [
      "Managing distributed state and handling out-of-memory errors taught me the nuances of parallel graph processing and actor synchronization.",
    ],
  },

  // ═══════════════════════════════════════════════════════
  // TECHNICAL STUDIES
  // ═══════════════════════════════════════════════════════

  {
    slug: "kaggle-ml",
    type: "technical-study",
    title: "Kaggle ML Work",
    tagline: "Tabular ML & Ensemble Modeling",
    description: "End-to-end ML pipelines for imbalanced classification and regression.",
    domains: ["ai-systems"],
    category: "ai-ml",
    colors: { primary: "#3B82F6", secondary: "#64748B", bg: "rgba(59,130,246,0.04)", text: "#E2E8F0" },
    tags: ["Machine Learning", "Ensemble"],
    stack: ["Python", "scikit-learn", "XGBoost", "LightGBM"],
    featured: false,
    technicalStudyDetails: {
      studyType: "Applied Machine Learning Study",
      focus: "Imbalanced Data, Dimensionality Reduction, Stacking",
      whatWasImplemented: [
        "SMOTE & class weights for extreme class imbalance",
        "PCA dimensionality reduction preserving 95% variance",
        "Boosted-tree stacking ensemble (XGBoost, LightGBM, CatBoost)",
        "GridSearchCV stratified optimization",
      ],
      takeaway: "Deepened expertise in tabular data processing and tree-based ensemble models.",
    },
    metrics: { "AUROC": "0.64560", "RMSE": "12.58" },
  },

  {
    slug: "xv6-mlfq",
    type: "technical-study",
    title: "xv6 MLFQ Scheduler",
    tagline: "OS Scheduling Implementation",
    description: "Multi-Level Feedback Queue scheduling in the xv6 operating system.",
    domains: ["systems"],
    category: "systems",
    colors: { primary: "#A3E635", secondary: "#F59E0B", bg: "rgba(163,230,53,0.04)", text: "#E5E7EB" },
    tags: ["Operating Systems", "Kernel", "C"],
    stack: ["C", "xv6", "Operating Systems"],
    featured: false,
    technicalStudyDetails: {
      studyType: "Operating Systems Internals",
      focus: "Process Management, CPU Scheduling, Kernel Programming",
      whatWasImplemented: [
        "Multiple priority queues within xv6 kernel",
        "Timer tick accounting to track CPU bursts",
        "Starvation prevention via periodic priority boosting",
        "Analysis of mixed I/O vs CPU workloads",
      ],
      takeaway: "Strengthened understanding of kernel-level process scheduling and low-level C memory management.",
    },
  },

  {
    slug: "bitcoin-node",
    type: "technical-study",
    title: "Bitcoin Node / Miner",
    tagline: "Blockchain Node Implementation",
    description: "Working implementation of proof-of-work mining and UTXO validation.",
    domains: ["secure-engineering", "blockchain"],
    category: "systems",
    colors: { primary: "#F59E0B", secondary: "#B45309", bg: "rgba(245,158,11,0.04)", text: "#FDE68A" },
    tags: ["Blockchain", "Proof-of-Work", "Cryptography"],
    stack: ["Python", "Cryptography", "P2P"],
    featured: false,
    technicalStudyDetails: {
      studyType: "Blockchain Architecture Study",
      focus: "Consensus Mechanisms, Distributed Ledgers, Cryptography",
      whatWasImplemented: [
        "UTXO model with transaction input/output validation",
        "Proof-of-work mining with adjustable difficulty targets",
        "Longest-chain selection and fork resolution",
        "Cryptographic signature verification",
      ],
      takeaway: "Gained foundational insight into decentralized trust systems and cryptographic data structures.",
    },
  },

  {
    slug: "solidity-banking",
    type: "technical-study",
    title: "Solidity Banking",
    tagline: "Ethereum Smart Contract",
    description: "Banking-style smart contract on Ethereum testnet.",
    domains: ["secure-engineering", "blockchain"],
    category: "systems",
    colors: { primary: "#F59E0B", secondary: "#B45309", bg: "rgba(245,158,11,0.04)", text: "#FDE68A" },
    tags: ["Smart Contracts", "Solidity", "DeFi"],
    stack: ["Solidity", "Ethereum"],
    featured: false,
    technicalStudyDetails: {
      studyType: "Web3 Smart Contract Study",
      focus: "Smart Contract Security, EVM, DeFi Basics",
      whatWasImplemented: [
        "On-chain deposits, withdrawals, and account transfers",
        "Reentrancy guards and secure withdrawal patterns",
        "Role-based access controls for admin functions",
      ],
      takeaway: "Learned the critical security paradigms needed for immutable, public execution environments.",
    },
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

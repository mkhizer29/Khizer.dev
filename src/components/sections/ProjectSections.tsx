"use client";

import ProjectCategorySection from "./ProjectCategorySection";
import { projects } from "@/data/projects";

// Lumo appears in fullstack (as AI product) AND ai-ml (as RAG system)
const fullstackProjects = projects.filter(
  (p) => p.category === "fullstack"
);
const aiMlProjects = projects.filter(
  (p) => p.category === "ai-ml" || p.slug === "lumo-assistant"
);
const systemsProjects = projects.filter(
  (p) => p.category === "systems"
);

export default function ProjectSections() {
  return (
    <>
      {/* ── Full-Stack / Frontend / Backend ── */}
      <ProjectCategorySection
        id="projects-fullstack"
        title="Full-Stack Projects"
        subtitle="Application Layer"
        description="End-to-end platforms—from database design and backend APIs to interactive frontends. Each project handles real users, real data, and real impact."
        accentColor="#E9A93A"
        projects={fullstackProjects}
      />

      {/* ── AI & ML ── */}
      <ProjectCategorySection
        id="projects-ai"
        title="AI & ML Projects"
        subtitle="Intelligence Layer"
        description="RAG pipelines, ensemble learning, and metaheuristic optimization—building systems that learn, adapt, and reason from data."
        accentColor="#6FA8DC"
        projects={aiMlProjects}
      />

      {/* ── Systems ── */}
      <ProjectCategorySection
        id="projects-systems"
        title="Systems Projects"
        subtitle="Infrastructure Layer"
        description="OS kernels, distributed computing, and blockchain nodes—low-level engineering where correctness and performance are everything."
        accentColor="#8B5CF6"
        projects={systemsProjects}
      />
    </>
  );
}

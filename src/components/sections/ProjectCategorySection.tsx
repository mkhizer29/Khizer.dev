"use client";

import { motion } from "framer-motion";
import ProjectCard3D from "@/components/ui/ProjectCard3D";
import type { Project } from "@/data/projects";

interface ProjectCategorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  projects: Project[];
}

export default function ProjectCategorySection({
  id,
  title,
  subtitle,
  description,
  accentColor,
  projects,
}: ProjectCategorySectionProps) {
  return (
    <section
      id={id}
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div className="section-container relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-16 sm:mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: accentColor }} />
            <span
              className="text-[11px] font-mono tracking-[0.2em] uppercase"
              style={{ color: accentColor }}
            >
              {subtitle}
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "#f1f5f9",
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            {description}
          </p>
        </motion.div>

        {/* ── Project Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {projects.map((project, i) => (
            <ProjectCard3D key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

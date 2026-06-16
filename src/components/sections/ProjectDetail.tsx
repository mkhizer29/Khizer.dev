"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { primary, secondary, bg } = project.colors;

  return (
    <section
      id={`detail-${project.slug}`}
      className="py-20 sm:py-24 relative"
      style={{ background: "var(--color-bg-primary)" }}
    >
      {/* Project-colored radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 30% 20%, ${bg} 0%, transparent 70%)`,
        }}
      />

      <div className="section-container relative z-10 max-w-4xl">
        {/* Divider */}
        <div
          className="w-12 h-[2px] mb-8"
          style={{ background: `linear-gradient(90deg, ${primary}, transparent)` }}
        />

        {/* Title + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl sm:text-4xl tracking-tight mb-1"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
          >
            {project.title}
          </h2>
          <p className="text-sm font-mono tracking-wide mb-2" style={{ color: primary }}>
            {project.tagline}
          </p>

          {/* Role badge */}
          {project.role && (
            <span
              className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wider mb-6"
              style={{
                background: `${primary}12`,
                border: `1px solid ${primary}25`,
                color: `${primary}cc`,
              }}
            >
              {project.role}
            </span>
          )}
        </motion.div>

        {/* Impact statement */}
        {project.impact && (
          <motion.blockquote
            className="text-base sm:text-lg leading-relaxed mb-8 pl-4"
            style={{
              color: "var(--color-text-secondary)",
              borderLeft: `2px solid ${primary}40`,
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {project.impact}
          </motion.blockquote>
        )}

        {/* Description */}
        <motion.p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "var(--color-text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {project.description}
        </motion.p>

        {/* Two-column layout: Tech Stack + Metrics | Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Left: Stack + Tags + Metrics */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Tech Stack */}
            <h4
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: primary }}
            >
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Tags */}
            <h4
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: secondary }}
            >
              Categories
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider"
                  style={{
                    background: `${primary}10`,
                    border: `1px solid ${primary}18`,
                    color: `${primary}bb`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            {project.metrics && (
              <>
                <h4
                  className="text-xs font-mono tracking-widest uppercase mb-3"
                  style={{ color: primary }}
                >
                  Key Metrics
                </h4>
                <div className="space-y-2">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div key={key} className="flex items-baseline gap-2">
                      <span className="text-xs font-mono" style={{ color: "#55556a" }}>{key}</span>
                      <span className="text-sm font-semibold" style={{ color: primary }}>{val}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* Right: Challenges */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {project.challenges && project.challenges.length > 0 && (
              <>
                <h4
                  className="text-xs font-mono tracking-widest uppercase mb-4"
                  style={{ color: primary }}
                >
                  Engineering Challenges
                </h4>
                <ul className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: primary }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Security/QA Notes */}
            {project.securityNotes && (
              <div className="mt-6">
                <h4
                  className="text-xs font-mono tracking-widest uppercase mb-3"
                  style={{ color: "#a855f7" }}
                >
                  Security & QA
                </h4>
                <p
                  className="text-sm leading-relaxed pl-3"
                  style={{
                    color: "var(--color-text-muted)",
                    borderLeft: "2px solid rgba(168,85,247,0.2)",
                  }}
                >
                  {project.securityNotes}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Links */}
        <motion.div
          className="flex gap-4 pt-6"
          style={{ borderTop: `1px solid rgba(255,255,255,0.05)` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                background: `${primary}12`,
                border: `1px solid ${primary}25`,
                color: primary,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                background: `${primary}12`,
                border: `1px solid ${primary}25`,
                color: primary,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          )}
          {!project.github && !project.live && (
            <span
              className="text-xs font-mono tracking-wider"
              style={{ color: "#55556a" }}
            >
              Case study coming soon
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}

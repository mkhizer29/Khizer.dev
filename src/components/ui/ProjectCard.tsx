"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  accentColor?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  tagline,
  description,
  stack,
  github,
  live,
  accentColor = "#00e5ff",
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      className="glass-panel p-6 sm:p-8 flex flex-col gap-4 group relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      style={{
        borderColor: `rgba(${accentColor === "#00e5ff" ? "0,229,255" : accentColor === "#00ff88" ? "0,255,136" : "168,85,247"}, 0.08)`,
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor}08 0%, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10">
        <h3
          className="text-xl font-semibold mb-1"
          style={{ color: "var(--color-text-primary)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm font-mono tracking-wide"
          style={{ color: accentColor }}
        >
          {tagline}
        </p>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed relative z-10 line-clamp-4"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {stack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "var(--color-text-muted)",
            }}
          >
            {tech}
          </span>
        ))}
        {stack.length > 6 && (
          <span
            className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider"
            style={{ color: "var(--color-text-muted)" }}
          >
            +{stack.length - 6}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto pt-2 relative z-10">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wide transition-colors duration-300 hover:text-white"
            style={{ color: "var(--color-text-muted)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Source
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wide transition-colors duration-300"
            style={{ color: accentColor }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live
          </a>
        )}
      </div>

      {/* Accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />
    </motion.article>
  );
}

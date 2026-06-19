"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ui/ProjectDetail";

export default function MainProjectsSection() {
  const mainProjects = projects.filter((p) => p.type === "project");

  if (mainProjects.length === 0) return null;

  return (
    <section
      id="projects"
      className="relative border-t border-white/5 bg-[#080A0F]"
      style={{ paddingTop: '6rem', paddingBottom: '8rem' }}
    >
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative z-10">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '8rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-[#6FA8DC] font-mono text-base md:text-lg tracking-[0.2em] uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-widest text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              PROJECTS
            </h2>
            <p className="text-slate-400 max-w-none text-lg leading-8 text-center">
              Detailed case studies of full-stack platforms, AI systems, and distributed architectures.
            </p>
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {mainProjects.map((project, idx) => (
            <ProjectDetail key={project.slug} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

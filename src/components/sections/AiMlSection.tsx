"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjectsByDomain } from "@/data/projects";
import { motion } from "framer-motion";

export default function AiMlSection() {
  const aiProjects = getProjectsByDomain("ai-systems");

  return (
    <section
      id="ai-ml"
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      {/* Subtle cyan gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 20% 30%, rgba(0,229,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeading
          title="AI & ML SYSTEMS"
          subtitle="Intelligence Layer"
          accentColor="#00e5ff"
        />

        {/* RAG pipeline visual */}
        <motion.div
          className="glass-panel p-6 mb-12 overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 min-w-max">
            {[
              { label: "Documents", icon: "📄" },
              { label: "Embedding", icon: "🧬" },
              { label: "Vector DB", icon: "🗄️" },
              { label: "Query", icon: "🔍" },
              { label: "LLM", icon: "🧠" },
              { label: "Cited Answer", icon: "✅" },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div
                  className="flex flex-col items-center gap-1 px-4 py-3 rounded-lg min-w-[80px]"
                  style={{
                    background: "rgba(0,229,255,0.05)",
                    border: "1px solid rgba(0,229,255,0.1)",
                  }}
                >
                  <span className="text-lg">{step.icon}</span>
                  <span
                    className="text-[10px] font-mono tracking-wider text-center"
                    style={{ color: "#00e5ff" }}
                  >
                    {step.label}
                  </span>
                </div>
                {i < 5 && (
                  <span className="text-[var(--color-text-muted)]">→</span>
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-xs font-mono mt-4 tracking-wide" style={{ color: "var(--color-text-muted)" }}>
            RAG Pipeline — Retrieval Augmented Generation flow used in Lumo Assistant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              tagline={project.tagline}
              description={project.description}
              stack={project.stack}
              github={project.github}
              live={project.live}
              accentColor="#00e5ff"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

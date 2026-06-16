"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjectsByDomain } from "@/data/projects";
import { motion } from "framer-motion";

export default function SecuritySection() {
  const securityProjects = getProjectsByDomain("secure-engineering");

  return (
    <section
      id="security"
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 30% 50%, rgba(168,85,247,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeading
          title="SECURE ENGINEERING"
          subtitle="Trust Layer"
          accentColor="#a855f7"
        />

        {/* Security pillars */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: "RBAC", desc: "Role-based access control" },
            { label: "Auth Flows", desc: "JWT, OTP, session management" },
            { label: "PII Protection", desc: "Sensitive data handling" },
            { label: "API Testing", desc: "Endpoint validation & QA" },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.label}
              className="glass-panel p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              style={{
                borderColor: "rgba(168,85,247,0.1)",
              }}
            >
              <div
                className="text-sm font-mono font-bold tracking-wider mb-1"
                style={{ color: "#a855f7" }}
              >
                {pillar.label}
              </div>
              <div
                className="text-[11px] leading-tight"
                style={{ color: "var(--color-text-muted)" }}
              >
                {pillar.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              tagline={project.tagline}
              description={project.description}
              stack={project.stack}
              github={project.github}
              live={project.live}
              accentColor="#a855f7"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

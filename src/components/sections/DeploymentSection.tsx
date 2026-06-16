"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const pipelineSteps = [
  { label: "Code", icon: "💻", color: "#00e5ff" },
  { label: "GitHub", icon: "🔀", color: "#8a8a9a" },
  { label: "Build", icon: "🔧", color: "#00ff88" },
  { label: "Test", icon: "🧪", color: "#a855f7" },
  { label: "Deploy", icon: "🚀", color: "#00e5ff" },
  { label: "Monitor", icon: "📊", color: "#00ff88" },
];

const tools = [
  { name: "Firebase", category: "Hosting & Auth" },
  { name: "Vercel", category: "Deployment" },
  { name: "Supabase", category: "Backend-as-a-Service" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Oracle SQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Docker", category: "Containerization" },
];

export default function DeploymentSection() {
  return (
    <section
      id="deployment"
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div className="section-container">
        <SectionHeading
          title="ENGINEERING WORKFLOW"
          subtitle="DevOps & Infrastructure"
          accentColor="#00ff88"
        />

        {/* Pipeline animation */}
        <motion.div
          className="glass-panel p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
            {pipelineSteps.map((step, i) => (
              <motion.div
                key={step.label}
                className="flex items-center gap-2 min-w-max"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl"
                  whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                  style={{
                    background: `${step.color}08`,
                    border: `1px solid ${step.color}20`,
                  }}
                >
                  <span className="text-2xl">{step.icon}</span>
                  <span
                    className="text-xs font-mono tracking-wider font-medium"
                    style={{ color: step.color }}
                  >
                    {step.label}
                  </span>
                </motion.div>
                {i < pipelineSteps.length - 1 && (
                  <motion.span
                    className="text-lg"
                    style={{ color: "var(--color-text-muted)" }}
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  >
                    →
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tool grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="glass-panel p-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <div
                className="text-sm font-medium mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                {tool.name}
              </div>
              <div
                className="text-[10px] font-mono tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                {tool.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

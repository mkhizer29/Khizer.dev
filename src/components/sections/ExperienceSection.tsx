"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software & AI Developer",
    org: "Personal / Academic Projects",
    period: "2023 – Present",
    highlights: [
      "Built Lumo Assistant — an AI RAG chatbot platform for academic use",
      "Developed UniPool — a verified university carpooling platform",
      "Created S.H.A.R.E — a multi-role mental health SaaS",
      "Designed and tested secure RBAC, auth, and PII protection systems",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Kaggle Competitions",
    period: "2024",
    highlights: [
      "End-to-end ML pipelines for classification and regression tasks",
      "Ensemble methods with XGBoost, LightGBM, CatBoost stacking",
      "Feature engineering, PCA, cross-validation, hyperparameter tuning",
    ],
  },
  {
    role: "Systems Programmer",
    org: "Operating Systems & Distributed Computing",
    period: "2024",
    highlights: [
      "Implemented MLFQ scheduler in xv6 kernel",
      "Built distributed web crawler & parallel PageRank engine with Ray",
      "Blockchain node/miner with proof-of-work and UTXO validation",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="section-container">
        <SectionHeading
          title="EXPERIENCE & LEADERSHIP"
          subtitle="Timeline"
          accentColor="#00e5ff"
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: "var(--color-border-subtle)" }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                className="relative pl-12 sm:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 sm:left-6.5 top-2 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: "#00e5ff",
                    background: "var(--color-bg-primary)",
                  }}
                />

                <div className="glass-panel p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className="text-xs font-mono tracking-wider"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className="text-sm font-mono tracking-wide mb-3"
                    style={{ color: "#00e5ff" }}
                  >
                    {exp.org}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm leading-relaxed flex gap-2"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span style={{ color: "var(--color-text-muted)" }}>▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

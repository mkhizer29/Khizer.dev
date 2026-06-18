"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import TechnicalStudyCard from "@/components/ui/TechnicalStudyCard";

export default function TechnicalStudiesSection() {
  const studies = projects.filter((p) => p.type === "technical-study");

  if (studies.length === 0) return null;

  return (
    <section id="technical-studies" className="py-24 relative border-t border-white/5 bg-[#0a0c14]">
      
      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-400 font-mono text-sm tracking-[0.2em] uppercase mb-3 block">
            Academic & Deep Dives
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            TECHNICAL STUDIES
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Focused implementations exploring operating systems, machine learning, and blockchain architectures.
          </p>
        </motion.div>
      </div>

      {/* Studies List (Single column, dense rows) */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6">
        {studies.map((study, idx) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <TechnicalStudyCard project={study} />
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}

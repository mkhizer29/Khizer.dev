"use client";

import { Project } from "@/data/projects";

interface TechnicalStudyCardProps {
  project: Project;
}

export default function TechnicalStudyCard({ project }: TechnicalStudyCardProps) {
  const details = project.technicalStudyDetails;

  return (
    <div
      className="p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:border-white/20 group"
      style={{
        background: "rgba(10, 12, 18, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        
        {/* Left: Header & Summary */}
        <div className="md:w-5/12 space-y-4">
          <div>
            <span
              className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md mb-3"
              style={{
                background: `linear-gradient(135deg, ${project.colors.primary}22, transparent)`,
                border: `1px solid ${project.colors.primary}44`,
                color: project.colors.primary,
              }}
            >
              {details?.studyType || project.category}
            </span>
            <h3 className="text-2xl font-bold text-slate-200 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-300 border border-white/5 bg-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Technical Focus & Takeaway */}
        <div className="md:w-7/12 space-y-6">
          
          {details?.whatWasImplemented && details.whatWasImplemented.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Implementation Focus</h4>
              <ul className="space-y-2">
                {details.whatWasImplemented.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-slate-300">
                    <span style={{ color: project.colors.primary }}>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details?.takeaway && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Key Takeaway</h4>
              <p className="text-sm text-slate-400 italic">
                "{details.takeaway}"
              </p>
            </div>
          )}

          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <div className="flex gap-4 pt-2">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="px-3 py-1.5 rounded bg-white/5 border border-white/5">
                  <span className="block text-[10px] text-slate-500 uppercase">{key}</span>
                  <span className="text-sm font-semibold text-slate-200">{value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          {project.github && (
            <div className="pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                style={{ color: project.colors.primary }}
              >
                View Source Repository →
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

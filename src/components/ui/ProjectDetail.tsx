"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectShowcase from "./ProjectShowcase";
import StackBreakdown from "./StackBreakdown";

interface ProjectDetailProps {
  project: Project;
  index: number;
}

export default function ProjectDetail({ project, index }: ProjectDetailProps) {
  return (
    <div className="py-24 md:py-28 relative w-full border-b border-white/5 last:border-b-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          
          {/* Left Column: All Text Details */}
          <div className="space-y-16 relative z-10 pr-4 lg:pr-8">
            
            {/* 1. Project Header */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${project.colors.primary}11, transparent)`,
                      border: `1px solid ${project.colors.primary}66`,
                      color: project.colors.primary,
                    }}
                  >
                    {project.category}
                  </span>
                  {project.role && (
                    <span className="text-slate-400 text-xs font-medium pl-1">
                      {project.role}
                    </span>
                  )}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: project.colors.primary }}>
                  {project.tagline}
                </p>
                <p className="text-[15px] text-slate-300 leading-7 lg:leading-8 max-w-lg">
                  {project.description}
                </p>
              </div>

              {/* Stack Details Sidebar */}
              {project.stackDetails && (
                <div className="shrink-0 lg:w-[200px] lg:pt-14">
                  <StackBreakdown stackDetails={project.stackDetails} />
                </div>
              )}
            </div>

            {/* 2. About Cards (Problem, Solution, Role) */}
            {project.about && (
              <div className="flex flex-col gap-5 relative">
                
                {/* Connector Lines removed to prevent horizontal overflow constraints */}
                
                {/* Card 1: Problem */}
                <div 
                  className="p-5 rounded-2xl flex gap-4 items-start relative group bg-white/[0.03] backdrop-blur border border-white/10"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={project.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      <span className="mr-2 opacity-50" style={{ color: project.colors.primary }}>01.</span> 
                      Problem
                    </h3>
                    <p className="text-[13px] text-slate-400 leading-relaxed">
                      {project.about.problem}
                    </p>
                  </div>
                </div>

                {/* Card 2: Solution */}
                <div 
                  className="p-5 rounded-2xl flex gap-4 items-start relative group bg-white/[0.03] backdrop-blur border border-white/10"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={project.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      <span className="mr-2 opacity-50" style={{ color: project.colors.primary }}>02.</span> 
                      Solution
                    </h3>
                    <p className="text-[13px] text-slate-400 leading-relaxed">
                      {project.about.solution}
                    </p>
                  </div>
                </div>

                {/* Card 3: My Role */}
                <div 
                  className="p-5 rounded-2xl flex gap-4 items-start relative group bg-white/[0.03] backdrop-blur border border-white/10"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={project.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      <span className="mr-2 opacity-50" style={{ color: project.colors.primary }}>03.</span> 
                      My Role
                    </h3>
                    <p className="text-[13px] text-slate-400 leading-relaxed">
                      {project.about.myRole}
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* Rest of Details (Stack, Features, etc) */}
            <div className="space-y-16 pt-12 border-t border-white/5">
              
              {/* Stack Details moved to top */}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
                  <div className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.colors.primary }} />
                        <span className="text-[14px] text-slate-300 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                <div className="p-6 rounded-2xl border" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
                  <h3 className="text-lg font-bold text-white mb-4">Engineering Highlights</h3>
                  <ul className="space-y-3">
                    {project.technicalHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-[14px] text-slate-300 leading-relaxed">
                        <span className="font-mono text-xs mt-0.5 shrink-0" style={{ color: project.colors.primary }}>//</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Challenges & Learnings</h3>
                  <ul className="space-y-4">
                    {project.learnings.map((learning, idx) => (
                      <li key={idx} className="flex gap-3 text-[14px] text-slate-400 leading-relaxed">
                        <span className="shrink-0" style={{ color: project.colors.primary }}>✦</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Links */}
              <div className="pt-4 flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 text-sm rounded-xl font-semibold tracking-wide transition-all hover:scale-105 shadow-lg"
                    style={{
                      background: project.colors.primary,
                      color: project.colors.secondary,
                    }}
                  >
                    Visit Live Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 text-sm rounded-xl font-semibold tracking-wide transition-all hover:scale-105 flex items-center gap-2"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#f8fafc",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    View Source
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Visual / UI Showcase */}
          <div className="relative flex w-full justify-center lg:justify-end">
            <div className="sticky top-32 z-20 w-full">
              <ProjectShowcase project={project} />
            </div>
          </div>

        </div>
    </div>
  );
}

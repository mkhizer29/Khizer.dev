"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectShowcase from "./ProjectShowcase";
import StackBreakdown from "./StackBreakdown";
import { ExternalLink, Code, CheckCircle2, AlertCircle, ShieldCheck, User, ArrowLeft, BookOpen, Calendar, Users, Code2 } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  index: number;
}

export default function ProjectDetail({ project, index }: ProjectDetailProps) {
  return (
    <div className="w-full mb-24 lg:mb-32">
      {/* Outer Premium Glass Card */}
      <div
        className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.35)] overflow-hidden"
        style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}
      >
        {/* Subtle Inner Glow */}
        <div
          className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ background: project.colors.primary }}
        />

        {/* Inner Split Layout Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.2fr_0.8fr] items-start relative z-10"
          style={{ gap: 'clamp(3rem, 5vw, 6rem)' }}
        >

          {/* Left Column: Structured Project Details */}
          <div className="flex flex-col h-full w-full">

            {/* 1. Back Link & Metadata Row */}
            <div className="flex flex-col gap-5 mb-6">
              <a href="#projects" className="text-slate-500 hover:text-white transition-colors text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 w-fit">
                <ArrowLeft size={14} />
                Back to Projects
              </a>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${project.colors.primary}15, transparent)`,
                    border: `1px solid ${project.colors.primary}40`,
                    color: project.colors.primary,
                  }}
                >
                  {project.category}
                </span>
                {project.role && (
                  <>
                    <span className="text-slate-400 text-xs font-medium">{project.role}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                  </>
                )}
                <span className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  Completed
                </span>
              </div>
            </div>

            {/* 2. Title & Summary */}
            <div style={{ marginBottom: project.live ? '2.5rem' : '4rem' }}>
              <div className="flex items-center gap-5 mb-3">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
                  {project.title}
                </h2>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
                    title="View Source on GitHub"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span className="text-sm font-bold tracking-wide">GitHub</span>
                  </a>
                )}
              </div>
              <p
                className="text-lg md:text-xl lg:text-2xl font-medium mb-6"
                style={{ color: project.colors.primary }}
              >
                {project.tagline}
              </p>
              <p className="text-base md:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* 3. CTA Buttons */}
            {project.live && (
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 text-sm rounded-xl font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2"
                  style={{
                    background: project.colors.primary,
                    color: project.colors.secondary || '#000',
                  }}
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              </div>
            )}

            {/* 4. Technology Stack Grid */}
            {project.stackDetails && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={project.colors.primary} strokeWidth="2.5"><path d="M2 12l10-6 10 6-10 6z" /><path d="M2 17l10 6 10-6" /><path d="M2 7l10 6 10-6" /></svg>
                  </div>
                  Technology Stack
                </h3>
                <StackBreakdown stackDetails={project.stackDetails} primaryColor={project.colors.primary} />
              </div>
            )}

            {/* 5. Meta Strip (Timeline, Role, Team) */}
            {(project.timeline || project.role || project.team) && (
              <div style={{ marginBottom: '4rem' }}>
                <div className="flex flex-wrap items-center rounded-2xl bg-white/[0.015] border border-white/5 py-4 px-6 gap-8 lg:gap-16 w-fit">
                  {project.timeline && (
                    <div className="flex items-center gap-3">
                      <div className="opacity-40"><Calendar size={18} /></div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Timeline</p>
                        <p className="text-xs text-slate-300 font-medium">{project.timeline}</p>
                      </div>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center gap-3">
                      <div className="opacity-40"><Code2 size={18} /></div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Role</p>
                        <p className="text-xs text-slate-300 font-medium">{project.role}</p>
                      </div>
                    </div>
                  )}
                  {project.team && (
                    <div className="flex items-center gap-3">
                      <div className="opacity-40"><Users size={18} /></div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Team</p>
                        <p className="text-xs text-slate-300 font-medium">{project.team}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 6. Case Study Anchor & Sections */}
            <div id={`${project.slug}-case-study`} className="scroll-mt-32">

              {/* Project Breakdown (Problem/Solution/Role) */}
              {project.about && (
                <div style={{ marginBottom: '4rem' }}>
                  <h3 className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Project Breakdown</h3>
                  <div className="flex flex-col" style={{ gap: '1rem' }}>
                    <div className="rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4" style={{ padding: '1.5rem' }}>
                      <div className="mt-1 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0" style={{ color: project.colors.primary }}>
                        <AlertCircle size={14} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1.5"><span className="text-slate-500 font-mono text-xs inline-block" style={{ marginRight: '0.75rem' }}>01</span>Problem</h4>
                        <p className="text-[13px] leading-relaxed text-slate-400">{project.about.problem}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4" style={{ padding: '1.5rem' }}>
                      <div className="mt-1 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0" style={{ color: project.colors.primary }}>
                        <ShieldCheck size={14} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1.5"><span className="text-slate-500 font-mono text-xs inline-block" style={{ marginRight: '0.75rem' }}>02</span>Solution</h4>
                        <p className="text-[13px] leading-relaxed text-slate-400">{project.about.solution}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4" style={{ padding: '1.5rem' }}>
                      <div className="mt-1 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0" style={{ color: project.colors.primary }}>
                        <User size={14} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1.5"><span className="text-slate-500 font-mono text-xs inline-block" style={{ marginRight: '0.75rem' }}>03</span>My Role</h4>
                        <p className="text-[13px] leading-relaxed text-slate-400">{project.about.myRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Features Grid */}
              {project.features && project.features.length > 0 && (
                <div style={{ marginBottom: '4rem' }}>
                  <h3 className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2" style={{ gap: '1rem' }}>
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="rounded-xl bg-white/[0.01] border border-white/5 flex items-start gap-3" style={{ padding: '1rem' }}>
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 shadow-sm" style={{ background: project.colors.primary, boxShadow: `0 0 8px ${project.colors.primary}60` }} />
                        <span className="text-[13px] text-slate-300 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Highlights */}
              {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                <div style={{ marginBottom: '4rem' }}>
                  <h3 className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Engineering Highlights</h3>
                  <div className="rounded-2xl border bg-white/[0.015]" style={{ borderColor: `${project.colors.primary}30`, padding: '1.5rem' }}>
                    <ul className="space-y-4">
                      {project.technicalHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-300 leading-relaxed">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: project.colors.primary }} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Challenges & Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <div style={{ marginBottom: '4rem' }}>
                  <div className="rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden" style={{ padding: '1.5rem' }}>
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ background: project.colors.primary }} />
                    <h3 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-3 flex items-center gap-2">
                      <span style={{ color: project.colors.primary }}>✦</span> Challenges & Learnings
                    </h3>
                    <div className="space-y-3">
                      {project.learnings.map((learning, idx) => (
                        <p key={idx} className="text-[13px] text-slate-400 leading-relaxed">
                          {learning}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Visual / UI Showcase */}
          <div className="relative flex w-full justify-center lg:justify-end h-full">
            <div className="sticky top-32 z-20 w-full h-fit pb-12">
              <ProjectShowcase project={project} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

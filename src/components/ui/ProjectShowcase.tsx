"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  if (project.showcaseType === "none" || !project.showcaseType) {
    return null;
  }

  const isMobile = project.slug === "unipool";

  if (isMobile) {
    return (
      <div className="flex w-full justify-center lg:justify-end py-4 lg:py-10">
        <div 
          className="relative w-[200px] sm:w-[240px] lg:w-[260px] xl:w-[280px] aspect-[390/844] rounded-[2rem] p-1.5 overflow-hidden shadow-2xl group shrink-0" 
          style={{ background: '#1a1c23', border: '1px solid rgba(255,255,255,0.1)' }}
        >
           {/* Phone bezel / frame */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-6 bg-[#1a1c23] rounded-b-3xl z-30" /> {/* Dynamic Island / Notch */}
           
           <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden" style={{ background: "rgba(10, 12, 20, 1)" }}>
              {/* Dynamic glow */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[60px] z-0"
                style={{ background: project.colors.primary }}
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                 <img 
                   src={`/placeholders/${project.slug}-mobile-01.png`} 
                   alt={`${project.title} preview`} 
                   className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
                 />
                 <div className="relative z-20 bg-black/40 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                   <div className="mb-4 flex justify-center">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={project.colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 8px ${project.colors.primary}40)` }}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                     </svg>
                   </div>
                   <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">{project.title}</h3>
                   <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: project.colors.primary }}>Mobile App</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden group shadow-2xl">
      {/* Dynamic background glow based on project primary color */}
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[80px]"
        style={{ background: project.colors.primary }}
      />

      <div
        className="absolute inset-0 m-[1px] rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: "rgba(10, 12, 20, 0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {project.showcaseType === "app-window" ? (
          <AppWindowShowcase project={project} />
        ) : (
          <TechnicalVisualShowcase project={project} />
        )}
      </div>
    </div>
  );
}

function AppWindowShowcase({ project }: { project: Project }) {
  return (
    <>
      {/* macOS style header */}
      <div
        className="h-10 w-full flex items-center px-4 gap-2 border-b relative z-20"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          borderColor: "rgba(255, 255, 255, 0.04)",
        }}
      >
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
      </div>

      {/* Placeholder content area */}
      <div className="flex-1 flex flex-col items-center justify-center relative p-8 overflow-hidden">
        
        {/* Placeholder image layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
          <img 
            src={`/placeholders/${project.slug}-desktop-01.png`} 
            alt={`${project.title} preview`}
            className="w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500"
          />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        
        {/* Central glowing background for the icon */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] opacity-10 z-0"
          style={{ background: project.colors.primary }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center z-10 flex flex-col items-center"
        >
          {/* Custom Icon Placeholder matching screenshot style */}
          <div className="mb-6 text-center bg-black/40 p-4 rounded-2xl backdrop-blur-md border border-white/5 shadow-2xl">
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={project.colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 12px ${project.colors.primary}60)` }}>
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
             </svg>
          </div>
          
          <h3 
            className="text-3xl font-bold mb-4 drop-shadow-lg" 
            style={{ color: project.colors.primary, textShadow: `0 0 20px ${project.colors.primary}40` }}
          >
            {project.title}
          </h3>

          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: project.colors.primary }}
          >
            Web Application Preview
          </p>
          <p className="text-slate-300 text-sm max-w-md leading-relaxed px-4 drop-shadow">
            1920×1080 high-fidelity showcase. Replace with actual
            dashboard screenshots, UI components, or web application flows.
          </p>
        </motion.div>
      </div>
    </>
  );
}

function TechnicalVisualShowcase({ project }: { project: Project }) {
  return (
    <>
      <div
        className="h-10 w-full flex items-center px-4 border-b font-mono text-[11px] uppercase tracking-[0.2em] relative z-20"
        style={{
          background: "rgba(0, 0, 0, 0.4)",
          borderColor: "rgba(255, 255, 255, 0.05)",
          color: "rgba(255, 255, 255, 0.4)",
        }}
      >
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: project.colors.primary }} />
          Terminal / Visual Output
        </span>
      </div>
      <div className="flex-1 flex items-center justify-center relative p-8 overflow-hidden">
        {/* Placeholder image layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
          <img 
            src={`/placeholders/${project.slug}-visual-01.png`} 
            alt={`${project.title} visual`}
            className="w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500"
          />
        </div>

        {/* Tech grid background */}
        <div
          className="absolute inset-0 opacity-[0.05] z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-xl border rounded-2xl p-8 font-mono text-sm shadow-2xl backdrop-blur-md"
          style={{
            background: "rgba(0,0,0,0.6)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex gap-3 mb-6">
            <span style={{ color: project.colors.primary }}>❯</span>
            <span className="text-slate-200">
              Initializing {project.title} engine...
            </span>
          </div>
          <div className="space-y-3 text-slate-400">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Status:</span>
              <span className="text-emerald-400">ONLINE</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Nodes / Entities:</span>
              <span>Scanning...</span>
            </div>
            <div className="flex justify-between pb-2">
              <span>Compute Load:</span>
              <span>Optimal</span>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 text-center text-slate-500 text-xs">
            <p>
              Technical visualization placeholder. Replace with actual network
              graphs, pathfinding grids, or architecture diagrams.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

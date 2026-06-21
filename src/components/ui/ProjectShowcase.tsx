"use client";

import { useState } from "react";
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
    return <MobileShowcase project={project} />;
  }

  return <DesktopShowcase project={project} />;
}

function MobileShowcase({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex w-full justify-center lg:justify-center">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[100px] opacity-30 pointer-events-none z-0"
        style={{ background: `radial-gradient(circle, ${project.colors.primary} 0%, transparent 70%)` }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <div 
          className="relative w-[220px] sm:w-[260px] lg:w-[280px] xl:w-[320px] aspect-[390/844] rounded-[3rem] p-2 overflow-hidden shadow-2xl shrink-0" 
          style={{ background: '#1a1c23', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          {/* Phone bezel / frame */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-7 bg-[#1a1c23] rounded-b-3xl z-40" /> {/* Dynamic Island */}
          
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col" style={{ background: "#0a0b10" }}>
            
            {/* Status Bar */}
            <div className="h-12 w-full flex justify-between items-center px-6 pt-1 z-30 relative">
              <span className="text-[12px] font-bold text-white tracking-wide">9:41</span>
              <div className="flex gap-1.5 items-center opacity-80">
                <div className="w-4 h-3 bg-white rounded-sm" />
              </div>
            </div>

            {/* Mobile App Content */}
            <div className="flex-1 px-5 flex flex-col z-20 relative overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 mt-2">
                <h2 className="text-xl font-bold tracking-tight" style={{ color: project.colors.primary }}>UniPool</h2>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-white/70 text-xs">≡</span>
                </div>
              </div>

              {/* Greeting */}
              <div className="mb-6">
                <p className="text-sm text-slate-400 mb-1">Welcome back,</p>
                <h3 className="text-xl font-bold text-white">Let&apos;s get you there <span role="img" aria-label="wave">👋</span></h3>
              </div>

              {/* Search Card */}
              <div className="rounded-2xl p-4 mb-6 bg-[#13151c] border border-white/5">
                <p className="text-xs text-slate-400 mb-3">Where are you going?</p>
                <div className="w-full h-10 rounded-xl bg-black/40 border border-white/5 mb-4 flex items-center px-3 gap-2">
                  <span style={{ color: project.colors.primary }}>⚲</span>
                  <span className="text-sm text-slate-500">Search destination...</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-10 rounded-xl flex items-center justify-center gap-2 text-xs font-bold" style={{ background: `${project.colors.primary}15`, color: project.colors.primary, border: `1px solid ${project.colors.primary}30` }}>
                    <span>⚡</span> Instant Ride
                  </div>
                  <div className="h-10 rounded-xl bg-white/5 flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                    <span>📅</span> Schedule Ride
                  </div>
                </div>
              </div>

              {/* Upcoming Rides */}
              <div className="rounded-2xl p-4 mb-4 bg-[#13151c] border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold text-white">Your Upcoming Rides</h4>
                  <span className="text-[10px] text-slate-400">View all</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-[2px] h-full bg-white/10 relative rounded-full ml-1">
                    <div className="absolute top-1 -left-1 w-2.5 h-2.5 rounded-full bg-black border-[2px]" style={{ borderColor: project.colors.primary }} />
                    <div className="absolute bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-white/30 border-[2px] border-[#13151c]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs font-bold text-white">Today, 08:30 AM</p>
                    </div>
                    <p className="text-[10px] text-slate-400 mb-2">Main Campus → City Campus</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-green-500">2 seats available</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">Confirmed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Tracking */}
              <div className="rounded-2xl p-4 mb-4 bg-[#13151c] border border-white/5 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">Live Tracking</h4>
                  <p className="text-[10px] text-slate-400">Track your ride in real-time</p>
                </div>
                <div className="px-2 py-1 rounded-lg border flex items-center gap-1.5" style={{ background: `${project.colors.primary}10`, borderColor: `${project.colors.primary}20` }}>
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.colors.primary }} />
                  <span className="text-[10px] font-bold" style={{ color: project.colors.primary }}>Live</span>
                </div>
              </div>

            </div>

            {/* Bottom Navigation */}
            <div className="h-[76px] w-full bg-[#13151c] border-t border-white/5 mt-auto flex justify-between items-start px-6 pt-3 pb-safe z-30">
              <div className="flex flex-col items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill={project.colors.primary} stroke={project.colors.primary} strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span className="text-[9px] font-bold" style={{ color: project.colors.primary }}>Home</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                <span className="text-[9px]">Rides</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                <span className="text-[9px]">Post Ride</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span className="text-[9px]">Inbox</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-[9px]">Profile</span>
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/30 rounded-full z-40" />
          </div>
        </div>
        
        {/* Floor Reflection */}
        <div className="w-[80%] h-4 mt-2 bg-gradient-to-b from-white/10 to-transparent blur-md rounded-[100%] opacity-50" />
      </div>
    </div>
  );
}

function DesktopShowcase({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  // Technical visuals map to specific placeholders
  const getPlaceholderName = () => {
    if (project.showcaseType === 'technical-visual') {
      if (project.slug === 'maze-solver') return 'maze-visual-01.png';
      if (project.slug === 'pagerank') return 'pagerank-graph-01.png';
      return `${project.slug}-visual-01.png`;
    }
    return `${project.slug}-desktop-01.png`;
  };

  return (
    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden group shadow-2xl">
      {/* Dynamic background glow based on project primary color */}
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[100px]"
        style={{ background: project.colors.primary }}
      />

      <div
        className="absolute inset-0 m-[1px] rounded-[2rem] overflow-hidden flex flex-col"
        style={{
          background: "rgba(10, 12, 20, 0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* macOS style header */}
        <div
          className="h-12 w-full flex items-center px-5 gap-2.5 border-b relative z-20"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            borderColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>

        {/* Placeholder content area */}
        <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
          {!imgError ? (
            <img 
              src={`/placeholders/${getPlaceholderName()}`} 
              alt={`${project.title} Preview`} 
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-500" 
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-sm">
              <div className="mb-6 flex justify-center p-5 rounded-3xl bg-white/5 border border-white/10">
                {project.showcaseType === 'technical-visual' ? (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={project.colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                ) : (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={project.colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
                {project.showcaseType === 'technical-visual' ? 'Visual Placeholder' : 'Desktop Placeholder'}
              </p>
              <p className="text-sm text-slate-500 mt-4 max-w-sm">Add /placeholders/{getPlaceholderName()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

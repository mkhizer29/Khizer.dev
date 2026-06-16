"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCard3DProps {
  project: Project;
  index?: number;
}

export default function ProjectCard3D({ project, index = 0 }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -5, y: (x - 0.5) * 5 });
  };

  const handleClick = () => {
    const el = document.getElementById(`detail-${project.slug}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const { primary, secondary } = project.colors;

  return (
    <motion.div
      ref={cardRef}
      className="group relative cursor-pointer"
      style={{ perspective: "1200px" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
      onClick={handleClick}
    >
      {/* 3D tilt wrapper */}
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? "translateZ(6px)" : ""}`,
          transformStyle: "preserve-3d",
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* ── Media Frame ── */}
        <div
          className="relative rounded-xl overflow-hidden transition-shadow duration-500"
          style={{
            aspectRatio: "16 / 9",
            background: "#0e0e16",
            border: `1px solid ${isHovered ? `${primary}20` : "rgba(255,255,255,0.04)"}`,
            boxShadow: isHovered
              ? `0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px ${primary}08`
              : "0 4px 16px rgba(0,0,0,0.25)",
          }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: `
                linear-gradient(145deg, ${primary}12 0%, transparent 50%),
                linear-gradient(225deg, ${secondary}08 0%, transparent 50%),
                radial-gradient(ellipse at 35% 45%, ${primary}0a 0%, transparent 55%),
                #0c0c14
              `,
            }}
          />

          {/* Browser wireframe */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[72%] max-w-[260px]">
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  border: `1px solid ${primary}12`,
                  background: "rgba(14,14,22,0.85)",
                }}
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1.5" style={{ borderBottom: `1px solid ${primary}08` }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: `${primary}35` }} />
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: `${primary}20` }} />
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: `${primary}12` }} />
                  <span className="ml-2 text-[8px] tracking-widest" style={{ color: `${primary}50` }}>
                    {project.title.toLowerCase().replace(/[\s&]/g, "-")}.app
                  </span>
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-2 rounded-full w-3/4" style={{ background: `${primary}12` }} />
                  <div className="h-1.5 rounded-full w-1/2" style={{ background: `${primary}08` }} />
                  <div className="h-6 rounded mt-2 w-full" style={{ background: `${primary}05` }} />
                  <div className="flex gap-1.5 mt-1">
                    <div className="h-4 rounded w-14" style={{ background: `${primary}08` }} />
                    <div className="h-4 rounded w-10" style={{ background: `${primary}05` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Overlapping Title — breaks out of card ── */}
        <div className="relative z-10 -mt-5 px-1">
          <h3
            className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none"
            style={{
              color: "#f1f5f9",
              textShadow: "0 2px 12px rgba(0,0,0,0.7)",
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* ── Minimal Details ── */}
        <div className="px-1 mt-3 space-y-2.5">
          <p
            className="text-sm tracking-wide"
            style={{ color: primary }}
          >
            {project.tagline}
          </p>

          {/* Tags — max 4, very clean */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wide"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#6b7280",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 pt-2">
            <span
              className="text-xs tracking-wide transition-colors duration-300"
              style={{ color: isHovered ? primary : "#4b5563" }}
            >
              View case study
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isHovered ? primary : "#4b5563"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
              style={{ transform: isHovered ? "translateX(3px)" : "" }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

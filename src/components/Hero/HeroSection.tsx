"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { domains } from "./domainData";

const TriangleCarousel = dynamic(() => import("./TriangleCarousel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-cyan-glow/30 border-t-cyan-glow rounded-full animate-spin" />
    </div>
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
} as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--color-bg-primary)" }}
    >
      {/* Radial gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 65% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-24">
          {/* ── Left Column: Text & CTAs ── */}
          <motion.div
            className="flex flex-col gap-5 lg:gap-7"
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div custom={0} variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-mono tracking-[0.2em] uppercase"
                style={{
                  border: "1px solid rgba(148,163,184,0.15)",
                  color: "rgba(203,213,225,0.7)",
                  background: "rgba(148,163,184,0.04)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#94a3b8" }}
                />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name — dominant typographic anchor */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="leading-[0.9] tracking-tighter"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span
                className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold"
                style={{ color: "#f1f5f9" }}
              >
                MUHAMMAD
              </span>
              <span
                className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 40%, #64748b 80%, #94a3b8 100%)",
                }}
              >
                KHIZER
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg sm:text-xl lg:text-2xl font-mono tracking-wide"
              style={{ color: "#94a3b8" }}
            >
              Software & AI Engineer
            </motion.p>

            {/* Description — restrained monochrome with single accent */}
            <motion.p
              custom={3}
              variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg"
              style={{ color: "#94a3b8" }}
            >
              I build{" "}
              <span style={{ color: "#cbd5e1" }}>AI-powered tools</span>,{" "}
              <span style={{ color: "#cbd5e1" }}>full-stack SaaS platforms</span>,
              {" "}and{" "}
              <span style={{ color: "#cbd5e1" }}>secure web systems</span>.
            </motion.p>

            {/* CTA Buttons — premium, cohesive with monochrome */}
            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-3 mt-1">
              <a
                href="#portfolio-sections"
                id="cta-view-projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "rgba(148,163,184,0.1)",
                  border: "1px solid rgba(148,163,184,0.2)",
                  color: "#e2e8f0",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                View Projects
              </a>
              <a
                href="/Muhammad_Khizer_CV.pdf"
                id="cta-download-cv"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03]"
                style={{
                  border: "1px solid rgba(148,163,184,0.12)",
                  color: "#94a3b8",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
              <a
                href="https://github.com/aimansabir"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-github"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03]"
                style={{
                  border: "1px solid rgba(148,163,184,0.12)",
                  color: "#94a3b8",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              custom={5}
              variants={fadeUp}
              className="flex gap-10 mt-3 pt-6"
              style={{ borderTop: "1px solid rgba(148,163,184,0.08)" }}
            >
              {[
                { value: "10+", label: "Projects" },
                { value: "3", label: "Domains" },
                { value: "15+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-bold tracking-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#e2e8f0",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-mono tracking-[0.15em] mt-1"
                    style={{ color: "#64748b" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column: 3D Triangle Carousel ── */}
          <motion.div
            className="relative w-full h-[500px] lg:h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <TriangleCarousel />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs font-mono text-[var(--color-text-muted)] tracking-widest">
          SCROLL
        </span>
        <motion.div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--color-text-muted), transparent)" }}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}

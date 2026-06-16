"use client";

import { motion } from "framer-motion";

interface PortfolioCard {
  title: string;
  description: string;
  tags: string[];
  href: string;
  cta: string;
  icon: React.ReactNode;
}

const cards: PortfolioCard[] = [
  {
    title: "FULL STACK DEVELOPMENT",
    description: "Complete, dynamic web applications.",
    tags: ["Web Apps", "API Design", "Cloud DB"],
    href: "#fullstack",
    cta: "Explore Section",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="40" height="32" rx="3" />
        <line x1="4" y1="14" x2="44" y2="14" />
        <circle cx="10" cy="10" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="20" cy="10" r="1.2" fill="currentColor" stroke="none" />
        <line x1="12" y1="22" x2="22" y2="22" />
        <line x1="12" y1="27" x2="28" y2="27" />
        <line x1="12" y1="32" x2="18" y2="32" />
        <rect x="30" y="20" width="8" height="14" rx="1" />
      </svg>
    ),
  },
  {
    title: "AI & ML PROJECTS",
    description: "Intelligent systems and predictive models.",
    tags: ["Machine Learning", "Data Science", "Neural Nets"],
    href: "#aiml",
    cta: "Explore Section",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="8" />
        <circle cx="24" cy="16" r="3" />
        <line x1="24" y1="24" x2="24" y2="30" />
        <line x1="24" y1="30" x2="14" y2="40" />
        <line x1="24" y1="30" x2="34" y2="40" />
        <circle cx="14" cy="40" r="2.5" />
        <circle cx="34" cy="40" r="2.5" />
        <circle cx="24" cy="30" r="2" />
        <line x1="16" y1="16" x2="8" y2="12" />
        <line x1="32" y1="16" x2="40" y2="12" />
        <circle cx="8" cy="12" r="2.5" />
        <circle cx="40" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: "SYSTEM PROJECTS",
    description: "Core architecture, scalability, and performance.",
    tags: ["Systems Design", "Cloud Infra", "Distributed"],
    href: "#systems",
    cta: "Explore Section",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="14" height="10" rx="2" />
        <rect x="28" y="4" width="14" height="10" rx="2" />
        <rect x="6" y="34" width="14" height="10" rx="2" />
        <rect x="28" y="34" width="14" height="10" rx="2" />
        <line x1="13" y1="14" x2="13" y2="22" />
        <line x1="35" y1="14" x2="35" y2="22" />
        <line x1="13" y1="26" x2="13" y2="34" />
        <line x1="35" y1="26" x2="35" y2="34" />
        <line x1="13" y1="24" x2="35" y2="24" />
        <circle cx="13" cy="24" r="2" />
        <circle cx="35" cy="24" r="2" />
        <circle cx="24" cy="24" r="2" />
      </svg>
    ),
  },
  {
    title: "CONTACT",
    description: "Let's build something together.",
    tags: ["Collaboration", "Inquiries", "Get in Touch"],
    href: "#contact",
    cta: "Connect",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="28" height="20" rx="2" />
        <polyline points="4,12 18,24 32,12" />
        <circle cx="38" cy="14" r="6" />
        <path d="M36 14h4M38 12v4" />
        <rect x="34" y="32" width="10" height="8" rx="1.5" />
        <line x1="37" y1="36" x2="41" y2="36" />
        <circle cx="12" cy="38" r="4" />
        <path d="M9 42c0-1.7 1.3-3 3-3s3 1.3 3 3" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function PortfolioSections() {
  return (
    <section
      id="portfolio-sections"
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div className="section-container relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-14 sm:mb-18 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#64748b" }} />
            <span
              className="text-[11px] font-mono tracking-[0.2em] uppercase"
              style={{ color: "#64748b" }}
            >
              Application Layer
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "#f1f5f9",
            }}
          >
            Portfolio Sections
          </h2>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            A high-level overview of key focus areas and capabilities.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative flex flex-col rounded-xl overflow-hidden transition-all duration-400 hover:-translate-y-1"
              style={{
                background: "var(--color-bg-secondary)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(148,163,184,0.15)";
                el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4), 0 0 20px rgba(148,163,184,0.04)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.04)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Corner frame details */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-xl transition-colors duration-300" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r rounded-tr-xl transition-colors duration-300" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l rounded-bl-xl transition-colors duration-300" style={{ borderColor: "rgba(255,255,255,0.06)" }} />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r rounded-br-xl transition-colors duration-300" style={{ borderColor: "rgba(255,255,255,0.06)" }} />

              <div className="flex flex-col flex-1 p-6 sm:p-7">
                {/* Icon */}
                <div
                  className="mb-6 transition-all duration-300 group-hover:brightness-150"
                  style={{ color: "#64748b" }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-sm sm:text-base font-bold tracking-wider uppercase mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#e2e8f0",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#6b7280" }}
                >
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wide"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "#64748b",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA — pushed to bottom */}
                <div className="mt-auto flex items-center gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <span
                    className="text-xs tracking-wide transition-colors duration-300 group-hover:text-[#94a3b8]"
                    style={{ color: "#4b5563" }}
                  >
                    {card.cta}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#94a3b8]"
                    style={{ color: "#4b5563" }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

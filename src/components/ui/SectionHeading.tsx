"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accentColor?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  accentColor = "#00e5ff",
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Accent line */}
      <div
        className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <div
          className="w-8 h-px"
          style={{ background: accentColor }}
        />
        {subtitle && (
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: accentColor }}
          >
            {subtitle}
          </span>
        )}
        <div
          className="w-8 h-px"
          style={{ background: accentColor }}
        />
      </div>

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl tracking-tight"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

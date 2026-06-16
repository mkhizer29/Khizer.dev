"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#portfolio-sections" },
  { label: "Web Systems", href: "#fullstack" },
  { label: "AI Systems", href: "#aiml" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    const offsets = navItems
      .map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return null;
        return { href: item.href, top: el.getBoundingClientRect().top };
      })
      .filter(Boolean) as { href: string; top: number }[];

    let current = "#hero";
    for (const section of offsets) {
      if (section.top <= 180) current = section.href;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════════ */}
      {/* DESKTOP — Wide Raycast-style floating glass bar    */}
      {/* ═══════════════════════════════════════════════════ */}
      <motion.nav
        id="navbar"
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center justify-between"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        style={{
          width: "min(92vw, 1100px)",
          height: "64px",
          borderRadius: "24px",
          padding: "0 24px",
          background: scrolled
            ? "rgba(8, 10, 16, 0.78)"
            : "rgba(8, 10, 16, 0.5)",
          backdropFilter: "blur(28px) saturate(1.4)",
          WebkitBackdropFilter: "blur(28px) saturate(1.4)",
          border: "1px solid rgba(255, 255, 255, 0.07)",
          boxShadow: scrolled
            ? "0 16px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
          transition: "background 0.4s, box-shadow 0.4s",
        }}
      >
        {/* ── Left: Brand ── */}
        <a
          href="#hero"
          id="nav-logo"
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-[13px] font-bold tracking-wide transition-all duration-300 group-hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,229,255,0.12), rgba(139,92,246,0.12))",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "#00e5ff",
              fontFamily: "var(--font-display)",
            }}
          >
            MK
          </div>
          <span
            className="text-[15px] font-semibold tracking-[0.06em] hidden xl:block"
            style={{
              fontFamily: "var(--font-display)",
              color: "#e2e8f0",
            }}
          >
            KHIZER.DEV
          </span>
        </a>

        {/* ── Center: Navigation Links ── */}
        <div className="flex items-center gap-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative px-9 py-3 rounded-xl text-[15px] font-medium tracking-wide transition-all duration-300"
                style={{
                  color: isActive ? "#f1f5f9" : "#64748b",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget;
                    el.style.color = "#94a3b8";
                    el.style.background = "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget;
                    el.style.color = "#64748b";
                    el.style.background = "transparent";
                  }
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* ── Right: CTA Button ── */}
        <a
          href="/Muhammad_Khizer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          id="nav-cta-cv"
          className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-medium tracking-wide transition-all duration-300 hover:scale-[1.03]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#cbd5e1",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "rgba(255,255,255,0.18)";
            el.style.color = "#f1f5f9";
            el.style.boxShadow =
              "0 4px 16px rgba(0,0,0,0.3), 0 0 12px rgba(148,163,184,0.06)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "rgba(255,255,255,0.1)";
            el.style.color = "#cbd5e1";
            el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
          }}
        >
          {/* Download icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </motion.nav>

      {/* ═══════════════════════════════════════════════════ */}
      {/* TABLET — Compact version                           */}
      {/* ═══════════════════════════════════════════════════ */}
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex lg:hidden items-center gap-1 px-3 py-2 rounded-2xl"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          background: scrolled
            ? "rgba(8, 10, 16, 0.78)"
            : "rgba(8, 10, 16, 0.5)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
          transition: "background 0.4s",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-1.5 rounded-lg text-[12px] font-medium tracking-wide transition-all duration-300"
              style={{ color: isActive ? "#e2e8f0" : "#64748b" }}
              onMouseEnter={(e) => {
                if (!isActive) (e.currentTarget as HTMLElement).style.color = "#94a3b8";
              }}
              onMouseLeave={(e) => {
                if (!isActive) (e.currentTarget as HTMLElement).style.color = "#64748b";
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-tablet-active"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          );
        })}
      </motion.nav>

      {/* ═══════════════════════════════════════════════════ */}
      {/* MOBILE — Floating glass button + dropdown          */}
      {/* ═══════════════════════════════════════════════════ */}
      <motion.div
        className="fixed top-4 z-50 md:hidden flex items-center justify-between px-4"
        style={{ width: "min(92vw, 400px)", left: "50%", transform: "translateX(-50%)" }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.12), rgba(139,92,246,0.12))",
              border: "1px solid rgba(0,229,255,0.2)",
              color: "#00e5ff",
              fontFamily: "var(--font-display)",
            }}
          >
            MK
          </div>
          <span
            className="text-[13px] font-semibold tracking-wider"
            style={{ fontFamily: "var(--font-display)", color: "#e2e8f0" }}
          >
            KHIZER.DEV
          </span>
        </a>

        {/* Hamburger button */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
          style={{
            background: "rgba(8, 10, 16, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          }}
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-[5px]">
            <motion.span
              className="w-[16px] h-[1.5px] bg-white/60 block origin-center"
              animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-[16px] h-[1.5px] bg-white/60 block"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="w-[16px] h-[1.5px] bg-white/60 block origin-center"
              animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
      </motion.div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-[72px] left-1/2 z-50 md:hidden flex flex-col gap-0.5 p-2.5 rounded-2xl"
            style={{
              width: "min(92vw, 400px)",
              transform: "translateX(-50%)",
              background: "rgba(8, 10, 16, 0.9)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200"
                  style={{
                    color: isActive ? "#f1f5f9" : "#64748b",
                    background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                  }}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  {item.label}
                </motion.a>
              );
            })}

            {/* Mobile CV button */}
            <a
              href="/Muhammad_Khizer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 mt-1 px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#cbd5e1",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

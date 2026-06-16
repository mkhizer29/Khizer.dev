export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{
        background: "var(--color-bg-primary)",
        borderColor: "var(--color-border-subtle)",
      }}
    >
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-xs font-mono tracking-wider"
          style={{ color: "var(--color-text-muted)" }}
        >
          © {new Date().getFullYear()} Muhammad Khizer. Built with Next.js, Three.js & Framer Motion.
        </p>
        <div className="flex items-center gap-1">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#00ff88" }}
          />
          <span
            className="text-[10px] font-mono tracking-widest"
            style={{ color: "var(--color-text-muted)" }}
          >
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}

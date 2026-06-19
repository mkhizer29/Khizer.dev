"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Shield, Map, Zap, Cpu, Network, LayoutTemplate, Settings } from "lucide-react";

interface StackBreakdownProps {
  stackDetails?: Record<string, string[]>;
  primaryColor?: string;
}

export default function StackBreakdown({ stackDetails, primaryColor = "#ffffff" }: StackBreakdownProps) {
  if (!stackDetails || Object.keys(stackDetails).length === 0) {
    return null;
  }

  // Map categories to Lucide icons
  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("front") || cat.includes("ui") || cat.includes("interface")) return <Monitor size={14} />;
    if (cat.includes("back") || cat.includes("api") || cat.includes("server")) return <Server size={14} />;
    if (cat.includes("data") || cat.includes("store") || cat.includes("sql")) return <Database size={14} />;
    if (cat.includes("auth") || cat.includes("secur")) return <Shield size={14} />;
    if (cat.includes("map") || cat.includes("rout") || cat.includes("geo")) return <Map size={14} />;
    if (cat.includes("realtime") || cat.includes("speed") || cat.includes("socket")) return <Zap size={14} />;
    if (cat.includes("ai") || cat.includes("machine") || cat.includes("intel")) return <Cpu size={14} />;
    if (cat.includes("algo") || cat.includes("graph") || cat.includes("network")) return <Network size={14} />;
    if (cat.includes("design") || cat.includes("layout")) return <LayoutTemplate size={14} />;
    return <Settings size={14} />;
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-y-8 w-full border-t border-white/5 pt-6">
      {Object.entries(stackDetails).map(([category, items], idx, arr) => (
        <motion.div
          key={category}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={idx}
          className={`flex flex-col flex-1 min-w-[140px] ${idx !== arr.length - 1 ? 'lg:border-r lg:border-white/5 lg:pr-6 mr-6' : ''
            }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <div style={{ color: primaryColor }}>
              {getCategoryIcon(category)}
            </div>
            <h4 className="text-[11px] font-bold text-white tracking-wide">
              {category}
            </h4>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-lg text-[11px] font-medium tracking-wide whitespace-nowrap"
                style={{
                  padding: '0.35rem 0.6rem',
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "#cbd5e1",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

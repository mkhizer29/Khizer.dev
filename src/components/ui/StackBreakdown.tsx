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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-flow-col auto-cols-fr gap-y-10 lg:gap-x-6 xl:gap-x-8 w-full">
      {Object.entries(stackDetails).map(([category, items], idx, arr) => {
        const isLongLabel = category.length > 12;

        return (
          <div key={category} className="relative flex flex-col w-full">
            {/* Subtle Vertical Divider mathematically centered in the new grid gap */}
            {idx !== arr.length - 1 && (
              <div className="hidden lg:block absolute -right-3 xl:-right-4 top-0 bottom-0 w-px bg-white/5" />
            )}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              className="flex flex-col w-full"
            >
              <div className="flex items-center gap-2.5" style={{ marginBottom: '1.25rem' }}>
                <div style={{ color: primaryColor }} className="shrink-0">
                  {getCategoryIcon(category)}
                </div>
                <h4 
                  className={`font-bold text-white uppercase whitespace-nowrap ${isLongLabel ? 'text-[10px] tracking-wider' : 'text-[11px] tracking-widest'}`}
                >
                  {category}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-[0.35rem] font-medium tracking-wide whitespace-nowrap text-slate-300"
                    style={{
                      padding: '0.35rem 0.55rem',
                      fontSize: '0.65rem',
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

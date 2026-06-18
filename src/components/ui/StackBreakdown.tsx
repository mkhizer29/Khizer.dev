"use client";

import { motion } from "framer-motion";

interface StackBreakdownProps {
  stackDetails?: Record<string, string[]>;
}

export default function StackBreakdown({ stackDetails }: StackBreakdownProps) {
  if (!stackDetails || Object.keys(stackDetails).length === 0) {
    return null;
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col gap-y-5">
      {Object.entries(stackDetails).map(([category, items], idx) => (
        <motion.div
          key={category}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={idx}
          className="flex flex-col"
        >
          <h4 className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-1.5 border-b border-white/5 pb-1 w-fit">
            {category}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {items.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
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

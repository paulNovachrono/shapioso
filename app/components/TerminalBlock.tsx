"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

interface TerminalBlockProps {
  label: string;
  points: string[];
  type: "error" | "success";
}

const dotColor = { error: "bg-rose-400", success: "bg-emerald-400" };
const labelColor = { error: "text-rose-500", success: "text-emerald-600" };
const lineColor = { error: "text-rose-600", success: "text-emerald-700" };
const prefix = { error: "✗", success: "✓" };

export default function TerminalBlock({ label, points, type }: TerminalBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="rounded-xl border border-hairline bg-canvas overflow-hidden"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-hairline-soft bg-surface-soft">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="ml-auto text-xs font-medium text-muted tracking-wide">{label}</span>
      </div>
      {/* Content */}
      <div className="px-4 py-5 min-h-[400px]">
        <pre className="font-mono text-sm leading-relaxed">
          <span className="text-muted-soft">$ </span>
          <span className={labelColor[type]}>./compare.sh --type {label.toLowerCase()}</span>
          <br />
          {points.map((point, i) => (
            <span key={i}>
              <br />
              <span
                className={`${lineColor[type]} transition-all duration-500`}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(8px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <span className="inline-block w-4">{prefix[type]}</span> {point}
              </span>
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}

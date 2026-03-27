"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const icons: Record<string, React.ReactNode> = {
  bird: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M10 35 L25 20 L35 25 L50 15" />
      <path d="M25 20 L30 35 L40 30 L35 25" />
      <path d="M30 35 L25 45" />
      <path d="M40 30 L42 42" />
      <path d="M50 15 L55 12" />
      <path d="M50 15 L53 18" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.8">
      <rect x="15" y="15" width="30" height="30" />
      <rect x="22" y="8" width="30" height="30" />
      <line x1="15" y1="15" x2="22" y2="8" />
      <line x1="45" y1="15" x2="52" y2="8" />
      <line x1="45" y1="45" x2="52" y2="38" />
      <line x1="15" y1="45" x2="22" y2="38" />
      {/* Grid lines */}
      <line x1="25" y1="15" x2="25" y2="45" strokeWidth="0.4" />
      <line x1="35" y1="15" x2="35" y2="45" strokeWidth="0.4" />
      <line x1="15" y1="25" x2="45" y2="25" strokeWidth="0.4" />
      <line x1="15" y1="35" x2="45" y2="35" strokeWidth="0.4" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="30" cy="12" r="3" />
      <circle cx="15" cy="30" r="3" />
      <circle cx="45" cy="30" r="3" />
      <circle cx="10" cy="48" r="3" />
      <circle cx="30" cy="48" r="3" />
      <circle cx="50" cy="48" r="3" />
      <line x1="30" y1="15" x2="15" y2="27" />
      <line x1="30" y1="15" x2="45" y2="27" />
      <line x1="15" y1="33" x2="10" y2="45" />
      <line x1="15" y1="33" x2="30" y2="45" />
      <line x1="45" y1="33" x2="30" y2="45" />
      <line x1="45" y1="33" x2="50" y2="45" />
    </svg>
  ),
  sphere: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="30" cy="30" r="20" />
      <ellipse cx="30" cy="30" rx="20" ry="8" />
      <ellipse cx="30" cy="30" rx="8" ry="20" />
      <line x1="10" y1="30" x2="50" y2="30" strokeWidth="0.4" />
      <line x1="30" y1="10" x2="30" y2="50" strokeWidth="0.4" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.8">
      <line x1="10" y1="50" x2="50" y2="50" />
      <line x1="10" y1="50" x2="10" y2="10" />
      <rect x="16" y="35" width="6" height="15" />
      <rect x="26" y="22" width="6" height="28" />
      <rect x="36" y="28" width="6" height="22" />
      <rect x="46" y="18" width="6" height="32" />
      <path d="M19 32 L29 19 L39 25 L49 15" strokeWidth="0.6" />
      <circle cx="19" cy="32" r="1.5" />
      <circle cx="29" cy="19" r="1.5" />
      <circle cx="39" cy="25" r="1.5" />
      <circle cx="49" cy="15" r="1.5" />
    </svg>
  ),
  figure: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="30" cy="12" r="5" />
      <line x1="30" y1="17" x2="30" y2="35" />
      <line x1="30" y1="22" x2="18" y2="30" />
      <line x1="30" y1="22" x2="42" y2="30" />
      <line x1="30" y1="35" x2="20" y2="50" />
      <line x1="30" y1="35" x2="40" y2="50" />
      {/* Joint dots */}
      <circle cx="30" cy="22" r="1.5" />
      <circle cx="30" cy="35" r="1.5" />
      <circle cx="18" cy="30" r="1.5" />
      <circle cx="42" cy="30" r="1.5" />
    </svg>
  ),
};

export default function WireframeIcon({ icon }: { icon: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setVisible(true)}
      viewport={{ once: true }}
      className="wireframe-icon w-14 h-14 text-teal-400/30 hover:text-teal-400/60 transition-colors duration-500"
    >
      {visible && (icons[icon] || icons.cube)}
    </motion.div>
  );
}

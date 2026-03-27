"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Small rotating mandala */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        aria-hidden="true"
        className="absolute animate-spin-slow pointer-events-none select-none"
        style={{ left: "50%", top: "50%" }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="98" stroke="#2dd4bf" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" stroke="#2dd4bf" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="#2dd4bf" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line
              key={angle}
              x1="100"
              y1="100"
              x2={100 + 98 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 98 * Math.sin((angle * Math.PI) / 180)}
              stroke="#2dd4bf"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-8xl font-bold text-teal-400/20 mb-4">404</h1>
        <p className="text-zinc-500 text-sm mb-8">This page could not be found.</p>
        <Link
          href="/"
          className="text-xs text-teal-400 hover:text-teal-300 transition-colors"
        >
          &larr; Back home
        </Link>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { assetPath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-2xl mx-auto relative overflow-hidden">
      {/* Rotating mandala */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 2, delay: 0.5 }}
        aria-hidden="true"
        className="absolute left-[65%] top-1/2 animate-spin-slow pointer-events-none select-none"
      >
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="140" cy="140" r="138" stroke="#2dd4bf" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="110" stroke="#2dd4bf" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="80" stroke="#2dd4bf" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="50" stroke="#2dd4bf" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="20" stroke="#2dd4bf" strokeWidth="0.5" />
          {/* 12 petal lines */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line
              key={angle}
              x1="140"
              y1="140"
              x2={140 + 138 * Math.cos((angle * Math.PI) / 180)}
              y2={140 + 138 * Math.sin((angle * Math.PI) / 180)}
              stroke="#2dd4bf"
              strokeWidth="0.3"
            />
          ))}
          {/* Inner diamond petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const r1 = 50, r2 = 110;
            const a = (angle * Math.PI) / 180;
            const aOff = ((angle + 22.5) * Math.PI) / 180;
            const aOff2 = ((angle - 22.5) * Math.PI) / 180;
            return (
              <path
                key={`petal-${angle}`}
                d={`M ${140 + r1 * Math.cos(a)} ${140 + r1 * Math.sin(a)} Q ${140 + r2 * 0.7 * Math.cos(aOff)} ${140 + r2 * 0.7 * Math.sin(aOff)} ${140 + r2 * Math.cos(a)} ${140 + r2 * Math.sin(a)} Q ${140 + r2 * 0.7 * Math.cos(aOff2)} ${140 + r2 * 0.7 * Math.sin(aOff2)} ${140 + r1 * Math.cos(a)} ${140 + r1 * Math.sin(a)}`}
                stroke="#2dd4bf"
                strokeWidth="0.4"
                fill="none"
              />
            );
          })}
        </svg>
      </motion.div>

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-zinc-500 text-sm mb-4"
        >
          Software Development Engineer at <span className="text-teal-400/80">Yahoo</span>
        </motion.p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-100 mb-6">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="block"
          >
            Hamza
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="block"
          >
            Gabajiwala
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-zinc-400 text-sm leading-relaxed max-w-lg mb-10"
        >
          Building large-scale data pipelines and audience targeting systems at
          Yahoo. Working with Spark, Airflow, and Flink on AWS to process
          audience segments for programmatic advertising at scale. Recently
          integrating GenAI/LLM capabilities into search retargeting pipelines.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500"
        >
          <a href="https://github.com/hamzzgab" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/hamza-gabajiwala" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/hamzajg16_" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">LeetCode</a>
          <a href="mailto:hamzajg16@gmail.com" className="hover:text-teal-400 transition-colors">Email</a>
          <a href={assetPath("/resume.pdf")} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Resume</a>
          <Link href="/gallery" className="hover:text-teal-400 transition-colors">Certificates</Link>
        </motion.div>
      </div>
    </section>
  );
}

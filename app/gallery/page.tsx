"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const certificates = [
  "ComparativeAnalysis.webp",
  "ComprehensiveReview.webp",
  "TIAAGBS.webp",
  "NDTSolutions.webp",
  "AJAX.webp",
  "AutomationPython.webp",
  "DeepLearningCV.webp",
  "PythonCV.webp",
  "SQL.webp",
];

export default function Gallery() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr; Back
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-10 tracking-tight">
        Certificates
      </h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="break-inside-avoid rounded-lg border border-border overflow-hidden hover:border-border-hover transition-colors"
          >
            <img
              src={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}/certificates/${cert}`}
              alt={cert.replace(/[._]/g, " ").replace("webp", "").trim()}
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

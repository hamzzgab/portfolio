"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { assetPath } from "@/lib/basePath";

const certificates: { file: string; name: string }[] = [
  { file: "ComparativeAnalysis.webp", name: "Comparative Analysis — InceptionResnetV2 vs InceptionV3" },
  { file: "ComprehensiveReview.webp", name: "Comprehensive Review — Optimization Algorithms for Image Captioning" },
  { file: "TIAAGBS.webp", name: "TIAA GBS — Software Developer" },
  { file: "NDTSolutions.webp", name: "NDT Solutions — Web Developer" },
  { file: "AJAX.webp", name: "AJAX Development" },
  { file: "AutomationPython.webp", name: "Automation with Python" },
  { file: "DeepLearningCV.webp", name: "Deep Learning for Computer Vision" },
  { file: "PythonCV.webp", name: "Python for Computer Vision" },
  { file: "SQL.webp", name: "SQL" },
];

export default function Gallery() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-teal-400 transition-colors"
        >
          &larr; Back
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-zinc-100 mb-10 tracking-tight">
        Certificates
      </h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.file}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="break-inside-avoid rounded-lg border border-zinc-800 overflow-hidden hover:border-teal-400/20 transition-colors"
          >
            <img
              src={assetPath(`/certificates/${cert.file}`)}
              alt={cert.name}
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-xs font-medium text-teal-400/60 uppercase tracking-widest mb-3">
        {children}
      </h2>
      <div className="h-px bg-teal-400/10" />
    </motion.div>
  );
}

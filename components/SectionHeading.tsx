"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  number?: string;
}

export default function SectionHeading({ children, number }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-xs font-medium text-teal-400/60 uppercase tracking-widest mb-3">
        {number && (
          <span className="text-teal-400/20 font-mono mr-2">{number}</span>
        )}
        {children}
      </h2>
      <div className="h-px bg-teal-400/10" />
    </motion.div>
  );
}

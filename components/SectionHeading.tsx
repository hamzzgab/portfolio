"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-semibold text-foreground mb-10 tracking-tight"
    >
      {children}
    </motion.h2>
  );
}

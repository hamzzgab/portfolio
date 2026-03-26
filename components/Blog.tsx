"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="px-6 py-20 max-w-3xl mx-auto">
      <SectionHeading>Writing</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="p-6 rounded-lg border border-dashed border-border text-center"
      >
        <p className="text-muted text-sm">Coming soon.</p>
      </motion.div>
    </section>
  );
}

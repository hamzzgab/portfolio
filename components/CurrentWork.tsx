"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function CurrentWork() {
  return (
    <section id="current" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading>Currently Working On</SectionHeading>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs text-zinc-600"
      >
        Coming soon.
      </motion.p>
    </section>
  );
}

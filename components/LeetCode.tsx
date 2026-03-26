"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function LeetCode() {
  return (
    <section id="leetcode" className="px-6 py-20 max-w-3xl mx-auto">
      <SectionHeading>LeetCode</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <img
          src="https://leetcard.jacoblin.cool/hamzajg16_?border=0&radius=20&ext=heatmap&theme=dark"
          alt="LeetCode Stats"
          className="max-w-full h-auto"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useTheme } from "./ThemeProvider";

export default function LeetCode() {
  const { theme } = useTheme();
  const leetcodeTheme = theme === "dark" ? "dark" : "light";

  return (
    <section id="leetcode" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading>LeetCode</SectionHeading>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <img
          src={`https://leetcard.jacoblin.cool/hamzajg16_?border=0&radius=20&ext=heatmap&theme=${leetcodeTheme}`}
          alt="LeetCode Stats"
          className="max-w-full h-auto"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}

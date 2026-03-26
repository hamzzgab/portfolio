"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="text-[11px] text-zinc-600 uppercase tracking-wider mb-2">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-zinc-400 hover:text-teal-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

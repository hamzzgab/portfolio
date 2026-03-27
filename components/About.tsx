"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading number="01">Skills</SectionHeading>
      <div className="space-y-6">
        {skillCategories.map((category, catIndex) => (
          <div key={category.name}>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: catIndex * 0.15 }}
              className="text-[11px] text-zinc-600 uppercase tracking-wider mb-2"
            >
              {category.name}
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: catIndex * 0.15 + skillIndex * 0.05 }}
                  className="text-xs text-zinc-400 hover:text-teal-400 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

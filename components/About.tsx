"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-3xl mx-auto">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="text-sm font-medium text-muted mb-3 uppercase tracking-wider">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-foreground bg-card border border-border rounded-md hover:border-border-hover transition-colors"
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

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 max-w-3xl mx-auto">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pl-6 border-l border-border"
          >
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-foreground" />
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-foreground">
                {exp.company}
              </h3>
              <p className="text-sm text-muted">
                {exp.role} &middot; {exp.period}
              </p>
              <p className="text-sm text-muted">{exp.location}</p>
            </div>
            <ul className="space-y-3">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-sm text-muted leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-border before:rounded-full"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading number="02">Experience</SectionHeading>
      <div className="relative space-y-16">
        {/* Timeline connector */}
        <div className="absolute left-0 sm:left-[72px] top-2 bottom-2 w-px bg-teal-400/15 hidden sm:block" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col sm:flex-row gap-1 sm:gap-12 relative"
          >
            <div className="sm:w-40 shrink-0 flex items-start gap-3">
              {/* Timeline dot */}
              <div className="hidden sm:block absolute left-[68px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal-400/30 border border-teal-400/20" />
              <p className="text-xs text-zinc-600">{exp.period}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-zinc-200">{exp.company}</h3>
              <p className="text-xs text-zinc-500 mb-4">
                {exp.role} &middot; {exp.location}
              </p>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-xs text-zinc-500 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

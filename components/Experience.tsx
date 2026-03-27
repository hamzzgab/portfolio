"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading number="02">Experience</SectionHeading>
      <div className="relative">
        {/* Desktop timeline line */}
        <div className="hidden sm:block absolute top-[10px] bottom-[10px] left-[11.5rem] w-px bg-teal-400/15" />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row gap-1 sm:gap-12 relative"
            >
              <div className="sm:w-40 shrink-0 sm:text-right sm:pt-0.5">
                <p className="text-xs text-zinc-600">{exp.period}</p>
              </div>
              {/* Desktop dot */}
              <div className="hidden sm:block absolute left-[calc(11.5rem-4px)] top-1.5 w-2 h-2 rounded-full bg-teal-400/40" />
              {/* Mobile timeline: left border + dot */}
              <div className="flex-1 border-l border-teal-400/15 pl-4 sm:border-l-0 sm:pl-0">
                <div className="relative">
                  <div className="sm:hidden absolute -left-[20px] top-1.5 w-1.5 h-1.5 rounded-full bg-teal-400/40" />
                  <h3 className="text-sm font-medium text-zinc-200">{exp.company}</h3>
                </div>
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
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const education = [
  {
    institution: "Trinity College Dublin",
    degree: "M.Sc. Computer Science — AR/VR",
    grade: "1:1",
    period: "2022 — 2023",
  },
  {
    institution: "NMIMS University",
    degree: "B.Tech Computer Engineering",
    grade: "GPA: 3.45/4",
    period: "2018 — 2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col sm:flex-row gap-1 sm:gap-12"
          >
            <div className="sm:w-40 shrink-0">
              <p className="text-xs text-zinc-600">{edu.period}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-200">{edu.institution}</h3>
              <p className="text-xs text-zinc-500">{edu.degree} &middot; {edu.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

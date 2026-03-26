"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const education = [
  {
    institution: "Trinity College Dublin",
    degree: "M.Sc. in Computer Science",
    specialisation: "Augmented and Virtual Reality",
    grade: "1:1",
    period: "2022 — 2023",
  },
  {
    institution: "NMIMS University",
    degree: "B.Tech in Computer Engineering",
    grade: "GPA: 3.45/4",
    period: "2018 — 2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-20 max-w-3xl mx-auto">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
          >
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {edu.institution}
              </h3>
              <p className="text-sm text-muted">
                {edu.degree}
                {edu.specialisation && ` — ${edu.specialisation}`} &middot;{" "}
                {edu.grade}
              </p>
            </div>
            <p className="text-sm text-muted whitespace-nowrap">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-3xl mx-auto">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group p-5 rounded-lg bg-card border border-border hover:border-border-hover transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <svg
                className="w-4 h-4 text-muted group-hover:text-foreground transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs text-muted bg-background border border-border rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

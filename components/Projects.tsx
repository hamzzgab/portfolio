"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import WireframeIcon from "./WireframeIcon";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading number="03">Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <TiltCard>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-lg border border-transparent hover:border-teal-400/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-zinc-200 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    className="w-3.5 h-3.5 text-zinc-700 group-hover:text-teal-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex items-end justify-between">
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-zinc-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="wireframe-spin shrink-0 ml-2">
                    <WireframeIcon icon={project.icon} />
                  </div>
                </div>
              </a>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

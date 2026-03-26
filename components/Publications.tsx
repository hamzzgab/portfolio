"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section id="publications" className="px-6 py-20 max-w-3xl mx-auto">
      <SectionHeading>Publications</SectionHeading>
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-4 rounded-lg border border-border hover:border-border-hover transition-colors"
          >
            <p className="text-sm text-foreground leading-relaxed">
              {pub.title}
            </p>
            {(pub.venue || pub.year) && (
              <p className="text-xs text-muted mt-1.5">
                {[pub.venue, pub.year].filter(Boolean).join(", ")}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

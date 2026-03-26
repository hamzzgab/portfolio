"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section id="publications" className="px-6 py-24 max-w-2xl mx-auto">
      <SectionHeading>Publications</SectionHeading>
      <div className="space-y-6">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p className="text-sm text-zinc-300 leading-relaxed">{pub.title}</p>
            {(pub.venue || pub.year) && (
              <p className="text-xs text-zinc-600 mt-1">
                {[pub.venue, pub.year].filter(Boolean).join(", ")}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

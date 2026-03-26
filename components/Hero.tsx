"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted text-sm mb-3 tracking-wide uppercase">
          Software Development Engineer
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
          Hamza Gabajiwala
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">
          Building large-scale data pipelines and audience targeting systems at{" "}
          <span className="text-foreground font-medium">Yahoo</span>. Working
          with Spark, Airflow, and Kafka on AWS to process audience segments for
          programmatic advertising at scale. Recently integrating GenAI/LLM
          capabilities into search retargeting pipelines.
        </p>
        <div className="flex items-center gap-5 text-muted">
          <a
            href="https://github.com/hamzzgab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href="https://www.linkedin.com/in/hamza-gabajiwala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a
            href="https://leetcode.com/hamzajg16_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LeetCode
          </a>
          <span className="text-border">|</span>
          <a
            href="mailto:hamzajg16@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <span className="text-border">|</span>
          <a
            href={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <span className="text-border">|</span>
          <Link
            href="/gallery"
            className="hover:text-foreground transition-colors"
          >
            Certificates
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

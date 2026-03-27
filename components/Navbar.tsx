"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { assetPath } from "@/lib/basePath";

const sections = [
  { id: "about", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const activeName = sections.find((s) => s.id === activeSection)?.label;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo + scroll spy section name */}
        <div className="flex items-center gap-2">
          <a href="#" className="text-xs font-medium text-zinc-400 hover:text-teal-400 transition-colors">
            HG
          </a>
          <AnimatePresence mode="wait">
            {activeName && (
              <motion.span
                key={activeName}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] text-zinc-600 hidden sm:inline"
              >
                · {activeName}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-5">
          <ThemeToggle />
          <a
            href={assetPath("/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-teal-400 transition-colors"
          >
            Resume
          </a>
          <Link href="/gallery" className="text-xs text-zinc-500 hover:text-teal-400 transition-colors">
            Certificates
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-4 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-zinc-400 hover:text-teal-400 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-zinc-800/50"
          >
            <div className="px-6 py-4 space-y-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById(section.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 250);
                  }}
                  className={`block text-xs transition-colors ${
                    activeSection === section.id
                      ? "text-teal-400"
                      : "text-zinc-500 hover:text-teal-400"
                  }`}
                >
                  {section.label}
                </a>
              ))}
              <div className="pt-2 border-t border-zinc-800/50 space-y-3">
                <a
                  href={assetPath("/resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block text-xs text-zinc-500 hover:text-teal-400 transition-colors"
                >
                  Resume
                </a>
                <Link
                  href="/gallery"
                  onClick={() => setMenuOpen(false)}
                  className="block text-xs text-zinc-500 hover:text-teal-400 transition-colors"
                >
                  Certificates
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

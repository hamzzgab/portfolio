"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { assetPath } from "@/lib/basePath";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md dark:bg-[#0a0a0a]/80 light:bg-white/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-xs font-medium text-zinc-400 hover:text-teal-400 transition-colors">
          HG
        </a>
        <div className="flex items-center gap-5">
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
      </div>
    </nav>
  );
}

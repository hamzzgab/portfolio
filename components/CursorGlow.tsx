"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const isLight = document.documentElement.classList.contains("light");
        const color = isLight
          ? "rgba(13, 148, 136, 0.04)"
          : "rgba(45, 212, 191, 0.05)";
        glowRef.current.style.background = `radial-gradient(300px circle at ${e.clientX}px ${e.clientY}px, ${color}, transparent 80%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 z-30 pointer-events-none"
    />
  );
}

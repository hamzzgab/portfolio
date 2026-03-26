"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="text-xs text-zinc-500 hover:text-teal-400 transition-colors"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

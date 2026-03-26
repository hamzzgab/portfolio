/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#0a0a0a",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        border: "#27272a",
        "border-hover": "#3f3f46",
        card: "#111111",
      },
    },
  },
  plugins: [],
};

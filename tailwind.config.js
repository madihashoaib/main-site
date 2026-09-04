/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#0B1640",
          mid: "#16244F",
          light: "#233769"
        },
        ivory: {
          DEFAULT: "#FAF7F0",
          soft: "#F1ECE0"
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E4C862"
        },
        linework: "#4A5C8C"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"]
      }
    }
  },
  plugins: []
};

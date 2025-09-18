import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // White
        white: "#FFFFFF",
        "white-pucat": "#EAEEF3",
        "white-abu": "#A8A8A8",
        "white-lms": "#F5F9FD",

        // Shades of Red
        "dark-red": "#A10B0B",
        "light-red": "#BA1D1D",
        maroon: "#540D0D",
        "fire-brick": "#CC1919",
        "orange-red": "#F8601E",

        // Shades of Green
        lime: "#12BC04",
        "forest-green": "#228619",

        // Shades of Blue
        "dodger-blue": "#0C6CDC",
        "alice-blue": "#EAEEF3",

        // Shades of Yellow/Gold
        goldenrod: "#CBB707",

        // Shades of Purple
        "medium-violet": "#B620A7",

        // Neutral Colors
        black: "#000000",
        gainsboro: "#D9D9D9",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      screens: {
        xs: "300px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

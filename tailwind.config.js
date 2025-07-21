// tailwind.config.js (para Tailwind v3)
/** @type {import('tailwindcss').Config} */
const animate = require("tailwindcss-animate");

module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          /*DEFAULT: "#1C74E9",
          dark: "#1A66CC",*/

          DEFAULT: '#1C74E9', // Contrast ratio >4.5:1
        dark: '#0D5BC6',   // Versión más oscura
        },
        secondary: {
          DEFAULT: "#76C388",
          dark: "#5AA66D",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
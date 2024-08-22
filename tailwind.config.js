/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-fish": "url('/src/assets/bgFish.svg')",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          // "25%": { transform: "rotate(50deg)" },
          // "50%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        wiggle: "wiggle 0.2s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

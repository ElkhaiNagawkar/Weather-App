/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        BottomSlide: {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        BottomSlide: "BottomSlide 2s ease-out",
      },
    },
  },
  plugins: [],
};

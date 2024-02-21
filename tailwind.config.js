/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        BottomSlide: {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0)" },
        },
        ImgSlide: {
          "0%": { transform: "translateY(500px)" },
          "100%": { transform: "translateY(0)" },
        },
        LeftSlide: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(0)" },
        },
        TopSlide: {
          "0%": { transform: "translateY(-300px)" },
          "50%": { transform: "translateY(50px)" },
          "75%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        BottomSlide: "BottomSlide 2s ease-out",
        ImgSlide: "ImgSlide 2s ease-out",
        LeftSlide: "LeftSlide 2s ease-out",
        TopSlide: "TopSlide 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

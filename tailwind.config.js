module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        deep_orange_50: "#fbe0dc",
        gray_51: "#f9f9fa",
        bluegray_50: "#f1f1f1",
        gray_500: "#a6a6a6",
        yellow_50: "#fdfae5",
        deep_purple_100: "#d8cbf6",
        gray_200: "#ebebeb",
        gray_50: "#f9f9f9",
        bluegray_900: "#272042",
        black_900: "#000000",
        bluegray_400: "#8b8ba5",
        yellow_700: "#f7c531",
        white_A700: "#ffffff",
      },
      fontFamily: { quicksand: "Quicksand" },
      borderRadius: {
        radius1: "1px",
        radius2: "2px",
        radius4: "4px",
        radius50: "50%",
        radius916: "9.16px",
        radius1715: "17.15px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

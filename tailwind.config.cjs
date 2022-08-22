/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        centra: ["Centra", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury",
      {
        proDark: {
          "primary": "#eda8c5",
          "secondary": "#8056c9",
          "accent": "#e2f49a",
          "neutral": "#22282A",
          "base-100": "#283143",
          "info": "#2AA5D5",
          "success": "#21B05F",
          "warning": "#E09E10",
          "error": "#E61E32",
        },
      },
    ],
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,html}"],
  plugins: [require("daisyui"),require('@tailwindcss/typography')],
  darkMode: "class",
  daisyui: {
    themes: ["cmyk","forest"],
    darkTheme: "forest",
  },
  
}

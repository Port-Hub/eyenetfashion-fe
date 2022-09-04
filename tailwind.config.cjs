/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,html}"],
  plugins: [require("daisyui"),require('@tailwindcss/typography')],
  daisyui: {
    themes: ["cmyk"],
  },
  
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{ts,tsx,html}"],
  plugins: [require("daisyui"),require('@tailwindcss/typography')],
  daisyui: {
    logs: false,
    themes: ["winter"],
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      }
    }
  }
}
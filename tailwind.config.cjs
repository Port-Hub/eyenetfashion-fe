/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,html}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  plugins: [require("daisyui"),require('@tailwindcss/typography')],
  daisyui: {
    logs: false,
    themes: ["winter"],
  },
  
}

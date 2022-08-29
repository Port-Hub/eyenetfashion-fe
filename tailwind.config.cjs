/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        // centra: ["Centra", "sans-serif"],
      //   'sans': ['ui-sans-serif', 'system-ui'],
      // 'serif': ['ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular'],
      // 'display': ['Oswald'],
      // 'body': ['"Open Sans"'],
      },
    },
  },
  plugins: [require("daisyui"),require('@tailwindcss/typography')],
  daisyui: {
    themes: ["light"],
    
  },
  
}

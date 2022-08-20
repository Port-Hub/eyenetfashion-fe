/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["fantasy", "forest", "dracula"],
    themes: [
      {
        protheme: {
          "primary": "#dc2626",
          "secondary": "#ea580c",       
          "accent": "#22d3ee",        
          "neutral": "#1F1C26",      
          "base-100": "#1f2937",       
          "info": "#f0abfc",       
          "success": "#16a34a",       
          "warning": "#facc15",      
          "error": "#be123c",
        },
      },
    ],
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      fontFamily: { 
        "sans": ["League Spartan", "sans-serif"]
      },
      colors: {
        "black": "#252525", 
        "white": "#F9FBFC",
        "red-primary": "#C74949",
        "red-secondary": "#FF5F5F",
        "green-primary": "#006769",
        "green-secondary": "#40A578",
        "green-tertiary": "#9DDE8B",
        "yellow": "#E6FF94"
      },
      dropShadow: { 
        "sm": "4px 4px 4px rgba(0, 0, 0, 0.5)"
      }
    },
  },
  plugins: [],
}


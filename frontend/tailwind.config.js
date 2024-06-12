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
        "green-primary": "#006769",
        "green-secondary": "#40A578",
        "green-tertiary": "#9DDE8B",
        "yellow": "#E6FF94"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#24639E',
      'secondary': '#A8CBEB',
      'hartmanblue': {
        50: "#EAF3FA",
        100: "#D1E4F5",
        200: "#A8CBEB",
        300: "#7AAFE1",
        400: "#5096D8",
        600: "#24639E",
        700: "#1A4975",
        800: "#12314F",
        900: "#081725",
        950: "#050D15"
      }
    },
    extend: {
      fontFamily: {
        'merriweather': ['merriweather', 'sans-serif']
      },
    },
  },
  plugins: [],
}
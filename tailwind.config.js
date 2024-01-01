/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'marron': '#C8AFA1',
        'gris':'#697980',
        'negro':'#332D2C',
      },
      fontFamily: {
        'Roboto': ['Roboto, sans-serif'],
        'Anton' : ['Anton, sans-serif'],
      
      },
      screens: {
        'sm':'260px',
        
      },
      fontSize: {
        '50':'200px',
        '28':'28.3px',
      },
    },
  },

  plugins: [],




}


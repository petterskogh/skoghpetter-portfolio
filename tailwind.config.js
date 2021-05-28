const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      green: {
        DEFAULT: '#1CBC36',
        light: '#28C05F'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

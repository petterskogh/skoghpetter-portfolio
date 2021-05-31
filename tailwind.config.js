const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pgreen: {
          DEFAULT: '#1CBC36',
          light: '#28C05F'
        },
        pwhite: {
          DEFAULT: '#E6E8E6',
          light: '#FFF'
        },
        pblack: {
          DEFAULT: '#2E2E3A'
        }

      },
      boxShadow: {
        l: '-10px 0px 10px 0px rgba(0, 0, 0, 0.1)'
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

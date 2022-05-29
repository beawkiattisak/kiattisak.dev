const colors = require("tailwindcss/colors")

module.exports = {
  'content': ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  'darkMode': 'media', // or 'media' or 'class'
  'theme': {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'gray': colors.gray,
      'beawlike': "#111417",
      'beawlikeเเต่เเสบตา': "#1b1f24",
    }),

    'extend': {
      'backdropSaturate': {
        'beawlike': '180%',
      },
      'backdropBlur': {
        'beawlike': '20px',
      }
    },

    'fontFamily': {
      'sans': [ 'Roboto', 'sans-serif' ]
    },
  },
  'variants': {
    'extend': {},
  },
  'plugins': [],
}

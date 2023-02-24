/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif']
    },
    fontSize: {
      '17xl': ['17px', { lineHeight: '20.57px' }],
      '15xl': ['15px', { lineHeight: '18.15px' }],
      ...defaultTheme.fontSize
    },
    extend: {
      backgroundImage: {
        common: 'url("/src/assets/images/main-bgimg.png")',
        numericon: 'url("/src/assets/svgs/number-icon.svg")',
        dropdownIcon: 'url("/src/assets/svgs/drop-down-icon.svg")',
        infoIcon: 'url("/src/assets/svgs/info-icon.svg")'
      },
      colors: {
        navGreen: '#0F4C3C',
        guppieGreen: '#2AFD84',
        red: '#FF0000',
        darkWhite: '#ffffff80'
      }
    }
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};

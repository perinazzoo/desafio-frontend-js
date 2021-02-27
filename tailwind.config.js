module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'color-action': {
        500: '#1A8DE9',
        600: '#197ACF'
      },
      'color-brand': {
        500: '#003781'
      },
      'color-grey': {
        50: '#FAFAFA',
        300: '#D9D9D9',
        500: '#999999',
        800: '#414141'
      },
      'color-vibrant': {
        500: '#96DCFA'
      },
      'color-success': {
        500: '#3DA556'
      },
      'color-orange': {
        500: '#F86200',
        700: '#CF5200'
      },
      'color-purple': {
        500: '#8A679C'
      },
      'color-base': {
        white: '#FFFFFF'
      }
    },
    boxShadow: {
      sm: '0px 2px 11px -5px rgba(0, 0, 0, 0.25)',
      mobile: '0px 0px 10px rgba(14, 33, 61, 0.2)',
      menu: '0px -8px 22px rgba(0, 0, 0, 0.25)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

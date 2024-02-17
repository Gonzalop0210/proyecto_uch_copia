/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './code/js/*.js',
  ],
  theme: {
    fontFamily: {
      'montserrat': '"Montserrat", sans-serif',
      'exo2': '"Exo 2", sans-serif',
    },
    extend: {
      colors: {
        'color-naranja': 'rgba(239,65,54,1)',
        'color-azul': '#20366D',
        'color-link-azul': '#337ab7',
        'color-link-hover': '#23527c',
        'color-verde': '#23c16e',
      },
      width: {
        '528': '528px',
        '1152': '1152px',
        'full-10': '110%'
      },
      height: {
        '300': '300px',
        '152': '152px',
        'full-10': '110%'
      },
    },
  },
  plugins: [],
}


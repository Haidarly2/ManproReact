/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: 'Poppins',
      alegreya: 'Alegreya',
      preahvihear: 'Preahvihear',
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'laptop3': {
        'min': '1280px',
        'max': '1439px'
      },

      'laptop1': {
        'min': '1440px',
        'max': '1500px'
      },

      'laptop2': {
        'raw': '(width: 1280px) and (height: 800px)'
      },
    },
    plugins: [],
  }
}

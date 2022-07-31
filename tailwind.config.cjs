/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-bg.png)' 
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        purple: {
          300: '#8284FA',
          500: '#5E60CE',
        },
        blue: {
          300: '#4EA8DE',
          500: '#1E6F9F',
        },
        danger: '#E25858',
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
          bg: '#191919'
        }
      },
    },
  },
  plugins: [],
}

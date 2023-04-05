/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#F5F5F5',
        black: '#303030',
        primary: '#4B03A6'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      },
      backgroundImage: {
        heroPattern1:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%), url('./src/assets/img/back1.png')",
        heroPattern2:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%), url('./src/assets/img/back1.png')",
        heroPattern3:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%), url('./src/assets/img/back1.png')",
        heroPattern4:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%), url('./src/assets/img/back1.png')"
      },
      height: {
        100: '25rem',
        120: '30rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        200: '50rem',
        220: '55rem',
        240: '60rem',
        260: '65rem',
        280: '70rem',
        300: '75rem'
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}

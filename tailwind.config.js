/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px'
      },
      colors: {
        white: {
          DEFAULT: '#F5F5F5',
          100: 'rgba(229, 231, 235, 0.1)',
          200: 'rgba(229, 231, 235, 0.2)',
          300: 'rgba(229, 231, 235, 0.3)',
          400: 'rgba(229, 231, 235, 0.4)',
          500: 'rgba(229, 231, 235, 0.5)',
          600: 'rgba(229, 231, 235, 0.6)',
          700: 'rgba(229, 231, 235, 0.7)',
          800: 'rgba(229, 231, 235, 0.8)',
          900: 'rgba(229, 231, 235, 0.9)'
        },
        black: '#303030',
        primary: {
          DEFAULT: '#4B03A6',
          100: 'rgba(75, 3, 166, 0.1)',
          200: 'rgba(75, 3, 166, 0.2)',
          300: 'rgba(75, 3, 166, 0.3)',
          400: 'rgba(75, 3, 166, 0.4)',
          500: 'rgba(75, 3, 166, 0.5)',
          600: 'rgba(75, 3, 166, 0.6)',
          700: 'rgba(75, 3, 166, 0.7)',
          800: 'rgba(75, 3, 166, 0.8)',
          900: 'rgba(75, 3, 166, 0.9)'
        },
        gray: {
          DEFAULT: '#666666',
          100: 'rgba(102, 102, 102, 0.1)',
          200: 'rgba(102, 102, 102, 0.2)',
          300: 'rgba(102, 102, 102, 0.3)',
          400: 'rgba(102, 102, 102, 0.4)',
          500: 'rgba(102, 102, 102, 0.5)',
          600: 'rgba(102, 102, 102, 0.6)',
          700: 'rgba(102, 102, 102, 0.7)',
          800: 'rgba(102, 102, 102, 0.8)',
          900: 'rgba(102, 102, 102, 0.9)'
        }
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
        110: '27.5rem',
        120: '30rem',
        130: '32.5rem',
        140: '35rem',
        150: '37.5rem',
        160: '40rem',
        170: '42.5rem',
        180: '45rem',
        190: '47.5rem',
        200: '50rem',
        210: '52.5rem',
        220: '55rem',
        230: '57.5rem',
        240: '60rem',
        250: '62.5rem',
        260: '65rem',
        270: '67.5rem',
        280: '70rem',
        290: '72.5rem',
        300: '75rem',
        310: '77.5rem',
        320: '80rem',
        330: '82.5rem',
        340: '85rem',
        350: '87.5rem',
        360: '90rem',
        370: '92.5rem',
        380: '95rem',
        390: '97.5rem',
        400: '100rem',
        410: '102.5rem',
        420: '105rem',
        430: '107.5rem',
        440: '110rem',
        450: '112.5rem',
        460: '115rem',
        470: '117.5rem',
        480: '120rem',
        490: '122.5rem',
        500: '125rem'
      },
      zIndex: {
        2: 2,
        3: 3,
        4: 4,
        5: 5
      },
      spacing: {
        18: '4.5rem',
        74: '18.5rem',
        76: '19rem'
      },
      width: {
        50: '50%'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem'
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}

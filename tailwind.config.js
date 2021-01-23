module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roc: ['Roc Grotesk'],
      },
      backgroundImage: (theme) => ({
        'hero-background': "url('./images/background.png')",
      }),
      colors: {
        primary: '#140CA3',
        secondary: '#FAF0E6',
      },
      height: {
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        97: '26rem',
        98: '28rem',
        99: '30rem',
        100: '32rem',
        101: '34rem',
        102: '36rem',
        103: '38rem',
        104: '40rem',
        105: '42rem',
        106: '44rem',
        107: '46rem',
        108: '48rem',
        109: '50rem',
        110: '52rem',
        111: '54rem',
        112: '56rem',
        113: '58rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.875rem', //14px
        base: '1rem', //16px
        lg: '1.125rem', //18px
        xl: '1.25rem', //20px
        '2xl': '1.375rem', //22px
        '3xl': '2.875rem', //46px
        '4xl': '3.5rem', //56px
      },
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      pureblack: '#151515',
      gray: '#888888',
      salmon: '#FC8D78',
      yellow: '#FED945',
      pink: '#FFACD4',
      skyblue: '#74CCFF',
      red: '#FF4949',
      green: '#50D75D',
    },
    fontFamily: {
      SUIT: ['SUIT'],
      BagelFatOne: ['BagelFatOne'],
    },
    screens: {
      lg: { max: '1024px' },
      md: { max: '568px' },
      sm: { max: '430px' },
    },
    boxShadow: {
      md: '0 4px 10px 0 rgba(0, 0, 0, 0.05)',
    },
  },
  plugins: [],
};

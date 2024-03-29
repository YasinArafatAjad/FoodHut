/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1440px',
      '4k':'2560px',
    },    
    fontFamily:{
      sofia: ['"Sofia Pro"','sans-serif'],
      inter: ['"Inter"','sans-serif'],
    },
    extend: {
      colors :{
        'primary':'#F54748',
        'secondery':'#FDC55E',
        'black-1': '#2E2E2E',
        'black-2':'#191919',
      },
    },
  },
  plugins: [],
}
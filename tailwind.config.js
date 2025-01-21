/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/swiper/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          blue_1: "#000"
        },
        red_1: {
          red1: "#DB4444"
        },
        red_2:{
          lightred:"#E07575"
        },
        black_1: {
          black: "#000000"
        },
        gray_1:{
          gray:"#FFFFFF"
        },
        gray_2:{
          gray:"#F5F5F5"
        },
        white_1:{
          white:"#FAFAFA"
        }
      },

      fontFamily: {
        i: ['"Inter"', 'serif'],
        p: ['"Poppins"', 'serif']

  
      }
    },
  },
  plugins: [],
}
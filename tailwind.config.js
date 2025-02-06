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
        },
        green_1:{
          green:"#00FF66"
        },
        black_2:{
          black:"#0D0D0D"
        }
      },

      fontFamily: {
        i: ['"Inter"', 'serif'],
        p: ['"Poppins"', 'serif']

  
      },
      boxShadow:{
        custom:['4px 4px 15px rgba(0, 0, 0, 0.2)'],
        Customnew: ['0px 1px 13px 0px #0000000D'],
       
      } ,
      dropShadow: {
        'custom-white': '0 0 100px #ffffff57',
      }
     
     
    },
  },
  plugins: [],
}
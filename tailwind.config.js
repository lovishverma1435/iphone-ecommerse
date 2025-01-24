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
        }
      },

      fontFamily: {
        i: ['"Inter"', 'serif'],
        p: ['"Poppins"', 'serif']

  
      },
      dropShadow: {
        'custom-white': '0 0 100px #ffffff57'
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '2px 8px 18px rgba(255, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}",
  './public/index.html',
],
  theme: {
    extend: {
      colors:{
        mblue:'#031955',
        mlightblue:'#344ea2',
        mperpel:'#7321aa',
        mpink:'#d911f7'
      }
    },
  },
  plugins: [],
}

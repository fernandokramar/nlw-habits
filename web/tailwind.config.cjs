/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**", "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        backgroud: '#09090A'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
};

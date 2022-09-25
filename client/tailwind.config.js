/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', "sans-serif"],
        Passions: ['Passions Conflict', 'cursive'],
       },
       colors :{
        'lilly': '#6F38C5',

       }
    },
  },
  plugins: [],
}

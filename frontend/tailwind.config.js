/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
//     font-family: 'Fira Sans', sans-serif;
// font-family: 'Gloock', serif;
 sans:[ 'Hanken Grotesk', 'sans-serif'],
// font-family: 'Open Sans', sans-serif;
// font-family: 'Red Hat Display', sans-serif;
// font-family: 'Red Hat Text', sans-serif;
// font-family: 'Roboto', sans-serif;
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')({ nocompatible: true }),

  ]
}
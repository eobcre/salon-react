/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        shadow: ['Shadows Into Light', 'cursive'],
      },
      margin: {
        '15px': '15px',
      },
    },
  },
  plugins: [],
};

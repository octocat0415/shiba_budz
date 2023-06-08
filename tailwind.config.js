/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        // montserrat: ['Montserrat','sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const topUtilities = {
        '.top-p-20': {
          top: '20%',
        },
        '.top-p-30': {
          top: '30%',
        },
        '.top-p-60': {
          top: '60%',
        },
        // Add more top utilities as needed
      };
      const rightUtilities = {
        '.right-p-20': {
          right: '20%',
        },
        '.right-p-30': {
          right: '30%',
        },
        // Add more top utilities as needed
      };

      addUtilities(topUtilities, ['responsive']);
      addUtilities(rightUtilities, ['responsive']);
    }),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      'height': {
        '120': '30rem',
        '192': '48rem',
      },
      'colors': {
        'light-brown': '#f8f7f3'
      }
    },
  },
  plugins: [],
  important: true,
}


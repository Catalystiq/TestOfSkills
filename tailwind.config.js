/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      fontFamily: {
        'code': ['ui-monospace', 'Source Code Pro']
      },
      extend: {},
    },
    plugins: [],
  }
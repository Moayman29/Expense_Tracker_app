/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#059BFF',
        secondary: '#FF4069',
        tertiary: '#FF9020'
      }
    },
  },
  plugins: [],
}


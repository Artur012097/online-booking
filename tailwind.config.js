/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      black: {
        100: '#000000'
      },
      red: {
        100: '#FF0000',
      },
      green: {
        100: '#008000',
      },
    },
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Define the gold color
      },
      boxShadow: {
        glow: '0 0 10px #FFD700', // Glow effect for text
      },
    },
  },
  plugins: [require('daisyui'),],
}


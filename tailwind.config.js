/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '10px 04px 30px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}


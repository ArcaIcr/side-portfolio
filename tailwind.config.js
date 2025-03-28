/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        'forest': "url('/forest-bg.jpg')",
        'subtle-prism': "url('/subtle-prism.svg')",
        'parallax': "url('/parallax-bg.svg')",
        'desert': "url('/desert-bg.jpg')",
      },
    },
  },
  plugins: [],
}

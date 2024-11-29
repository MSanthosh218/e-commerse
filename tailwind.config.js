/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#f0f0f0',
        mintGreen: '#b2d8cc',
        darkGray: '#505050',
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(to right, #f0f0f0, #b2d8cc)',
      },
    },
  },
  plugins: [],
}


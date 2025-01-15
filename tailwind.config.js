/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(60deg, rgb(11,41,53) 25%, rgb(28,66,89) 35%, rgb(11,41,53) 55%)',
      },
      animation: {
        seeDown: 'seeDown 2s linear infinite',
      },
      keyframes: {
        seeDown: {
          '0%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 78%, 50vw 93%, 0 78%)' },
          '50%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 83%, 50vw 98%, 0 83%)' },
          '100%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 78%, 50vw 93%, 0 78%)' },
        },
      },
    },
  },
  plugins: [],
}
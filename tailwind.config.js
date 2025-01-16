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
        box1: 'box1 0.5s linear forwards',
        box2: 'box2 0.5s linear forwards',
        box3: 'box3 0.5s linear forwards',
        fadein: 'fadein 0.5s linear forwards',
      },
      keyframes: {
        seeDown: {
          '0%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 78%, 50vw 93%, 0 78%)' },
          '50%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 83%, 50vw 98%, 0 83%)' },
          '100%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 78%, 50vw 93%, 0 78%)' },
        },
        box1: {
          'from': { right: '100%' },
          'to': { right: '47.5%' }
        },
        box2: {
          'from': { transform: 'translateX(-50%) translateY(-50%) scale(0)' },
          'to': { transform: 'translateX(-50%) translateY(-50%) scale(1)' }
        },
        box3: {
          'from': { left: '100%' },
          'to': { left: '60%' }
        },
        fadein: {
          'from': { scale: '0', opacity: '0' },
          'to': { scale: '1', opacity: '1' }
        }
      },
    },
  },
  plugins: [],
}
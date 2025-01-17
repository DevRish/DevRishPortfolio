import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '794px' },
        md: { min: '795px' },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(60deg, rgb(11,41,53) 25%, rgb(28,66,89) 35%, rgb(11,41,53) 55%)',
      },
      animation: {
        seeDown: 'seeDown 2s linear infinite',
        seeDownSm: 'seeDownSm 2s linear infinite',
        box1: 'box1 0.5s linear forwards',
        box2: 'box2 0.5s linear forwards',
        box3: 'box3 0.5s linear forwards',
        fadein: 'fadein 0.5s linear forwards',
        float: 'float 3s linear infinite',
        glow: 'glow 1.5s linear infinite',
        spin: 'spin 3s linear infinite',
        floatdown: 'floatdown 3s linear infinite',
        hand: 'hand 1s linear infinite',
      },
      keyframes: {
        seeDown: {
          '0%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 78%, 50vw 93%, 0 78%)' },
          '50%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 83%, 50vw 98%, 0 83%)' },
          '100%': { clipPath: 'polygon(0 0, 100vw 0, 100vw 78%, 50vw 93%, 0 78%)' },
        },
        seeDownSm: {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 95%, 0 90%)' },
          '50%': { clipPath: 'polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 95%, 0 90%)' },
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
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5' },
        },
        spin: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
        floatdown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(0)' },
        },
        hand: {
          '0%': { transform: 'rotateZ(0deg) translateX(0)' },
          '50%': { transform: 'rotateZ(5deg) translateX(-2px)' },
          '100%': { transform: 'rotateZ(0deg) translateX(0)' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
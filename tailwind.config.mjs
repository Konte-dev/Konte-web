/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#232323',
        darkSurface: '#2c2c2c',
        darkSection: '#000000',
        darkAccent: '#0055FF', /* Electric Blue (Unified) */
        darkText: '#EDEDED',
        darkTextSec: '#A3A3A3',
        lightBg: '#F3F4F6',
        lightSurface: '#FFFFFF',
        lightAccent: '#0055FF', /* Azul Corporativo / Electric Blue */
        lightText: '#0F172A',
        lightTextSec: '#475569',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

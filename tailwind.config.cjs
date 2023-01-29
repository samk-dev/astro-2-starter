/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        eerierblack: {
          700: '#1E1E1E',
          900: '#171717'
        },
        primary: '#1FC15B',
        success: '#84CC16',
        warning: '#FB923C',
        error: '#F97C7C'
      },
      fontFamily: {
        monospaced: ['monospace']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}

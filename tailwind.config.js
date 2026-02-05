/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'sans-serif'], // Font modern mirip desain
      },
      colors: {
        'brand-purple': '#5D3FD3', // Ungu utama
        'brand-dark': '#1A1A2E',   // Ungu gelap untuk background
        'brand-lime': '#CCF381',   // Hijau stabilo (Lime)
        'brand-white': '#F8F9FA',
      },
      backgroundImage: {
        'pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }
    },
  },
  plugins: [],
}

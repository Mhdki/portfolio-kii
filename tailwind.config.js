/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        'brand-pink': '#FF4D80',   // Pink Salmon Khas Saikat
        'brand-dark': '#151515',   // Hitam Background
        'brand-card': '#1E1E1E',   // Abu Gelap Card
        'text-main': '#222222',    // Teks Hitam
        'text-gray': '#777777',    // Teks Abu
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #FF4D80 0%, #FF8FAB 100%)',
      }
    },
  },
  plugins: [],
}

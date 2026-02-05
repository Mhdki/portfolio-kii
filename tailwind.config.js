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
        'display': ['"Plus Jakarta Sans"', 'sans-serif'], 
      },
      colors: {
        'brand-purple': '#5D3FD3', // Ungu Utama
        'brand-dark': '#0F0F1A',   // Hitam Kebiruan
        'brand-lime': '#CCF381',   // Hijau Stabilo
        'brand-white': '#F8F9FA',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}

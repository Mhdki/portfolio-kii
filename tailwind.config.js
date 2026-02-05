/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'sans-serif'], // Font bulat modern mirip screenshot
      },
      colors: {
        'brand-pink': '#FF4D80',   // Warna Pink Utama
        'brand-dark': '#1D1D1D',   // Warna Hitam (Navbar/Footer)
        'brand-gray': '#F5F5F5',   // Warna Background Abu tipis
        'text-main': '#222222',    // Warna Teks Hitam
      },
      boxShadow: {
        'soft': '0 20px 40px -10px rgba(255, 77, 128, 0.15)',
      }
    },
  },
  plugins: [],
}

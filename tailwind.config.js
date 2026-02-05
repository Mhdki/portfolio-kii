/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Syne"', 'sans-serif'], // Font Judul Artistik
        'body': ['"Manrope"', 'sans-serif'], // Font Bacaan Rapi
      },
      colors: {
        'dark': '#0D0D0D',       // Background Utama
        'card': '#161616',       // Warna Kotak Bento
        'accent': '#D1F245',     // Lime Green (Warna Behance)
        'light': '#F4F4F4',      // Putih Tulang
        'muted': '#888888',      // Abu-abu
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

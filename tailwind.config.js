/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Syne"', 'sans-serif'], // Font Judul "Behance Look"
        'body': ['"Manrope"', 'sans-serif'], // Font Bacaan Bersih
      },
      colors: {
        'dark': '#0D0D0D',       // Hitam Premium
        'card': '#161616',       // Abu Gelap untuk Kartu
        'accent': '#D1F245',     // Lime Green (Warna Behance Hype)
        'secondary': '#FFFFFF',  // Putih
        'muted': '#888888',      // Abu-abu teks
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
        'grid': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'marquee': 'marquee 25s linear infinite',
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

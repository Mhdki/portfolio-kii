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
        'display': ['"Plus Jakarta Sans"', 'sans-serif'], // Pakai font modern yang sama
      },
      colors: {
        'brand-purple': '#5D3FD3', 
        'brand-dark': '#0F0F1A',   // Lebih gelap dikit biar pop
        'brand-lime': '#CCF381',   
        'brand-white': '#F8F9FA',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}

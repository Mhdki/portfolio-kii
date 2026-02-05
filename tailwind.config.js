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
        // Opsi font judul yang lebih tegas (opsional)
        // 'display': ['"Syne"', 'sans-serif'], 
      },
      colors: {
        'brand-purple': '#8A2EFF', // Ungu Neon
        'brand-dark': '#0A0A0F',   // Latar belakang hampir hitam
        'brand-grey': '#1A1A24',   // Abu gelap untuk section lain
        'glass-border': 'rgba(255, 255, 255, 0.1)', // Border tipis untuk glass
      },
      backgroundImage: {
        // Gradient untuk blob background
        'gradient-radial-purple': 'radial-gradient(circle, rgba(138,46,255,0.4) 0%, rgba(0,0,0,0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

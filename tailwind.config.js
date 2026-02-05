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
        'brand-purple': '#7F00FF', // Ungu Vibrant Utama
        'light-grey': '#F3F4F6',   // Latar belakang terang
        'medium-grey': '#E5E7EB',  // Border / Card terang
        'dark-grey': '#1F2937',    // Latar belakang gelap (pengganti hitam)
        'card-grey': '#374151',    // Warna kartu di latar gelap
        'text-main': '#111827',    // Teks utama (hampir hitam)
        'text-muted': '#6B7280',   // Teks abu-abu
      },
      backgroundImage: {
        // Gradasi Ungu untuk elemen dekoratif
        'gradient-purple': 'linear-gradient(135deg, #7F00FF 0%, #A855F7 100%)',
      }
    },
  },
  plugins: [],
}

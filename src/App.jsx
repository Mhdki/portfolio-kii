import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Layout, PenTool, Image as ImageIcon, MessageCircle, Instagram, Dribbble, Linkedin, MousePointer2, CheckCircle2 } from 'lucide-react';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; // GANTI NOMOR WA DISINI

// --- DATA ---
const SERVICES = [
  { title: "Social Media", desc: "Instagram Feeds, Story, Ads Creative", icon: <Layout size={28}/> },
  { title: "Banner Design", desc: "Spanduk, Billboard, X-Banner", icon: <ImageIcon size={28}/> },
  { title: "Livery Custom", desc: "Bus, Mobil Operasional, Motor", icon: <PenTool size={28}/> },
];

const PORTFOLIO = [
  // Social Media
  { id: 1, cat: "Social Media", title: "Kopi Kenangan Feeds", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800" },
  { id: 2, cat: "Social Media", title: "Gym Promotion", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" },
  // Banner
  { id: 3, cat: "Banner", title: "Seminar Nasional", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
  { id: 4, cat: "Banner", title: "Menu Restoran", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800" },
  // Livery
  { id: 5, cat: "Livery", title: "Bus Pariwisata PO. Haryanto", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" },
  { id: 6, cat: "Livery", title: "Branding Mobil Kantor", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800" },
];

// --- COMPONENT: MARQUEE (TEKS JALAN) ---
const Marquee = () => (
  <div className="bg-accent py-3 overflow-hidden border-y border-dark relative z-20 rotate-[-1deg] my-10">
    <div className="flex gap-12 animate-marquee whitespace-nowrap font-display font-bold text-dark text-3xl uppercase items-center">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="flex items-center gap-8">
          OPEN FOR WORK <span className="w-3 h-3 bg-dark rounded-full"></span>
        </span>
      ))}
    </div>
  </div>
);

// --- APP UTAMA ---
export default function App() {
  const [activeTab, setActiveTab] = useState("Social Media");

  // Fungsi WA
  const handleOrder = (msg) => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Filter Logic
  const filteredData = PORTFOLIO.filter(item => item.cat === activeTab);

  return (
    <div className="bg-dark min-h-screen relative overflow-x-hidden selection:bg-accent selection:text-dark">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference text-white">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="font-display font-bold text-2xl tracking-tighter">ALEX<span className="text-accent">.</span></h1>
            <button onClick={() => handleOrder("Halo, mau tanya jasa desain.")} className="px-6 py-2 border border-white/20 rounded-full text-sm font-bold hover:bg-white hover:text-dark transition-all">
              Contact Me
            </button>
         </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-40 pb-20 px-6 text-center">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-muted">Freelance Designer</span>
         </div>
         
         <h1 className="font-display text-[15vw] leading-[0.8] font-black tracking-tighter text-light mb-8">
            VISUAL <br/> <span className="text-stroke">CREATOR</span>
         </h1>
         
         <p className="max-w-xl mx-auto text-muted text-lg mb-12">
            Spesialis desain Social Media, Banner, dan Livery Kendaraan. 
            Membantu brand kamu tampil beda dengan visual yang berkarakter.
         </p>

         <div className="flex justify-center gap-4">
            <button onClick={() => document.getElementById('work').scrollIntoView()} className="bg-accent text-dark px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
               Lihat Karya
            </button>
            <button onClick={() => handleOrder("Halo, saya mau konsultasi desain.")} className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-dark transition-all">
               Konsultasi
            </button>
         </div>
      </header>

      <Marquee />

      {/* --- BENTO GRID (ABOUT & SERVICES) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
         <div className="grid md:grid-cols-3 gap-6">
            
            {/* About Card */}
            <div className="md:col-span-2 bg-card p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rounded-full group-hover:bg-accent/20 transition-all"></div>
               <h3 className="text-accent font-bold uppercase tracking-widest mb-4">About Me</h3>
               <h2 className="font-display text-4xl font-bold leading-tight mb-4">
                  Desain bukan cuma gambar, tapi <span className="text-accent">solusi.</span>
               </h2>
               <p className="text-muted leading-relaxed">
                  Halo, gua Alex. Gua fokus bikin desain yang nggak cuma estetik, tapi juga menjual. 
                  Mulai dari feeds IG yang rapi sampai branding bus pariwisata yang eye-catching di jalanan.
               </p>
               <div className="flex gap-4 mt-8">
                  <Instagram className="text-muted hover:text-white cursor-pointer"/>
                  <Dribbble className="text-muted hover:text-white cursor-pointer"/>
                  <Linkedin className="text-muted hover:text-white cursor-pointer"/>
               </div>
            </div>

            {/* Services List */}
            <div className="md:col-span-1 bg-card p-8 rounded-[2rem] border border-white/5 flex flex-col justify-center">
               <h3 className="text-muted text-xs font-bold uppercase tracking-widest mb-6">My Services</h3>
               <div className="space-y-6">
                  {SERVICES.map((s, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                       <div className="text-accent group-hover:scale-110 transition-transform">{s.icon}</div>
                       <div>
                          <h4 className="font-display font-bold">{s.title}</h4>
                          <p className="text-xs text-muted">{s.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

         </div>
      </section>

      {/* --- GALLERY SECTION (TABS) --- */}
      <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="font-display text-5xl font-black mb-8">SELECTED WORKS</h2>
            
            {/* TABS */}
            <div className="flex flex-wrap justify-center gap-3">
               {["Social Media", "Banner", "Livery"].map(tab => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`px-6 py-2 rounded-full border text-sm font-bold uppercase transition-all ${
                     activeTab === tab 
                     ? 'bg-accent text-dark border-accent' 
                     : 'border-white/10 text-muted hover:border-white hover:text-white'
                   }`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
         </div>

         {/* GRID GAMBAR */}
         <motion.div layout className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
               {filteredData.map((item) => (
                 <motion.div 
                   layout
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.3 }}
                   key={item.id}
                   className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-card border border-white/5"
                 >
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                       <h3 className="font-display text-2xl font-bold mb-2">{item.title}</h3>
                       <span className="text-accent text-xs font-bold uppercase mb-6 tracking-widest">{item.cat}</span>
                       <button 
                         onClick={() => handleOrder(`Halo, saya tertarik dengan desain ${item.cat} seperti "${item.title}".`)}
                         className="bg-white text-dark px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-accent transition-colors"
                       >
                         <MessageCircle size={16}/> Pesan Desain Ini
                       </button>
                    </div>
                 </motion.div>
               ))}
            </AnimatePresence>
         </motion.div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto bg-accent rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="font-display text-4xl md:text-7xl font-black text-dark mb-8 leading-tight">
                 SIAP BIKIN BRAND <br/> KAMU NAIK KELAS?
               </h2>
               <button onClick={() => handleOrder("Halo, gas project baru!")} className="bg-dark text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                 Gas Order Sekarang!
               </button>
            </div>
         </div>
      </section>

      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-muted text-xs font-bold uppercase tracking-widest">© 2026 Alex Voss Design.</p>
      </footer>

    </div>
  );
}

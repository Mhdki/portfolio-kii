import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { ArrowRight, Layout, Smartphone, PenTool, Music, MousePointer2, Code, Figma, X, Filter, MessageCircle, Image as ImageIcon, Truck, Monitor } from 'lucide-react';

// --- CONFIG ---
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const WA_NUMBER = "6281234567890"; // GANTI NOMOR WA KAMU DISINI

// --- DATA PORTFOLIO ---
const PORTFOLIO_ITEMS = [
  // KATEGORI 1: SOCIAL MEDIA
  { id: 1, category: "Social Media", title: "Instagram Feeds Coffee Shop", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800", price: "Mulai 50k/slide" },
  { id: 2, category: "Social Media", title: "Fashion Brand Story", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800", price: "Paket 300k" },
  { id: 3, category: "Social Media", title: "Gym Promotion Post", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800", price: "Mulai 50k" },
  
  // KATEGORI 2: BANNER/SPANDUK
  { id: 4, category: "Banner", title: "Spanduk Warung Makan", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800", price: "Mulai 100k" },
  { id: 5, category: "Banner", title: "X-Banner Event Seminar", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800", price: "Mulai 150k" },
  { id: 6, category: "Banner", title: "Billboard Iklan Jalan", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800", price: "Call for Price" },

  // KATEGORI 3: LIVERY
  { id: 7, category: "Livery", title: "Livery Bus Pariwisata", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800", price: "Mulai 500k" },
  { id: 8, category: "Livery", title: "Branding Mobil Operasional", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800", price: "Mulai 350k" },
  { id: 9, category: "Livery", title: "Decal Motor Custom", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800", price: "Mulai 250k" },
];

// --- FUNGSI KLIK WA ---
const handleOrder = (title, category) => {
  const text = `Halo, saya tertarik pesan desain kategori *${category}* seperti project *${title}*. Bisa diskusi lebih lanjut?`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
};

// --- CUSTOM CURSOR ---
const CustomCursor = () => {
  const dot = useRef(null);
  const outline = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if(dot.current) { dot.current.style.left = `${e.clientX}px`; dot.current.style.top = `${e.clientY}px`; }
      if(outline.current) { outline.current.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" }); }
    };
    window.addEventListener("mousemove", move); return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="hidden md:block"><div ref={dot} className="cursor-dot -translate-x-1/2 -translate-y-1/2"/><div ref={outline} className="cursor-outline -translate-x-1/2 -translate-y-1/2"/></div>;
};

// --- SVG LAYER ---
const DigitalDust = () => (
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <svg className="w-full h-full animate-pulse" viewBox="0 0 100 100" preserveAspectRatio="none">
      <rect x="10" y="20" width="0.5" height="0.5" fill="#CCF381" /> 
      <rect x="80" y="10" width="1" height="1" fill="#5D3FD3" />
      <circle cx="50" cy="50" r="0.2" fill="#CCF381" /> 
      <rect x="90" y="80" width="0.5" height="0.5" fill="#CCF381" />
    </svg>
  </div>
);

// --- COMPONENT: MARQUEE ---
const Marquee = () => (
  <div className="bg-brand-lime py-4 overflow-hidden border-y-2 border-brand-dark rotate-[-2deg] scale-110 relative z-20 my-20 shadow-[0_0_50px_rgba(204,243,129,0.3)]">
    <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap font-bold text-brand-dark uppercase tracking-wider text-xl">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="flex items-center gap-4">
          Social Media <span className="text-brand-purple">✦</span> Banner Design <span className="text-brand-purple">✦</span> Livery Custom
        </span>
      ))}
    </div>
  </div>
);

// --- APP UTAMA ---
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("Social Media"); // State untuk Tab Gallery
  const audioRef = useRef(new Audio(MUSIC_URL));
  
  // PARALLAX LOGIC
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);   
  const yText = useTransform(scrollY, [0, 1000], [0, 50]);  
  const yFore = useTransform(scrollY, [0, 1000], [0, -400]); 

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    audioRef.current.loop = true;
    audioRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  // Filter items based on active tab
  const filteredItems = PORTFOLIO_ITEMS.filter(item => item.category === activeTab);

  return (
    <div className="bg-brand-dark text-brand-white min-h-screen relative overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark">
      <CustomCursor />
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-10"></div>

      {/* --- 1. OPENING GATE --- */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div className="fixed inset-0 z-[100] flex flex-col md:flex-row">
            <motion.div exit={{ x: "-100%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} className="w-full md:w-1/2 h-full bg-brand-purple flex items-center justify-end pr-12 relative z-20 border-r border-brand-lime/20">
               <h1 className="text-8xl font-black text-brand-lime opacity-20">PORT</h1>
            </motion.div>
            <motion.div exit={{ x: "100%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} className="w-full md:w-1/2 h-full bg-brand-purple flex items-center justify-start pl-12 relative z-20 border-l border-brand-lime/20">
               <h1 className="text-8xl font-black text-brand-lime opacity-20">FOLIO</h1>
            </motion.div>
            <motion.div exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
               <button onClick={handleOpen} className="w-32 h-32 rounded-full bg-brand-lime text-brand-dark font-bold text-xl uppercase tracking-widest hover:scale-110 transition-transform shadow-[0_0_40px_rgba(204,243,129,0.5)]">Enter</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- KONTEN UTAMA --- */}
      <div className={`relative z-10 transition-opacity duration-1000 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>

        {/* NAV */}
        <nav className="fixed top-0 w-full z-40 px-6 py-6 mix-blend-difference text-brand-white">
           <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="text-2xl font-black tracking-tighter">ALEX<span className="text-brand-lime">.</span></div>
              <button onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, '_blank')} className="border border-white/20 px-6 py-2 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-colors font-bold text-sm">Contact Me</button>
           </div>
        </nav>
        
        {/* --- HERO SECTION --- */}
        <header className="h-[120vh] relative overflow-hidden flex items-center justify-center pt-20">
           <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <DigitalDust />
           </motion.div>

           <motion.div style={{ y: yText }} className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="inline-block px-4 py-2 bg-brand-lime/10 border border-brand-lime/20 text-brand-lime rounded-full text-sm font-bold">
                    👋 Open for Commission
                 </motion.div>
                 <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">
                    CREATIVE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-purple">DESIGNER</span>
                 </h1>
                 <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                    Spesialis desain Social Media, Banner Promosi, dan Livery Kendaraan yang estetik dan menjual.
                 </p>
                 <div className="flex gap-4 pt-4">
                    <button onClick={() => document.getElementById('gallery').scrollIntoView({behavior: 'smooth'})} className="bg-brand-purple hover:bg-brand-lime hover:text-brand-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-purple/20">Lihat Portfolio</button>
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-brand-purple rounded-full blur-[100px] opacity-30 animate-pulse"></div>
                 <motion.img 
                   initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}
                   src="https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800" 
                   className="relative w-full md:w-[80%] mx-auto rounded-[3rem] rotate-3 border-4 border-brand-dark/50 hover:rotate-0 transition-transform duration-500 shadow-2xl"
                 />
              </div>
           </motion.div>

           <motion.div style={{ y: yFore }} className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-[20%] right-[10%] bg-[#1E1E1E] p-4 rounded-2xl border border-white/10 shadow-2xl rotate-12">
                 <Monitor size={48} className="text-purple-400" />
              </div>
              <div className="absolute bottom-[30%] left-[5%] bg-[#1E1E1E] p-4 rounded-2xl border border-white/10 shadow-2xl -rotate-12">
                 <ImageIcon size={48} className="text-brand-lime" />
              </div>
           </motion.div>
        </header>

        <Marquee />

        {/* --- GALLERY SECTION (TABS) --- */}
        <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto min-h-screen">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-brand-purple font-bold tracking-widest uppercase">My Portfolio</h2>
              <h3 className="text-5xl font-black">SELECTED WORKS</h3>
           </div>

           {/* TABS BUTTONS */}
           <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Social Media", "Banner", "Livery"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                    activeTab === tab 
                    ? "bg-brand-lime text-brand-dark border-brand-lime scale-105 shadow-[0_0_20px_rgba(204,243,129,0.4)]" 
                    : "bg-transparent text-gray-400 border-white/10 hover:border-brand-purple hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
           </div>
           
           {/* GALLERY GRID */}
           <motion.div 
             layout
             className="grid md:grid-cols-3 gap-8"
           >
             <AnimatePresence mode='popLayout'>
               {filteredItems.map((item) => (
                 <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#151525] rounded-[2rem] overflow-hidden border border-white/5 group hover:border-brand-purple/50 transition-all shadow-xl"
                 >
                    {/* Image Area */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                       <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button 
                            onClick={() => handleOrder(item.title, item.category)}
                            className="bg-brand-lime text-brand-dark px-6 py-2 rounded-full font-bold text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            <MessageCircle size={16}/> Pesan Ini
                          </button>
                       </div>
                    </div>
                    {/* Content Area */}
                    <div className="p-6">
                       <div className="flex justify-between items-start mb-2">
                          <span className="text-brand-lime text-xs font-bold uppercase tracking-wider px-2 py-1 bg-brand-lime/10 rounded-md">{item.category}</span>
                       </div>
                       <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-purple transition-colors">{item.title}</h3>
                       <p className="text-gray-400 text-sm">{item.price}</p>
                    </div>
                 </motion.div>
               ))}
             </AnimatePresence>
           </motion.div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="py-32 px-6 text-center">
           <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-purple to-blue-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-20"></div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">BUTUH DESAIN KEREN?</h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto relative z-10">Konsultasikan kebutuhan desainmu sekarang. Gratis tanya-tanya!</p>
              <button 
                onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, '_blank')}
                className="bg-brand-lime text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-10 shadow-xl flex items-center gap-3 mx-auto"
              >
                 <MessageCircle size={24}/> Chat WhatsApp
              </button>
           </div>
        </section>

        <footer className="py-10 text-center text-gray-500 text-sm">
           © 2026 Alexander Design. All Rights Reserved.
        </footer>
      </div>

      {/* --- MUSIC PLAYER --- */}
      {isOpen && (
        <button onClick={() => { if(isPlaying) audioRef.current.pause(); else audioRef.current.play(); setIsPlaying(!isPlaying); }} className="fixed bottom-8 right-8 z-50 group">
          <div className={`w-14 h-14 rounded-full border border-brand-lime/30 bg-brand-dark/80 backdrop-blur flex items-center justify-center text-brand-lime shadow-2xl ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
             <Music size={20} />
          </div>
        </button>
      )}

    </div>
  );
}

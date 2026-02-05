import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  ArrowRight, Layout, Smartphone, PenTool, Music, MousePointer2, 
  Code, Figma, X, Filter, MessageCircle, Image as ImageIcon, 
  Truck, Monitor, Cpu, Layers, Palette, Laptop
} from 'lucide-react';

// --- CONFIG ---
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const WA_NUMBER = "6281234567890"; // GANTI NOMOR WA

// --- DATA: TOOLS / SOFTWARE ---
const TOOLS = [
  { name: "Photoshop", icon: "PS", color: "#31A8FF" },
  { name: "Illustrator", icon: "AI", color: "#FF9A00" },
  { name: "CorelDraw", icon: "CD", color: "#00E078" },
  { name: "Figma", icon: "FG", color: "#A259FF" },
  { name: "After Effects", icon: "AE", color: "#CF96FD" },
];

// --- DATA: PORTFOLIO ---
const PORTFOLIO_ITEMS = [
  { id: 1, category: "Social Media", title: "IG Feeds Coffee Shop", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800", price: "Mulai 50k/slide" },
  { id: 2, category: "Social Media", title: "Fashion Brand Story", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800", price: "Paket 300k" },
  { id: 3, category: "Social Media", title: "Gym Promotion", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800", price: "Mulai 50k" },
  { id: 4, category: "Banner", title: "Spanduk Warung Makan", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800", price: "Mulai 100k" },
  { id: 5, category: "Banner", title: "X-Banner Seminar", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800", price: "Mulai 150k" },
  { id: 6, category: "Livery", title: "Livery Bus Pariwisata", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800", price: "Mulai 500k" },
  { id: 7, category: "Livery", title: "Branding Mobil Kantor", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800", price: "Mulai 350k" },
];

// --- FUNGSI KLIK WA ---
const handleOrder = (msg) => {
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
};

// --- COMPONENTS ---
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

const DigitalDust = () => (
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <svg className="w-full h-full animate-pulse" viewBox="0 0 100 100" preserveAspectRatio="none">
      <rect x="10" y="20" width="0.5" height="0.5" fill="#CCF381" /> 
      <rect x="80" y="10" width="1" height="1" fill="#5D3FD3" />
      <circle cx="50" cy="50" r="0.2" fill="#CCF381" /> 
    </svg>
  </div>
);

const Marquee = () => (
  <div className="bg-brand-lime py-4 overflow-hidden border-y-2 border-brand-dark rotate-[-1deg] scale-105 relative z-20 shadow-[0_0_50px_rgba(204,243,129,0.2)]">
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
  const [activeTab, setActiveTab] = useState("Social Media");
  const audioRef = useRef(new Audio(MUSIC_URL));
  
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

  const filteredItems = PORTFOLIO_ITEMS.filter(item => item.category === activeTab);

  return (
    <div className="bg-brand-dark text-brand-white min-h-screen relative overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark">
      <CustomCursor />
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-10"></div>

      {/* --- OPENING GATE --- */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div className="fixed inset-0 z-[100] flex flex-col md:flex-row">
            <motion.div exit={{ x: "-100%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} className="w-full md:w-1/2 h-full bg-brand-purple flex items-center justify-end pr-12 relative z-20 border-r border-brand-lime/20">
               <h1 className="text-8xl font-black text-brand-lime opacity-20">ALEX</h1>
            </motion.div>
            <motion.div exit={{ x: "100%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} className="w-full md:w-1/2 h-full bg-brand-purple flex items-center justify-start pl-12 relative z-20 border-l border-brand-lime/20">
               <h1 className="text-8xl font-black text-brand-lime opacity-20">DESIGN</h1>
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
              <button onClick={() => handleOrder("Halo, saya mau tanya-tanya desain")} className="border border-white/20 px-6 py-2 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-colors font-bold text-sm">Contact Me</button>
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
                    👋 Freelance Graphic Designer
                 </motion.div>
                 <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">
                    VISUAL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-purple">STORYTELLER</span>
                 </h1>
                 <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                    Spesialis desain Social Media, Banner Promosi, dan Livery Kendaraan yang estetik dan menjual.
                 </p>
                 <div className="flex gap-4 pt-4">
                    <button onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})} className="bg-brand-purple hover:bg-brand-lime hover:text-brand-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-purple/20">Tentang Gua</button>
                    <button onClick={() => document.getElementById('gallery').scrollIntoView({behavior: 'smooth'})} className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Lihat Karya</button>
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-brand-purple rounded-full blur-[100px] opacity-30 animate-pulse"></div>
                 <motion.img 
                   initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}
                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" 
                   className="relative w-full md:w-[80%] mx-auto rounded-[3rem] rotate-3 border-4 border-brand-dark/50 hover:rotate-0 transition-transform duration-500 shadow-2xl"
                 />
              </div>
           </motion.div>

           <motion.div style={{ y: yFore }} className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-[20%] right-[10%] bg-[#1E1E1E] p-4 rounded-2xl border border-white/10 shadow-2xl rotate-12">
                 <Palette size={48} className="text-purple-400" />
              </div>
              <div className="absolute bottom-[30%] left-[5%] bg-[#1E1E1E] p-4 rounded-2xl border border-white/10 shadow-2xl -rotate-12">
                 <Layers size={48} className="text-brand-lime" />
              </div>
           </motion.div>
        </header>

        <Marquee />

        {/* --- ABOUT & TOOLS SECTION --- */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Story (Kiri) */}
            <div className="space-y-8">
              <div>
                 <h2 className="text-brand-purple font-bold tracking-widest uppercase mb-2">About Me</h2>
                 <h3 className="text-5xl font-black mb-6">WHO AM I?</h3>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <p>
                  Halo! Gua <span className="text-brand-lime font-bold">Alex</span>, seorang desainer grafis yang berbasis di Padang. 
                  Gua percaya desain itu bukan cuma soal gambar bagus, tapi soal <strong>komunikasi</strong>.
                </p>
                <p>
                  Berawal dari hobi ngulik CorelDraw pas sekolah, sekarang gua fokus ngebantu UMKM dan brand lokal buat tampil lebih profesional. 
                  Gua spesialis di desain yang butuh ketelitian tinggi kayak <strong>Livery Bus</strong> dan <strong>Layout Social Media</strong>.
                </p>
                <p>
                  Kalau lu butuh desainer yang asik diajak diskusi dan nggak kaku, <em>you found the right guy.</em>
                </p>
              </div>
              <div className="flex gap-8 pt-4">
                 <div>
                    <h4 className="text-3xl font-bold text-white">3+</h4>
                    <p className="text-sm text-gray-500">Years Exp</p>
                 </div>
                 <div>
                    <h4 className="text-3xl font-bold text-white">50+</h4>
                    <p className="text-sm text-gray-500">Happy Clients</p>
                 </div>
              </div>
            </div>

            {/* Tools (Kanan - Grid) */}
            <div className="bg-[#151525] p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full"></div>
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 <Laptop className="text-brand-lime"/> My Arsenal
               </h3>
               
               <div className="grid grid-cols-2 gap-4">
                  {TOOLS.map((tool, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-purple/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-brand-dark" style={{ backgroundColor: tool.color }}>
                        {tool.icon}
                      </div>
                      <span className="font-bold text-sm">{tool.name}</span>
                    </motion.div>
                  ))}
               </div>
               
               <div className="mt-8 p-4 bg-brand-lime/10 rounded-xl border border-brand-lime/20 text-center">
                  <p className="text-brand-lime text-xs font-bold uppercase tracking-widest">Hardware: PC High-End Ready Render</p>
               </div>
            </div>

          </div>
        </section>

        {/* --- SERVICES (WHAT I SELL) --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-12">
              <div>
                 <h2 className="text-brand-purple font-bold tracking-widest uppercase mb-2">Services</h2>
                 <h3 className="text-5xl font-black">WHAT I SELL</h3>
              </div>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div whileHover={{ y: -10 }} className="bg-[#151525] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
                 <Layout size={40} className="text-brand-lime mb-6" />
                 <h3 className="text-2xl font-bold mb-4">Social Media</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6">Desain feeds IG, Story, dan Ads yang rapi dan konsisten dengan branding lu.</p>
                 <ul className="text-xs text-gray-500 space-y-2 mb-6 border-t border-white/10 pt-4">
                    <li>• Instagram Feeds/Story</li>
                    <li>• Carousel Microblog</li>
                    <li>• Poster Event Digital</li>
                 </ul>
                 <ArrowRight className="text-brand-lime group-hover:translate-x-2 transition-transform" />
              </motion.div>

              {/* Card 2 */}
              <motion.div whileHover={{ y: -10 }} className="bg-brand-purple p-8 rounded-[2rem] relative overflow-hidden group md:-mt-8 shadow-2xl">
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-lime rounded-full blur-2xl opacity-50"></div>
                 <Image-Icon size={40} className="text-white mb-6" />
                 <h3 className="text-2xl font-bold mb-4">Banner & Cetak</h3>
                 <p className="text-white/80 text-sm leading-relaxed mb-6">Desain siap cetak resolusi tinggi. Warna dijamin aman pas dicetak.</p>
                 <ul className="text-xs text-white/60 space-y-2 mb-6 border-t border-white/20 pt-4">
                    <li>• Spanduk / Banner</li>
                    <li>• X-Banner / Roll Banner</li>
                    <li>• Brosur & Kartu Nama</li>
                 </ul>
                 <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
              </motion.div>

              {/* Card 3 */}
              <motion.div whileHover={{ y: -10 }} className="bg-[#151525] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
                 <Truck size={40} className="text-brand-lime mb-6" />
                 <h3 className="text-2xl font-bold mb-4">Livery Custom</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6">Desain stripping mobil/bus yang presisi sesuai pola kendaraan.</p>
                 <ul className="text-xs text-gray-500 space-y-2 mb-6 border-t border-white/10 pt-4">
                    <li>• Livery Bus Pariwisata</li>
                    <li>• Branding Mobil Kantor</li>
                    <li>• Decal Motor</li>
                 </ul>
                 <ArrowRight className="text-brand-lime group-hover:translate-x-2 transition-transform" />
              </motion.div>
           </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto min-h-screen">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-brand-purple font-bold tracking-widest uppercase">My Portfolio</h2>
              <h3 className="text-5xl font-black">SELECTED WORKS</h3>
           </div>

           <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Social Media", "Banner", "Livery"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                    activeTab === tab 
                    ? "bg-brand-lime text-brand-dark border-brand-lime scale-105" 
                    : "bg-transparent text-gray-400 border-white/10 hover:border-brand-purple hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
           </div>
           
           <motion.div layout className="grid md:grid-cols-3 gap-8">
             <AnimatePresence mode='popLayout'>
               {filteredItems.map((item) => (
                 <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-[#151525] rounded-[2rem] overflow-hidden border border-white/5 group hover:border-brand-purple/50 transition-all shadow-xl"
                 >
                    <div className="aspect-[4/3] overflow-hidden relative">
                       <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button 
                            onClick={() => handleOrder(`Halo, saya tertarik pesan desain kategori ${item.category} seperti project ${item.title}.`)}
                            className="bg-brand-lime text-brand-dark px-6 py-2 rounded-full font-bold text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            <MessageCircle size={16}/> Pesan Ini
                          </button>
                       </div>
                    </div>
                    <div className="p-6">
                       <div className="flex justify-between items-start mb-2">
                          <span className="text-brand-lime text-xs font-bold uppercase tracking-wider px-2 py-1 bg-brand-lime/10 rounded-md">{item.category}</span>
                       </div>
                       <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
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
              <button 
                onClick={() => handleOrder("Halo bro, mau tanya harga desain dong.")}
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

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { ArrowRight, Download, Layout, Smartphone, PenTool, Instagram, Linkedin, Mail, Music, MousePointer2, Code, Figma } from 'lucide-react';

// --- MUSIC URL ---
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

// --- CUSTOM CURSOR COMPONENT ---
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

// --- SVG LAYERS (DIGITAL DUST & SHAPES) ---
const DigitalDust = () => (
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <svg className="w-full h-full animate-pulse" viewBox="0 0 100 100" preserveAspectRatio="none">
      <rect x="10" y="20" width="0.5" height="0.5" fill="#CCF381" /> 
      <rect x="80" y="10" width="1" height="1" fill="#5D3FD3" />
      <circle cx="50" cy="50" r="0.2" fill="#CCF381" /> 
      <rect x="90" y="80" width="0.5" height="0.5" fill="#CCF381" />
      <path d="M20 90 L22 92 L20 94 Z" fill="#5D3FD3" />
    </svg>
  </div>
);

// --- COMPONENT: MARQUEE (RUNNING TEXT) ---
const Marquee = () => (
  <div className="bg-brand-lime py-4 overflow-hidden border-y-2 border-brand-dark rotate-[-2deg] scale-110 relative z-20 my-20 shadow-[0_0_50px_rgba(204,243,129,0.3)]">
    <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap font-bold text-brand-dark uppercase tracking-wider text-xl">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="flex items-center gap-4">
          Creative Design <span className="text-brand-purple">✦</span> Development <span className="text-brand-purple">✦</span> Branding
        </span>
      ))}
    </div>
  </div>
);

// --- APP UTAMA ---
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(MUSIC_URL));
  
  // PARALLAX LOGIC
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);   // Background lambat
  const yText = useTransform(scrollY, [0, 1000], [0, 50]);  // Teks agak diam
  const yFore = useTransform(scrollY, [0, 1000], [0, -400]); // Elemen depan ngebut

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

  return (
    <div className="bg-brand-dark text-brand-white min-h-screen relative overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark">
      <CustomCursor />
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none opacity-10"></div>

      {/* --- 1. OPENING GATE (CYBER CURTAIN) --- */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div className="fixed inset-0 z-[100] flex flex-col md:flex-row">
            {/* Panel Kiri */}
            <motion.div exit={{ x: "-100%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} className="w-full md:w-1/2 h-full bg-brand-purple flex items-center justify-end pr-12 relative z-20 border-r border-brand-lime/20">
               <h1 className="text-8xl font-black text-brand-lime opacity-20">PORT</h1>
            </motion.div>
            {/* Panel Kanan */}
            <motion.div exit={{ x: "100%" }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} className="w-full md:w-1/2 h-full bg-brand-purple flex items-center justify-start pl-12 relative z-20 border-l border-brand-lime/20">
               <h1 className="text-8xl font-black text-brand-lime opacity-20">FOLIO</h1>
            </motion.div>
            {/* Tombol Tengah */}
            <motion.div exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
               <button onClick={handleOpen} className="w-32 h-32 rounded-full bg-brand-lime text-brand-dark font-bold text-xl uppercase tracking-widest hover:scale-110 transition-transform shadow-[0_0_40px_rgba(204,243,129,0.5)]">
                 Enter
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- KONTEN UTAMA --- */}
      <div className={`relative z-10 transition-opacity duration-1000 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>

        {/* --- NAV --- */}
        <nav className="fixed top-0 w-full z-40 px-6 py-6 mix-blend-difference text-brand-white">
           <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="text-2xl font-black tracking-tighter">JENNY<span className="text-brand-lime">.</span></div>
              <button className="border border-white/20 px-6 py-2 rounded-full hover:bg-brand-lime hover:text-brand-dark transition-colors font-bold text-sm">Let's Talk</button>
           </div>
        </nav>
        
        {/* --- HERO SECTION (DEEP PARALLAX) --- */}
        <header className="h-[120vh] relative overflow-hidden flex items-center justify-center pt-20">
           
           {/* LAYER 1: BACK (GRID & PARTICLES) */}
           <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <DigitalDust />
           </motion.div>

           {/* LAYER 2: MID (TEXT & IMAGE) */}
           <motion.div style={{ y: yText }} className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="inline-block px-4 py-2 bg-brand-lime/10 border border-brand-lime/20 text-brand-lime rounded-full text-sm font-bold">
                    👋 Available for Freelance
                 </motion.div>
                 <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">
                    PRODUCT <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-purple">DESIGNER</span>
                 </h1>
                 <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                    Menciptakan pengalaman digital yang imersif melalui desain UI/UX yang fungsional dan estetika modern.
                 </p>
                 <div className="flex gap-4 pt-4">
                    <button className="bg-brand-purple hover:bg-brand-lime hover:text-brand-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-purple/20">View Projects</button>
                    <button className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Download CV</button>
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

           {/* LAYER 3: FOREGROUND (FLOATING UI ELEMENTS - FAST) */}
           <motion.div style={{ y: yFore }} className="absolute inset-0 z-20 pointer-events-none">
              {/* Floating Figma Icon */}
              <div className="absolute top-[20%] right-[10%] bg-[#1E1E1E] p-4 rounded-2xl border border-white/10 shadow-2xl rotate-12">
                 <Figma size={48} className="text-purple-400" />
              </div>
              {/* Floating Code Icon */}
              <div className="absolute bottom-[30%] left-[5%] bg-[#1E1E1E] p-4 rounded-2xl border border-white/10 shadow-2xl -rotate-12">
                 <Code size={48} className="text-brand-lime" />
              </div>
              {/* Floating Cursor */}
              <div className="absolute top-[40%] left-[40%] text-brand-purple animate-bounce">
                 <MousePointer2 size={64} fill="currentColor" />
              </div>
           </motion.div>
        </header>

        {/* --- MARQUEE --- */}
        <Marquee />

        {/* --- SERVICES (BENTO GRID STYLE) --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-12">
              <h2 className="text-5xl font-black">MY SERVICES</h2>
              <p className="text-gray-400 hidden md:block">Specialized in</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div whileHover={{ y: -10 }} className="bg-[#151525] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/20 blur-3xl rounded-full"></div>
                 <Layout size={40} className="text-brand-lime mb-6" />
                 <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6">Merancang interface yang intuitif dengan fokus pada pengalaman pengguna.</p>
                 <ArrowRight className="text-brand-lime group-hover:translate-x-2 transition-transform" />
              </motion.div>

              {/* Card 2 (Highlight) */}
              <motion.div whileHover={{ y: -10 }} className="bg-brand-purple p-8 rounded-[2rem] relative overflow-hidden group md:-mt-8 shadow-2xl shadow-brand-purple/20">
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-lime rounded-full blur-2xl opacity-50"></div>
                 <Smartphone size={40} className="text-white mb-6" />
                 <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
                 <p className="text-white/80 text-sm leading-relaxed mb-6">Aplikasi iOS & Android yang modern dan responsif untuk startup.</p>
                 <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
              </motion.div>

              {/* Card 3 */}
              <motion.div whileHover={{ y: -10 }} className="bg-[#151525] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full"></div>
                 <PenTool size={40} className="text-brand-lime mb-6" />
                 <h3 className="text-2xl font-bold mb-4">Branding</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6">Identitas visual yang kuat untuk membedakan bisnis Anda.</p>
                 <ArrowRight className="text-brand-lime group-hover:translate-x-2 transition-transform" />
              </motion.div>
           </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <section className="py-32 px-6 text-center">
           <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-purple to-blue-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-20"></div>
              <h2 className="text-4xl md:text-7xl font-black mb-8 relative z-10">LET'S CREATE SOMETHING EPIC</h2>
              <button className="bg-brand-lime text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-10 shadow-xl">
                 Start Project
              </button>
           </div>
        </section>

        <footer className="py-10 text-center text-gray-500 text-sm">
           © 2026 Jenny Design. All Rights Reserved.
        </footer>
      </div>

      {/* --- MUSIC PLAYER (FLOAT) --- */}
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

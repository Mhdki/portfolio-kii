import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { ArrowRight, ArrowUpRight, Layout, PenTool, Image as ImageIcon, MessageCircle, Instagram, Dribbble, Linkedin, MousePointer2 } from 'lucide-react';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; 
const DATA = {
  name: "ALEX VOSS",
  role: "VISUAL DESIGNER",
  location: "Padang, ID",
  bio: "Membantu brand tampil beda dengan visual yang berkarakter. Spesialis Social Media, Banner, & Livery.",
  stats: [
    { num: "3+", label: "Years Exp" },
    { num: "50+", label: "Projects" },
    { num: "100%", label: "Satisfaction" }
  ],
  services: [
    { title: "Social Media", desc: "Feeds, Story, Ads", icon: <Layout/> },
    { title: "Banner Design", desc: "Print & Digital", icon: <ImageIcon/> },
    { title: "Livery Custom", desc: "Vehicle Branding", icon: <PenTool/> },
  ],
  portfolio: [
    { id: 1, cat: "Social Media", title: "Kopi Kenangan Feeds", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800" },
    { id: 2, cat: "Banner", title: "Event Seminar Nasional", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
    { id: 3, cat: "Livery", title: "Bus Pariwisata PO. Haryanto", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" },
    { id: 4, cat: "Social Media", title: "Gym Promotion", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" },
    { id: 5, cat: "Banner", title: "Menu Restoran", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800" },
    { id: 6, cat: "Livery", title: "Branding Mobil Kantor", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800" },
  ]
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
  return <div className="hidden md:block"><div ref={dot} className="cursor-dot"/><div ref={outline} className="cursor-outline"/></div>;
};

const Marquee = () => (
  <div className="bg-accent py-3 overflow-hidden border-y border-dark relative z-20">
    <div className="flex gap-12 animate-marquee whitespace-nowrap font-display font-bold text-dark text-4xl uppercase items-center">
      {[...Array(6)].map((_, i) => (
        <React.Fragment key={i}>
          <span>Visual Identity</span>
          <span className="w-4 h-4 bg-dark rounded-full"></span>
          <span>Social Media</span>
          <span className="w-4 h-4 bg-dark rounded-full"></span>
          <span>Livery Design</span>
          <span className="w-4 h-4 bg-dark rounded-full"></span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const BentoItem = ({ children, className, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-card rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group hover:border-accent/30 transition-all duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

// --- APP UTAMA ---
export default function App() {
  const [activeTab, setActiveTab] = useState("All");
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  const handleWA = () => window.open(`https://wa.me/${WA_NUMBER}`, '_blank');
  
  const filteredPortfolio = activeTab === "All" 
    ? DATA.portfolio 
    : DATA.portfolio.filter(item => item.cat === activeTab);

  return (
    <div className="min-h-screen bg-dark text-secondary font-body selection:bg-accent selection:text-dark">
      <CustomCursor />
      <div className="bg-noise z-50"></div>
      
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 bg-[size:40px_40px] bg-grid opacity-[0.03] pointer-events-none"></div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-6 left-0 right-0 z-40 flex justify-center px-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-8">
           <span className="font-display font-bold text-xl tracking-tighter">AV<span className="text-accent">.</span></span>
           <div className="hidden md:flex gap-6 text-sm font-medium text-muted">
             <a href="#about" className="hover:text-white transition-colors">About</a>
             <a href="#services" className="hover:text-white transition-colors">Services</a>
             <a href="#work" className="hover:text-white transition-colors">Work</a>
           </div>
           <button onClick={handleWA} className="bg-accent text-dark px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wide hover:scale-105 transition-transform">
             Let's Talk
           </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20">
        <motion.div style={{ y: yHero }} className="text-center z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-muted">Available for freelance</span>
          </div>
          
          <h1 className="font-display text-[13vw] leading-[0.85] font-black tracking-tighter text-secondary mix-blend-difference">
            DIGITAL <br/> <span className="text-stroke">DESIGNER</span>
          </h1>
          
          <p className="max-w-md mx-auto text-muted text-lg leading-relaxed">
            {DATA.bio}
          </p>

          <div className="flex gap-4 justify-center pt-8">
             <button onClick={() => document.getElementById('work').scrollIntoView()} className="group w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <ArrowDown size={24} className="group-hover:text-dark group-hover:animate-bounce"/>
             </button>
          </div>
        </motion.div>

        {/* Hero Image / Abstract */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full"></div>
        </div>
      </header>

      {/* --- MARQUEE --- */}
      <Marquee />

      {/* --- BENTO GRID: ABOUT & SERVICES --- */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 grid-rows-2">
           
           {/* 1. Profile Card (Large) */}
           <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[400px]">
              <div>
                <h3 className="text-accent font-bold tracking-widest uppercase mb-4">About Me</h3>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Menciptakan visual yang <span className="text-accent">berkarakter</span> untuk brand lokal.
                </h2>
                <p className="text-muted leading-relaxed">
                  Gua Alex, desainer yang fokus pada detail. Dari livery bus yang kompleks sampai layout IG yang rapi. Gua gabungin estetika modern dengan kebutuhan marketing lu.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                 <Instagram className="text-muted hover:text-white cursor-pointer"/>
                 <Dribbble className="text-muted hover:text-white cursor-pointer"/>
                 <Linkedin className="text-muted hover:text-white cursor-pointer"/>
              </div>
           </BentoItem>

           {/* 2. Stats */}
           <BentoItem className="md:col-span-1 bg-accent text-dark border-none">
              <h3 className="font-display text-5xl font-black mb-1">{DATA.stats[0].num}</h3>
              <p className="font-bold text-sm uppercase tracking-wide opacity-80">{DATA.stats[0].label}</p>
           </BentoItem>
           <BentoItem className="md:col-span-1">
              <h3 className="font-display text-5xl font-black text-white mb-1">{DATA.stats[1].num}</h3>
              <p className="font-bold text-sm uppercase tracking-wide text-muted">{DATA.stats[1].label}</p>
           </BentoItem>

           {/* 3. Services List */}
           <BentoItem className="md:col-span-2 flex flex-col justify-center">
              <h3 className="text-muted text-xs font-bold uppercase tracking-widest mb-6">Services</h3>
              <div className="space-y-4">
                 {DATA.services.map((s, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 group cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className="text-accent">{s.icon}</div>
                         <div>
                            <h4 className="font-display font-bold text-xl">{s.title}</h4>
                            <p className="text-xs text-muted">{s.desc}</p>
                         </div>
                      </div>
                      <ArrowUpRight className="text-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
                   </div>
                 ))}
              </div>
           </BentoItem>

        </div>
      </section>

      {/* --- PORTFOLIO GALLERY --- */}
      <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="font-display text-6xl md:text-8xl font-black text-white">
              SELECTED <br/><span className="text-accent">WORKS</span>
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
               {["All", "Social Media", "Banner", "Livery"].map(tab => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`px-6 py-2 rounded-full border text-sm font-bold uppercase transition-all ${activeTab === tab ? 'bg-white text-dark border-white' : 'border-white/20 text-muted hover:border-white hover:text-white'}`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
         </div>

         {/* Grid Portfolio */}
         <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
               {filteredPortfolio.map((item) => (
                 <motion.div 
                   layout
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   key={item.id}
                   className="group relative"
                 >
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-card border border-white/5 relative">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                       
                       {/* Overlay Hover */}
                       <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 p-6 text-center">
                          <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                          <span className="text-accent text-xs font-bold uppercase tracking-widest border border-accent px-3 py-1 rounded-full">{item.cat}</span>
                          <button onClick={() => handleWA()} className="mt-4 bg-white text-dark px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-accent transition-colors">
                            <MessageCircle size={16}/> Pesan Desain Ini
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </AnimatePresence>
         </motion.div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto bg-accent rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
               <h2 className="font-display text-5xl md:text-8xl font-black text-dark mb-8 leading-[0.9]">
                 LET'S WORK <br/> TOGETHER
               </h2>
               <button onClick={handleWA} className="bg-dark text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-2xl">
                 Start a Project <ArrowRight/>
               </button>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
         </div>
      </section>

      <footer className="py-12 text-center border-t border-white/10">
        <p className="text-muted text-xs font-bold uppercase tracking-widest">© 2026 Alex Voss Design. Padang.</p>
      </footer>
    </div>
  );
}

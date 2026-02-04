import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  ArrowRight, ArrowUpRight, Copy, Check, Instagram, Twitter, Dribbble, 
  Menu, X, Sparkles, Code2, PenTool, Cpu
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { PROJECTS, SERVICES, SKILLS } from './data';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; // GANTI NOMOR LU

// --- UTILS ---
const openWA = (msg) => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');

// --- COMPONENTS ---

// 1. PRELOADER (ANIMASI NAMA YANG HILANG TADI)
const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#080808]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="overflow-hidden relative">
        <motion.h1
          className="text-4xl md:text-8xl font-black text-white tracking-tighter text-center"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          onAnimationComplete={() => setTimeout(onComplete, 1500)} // Tahan 1.5 detik baru hilang
        >
          ALEXANDER <span className="text-neutral-600">VOSS</span>
        </motion.h1>
      </div>
    </motion.div>
  );
};

const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: mouseX, y: mouseY }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const hoverStart = (e) => { if(e.target.closest('button, a, .hover-target')) setIsHovering(true); };
    const hoverEnd = (e) => { if(!e.target.closest('button, a, .hover-target')) setIsHovering(false); };
    
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', hoverStart);
    window.addEventListener('mouseout', hoverEnd);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', hoverStart); };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{ 
        x: mousePos.x - (isHovering ? 32 : 8), 
        y: mousePos.y - (isHovering ? 32 : 8),
        width: isHovering ? 64 : 16,
        height: isHovering ? 64 : 16,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    />
  );
};

const Navbar = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-2 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-full hover-target">
      {['Hero', 'Work', 'Services', 'About', 'Contact'].map((item) => (
        <button 
          key={item} 
          onClick={() => scrollTo(item.toLowerCase())}
          className="px-6 py-3 rounded-full text-sm font-medium text-neutral-400 hover:text-black hover:bg-white transition-all"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 relative container mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="z-10"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-sm tracking-widest text-neutral-400 uppercase">Available for work</span>
        </div>
        
        <h1 className="text-[12vw] leading-[0.85] font-black font-display tracking-tighter mb-8">
          DIGITAL <br/>
          <span className="text-neutral-600">ALCHEMIST</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-8 mt-12">
          <p className="text-xl md:text-2xl max-w-xl leading-relaxed text-neutral-300">
            Saya mengubah ide abstrak menjadi aset visual yang menghasilkan profit. 
            Spesialis <span className="text-white font-bold">Branding</span>, <span className="text-white font-bold">Livery</span>, & <span className="text-white font-bold">Social Media</span>.
          </p>
          
          <MagneticButton 
            className="mt-8 md:mt-0 px-8 py-8 bg-white text-black rounded-full font-bold text-lg flex items-center gap-3 group"
            onClick={() => document.getElementById('work')?.scrollIntoView()}
          >
            Lihat Portfolio <ArrowRight className="group-hover:rotate-45 transition-transform duration-300" />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-32 px-6 container mx-auto">
      <div className="flex justify-between items-end mb-20">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">SELECTED<br/><span className="text-neutral-700">WORK</span></h2>
        <span className="hidden md:block font-mono text-neutral-500">(2023 — 2026)</span>
      </div>

      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer hover-target"
          >
            <div className="relative w-full aspect-video md:aspect-[2.35/1] overflow-hidden rounded-lg mb-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.76,0,0.24,1] group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
            </div>
            <div className="flex justify-between items-start border-b border-white/20 pb-8">
              <div>
                <h3 className="text-4xl md:text-6xl font-bold mb-2 group-hover:translate-x-4 transition-transform duration-500">{project.title}</h3>
                <div className="flex gap-4 text-neutral-500 font-mono text-sm uppercase">
                  <span>{project.category}</span>
                  <span>—</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <div className="p-4 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 container mx-auto">
      <div className="mb-20">
        <h2 className="text-sm font-mono tracking-widest text-green-500 mb-4 uppercase">Capabilities</h2>
        <h3 className="text-5xl md:text-7xl font-bold leading-tight">
          Gak cuma desain cantik.<br/>
          Gua bikin desain yang <span className="text-neutral-500">bekerja.</span>
        </h3>
      </div>

      <div className="grid gap-4">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-10 bg-[#111] hover:bg-[#EAEAEA] hover:text-black transition-colors duration-500 rounded-2xl border border-white/5"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 relative z-10">
              <div className="md:w-1/3">
                <h4 className="text-3xl font-bold mb-2">{s.title}</h4>
                <div className="flex gap-2">
                   {s.tags.map(t => <span key={t} className="text-xs border border-current px-2 py-0.5 rounded-full opacity-60">{t}</span>)}
                </div>
              </div>
              <p className="md:w-1/3 text-lg opacity-80 font-medium">{s.description}</p>
              <div className="md:w-1/6 text-right">
                <p className="font-mono text-xl mb-4">{s.price}</p>
                <button 
                  onClick={() => openWA(`Saya mau order service: ${s.title}`)}
                  className="px-6 py-2 bg-white text-black group-hover:bg-black group-hover:text-white rounded-full font-bold text-sm transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- ABOUT SECTION (SUDAH DIPERBAIKI) ---
const About = () => {
  return (
    <section id="about" className="py-32 px-6 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* FOTO DENGAN EFEK HOVER KEREN */}
        <div className="relative group hover-target">
           <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
           <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-800">
             {/* GANTI FOTO DISINI (Pastikan ada di folder public) */}
             <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
               alt="Alexander Voss" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
             />
             {/* STATS OVERLAY */}
             <div className="absolute bottom-6 left-6 right-6 flex justify-between bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div>
                   <span className="block text-2xl font-bold text-white">3+</span>
                   <span className="text-xs text-neutral-400 uppercase tracking-widest">Years Exp</span>
                </div>
                <div className="text-right">
                   <span className="block text-2xl font-bold text-white">50+</span>
                   <span className="text-xs text-neutral-400 uppercase tracking-widest">Projects</span>
                </div>
             </div>
           </div>
        </div>

        {/* KONTEN TEXT & TOOLS */}
        <div className="space-y-10">
          <div>
            <h2 className="text-sm font-mono tracking-widest text-green-500 mb-4 uppercase">The Human Behind Pixels</h2>
            <h3 className="text-5xl font-black mb-6 leading-tight">
              OBSESSED WITH <br/> DETAILS.
            </h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
              Gua bukan sekadar desainer yang "bisa gambar". Gua adalah partner strategis lu. 
              Background gua di UI/UX dan Branding bikin setiap desain gua gak cuma enak dilihat, tapi punya tujuan bisnis yang jelas.
              Kalau lu cari desainer yang bisa diajak debat soal *conversion rate* sambil ngopi, gua orangnya.
            </p>
          </div>

          <div className="border-t border-white/10 pt-10">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Code2 size={16} /> The Arsenal (Tools)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SKILLS.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium text-neutral-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { register, handleSubmit } = useForm();
  return (
    <section id="contact" className="py-32 px-6 container mx-auto">
      <div className="bg-[#EAEAEA] text-black rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-400/30 blur-[150px] rounded-full pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              LET'S SCALE<br/>YOUR BRAND.
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-md">
              Jangan biarkan brand lu tenggelam. Kirim detail project, gua akan balas dengan strategi.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@alexandervoss.com" className="block text-2xl font-bold hover:underline">hello@alexandervoss.com</a>
              <a href="#" className="block text-2xl font-bold hover:underline">+62 812 3456 7890</a>
            </div>
            <div className="flex gap-6 mt-12">
               <Instagram size={32} className="hover:text-green-600 cursor-pointer transition-colors" />
               <Twitter size={32} className="hover:text-green-600 cursor-pointer transition-colors" />
               <Dribbble size={32} className="hover:text-green-600 cursor-pointer transition-colors" />
            </div>
          </div>
          <form onSubmit={handleSubmit((d) => openWA(`Nama: ${d.name}\nProject: ${d.message}`))} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Nama</label>
              <input {...register("name")} className="w-full bg-white border-0 p-6 rounded-2xl text-xl focus:ring-2 focus:ring-black outline-none placeholder:text-neutral-300" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Email</label>
              <input {...register("email")} className="w-full bg-white border-0 p-6 rounded-2xl text-xl focus:ring-2 focus:ring-black outline-none placeholder:text-neutral-300" placeholder="john@company.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Cerita Project</label>
              <textarea {...register("message")} rows={4} className="w-full bg-white border-0 p-6 rounded-2xl text-xl focus:ring-2 focus:ring-black outline-none resize-none placeholder:text-neutral-300" placeholder="Saya butuh branding untuk..." required />
            </div>
            <MagneticButton className="w-full py-6 bg-black text-white rounded-2xl font-bold text-xl hover:bg-neutral-800 transition-colors flex justify-center items-center gap-2">
              Kirim Proposal <Sparkles size={20} />
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="pb-10 pt-20 text-center text-neutral-600 font-mono text-xs uppercase tracking-widest">
    <p>© 2026 ALEXANDER VOSS. ALL RIGHTS RESERVED.</p>
    <p className="mt-2">PADANG, INDONESIA</p>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  // Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#080808] min-h-screen text-[#EAEAEA] overflow-x-hidden">
      <div className="bg-grain" /> 
      
      {/* --- PRELOADER ANIMATION --- */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* --- MAIN CONTENT (Muncul setelah Loading) --- */}
      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Cursor />
          <Navbar />
          <Hero />
          <Work />
          <Services />
          <About /> {/* INI BAGIAN FOTO & TOOLS */}
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
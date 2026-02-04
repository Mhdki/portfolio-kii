import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  ArrowRight, ArrowUpRight, Instagram, Twitter, Dribbble, CheckCircle2, Menu, X, PenTool, Monitor, Image as ImageIcon
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { PROJECTS, SERVICES, SKILLS } from './data';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; 
const openWA = (msg) => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');

// --- COMPONENTS ---

const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="overflow-hidden relative">
        <motion.h1
          className="text-3xl md:text-6xl text-[#D4AF37] tracking-widest text-center italic"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onAnimationComplete={() => setTimeout(onComplete, 1500)}
        >
          Alexander Voss
        </motion.h1>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <span className="font-serif-display text-xl italic tracking-wide">AV.</span>
      <div className="hidden md:flex gap-8">
        {['Services', 'Work', 'Tools', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item.toLowerCase())}
            className="text-xs font-light tracking-[0.2em] uppercase hover:text-[#D4AF37] transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
      <button onClick={() => openWA("Halo, saya ingin diskusi project")} className="text-xs font-bold border-b border-white pb-1 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
        START PROJECT
      </button>
    </motion.nav>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    // FIX HP: min-h-[70vh] biar gak terlalu tinggi di HP, py-20 biar jarak aman.
    <section id="hero" className="min-h-[70vh] md:min-h-screen flex flex-col justify-center items-center px-6 py-24 md:py-0 relative container mx-auto text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#D4AF37] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 max-w-4xl mx-auto"
      >
        <p className="text-[#D4AF37] text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4 md:mb-8">
          Padang, Indonesia
        </p>

        <h1 className="text-[12vw] md:text-[8vw] leading-[1.1] md:leading-[1] font-serif-display font-medium text-white mb-6 md:mb-8">
          Visual Brand <br/> 
          <span className="text-white/40 italic">Specialist.</span>
        </h1>
        
        <p className="text-sm md:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed font-light mb-8 md:mb-12">
          Menaikkan nilai brand Anda melalui <span className="text-white">Social Media</span>, <span className="text-white">Livery</span>, dan <span className="text-white">Banner</span> yang berkelas.
        </p>
        
        <button 
          className="px-8 py-4 bg-white text-black rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Lihat Layanan
        </button>
      </motion.div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 container mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">Services</span>
        <h2 className="text-4xl md:text-5xl text-white font-serif-display mt-4">Apa yang saya kerjakan?</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 border border-white/10 rounded-2xl bg-[#0a0a0a] hover:border-[#D4AF37]/50 transition-all"
          >
            <h4 className="text-2xl text-white font-serif-display mb-4">{s.title}</h4>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">{s.description}</p>
            <div className="flex justify-between items-end border-t border-white/5 pt-6">
              <span className="text-[#D4AF37] font-mono text-sm">{s.price}</span>
              <button onClick={() => openWA(`Tanya service: ${s.title}`)} className="text-white hover:text-[#D4AF37] text-xs uppercase tracking-widest font-bold">
                Order
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- ANIMASI MARQUEE (Di Bawah Fitur) ---
const MarqueeWork = () => {
  const loopProject = [...PROJECTS, ...PROJECTS]; // Duplikasi data biar panjang
  return (
    <div className="py-12 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <motion.div 
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {loopProject.map((p, i) => (
          <div key={i} className="relative w-[250px] aspect-video rounded-lg overflow-hidden opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
             <img src={p.image} className="w-full h-full object-cover" alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- STATIC GALLERY (Diam & Rapi) ---
const StaticGallery = () => {
  // Filter Data
  const sosmed = PROJECTS.filter(p => p.category === 'Social Media');
  const banners = PROJECTS.filter(p => p.category === 'Banner');
  const livery = PROJECTS.filter(p => p.category === 'Livery');

  return (
    <section id="work" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="text-center mb-20">
        <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">Portfolio</span>
        <h2 className="text-4xl md:text-5xl text-white font-serif-display mt-4">Selected Works</h2>
      </div>

      {/* 1. SOCIAL MEDIA (Portrait Layout) */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
           <h3 className="text-2xl text-white font-serif-display italic">Social Media Design</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {sosmed.map(p => (
             <div key={p.id} className="group relative aspect-[4/5] bg-[#111] overflow-hidden rounded-xl">
               <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
               <p className="absolute bottom-4 left-4 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">{p.title}</p>
             </div>
           ))}
        </div>
      </div>

      {/* 2. BANNER (Landscape Layout) */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
           <h3 className="text-2xl text-white font-serif-display italic">Banner & Spanduk</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
           {banners.map(p => (
             <div key={p.id} className="group relative aspect-video bg-[#111] overflow-hidden rounded-xl">
               <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
               <p className="absolute bottom-6 left-6 text-white text-xl font-serif-display italic">{p.title}</p>
             </div>
           ))}
        </div>
      </div>

      {/* 3. LIVERY (Wide Layout) */}
      <div>
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
           <h3 className="text-2xl text-white font-serif-display italic">Vehicle Livery</h3>
        </div>
        <div className="grid gap-8">
           {livery.map(p => (
             <div key={p.id} className="group relative w-full aspect-[2.35/1] bg-[#111] overflow-hidden rounded-xl">
               <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
               <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                 <h4 className="text-2xl md:text-4xl text-white font-serif-display italic">{p.title}</h4>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

// --- TOOLS SECTION ---
const Tools = () => {
  return (
    <section id="tools" className="py-20 px-6 container mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 text-center md:text-left">
           <h3 className="text-3xl text-white font-serif-display mb-4">The Tools.</h3>
           <p className="text-neutral-500 text-sm">Software standar industri yang saya gunakan untuk hasil maksimal.</p>
        </div>
        <div className="md:w-2/3 flex flex-wrap justify-center md:justify-start gap-4">
           {SKILLS.map((skill, i) => (
             <div key={i} className="px-6 py-3 border border-white/10 rounded-full text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-default">
               <span className="text-sm font-medium uppercase tracking-widest">{skill}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { register, handleSubmit } = useForm();
  return (
    <section id="contact" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="bg-[#111] rounded-[2rem] p-8 md:p-20 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37] opacity-10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row gap-16 relative z-10">
          <div className="md:w-1/2">
             <h2 className="text-5xl md:text-6xl text-white font-serif-display mb-6">Let's work together.</h2>
             <p className="text-neutral-400 mb-8 max-w-sm">Siap membuat brand Anda tampil beda? Hubungi saya sekarang.</p>
             <div className="space-y-2">
               <p className="text-xl text-white">hello@alexandervoss.com</p>
               <p className="text-xl text-white">+62 812 3456 7890</p>
             </div>
          </div>
          
          <form onSubmit={handleSubmit((d) => openWA(`Nama: ${d.name}\nProject: ${d.message}`))} className="md:w-1/2 space-y-6">
            <input {...register("name")} className="w-full bg-white/5 border border-white/10 p-4 rounded-lg text-white placeholder:text-neutral-600 focus:border-[#D4AF37] outline-none transition-colors" placeholder="Name" required />
            <input {...register("email")} className="w-full bg-white/5 border border-white/10 p-4 rounded-lg text-white placeholder:text-neutral-600 focus:border-[#D4AF37] outline-none transition-colors" placeholder="Email" required />
            <textarea {...register("message")} rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-lg text-white placeholder:text-neutral-600 focus:border-[#D4AF37] outline-none transition-colors resize-none" placeholder="Project Details" required />
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/10 text-center">
    <span className="font-serif-display text-2xl text-white italic">AV.</span>
    <p className="text-neutral-600 text-xs tracking-widest uppercase mt-4">© 2026 Alexander Voss. Padang, Indonesia.</p>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#E0E0E0] overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Navbar />
          <Hero />
          <Services />
          <MarqueeWork />
          <StaticGallery />
          <Tools /> 
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  ArrowRight, ArrowUpRight, Instagram, Twitter, Dribbble, Zap, Star, Layout, Image as ImageIcon, Layers
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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-hidden">
        <motion.h1
          className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-tighter"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          onAnimationComplete={() => setTimeout(onComplete, 1500)}
        >
          ALEXANDER VOSS
        </motion.h1>
      </div>
    </motion.div>
  );
};

const ColorfulBackground = () => (
  <div className="blob-cont">
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
    <div className="blob blob-3"></div>
  </div>
);

const Navbar = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center"
    >
      <span className="font-black text-2xl tracking-tighter text-[#111] font-heading">AV.</span>
      <div className="hidden md:flex gap-2 p-1 bg-white/50 backdrop-blur-md border border-white/60 rounded-full shadow-sm">
        {['Services', 'Work', 'About', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item.toLowerCase())}
            className="px-5 py-2 text-sm font-bold text-neutral-600 hover:bg-black hover:text-white rounded-full transition-all"
          >
            {item}
          </button>
        ))}
      </div>
      <button onClick={() => openWA("Halo, saya ingin diskusi project")} className="text-sm font-black border-b-2 border-black hover:text-purple-600 hover:border-purple-600 transition-all">
        START PROJECT
      </button>
    </motion.nav>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center px-6 pt-28 pb-10 relative container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* TEXT SIDE (COPYWRITING DIPERBAIKI) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-xs font-bold mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
            AVAILABLE FOR NEW PROJECTS
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1] font-black font-heading text-[#111] mb-6">
            VISUAL YANG <br/> 
            <span className="text-gradient-pop">BIKIN NOLEH.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 max-w-md leading-relaxed font-medium mb-10">
            Bantu brand kamu stop jadi 'biasa aja'. Spesialis desain <strong className="text-black">Social Media</strong>, <strong className="text-black">Livery</strong>, dan <strong className="text-black">Banner</strong> yang berkarakter.
          </p>
          
          <div className="flex gap-4">
             <button 
              className="px-8 py-4 bg-[#111] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl shadow-purple-500/20"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Portfolio 🚀
            </button>
          </div>
        </motion.div>

        {/* PHOTO SIDE (BINGKAI BARU: LAYERED OFFSET) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          {/* Layer Belakang (Warna Solid) */}
          <div className="absolute top-6 right-6 w-[70%] md:w-[80%] aspect-[3/4] bg-gradient-to-br from-purple-500 to-pink-500 rounded-[2.5rem] -z-10 rotate-3"></div>
          
          {/* Layer Depan (Foto) */}
          <div className="relative w-[70%] md:w-[80%] aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
            <img 
              src="/foto-profil.jpg" 
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"}
              alt="Alexander Voss" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 container mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black font-heading">Keahlian Spesifik ⚡</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] glass-card hover:bg-white transition-all group border-2 border-transparent hover:border-purple-200"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-8 flex items-center justify-center text-purple-600 shadow-sm group-hover:scale-110 transition-transform">
               <Layers size={32} />
            </div>
            <h4 className="text-2xl font-bold font-heading mb-4">{s.title}</h4>
            <p className="text-neutral-500 leading-relaxed mb-8 font-medium">{s.description}</p>
            <div className="flex justify-between items-center pt-6 border-t border-neutral-100/50">
              <span className="font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">{s.price}</span>
              <button onClick={() => openWA(`Tanya service: ${s.title}`)} className="px-5 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-purple-600 transition-colors">
                ORDER
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MarqueeWork = () => {
  const loopProject = [...PROJECTS, ...PROJECTS];
  return (
    <div className="py-16 bg-white overflow-hidden my-10">
      <motion.div 
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {loopProject.map((p, i) => (
          <div key={i} className="relative w-[350px] aspect-video rounded-2xl overflow-hidden shadow-lg shadow-purple-100">
             <img src={p.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const StaticGallery = () => {
  const sosmed = PROJECTS.filter(p => p.category === 'Social Media');
  const banners = PROJECTS.filter(p => p.category === 'Banner');
  const livery = PROJECTS.filter(p => p.category === 'Livery');

  return (
    <section id="work" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black font-heading">
          Karya <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Terpilih.</span>
        </h2>
      </div>

      <div className="space-y-32">
        <div>
          <div className="flex items-center gap-4 mb-10">
             <span className="p-3 bg-pink-100 text-pink-600 rounded-2xl"><Instagram size={28}/></span>
             <h3 className="text-4xl font-bold font-heading">Social Media</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {sosmed.map(p => (
               <div key={p.id} className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-500/5 hover:shadow-pink-500/20 transition-all bg-white">
                 <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
             ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
             <span className="p-3 bg-blue-100 text-blue-600 rounded-2xl"><Layout size={28}/></span>
             <h3 className="text-4xl font-bold font-heading">Digital Banner</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             {banners.map(p => (
               <div key={p.id} className="group relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/20 transition-all bg-white">
                 <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
             ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
             <span className="p-3 bg-orange-100 text-orange-600 rounded-2xl"><Zap size={28}/></span>
             <h3 className="text-4xl font-bold font-heading">Vehicle Livery</h3>
          </div>
          <div className="grid gap-8">
             {livery.map(p => (
               <div key={p.id} className="group relative w-full aspect-[2.35/1] rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-500/5 hover:shadow-orange-500/20 transition-all bg-white">
                 <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 container mx-auto">
      <div className="glass-card rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* COPYWRITING DIPERBAIKI: Konsisten pakai "Saya" */}
          <div>
             <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 leading-tight">
               Lebih Dari <br/> <span className="text-purple-600">Sekadar Gambar.</span>
             </h2>
             <p className="text-neutral-600 leading-relaxed mb-6 text-lg font-medium">
               Halo, saya Alexander.
             </p>
             <p className="text-neutral-600 leading-relaxed mb-10 text-lg">
               Saya percaya desain yang hebat itu harus berani dan punya nyawa. Kombinasi warna dan komposisi yang tepat bukan cuma bikin 'cantik', tapi bikin brand kamu diingat.
             </p>
             
             <div>
               <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Senjata Andalan 🛠️</p>
               <div className="flex flex-wrap gap-3">
                 {SKILLS.map((skill, i) => (
                   <span key={i} className="px-5 py-2.5 bg-white rounded-full text-sm font-bold border-2 border-neutral-100 hover:border-purple-500 hover:text-purple-600 transition-colors shadow-sm">
                     {skill}
                   </span>
                 ))}
               </div>
             </div>
          </div>
          
          <div className="relative">
             <div className="relative bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/60 shadow-xl">
                <div className="flex items-center gap-5 mb-8">
                   <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 p-1">
                      <img src="/foto-profil.jpg" className="w-full h-full object-cover rounded-full" />
                   </div>
                   <div>
                      <h4 className="font-bold text-xl">Alexander Voss</h4>
                      <p className="text-sm font-medium text-purple-600">Visual Specialist</p>
                   </div>
                </div>
                {/* QUOTE BARU YANG LEBIH BISNIS */}
                <p className="text-2xl font-heading font-bold leading-snug text-[#111]">
                  "Desain yang bagus itu investasi, bukan biaya."
                </p>
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
    <section id="contact" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Let's Make Magic.
        </h2>
        {/* COPYWRITING DIPERBAIKI */}
        <p className="text-xl text-neutral-600 mb-12 font-medium">
          Punya ide liar? Mari kita eksekusi.
        </p>

        <form onSubmit={handleSubmit((d) => openWA(`Nama: ${d.name}\nProject: ${d.message}`))} className="space-y-4 text-left glass-card p-10 rounded-[2.5rem]">
          <div className="grid md:grid-cols-2 gap-4">
             {/* PLACEHOLDER LEBIH SOPAN */}
             <input {...register("name")} className="w-full bg-white/80 border-2 border-neutral-100 p-4 rounded-2xl text-black font-bold focus:border-purple-500 outline-none transition-colors" placeholder="Nama Kamu" required />
             <input {...register("email")} className="w-full bg-white/80 border-2 border-neutral-100 p-4 rounded-2xl text-black font-bold focus:border-purple-500 outline-none transition-colors" placeholder="Alamat Email" required />
          </div>
          <textarea {...register("message")} rows={4} className="w-full bg-white/80 border-2 border-neutral-100 p-4 rounded-2xl text-black font-bold focus:border-purple-500 outline-none transition-colors resize-none" placeholder="Ceritain detail projectnya..." required />
          <button className="w-full py-5 bg-[#111] text-white font-black text-lg uppercase tracking-widest hover:bg-purple-600 transition-all rounded-2xl shadow-xl shadow-purple-500/20">
            Kirim via WhatsApp 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 text-center mb-20 md:mb-0">
    <span className="font-black text-2xl text-[#111] font-heading">AV.</span>
    <p className="text-neutral-500 text-sm font-medium mt-4">© 2026 Alexander Voss. Padang, ID.</p>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-[#111] overflow-x-hidden relative">
      <ColorfulBackground />
      
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
          <About /> 
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
